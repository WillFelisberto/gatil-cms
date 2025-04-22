export const forgotPasswordTemplate = (name: string, url: string) => `
  <div style="font-family: Arial, sans-serif; background-color: #f9f9f9; padding: 40px 20px; color: #333;">
    <div style="max-width: 600px; margin: auto; background-color: #fff; padding: 32px; border-radius: 8px; box-shadow: 0 2px 6px rgba(0,0,0,0.1);">
      <h1 style="color: #0c3c59; text-align: center;">🐾 Gatil dos Resgatados</h1>
      <h2 style="text-align: center; color: #013274;">Redefinição de Senha</h2>
      <p>Olá <strong>${name}</strong>,</p>
      <p>Recebemos uma solicitação para redefinir sua senha. Se foi você, clique no botão abaixo para continuar:</p>
      <div style="text-align: center; margin: 30px 0;">
        <a target="_blank" href="${url}" style="background-color: #013274; color: #fff; padding: 14px 28px; text-decoration: none; border-radius: 6px; display: inline-block; font-size: 16px;">
          Redefinir Senha
        </a>
      </div>
      <p>Se você não solicitou essa redefinição, pode ignorar este e-mail.</p>
      <hr style="margin: 40px 0;" />
      <p style="text-align: center; font-size: 12px; color: #888;">© ${new Date().getFullYear()} Gatil dos Resgatados. Todos os direitos reservados.</p>
    </div>
  </div>
`;
