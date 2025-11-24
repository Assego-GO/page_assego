/**
 * ========================================
 * Rotas de Estatísticas
 * ========================================
 * 
 * Retorna dados para a seção de estatísticas
 */

import express from 'express';
import { getStats } from '../controllers/stats.controller.js';

const router = express.Router();

/**
 * GET /api/stats
 * Retorna todas as estatísticas do ASSEGO
 */
router.get('/', getStats);

export default router;
