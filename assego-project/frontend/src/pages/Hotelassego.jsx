/**
 * ========================================
 * Hotel ASSEGO - Hospedagem em Goiânia
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
  Phone,
  ArrowRight,
  CheckCircle,
  Star,
  AirplaneTilt,
  Snowflake,
  Users
} from '@phosphor-icons/react'

function HotelAssego() {
  const [currentSlide, setCurrentSlide] = useState(0)

  const backgroundImages = [
    'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=1920&q=80',
    'https://images.unsplash.com/photo-1582719508461-905c673771fd?w=1920&q=80',
    'https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=1920&q=80',
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % backgroundImages.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [])

  const quartos = [
    {
      tipo: 'Standard Single',
      descricao: 'Quarto confortável para uma pessoa, ideal para estadias curtas.',
      capacidade: '1 pessoa',
      amenidades: ['Cama de solteiro', 'TV', 'Wi-Fi', 'Ar condicionado', 'Frigobar'],
      imagem: 'https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=600&q=80'
    },
    {
      tipo: 'Standard Duplo',
      descricao: 'Quarto espaçoso com cama de casal ou duas camas de solteiro.',
      capacidade: '2 pessoas',
      amenidades: ['Cama de casal', 'TV', 'Wi-Fi', 'Ar condicionado', 'Frigobar'],
      imagem: 'https://images.unsplash.com/photo-1590490360182-c33d57733427?w=600&q=80'
    },
    {
      tipo: 'Família',
      descricao: 'Quarto amplo para famílias com crianças.',
      capacidade: '4 pessoas',
      amenidades: ['1 cama casal + 2 solteiro', 'TV', 'Wi-Fi', 'Ar condicionado', 'Frigobar'],
      imagem: 'https://images.unsplash.com/photo-1566665797739-1674de7a421a?w=600&q=80'
    },
  ]

  const comodidades = [
    { icon: WifiHigh, label: 'Wi-Fi Gratuito' },
    { icon: Car, label: 'Estacionamento' },
    { icon: Coffee, label: 'Café da Manhã' },
    { icon: Snowflake, label: 'Ar Condicionado' },
    { icon: Television, label: 'TV a Cabo' },
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
            <span className="text-sm text-gold-400 font-medium">Hotel de Trânsito</span>
          </div>
          
          <h1 className="font-display font-black text-4xl md:text-5xl lg:text-6xl text-white mb-6">
            Hotel <span className="text-gold-400">ASSEGO</span>
          </h1>
          
          <p className="text-gray-300 text-lg md:text-xl max-w-3xl mx-auto mb-8">
            Hospedagem confortável e acessível em Goiânia para associados em trânsito. 
            Localização privilegiada e todas as comodidades que você precisa.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="#quartos"
              className="inline-flex items-center justify-center gap-2 bg-gold-500 hover:bg-gold-600 text-black font-bold py-4 px-8 rounded-full transition-all hover:scale-105"
            >
              Ver Quartos
              <ArrowRight size={20} weight="bold" />
            </a>
            <a 
              href="tel:6232813177"
              className="inline-flex items-center justify-center gap-2 bg-white/10 border border-white/20 text-white font-bold py-4 px-8 rounded-full hover:bg-white/20 transition-all"
            >
              <Phone size={20} />
              Reservar Agora
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
              { icon: Clock, label: 'Check-in', value: '14h' },
              { icon: Clock, label: 'Check-out', value: '12h' },
              { icon: Users, label: 'Quartos', value: '20 unidades' },
              { icon: MapPin, label: 'Local', value: 'Setor Sul, Goiânia' },
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

      {/* Comodidades */}
      <section className="py-16 bg-[#050A18]">
        <div className="container mx-auto px-6">
          <h2 className="text-2xl font-display font-bold text-white mb-8 text-center">
            Comodidades Inclusas
          </h2>

          <div className="grid grid-cols-3 md:grid-cols-6 gap-6 max-w-4xl mx-auto">
            {comodidades.map((item, index) => (
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

      {/* Quartos */}
      <section id="quartos" className="py-20 bg-[#0B1221]">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-4">
              Nossos Quartos
            </h2>
            <p className="text-gray-400 text-lg">
              Acomodações confortáveis para todas as necessidades.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {quartos.map((quarto, index) => (
              <div 
                key={index}
                className="group bg-white/5 border border-white/10 rounded-3xl overflow-hidden hover:border-gold-500/30 transition-all"
              >
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={quarto.imagem} 
                    alt={quarto.tipo}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-4 right-4 bg-gold-500 text-black text-xs font-bold px-3 py-1 rounded-full">
                    {quarto.capacidade}
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-bold text-white mb-2">{quarto.tipo}</h3>
                  <p className="text-gray-400 text-sm mb-4">{quarto.descricao}</p>
                  
                  <div className="space-y-2">
                    {quarto.amenidades.map((amenidade, i) => (
                      <div key={i} className="flex items-center gap-2 text-gray-300 text-sm">
                        <CheckCircle size={16} weight="fill" className="text-green-500" />
                        {amenidade}
                      </div>
                    ))}
                  </div>

                  <button className="w-full mt-6 bg-gold-500/20 border border-gold-500/30 text-gold-400 font-bold py-3 rounded-xl hover:bg-gold-500 hover:text-black transition-all">
                    Verificar Disponibilidade
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Localização */}
      <section className="py-20 bg-[#050A18]">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-6">
                Localização Privilegiada
              </h2>
              <p className="text-gray-400 text-lg mb-8">
                O Hotel ASSEGO está localizado no coração de Goiânia, no Setor Sul, 
                com fácil acesso às principais vias da cidade e próximo a diversos 
                serviços e comércios.
              </p>

              <div className="space-y-4">
                {[
                  'Próximo ao Centro de Goiânia',
                  'Fácil acesso à BR-153 e GO-020',
                  'Próximo a restaurantes e farmácias',
                  'Estacionamento gratuito',
                ].map((item, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <CheckCircle size={24} weight="fill" className="text-gold-500" />
                    <span className="text-gray-300">{item}</span>
                  </div>
                ))}
              </div>

              <div className="mt-8 p-6 bg-white/5 border border-white/10 rounded-2xl">
                <p className="text-gray-400 text-sm mb-2">Endereço</p>
                <p className="text-white font-bold">Rua 87, Qd. F-23, Lt. 01 - Setor Sul</p>
                <p className="text-gray-300">Goiânia - GO, CEP 74083-330</p>
              </div>
            </div>

            <div className="relative">
              <div className="aspect-video rounded-3xl overflow-hidden">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3821.7!2d-49.2567!3d-16.6869!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTbCsDQxJzEyLjgiUyA0OcKwMTUnMjQuMSJX!5e0!3m2!1spt-BR!2sbr!4v1234567890"
                  width="100%"
                  height="100%"
                  style={{ border: 0, minHeight: '300px' }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="grayscale hover:grayscale-0 transition-all duration-500"
                ></iframe>
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
              Entre em contato para verificar disponibilidade e fazer sua reserva.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="tel:6232813177"
                className="inline-flex items-center justify-center gap-2 bg-gold-500 hover:bg-gold-600 text-black font-bold py-4 px-8 rounded-full transition-all hover:scale-105"
              >
                <Phone size={20} />
                (62) 3281-3177
              </a>
              <a 
                href="#filiar"
                className="inline-flex items-center justify-center gap-2 bg-white/10 border border-white/20 text-white font-bold py-4 px-8 rounded-full hover:bg-white/20 transition-all"
              >
                Quero Me Associar
                <ArrowRight size={20} weight="bold" />
              </a>
            </div>
          </div>
        </div>
      </section>

    </main>
  )
}

export default HotelAssego