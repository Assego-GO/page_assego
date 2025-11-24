/**
 * ========================================
 * ASSEGO - Servidor Principal (server.js)
 * ========================================
 * 
 * Este é o ponto de entrada do backend.
 * Aqui configuramos o Express e todos os middlewares.
 */

// Importações
import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import morgan from 'morgan';
import dotenv from 'dotenv';

// Importar rotas
import contactRoutes from './routes/contact.routes.js';
import partnersRoutes from './routes/partners.routes.js';
import statsRoutes from './routes/stats.routes.js';

// Carregar variáveis de ambiente do arquivo .env
dotenv.config();

// Criar aplicação Express
const app = express();

// Definir porta (usa a do .env ou 3001 como padrão)
const PORT = process.env.PORT || 3001;

// ========================================
// MIDDLEWARES
// ========================================

/**
 * helmet() - Adiciona headers de segurança HTTP
 * Protege contra ataques comuns como XSS, clickjacking, etc.
 */
app.use(helmet());

/**
 * cors() - Permite requisições de outros domínios
 * Necessário para o frontend (React) acessar a API
 */
app.use(cors({
  origin: process.env.FRONTEND_URL || 'http://localhost:5173',
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  allowedHeaders: ['Content-Type', 'Authorization']
}));

/**
 * morgan() - Registra logs das requisições no console
 * 'dev' = formato colorido e resumido para desenvolvimento
 */
app.use(morgan('dev'));

/**
 * express.json() - Permite receber dados JSON no body das requisições
 */
app.use(express.json());

/**
 * express.urlencoded() - Permite receber dados de formulários HTML
 */
app.use(express.urlencoded({ extended: true }));

// ========================================
// ROTAS
// ========================================

// Rota de teste (verificar se API está funcionando)
app.get('/', (req, res) => {
  res.json({
    success: true,
    message: '🎖️ API ASSEGO está funcionando!',
    version: '1.0.0',
    endpoints: {
      contact: '/api/contact',
      partners: '/api/partners',
      stats: '/api/stats'
    }
  });
});

// Rota de saúde (para monitoramento)
app.get('/health', (req, res) => {
  res.json({
    status: 'healthy',
    timestamp: new Date().toISOString()
  });
});

// Registrar rotas da API
app.use('/api/contact', contactRoutes);
app.use('/api/partners', partnersRoutes);
app.use('/api/stats', statsRoutes);

// ========================================
// TRATAMENTO DE ERROS
// ========================================

// Rota não encontrada (404)
app.use((req, res, next) => {
  res.status(404).json({
    success: false,
    message: 'Rota não encontrada',
    path: req.originalUrl
  });
});

// Erro geral (500)
app.use((error, req, res, next) => {
  console.error('❌ Erro:', error.message);
  res.status(500).json({
    success: false,
    message: 'Erro interno do servidor',
    error: process.env.NODE_ENV === 'development' ? error.message : undefined
  });
});

// ========================================
// INICIAR SERVIDOR
// ========================================

app.listen(PORT, () => {
  console.log('');
  console.log('========================================');
  console.log('🎖️  ASSEGO - Backend API');
  console.log('========================================');
  console.log(`✅ Servidor rodando em: http://localhost:${PORT}`);
  console.log(`📍 Ambiente: ${process.env.NODE_ENV || 'development'}`);
  console.log('========================================');
  console.log('');
});

export default app;
