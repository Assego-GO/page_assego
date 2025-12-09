/**
 * ========================================
 * Configuração do Supabase
 * ========================================
 * 
 * IMPORTANTE: Coloque este arquivo em src/lib/supabase.js
 * 
 * Substitua os valores abaixo pelas suas credenciais
 * Encontre em: Supabase Dashboard > Settings > API
 */

import { createClient } from '@supabase/supabase-js'

// Suas credenciais do Supabase (são públicas, sem problema)
const supabaseUrl = 'https://ysxjepahskkvzzriuiqa.supabase.co' // Ex: https://xxxxx.supabase.co
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InlzeGplcGFoc2trdnp6cml1aXFhIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjUyODU2NDUsImV4cCI6MjA4MDg2MTY0NX0.TrlbkVsotYLxTyf06FCUBvkYs5yUMjffrCEgGODvcog' // Ex: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...

export const supabase = createClient(supabaseUrl, supabaseAnonKey)

/**
 * Funções para gerenciar notícias
 */

// Buscar todas as notícias publicadas
export async function getNoticiasPublicadas() {
  const { data, error } = await supabase
    .from('noticias')
    .select('*')
    .eq('publicado', true)
    .order('data_publicacao', { ascending: false })
  
  if (error) {
    console.error('Erro ao buscar notícias:', error)
    return []
  }
  return data
}

// Buscar notícias em destaque
export async function getNoticiasDestaque() {
  const { data, error } = await supabase
    .from('noticias')
    .select('*')
    .eq('publicado', true)
    .eq('destaque', true)
    .order('data_publicacao', { ascending: false })
    .limit(3)
  
  if (error) {
    console.error('Erro ao buscar destaques:', error)
    return []
  }
  return data
}

// Buscar notícia por ID
export async function getNoticiaById(id) {
  const { data, error } = await supabase
    .from('noticias')
    .select('*')
    .eq('id', id)
    .single()
  
  if (error) {
    console.error('Erro ao buscar notícia:', error)
    return null
  }
  return data
}

// Buscar notícias por categoria
export async function getNoticiasPorCategoria(categoria) {
  const { data, error } = await supabase
    .from('noticias')
    .select('*')
    .eq('publicado', true)
    .eq('categoria', categoria)
    .order('data_publicacao', { ascending: false })
  
  if (error) {
    console.error('Erro ao buscar por categoria:', error)
    return []
  }
  return data
}

// ========================================
// FUNÇÕES ADMIN (requer autenticação)
// ========================================

// Criar nova notícia
export async function criarNoticia(noticia) {
  const { data, error } = await supabase
    .from('noticias')
    .insert([noticia])
    .select()
  
  if (error) {
    console.error('Erro ao criar notícia:', error)
    return { error }
  }
  return { data: data[0] }
}

// Atualizar notícia
export async function atualizarNoticia(id, updates) {
  const { data, error } = await supabase
    .from('noticias')
    .update(updates)
    .eq('id', id)
    .select()
  
  if (error) {
    console.error('Erro ao atualizar notícia:', error)
    return { error }
  }
  return { data: data[0] }
}

// Deletar notícia
export async function deletarNoticia(id) {
  const { error } = await supabase
    .from('noticias')
    .delete()
    .eq('id', id)
  
  if (error) {
    console.error('Erro ao deletar notícia:', error)
    return { error }
  }
  return { success: true }
}

// ========================================
// AUTENTICAÇÃO ADMIN
// ========================================

// Login com email/senha
export async function loginAdmin(email, password) {
  const { data, error } = await supabase.auth.signInWithPassword({
    email,
    password
  })
  
  if (error) {
    console.error('Erro no login:', error)
    return { error }
  }
  return { data }
}

// Logout
export async function logoutAdmin() {
  const { error } = await supabase.auth.signOut()
  if (error) {
    console.error('Erro no logout:', error)
  }
}

// Verificar se está logado
export async function getSession() {
  const { data: { session } } = await supabase.auth.getSession()
  return session
}