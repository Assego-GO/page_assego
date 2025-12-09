/**
 * ========================================
 * Informativo - Página de Notícias
 * ========================================
 * 
 * Busca notícias do Supabase e exibe em grid
 */

import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Newspaper, Calendar, ArrowRight, MagnifyingGlass } from '@phosphor-icons/react'
import { getNoticiasPublicadas, getNoticiasDestaque } from '../lib/Supabase.js'

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
      <section className="relative pt-32 sm:pt-36 lg:pt-40 pb-16 sm:pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[#000e72]/30 to-transparent"></div>
        <div className="absolute top-20 left-0 w-96 h-96 bg-gold-500/10 rounded-full blur-[150px]"></div>
        
        <div className="container mx-auto px-4 sm:px-6 relative z-10">
          {/* Logos */}
          <div className="flex items-center justify-center gap-4 sm:gap-6 mb-6 sm:mb-8">
            <img src="/logo.png" alt="ASSEGO" className="w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20 object-contain" />
            <div className="w-px h-10 sm:h-12 md:h-16 bg-white/20"></div>
            <img src="/logopre.png" alt="Presidente" className="w-10 h-14 sm:w-12 sm:h-16 md:w-16 md:h-20 object-contain" />
          </div>

          <div className="text-center">
            <span className="inline-flex items-center gap-2 bg-gold-500/10 border border-gold-500/30 text-gold-400 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm font-bold mb-4 sm:mb-6">
              <Newspaper size={16} className="sm:hidden" />
              <Newspaper size={18} className="hidden sm:block" />
              INFORMATIVO ASSEGO
            </span>
            <h1 className="font-display font-black text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl text-white mb-3 sm:mb-4">
              Notícias e <span className="text-gradient-gold">Comunicados</span>
            </h1>
            <p className="text-gray-400 text-sm sm:text-base lg:text-lg max-w-2xl mx-auto px-2">
              Fique por dentro de tudo que acontece na ASSEGO. Novidades, conquistas e informações importantes para você, associado.
            </p>
          </div>
        </div>
      </section>

      {/* Barra de Busca e Filtros */}
      <section className="py-4 sm:py-6 lg:py-8 border-y border-white/10 bg-[#0a0f1c]">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="flex flex-col gap-4 sm:gap-6">
            {/* Busca */}
            <div className="relative w-full max-w-md mx-auto lg:mx-0">
              <MagnifyingGlass size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500" />
              <input
                type="text"
                placeholder="Buscar notícias..."
                value={busca}
                onChange={(e) => setBusca(e.target.value)}
                className="w-full pl-11 pr-4 py-2.5 sm:py-3 bg-white/5 border border-white/10 rounded-xl text-white text-sm sm:text-base placeholder-gray-500 focus:outline-none focus:border-gold-500/50 transition"
              />
            </div>

            {/* Categorias */}
            <div className="overflow-x-auto -mx-4 px-4 sm:mx-0 sm:px-0 pb-1">
              <div className="flex gap-2 min-w-max sm:flex-wrap sm:min-w-0 justify-start lg:justify-center">
                {categorias.map((cat) => (
                  <button
                    key={cat}
                    onClick={() => setCategoriaAtiva(cat)}
                    className={`px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm font-medium transition-all whitespace-nowrap ${
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
        </div>
      </section>

      {/* Notícias em Destaque */}
      {destaques.length > 0 && categoriaAtiva === 'Todas' && busca === '' && (
        <section className="py-10 sm:py-12 lg:py-16 bg-[#050A18]">
          <div className="container mx-auto px-4 sm:px-6">
            <h2 className="text-lg sm:text-xl lg:text-2xl font-display font-bold text-white mb-5 sm:mb-6 lg:mb-8 flex items-center gap-3">
              <span className="w-1 h-5 sm:h-6 lg:h-8 bg-gold-500 rounded-full"></span>
              Destaques
            </h2>

            {/* Grid responsivo para destaques */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
              {/* Primeiro destaque - maior */}
              {destaques[0] && (
                <Link
                  to={`/informativo/${destaques[0].id}`}
                  className="group relative overflow-hidden rounded-2xl md:row-span-2"
                >
                  <div className="relative h-[280px] sm:h-[320px] md:h-full md:min-h-[420px]">
                    <img
                      src={destaques[0].imagem_url || '/noticias/placeholder.jpg'}
                      alt={destaques[0].titulo}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      onError={(e) => { e.target.src = 'https://images.unsplash.com/photo-1504711434969-e33886168f5c?w=800' }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent"></div>
                    
                    <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6">
                      <span className="inline-block bg-gold-500 text-black text-xs font-bold px-3 py-1 rounded-full mb-2 sm:mb-3">
                        {destaques[0].categoria}
                      </span>
                      <h3 className="font-display font-bold text-white text-lg sm:text-xl lg:text-2xl xl:text-3xl mb-2 group-hover:text-gold-400 transition">
                        {destaques[0].titulo}
                      </h3>
                      <p className="text-gray-300 text-sm line-clamp-2 hidden sm:block">{destaques[0].resumo}</p>
                      <span className="text-gray-500 text-xs mt-2 block">
                        {formatarData(destaques[0].data_publicacao)}
                      </span>
                    </div>
                  </div>
                </Link>
              )}

              {/* Outros destaques */}
              <div className="flex flex-col gap-4 sm:gap-6">
                {destaques.slice(1, 3).map((noticia) => (
                  <Link
                    key={noticia.id}
                    to={`/informativo/${noticia.id}`}
                    className="group relative overflow-hidden rounded-2xl flex-1"
                  >
                    <div className="relative h-[180px] sm:h-[200px]">
                      <img
                        src={noticia.imagem_url || '/noticias/placeholder.jpg'}
                        alt={noticia.titulo}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        onError={(e) => { e.target.src = 'https://images.unsplash.com/photo-1504711434969-e33886168f5c?w=800' }}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent"></div>
                      
                      <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-5">
                        <span className="inline-block bg-gold-500 text-black text-xs font-bold px-3 py-1 rounded-full mb-2">
                          {noticia.categoria}
                        </span>
                        <h3 className="font-display font-bold text-white text-sm sm:text-base lg:text-lg mb-1 group-hover:text-gold-400 transition line-clamp-2">
                          {noticia.titulo}
                        </h3>
                        <span className="text-gray-500 text-xs">
                          {formatarData(noticia.data_publicacao)}
                        </span>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Lista de Notícias */}
      <section className="py-10 sm:py-12 lg:py-16 bg-[#0a0f1c]">
        <div className="container mx-auto px-4 sm:px-6">
          <h2 className="text-lg sm:text-xl lg:text-2xl font-display font-bold text-white mb-5 sm:mb-6 lg:mb-8 flex items-center gap-3">
            <span className="w-1 h-5 sm:h-6 lg:h-8 bg-gold-500 rounded-full"></span>
            {categoriaAtiva === 'Todas' ? 'Todas as Notícias' : categoriaAtiva}
            <span className="text-gray-500 text-sm sm:text-base font-normal">({noticiasFiltradas.length})</span>
          </h2>

          {loading ? (
            // Loading Skeleton
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
              {[...Array(6)].map((_, i) => (
                <div key={i} className="bg-white/5 rounded-2xl overflow-hidden animate-pulse">
                  <div className="h-36 sm:h-40 lg:h-48 bg-white/10"></div>
                  <div className="p-4 sm:p-5 lg:p-6 space-y-3">
                    <div className="h-3 sm:h-4 bg-white/10 rounded w-1/4"></div>
                    <div className="h-5 sm:h-6 bg-white/10 rounded w-3/4"></div>
                    <div className="h-3 sm:h-4 bg-white/10 rounded w-full"></div>
                  </div>
                </div>
              ))}
            </div>
          ) : noticiasFiltradas.length === 0 ? (
            // Nenhuma notícia encontrada
            <div className="text-center py-12 sm:py-16 lg:py-20">
              <Newspaper size={40} className="text-gray-700 mx-auto mb-4 sm:w-12 sm:h-12 lg:w-16 lg:h-16" />
              <h3 className="text-base sm:text-lg lg:text-xl font-bold text-white mb-2">Nenhuma notícia encontrada</h3>
              <p className="text-gray-500 text-sm sm:text-base">Tente buscar por outro termo ou categoria.</p>
            </div>
          ) : (
            // Grid de Notícias
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 lg:gap-6">
              {noticiasFiltradas.map((noticia) => (
                <Link
                  key={noticia.id}
                  to={`/informativo/${noticia.id}`}
                  className="group bg-white/5 border border-white/10 rounded-2xl overflow-hidden hover:border-gold-500/30 transition-all duration-300 hover:-translate-y-1"
                >
                  {/* Imagem */}
                  <div className="relative h-36 sm:h-40 lg:h-48 overflow-hidden">
                    <img
                      src={noticia.imagem_url || '/noticias/placeholder.jpg'}
                      alt={noticia.titulo}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      onError={(e) => { e.target.src = 'https://images.unsplash.com/photo-1504711434969-e33886168f5c?w=800' }}
                    />
                    <div className="absolute top-3 left-3">
                      <span className="bg-[#000e72] text-white text-xs font-bold px-2.5 sm:px-3 py-0.5 sm:py-1 rounded-full">
                        {noticia.categoria}
                      </span>
                    </div>
                  </div>

                  {/* Conteúdo */}
                  <div className="p-4 sm:p-5 lg:p-6">
                    <div className="flex items-center gap-2 text-gray-500 text-xs mb-2 sm:mb-3">
                      <Calendar size={12} className="sm:hidden" />
                      <Calendar size={14} className="hidden sm:block" />
                      {formatarData(noticia.data_publicacao)}
                    </div>
                    
                    <h3 className="font-display font-bold text-white text-sm sm:text-base lg:text-lg mb-2 group-hover:text-gold-400 transition line-clamp-2">
                      {noticia.titulo}
                    </h3>
                    
                    <p className="text-gray-400 text-xs sm:text-sm line-clamp-2 mb-3 sm:mb-4">
                      {noticia.resumo}
                    </p>

                    <span className="inline-flex items-center gap-1.5 sm:gap-2 text-gold-400 text-xs sm:text-sm font-medium group-hover:gap-2 sm:group-hover:gap-3 transition-all">
                      Ler mais <ArrowRight size={14} className="sm:hidden" /><ArrowRight size={16} className="hidden sm:block" />
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* CTA Revista */}
      <section className="py-10 sm:py-12 lg:py-16 bg-gradient-to-r from-[#000e72] to-blue-900">
        <div className="container mx-auto px-4 sm:px-6 text-center">
          <h2 className="font-display font-bold text-lg sm:text-xl md:text-2xl lg:text-3xl text-white mb-3 sm:mb-4">
            Confira também nossa Revista ASSEGO
          </h2>
          <p className="text-white/80 mb-5 sm:mb-6 lg:mb-8 max-w-xl mx-auto text-sm sm:text-base">
            Edição completa com todas as novidades, conquistas e informações da associação.
          </p>
          <a
            href="/Revista_ASSEGO_2025_web.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-white text-[#000e72] px-5 sm:px-6 lg:px-8 py-2.5 sm:py-3 lg:py-4 rounded-full font-bold hover:bg-gray-100 transition-all hover:scale-105 text-sm sm:text-base"
          >
            <Newspaper size={18} className="sm:hidden" />
            <Newspaper size={20} className="hidden sm:block" />
            VER REVISTA DIGITAL
          </a>
        </div>
      </section>
    </div>
  )
}

export default Informativo