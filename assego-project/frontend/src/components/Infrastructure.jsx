/**
 * ========================================
 * Infrastructure - Seção de Infraestrutura
 * ========================================
 * 
 * Grid estilo "Bento" com as instalações
 */

import { ArrowRight, Drop } from '@phosphor-icons/react'

// Dados das instalações
const facilities = [
  {
    id: 1,
    title: 'Parque Aquático',
    subtitle: 'Piscinas aquecidas, toboáguas e área infantil segura.',
    image: '/public/Infraimagens/foto2.jpg',
    icon: Drop,
    size: 'large' // Ocupa 2 colunas e 2 linhas
  },
  {
    id: 2,
    title: 'Campos Society',
    subtitle: 'Gramado Sintético',
    image: 'https://images.unsplash.com/photo-1522771753033-632175f8da3b?q=80&w=800',
    size: 'small'
  },
  {
    id: 3,
    title: 'Hotel de Trânsito',
    subtitle: 'Conforto em Goiânia',
    image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=800',
    size: 'small'
  },
  {
    id: 4,
    title: 'Salão de Eventos',
    subtitle: 'O cenário perfeito para as celebrações da sua vida.',
    image: 'https://images.unsplash.com/photo-1519167758481-83f550bb49b3?q=80&w=800',
    size: 'wide' // Ocupa 2 colunas
  }
]

function Infrastructure() {
  return (
    <section id="clube" className="py-32 bg-[#0B1221] relative overflow-hidden">
      {/* Blob decorativo */}
      <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-royal-600/10 rounded-full blur-[120px] animate-blob"></div>

      <div className="container mx-auto px-6 relative z-10">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 reveal">
          <div className="max-w-2xl">
            <span className="text-gold-400 font-bold tracking-[0.2em] uppercase text-xs mb-2 block">
              Sede Goiânia
            </span>
            <h2 className="font-display font-bold text-4xl md:text-5xl text-white mb-4 leading-tight">
              Um Santuário de <br />
              <span className="text-gradient-gold">Lazer e Bem-Estar.</span>
            </h2>
            <p className="text-gray-400 text-lg font-light">
              Estrutura de nível internacional exclusiva para nossos associados e familiares.
            </p>
          </div>
          
          <a 
            href="#" 
            className="group text-white font-bold flex items-center gap-2 mt-6 md:mt-0 hover:text-gold-400 transition"
          >
            Explorar Galeria 
            <ArrowRight className="group-hover:translate-x-1 transition" />
          </a>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 md:grid-rows-2 gap-6 h-auto md:h-[700px]">
          
          {/* Item Principal - Parque Aquático */}
          <div className="md:col-span-2 md:row-span-2 group relative rounded-3xl overflow-hidden cursor-pointer reveal">
            <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition duration-500 z-10"></div>
            <img 
              src={facilities[0].image}
              alt={facilities[0].title}
              className="absolute inset-0 w-full h-full object-cover transition duration-700 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-90 z-20"></div>
            
            <div className="absolute bottom-0 left-0 p-8 z-30 translate-y-4 group-hover:translate-y-0 transition duration-500">
              <div className="w-12 h-12 rounded-full bg-white/10 backdrop-blur flex items-center justify-center mb-4 border border-white/20 text-gold-400">
                <Drop size={28} />
              </div>
              <h3 className="text-3xl font-bold text-white mb-2">{facilities[0].title}</h3>
              <p className="text-gray-300 text-sm opacity-0 group-hover:opacity-100 transition duration-500 delay-100">
                {facilities[0].subtitle}
              </p>
            </div>
          </div>
          
          {/* Campos Society */}
          <div className="group relative rounded-3xl overflow-hidden cursor-pointer reveal min-h-[200px]">
            <img 
              src={facilities[1].image}
              alt={facilities[1].title}
              className="absolute inset-0 w-full h-full object-cover transition duration-700 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-black/50 group-hover:bg-black/30 transition z-10"></div>
            <div className="absolute bottom-0 left-0 p-6 z-20">
              <h3 className="text-xl font-bold text-white">{facilities[1].title}</h3>
              <p className="text-xs text-gray-300 uppercase tracking-wider mt-1">{facilities[1].subtitle}</p>
            </div>
          </div>
          
          {/* Hotel */}
          <div className="group relative rounded-3xl overflow-hidden cursor-pointer reveal min-h-[200px]">
            <img 
              src={facilities[2].image}
              alt={facilities[2].title}
              className="absolute inset-0 w-full h-full object-cover transition duration-700 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-black/50 group-hover:bg-black/30 transition z-10"></div>
            <div className="absolute bottom-0 left-0 p-6 z-20">
              <h3 className="text-xl font-bold text-white">{facilities[2].title}</h3>
              <p className="text-xs text-gray-300 uppercase tracking-wider mt-1">{facilities[2].subtitle}</p>
            </div>
          </div>
          
          {/* Eventos (largo) */}
          <div className="md:col-span-2 group relative rounded-3xl overflow-hidden cursor-pointer reveal min-h-[200px]">
            <img 
              src={facilities[3].image}
              alt={facilities[3].title}
              className="absolute inset-0 w-full h-full object-cover transition duration-700 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-transparent z-10"></div>
            <div className="absolute bottom-0 left-0 p-8 z-20">
              <h3 className="text-2xl font-bold text-white">{facilities[3].title}</h3>
              <p className="text-sm text-gray-300 mt-2">{facilities[3].subtitle}</p>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  )
}

export default Infrastructure
