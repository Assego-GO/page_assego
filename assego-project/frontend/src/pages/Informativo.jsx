/**
 * ========================================
 * Informativo - Página de Notícias
 * ========================================
 * 
 * Busca notícias do Supabase e exibe em grid
 */

import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Newspaper, Calendar, Tag, ArrowRight, MagnifyingGlass } from '@phosphor-icons/react'
import { getNoticiasPublicadas, getNoticiasDestaque } from '../lib/Supabase'

function Informativo() {
  const [noticias, setNoticias] = useState([])
  const [destaques, setDestaques] = useState([])
  const [loading, setLoading] = useState(true)
  const [categoriaAtiva, setCategoriaAtiva] = useState('Todas')
  const [busca, setBusca] = useState('')

  // Categorias disponíveis
  const categorias = ['Todas', 'Institucional', 'Benefícios', 'Jurídico', 'Lazer', 'Comunicação', 'Geral']

  // Buscar notícias ao carregar
  useEffect(() => {
    async function fetchNoticias() {
      setLoading(true)
      const [todasNoticias, noticiasDestaque] = await Promise.all([
        getNoticiasPublicadas(),
        getNoticiasDestaque()
      ])
      setNoticias(todasNoticias)
      setDestaques(noticiasDestaque)
      setLoading(false)
    }
    fetchNoticias()
  }, [])

  // Filtrar notícias por categoria e busca
  const noticiasFiltradas = noticias.filter(noticia => {
    const matchCategoria = categoriaAtiva === 'Todas' || noticia.categoria === categoriaAtiva
    const matchBusca = noticia.titulo.toLowerCase().includes(busca.toLowerCase()) ||
                       noticia.resumo?.toLowerCase().includes(busca.toLowerCase())
    return matchCategoria && matchBusca
  })

  // Formatar data
  const formatarData = (data) => {
    return new Date(data).toLocaleDateString('pt-BR', {
      day: '2-digit',
      month: 'short',
      year: 'numeric'
    })
  }

  return (
    <div className="min-h-screen bg-[#050A18]">
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[#000e72]/30 to-transparent"></div>
        <div className="absolute top-20 left-0 w-96 h-96 bg-gold-500/10 rounded-full blur-[150px]"></div>
        
        <div className="container mx-auto px-6 relative z-10">
          {/* Logos */}
          <div className="flex items-center justify-center gap-6 mb-8">
            <img src="/logo.png" alt="ASSEGO" className="w-20 h-20 object-contain" />
            <div className="w-px h-16 bg-white/20"></div>
            <img src="/logopre.png" alt="Presidente" className="w-16 h-20 object-contain" />
          </div>

          <div className="text-center">
            <span className="inline-flex items-center gap-2 bg-gold-500/10 border border-gold-500/30 text-gold-400 px-4 py-2 rounded-full text-sm font-bold mb-6">
              <Newspaper size={18} />
              INFORMATIVO ASSEGO
            </span>
            <h1 className="font-display font-black text-4xl md:text-6xl text-white mb-4">
              Notícias e <span className="text-gradient-gold">Comunicados</span>
            </h1>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Fique por dentro de tudo que acontece na ASSEGO. Novidades, conquistas e informações importantes para você, associado.
            </p>
          </div>
        </div>
      </section>

      {/* Barra de Busca e Filtros */}
      <section className="py-8 border-y border-white/10 bg-[#0a0f1c]">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row gap-6 items-center justify-between">
            {/* Busca */}
            <div className="relative w-full md:w-96">
              <MagnifyingGlass size={20} className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500" />
              <input
                type="text"
                placeholder="Buscar notícias..."
                value={busca}
                onChange={(e) => setBusca(e.target.value)}
                className="w-full pl-12 pr-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-gold-500/50 transition"
              />
            </div>

            {/* Categorias */}
            <div className="flex flex-wrap gap-2 justify-center">
              {categorias.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setCategoriaAtiva(cat)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                    categoriaAtiva === cat
                      ? 'bg-gold-500 text-black'
                      : 'bg-white/5 text-gray-400 hover:bg-white/10 hover:text-white'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Notícias em Destaque */}
      {destaques.length > 0 && categoriaAtiva === 'Todas' && busca === '' && (
        <section className="py-16 bg-[#050A18]">
          <div className="container mx-auto px-6">
            <h2 className="text-2xl font-display font-bold text-white mb-8 flex items-center gap-3">
              <span className="w-1 h-8 bg-gold-500 rounded-full"></span>
              Destaques
            </h2>

            <div className="grid md:grid-cols-3 gap-6">
              {destaques.map((noticia, index) => (
                <Link
                  key={noticia.id}
                  to={`/informativo/${noticia.id}`}
                  className={`group relative overflow-hidden rounded-2xl ${
                    index === 0 ? 'md:col-span-2 md:row-span-2' : ''
                  }`}
                >
                  <div className={`relative ${index === 0 ? 'h-[400px] md:h-full' : 'h-[200px]'}`}>
                    <img
                      src={noticia.imagem_url || '/noticias/placeholder.jpg'}
                      alt={noticia.titulo}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      onError={(e) => { e.target.src = 'https://images.unsplash.com/photo-1504711434969-e33886168f5c?w=800' }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent"></div>
                    
                    <div className="absolute bottom-0 left-0 right-0 p-6">
                      <span className="inline-block bg-gold-500 text-black text-xs font-bold px-3 py-1 rounded-full mb-3">
                        {noticia.categoria}
                      </span>
                      <h3 className={`font-display font-bold text-white mb-2 group-hover:text-gold-400 transition ${
                        index === 0 ? 'text-2xl md:text-3xl' : 'text-lg'
                      }`}>
                        {noticia.titulo}
                      </h3>
                      {index === 0 && (
                        <p className="text-gray-300 text-sm line-clamp-2">{noticia.resumo}</p>
                      )}
                      <span className="text-gray-500 text-xs mt-2 block">
                        {formatarData(noticia.data_publicacao)}
                      </span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Lista de Notícias */}
      <section className="py-16 bg-[#0a0f1c]">
        <div className="container mx-auto px-6">
          <h2 className="text-2xl font-display font-bold text-white mb-8 flex items-center gap-3">
            <span className="w-1 h-8 bg-gold-500 rounded-full"></span>
            {categoriaAtiva === 'Todas' ? 'Todas as Notícias' : categoriaAtiva}
            <span className="text-gray-500 text-base font-normal">({noticiasFiltradas.length})</span>
          </h2>

          {loading ? (
            // Loading Skeleton
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[...Array(6)].map((_, i) => (
                <div key={i} className="bg-white/5 rounded-2xl overflow-hidden animate-pulse">
                  <div className="h-48 bg-white/10"></div>
                  <div className="p-6 space-y-3">
                    <div className="h-4 bg-white/10 rounded w-1/4"></div>
                    <div className="h-6 bg-white/10 rounded w-3/4"></div>
                    <div className="h-4 bg-white/10 rounded w-full"></div>
                  </div>
                </div>
              ))}
            </div>
          ) : noticiasFiltradas.length === 0 ? (
            // Nenhuma notícia encontrada
            <div className="text-center py-20">
              <Newspaper size={64} className="text-gray-700 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-white mb-2">Nenhuma notícia encontrada</h3>
              <p className="text-gray-500">Tente buscar por outro termo ou categoria.</p>
            </div>
          ) : (
            // Grid de Notícias
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {noticiasFiltradas.map((noticia) => (
                <Link
                  key={noticia.id}
                  to={`/informativo/${noticia.id}`}
                  className="group bg-white/5 border border-white/10 rounded-2xl overflow-hidden hover:border-gold-500/30 transition-all duration-300 hover:-translate-y-1"
                >
                  {/* Imagem */}
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={noticia.imagem_url || '/noticias/placeholder.jpg'}
                      alt={noticia.titulo}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      onError={(e) => { e.target.src = 'https://images.unsplash.com/photo-1504711434969-e33886168f5c?w=800' }}
                    />
                    <div className="absolute top-4 left-4">
                      <span className="bg-[#000e72] text-white text-xs font-bold px-3 py-1 rounded-full">
                        {noticia.categoria}
                      </span>
                    </div>
                  </div>

                  {/* Conteúdo */}
                  <div className="p-6">
                    <div className="flex items-center gap-2 text-gray-500 text-xs mb-3">
                      <Calendar size={14} />
                      {formatarData(noticia.data_publicacao)}
                    </div>
                    
                    <h3 className="font-display font-bold text-white text-lg mb-2 group-hover:text-gold-400 transition line-clamp-2">
                      {noticia.titulo}
                    </h3>
                    
                    <p className="text-gray-400 text-sm line-clamp-2 mb-4">
                      {noticia.resumo}
                    </p>

                    <span className="inline-flex items-center gap-2 text-gold-400 text-sm font-medium group-hover:gap-3 transition-all">
                      Ler mais <ArrowRight size={16} />
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* CTA Revista */}
      <section className="py-16 bg-gradient-to-r from-[#000e72] to-blue-900">
        <div className="container mx-auto px-6 text-center">
          <h2 className="font-display font-bold text-2xl md:text-3xl text-white mb-4">
            Confira também nossa Revista ASSEGO
          </h2>
          <p className="text-white/80 mb-8 max-w-xl mx-auto">
            Edição completa com todas as novidades, conquistas e informações da associação.
          </p>
          <a
            href="/Revista_ASSEGO_2025_web.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-white text-[#000e72] px-8 py-4 rounded-full font-bold hover:bg-gray-100 transition-all hover:scale-105"
          >
            <Newspaper size={20} />
            VER REVISTA DIGITAL
          </a>
        </div>
      </section>
    </div>
  )
}

export default Informativo