/**
 * ========================================
 * Partners - Carrossel de Parceiros
 * ========================================
 */

// Nomes dos parceiros para o carrossel
const partnerNames = [
  'BALI PARK',
  'LAGOA TERMAS',
  'SESC GOIÁS',
  'HOTEL ARUANÃ',
  'UNIMED',
  'DROGASIL',
]

function Partners() {
  return (
    <section className="py-16 bg-[#050A18] border-b border-white/5">
      {/* Título */}
      <div className="container mx-auto px-6 text-center mb-10">
        <p className="text-sm font-bold text-gray-500 tracking-[0.3em] uppercase">
          Parceiros de Elite
        </p>
      </div>

      {/* Carrossel infinito */}
      <div className="relative w-full overflow-hidden">
        {/* Gradientes laterais */}
        <div className="absolute top-0 left-0 h-full w-32 bg-gradient-to-r from-[#050A18] to-transparent z-10"></div>
        <div className="absolute top-0 right-0 h-full w-32 bg-gradient-to-l from-[#050A18] to-transparent z-10"></div>
        
        {/* Conteúdo animado */}
        <div className="flex whitespace-nowrap animate-marquee gap-20 items-center opacity-60">
          {/* Primeira passagem */}
          {partnerNames.map((name, index) => (
            <span 
              key={`first-${index}`}
              className="text-3xl font-display font-bold text-gray-500 hover:text-white transition duration-500 cursor-default"
            >
              {name}
            </span>
          ))}
          
          {/* Segunda passagem (para loop contínuo) */}
          {partnerNames.map((name, index) => (
            <span 
              key={`second-${index}`}
              className="text-3xl font-display font-bold text-gray-500 hover:text-white transition duration-500 cursor-default"
            >
              {name}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Partners
