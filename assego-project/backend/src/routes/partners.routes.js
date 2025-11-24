/**
 * ========================================
 * Rotas de Parceiros / Convênios
 * ========================================
 * 
 * Gerencia os parceiros e convênios do ASSEGO
 */

import express from 'express';
import { 
  getAllPartners, 
  getPartnerById,
  getFeaturedPartners
} from '../controllers/partners.controller.js';

const router = express.Router();

/**
 * GET /api/partners
 * Lista todos os parceiros
 */
router.get('/', getAllPartners);

/**
 * GET /api/partners/featured
 * Lista apenas parceiros em destaque
 */
router.get('/featured', getFeaturedPartners);

/**
 * GET /api/partners/:id
 * Busca um parceiro específico pelo ID
 */
router.get('/:id', getPartnerById);

export default router;
