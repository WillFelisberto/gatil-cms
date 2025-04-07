import React, { JSX } from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';

export default function Home(): JSX.Element {
  return (
    <Layout
      title="Bem-vindo ao Gatil CMS 🐾"
      description="Gerencie adoções, apadrinhamentos, tutores e o conteúdo do seu site com facilidade.">
      <main style={{ padding: '2rem' }}>
        <div className="container">
          <h1>🐾 Bem-vindo ao Gatil CMS</h1>
          <p>
            Este sistema permite que você gerencie facilmente o conteúdo do site do seu gatil, incluindo adoções, apadrinhamentos, cadastro de animais, usuários, tutores e textos do site.
          </p>
          <p>
            Use o menu à esquerda (ou à direita, dependendo do layout) para navegar pelos tópicos.
          </p>

          <hr />

          <h2>⚙️ Funcionalidades principais</h2>
          <ul>
            <li>Cadastro de animais disponíveis para adoção</li>
            <li>Gerenciamento de adoções e apadrinhamentos</li>
            <li>Cadastro e gerenciamento de tutores</li>
            <li>Cadastro e gerenciamento de usuários (voluntários e administradores)</li>
            <li>Edição de conteúdo do site (textos, banners, imagens)</li>
            <li>Acesso restrito via painel administrativo</li>
          </ul>

          <hr />

          <h2>✉️ Notificações automáticas</h2>
          <h3>Novos apadrinhamentos</h3>
          <p>
            Todos os usuários com o cargo <strong>admin</strong> e a <strong>flag de notificações ativada</strong> recebem um e-mail automático com os detalhes do novo apadrinhamento.
          </p>

          <h3>Apadrinhamentos sem atualização</h3>
          <p>
            Após 7 dias sem atualização, é enviado um e-mail automático para admins com notificações ativas. Atualize o campo <em>"Data da última atualização"</em> para reiniciar o contador.
          </p>

          <hr />

          <h2>🚀 Comece por aqui</h2>
          <ul>
            <li><Link to="/docs/Como-acessar-o-painel">Como acessar o painel</Link></li>
            <li><Link to="/docs/Funcionalidades/Cadastrar-um-gatinho">Cadastrar um novo gatinho</Link></li>
            <li><Link to="/docs/Funcionalidades/Gerenciar-adoções">Gerenciar adoções</Link></li>
          </ul>

          <hr />

          <h2>🐱 Gatinhos</h2>
          <ul>
            <li><Link to="/docs/Funcionalidades/Cadastrar-um-gatinho">Cadastrar um novo gatinho</Link></li>
          </ul>

          <h2>❤️ Apadrinhamentos</h2>
          <ul>
            <li><Link to="/docs/Funcionalidades/Gerenciar-apadrinhamentos">Gerenciar apadrinhamentos</Link></li>
          </ul>

          <h2>👨‍👩‍👧 Tutores</h2>
          <ul>
            <li><Link to="/docs/Funcionalidades/Cadastrar-tutores">Gerenciar tutores</Link></li>
          </ul>

          <h2>🧑‍💻 Usuários</h2>
          <ul>
            <li><Link to="/docs/Funcionalidades/Gerenciar-Usuários">Gerenciar usuários</Link></li>
          </ul>

          <hr />

          <h2>🌐 Conteúdo do site</h2>
          <p>
            Os textos e blocos desta seção podem ser editados via menu <strong>"Globals"</strong> no painel administrativo.
          </p>

          <h4>Páginas editáveis:</h4>
          <ul>
            {/* <li><Link to="/docs/Site/Pagina-Home">Página Inic ial (Home)</Link></li> */}
            <li><Link to="/docs/Site/Editar-Adote">Página Adote</Link></li>
            <li><Link to="/docs/Site/Pagina-Apadrinhe">Página Apadrinhe</Link></li>
            <li><Link to="/docs/Site/Pagina-Sobre-o-projeto">Página Sobre</Link></li>
            <li><Link to="/docs/Site/Pagina-Colabore">Página Colabore</Link></li>
            <li><Link to="/docs/Site/Pagina-Politicas-de-adocao">Página Políticas de Adoção</Link></li>
            <li><Link to="/docs/Site/Pagina-Politicas-de-Apadrinhamento">Página Políticas de Apadrinhamento</Link></li>
          </ul>
        </div>
      </main>
    </Layout>
  );
}
