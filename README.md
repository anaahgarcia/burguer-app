# Burguer App

Aplicação móvel de delivery de hambúrgueres desenvolvida com React Native e Expo. Simula o fluxo completo de um pedido — desde o login até ao acompanhamento em tempo real.

## Funcionalidades

- Login simples (sem autenticação real)
- Verificação do horário de funcionamento (Qui–Dom, 19h–22h30)
- Menu com hambúrgueres, acompanhamentos e bebidas
- Carrinho de compras com gestão de quantidades
- Ecrã de pagamento com múltiplos métodos (MB Way, cartão, dinheiro)
- Acompanhamento do pedido com progresso automático em 4 etapas

## Ecrãs

| Ecrã | Descrição |
|------|-----------|
| **Login** | Formulário de email e password |
| **Home** | Introdução da morada e estado do restaurante |
| **Menu** | Lista de produtos por categoria com carrinho |
| **Pagamento** | Resumo do pedido e escolha do método de pagamento |
| **Acompanhamento** | Progresso do pedido em tempo real |

## Menu disponível

**Hambúrgueres** — O Clássico (11€), O Bacon Lover (13€), O Picante (12€), O Veggie (11€)

**Acompanhamentos** — Batata Frita (3,50€), Batata Doce Frita (4€)

**Bebidas** — Coca-Cola (2€), Água (1€), Sumo Natural (3€)

## Tecnologias

- [Expo](https://expo.dev) ~54
- [React Native](https://reactnative.dev) 0.81.5
- [@react-navigation/stack](https://reactnavigation.org) ^7

## Instalação e arranque

```bash
npm install
npm start        # Abre o QR code para o Expo Go
npm run ios      # Simulador iOS
npm run android  # Emulador Android
npm run web      # Browser
```

## Estrutura

```
burguer-app/
├── App.js                          # Navegação principal (Stack Navigator)
├── screens/
│   ├── LoginScreen.js
│   ├── HomeScreen.js
│   ├── MenuScreen.js
│   ├── PagamentoScreen.js
│   └── AcompanhamentoScreen.js
└── assets/
```
