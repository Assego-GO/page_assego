/**
 * ========================================
 * ClubGallery - Carrossel de Fotos do Clube
 * ========================================
 */

import { useState, useEffect } from 'react'
import { CaretLeft, CaretRight, Images } from '@phosphor-icons/react'

function ClubGallery() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)

  // Fotos do clube (usar fotos reais quando disponíveis)
  const fotos = [
    {
      src: '/fotos/clube1.jpg',
      fallback: 'https://images.unsplash.com/photo-1575429198097-0414ec08e8cd?w=1200&q=80',
      titulo: 'Parque Aquático',
      descricao: 'Diversão para toda a família'
    },
    {
      src: '/fotos/clube2.jpg',
      fallback: 'https://images.unsplash.com/photo-1571902943202-507ec2618e8f?w=1200&q=80',
      titulo: 'Academia',
      descricao: 'Equipamentos modernos'
    },
    {
      src: '/fotos/clube3.jpg',
      fallback: 'https://images.unsplash.com/photo-1522771753033-632175f8da3b?w=1200&q=80',
      titulo: 'Campos Society',
      descricao: 'Gramado sintético profissional'
    },
    {
      src: '/fotos/clube4.jpg',
      fallback: 'https://images.unsplash.com/photo-1519167758481-83f550bb49b3?w=1200&q=80',
      titulo: 'Salão de Festas',
      descricao: 'Para suas celebrações'
    },
    {
      src: '/fotos/clube5.jpg',
      fallback: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?w=1200&q=80',
      titulo: 'Área de Lazer',
      descricao: 'Espaço para relaxar'
    },
    {
      src: '/fotos/clube6.jpg',
      fallback: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=1200&q=80',
      titulo: 'Quiosques',
      descricao: 'Churrasqueiras equipadas'
    },
  ]

  // Auto play
  useEffect(() => {
    if (!isAutoPlaying) return
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % fotos.length)
    }, 4000)
    return () => clearInterval(interval)
  }, [isAutoPlaying, fotos.length])

  const goToPrev = () => {
    setIsAutoPlaying(false)
    setCurrentIndex((prev) => (prev - 1 + fotos.length) % fotos.length)
  }

  const goToNext = () => {
    setIsAutoPlaying(false)
    setCurrentIndex((prev) => (prev + 1) % fotos.length)
  }

  const goToSlide = (index) => {
    setIsAutoPlaying(false)
    setCurrentIndex(index)
  }

  return (
    <section className="py-24 bg-[#050A18] relative overflow-hidden">
      {/* Background decorativo */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-20 w-64 h-64 bg-gold-500 rounded-full blur-[150px]"></div>
        <div className="absolute bottom-20 right-20 w-64 h-64 bg-blue-500 rounded-full blur-[150px]"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="text-center mb-12 reveal">
          <span className="inline-flex items-center gap-2 text-gold-400 font-bold tracking-widest text-xs uppercase mb-4">
            <Images size={16} />
            GALERIA
          </span>
          <h2 className="font-display font-bold text-3xl md:text-5xl text-white mb-4">
            Conheça Nossa <span className="text-gold-400">Estrutura</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Um clube completo para você e sua família aproveitarem momentos inesquecíveis.
          </p>
        </div>

        {/* Carrossel Principal */}
        <div className="relative max-w-5xl mx-auto reveal">
          {/* Container do Carrossel */}
          <div className="relative aspect-[16/9] rounded-3xl overflow-hidden group">
            {/* Imagens */}
            {fotos.map((foto, index) => (
              <div
                key={index}
                className={`absolute inset-0 transition-all duration-700 ease-in-out ${
                  index === currentIndex 
                    ? 'opacity-100 scale-100' 
                    : 'opacity-0 scale-105'
                }`}
              >
                <img
                  src={foto.src}
                  alt={foto.titulo}
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.target.src = foto.fallback
                  }}
                />
                {/* Overlay gradiente */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
                
                {/* Info da foto */}
                <div className="absolute bottom-0 left-0 right-0 p-8">
                  <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">
                    {foto.titulo}
                  </h3>
                  <p className="text-gray-300">{foto.descricao}</p>
                </div>
              </div>
            ))}

            {/* Botões de navegação */}
            <button
              onClick={goToPrev}
              className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-all hover:bg-white/20 hover:scale-110"
            >
              <CaretLeft size={24} />
            </button>
            <button
              onClick={goToNext}
              className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-all hover:bg-white/20 hover:scale-110"
            >
              <CaretRight size={24} />
            </button>
          </div>

          {/* Indicadores */}
          <div className="flex justify-center gap-2 mt-6">
            {fotos.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  index === currentIndex 
                    ? 'w-8 bg-gold-500' 
                    : 'w-2 bg-white/30 hover:bg-white/50'
                }`}
              />
            ))}
          </div>

          {/* Thumbnails */}
          <div className="hidden md:flex justify-center gap-3 mt-8">
            {fotos.map((foto, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`relative w-24 h-16 rounded-lg overflow-hidden transition-all duration-300 ${
                  index === currentIndex 
                    ? 'ring-2 ring-gold-500 scale-110' 
                    : 'opacity-50 hover:opacity-80'
                }`}
              >
                <img
                  src={foto.src}
                  alt={foto.titulo}
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.target.src = foto.fallback
                  }}
                />
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default ClubGallery