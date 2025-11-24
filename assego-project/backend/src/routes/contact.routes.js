/**
 * ========================================
 * Rotas de Contato / Filiação
 * ========================================
 * 
 * Gerencia o formulário de filiação e contatos
 */

import express from 'express';
import { 
  submitContact, 
  getContacts 
} from '../controllers/contact.controller.js';

const router = express.Router();

/**
 * POST /api/contact
 * Recebe dados do formulário de filiação
 * 
 * Body esperado:
 * {
 *   "nome": "Sgt Silva",
 *   "whatsapp": "(62) 99999-9999",
 *   "corporacao": "PMGO" ou "CBMGO"
 * }
 */
router.post('/', submitContact);

/**
 * GET /api/contact
 * Lista todos os contatos (para painel admin futuro)
 */
router.get('/', getContacts);

export default router;
