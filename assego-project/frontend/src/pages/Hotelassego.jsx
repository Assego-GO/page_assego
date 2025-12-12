/**
 * ========================================
 * Hotelaria ASSEGO - Dois Hotéis em Goiânia
 * ========================================
 */

import { useState, useEffect } from 'react'
import { 
  Bed, 
  Shower, 
  Television, 
  WifiHigh, 
  Car,
  Coffee,
  Clock,
  MapPin,
  ArrowRight,
  CheckCircle,
  Snowflake,
  WhatsappLogo,
  ForkKnife,
  SoccerBall,
  BuildingOffice,
  CaretLeft,
  CaretRight,
  NavigationArrow
} from '@phosphor-icons/react'

function HotelAssego() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [hotelSlides, setHotelSlides] = useState({})

  const backgroundImages = [
    '/public/foto40.jpg',
    '/public/foto2.JPG',
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % backgroundImages.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [])

  // Dados dos dois hotéis
  const hoteis = [
    {
      id: 'hotel-assego',
      nome: 'Hotel da ASSEGO',
      subtitulo: 'Sede Principal',
      descricao: 'Hospedagem completa na sede da ASSEGO com acesso a toda infraestrutura do clube, incluindo restaurante, campos de futebol e área de lazer.',
      telefone: '(62) 99192-2321',
      whatsapp: '5562991922321',
      endereco: 'Rua 148 - Setor Marista',
      cidade: 'Goiânia - GO',
      mapsLink: 'https://maps.app.goo.gl/7zbtxBZGwDBSPufv6',
      cor: 'from-[#000e72] to-blue-800',
      imagens: [
        '/public/foto40.jpg',
        '/public/foto2.JPG',
        '/public/foto4.JPG',
        '/public/foto8.jpg',
      ],
      diferenciais: [
        { icon: ForkKnife, label: 'Restaurante' },
        { icon: SoccerBall, label: 'Campos de Futebol' },
        { icon: Car, label: 'Estacionamento' },
        { icon: BuildingOffice, label: 'Administração' },
      ],
      comodidades: [
        'Wi-Fi Gratuito',
        'Ar Condicionado',
        'TV',
        'Frigobar',
        'Estacionamento',
        'Restaurante no local',
        'Acesso ao clube',
        'Recepção 24h'
      ]
    },
    {
      id: 'hotel-24-outubro',
      nome: 'Hotel 24 de Outubro',
      subtitulo: 'Parceiro ASSEGO',
      descricao: 'Hotel parceiro com localização estratégica no Setor Aeroviário, próximo ao aeroporto de Goiânia. Ideal para associados em trânsito.',
      telefone: '(62) 99346-9190',
      whatsapp: '5562993469190',
      endereco: 'Av. 24 de Outubro, Nº 2790 - Setor Aeroviário',
      cidade: 'Goiânia - GO',
      mapsLink: 'https://maps.app.goo.gl/9gH5fDxkNDjjYwG98',
      cor: 'from-cyan-500 to-cyan-700',
      imagens: [
        '/public/foto40.jpg',
        '/public/foto3.JPG',
        '/public/foto11.jpg',
        '/public/foto14.jpg',
      ],
      diferenciais: [
        { icon: MapPin, label: 'Próximo ao Aeroporto' },
        { icon: Coffee, label: 'Café da Manhã' },
        { icon: Car, label: 'Estacionamento' },
        { icon: Clock, label: 'Recepção 24h' },
      ],
      comodidades: [
        'Wi-Fi Gratuito',
        'Ar Condicionado',
        'TV a Cabo',
        'Frigobar',
        'Estacionamento',
        'Café da Manhã',
        'Próximo ao aeroporto',
        'Recepção 24h'
      ]
    }
  ]

  // Inicializar slides dos hotéis
  useEffect(() => {
    const initialSlides = {}
    hoteis.forEach(hotel => {
      initialSlides[hotel.id] = 0
    })
    setHotelSlides(initialSlides)
  }, [])

  // Auto-play para carrosséis dos hotéis
  useEffect(() => {
    const interval = setInterval(() => {
      setHotelSlides(prev => {
        const newSlides = { ...prev }
        hoteis.forEach(hotel => {
          newSlides[hotel.id] = ((prev[hotel.id] || 0) + 1) % hotel.imagens.length
        })
        return newSlides
      })
    }, 4000)
    return () => clearInterval(interval)
  }, [])

  // Funções de navegação do carrossel
  const nextSlide = (hotelId, totalImages) => {
    setHotelSlides(prev => ({
      ...prev,
      [hotelId]: ((prev[hotelId] || 0) + 1) % totalImages
    }))
  }

  const prevSlide = (hotelId, totalImages) => {
    setHotelSlides(prev => ({
      ...prev,
      [hotelId]: ((prev[hotelId] || 0) - 1 + totalImages) % totalImages
    }))
  }

  const comodidadesGerais = [
    { icon: WifiHigh, label: 'Wi-Fi Gratuito' },
    { icon: Car, label: 'Estacionamento' },
    { icon: Coffee, label: 'Café da Manhã' },
    { icon: Snowflake, label: 'Ar Condicionado' },
    { icon: Television, label: 'TV' },
    { icon: Shower, label: 'Chuveiro Quente' },
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

        <div className="container mx-auto px-6 relative z-10 pt-32 pb-16 text-center">
          <div className="inline-flex items-center gap-2 bg-gold-500/20 border border-gold-500/30 rounded-full px-5 py-2 mb-6">
            <Bed size={18} className="text-gold-400" />
            <span className="text-sm text-gold-400 font-medium">Hotelaria ASSEGO</span>
          </div>
          
          <h1 className="font-display font-black text-4xl md:text-5xl lg:text-6xl text-white mb-6">
            Hospedagem para <span className="text-gold-400">Associados</span>
          </h1>
          
          <p className="text-gray-300 text-lg md:text-xl max-w-3xl mx-auto mb-8">
            A ASSEGO oferece duas opções de hospedagem em Goiânia para associados em trânsito. 
            Conforto, segurança e preços especiais para você e sua família.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="#hoteis"
              className="inline-flex items-center justify-center gap-2 bg-gold-500 hover:bg-gold-600 text-black font-bold py-4 px-8 rounded-full transition-all hover:scale-105"
            >
              Ver Hotéis
              <ArrowRight size={20} weight="bold" />
            </a>
          </div>
        </div>

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

      {/* Info Cards */}
      <section className="py-12 bg-[#0B1221] border-y border-white/10">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { icon: Bed, label: 'Hotéis', value: '2 opções' },
              { icon: Clock, label: 'Check-in', value: '14h' },
              { icon: Clock, label: 'Check-out', value: '12h' },
              { icon: MapPin, label: 'Cidade', value: 'Goiânia - GO' },
            ].map((item, index) => (
              <div key={index} className="text-center">
                <item.icon size={32} className="text-gold-400 mx-auto mb-2" />
                <p className="text-gray-400 text-xs uppercase tracking-wider mb-1">{item.label}</p>
                <p className="text-white font-bold">{item.value}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Comodidades Gerais */}
      <section className="py-16 bg-[#050A18]">
        <div className="container mx-auto px-6">
          <h2 className="text-2xl font-display font-bold text-white mb-8 text-center">
            Comodidades Disponíveis
          </h2>

          <div className="grid grid-cols-3 md:grid-cols-6 gap-6 max-w-4xl mx-auto">
            {comodidadesGerais.map((item, index) => (
              <div key={index} className="text-center group">
                <div className="w-16 h-16 bg-white/5 border border-white/10 rounded-2xl flex items-center justify-center mx-auto mb-3 group-hover:border-gold-500/50 group-hover:bg-gold-500/10 transition-all">
                  <item.icon size={28} className="text-gold-400" />
                </div>
                <p className="text-gray-400 text-sm">{item.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Hotéis */}
      <section id="hoteis" className="py-20 bg-[#0B1221]">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-4">
              Nossos Hotéis
            </h2>
            <p className="text-gray-400 text-lg">
              Escolha a melhor opção para sua estadia em Goiânia.
            </p>
          </div>

          <div className="space-y-16">
            {hoteis.map((hotel, index) => (
              <div 
                key={hotel.id}
                className={`relative bg-white/5 border border-white/10 rounded-3xl overflow-hidden ${
                  index === 0 ? 'ring-2 ring-gold-500/20' : ''
                }`}
              >
                {/* Header do Hotel */}
                <div className={`h-2 bg-gradient-to-r ${hotel.cor}`}></div>
                
                {index === 0 && (
                  <div className="absolute top-4 right-4 bg-gold-500 text-black text-xs font-bold px-4 py-1 rounded-full z-20">
                    SEDE PRINCIPAL
                  </div>
                )}

                <div className="grid lg:grid-cols-2 gap-0">
                  {/* Carrossel de Imagens */}
                  <div className="relative h-64 lg:h-auto lg:min-h-[450px] overflow-hidden group">
                    {hotel.imagens.map((img, imgIndex) => (
                      <div
                        key={imgIndex}
                        className={`absolute inset-0 transition-opacity duration-500 ${
                          imgIndex === (hotelSlides[hotel.id] || 0) ? 'opacity-100' : 'opacity-0'
                        }`}
                      >
                        <img 
                          src={img} 
                          alt={`${hotel.nome} - Foto ${imgIndex + 1}`}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    ))}
                    
                    {/* Gradiente */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>

                    {/* Botões de navegação */}
                    <button
                      onClick={() => prevSlide(hotel.id, hotel.imagens.length)}
                      className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-black/50 hover:bg-black/70 rounded-full flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity z-10"
                    >
                      <CaretLeft size={24} weight="bold" />
                    </button>
                    <button
                      onClick={() => nextSlide(hotel.id, hotel.imagens.length)}
                      className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-black/50 hover:bg-black/70 rounded-full flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity z-10"
                    >
                      <CaretRight size={24} weight="bold" />
                    </button>

                    {/* Indicadores */}
                    <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-10">
                      {hotel.imagens.map((_, dotIndex) => (
                        <button
                          key={dotIndex}
                          onClick={() => setHotelSlides(prev => ({ ...prev, [hotel.id]: dotIndex }))}
                          className={`w-2 h-2 rounded-full transition-all ${
                            dotIndex === (hotelSlides[hotel.id] || 0) 
                              ? 'bg-white w-6' 
                              : 'bg-white/50'
                          }`}
                        />
                      ))}
                    </div>

                    {/* Contador */}
                    <div className="absolute top-4 left-4 bg-black/50 text-white text-xs font-bold px-3 py-1 rounded-full z-10">
                      {(hotelSlides[hotel.id] || 0) + 1} / {hotel.imagens.length}
                    </div>
                  </div>

                  {/* Conteúdo */}
                  <div className="p-8 lg:p-10">
                    <div className="inline-flex items-center gap-2 bg-white/10 rounded-full px-4 py-1 mb-4">
                      <Bed size={16} className="text-gold-400" />
                      <span className="text-xs text-gray-300">{hotel.subtitulo}</span>
                    </div>

                    <h3 className="text-2xl md:text-3xl font-display font-bold text-white mb-4">
                      {hotel.nome}
                    </h3>
                    
                    <p className="text-gray-400 mb-6 leading-relaxed">
                      {hotel.descricao}
                    </p>

                    {/* Diferenciais */}
                    <div className="grid grid-cols-2 gap-3 mb-6">
                      {hotel.diferenciais.map((dif, i) => (
                        <div key={i} className="flex items-center gap-2 text-gray-300 text-sm">
                          <dif.icon size={18} className="text-gold-400" />
                          {dif.label}
                        </div>
                      ))}
                    </div>

                    {/* Comodidades */}
                    <div className="mb-6">
                      <p className="text-gray-500 text-sm mb-3">Comodidades:</p>
                      <div className="flex flex-wrap gap-2">
                        {hotel.comodidades.slice(0, 6).map((item, i) => (
                          <span key={i} className="bg-white/5 border border-white/10 text-gray-300 text-xs px-3 py-1 rounded-full">
                            {item}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Endereço */}
                    <div className="bg-white/5 border border-white/10 rounded-xl p-4 mb-6">
                      <div className="flex items-start gap-3">
                        <MapPin size={20} className="text-gold-400 flex-shrink-0 mt-0.5" />
                        <div>
                          <p className="text-white font-medium">{hotel.endereco}</p>
                          <p className="text-gray-400 text-sm">{hotel.cidade}</p>
                        </div>
                      </div>
                    </div>

                    {/* Botões */}
                    <div className="flex flex-col sm:flex-row gap-3">
                      <a 
                        href={`https://api.whatsapp.com/send?phone=${hotel.whatsapp}&text=Olá!%20Gostaria%20de%20fazer%20uma%20reserva%20no%20${encodeURIComponent(hotel.nome)}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 inline-flex items-center justify-center gap-2 bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-6 rounded-xl transition-all hover:scale-105"
                      >
                        <WhatsappLogo size={20} weight="fill" />
                        {hotel.telefone}
                      </a>
                      <a 
                        href={hotel.mapsLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 inline-flex items-center justify-center gap-2 bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-6 rounded-xl transition-all hover:scale-105"
                      >
                        <NavigationArrow size={20} weight="fill" />
                        Ver no Mapa
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Comparativo */}
      <section className="py-20 bg-[#050A18]">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-4">
              Qual Hotel Escolher?
            </h2>
            <p className="text-gray-400 text-lg">
              Compare as opções e escolha a melhor para você.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-6">
              
              {/* Hotel ASSEGO */}
              <div className="bg-gradient-to-br from-[#000e72]/30 to-[#001090]/20 border border-[#000e72]/50 rounded-2xl p-6">
                <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                  <Bed size={24} className="text-gold-400" />
                  Hotel da ASSEGO
                </h3>
                <ul className="space-y-3">
                  {[
                    'Localizado na sede principal',
                    'Acesso ao parque aquático',
                    'Restaurante no local',
                    'Campos de futebol',
                    'Ideal para família',
                  ].map((item, i) => (
                    <li key={i} className="flex items-center gap-2 text-gray-300 text-sm">
                      <CheckCircle size={18} weight="fill" className="text-green-500 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
                <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-between">
                  <p className="text-gold-400 font-bold">(62) 99192-2321</p>
                  <a 
                    href="https://maps.app.goo.gl/7zbtxBZGwDBSPufv6"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-400 text-sm hover:underline flex items-center gap-1"
                  >
                    <MapPin size={14} />
                    Ver mapa
                  </a>
                </div>
              </div>

              {/* Hotel 24 de Outubro */}
              <div className="bg-gradient-to-br from-cyan-500/10 to-cyan-700/10 border border-cyan-500/30 rounded-2xl p-6">
                <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                  <Bed size={24} className="text-cyan-400" />
                  Hotel 24 de Outubro
                </h3>
                <ul className="space-y-3">
                  {[
                    'Próximo ao aeroporto',
                    'Setor Aeroviário',
                    'Café da manhã incluso',
                    'Fácil acesso às BRs',
                    'Ideal para viagens rápidas',
                  ].map((item, i) => (
                    <li key={i} className="flex items-center gap-2 text-gray-300 text-sm">
                      <CheckCircle size={18} weight="fill" className="text-green-500 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
                <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-between">
                  <p className="text-cyan-400 font-bold">(62) 99346-9190</p>
                  <a 
                    href="https://maps.app.goo.gl/9gH5fDxkNDjjYwG98"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-400 text-sm hover:underline flex items-center gap-1"
                  >
                    <MapPin size={14} />
                    Ver mapa
                  </a>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-r from-[#000e72] to-[#001090] relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-gold-500/10 rounded-full blur-[150px]"></div>
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-6">
              Reserve Sua Estadia
            </h2>
            <p className="text-blue-100/80 text-lg mb-8">
              Entre em contato diretamente com o hotel de sua preferência para verificar disponibilidade.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="https://api.whatsapp.com/send?phone=5562991922321&text=Olá!%20Gostaria%20de%20fazer%20uma%20reserva%20no%20Hotel%20da%20ASSEGO"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-gold-500 hover:bg-gold-600 text-black font-bold py-4 px-8 rounded-full transition-all hover:scale-105"
              >
                <WhatsappLogo size={20} weight="fill" />
                Hotel ASSEGO
              </a>
              <a 
                href="https://api.whatsapp.com/send?phone=5562993469190&text=Olá!%20Gostaria%20de%20fazer%20uma%20reserva%20no%20Hotel%2024%20de%20Outubro"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-cyan-500 hover:bg-cyan-600 text-white font-bold py-4 px-8 rounded-full transition-all hover:scale-105"
              >
                <WhatsappLogo size={20} weight="fill" />
                Hotel 24 de Outubro
              </a>
            </div>
          </div>
        </div>
      </section>

    </main>
  )
}

export default HotelAssego