# 🐾 Gatil CMS

This system allows you to easily manage the content of your cat shelter's website, including:

- Pet registration for adoption
- Sponsorship system
- User and guardian management
- Adoption management
- Editing of institutional site texts

All integrated with a modern and flexible CMS using **Payload CMS**, **Next.js**, and cutting-edge technologies.

## 📚 Documentation

Access the [Gatil CMS Wiki](https://docs-gatil-cms.vercel.app/) to easily learn how to manage your website content, including adoptions, sponsorships, pet registration, users, guardians, and institutional texts.

## 🚀 Technologies Used

- **Next.js** with Turbopack
- **React 19**
- **Payload CMS 3**
- **Tailwind CSS 4**
- **MongoDB (via @payloadcms/db-mongodb)**
- **Storybook** for isolated component development
- **Husky + lint-staged** for Git hooks and auto formatting
- **Jest + Testing Library + Vitest + Playwright** for testing
- **GraphQL**
- **Hygen** for component generation

### Useful Plugins

- `@payloadcms/plugin-import-export`
- `@payload-bites/activity-log`
- `@payloadcms/translations`
- `payload-mask-plugin`
- `@nouance/payload-better-fields-plugin`

## 📦 Installation

```bash
git clone https://github.com/WillFelisberto/gatil-cms
cd gatil-cms
pnpm install
cp .env.example .env.local
```

> Set your environment variables in `.env.local`.

## 💻 Available Scripts

| Command                   | Description                         |
| ------------------------- | ----------------------------------- |
| `pnpm dev`                | Starts development environment      |
| `pnpm build`              | Builds the production version       |
| `pnpm start`              | Starts the app in production mode   |
| `pnpm test`               | Runs tests with Jest                |
| `pnpm test:watch`         | Runs tests in watch mode            |
| `pnpm test:ci`            | Runs tests in CI environment        |
| `pnpm test:e2e`           | End-to-end tests with Playwright    |
| `pnpm test:e2e:ui`        | UI interface for E2E tests          |
| `pnpm lint`               | Checks code with ESLint             |
| `pnpm lint:fix`           | Automatically fixes lint errors     |
| `pnpm prettier:format`    | Formats code with Prettier          |
| `pnpm generate:types`     | Generates types for Payload CMS     |
| `pnpm generate:importmap` | Generates importmap for Payload     |
| `pnpm storybook`          | Starts Storybook                    |
| `pnpm build-storybook`    | Builds Storybook for production     |
| `pnpm generate`           | Generates new components with Hygen |
| `pnpm prepare`            | Sets up Husky                       |
| `pnpm docs:dev`           | Starts local docs with VitePress    |
| `pnpm docs:build`         | Builds documentation for production |
| `pnpm docs:serve`         | Serves local documentation          |
| `pnpm seed`               | Seeds CMS with sample data for CI   |

## 📁 Folder Structure

```
├── app/(my-app)              # Next.js application
├── app/(payload)             # Payload CMS settings
├── app/(my-app)/components/  # Reusable React components
├── docs/                     # Technical documentation (VitePress)
├── scripts/                  # Seeds and automation tasks
├── tests/                    # E2E and integration tests
├── public/                   # Public assets
├── styles/                   # Tailwind styles
├── .env.example              # Sample env file
├── .env.local                # (You must create this from .env.example)
├── package.json
├── README.md
```

## 🧪 Testing

- **Jest** for unit testing
- **Testing Library** for UI testing
- **Vitest** and **Playwright** for end-to-end and browser-based testing
- **Storybook Test** for visual component testing

## ✅ Best Practices

- Uses **husky** and **lint-staged** to ensure commit quality
- Use `pnpm generate` to maintain consistent component structure
- Run `pnpm generate:types` after any changes to the CMS

## 📃 License

This project is open-source, but **resale is prohibited**.  
See [LICENSE.md](./LICENSE.md) for more details.

## 🙋 Contributing

Contributions are welcome! Open an issue or pull request with suggestions, bug fixes, or new features.

---

🐱 Made with love for our little cats. 💜
