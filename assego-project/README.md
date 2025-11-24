# 🎖️ ASSEGO - Site Institucional

Site moderno da Associação dos Subtenentes e Sargentos do Estado de Goiás, construído com React + Node.js.

## 📁 Estrutura do Projeto

```
assego-project/
├── backend/          # API Node.js + Express
├── frontend/         # Aplicação React + Vite
├── GUIA-PASSO-A-PASSO.md  # Tutorial completo
└── README.md         # Este arquivo
```

## 🚀 Como Rodar

### Pré-requisitos
- Node.js 18+
- npm ou yarn

### 1. Backend

```bash
cd backend
npm install
npm run dev
```
O servidor estará em: `http://localhost:3001`

### 2. Frontend

```bash
cd frontend
npm install
npm run dev
```
A aplicação estará em: `http://localhost:5173`

## 🛠️ Tecnologias

### Frontend
- React 18
- Vite
- Tailwind CSS
- Framer Motion
- Phosphor Icons
- Axios

### Backend
- Node.js
- Express
- Helmet (segurança)
- CORS
- Morgan (logs)

## 📚 Documentação

Consulte o arquivo `GUIA-PASSO-A-PASSO.md` para:
- Explicação detalhada de cada parte
- Como funciona a componentização
- Como fazer deploy
- Dicas de desenvolvimento

## 🎨 Cores da Marca

| Cor | Hex | Uso |
|-----|-----|-----|
| Azul Principal | `#000e72` | Elementos de destaque |
| Amarelo | `#ffdf00` | CTAs e destaques |
| Preto Militar | `#050A18` | Backgrounds |

## 📱 Responsividade

O site é totalmente responsivo:
- Mobile First
- Breakpoints: sm, md, lg, xl

## 🔒 Segurança

- Helmet para headers HTTP seguros
- CORS configurado
- Validação de dados no backend

## 📄 Licença

Projeto proprietário - ASSEGO © 2025
