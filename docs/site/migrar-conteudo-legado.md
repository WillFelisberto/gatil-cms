# 🔄 Migrar conteúdo antigo para a landing

Seções das páginas antigas Adote, Apadrinhe, Contato e Colabore podem conter Hero, FAQ, texto rico, galeria, produtos e slider. As páginas foram substituídas pela landing, mas **seus dados continuam no banco**.

## Antes de começar

Faça um backup completo do SQLite/libSQL e das mídias. Faça o procedimento em homologação.

```bash
npm ci
npm run migrate
npm run migrate:landing:check
npm run migrate:landing
npm run generate:types
npm run generate:importmap
npm run test:migration
npm run test:migration:sqlite
npm run test:ci
npm run build
```

O script copia os blocos para **Conteúdo da Landing Page → Conteúdos complementares**, sem apagar as fontes e sem duplicar itens se for executado novamente. Textos de hero são aproveitados nas seções principais quando o editor ainda não os personalizou. Os heros originais ficam arquivados nos blocos.

## Mostrar os conteúdos

Entre em `/admin/globals/homepage`, vá à aba **Conteúdos complementares**, revise o material importado, remova repetições caso necessário e marque **Exibir os blocos complementares na landing**. Sem essa opção, ficam salvos e editáveis, mas não aparecem no site.

## O que não é movido para blocos

- Cadastro e paginação de gatos: collection `cats`, único catálogo na home.
- Chaves PIX e banco: Global `colabore`, continuam editáveis.
- Políticas de adoção e termos: Globals jurídicos, continuam editáveis nas páginas próprias.
- Equipe e redes sociais: collections/Globals próprios.

A migração requer `DATABASE_URL` configurada no ambiente. Não é executada remotamente só por instalar o ZIP.
