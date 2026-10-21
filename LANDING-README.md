> **Atenção:** este guia registra o redesign original. Para os procedimentos atuais de importação completa e CMS editável, consulte [CMS-LANDING-README.md](./CMS-LANDING-README.md).

# Gatil dos Resgatados — landing única (Payload CMS)

## Conceito

Site público com identidade oficial `#023274`, uma única landing em `/`, navegação por âncoras e **somente um catálogo de gatos**. Não houve alteração de Collections, Globals, migrations ou painel administrativo do Payload.

## Catálogo e paginação

O Payload continua responsável por todas as fotografias, nomes, descrições e disponibilidades.

- `/?page=2#gatinhos`: segunda página (12 gatos por página).
- `/?filtro=adocao#gatinhos`: somente `adotado=false` + `show=true`.
- `/?filtro=apadrinhamento#gatinhos`: somente `adotado=false` + `disponivelParaApadrinhamento=true`.
- `/#gatinhos`: `adotado=false` + (`show=true` **ou** `disponivelParaApadrinhamento=true`), sem repetir documentos.
- Os dois botões do gato aparecem **independentemente** de acordo com as duas flags.
- Alterar filtro zera a página. Paginação preserva filtro e âncora; acesso fora do intervalo redireciona para a última página válida.

A consulta é executada no servidor usando `payload.find({ collection: 'cats', limit: 12, page, ... })`: **não** são buscados todos os gatos no navegador para paginar artificialmente.

## Seções da landing

1. Hero baseado na Global `homepage`.
2. Catálogo unificado com filtros/paginação.
3. História e equipe (Global `sobre` e collection `users`).
4. Como apadrinhar (Global `apadrinhe`, sem repetir cartões).
5. PIX / informações bancárias administráveis (Global `colabore`).
6. Adoção consciente, informações e FAQ do CMS.
7. Contato/WhatsApp a partir de `site-config`.

Os blocos adicionais das antigas Globals são apresentados em áreas expansíveis para preservar conteúdo sem poluir a landing. A **política de adoção** e os **termos de apadrinhamento** continuam com URLs próprias para leitura e referência no site.

## Compatibilidade de links antigos

- `/adote?page=N` -> `/?filtro=adocao&page=N#gatinhos`.
- `/apadrinhe?page=N` -> `/?filtro=apadrinhamento&page=N#gatinhos`.
- `/colabore`, `/sobre-o-projeto`, `/contate-nos` -> respectivas seções da landing.

Os links de adoção e de apadrinhamento dos cards **abrem conversas distintas no WhatsApp**, com mensagem personalizada para cada gato. **Não registram automaticamente novos apadrinhamentos na collection `sponsorships`**. O formulário legado de apadrinhamento está presente no repositório, mas o endpoint utilizado por ele não está configurado para chamadas públicas seguras; será necessário projetar uma rota pública com validações/antispam antes de religá-lo. Nenhum segredo do Payload é enviado para o navegador.

## Dependências

Nenhum pacote precisou ser introduzido para a migração. `package.json`, `package-lock.json` e `pnpm-lock.yaml` foram preservados para evitar upgrades incompatíveis entre Next.js e Payload sem acesso ao registro/npm para validação. Instale com o gerenciador de pacotes de preferência definido no seu ambiente (há lockfiles npm e pnpm no repositório; padronize um em uma etapa futura).

## Verificação sugerida

```bash
npm ci
npm run build
npm test -- --runInBand
```

Testar no banco de homologação: animais com ambas as flags, somente adoção, somente apadrinhamento, animais adotados, páginas 2+ e QR PIX real. Não confundir renderização ou testes de sintaxe com build completo.

## Limitações da validação neste ambiente

- Teste estático de sintaxe TS/TSX passou nos arquivos do site público.
- Regras de filtros e paginação foram exercitadas com dados simulados.
- `npm ci` / `next build` e testes Jest completos não puderam ser executados porque o registro npm não estava acessível. É necessária validação integrada local ou na pipeline antes de publicar.
