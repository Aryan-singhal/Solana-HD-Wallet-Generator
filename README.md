# HD Wallet Learning Project (Solana)

This project is a **learning-focused implementation of an HD (Hierarchical Deterministic) wallet** built to understand how modern crypto wallets work internally.

The goal is **education and clarity**, not production usage.

⚠️ **Demo / educational project only. Do NOT use with real funds.**

---

## ✨ Features

- Generate a **12-word mnemonic (BIP39)**
- Manually set an existing mnemonic
- Derive **multiple Solana wallets** from the same mnemonic
- Deterministic wallet derivation using HD paths  
  `m/44'/501'/index'/0'`
- Display **public & private keys** (demo-only)
- Hide / reveal private keys with an eye toggle
- Delete derived wallets from the UI
- Clean React + TypeScript frontend
- Node.js backend for cryptographic operations

---

## 🧠 Concepts Covered

- BIP39 mnemonic generation
- Seed derivation from mnemonic
- HD wallet indexing
- Why crypto should live in backend (or wallet extensions)
- Proper React state management for wallet lists

---

## 🛠 Tech Stack

### Frontend
- React
- TypeScript
- Vite
- Tailwind CSS
- shadcn/ui
- lucide-react

### Backend
- Node.js
- Express
- TypeScript
- bip39
- ed25519-hd-key
- tweetnacl
- @solana/web3.js

---

## 📂 Project Structure
```bash
root/
├── frontend/
│ ├── src/
│ │ ├── components/
│ │ ├── api/
│ │ └── App.tsx
│ └── vite.config.ts
├── backend/
│ ├── src/
│ │ ├── routes/
│ │ ├── controllers/
│ │ └── index.ts
└── README.md

```
---

## 🚀 Getting Started

### 1️⃣ Clone the repository

```bash
git clone https://github.com/<your-username>/<repo-name>.git
cd <repo-name>
```

### 2️⃣ Backend setup
```bash
cd backend
npm install
npm run dev
```


Backend runs on:

http://localhost:4000
---

### 3️⃣ Frontend setup
```bash
cd frontend
npm install
npm run dev
```

Frontend runs on:

http://localhost:5173
---

### 🔌 API Endpoints (Demo)

#### Generate mnemonic
GET /api/wallet/mnemonic


##### Response:
```bash

{
  "mnemonic": "abandon ability able ..."
}
```

#### Derive wallet keypair (demo-only)
POST /api/wallet/publickey


##### Body:
```bash
{
  "mnemonic": "abandon ability able ...",
  "index": 0
}
```

##### Response:
```bash
{
  "publicKey": "7YkF7mXhK...",
  "privateKey": "a3f9e0..."
}
```
---
## Security Notes

Private keys are intentionally exposed only for learning

Never deploy this backend publicly

Never use real funds

Real wallets use browser extensions or secure enclaves

---
## What This Project Is NOT

Not a production wallet

Not secure key storage

Not safe for real assets

---
## License

MIT — for learning and experimentation only.
