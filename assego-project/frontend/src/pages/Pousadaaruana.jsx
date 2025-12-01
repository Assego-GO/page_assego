/**
 * ========================================
 * Pousada Aruanã - Hospedagem no Rio Araguaia
 * ========================================
 */

import { useState, useEffect } from 'react'
import { 
  House, 
  FishSimple, 
  Boat, 
  Tree,
  Sun,
  Clock,
  MapPin,
  Phone,
  ArrowRight,
  CheckCircle,
  Star,
  Mountains,
  Users,
  Bed,
  Coffee,
  Car
} from '@phosphor-icons/react'

function PousadaAruana() {
  const [currentSlide, setCurrentSlide] = useState(0)

  const backgroundImages = [
    'https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?w=1920&q=80',
    'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1920&q=80',
    'https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=1920&q=80',
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % backgroundImages.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [])

  const atrativos = [
    {
      icon: FishSimple,
      titulo: 'Pesca Esportiva',
      descricao: 'O Rio Araguaia é um dos melhores destinos para pesca esportiva do Brasil.',
      cor: 'from-blue-500 to-blue-700'
    },
    {
      icon: Boat,
      titulo: 'Passeios de Barco',
      descricao: 'Explore as belezas do rio em passeios inesquecíveis.',
      cor: 'from-cyan-500 to-cyan-700'
    },
    {
      icon: Sun,
      titulo: 'Praias de Água Doce',
      descricao: 'Praias de areias brancas durante a temporada de seca.',
      cor: 'from-orange-500 to-orange-700'
    },
    {
      icon: Tree,
      titulo: 'Natureza Preservada',
      descricao: 'Fauna e flora do cerrado em seu estado mais puro.',
      cor: 'from-green-500 to-green-700'
    },
    {
      icon: Mountains,
      titulo: 'Trilhas Ecológicas',
      descricao: 'Caminhos pela natureza com guias especializados.',
      cor: 'from-emerald-500 to-emerald-700'
    },
    {
      icon: Users,
      titulo: 'Área de Lazer',
      descricao: 'Espaços para confraternização e descanso.',
      cor: 'from-purple-500 to-purple-700'
    },
  ]

  const acomodacoes = [
    {
      tipo: 'Chalé Standard',
      capacidade: '2 pessoas',
      descricao: 'Chalé aconchegante com varanda e vista para o rio.',
      amenidades: ['Cama casal', 'Ventilador', 'Frigobar', 'Varanda'],
      imagem: 'https://images.unsplash.com/photo-1587061949409-02df41d5e562?w=600&q=80'
    },
    {
      tipo: 'Chalé Família',
      capacidade: '4 pessoas',
      descricao: 'Espaço amplo ideal para famílias com crianças.',
      amenidades: ['1 casal + 2 solteiro', 'Ventilador', 'Frigobar', 'Varanda'],
      imagem: 'https://images.unsplash.com/photo-1595521624992-48a59aef95e3?w=600&q=80'
    },
    {
      tipo: 'Suíte Premium',
      capacidade: '2 pessoas',
      descricao: 'Nossa melhor acomodação com vista privilegiada.',
      amenidades: ['Cama king', 'Ar condicionado', 'TV', 'Varanda privativa'],
      imagem: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=600&q=80'
    },
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
          <div className="inline-flex items-center gap-2 bg-green-500/20 border border-green-500/30 rounded-full px-5 py-2 mb-6">
            <House size={18} className="text-green-400" />
            <span className="text-sm text-green-400 font-medium">Rio Araguaia - Aruanã/GO</span>
          </div>
          
          <h1 className="font-display font-black text-4xl md:text-5xl lg:text-6xl text-white mb-6">
            Pousada <span className="text-green-400">Aruanã</span>
          </h1>
          
          <p className="text-gray-300 text-lg md:text-xl max-w-3xl mx-auto mb-8">
            Seu refúgio às margens do Rio Araguaia. Pesca esportiva, praias de água doce 
            e contato direto com a natureza do cerrado goiano.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="#acomodacoes"
              className="inline-flex items-center justify-center gap-2 bg-green-500 hover:bg-green-600 text-white font-bold py-4 px-8 rounded-full transition-all hover:scale-105"
            >
              Ver Acomodações
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

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-2 z-10">
          {backgroundImages.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-2 h-2 rounded-full transition-all ${
                index === currentSlide ? 'bg-green-500 w-6' : 'bg-white/30'
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
              { icon: MapPin, label: 'Localização', value: 'Aruanã - GO' },
              { icon: Bed, label: 'Chalés', value: '15 unidades' },
              { icon: FishSimple, label: 'Melhor Época', value: 'Jun a Set' },
              { icon: Car, label: 'Distância', value: '310 km de Goiânia' },
            ].map((item, index) => (
              <div key={index} className="text-center">
                <item.icon size={32} className="text-green-400 mx-auto mb-2" />
                <p className="text-gray-400 text-xs uppercase tracking-wider mb-1">{item.label}</p>
                <p className="text-white font-bold">{item.value}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Atrativos */}
      <section className="py-20 bg-[#050A18]">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-4">
              O que fazer em Aruanã
            </h2>
            <p className="text-gray-400 text-lg">
              Aventura, descanso e contato com a natureza. Aruanã tem tudo isso!
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {atrativos.map((atrativo, index) => (
              <div 
                key={index}
                className="group bg-white/5 border border-white/10 rounded-3xl p-8 hover:border-green-500/30 transition-all duration-500 hover:-translate-y-2"
              >
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${atrativo.cor} flex items-center justify-center text-white text-3xl mb-6 group-hover:scale-110 transition-transform duration-500 shadow-lg`}>
                  <atrativo.icon size={32} weight="duotone" />
                </div>
                
                <h3 className="text-xl font-bold text-white mb-3">{atrativo.titulo}</h3>
                <p className="text-gray-400 leading-relaxed">{atrativo.descricao}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Acomodações */}
      <section id="acomodacoes" className="py-20 bg-[#0B1221]">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-4">
              Nossas Acomodações
            </h2>
            <p className="text-gray-400 text-lg">
              Chalés confortáveis em meio à natureza exuberante.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {acomodacoes.map((acomodacao, index) => (
              <div 
                key={index}
                className="group bg-white/5 border border-white/10 rounded-3xl overflow-hidden hover:border-green-500/30 transition-all"
              >
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={acomodacao.imagem} 
                    alt={acomodacao.tipo}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-4 right-4 bg-green-500 text-white text-xs font-bold px-3 py-1 rounded-full">
                    {acomodacao.capacidade}
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-bold text-white mb-2">{acomodacao.tipo}</h3>
                  <p className="text-gray-400 text-sm mb-4">{acomodacao.descricao}</p>
                  
                  <div className="space-y-2">
                    {acomodacao.amenidades.map((amenidade, i) => (
                      <div key={i} className="flex items-center gap-2 text-gray-300 text-sm">
                        <CheckCircle size={16} weight="fill" className="text-green-500" />
                        {amenidade}
                      </div>
                    ))}
                  </div>

                  <button className="w-full mt-6 bg-green-500/20 border border-green-500/30 text-green-400 font-bold py-3 rounded-xl hover:bg-green-500 hover:text-white transition-all">
                    Verificar Disponibilidade
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Temporada de Pesca */}
      <section className="py-20 bg-[#050A18]">
        <div className="container mx-auto px-6">
          <div className="max-w-5xl mx-auto bg-gradient-to-br from-green-900/50 to-green-800/30 border border-green-500/30 rounded-3xl p-10 md:p-16">
            <div className="grid md:grid-cols-2 gap-10 items-center">
              <div>
                <FishSimple size={48} className="text-green-400 mb-6" />
                <h2 className="text-3xl font-display font-bold text-white mb-4">
                  Temporada de Pesca
                </h2>
                <p className="text-gray-300 mb-6">
                  O Rio Araguaia é conhecido mundialmente pela variedade de peixes 
                  e pela pesca esportiva. Durante a temporada (junho a setembro), 
                  as praias de água doce surgem e transformam a região em um 
                  verdadeiro paraíso.
                </p>
                
                <div className="space-y-3">
                  {[
                    'Tucunaré, Pirarucu, Pintado',
                    'Praias de areia branca',
                    'Água cristalina',
                    'Guias de pesca disponíveis'
                  ].map((item, index) => (
                    <div key={index} className="flex items-center gap-2">
                      <CheckCircle size={20} weight="fill" className="text-green-500" />
                      <span className="text-gray-300">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="relative">
                <img 
                  src="https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=600&q=80"
                  alt="Pesca no Araguaia"
                  className="rounded-2xl shadow-2xl"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-r from-green-700 to-green-900 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-[150px]"></div>
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-6">
              Venha Viver essa Experiência!
            </h2>
            <p className="text-green-100/80 text-lg mb-8">
              Reserve já sua estadia na Pousada ASSEGO Aruanã e conecte-se com a natureza.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="tel:6232813177"
                className="inline-flex items-center justify-center gap-2 bg-white text-green-700 font-bold py-4 px-8 rounded-full transition-all hover:scale-105"
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

export default PousadaAruana