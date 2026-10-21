# Gatil dos Resgatados — migração editorial para landing única

## Arquitetura e administração

A página pública `/` é uma landing com **um único catálogo de gatos**. Não existe um segundo cadastro ou um segundo catálogo de apadrinhamento. Os gatos vêm da collection `cats`, e as opções de adoção e apadrinhamento seguem os campos `show`, `adotado` e `disponivelParaApadrinhamento` do cadastro.

- **Conteúdo do site → Conteúdo da Landing Page** (`homepage`): hero, três atalhos, catálogo, história, apadrinhamento, doação, adoção responsável, equipe e contato; fotos editoriais; textos de botões; complementos importados.
- **Conteúdo do site → Configurações do Site** (`site-config`): WhatsApp, redes sociais, rótulos de menu e rodapé.
- **Conteúdo do site → Doações · PIX e dados bancários** (`colabore`): dados financeiros, QR Code e PIX. **Nunca copiar PIX para textos estáticos**.
- **Gatos** (`cats`): fotos, perfil e disponibilidade.
- **Usuários** (`users`): voluntários públicos.
- **Política de adoção / Termos de apadrinhamento**: permanecem como documentos separados e editáveis.

O layout é feito no frontend; **textos e imagens são editados no Payload**. A opção "Conteúdos complementares" é o lugar dos blocos migrados das páginas antigas.

## Migração completa em dois estágios

**Não há acesso ao banco de produção dentro deste pacote ZIP.** Os comandos a seguir executam a migração no banco apontado por `DATABASE_URL` **no seu ambiente**. Migração de schema e importação são passos distintos:

```bash
npm ci
npm run migrate               # evolui o schema SQLite/libSQL
npm run migrate:landing:check # prévia sem gravar: quantidade por página e campos mapeados
npm run migrate:landing       # grava conteúdo dos Globals antigos na homepage
npm run generate:types
npm run generate:importmap
npm run test:migration
npm run test:migration:sqlite
npm run test:ci
npm run lint
npm run build
```

1. **Schema**: `20261020_220000_landing_editorial` acrescenta os campos editoriais e copia hero, história e introdução ao apadrinhamento. `20261020_230000_complete_landing_migration` acrescenta a chave de exibição de complementos.
2. **Conteúdo**: `scripts/migrate-landing-content.ts` lê `adote`, `apadrinhe`, `colabore` e `contato` via Payload Local API. Transfere os *hero texts* para os campos editoriais correspondentes quando ainda não personalizados. Copia **todos os blocos dessas páginas** para o campo `homepage.layout`: texto rico, títulos, imagens, galeria, FAQs, produtos, slider e heros. Os blocos são editáveis no painel.
3. **Backup**: faça um backup consistente do banco SQLite/libSQL **e de suas mídias externas (por exemplo Vercel Blob)** antes de qualquer operação em produção. Teste a cópia do banco em homologação primeiro.
4. **Reexecução**: os blocos migrados recebem IDs determinísticos, permanecem nas tabelas antigas e não são importados novamente em uma segunda execução. Um marcador interno de conclusão impede reimportar blocos que o editor excluir posteriormente. Os campos que já foram modificados pelo editor não são sobrescritos.
5. **Exibição**: por padrão, `showComplementaryContent=false` evita apresentar informações duplicadas. No painel `Conteúdo da Landing Page > Conteúdos complementares`, revise, reorganize e remova duplicações se quiser, depois marque "Exibir os blocos complementares na landing". Heros antigos são preservados, mas não renderizados duas vezes.

**Não há exclusão de dados originais.** Os Globals antigos continuam no banco e ocultos na navegação do admin. O importador não mexe em gatos, adoções, apadrinhamentos, PIX, usuários, mídia ou documentos legais.

**Importante sobre URLs antigas**: `/adote` e `/apadrinhe` redirecionam ao catálogo da landing preservando os filtros e `?page=...`. `?filtro=adocao` e `?filtro=apadrinhamento` utilizam a mesma consulta de `cats`, em lotes de **12**.

## Como verificar no painel

1. Abra `/admin/globals/homepage`: confirme cada uma das seções e a quantidade de blocos complementares importados.
2. Edite um título e salve; atualize a home e confira a alteração sem modificar o código.
3. Confira as imagens e o RichText; o importador preserva relacionamentos com `media`, galerias, FAQs e produtos.
4. Confirme os links e dados do PIX em `/admin/globals/colabore` e os documentos em suas configurações próprias.
5. Teste `/`, `/?page=2#gatinhos`, `/?filtro=apadrinhamento#gatinhos` e a navegação por páginas seguintes.
6. Rode `npm run migrate:landing:check` novamente: a quantidade de novos blocos deve ser zero.

## Testes

`npm run test:migration` executa testes da importação sem dependências externas: preservação dos blocos aninhados, mídia, mapeamento de hero, repetição sem duplicação e prioridade dos textos modificados. `python3 -m unittest discover -s tests/migration -p 'test_*.py'` verifica as migrations SQLite em uma base temporária e dados de exemplo. Jest, ESLint e build dependem de `npm ci` com acesso ao registro dos pacotes; são obrigatórios no CI/homologação antes da publicação.

## Limites

Esta versão **não executou comandos contra o banco remoto de produção**. Uma versão do ZIP não carrega os conteúdos inseridos depois no painel. Mesmo com o código de migração completo, é necessário executar os comandos acima **no ambiente com os dados reais** e revisar os blocos complementares, pois alguns textos legados podem se repetir no novo layout.
