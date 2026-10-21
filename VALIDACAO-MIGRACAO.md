# Relatório de validação — migração da landing

Data da revisão: 2026-10-20/21.

## Execuções realizadas neste ambiente

| Validação                                           | Resultado          | Observações                                                                                                                              |
| --------------------------------------------------- | ------------------ | ---------------------------------------------------------------------------------------------------------------------------------------- |
| `npm run test:migration`                            | **6 testes OK**    | Catálogo único, filtros, paginação e importação de blocos, com mídia e nested arrays                                                     |
| `npm run test:migration:sqlite`                     | **2 testes OK**    | DDL das quatro migrations em SQLite temporário com registros legados; verificou cópia, preservação de gatos e rollback da migration nova |
| Parse/transpilação TypeScript com TypeScript global | **6 arquivos OK**  | Confere sintaxe de TS/TSX nos arquivos afetados, **não** equivale ao `tsc --noEmit` completo                                             |
| `git diff --check`                                  | **OK**             | Sem problemas de whitespace                                                                                                              |
| `npm ci --offline`                                  | **Não disponível** | Cache sem `@babel/preset-env`; sem dependências instaladas                                                                               |
| Jest (`npm run test:ci`)                            | **Pendente**       | Requer instalação de dependências                                                                                                        |
| ESLint (`npm run lint`)                             | **Pendente**       | Requer instalação de dependências                                                                                                        |
| Build Next.js (`npm run build`)                     | **Pendente**       | Requer instalação de dependências e configuração de ambiente                                                                             |
| Payload real + banco de homologação                 | **Pendente**       | Sem `DATABASE_URL`/credenciais de banco fornecidas                                                                                       |

## O que deve ser testado antes de produção

1. Aplicar `npm run migrate` em cópia do SQLite/libSQL e verificar as novas abas em `/admin/globals/homepage`.
2. Comparar o relatório de `npm run migrate:landing:check` com a quantidade original de blocos das páginas antigas.
3. Executar `npm run migrate:landing` e conferir richtext, FAQ, galerias, slides, produtos, links e imagens.
4. Verificar que a repetição do importador não duplica conteúdo e não restaura blocos removidos pelo editor (marcador interno de conclusão).
5. Editar e salvar título, corpo, foto e botões no painel, abrir a homepage e confirmar que as alterações apareceram.
6. Testar PIX/QR Code, WhatsApp, política de adoção, termos, catálogo com mais de 12 gatos e URLs `?page=2&filtro=...`.
7. Só após a revisão, ativar os **Conteúdos complementares**, quando desejado.

## Segurança do conteúdo

O importador preserva os dados de origem; não remove records de cats, adoptions, sponsorships, media, PIX ou Globals. A configuração `showComplementaryContent` começa desativada para evitar conteúdos antigos duplicados. A operação contra a base real **não foi executada** neste ambiente.
