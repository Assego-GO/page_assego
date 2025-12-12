/**
 * ========================================
 * Espaço ASSEGO - Salão de Eventos
 * ========================================
 */

import { useState, useEffect } from 'react'
import { 
  Buildings, 
  UsersThree, 
  Champagne,
  Phone,
  ArrowRight,
  CheckCircle,
  MapPin,
  Clock,
  WhatsappLogo
} from '@phosphor-icons/react'

function EspacoAssego() {
  const [currentSlide, setCurrentSlide] = useState(0)

  const backgroundImages = [
    'https://images.unsplash.com/photo-1519167758481-83f550bb49b3?w=1920&q=80',
    'https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?w=1920&q=80',
    'https://images.unsplash.com/photo-1478147427282-58a87a120781?w=1920&q=80',
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % backgroundImages.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [])

  const recursos = [
    'Capacidade para 400 a 600 pessoas',
    'Ar condicionado',
    'Palco',
    'Som profissional',
    'Iluminação cênica',
    'Cozinha de apoio',
    'Estacionamento',
    'Mesas e cadeiras'
  ]

  return (
    <main className="bg-[#050A18] min-h-screen">
      
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden pt-24 md:pt-28">
        <div className="absolute inset-0">
          {backgroundImages.map((img, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-opacity duration-1000 ${
                index === currentSlide ? 'opacity-100' : 'opacity-0'
              }`}
            >
              <img src={img} alt="" className="w-full h-full object-cover" />
            </div>
          ))}
          <div className="absolute inset-0 bg-gradient-to-b from-[#050A18]/80 via-[#050A18]/70 to-[#050A18]"></div>
        </div>

        <div className="container mx-auto px-6 relative z-10 text-center">
          <div className="inline-flex items-center gap-2 bg-purple-500/20 border border-purple-500/30 rounded-full px-5 py-2 mb-6">
            <Buildings size={18} className="text-purple-400 " />
            <span className="text-sm text-purple-400 font-medium">Eventos e Celebrações</span>
          </div>
          
          <h1 className="font-display font-black text-4xl md:text-5xl lg:text-6xl text-white mb-6">
            Espaço <span className="text-purple-400">ASSEGO</span>
          </h1>
          
          <p className="text-gray-300 text-lg md:text-xl max-w-2xl mx-auto mb-8">
            O cenário perfeito para os momentos mais especiais da sua vida.
          </p>

          {/* Indicadores */}
          <div className="flex justify-center gap-2 mt-8">
            {backgroundImages.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-2 h-2 rounded-full transition-all ${
                  index === currentSlide ? 'bg-purple-500 w-6' : 'bg-white/30'
                }`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Tipos de Eventos - Compacto */}
      <section className="py-10 bg-gradient-to-r from-purple-700 to-purple-900">
        <div className="container mx-auto px-6">
          <div className="flex flex-wrap items-center justify-center gap-8 text-white">
            <div className="flex items-center gap-2">
              <Champagne size={24} />
              <span>Casamentos</span>
            </div>
            <div className="flex items-center gap-2">
              <UsersThree size={24} />
              <span>Formaturas</span>
            </div>
            <div className="flex items-center gap-2">
              <Buildings size={24} />
              <span>Corporativos</span>
            </div>
            <div className="flex items-center gap-2">
              <Champagne size={24} />
              <span>Aniversários</span>
            </div>
          </div>
        </div>
      </section>

      {/* Sobre o Salão */}
      <section className="py-20 bg-[#050A18]">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            
            {/* Imagem */}
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-br from-purple-500/20 to-purple-900/10 rounded-3xl blur-2xl"></div>
              <img 
                src="https://images.unsplash.com/photo-1519167758481-83f550bb49b3?w=800&q=80"
                alt="Salão ASSEGO"
                className="relative rounded-2xl w-full shadow-2xl"
              />
            </div>

            {/* Conteúdo */}
            <div>
              <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-6">
                Salão de Eventos
              </h2>
              <p className="text-gray-400 text-lg mb-8">
                Amplo espaço climatizado e equipado para grandes eventos, formaturas, 
                casamentos e confraternizações. Estrutura completa para tornar seu 
                evento inesquecível.
              </p>

              <div className="grid grid-cols-2 gap-3">
                {recursos.map((recurso, index) => (
                  <div 
                    key={index}
                    className="flex items-center gap-2 text-gray-300"
                  >
                    <CheckCircle size={18} weight="fill" className="text-purple-500 flex-shrink-0" />
                    <span className="text-sm">{recurso}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contato */}
      <section className="py-16 bg-[#0a0f1c]">
        <div className="container mx-auto px-6">
          <div className="text-center mb-10">
            <h2 className="font-display font-bold text-3xl md:text-4xl text-white">
              Agende uma Visita
            </h2>
            <p className="text-gray-400 mt-2">Entre em contato e conheça nosso espaço</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <div className="bg-white/5 border border-white/10 rounded-2xl p-6 text-center hover:bg-white/10 transition-all">
              <Phone size={32} className="text-purple-400 mx-auto mb-4" />
              <h3 className="text-white font-bold mb-2">Telefone</h3>
              <p className="text-gray-400">(62) 3281-3177</p>
            </div>

            <div className="bg-white/5 border border-white/10 rounded-2xl p-6 text-center hover:bg-white/10 transition-all">
              <Clock size={32} className="text-purple-400 mx-auto mb-4" />
              <h3 className="text-white font-bold mb-2">Horário</h3>
              <p className="text-gray-400">Seg a Sex: 8h às 18h</p>
            </div>

            <div className="bg-white/5 border border-white/10 rounded-2xl p-6 text-center hover:bg-white/10 transition-all">
              <MapPin size={32} className="text-purple-400 mx-auto mb-4" />
              <h3 className="text-white font-bold mb-2">Endereço</h3>
              <p className="text-gray-400">Sede ASSEGO - Goiânia</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA WhatsApp */}
      <section className="py-14 bg-gradient-to-r from-green-600 to-green-700">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="text-center md:text-left">
              <h2 className="font-display font-bold text-2xl sm:text-3xl text-white mb-3">
                Solicite um Orçamento
              </h2>
              <p className="text-white/90 max-w-lg">
                Entre em contato pelo WhatsApp e reserve seu evento com a gente.
              </p>
            </div>
            <a
              href="https://api.whatsapp.com/send?phone=556232813177&text=Ol%C3%A1%2C%20gostaria%20de%20saber%20mais%20sobre%20o%20Espa%C3%A7o%20ASSEGO%20para%20eventos."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-white hover:bg-gray-100 text-green-700 font-bold px-8 py-4 rounded-full transition-all hover:scale-105 shadow-lg"
            >
              <WhatsappLogo size={24} weight="fill" />
              Falar no WhatsApp
            </a>
          </div>
        </div>
      </section>

    </main>
  )
}

export default EspacoAssego