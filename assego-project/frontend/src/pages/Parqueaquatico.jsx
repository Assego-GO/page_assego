/**
 * ========================================
 * Parque Aquático - Sede Goiânia
 * ========================================
 */

import { useState, useEffect } from 'react'
import { 
  Drop, 
  SwimmingPool, 
  Sun, 
  Users, 
  Clock,
  MapPin,
  Phone,
  Calendar,
  ArrowRight,
  CheckCircle,
  Star,
  Waves,
  Baby,
  Person
} from '@phosphor-icons/react'

function ParqueAquatico() {
  const [currentSlide, setCurrentSlide] = useState(0)

  const backgroundImages = [
    'https://images.unsplash.com/photo-1575429198097-0414ec08e8cd?w=1920&q=80',
    'https://images.unsplash.com/photo-1560703030-e03e5c8ffb90?w=1920&q=80',
    'https://images.unsplash.com/photo-1530549387789-4c1017266635?w=1920&q=80',
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % backgroundImages.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [])

  const atracoes = [
    {
      icon: SwimmingPool,
      titulo: 'Piscina Olímpica',
      descricao: 'Piscina semiolímpica aquecida para natação e atividades aquáticas.',
      cor: 'from-blue-500 to-blue-700'
    },
    {
      icon: Waves,
      titulo: 'Toboáguas',
      descricao: 'Toboáguas radicais para crianças e adultos com total segurança.',
      cor: 'from-cyan-500 to-cyan-700'
    },
    {
      icon: Baby,
      titulo: 'Piscina Infantil',
      descricao: 'Área exclusiva para os pequenos com brinquedos aquáticos.',
      cor: 'from-pink-500 to-pink-700'
    },
    {
      icon: Sun,
      titulo: 'Deck Solar',
      descricao: 'Área de descanso com espreguiçadeiras e guarda-sóis.',
      cor: 'from-orange-500 to-orange-700'
    },
    {
      icon: Users,
      titulo: 'Área de Convivência',
      descricao: 'Espaço amplo para encontros e confraternizações.',
      cor: 'from-green-500 to-green-700'
    },
    {
      icon: Person,
      titulo: 'Salva-vidas',
      descricao: 'Equipe de salva-vidas treinada em período integral.',
      cor: 'from-red-500 to-red-700'
    },
  ]

  const regras = [
    'Uso obrigatório de trajes de banho adequados',
    'Crianças menores de 12 anos devem estar acompanhadas',
    'Proibido uso de objetos de vidro na área da piscina',
    'Respeite a capacidade máxima de cada piscina',
    'Duchas obrigatórias antes de entrar na piscina',
    'Proibido consumo de alimentos dentro das piscinas'
  ]

  return (
    <main className="bg-[#050A18] min-h-screen">
      
      {/* Hero Section */}
      <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden">
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
          <div className="absolute inset-0 bg-gradient-to-b from-[#050A18] via-[#050A18]/70 to-[#050A18]"></div>
        </div>

        <div className="container mx-auto px-6 relative z-10 pt-32 pb-16">
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
            
            {/* Lado Esquerdo - Texto */}
            <div className="flex-1 text-center lg:text-left">
              <div className="inline-flex items-center gap-2 bg-blue-500/20 border border-blue-500/30 rounded-full px-5 py-2 mb-6">
                <Drop size={18} weight="fill" className="text-blue-400" />
                <span className="text-sm text-blue-400 font-medium">Sede Goiânia</span>
              </div>
              
              <h1 className="font-display font-black text-4xl md:text-5xl lg:text-6xl text-white mb-6">
                Parque <span className="text-blue-400">Aquático</span>
              </h1>
              
              <p className="text-gray-300 text-lg md:text-xl max-w-xl mb-8">
                Diversão garantida para toda a família! Nosso parque aquático conta com 
                piscinas, toboáguas e área infantil em um ambiente seguro e acolhedor.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <a 
                  href="#atracoes"
                  className="inline-flex items-center justify-center gap-2 bg-blue-500 hover:bg-blue-600 text-white font-bold py-4 px-8 rounded-full transition-all hover:scale-105"
                >
                  Ver Atrações
                  <ArrowRight size={20} weight="bold" />
                </a>
                <a 
                  href="tel:6232813177"
                  className="inline-flex items-center justify-center gap-2 bg-white/10 border border-white/20 text-white font-bold py-4 px-8 rounded-full hover:bg-white/20 transition-all"
                >
                  <Phone size={20} />
                  Fazer Reserva
                </a>
              </div>
            </div>

            {/* Lado Direito - Logo */}
            <div className="flex-shrink-0">
              <img 
                src="/logoparque.png" 
                alt="Parque Aquático ASSEGO" 
                className="w-48 h-48 md:w-64 md:h-64 lg:w-80 lg:h-80 object-contain drop-shadow-2xl"
              />
            </div>

          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-2 z-10">
          {backgroundImages.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-2 h-2 rounded-full transition-all ${
                index === currentSlide ? 'bg-blue-500 w-6' : 'bg-white/30'
              }`}
            />
          ))}
        </div>
      </section>

      {/* Info Cards */}
      <section className="py-12 bg-[#0B1221] border-y border-white/10">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { icon: Clock, label: 'Horário', value: '8h às 18h' },
              { icon: Calendar, label: 'Funcionamento', value: 'Sáb, Dom e Feriados' },
              { icon: Users, label: 'Capacidade', value: '500 pessoas' },
              { icon: MapPin, label: 'Local', value: 'Sede Goiânia' },
            ].map((item, index) => (
              <div key={index} className="text-center">
                <item.icon size={32} className="text-blue-400 mx-auto mb-2" />
                <p className="text-gray-400 text-xs uppercase tracking-wider mb-1">{item.label}</p>
                <p className="text-white font-bold">{item.value}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Atrações */}
      <section id="atracoes" className="py-20 bg-[#050A18]">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-4">
              Nossas Atrações
            </h2>
            <p className="text-gray-400 text-lg">
              Conheça tudo o que o Parque Aquático ASSEGO tem a oferecer.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {atracoes.map((atracao, index) => (
              <div 
                key={index}
                className="group bg-white/5 border border-white/10 rounded-3xl p-8 hover:border-blue-500/30 transition-all duration-500 hover:-translate-y-2"
              >
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${atracao.cor} flex items-center justify-center text-white text-3xl mb-6 group-hover:scale-110 transition-transform duration-500 shadow-lg`}>
                  <atracao.icon size={32} weight="duotone" />
                </div>
                
                <h3 className="text-xl font-bold text-white mb-3">{atracao.titulo}</h3>
                <p className="text-gray-400 leading-relaxed">{atracao.descricao}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Galeria */}
      <section className="py-20 bg-[#0B1221]">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-12 text-center">
            Galeria de Fotos
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              'https://images.unsplash.com/photo-1575429198097-0414ec08e8cd?w=600&q=80',
              'https://images.unsplash.com/photo-1530549387789-4c1017266635?w=600&q=80',
              'https://images.unsplash.com/photo-1560703030-e03e5c8ffb90?w=600&q=80',
              'https://images.unsplash.com/photo-1519046904884-53103b34b206?w=600&q=80',
            ].map((img, index) => (
              <div key={index} className="group relative aspect-square rounded-2xl overflow-hidden cursor-pointer">
                <img 
                  src={img} 
                  alt={`Parque Aquático ${index + 1}`}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-blue-500/0 group-hover:bg-blue-500/20 transition-colors"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Regras */}
      <section className="py-20 bg-[#050A18]">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-8 text-center">
              Regras de Uso
            </h2>

            <div className="grid md:grid-cols-2 gap-4">
              {regras.map((regra, index) => (
                <div 
                  key={index}
                  className="flex items-start gap-3 bg-white/5 rounded-xl p-4"
                >
                  <CheckCircle size={24} weight="fill" className="text-blue-500 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-300">{regra}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-blue-800 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-[150px]"></div>
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-6">
              Venha se Refrescar!
            </h2>
            <p className="text-blue-100/80 text-lg mb-8">
              O Parque Aquático ASSEGO espera você e sua família para momentos inesquecíveis.
            </p>
            <a 
              href="#filiar"
              className="inline-flex items-center gap-2 bg-white text-blue-600 font-bold py-4 px-10 rounded-full transition-all hover:scale-105 text-lg"
            >
              Quero Me Associar
              <ArrowRight size={24} weight="bold" />
            </a>
          </div>
        </div>
      </section>

    </main>
  )
}

export default ParqueAquatico