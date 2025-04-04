import { APIError, PayloadHandler, PayloadRequest } from 'payload';

export const createSponsorships: PayloadHandler = async (req): Promise<Response> => {
  const payload = req.payload;
  const secret = req.headers.get('payload-secret');
  const expected = payload.secret;

  if (!expected || secret !== expected) {
    throw new APIError('You are not allowed to perfom this action', 403, undefined, true);
  }

  const body = await (req as Request).json();

  const {
    padrinhoNome,
    padrinhoEmail,
    whatsapp,
    valorMensal,
    formaPagamento,
    certificadoDigital,
    visitas,
    aceitaTermos,
    gato,
    gatoNome
  } = body;

  if (
    !padrinhoNome ||
    !padrinhoEmail ||
    !whatsapp ||
    !valorMensal ||
    !formaPagamento ||
    !aceitaTermos
  ) {
    throw new APIError('Campos obrigatórios não preenchidos', 403, undefined, true);
  }

  try {
    const { docs: [existing] = [] } = await payload.find({
      collection: 'guardians',
      where: {
        email: {
          equals: padrinhoEmail
        }
      },
      limit: 1
    });

    const padrinhoID =
      existing?.id ||
      (
        await payload.create({
          collection: 'guardians',
          data: {
            nome: padrinhoNome,
            email: padrinhoEmail,
            telefone: whatsapp
          }
        })
      ).id;

    const apadrinhaProjeto = !gato;

    const novo = await payload.create({
      collection: 'sponsorships',
      data: {
        padrinho: padrinhoID,
        gato: gato ? [gato] : [],
        apadrinhaProjeto,
        valorMensal,
        formaPagamento,
        certificadoDigital,
        visitas,
        aceitaTermos,
        ativo: false,
        dataAtualizacao: new Date().toISOString()
      }
    });

    const telefoneLimpo = whatsapp.replace(/\D/g, '');
    const nomeGato = gatoNome || 'um dos nossos resgatados';
    const texto = `Olá ${padrinhoNome}! 🐾 Obrigado por apadrinhar ${nomeGato} pelo site do Gatil dos Resgatados!`;

    const whatsappLink = `https://wa.me/55${telefoneLimpo}?text=${encodeURIComponent(texto)}`;
    const editLink = `${process.env.NEXT_PUBLIC_SITE_URL}/admin/collections/sponsorships/${novo.id}`;

    const gatoLink = `${process.env.NEXT_PUBLIC_SITE_URL}/admin/collections/cats/${gato}`;

    const html = `
    <div style="font-family: Arial, sans-serif; color: #333;">
      <h2>🎉 Novo apadrinhamento realizado via site!</h2>
      <p><strong>Nome:</strong> ${padrinhoNome}</p>
      <p><strong>Email:</strong> ${padrinhoEmail}</p>
      ${
        gatoNome
          ? `
          <p><strong>Gatinho apadrinhado:</strong></p>
          <p>
            <a href="${gatoLink}" target="_blank" style="display: inline-block; background-color: #28a745; color: white; padding: 10px 15px; text-decoration: none; border-radius: 5px;">
              🐱 ${gatoNome}
            </a>
          </p>`
          : ''
      }
      <p><strong>Valor mensal:</strong> R$ ${valorMensal}</p>
      <p><strong>Forma de pagamento:</strong> ${formaPagamento}</p>
      <p><strong>WhatsApp:</strong> <a href="${whatsappLink}" target="_blank">${whatsapp}</a></p>
      <p>
        <a href="${editLink}" target="_blank" style="display: inline-block; background-color: #007bff; color: white; padding: 10px 15px; text-decoration: none; border-radius: 5px;">
          ✏️ Editar apadrinhamento
        </a>
      </p>
    </div>
  `;

    await payload.sendEmail({
      to: 'willianaru@gmail.com', //TODO: mudar para o email do admin com flag ativa
      subject: '🐾 Novo apadrinhamento via site!',
      html
    });

    return Response.json({ success: true, id: novo.id });
  } catch (err: any) {
    console.error('[SPONSORSHIP ERROR]', err);
    throw new APIError('Erro ao salvar', 500, err.message, true);
  }
};
