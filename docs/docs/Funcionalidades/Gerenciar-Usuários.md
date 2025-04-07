# Gerenciar Usuários

A collection **Usuários** armazena os dados de login, exibição pública e permissões de acesso ao painel de administração.

---

### 📌 Onde encontrar?

No painel de administração: `Conteúdo > Usuários`


---

### ➕ Como cadastrar um novo usuário

1. Clique em **"Criar Novo"**.
2. Preencha os campos obrigatórios:

#### 👤 Dados Pessoais
- **Nome completo**
- **E-mail** (também utilizado como login)
- **Telefone** (com máscara automática)
- **Exibir telefone na página de sobre**: define se o número será visível publicamente.

#### 🖼️ Foto
- **Foto**: upload opcional, exibido na página "Sobre o projeto" se selecionado.

#### 🔐 Permissões
- **Cargo**:
  - **Admin**: acesso total ao painel.
  - **Voluntário**: acesso restrito.
> ⚠️ Apenas administradores podem alterar o cargo de um usuário.

#### 🌐 Exibição pública
- **Exibir na página de sobre o projeto**: mostra ou oculta o usuário no site institucional.
- **Enviar e-mails sobre novos apadrinhamentos e atualizações**: ativa alertas automáticos para o usuário.

---

### 🧠 Observações

- Usuários são **autenticados** no Payload CMS (`auth: true`).
- Alterações disparam o hook `CollectionTriggerVercelIfChanged`, que pode atualizar o frontend automaticamente.

---

### 🧑‍💻 Dica para Admins

- Para mudar o **cargo** de outro usuário, você precisa ter o perfil de **admin**.
- O painel usa a **foto** e o campo **show** para montar automaticamente a seção "Sobre o projeto".

