/**
 * ========================================
 * Informativo - Página de Notícias da ASSEGO
 * ========================================
 */

import { useState, useEffect } from 'react'
import { Newspaper, Calendar, MagnifyingGlass, CaretLeft, CaretRight, Tag } from '@phosphor-icons/react'

function Informativo() {
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('Todas')
  const [currentPage, setCurrentPage] = useState(1)
  const [currentSlide, setCurrentSlide] = useState(0)

  // Imagens do carrossel de fundo
  const backgroundImages = [
    'https://images.unsplash.com/photo-1504711434969-e33886168f5c?w=1920&q=80',
    'https://images.unsplash.com/photo-1586339949916-3e9457bef6d3?w=1920&q=80',
    'https://images.unsplash.com/photo-1495020689067-958852a7765e?w=1920&q=80',
  ]

  // Trocar slide automaticamente
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % backgroundImages.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [])

  // Categorias de notícias
  const categorias = ['Todas', 'Institucional', 'Jurídico', 'Eventos', 'Esportes', 'Social']

  // Notícias (mock data - substituir por dados reais)
  const noticias = [
    {
      id: 1,
      titulo: 'ASSEGO conquista vitória histórica em ação coletiva',
      resumo: 'O Departamento Jurídico da ASSEGO obteve decisão favorável que beneficia mais de 2.000 associados em ação sobre diferenças salariais.',
      imagem: 'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=800&q=80',
      data: '25 Nov 2024',
      categoria: 'Jurídico',
      destaque: true,
    },
    {
      id: 2,
      titulo: 'Torneio de Futsal reúne mais de 20 equipes na sede',
      resumo: 'O campeonato anual de futsal da ASSEGO contou com a participação de policiais e bombeiros militares de todo o estado.',
      imagem: 'https://images.unsplash.com/photo-1574629810360-7efbbe195018?w=800&q=80',
      data: '22 Nov 2024',
      categoria: 'Esportes',
      destaque: false,
    },
    {
      id: 3,
      titulo: 'Projeto Acolher celebra 10 anos de atividades',
      resumo: 'O projeto social que atende crianças com necessidades especiais completa uma década de dedicação e amor ao próximo.',
      imagem: 'https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=800&q=80',
      data: '20 Nov 2024',
      categoria: 'Social',
      destaque: true,
    },
    {
      id: 4,
      titulo: 'Nova diretoria toma posse para o biênio 2024-2026',
      resumo: 'Em cerimônia solene, a nova diretoria da ASSEGO foi empossada com a presença de autoridades militares e civis.',
      imagem: 'https://images.unsplash.com/photo-1560439514-4e9645039924?w=800&q=80',
      data: '15 Nov 2024',
      categoria: 'Institucional',
      destaque: false,
    },
    {
      id: 5,
      titulo: 'Confraternização de fim de ano será em dezembro',
      resumo: 'A tradicional festa de confraternização dos associados está marcada para o dia 14 de dezembro na sede do clube.',
      imagem: 'https://images.unsplash.com/photo-1530103862676-de8c9debad1d?w=800&q=80',
      data: '10 Nov 2024',
      categoria: 'Eventos',
      destaque: false,
    },
    {
      id: 6,
      titulo: 'Parceria com novo plano de saúde é firmada',
      resumo: 'Associados agora contam com mais uma opção de plano de saúde com descontos exclusivos para toda a família.',
      imagem: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&q=80',
      data: '05 Nov 2024',
      categoria: 'Institucional',
      destaque: false,
    },
    {
      id: 7,
      titulo: 'Curso de defesa pessoal para dependentes',
      resumo: 'A ASSEGO oferece curso gratuito de defesa pessoal para filhos e cônjuges de associados aos sábados.',
      imagem: 'https://images.unsplash.com/photo-1555597673-b21d5c935865?w=800&q=80',
      data: '01 Nov 2024',
      categoria: 'Esportes',
      destaque: false,
    },
    {
      id: 8,
      titulo: 'Ação judicial garante promoção a 150 sargentos',
      resumo: 'Mais uma vitória do jurídico: sargentos que estavam há anos aguardando promoção foram beneficiados.',
      imagem: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=800&q=80',
      data: '28 Out 2024',
      categoria: 'Jurídico',
      destaque: false,
    },
  ]

  // Filtrar notícias
  const noticiasFiltradas = noticias.filter(noticia => {
    const matchSearch = noticia.titulo.toLowerCase().includes(searchTerm.toLowerCase()) ||
                       noticia.resumo.toLowerCase().includes(searchTerm.toLowerCase())
    const matchCategory = selectedCategory === 'Todas' || noticia.categoria === selectedCategory
    return matchSearch && matchCategory
  })

  // Notícias em destaque
  const noticiasDestaque = noticias.filter(n => n.destaque)

  // Paginação
  const noticiasPerPage = 6
  const totalPages = Math.ceil(noticiasFiltradas.length / noticiasPerPage)
  const noticiasExibidas = noticiasFiltradas.slice(
    (currentPage - 1) * noticiasPerPage,
    currentPage * noticiasPerPage
  )

  return (
    <main className="bg-[#050A18] min-h-screen">
      
      {/* Hero Section com Carrossel */}
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden">
        {/* Background Slides */}
        <div className="absolute inset-0">
          {backgroundImages.map((img, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-opacity duration-1000 ${
                index === currentSlide ? 'opacity-100' : 'opacity-0'
              }`}
            >
              <img 
                src={img} 
                alt="" 
                className="w-full h-full object-cover"
              />
            </div>
          ))}
          {/* Overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-[#050A18] via-[#050A18]/70 to-[#050A18]"></div>
        </div>

        {/* Conteúdo */}
        <div className="container mx-auto px-6 relative z-10 pt-32 pb-16">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur border border-white/20 rounded-full px-5 py-2 mb-6">
              <Newspaper size={18} className="text-gold-400" />
              <span className="text-sm text-gray-300 font-medium">Fique por dentro</span>
            </div>
            
            <h1 className="font-display font-black text-4xl md:text-5xl lg:text-6xl text-white mb-6">
              Informativo <span className="text-gold-400">ASSEGO</span>
            </h1>
            
            <p className="text-gray-300 text-lg md:text-xl max-w-2xl mx-auto mb-10">
              Acompanhe as últimas notícias, conquistas e eventos da nossa associação.
            </p>

            {/* Barra de busca */}
            <div className="relative max-w-xl mx-auto">
              <MagnifyingGlass size={20} className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                placeholder="Buscar notícias..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full bg-white/10 backdrop-blur border border-white/20 rounded-full py-4 pl-12 pr-6 text-white placeholder-gray-400 focus:outline-none focus:border-gold-500/50 transition"
              />
            </div>
          </div>
        </div>

        {/* Indicadores do carrossel */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-2 z-10">
          {backgroundImages.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-2 h-2 rounded-full transition-all ${
                index === currentSlide ? 'bg-gold-500 w-6' : 'bg-white/30'
              }`}
            />
          ))}
        </div>
      </section>

      {/* Notícias em Destaque */}
      <section className="py-16 bg-[#0B1221]">
        <div className="container mx-auto px-6">
          <div className="flex items-center gap-3 mb-10">
            <span className="w-1 h-8 bg-gold-500 rounded-full"></span>
            <h2 className="text-2xl md:text-3xl font-display font-bold text-white">Destaques</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {noticiasDestaque.map((noticia) => (
              <article 
                key={noticia.id}
                className="group relative h-[350px] md:h-[400px] rounded-3xl overflow-hidden cursor-pointer"
              >
                <img 
                  src={noticia.imagem} 
                  alt={noticia.titulo}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent"></div>
                
                <div className="absolute top-6 left-6">
                  <span className="bg-gold-500 text-black text-xs font-bold px-3 py-1.5 rounded-full">
                    {noticia.categoria}
                  </span>
                </div>

                <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
                  <div className="flex items-center gap-4 text-gray-300 text-sm mb-3">
                    <span className="flex items-center gap-1.5">
                      <Calendar size={14} />
                      {noticia.data}
                    </span>
                  </div>
                  <h3 className="text-xl md:text-2xl font-bold text-white mb-3 group-hover:text-gold-400 transition">
                    {noticia.titulo}
                  </h3>
                  <p className="text-gray-300 line-clamp-2">{noticia.resumo}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Filtros por Categoria */}
      <section className="py-8 bg-[#050A18] border-y border-white/10">
        <div className="container mx-auto px-6">
          <div className="flex flex-wrap gap-3 justify-center">
            {categorias.map((cat) => (
              <button
                key={cat}
                onClick={() => {
                  setSelectedCategory(cat)
                  setCurrentPage(1)
                }}
                className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all ${
                  selectedCategory === cat
                    ? 'bg-gold-500 text-black'
                    : 'bg-white/5 text-gray-300 hover:bg-white/10 border border-white/10'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Lista de Notícias */}
      <section className="py-16 bg-[#050A18]">
        <div className="container mx-auto px-6">
          <div className="flex items-center gap-3 mb-10">
            <span className="w-1 h-8 bg-[#000e72] rounded-full"></span>
            <h2 className="text-2xl md:text-3xl font-display font-bold text-white">
              {selectedCategory === 'Todas' ? 'Todas as Notícias' : selectedCategory}
            </h2>
          </div>

          {noticiasExibidas.length > 0 ? (
            <>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {noticiasExibidas.map((noticia) => (
                  <article 
                    key={noticia.id}
                    className="group bg-white/5 border border-white/10 rounded-2xl overflow-hidden hover:border-gold-500/30 transition-all duration-300 cursor-pointer hover:-translate-y-1"
                  >
                    <div className="relative h-48 overflow-hidden">
                      <img 
                        src={noticia.imagem} 
                        alt={noticia.titulo}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                      <div className="absolute top-4 left-4">
                        <span className="bg-[#000e72] text-white text-xs font-medium px-3 py-1.5 rounded-full flex items-center gap-1">
                          <Tag size={12} />
                          {noticia.categoria}
                        </span>
                      </div>
                    </div>

                    <div className="p-6">
                      <div className="flex items-center gap-4 text-gray-400 text-xs mb-3">
                        <span className="flex items-center gap-1.5">
                          <Calendar size={12} />
                          {noticia.data}
                        </span>
                      </div>
                      
                      <h3 className="text-lg font-bold text-white mb-3 group-hover:text-gold-400 transition line-clamp-2">
                        {noticia.titulo}
                      </h3>
                      
                      <p className="text-gray-400 text-sm line-clamp-3 mb-4">
                        {noticia.resumo}
                      </p>

                      <span className="text-gold-400 text-sm font-medium flex items-center gap-1 group-hover:gap-2 transition-all">
                        Ler mais
                        <CaretRight size={14} />
                      </span>
                    </div>
                  </article>
                ))}
              </div>

              {/* Paginação */}
              {totalPages > 1 && (
                <div className="flex items-center justify-center gap-2 mt-12">
                  <button
                    onClick={() => setCurrentPage(p => Math.max(1, p - 1))}
                    disabled={currentPage === 1}
                    className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white disabled:opacity-30 disabled:cursor-not-allowed hover:bg-white/10 transition"
                  >
                    <CaretLeft size={18} />
                  </button>

                  {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                    <button
                      key={page}
                      onClick={() => setCurrentPage(page)}
                      className={`w-10 h-10 rounded-full flex items-center justify-center font-medium transition ${
                        currentPage === page
                          ? 'bg-gold-500 text-black'
                          : 'bg-white/5 text-white hover:bg-white/10'
                      }`}
                    >
                      {page}
                    </button>
                  ))}

                  <button
                    onClick={() => setCurrentPage(p => Math.min(totalPages, p + 1))}
                    disabled={currentPage === totalPages}
                    className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white disabled:opacity-30 disabled:cursor-not-allowed hover:bg-white/10 transition"
                  >
                    <CaretRight size={18} />
                  </button>
                </div>
              )}
            </>
          ) : (
            <div className="text-center py-16">
              <Newspaper size={64} className="mx-auto text-gray-600 mb-4" />
              <p className="text-gray-400 text-lg">Nenhuma notícia encontrada.</p>
              <button
                onClick={() => {
                  setSearchTerm('')
                  setSelectedCategory('Todas')
                }}
                className="mt-4 text-gold-400 hover:underline"
              >
                Limpar filtros
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-20 bg-gradient-to-r from-[#000e72] to-[#001090] relative overflow-hidden">
        {/* Decoração */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full blur-[100px]"></div>
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-4">
              Receba nossas novidades
            </h2>
            <p className="text-blue-100/80 text-lg mb-8">
              Cadastre seu e-mail e fique por dentro de todas as notícias e eventos da ASSEGO.
            </p>

            <form className="flex flex-col sm:flex-row gap-4" onSubmit={(e) => e.preventDefault()}>
              <input
                type="email"
                placeholder="Seu melhor e-mail"
                className="flex-1 bg-white/10 border border-white/20 rounded-full py-4 px-6 text-white placeholder-blue-200/50 focus:outline-none focus:border-white/40 transition"
              />
              <button
                type="submit"
                className="bg-gold-500 hover:bg-gold-600 text-black font-bold py-4 px-8 rounded-full transition-all hover:scale-105"
              >
                Cadastrar
              </button>
            </form>
          </div>
        </div>
      </section>

    </main>
  )
}

export default Informativo