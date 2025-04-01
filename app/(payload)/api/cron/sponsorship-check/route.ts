import { NextRequest, NextResponse } from 'next/server';
import { getPayload } from 'payload';
import config from '@payload-config';

export async function GET(req: NextRequest) {
  const expected = process.env.CRON_SECRET;

  if (req.headers.get('Authorization') !== `Bearer ${expected}`) {
    return new NextResponse('Unauthorized', { status: 401 });
  }

  const payload = await getPayload({ config });

  const hoje = new Date();

  const { docs: atrasados } = await payload.find({
    collection: 'sponsorships',
    where: {
      ativo: {
        equals: true
      },
      proximaAtualizacao: {
        less_than: hoje.toISOString()
      }
    },
    depth: 1 // necessário para trazer os dados do padrinho
  });

  const formatDate = (date?: string | Date) => {
    if (!date) return '-';

    return new Date(date).toLocaleDateString('pt-BR'); // retorna no formato DD/MM/YYYY
  };

  if (atrasados.length > 0) {
    const padrinhos = atrasados
      .map((doc) => {
        const padrinho = doc.padrinho;

        if (!padrinho || typeof padrinho === 'string') return null;

        const telefone = padrinho.telefone?.replace(/\D/g, '');
        const whatsappLink = telefone ? `https://wa.me/55${telefone}` : null;

        const editLink = `${process.env.NEXT_PUBLIC_SITE_URL}/admin/collections/guardians/${padrinho.id}`;

        return `
          <li style="margin-bottom: 1rem;">
            <strong>Nome:</strong> ${padrinho.nome || '-'}<br/>
            <strong>Email:</strong> ${padrinho.email || '-'}<br/>
            <strong>Meio de pagamento:</strong> ${doc.formaPagamento || '-'}<br/>
            <strong>Valor:</strong> ${doc.valorMensal || '-'}<br/>
            ${doc.dataAtualizacao ? `<strong>Última atualização:</strong> ${formatDate(doc.dataAtualizacao)}<br/>` : ''}
            <strong>Telefone:</strong> ${
              whatsappLink
                ? `<a href="${whatsappLink}" target="_blank" style="text-decoration: underline; cursor: pointer;">Abrir WhatsApp</a>`
                : '-'
            }<br/>
            <a href="${editLink}" target="_blank"  style="text-decoration: underline; cursor: pointer;">📝 Atualizar cadastro</a>
          </li>
        `;
      })
      .filter(Boolean)
      .join('');

    const html = `
      <h2>📋 Apadrinhamentos com atualização vencida</h2>
      <p>Encontramos <strong>${atrasados.length}</strong> apadrinhamento(s) com atualização pendente.</p>
      <ul style="padding-left: 1.2rem;">${padrinhos}</ul>
    `;

    await payload.sendEmail({
      to: 'willianaru@gmail.com',
      subject: '⚠️ Gatil dos Resgatados - Apadrinhamentos vencidos',
      html
    });
  }
  await payload.create({
    collection: 'cronLogs',
    data: {
      executadoEm: new Date().toISOString(),
      totalVencidos: atrasados.length,
      emailEnviado: atrasados.length > 0,
      mensagem:
        atrasados.length > 0
          ? 'Email enviado com lista de padrinhos vencidos.'
          : 'Nenhum padrinho em atraso.'
    }
  });

  return NextResponse.json({
    status: 'ok',
    atrasados: atrasados.length
  });
}
