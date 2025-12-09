# 📰 Sistema de Notícias ASSEGO - Supabase

## Arquivos Criados

```
frontend/
├── src/
│   ├── lib/
│   │   └── supabase.js          # Configuração e funções do Supabase
│   ├── pages/
│   │   ├── Informativo.jsx      # Lista de notícias
│   │   ├── NoticiaDetalhe.jsx   # Página da notícia individual
│   │   └── Admin.jsx            # Painel de gerenciamento
```

---

## 🚀 Passo a Passo de Configuração

### 1. Criar Projeto no Supabase

1. Acesse [supabase.com](https://supabase.com)
2. Crie uma conta (GitHub ou Google)
3. Clique em **"New Project"**
4. Configure:
   - **Name:** `assego-site`
   - **Database Password:** (guarde essa senha!)
   - **Region:** South America (São Paulo)
5. Aguarde ~2 minutos

### 2. Criar a Tabela de Notícias

1. No menu lateral, clique em **"SQL Editor"**
2. Clique em **"New Query"**
3. Cole o conteúdo do arquivo `supabase-setup.sql`
4. Clique em **"Run"** (ou Ctrl+Enter)
5. Deve aparecer: "Success. No rows returned"

### 3. Pegar as Credenciais

1. Vá em **Settings** (ícone de engrenagem)
2. Clique em **API**
3. Copie:
   - **Project URL** (ex: `https://xxxxx.supabase.co`)
   - **anon public** key (começa com `eyJ...`)

### 4. Configurar no Projeto

Abra o arquivo `src/lib/supabase.js` e substitua:

```javascript
const supabaseUrl = 'https://SEU-PROJETO.supabase.co'
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...'
```

### 5. Instalar Dependência

No terminal, dentro da pasta `frontend`:

```bash
npm install @supabase/supabase-js
```

### 6. Adicionar Rotas no App.jsx

```jsx
import NoticiaDetalhe from './pages/NoticiaDetalhe'
import Admin from './pages/Admin'

// Dentro das Routes:
<Route path="/informativo/:id" element={<NoticiaDetalhe />} />
<Route path="/admin" element={<Admin />} />
```

### 7. Criar Usuário Admin

1. No Supabase, vá em **Authentication** > **Users**
2. Clique em **"Add User"** > **"Create New User"**
3. Preencha email e senha
4. Use essas credenciais para logar em `/admin`

---

## 📁 Estrutura da Tabela `noticias`

| Campo | Tipo | Descrição |
|-------|------|-----------|
| `id` | bigint | ID automático |
| `titulo` | text | Título da notícia |
| `resumo` | text | Descrição curta |
| `conteudo` | text | Texto completo |
| `imagem_url` | text | URL da imagem |
| `categoria` | text | Categoria (Geral, Institucional, etc) |
| `destaque` | boolean | Se aparece nos destaques |
| `publicado` | boolean | Se está visível no site |
| `data_publicacao` | timestamp | Data de publicação |

---

## 🔒 Segurança

- **Leitura:** Qualquer pessoa pode ver notícias publicadas
- **Escrita:** Apenas usuários autenticados podem criar/editar/deletar
- As chaves `anon` são seguras para usar no frontend

---

## 📸 Sobre Imagens

Para as imagens das notícias, você pode:

1. **Usar o Storage do Supabase** (recomendado para produção)
2. **Colocar na pasta `/public/noticias/`** do projeto
3. **Usar URLs externas** (Unsplash, etc)

Para configurar o Storage do Supabase:
1. Vá em **Storage** no menu lateral
2. Crie um bucket chamado `noticias`
3. Configure como público

---

## 🎯 Como Usar

### Acessar o Painel Admin
1. Vá para `seusite.com/admin`
2. Faça login com email/senha cadastrado no Supabase
3. Crie, edite ou delete notícias

### Adicionar Notícia
1. Clique em "Nova Notícia"
2. Preencha os campos
3. Marque "Destaque" se quiser que apareça no topo
4. Clique em "Criar"

### Editar/Excluir
- Use os ícones na tabela para editar ou excluir

---

## ❓ Problemas Comuns

**"Failed to fetch" ou erro de conexão:**
- Verifique se a URL e chave do Supabase estão corretas
- Verifique se o projeto está ativo no Supabase

**Não consigo fazer login no admin:**
- Crie um usuário em Authentication > Users
- Verifique email e senha

**Notícias não aparecem:**
- Verifique se `publicado` está `true`
- Execute o SQL novamente para criar dados de exemplo

---

## 📞 Suporte

Em caso de dúvidas, entre em contato com o desenvolvedor.
