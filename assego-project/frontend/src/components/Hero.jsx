/**
 * ========================================
 * Hero - Seção Principal (Banner)
 * ========================================
 */

import { useState, useEffect } from 'react'
import { ArrowRight, PlayCircle, CaretDown } from '@phosphor-icons/react'

// Imagens de fundo para o slider
const backgroundImages = [
  'https://images.unsplash.com/photo-1551855350-c86caeaf8707?q=80&w=1920&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1535353204385-d35c87c25a9d?q=80&w=1920&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1605218427368-35b012180767?q=80&w=1920&auto=format&fit=crop'
]

function Hero() {
  // Estado para controlar slide atual
  const [currentSlide, setCurrentSlide] = useState(0)

  // Troca de slides automaticamente
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % backgroundImages.length)
    }, 6000) // 6 segundos

    return () => clearInterval(interval)
  }, [])

  return (
    <section 
      className="relative h-screen flex items-center justify-center overflow-hidden" 
      id="missao"
    >
      {/* Background Slides com Ken Burns */}
      <div className="absolute inset-0 w-full h-full overflow-hidden">
        {backgroundImages.map((img, index) => (
          <div 
            key={index}
            className={`bg-slide animate-ken-burns ${index === currentSlide ? 'active' : ''}`}
            style={{ backgroundImage: `url('${img}')` }}
          />
        ))}
        
        {/* Gradiente para legibilidade */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#050A18] via-[#050A18]/60 to-transparent z-10"></div>
        <div className="absolute inset-0 bg-black/30 z-10"></div>
      </div>

      {/* Conteúdo */}
      <div className="container mx-auto px-6 relative z-20 text-center pt-20">
        <div className="max-w-5xl mx-auto reveal active">
          
          {/* Badge flutuante */}
          <div className="inline-flex items-center gap-2 bg-white/5 backdrop-blur-md border border-white/10 rounded-full px-5 py-2 mb-8 animate-float">
            <span className="w-2 h-2 bg-green-500 rounded-full shadow-[0_0_10px_#22c55e]"></span>
            <span className="text-xs font-bold tracking-[0.2em] text-gray-300 uppercase">
              Associação Oficial desde 1956
            </span>
          </div>
          
          {/* Título principal */}
          <h1 className="font-display font-black text-5xl md:text-7xl lg:text-8xl text-white leading-tight mb-8 drop-shadow-2xl">
            FORÇA.<br />
            TRADIÇÃO.<br />
            <span className="text-gradient-gold">FAMÍLIA.</span>
          </h1>
          
          {/* Descrição */}
          <p className="text-gray-300 text-lg md:text-xl max-w-2xl mx-auto mb-12 font-light leading-relaxed">
            A voz definitiva dos Subtenentes e Sargentos de Goiás. 
            Defendemos sua carreira enquanto construímos o futuro 
            da sua família com lazer e segurança.
          </p>

          {/* Botões de ação */}
          <div className="flex flex-col sm:flex-row justify-center gap-6">
            <a 
              href="#filiar" 
              className="group relative px-8 py-4 bg-gold-500 text-black font-bold text-lg rounded-full overflow-hidden shadow-[0_0_30px_rgba(255,223,0,0.3)] hover:shadow-[0_0_50px_rgba(255,223,0,0.5)] transition-all duration-300"
            >
              <div className="absolute inset-0 w-full h-full bg-white/20 scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-500"></div>
              <span className="relative flex items-center gap-2">
                QUERO ME ASSOCIAR <ArrowRight weight="bold" />
              </span>
            </a>
            
            <a 
              href="#clube" 
              className="px-8 py-4 border border-white/20 text-white font-bold text-lg rounded-full hover:bg-white/10 transition-all backdrop-blur-sm flex items-center gap-2 justify-center"
            >
              <PlayCircle size={28} /> CONHECER ESTRUTURA
            </a>
          </div>
        </div>
      </div>

      {/* Indicador de scroll */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-20 flex flex-col items-center animate-bounce opacity-50">
        <span className="text-[10px] tracking-[0.3em] uppercase mb-2">Explore</span>
        <CaretDown size={28} />
      </div>
    </section>
  )
}

export default Hero
