/**
 * ========================================
 * InstagramFeed - Carrossel de Posts do Instagram
 * ========================================
 * 
 * Layout: Texto à esquerda | Imagens à direita
 * Setas acima do feed, indicadores abaixo
 */

import { useState, useEffect, useRef } from 'react'
import { InstagramLogo, CaretLeft, CaretRight, ArrowSquareOut, Fire } from '@phosphor-icons/react'

// ✅ Feed ID do Behold.so - ASSEGO
const BEHOLD_FEED_ID = '6xHPrSu3elJLM7pSVD1j'

// Conta do Instagram da ASSEGO
const INSTAGRAM_USERNAME = 'assego'
const INSTAGRAM_URL = 'https://instagram.com/assego'

function InstagramFeed() {
  const [posts, setPosts] = useState([])
  const [loading, setLoading] = useState(true)
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)
  const carouselRef = useRef(null)

  // Buscar posts do Behold.so
  useEffect(() => {
    if (BEHOLD_FEED_ID) {
      fetch(`https://feeds.behold.so/${BEHOLD_FEED_ID}`)
        .then(res => res.json())
        .then(data => {
          if (data && data.posts && Array.isArray(data.posts)) {
            setPosts(data.posts.slice(0, 12))
          } else if (data && Array.isArray(data)) {
            setPosts(data.slice(0, 12))
          }
          setLoading(false)
        })
        .catch(err => {
          console.error('Erro ao carregar Instagram:', err)
          setLoading(false)
        })
    } else {
      setLoading(false)
    }
  }, [])

  // Auto-play do carrossel
  useEffect(() => {
    if (!isAutoPlaying || posts.length === 0) return

    const interval = setInterval(() => {
      setCurrentIndex(prev => {
        const maxIndex = Math.max(0, posts.length - 3)
        return prev >= maxIndex ? 0 : prev + 1
      })
    }, 4000)

    return () => clearInterval(interval)
  }, [isAutoPlaying, posts.length])

  // Navegação
  const goToPrev = () => {
    setIsAutoPlaying(false)
    setCurrentIndex(prev => Math.max(0, prev - 1))
  }

  const goToNext = () => {
    setIsAutoPlaying(false)
    const maxIndex = Math.max(0, posts.length - 3)
    setCurrentIndex(prev => Math.min(maxIndex, prev + 1))
  }

  // Pegar URL da imagem
  const getImageUrl = (post) => {
    if (post.sizes?.large?.mediaUrl) return post.sizes.large.mediaUrl
    if (post.sizes?.medium?.mediaUrl) return post.sizes.medium.mediaUrl
    if (post.sizes?.small?.mediaUrl) return post.sizes.small.mediaUrl
    if (post.mediaUrl) return post.mediaUrl
    if (post.thumbnailUrl) return post.thumbnailUrl
    return ''
  }

  // Loading state
  if (loading) {
    return (
      <section className="py-12 bg-gradient-to-b from-[#050A18] via-[#0a0f1c] to-[#050A18]">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-[400px_1fr] gap-10 items-center">
            <div className="space-y-6">
              <div className="h-6 w-48 bg-white/10 rounded-full animate-pulse"></div>
              <div className="h-12 w-full bg-white/10 rounded-lg animate-pulse"></div>
              <div className="h-20 w-full bg-white/10 rounded-lg animate-pulse"></div>
            </div>
            <div className="grid grid-cols-3 gap-4">
              {[...Array(3)].map((_, i) => (
                <div key={i} className="aspect-[4/5] bg-white/5 rounded-2xl animate-pulse"></div>
              ))}
            </div>
          </div>
        </div>
      </section>
    )
  }

  return (
    <section className="py-12 bg-gradient-to-b from-[#050A18] via-[#0a0f1c] to-[#050A18]">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-[400px_1fr] gap-10 lg:gap-14 items-center">
          
          {/* Lado Esquerdo - Texto (largura fixa) */}
          <div className="text-center lg:text-left">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-500/20 via-pink-500/20 to-orange-500/20 border border-pink-500/30 rounded-full px-4 py-2 mb-6">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-pink-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-pink-500"></span>
              </span>
              <span className="text-pink-400 text-sm font-medium">Atualizações em tempo real</span>
            </div>

            {/* Título */}
            <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-5 leading-tight">
              Fique por dentro de{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-500 to-orange-400">
                tudo!
              </span>
            </h2>
            
            {/* Descrição */}
            <p className="text-gray-400 text-lg mb-8">
              Acompanhe as últimas novidades, eventos e conquistas da ASSEGO direto do nosso Instagram
            </p>

            {/* Botão Seguir - Gradiente com ícone simples */}
            <a
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative inline-flex items-center gap-3 px-7 py-4 rounded-full font-bold text-white text-lg overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-pink-500/40"
            >
              {/* Background gradiente */}
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600 via-pink-500 to-orange-500"></div>
              
              {/* Efeito hover - gradiente invertido */}
              <div className="absolute inset-0 bg-gradient-to-r from-orange-500 via-pink-500 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              {/* Efeito de brilho deslizante */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/25 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
              </div>
              
              {/* Conteúdo */}
              <span className="relative flex items-center gap-3">
                <InstagramLogo size={24} weight="regular" className="text-white" />
                Seguir no Instagram
              </span>
            </a>
          </div>

          {/* Lado Direito - Carrossel de Imagens */}
          <div className="space-y-3">
            
            {/* Navegação - Acima do feed */}
            <div className="flex justify-end gap-2">
              <button
                onClick={goToPrev}
                disabled={currentIndex === 0}
                className="w-10 h-10 bg-white/10 hover:bg-white/20 disabled:opacity-30 disabled:cursor-not-allowed rounded-full flex items-center justify-center text-white transition-all duration-300 border border-white/10 hover:border-white/20"
              >
                <CaretLeft size={18} weight="bold" />
              </button>
              <button
                onClick={goToNext}
                disabled={currentIndex >= posts.length - 3}
                className="w-10 h-10 bg-white/10 hover:bg-white/20 disabled:opacity-30 disabled:cursor-not-allowed rounded-full flex items-center justify-center text-white transition-all duration-300 border border-white/10 hover:border-white/20"
              >
                <CaretRight size={18} weight="bold" />
              </button>
            </div>

            {/* Carrossel */}
            <div className="relative overflow-hidden rounded-2xl" ref={carouselRef}>
              <div 
                className="flex gap-4 transition-transform duration-500 ease-out"
                style={{ transform: `translateX(-${currentIndex * (100 / 3 + 1.5)}%)` }}
              >
                {posts.map((post, index) => (
                  <a
                    key={post.id || index}
                    href={post.permalink || INSTAGRAM_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-shrink-0 w-[calc(33.333%-11px)] group"
                  >
                    <div className="aspect-[4/5] rounded-2xl overflow-hidden relative bg-gray-900 shadow-lg transition-all duration-500 group-hover:shadow-2xl group-hover:shadow-pink-500/20 group-hover:scale-[1.02]">
                      <img
                        src={getImageUrl(post)}
                        alt={post.caption?.slice(0, 50) || 'Post Instagram ASSEGO'}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                        loading="lazy"
                      />
                      
                      {/* Gradiente permanente */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>
                      
                      {/* Overlay no hover */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
                        <p className="text-white text-sm line-clamp-3">
                          {post.caption?.slice(0, 100) || post.prunedCaption?.slice(0, 100)}...
                        </p>
                        <div className="flex items-center gap-1.5 mt-2 text-pink-400 text-xs font-medium">
                          <ArrowSquareOut size={12} />
                          Ver no Instagram
                        </div>
                      </div>

                      {/* Badge de vídeo/reel */}
                      {(post.mediaType === 'VIDEO' || post.isReel) && (
                        <div className="absolute top-3 right-3 bg-black/60 backdrop-blur-sm rounded-full px-2 py-1 flex items-center gap-1">
                          <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M8 5v14l11-7z" />
                          </svg>
                        </div>
                      )}

                      {/* Badge "Novo" para o primeiro post */}
                      {index === 0 && (
                        <div className="absolute top-3 left-3 bg-gradient-to-r from-pink-500 to-orange-500 rounded-full px-3 py-1 flex items-center gap-1">
                          <Fire size={12} weight="fill" className="text-white" />
                          <span className="text-white text-xs font-bold">NOVO</span>
                        </div>
                      )}
                    </div>
                  </a>
                ))}
              </div>

              {/* Gradiente de fade na borda direita */}
              <div className="absolute top-0 right-0 w-16 h-full bg-gradient-to-l from-[#0a0f1c] to-transparent pointer-events-none z-10"></div>
            </div>

            {/* Indicadores - Abaixo do feed */}
            <div className="flex justify-center gap-2 pt-2">
              {[...Array(Math.ceil(posts.length / 3))].map((_, i) => (
                <button
                  key={i}
                  onClick={() => {
                    setIsAutoPlaying(false)
                    setCurrentIndex(i * 3)
                  }}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    Math.floor(currentIndex / 3) === i
                      ? 'w-8 bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500'
                      : 'w-2 bg-white/30 hover:bg-white/50'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default InstagramFeed