# 🚀 Guia Completo: Transformando ASSEGO HTML para React + Node.js

## 📚 Índice
1. [Pré-requisitos](#1-pré-requisitos)
2. [Estrutura do Projeto](#2-estrutura-do-projeto)
3. [Configurando o Backend (Node.js)](#3-configurando-o-backend-nodejs)
4. [Configurando o Frontend (React)](#4-configurando-o-frontend-react)
5. [Componentização](#5-componentização)
6. [Executando o Projeto](#6-executando-o-projeto)
7. [Deploy](#7-deploy)

---

## 1. Pré-requisitos

### Instale as ferramentas necessárias:

```bash
# Verifique se o Node.js está instalado (versão 18+)
node --version

# Verifique se o npm está instalado
npm --version

# Se não tiver, instale o Node.js em: https://nodejs.org/
```

### Ferramentas recomendadas:
- **VS Code** - Editor de código
- **Git** - Controle de versão
- **Postman** - Testar APIs (opcional)

---

## 2. Estrutura do Projeto

```
assego-project/
├── backend/                    # Servidor Node.js
│   ├── src/
│   │   ├── controllers/        # Lógica das rotas
│   │   ├── routes/             # Definição das rotas
│   │   ├── middleware/         # Middlewares (auth, cors, etc)
│   │   └── server.js           # Arquivo principal
│   ├── package.json
│   └── .env
│
├── frontend/                   # Aplicação React
│   ├── public/
│   │   └── logo.png
│   ├── src/
│   │   ├── components/         # Componentes reutilizáveis
│   │   │   ├── Navbar.jsx
│   │   │   ├── Hero.jsx
│   │   │   ├── Stats.jsx
│   │   │   ├── Partners.jsx
│   │   │   ├── Infrastructure.jsx
│   │   │   ├── Activities.jsx
│   │   │   ├── Destinations.jsx
│   │   │   ├── Social.jsx
│   │   │   ├── CTA.jsx
│   │   │   ├── Footer.jsx
│   │   │   └── WhatsAppButton.jsx
│   │   ├── hooks/              # Custom hooks
│   │   ├── styles/             # CSS customizado
│   │   ├── App.jsx
│   │   ├── main.jsx
│   │   └── index.css
│   ├── package.json
│   ├── tailwind.config.js
│   └── vite.config.js
│
└── README.md
```

---

## 3. Configurando o Backend (Node.js)

### Passo 3.1: Criar a pasta do backend

```bash
mkdir -p assego-project/backend/src/{controllers,routes,middleware}
cd assego-project/backend
```

### Passo 3.2: Inicializar o projeto Node.js

```bash
npm init -y
```

### Passo 3.3: Instalar dependências

```bash
npm install express cors dotenv helmet morgan
npm install -D nodemon
```

**O que cada pacote faz:**
- `express` - Framework web para Node.js
- `cors` - Permite requisições de outros domínios
- `dotenv` - Gerencia variáveis de ambiente
- `helmet` - Segurança HTTP
- `morgan` - Logs de requisições
- `nodemon` - Reinicia servidor automaticamente (desenvolvimento)

### Passo 3.4: Configurar package.json

Adicione os scripts:
```json
{
  "scripts": {
    "start": "node src/server.js",
    "dev": "nodemon src/server.js"
  }
}
```

### Passo 3.5: Criar os arquivos do backend

Os arquivos estão na pasta `backend/` deste projeto.

---

## 4. Configurando o Frontend (React)

### Passo 4.1: Criar o projeto React com Vite

```bash
cd assego-project
npm create vite@latest frontend -- --template react
cd frontend
```

### Passo 4.2: Instalar dependências

```bash
npm install

# Tailwind CSS
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p

# Outras dependências úteis
npm install react-router-dom axios framer-motion
npm install @phosphor-icons/react
```

**O que cada pacote faz:**
- `react-router-dom` - Navegação entre páginas
- `axios` - Requisições HTTP
- `framer-motion` - Animações avançadas
- `@phosphor-icons/react` - Ícones (mesmo usado no HTML original)

### Passo 4.3: Configurar Tailwind

Edite `tailwind.config.js` com as cores customizadas do ASSEGO.

### Passo 4.4: Configurar CSS global

Adicione os estilos globais em `src/index.css`.

---

## 5. Componentização

### Conceito de Componentes

No React, dividimos a interface em **componentes reutilizáveis**. Cada seção do seu HTML vira um componente:

| Seção HTML | Componente React |
|------------|------------------|
| `<header>` | `Navbar.jsx` |
| Hero Section | `Hero.jsx` |
| Estatísticas | `Stats.jsx` |
| Carrossel Parceiros | `Partners.jsx` |
| Infraestrutura | `Infrastructure.jsx` |
| Atividades | `Activities.jsx` |
| Convênios | `Destinations.jsx` |
| Social | `Social.jsx` |
| CTA | `CTA.jsx` |
| `<footer>` | `Footer.jsx` |
| WhatsApp Float | `WhatsAppButton.jsx` |

### Anatomia de um Componente React

```jsx
// Importações
import { useState, useEffect } from 'react';

// Definição do componente
function MeuComponente({ prop1, prop2 }) {
  // Estado (dados que mudam)
  const [contador, setContador] = useState(0);
  
  // Efeitos (código que roda em momentos específicos)
  useEffect(() => {
    // Código que roda quando o componente monta
  }, []);
  
  // Funções
  const handleClick = () => {
    setContador(contador + 1);
  };
  
  // JSX (HTML + JavaScript)
  return (
    <div className="minha-classe">
      <h1>{prop1}</h1>
      <button onClick={handleClick}>
        Clicado {contador} vezes
      </button>
    </div>
  );
}

// Exportação
export default MeuComponente;
```

---

## 6. Executando o Projeto

### Terminal 1 - Backend:
```bash
cd assego-project/backend
npm run dev
# Servidor rodando em http://localhost:3001
```

### Terminal 2 - Frontend:
```bash
cd assego-project/frontend
npm run dev
# Aplicação rodando em http://localhost:5173
```

---

## 7. Deploy

### Opções de Deploy:

#### Frontend (React):
- **Vercel** (recomendado) - Gratuito
- **Netlify** - Gratuito
- **GitHub Pages** - Gratuito

#### Backend (Node.js):
- **Railway** - Gratuito com limites
- **Render** - Gratuito com limites
- **Heroku** - Pago
- **DigitalOcean** - Pago

### Deploy no Vercel (Frontend):

```bash
npm install -g vercel
cd frontend
vercel
```

### Deploy no Railway (Backend):

1. Conecte seu repositório GitHub
2. Configure as variáveis de ambiente
3. Deploy automático!

---

## 📝 Dicas Importantes

### 1. Desenvolvimento
- Use `console.log()` para debug
- Instale a extensão React DevTools no navegador
- Mantenha componentes pequenos e focados

### 2. Performance
- Use `React.memo()` para componentes que não mudam muito
- Lazy loading para imagens
- Code splitting para rotas

### 3. Organização
- Um componente por arquivo
- Nomes descritivos
- Comentários quando necessário

---

## 🆘 Problemas Comuns

### "Module not found"
```bash
npm install <nome-do-pacote>
```

### "CORS error"
Verifique se o backend tem o middleware CORS configurado.

### "Port already in use"
```bash
# Mate o processo na porta
npx kill-port 3001
```

---

## 📚 Recursos para Estudar

1. **React Docs**: https://react.dev
2. **Tailwind CSS**: https://tailwindcss.com
3. **Node.js**: https://nodejs.org/docs
4. **Express**: https://expressjs.com

---

Criado com ❤️ para ASSEGO
