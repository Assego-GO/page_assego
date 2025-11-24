/**
 * ========================================
 * API Service - Comunicação com Backend
 * ========================================
 * 
 * Centraliza todas as chamadas para a API
 */

import axios from 'axios'

// URL base da API
const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:3001/api'

// Instância do Axios com configurações padrão
const api = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json'
  }
})

// ========================================
// CONTATOS / FILIAÇÃO
// ========================================

/**
 * Envia solicitação de filiação
 * @param {Object} data - { nome, whatsapp, corporacao }
 */
export const submitContact = async (data) => {
  try {
    const response = await api.post('/contact', data)
    return response.data
  } catch (error) {
    throw error.response?.data || { message: 'Erro de conexão' }
  }
}

// ========================================
// PARCEIROS
// ========================================

/**
 * Busca todos os parceiros
 */
export const getPartners = async () => {
  try {
    const response = await api.get('/partners')
    return response.data
  } catch (error) {
    console.error('Erro ao buscar parceiros:', error)
    return { success: false, data: [] }
  }
}

/**
 * Busca parceiros em destaque
 */
export const getFeaturedPartners = async () => {
  try {
    const response = await api.get('/partners/featured')
    return response.data
  } catch (error) {
    console.error('Erro ao buscar parceiros destaque:', error)
    return { success: false, data: [] }
  }
}

// ========================================
// ESTATÍSTICAS
// ========================================

/**
 * Busca estatísticas para exibição
 */
export const getStats = async () => {
  try {
    const response = await api.get('/stats')
    return response.data
  } catch (error) {
    console.error('Erro ao buscar estatísticas:', error)
    return { success: false, data: [] }
  }
}

export default api
