# 🐾 Gatil CMS

Este sistema permite que você gerencie facilmente o conteúdo do site de seu gatil, incluindo:

- Cadastro de animais para adoção  
- Sistema de apadrinhamento  
- Controle de usuários e tutores  
- Gerenciamento de adoções  
- Edição de textos institucionais do site  

Tudo isso integrado com um CMS moderno e flexível utilizando **Payload CMS**, **Next.js** e tecnologias de ponta.

## 📚 Documentação

Acesse a [Wiki do Gatil CMS](https://github.com/WillFelisberto/gatil-cms/wiki) para entender facilmente como gerenciar o conteúdo do seu site, incluindo adoções, apadrinhamentos, cadastro de animais, usuários, tutores e textos institucionais.

## 🚀 Tecnologias utilizadas

- **Next.js** com Turbopack  
- **React 19**  
- **Payload CMS 3**  
- **Tailwind CSS 4**  
- **MongoDB (via @payloadcms/db-mongodb)**  
- **Storybook** para desenvolvimento de componentes isolados  
- **Husky + lint-staged** para Git hooks e formatação automática  
- **Jest + Testing Library + Vitest + Playwright** para testes  
- **GraphQL**  
- **Hygen** para geração de componentes  

### Plugins úteis

- `@payloadcms/plugin-import-export`  
- `@payload-bites/activity-log`  
- `@payloadcms/translations`  
- `payload-mask-plugin`  
- `@nouance/payload-better-fields-plugin`

## 📦 Instalação

```bash
git clone https://github.com/WillFelisberto/gatil-cms
cd gatil-cms
pnpm install
cp .env.example .env.local
```

> Configure suas variáveis de ambiente no `.env.local`.

## 💻 Scripts disponíveis

| Comando                   | Descrição                                |
| ------------------------- | ---------------------------------------- |
| `pnpm dev`                | Inicia o ambiente de desenvolvimento     |
| `pnpm build`              | Cria a versão de produção                |
| `pnpm start`              | Inicia o app em modo produção            |
| `pnpm test`               | Executa os testes com Jest               |
| `pnpm test:watch`         | Executa testes em modo observador        |
| `pnpm test:ci`            | Executa testes em ambiente CI            |
| `pnpm lint`               | Verifica problemas com ESLint            |
| `pnpm lint:fix`           | Corrige automaticamente os erros de lint |
| `pnpm prettier:format`    | Formata o código com Prettier            |
| `pnpm generate:types`     | Gera os tipos do Payload CMS             |
| `pnpm generate:importmap` | Gera o importmap para o Payload          |
| `pnpm storybook`          | Inicia o Storybook                       |
| `pnpm build-storybook`    | Gera a build do Storybook                |
| `pnpm generate`           | Gera novos componentes com Hygen         |
| `pnpm prepare`            | Setup do Husky                           |

## 📁 Estrutura de pastas

```
├── app/(my-app)              # Aplicação Next.js 
├── app/(payload)             # Configurações do Payload CMS
├── app/(my-app)/components/  # Componentes React reutilizáveis
├── public/                   # Assets públicos
├── styles/                   # Estilos (Tailwind)
├── .env.example              # Arquivo de exemplo para variáveis
├── .env.local                # (Você deve criar a partir do .env.example)
├── package.json
├── README.md
```

## 🧪 Testes

- **Jest** para testes unitários  
- **Testing Library** para testes de UI  
- **Vitest** e **Playwright** para testes end-to-end e browser-based  
- **Storybook Test** para testes visuais de componentes

## ✅ Boas práticas

- Utiliza **husky** e **lint-staged** para garantir qualidade nos commits  
- Use `pnpm generate` para manter padrão nos componentes  
- Rode `pnpm generate:types` após alterações no CMS

## 📃 Licença

Este projeto é de código aberto, mas **a revenda é proibida**.  
Consulte o arquivo [LICENSE.md](./LICENSE.md) para mais detalhes.

## 🙋 Contribuindo

Contribuições são bem-vindas! Abra uma issue ou pull request com sugestões, correções ou novos recursos.

---

🐱 Feito com amor para nossos gatinhos. 💜