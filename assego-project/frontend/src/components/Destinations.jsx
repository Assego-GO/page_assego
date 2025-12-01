/**
 * ========================================
 * Destinations - Destinos Premium
 * ========================================
 */

// Dados dos destinos
const destinations = [
  {
    id: 1,
    name: 'Bali Park',
    location: 'Luziânia - GO',
    description: 'A maior praia artificial da América do Sul. Diversão sem limites para toda a família com descontos exclusivos.',
    image: 'https://images.unsplash.com/photo-1605218427368-35b012180767?q=80&w=800',
    accentColor: 'bg-gold-500',
    exclusive: false
  },
  {
    id: 2,
    name: 'Lagoa Termas',
    location: 'Caldas Novas - GO',
    description: 'O berço das águas termais. Tradição, natureza e relaxamento no coração de Caldas Novas.',
    image: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?q=80&w=800',
    accentColor: 'bg-orange-500',
    exclusive: false
  },
  {
    id: 3,
    name: 'Hotel Aruanã',
    location: 'Aruanã - GO',
    description: 'Às margens do Rio Araguaia. A pescaria e o descanso que você merece em nossa sede própria.',
    image: '/public/destinosimagens/foto10.jpg',
    accentColor: 'bg-green-500',
    exclusive: true
  }
]

function Destinations() {
  return (
    <section id="convenios" className="py-32 bg-[#080E1F]">
      <div className="container mx-auto px-6">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row items-end justify-between mb-16 gap-8 reveal">
          <div>
            <h2 className="font-display font-bold text-4xl md:text-5xl text-white mb-4">
              Destinos <span className="italic font-serif text-gold-400">Premium</span>
            </h2>
            <p className="text-gray-400 text-lg font-light max-w-md">
              Sua carteira ASSEGO é um passaporte para os melhores resorts e parques de Goiás.
            </p>
          </div>
          
          <a 
            href="#" 
            className="px-8 py-3 rounded-full border border-white/20 text-white hover:bg-white hover:text-black transition font-bold text-sm tracking-wider uppercase"
          >
            Ver todos os parceiros
          </a>
        </div>

        {/* Grid de destinos */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 reveal">
          
          {destinations.map((dest) => (
            <div 
              key={dest.id}
              className={`group relative h-[450px] rounded-[2rem] overflow-hidden cursor-pointer ${
                dest.exclusive ? 'border-2 border-gold-500/30' : ''
              }`}
            >
              {/* Badge exclusivo */}
              {dest.exclusive && (
                <div className="absolute top-6 left-6 bg-gold-500 text-black font-bold px-4 py-1 rounded-full text-xs uppercase tracking-wider z-20 shadow-lg">
                  Exclusivo ASSEGO
                </div>
              )}
              
              {/* Imagem de fundo */}
              <img 
                src={dest.image}
                alt={dest.name}
                className="absolute inset-0 w-full h-full object-cover transition duration-700 group-hover:scale-110 group-hover:rotate-1"
              />
              
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent opacity-80 group-hover:opacity-60 transition duration-500"></div>
              
              {/* Tag de localização */}
              <div className="absolute top-6 right-6 bg-white/10 backdrop-blur border border-white/20 rounded-full px-4 py-1 text-xs font-bold text-white uppercase tracking-wider">
                {dest.location}
              </div>

              {/* Conteúdo */}
              <div className="absolute bottom-0 left-0 p-10 w-full transform translate-y-4 group-hover:translate-y-0 transition duration-500">
                <h3 className="text-3xl font-bold text-white mb-2">{dest.name}</h3>
                <div className={`h-1 w-12 ${dest.accentColor} mb-4`}></div>
                <p className="text-gray-300 text-sm opacity-0 group-hover:opacity-100 transition duration-500 delay-100 leading-relaxed">
                  {dest.description}
                </p>
              </div>
            </div>
          ))}
          
        </div>
      </div>
    </section>
  )
}

export default Destinations
