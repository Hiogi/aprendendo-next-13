export type TransacaoTipo = 'DEPOSITO' | 'SAQUE' | 'PIX' | 'TRANSFERENCIA';


// Forma mais avançada de fazer uma descriminação
/*export const TRANSACAO_TIPOS = [
  'DEPOSITO',
  'SAQUE',
  'PIX',
  'TRANSFERENCIA',
] as const;

export type TransacaoTipo = typeof TRANSACAO_TIPOS[number];

export function isTransacaoTipo(valor: string): valor is TransacaoTipo {
  return TRANSACAO_TIPOS.includes(valor as TransacaoTipo);
}*/