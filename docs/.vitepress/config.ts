import { defineConfig } from 'vitepress';

export default defineConfig({
	title: 'Gatil CMS',
	description: 'Documentação oficial do Gatil CMS 🐱',
	lang: 'pt-br',
	ignoreDeadLinks: true,
	head: [
		['link', { rel: 'icon', href: '/favicon.ico' }],
	],
	themeConfig: {
		logo: '/logo-rodape.webp',
		nav: [
			{ text: 'Início', link: '/' },
			{ text: 'Site',  link: 'https://gatildosresgatados.com/' },
		],
		sidebar: [
			{
				text: 'Funcionalidades',
				collapsed: false,
				items: [
					{ text: 'Cadastrar tutores', link: '/funcionalidades/cadastrar-tutores' },
					{ text: 'Cadastrar um gatinho', link: '/funcionalidades/cadastrar-um-gatinho' },
					{ text: 'Gerenciar adoções', link: '/funcionalidades/gerenciar-adoções' },
					{ text: 'Gerenciar apadrinhamentos', link: '/funcionalidades/gerenciar-apadrinhamentos' },
					{ text: 'Gerenciar usuários', link: '/funcionalidades/gerenciar-usuários' },
				],
			},
			{
				text: 'Conteúdo do site',
				collapsed: false,
				items: [
					{ text: 'Página Adote', link: '/site/editar-adote' },
					{ text: 'Página Apadrinhe', link: '/site/pagina-apadrinhe' },
					{ text: 'Página Sobre o projeto', link: '/site/pagina-sobre-o-projeto' },
					{ text: 'Página Colabore', link: '/site/pagina-colabore' },
					{ text: 'Políticas de Adoção', link: '/site/pagina-politicas-de-adocao' },
					{ text: 'Políticas de Apadrinhamento', link: '/site/pagina-politicas-de-apadrinhamento' },
				],
			},
		],
		outlineTitle: 'Nesta página',
		docFooter: {
			prev: 'Página anterior',
			next: 'Próxima página',
		},
		lastUpdatedText: 'Última atualização',
		search: {
			provider: 'local',
			options: {
				translations: {
					button: {
						buttonText: 'Buscar',
						buttonAriaLabel: 'Buscar'
					},
					modal: {
						noResultsText: 'Nenhum resultado encontrado',
						resetButtonTitle: 'Limpar busca',
						footer: {
							selectText: 'Selecionar',
							navigateText: 'Navegar',
						},
					},
				}
			}
		}
	},
});
