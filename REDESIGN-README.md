> **Atenção:** este guia registra o redesign original. A landing e as migrations atuais são documentadas em [CMS-LANDING-README.md](./CMS-LANDING-README.md).

# Gatil dos Resgatados — Redesign (azul oficial)

## O que foi alterado

O site público foi atualizado com a identidade visual do Gatil (azul `#023274`, azul-claro, branco e pêssego). O painel Payload CMS não foi alterado. Os novos estilos estão isolados em `styles/gatil-redesign.css` e são carregados exclusivamente por `app/(my-app)/layout.tsx`.

Páginas públicas redesenhadas: início (`/`), adoção (`/adote`), apadrinhamento (`/apadrinhe`), doações (`/colabore`), história (`/sobre-o-projeto`), contato, política de adoção e termos de apadrinhamento. O conteúdo das páginas continua alimentado pelos _Globals_ do Payload e pelo construtor de blocos de conteúdo. Os novos textos editoriais fixos da landing podem ser posteriormente convertidos em campos de CMS, se necessário.

### Gatos e paginação

- A homepage exibe os **6 gatos mais recentes para adoção** e **3 para apadrinhamento** (consulta real ao Payload). Esses destaques NÃO substituem a paginação dos catálogos completos.
- `/adote` consulta a collection `cats` com os filtros `adotado=false` e `show=true`, ordenação `-dataEntrada`, com `limit: 12` e `page` obtido de `?page=`.
- `/apadrinhe` acrescenta o filtro `disponivelParaApadrinhamento=true`, também com **12 gatos por página**.
- Paginação gera URLs normais (ex.: `/adote?page=2#gatinhos-disponiveis`), usando `totalPages` fornecido pelo Payload e mantendo os demais parâmetros da URL.
- Página inválida/fora do total redireciona para a última válida, sem alterar o cadastro.
- Fotos, nome, sexo, idade, saúde e disponibilidade vêm da collection `cats`. No caso de ausência de imagem, utiliza-se `public/no-image.jpg`.

### Integrações preservadas

- Collections Payload: gatos, adoções, apadrinhamentos, usuários/voluntários, mídias e demais entidades.
- Globals Payload: homepage, adote, apadrinhe, colabore, contato, sobre, políticas e site-config.
- WhatsApp dinâmico a partir de `site-config.whatsapp`, com texto contextual do gato selecionado.
- PIX/QR Code e contas bancárias vêm exclusivamente de `colabore`; nenhum dado bancário foi inventado.
- SEO/metadata dinâmica das páginas, GA, infraestrutura de build, endpoints e administração.
- As duas logos existentes em `public/logo-gatil.webp` e `public/logo-rodape.webp`.

### Arquivos principais

- `app/(my-app)/page.tsx` — nova landing com conteúdo editorial e dados dinâmicos.
- `app/(my-app)/components/Atoms/CatCard/CatCard.tsx` — cartões novos.
- `app/(my-app)/components/Molecules/Pagination/Pagination.tsx` — paginação acessível por links e URLs.
- `app/(my-app)/components/Atoms/Header/Header.tsx` e `Footer/Footer.tsx` — navegação responsiva.
- `styles/gatil-redesign.css` — sistema visual.

## Instalação e conferência local

Reutilize as mesmas variáveis do `.env` **do projeto original** (não incluído por segurança). No diretório do projeto:

```bash
pnpm install --frozen-lockfile
pnpm dev
```

Acesse as rotas acima e valide os dados do CMS, principalmente as URLs paginadas: `/adote?page=2` e `/apadrinhe?page=2` (somente quando houver mais de 12 gatos elegíveis). Depois rode:

```bash
pnpm build
```

**Limitação da validação nesta entrega:** o ambiente de edição não tinha dependências Node instaladas e não conseguiu alcançar o registro npm para instalá-las. Foi realizado teste sintático de todos os TSX do frontend com o compilador TypeScript, conferência dos filtros/paginação e comparação de arquivos, mas **não foi possível executar o build Next.js nem testes E2E integrados ao banco**. Antes do deploy, execute o build e valide a integração com seu Payload CMS em homologação.

## Observações

- Não foi criada nem executada nenhuma migração de banco.
- A administração do Payload (`app/(payload)`), os endpoints e as collections ficaram inalterados.
- Os destaques da homepage não inventam números de resgates, doações ou adoções.
- Se o CMS já tiver um bloco `hero` em páginas com o novo cabeçalho editorial, esse bloco é omitido da área de conteúdo para evitar duplicar o hero. Os demais blocos seguem editáveis e visíveis.
