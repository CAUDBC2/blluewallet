# BllueWallet

Protótipo funcional de uma carteira de Bitcoin, para fins acadêmicos e de
demonstração. Não há integração real com blockchain nem movimentação de
dinheiro real — todos os dados são fictícios, exceto a cotação do BTC/USD,
obtida em tempo real na API pública da CoinGecko.

Visual e UX inspirados no app [BlueWallet](https://bluewallet.io).

## Stack

- React + Vite
- Tailwind CSS
- lucide-react (ícones)
- Cotação BTC/USD via CoinGecko, atualizada a cada 30s

## Rodando localmente

```bash
npm install
npm run dev
```

## Login de demonstração

- Usuário: `demo`
- Senha: `123456`

## Funcionalidades

- Tela inicial com cotação do BTC em tempo real e saldo simulado (0,8776 BTC)
- Saque: conta bancária fictícia com campos copiáveis + chave de confirmação
  de 24 dígitos
- Depósito: valor em BTC + senha, atualiza o saldo simulado

⚠️ Projeto puramente educacional — nenhuma transação é real.
