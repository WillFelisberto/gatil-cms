export function formatPhoneNumber(phone: string): string {
  const cleaned = phone.replace(/\D/g, ''); // Remove tudo que não for número

  if (cleaned.length === 10) {
    // Fixo ou celular antigo: (99) 9999-9999
    return cleaned.replace(/(\d{2})(\d{4})(\d{4})/, '($1) $2-$3');
  } else if (cleaned.length === 11) {
    // Celular com 9 dígitos: (99) 99999-9999
    return cleaned.replace(/(\d{2})(\d{5})(\d{4})/, '($1) $2-$3');
  } else {
    // Número inválido ou fora do padrão esperado
    return phone;
  }
}
