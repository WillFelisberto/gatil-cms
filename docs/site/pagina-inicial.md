# 🐾 Landing Page — painel do site

O site agora é uma **landing única**; gatos para adoção e apadrinhamento aparecem no mesmo catálogo e não são duplicados.

## Onde editar

Abra **Conteúdo do site → Conteúdo da Landing Page** no Payload (`/admin/globals/homepage`). Ali existem abas editoriais:

- **Destaque e catálogo**: hero, imagem principal, chamadas, atalhos e textos dos cards dos gatos.
- **História e apadrinhamento**: história com texto rico, foto e textos de apadrinhamento.
- **Doações**: chamada para doação, imagem e orientação sobre como contribuir. As chaves PIX ficam em **Doações · PIX e dados bancários**.
- **Adoção, equipe e contato**: política, voluntários e CTAs.
- **Conteúdos complementares**: blocos vindos das páginas antigas (FAQ, galerias, textos ricos e produtos). A exibição é opcional para evitar repetição.

Salve no Payload e recarregue o site. O conteúdo é lido no servidor; não precisa alterar os componentes.

## Catálogo e paginação

A collection `cats` alimenta um **único catálogo de 12 gatos por página**. A opção "Apadrinhar" só aparece quando habilitada no cadastro do gato. Filtros: `/?filtro=adocao#gatinhos`, `/?filtro=apadrinhamento#gatinhos`; para a segunda página, use `/?page=2#gatinhos`.

## Documentação de migração

Consulte [Migrar conteúdo das páginas antigas](./migrar-conteudo-legado.md) e `CMS-LANDING-README.md` na raiz do repositório.
