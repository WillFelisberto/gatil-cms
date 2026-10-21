# Landing page com conteúdo gerenciado pelo Payload CMS

## O que foi corrigido

Na versão anterior do redesign, parte dos textos ficou fixa no JSX. Agora **os textos editoriais da landing são campos do Payload**, não valores programados diretamente em `page.tsx`.

### Como editar no `/admin`

| Local do painel | Edita o quê? |
| --- | --- |
| **Conteúdo do site → Conteúdo da Landing Page** | Hero, atalhos, catálogo, história, apadrinhamento, doações, adoção responsável, equipe, encerramento e imagens |
| **Conteúdo do site → Configurações do Site** | Menu, cabeçalho, rodapé, WhatsApp e redes sociais |
| **Conteúdo do site → Doações · PIX e dados bancários** | Chaves PIX, QR Code e conta bancária |
| **Gatos** | Nome, fotos, descrição, saúde, adoção/apadrinhamento e status de cada gato |
| **Usuários** | Voluntários marcados para exibição pública |
| **Conteúdo do site → Página Política de Adoção** | Documento completo da política de adoção |
| **Conteúdo do site → Página Termos de Apadrinhamento** | Documento completo de apadrinhamento |

A homepage renderiza 12 gatos por página, com `?page=N` e `?filtro=adocao` / `?filtro=apadrinhamento`, sem duplicar perfis. Alterar os textos no painel não exige recompilar o frontend; o dado é buscado novamente no servidor (`force-dynamic`).

## Conteúdo antigo: como foi preservado

- A migration copia o hero (título, subtítulo e imagem), a história (imagem e rich text) e a introdução do apadrinhamento do modelo antigo para as novas áreas da landing.
- Os blocos antigos continuam armazenados e **não são apagados**; os layouts legados ficam ocultos no painel. Isso evita apagar conteúdo antes de um backup/avaliação.
- Outros blocos personalizados das antigas páginas Adote, Apadrinhe, Contato e Colabore **não são migrados automaticamente** nem exibidos na landing nova. Caso contenham informações exclusivas que você queira publicar, reescreva-as nos novos campos editoriais após conferir os dados antigos; um backup ou restauração permite consultar o conteúdo original.
- A descrição de Sobre o Projeto tem fallback ao antigo Global até ser preenchida na área nova.
- PIX, termos legais, gatos, media e patrocinadores não foram excluídos nem convertidos para conteúdo estático.

## Migração no banco

O banco é SQLite/libSQL. Foi incluída a migration `20261020_220000_landing_editorial` com snapshot do Payload, adicionando os campos às tabelas `homepage` e `site_config`, sem remover dados existentes.

Em ambiente de homologação (com as variáveis de ambiente preenchidas e um backup do banco):

```bash
npm ci
npm run migrate
npm run generate:types
npm run generate:importmap
npm run build
```

**IMPORTANTE:** não execute `npm run migrate` na produção antes de realizar backup do banco e validar os dados de homologação. As dependências não puderam ser instaladas neste ambiente por indisponibilidade de DNS para `registry.npmjs.org`, portanto `build` e testes integrados ainda precisam ser confirmados.

## Arquitetura

- `lib/landingContent.ts`: defaults e resolução de textos; facilita casos antigos e não força alterações no React a cada edição.
- `app/(payload)/globals/home/index.ts`: novos campos da landing, divididos em abas editoriais.
- `app/(payload)/globals/siteConfig/index.ts`: rótulos da navegação e do rodapé.
- `app/(my-app)/page.tsx`: utiliza o conteúdo gerenciado, mantendo as consultas reais de gatos, voluntários e dados bancários.
- `app/(payload)/migrations/20261020_220000_landing_editorial.ts`: evolução do schema e cópia de alguns dados legados.

## Dependências

Nenhum novo pacote foi necessário. Preservamos as versões do projeto para evitar atualizações desnecessárias sem testes de compatibilidade.
