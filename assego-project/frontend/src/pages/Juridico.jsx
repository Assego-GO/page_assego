/**
 * ========================================
 * Departamento Jurídico - Página Completa
 * ========================================
 */

import { useState, useEffect } from 'react'
import { Scales, Users, MapPin, Phone, Clock, Buildings, WhatsappLogo } from '@phosphor-icons/react'
import MapaGoias from '../components/MapaGoias'

function Juridico() {
  // Estado para controlar o slide atual do carrossel
  const [currentSlide, setCurrentSlide] = useState(0)
  
  // Imagens do carrossel de fundo
  const backgroundImages = [
    'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=1920&q=80',
    'https://images.unsplash.com/photo-1505664194779-8beaceb93744?w=1920&q=80',
    'https://images.unsplash.com/photo-1479142506502-19b3a3b7ff33?w=1920&q=80',
  ]

  // Trocar slide automaticamente
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % backgroundImages.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="min-h-screen bg-[#050A18]">
      
      {/* 1. Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden pt-24 md:pt-28">
        {/* Background Carrossel */}
        <div className="absolute inset-0">
          {backgroundImages.map((img, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
                index === currentSlide ? 'opacity-100' : 'opacity-0'
              }`}
            >
              <img 
                src={img}
                alt={`Jurídico ASSEGO ${index + 1}`}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
          <div className="absolute inset-0 bg-gradient-to-b from-[#050A18]/80 via-[#050A18]/70 to-[#050A18]"></div>
        </div>

        {/* Conteúdo */}
        <div className="relative z-10 text-center px-6">
          {/* Logos */}
          <div className="flex items-center justify-center gap-6 mb-8">
            <img 
              src="/logojuridico.png" 
              alt="Logo Juridico" 
              className="w-16 h-16 md:w-24 md:h-24 object-contain drop-shadow-2xl"
            />
            <div className="w-px h-16 md:h-20 bg-white/20"></div>
            <img 
              src="/logopre.png" 
              alt="Presidente ASSEGO" 
              className="w-16 h-20 md:w-24 md:h-28 object-contain drop-shadow-2xl"
            />
          </div>

          <span className="inline-flex items-center gap-2 bg-[#000e72]/30 border border-[#000e72]/50 text-blue-300 px-4 py-2 rounded-full text-sm font-bold mb-6">
            <Scales size={18} />
            REFERÊNCIA NACIONAL
          </span>
          <h1 className="font-display font-black text-4xl md:text-6xl text-white mb-4">
            Departamento <span className="text-blue-400">Jurídico</span>
          </h1>
          <p className="text-gray-300 text-lg md:text-xl max-w-3xl mx-auto mb-8">
            Defender seu direito, nossa missão!
          </p>

          {/* Indicadores do carrossel */}
          <div className="flex justify-center gap-2 mt-8">
            {backgroundImages.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  index === currentSlide 
                    ? 'w-8 bg-[#000e72]' 
                    : 'bg-white/30 hover:bg-white/50'
                }`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* 2. Destaque - Soma Milhões */}
      <section className="py-12 bg-gradient-to-r from-[#000e72] to-blue-900 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full blur-[150px]"></div>
        </div>
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8 max-w-5xl mx-auto">
            {/* Texto à esquerda */}
            <div className="text-center md:text-left flex-1">
              <h2 className="font-display font-black text-2xl sm:text-3xl md:text-4xl text-white mb-3">
                SOMA MILHÕES EM <span className="text-yellow-400">AÇÕES COLETIVAS E INDIVIDUAIS</span>
              </h2>
              <p className="text-white/80 text-sm sm:text-base max-w-xl">
                O Departamento Jurídico da ASSEGO alcançou êxito em centenas de ações judiciais, garantindo a restituição de milhões de reais aos seus associados.
              </p>
            </div>
            
            {/* Ícone à direita */}
            <div className="flex-shrink-0">
              <div className="w-24 h-24 sm:w-32 sm:h-32 md:w-40 md:h-40 bg-white/10 rounded-full flex items-center justify-center border border-white/20">
                <Scales size={60} className="text-yellow-400 sm:hidden" />
                <Scales size={80} className="text-yellow-400 hidden sm:block md:hidden" />
                <Scales size={100} className="text-yellow-400 hidden md:block" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Escritórios pelo Goiás com MAPA */}
      <section className="py-20 bg-[#050A18]">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <span className="inline-flex items-center gap-2 bg-[#000e72]/50 text-blue-300 px-4 py-2 rounded-full text-sm font-bold mb-4">
              <Buildings size={18} />
              PRESENÇA ESTADUAL
            </span>
            <h2 className="font-display font-bold text-3xl md:text-4xl text-white mb-4">
              Escritórios por Todo o <span className="text-blue-400">Estado de Goiás</span>
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Nossa rede de atendimento jurídico cobre todo o estado, garantindo que você tenha 
              suporte especializado onde quer que esteja.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Mapa GeoJSON */}
            <div className="order-2 lg:order-1">
              <MapaGoias />
            </div>

            {/* Informações */}
            <div className="space-y-6 order-1 lg:order-2">
              <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-blue-500/20 rounded-xl flex items-center justify-center flex-shrink-0">
                    <MapPin size={24} className="text-blue-400" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-white mb-2">Cobertura Completa</h3>
                    <p className="text-gray-400 text-sm">
                      Mais de 15 pontos de atendimento estrategicamente localizados em todas as regiões do estado.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-blue-500/20 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Clock size={24} className="text-blue-400" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-white mb-2">Atendimento Ágil</h3>
                    <p className="text-gray-400 text-sm">
                      Advogados de plantão prontos para atender você em qualquer emergência, 24 horas por dia.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-blue-500/20 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Users size={24} className="text-blue-400" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-white mb-2">Equipe Especializada</h3>
                    <p className="text-gray-400 text-sm">
                      Advogados com experiência em direito militar e administrativo em cada escritório regional.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Contato */}
      <section className="py-16 bg-[#0a0f1c]">
        <div className="container mx-auto px-6">
          <div className="text-center mb-10">
            <span className="text-blue-400 font-bold tracking-widest text-xs uppercase">Atendimento</span>
            <h2 className="font-display font-bold text-3xl md:text-4xl text-white mt-2">
              Entre em Contato
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <div className="bg-white/5 border border-white/10 rounded-2xl p-6 text-center hover:bg-white/10 transition-all">
              <Phone size={32} className="text-blue-400 mx-auto mb-4" />
              <h3 className="text-white font-bold mb-2">Telefone</h3>
              <p className="text-gray-400">(62) 3281-3177</p>
            </div>

            <div className="bg-white/5 border border-white/10 rounded-2xl p-6 text-center hover:bg-white/10 transition-all">
              <Clock size={32} className="text-blue-400 mx-auto mb-4" />
              <h3 className="text-white font-bold mb-2">Horário</h3>
              <p className="text-gray-400">Seg a Sex: 8h às 18h</p>
            </div>

            <div className="bg-white/5 border border-white/10 rounded-2xl p-6 text-center hover:bg-white/10 transition-all">
              <MapPin size={32} className="text-blue-400 mx-auto mb-4" />
              <h3 className="text-white font-bold mb-2">Endereço</h3>
              <p className="text-gray-400">Sede ASSEGO - Goiânia</p>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Consultar Processo - CTA Final */}
      <section className="py-14 bg-gradient-to-r from-green-600 to-green-700">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="text-center md:text-left">
              <h2 className="font-display font-bold text-2xl sm:text-3xl text-white mb-3">
                Consultar Processo
              </h2>
              <p className="text-white/90 max-w-lg">
                Faça sua consulta processual com mais facilidade através do nosso WhatsApp. 
                Acompanhe o andamento do seu caso de forma rápida e prática.
              </p>
            </div>
            <a
              href="https://api.whatsapp.com/send?phone=5562991152972&text=Ol%C3%A1%20quero%20saber%20como%20esta%20o%20andamento%20do%20meu%20processo."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-white hover:bg-gray-100 text-green-700 font-bold px-8 py-4 rounded-full transition-all hover:scale-105 shadow-lg"
            >
              <WhatsappLogo size={24} weight="fill" />
              Consultar Processo
            </a>
          </div>
        </div>
      </section>

    </div>
  )
}

export default Juridico