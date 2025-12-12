/**
 * ========================================
 * Diretoria ASSEGO - Gestão 2026
 * Padrão do site: cores escuras, gold, glass
 * ========================================
 */

function Diretoria() {

  // Conselho Administrativo 2026 - Esquerda
  const conselhoAdminEsquerda = [
    { graduacao: 'ST BM', nome: 'WELLINGTON', cargo: 'VICE-PRESIDENTE' },
    { graduacao: 'TEN PM', nome: 'CLÁUDIO', cargo: 'DIRETOR JURÍDICO' },
    { graduacao: 'TEN PM', nome: 'ANA PAULA', cargo: '1ª TESOUREIRA' },
  ]

  // Conselho Administrativo 2026 - Direita
  const conselhoAdminDireita = [
    { graduacao: 'ST PM', nome: 'IVALDI', cargo: '2º TESOUREIRO' },
    { graduacao: 'SGT PM', nome: 'TERRA', cargo: '1º SECRETÁRIO' },
    { graduacao: 'SGT PM', nome: 'ROCHA', cargo: '2º SECRETÁRIO' },
    { graduacao: 'TEN BM', nome: 'WESLEY', cargo: 'DIRETOR PATRIMÔNIO' },
  ]

  // Conselho Deliberativo Fiscal 2026 - Titulares (5)
  const conselhoFiscalTitulares = [
    { graduacao: 'ST PM', nome: 'ADAILMA', cargo: 'PRESIDENTE' },
    { graduacao: 'ST BM', nome: 'RUI', cargo: 'VICE-PRESIDENTE' },
    { graduacao: 'MAJ BM', nome: 'NILTOMAR', cargo: 'RELATOR' },
    { graduacao: 'TEN BM', nome: 'LEIDYANA', cargo: '1ª VOCAL' },
    { graduacao: 'TEN PM', nome: 'LUIZ AMARO', cargo: '2º VOCAL' },
  ]

  // Conselho Deliberativo Fiscal 2026 - Suplentes (5)
  const conselhoFiscalSuplentes = [
    { graduacao: 'CAP PM', nome: 'DE PAULA', cargo: '1º SUPLENTE' },
    { graduacao: 'ST PM', nome: 'ISABEL', cargo: '2ª SUPLENTE' },
    { graduacao: 'TEN PM', nome: 'CIRILO', cargo: '3º SUPLENTE' },
    { graduacao: 'TEN PM', nome: 'SANTOS', cargo: '4º SUPLENTE' },
    { graduacao: 'TC PM', nome: 'JUNE', cargo: '5ª SUPLENTE' },
  ]

  // Todos os diretores (36 total = 6x6)
  const todosDiretores = [
    { graduacao: 'SGT.', nome: 'DIONE', cargo: 'PARQUE AQUÁTICO' },
    { graduacao: 'SGT.', nome: 'CLEITON', cargo: 'HOTEL' },
    { graduacao: 'ST BM', nome: 'PÁDUA', cargo: 'POUSADA ARUANÃ' },
    { graduacao: 'ST PM', nome: 'ELOY', cargo: 'INFRAESTRUTURA' },
    { graduacao: 'SGT PM', nome: 'TIAGO RAIZ', cargo: 'MARKETING' },
    { graduacao: 'SGT.', nome: 'TADEU', cargo: 'COMERCIAL' },
    { graduacao: 'SGT.', nome: 'TOMAZ', cargo: 'COMERCIAL' },
    { graduacao: 'TEN BM', nome: 'REGYS', cargo: 'COMPRAS' },
    { graduacao: 'SGT PM', nome: 'NIEDSON', cargo: 'TEC. INFORMAÇÃO' },
    { graduacao: 'SGT PM', nome: 'BORGES', cargo: 'CONVÊNIOS' },
    { graduacao: 'ST PM', nome: 'LEMOS', cargo: 'CONVÊNIOS CALDAS' },
    { graduacao: 'SGT PM', nome: 'RODRIGO', cargo: 'TURISMO' },
    { graduacao: 'CAP PM', nome: 'RODOLFO', cargo: 'PEDAGÓGICO' },
    { graduacao: 'TEN PM', nome: 'KAREN', cargo: 'EVENTOS' },
    { graduacao: 'SGT.', nome: 'WASHINGTON', cargo: 'EVENTOS VETERANOS' },
    { graduacao: 'SGT.', nome: 'LINDOMAURO', cargo: 'VETERANOS' },
    { graduacao: 'SGT', nome: 'JOEL RODRIGUES', cargo: 'INCLUSÃO' },
    { graduacao: 'ST PM', nome: 'AMAURY', cargo: 'ESPORTES VETERANOS' },
    { graduacao: 'TEN BM', nome: 'MARQUES', cargo: 'ESPORTES BM' },
    { graduacao: 'SGT PM', nome: 'PAULO CÉSAR', cargo: 'ESPORTES' },
    { graduacao: 'MAJ BM', nome: 'MEDEIROS', cargo: 'LOGÍSTICA' },
    { graduacao: 'TEN BM', nome: 'FRANÇA', cargo: 'LOGÍSTICA' },
    { graduacao: 'CAP PM', nome: 'LUIZ', cargo: 'TRANSPORTES' },
    { graduacao: 'SGT PM', nome: 'MANRESA', cargo: 'CAPTAÇÃO RECURSOS' },
    { graduacao: 'TEN PM', nome: 'MELO', cargo: 'OUVIDORIA' },
    { graduacao: 'TEN PM', nome: 'CARLOS DINIZ', cargo: 'ASSISTENTE SOCIAL' },
    { graduacao: 'CAP PM', nome: 'RODRIGO', cargo: 'REL. INSTITUCIONAIS' },
    { graduacao: 'SGT', nome: 'MENDES', cargo: 'PROJETO MÉRITO' },
    { graduacao: 'SGT BM', nome: 'LEO FRANCISCO', cargo: 'ASSESS. PARLAMENTAR' },
    { graduacao: 'ST', nome: 'THIAGO HENRIQUE', cargo: 'REP. CONGRESSO' },
    { graduacao: 'MAJ PM', nome: 'CARLOS', cargo: 'ARTIC. POLÍTICA' },
    { graduacao: 'MAJ PM', nome: 'LÁSARO', cargo: 'REGIONAL SUDESTE' },
    { graduacao: 'ST', nome: 'JUNIOR CESAR', cargo: 'REGIONAL LESTE' },
    { graduacao: 'ST', nome: 'ELIO DURÃO', cargo: 'REGIÃO NORTE' },
    { graduacao: 'TEN PM', nome: 'MARCELO', cargo: 'REGIONAL ANÁPOLIS' },
    { graduacao: 'TEN PM', nome: 'MOURA', cargo: 'REGIÃO NORDESTE' },
  ]

  // Componente Foto Hexagonal Flat-Top
  const FotoHexagonal = ({ nome, size = 100 }) => {
    const height = size * 0.866
    const id = nome.replace(/\s/g, '-').replace(/[^a-zA-Z0-9-]/g, '')
    
    return (
      <div 
        className="relative flex-shrink-0"
        style={{ width: size, height: height }}
      >
        <svg 
          viewBox="0 0 100 86.6" 
          className="w-full h-full"
          style={{ filter: 'drop-shadow(0 4px 12px rgba(0,0,0,0.5))' }}
        >
          <defs>
            <clipPath id={`hexClip-${id}`}>
              <polygon points="25,0 75,0 100,43.3 75,86.6 25,86.6 0,43.3" />
            </clipPath>
            <linearGradient id={`gold-${id}`} x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#ffdf00" />
              <stop offset="50%" stopColor="#fff140" />
              <stop offset="100%" stopColor="#e6c700" />
            </linearGradient>
          </defs>
          {/* Borda dourada */}
          <polygon 
            points="25,0 75,0 100,43.3 75,86.6 25,86.6 0,43.3" 
            fill={`url(#gold-${id})`}
          />
          {/* Área interna */}
          <polygon 
            points="28,4 72,4 94,43.3 72,82.6 28,82.6 6,43.3" 
            fill="#1E293B"
          />
          <image
            href={`/diretoria/${nome.toLowerCase().replace(/ /g, '').replace('.', '')}.png`}
            x="6"
            y="4"
            width="88"
            height="78.6"
            clipPath={`url(#hexClip-${id})`}
            preserveAspectRatio="xMidYMid slice"
          />
        </svg>
      </div>
    )
  }

  // Componente Membro Esquerda (retângulo à esquerda, hexágono à direita)
  const MembroEsquerdaHex = ({ membro }) => (
    <div className="flex items-center gap-3 group">
      {/* Retângulo glass */}
      <div className="glass bg-white/5 border border-white/10 rounded-xl px-4 sm:px-5 py-3 sm:py-4 w-[140px] sm:w-[170px] md:w-[200px] group-hover:bg-white/10 transition-all duration-300">
        <p className="text-white font-bold text-[10px] sm:text-xs md:text-sm leading-tight">
          {membro.graduacao} {membro.nome}
        </p>
        <p className="text-gold-400 text-[8px] sm:text-[10px] md:text-xs uppercase font-medium">
          {membro.cargo}
        </p>
      </div>
      {/* Foto HEXAGONAL */}
      <div className="flex-shrink-0 transform group-hover:scale-105 transition-transform duration-300">
        <FotoHexagonal nome={membro.nome} size={95} />
      </div>
    </div>
  )

  // Componente Membro Direita (hexágono à esquerda, retângulo à direita)
  const MembroDireitaHex = ({ membro }) => (
    <div className="flex items-center gap-3 group">
      {/* Foto HEXAGONAL */}
      <div className="flex-shrink-0 transform group-hover:scale-105 transition-transform duration-300">
        <FotoHexagonal nome={membro.nome} size={95} />
      </div>
      {/* Retângulo glass */}
      <div className="glass bg-white/5 border border-white/10 rounded-xl px-4 sm:px-5 py-3 sm:py-4 w-[140px] sm:w-[170px] md:w-[200px] group-hover:bg-white/10 transition-all duration-300">
        <p className="text-white font-bold text-[10px] sm:text-xs md:text-sm leading-tight">
          {membro.graduacao} {membro.nome}
        </p>
        <p className="text-gold-400 text-[8px] sm:text-[10px] md:text-xs uppercase font-medium">
          {membro.cargo}
        </p>
      </div>
    </div>
  )

  // Componente Membro Centro (hexágono em cima, retângulo embaixo)
  const MembroCentroHex = ({ membro }) => (
    <div className="flex flex-col items-center gap-2 group">
      {/* Foto HEXAGONAL */}
      <div className="transform group-hover:scale-105 transition-transform duration-300">
        <FotoHexagonal nome={membro.nome} size={95} />
      </div>
      {/* Retângulo glass embaixo */}
      <div className="glass bg-white/5 border border-white/10 rounded-xl px-4 sm:px-5 py-2 sm:py-3 text-center w-[150px] sm:w-[170px] group-hover:bg-white/10 transition-all duration-300">
        <p className="text-white font-bold text-[10px] sm:text-xs md:text-sm leading-tight">
          {membro.graduacao} {membro.nome}
        </p>
        <p className="text-gold-400 text-[8px] sm:text-[10px] md:text-xs uppercase font-medium">
          {membro.cargo}
        </p>
      </div>
    </div>
  )

  // Componente Diretor REDONDO
  const DiretorRedondo = ({ diretor }) => (
    <div className="flex flex-col items-center w-full group">
      <div className="relative w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 mb-2 sm:mb-3 transform group-hover:scale-105 transition-transform duration-300">
        <div className="absolute inset-0 bg-gradient-to-br from-gold-400 via-gold-500 to-gold-600 rounded-full p-[3px] shadow-lg shadow-gold-500/20">
          <div className="w-full h-full rounded-full overflow-hidden bg-military-700">
            <img 
              src={`/diretoria/${diretor.nome.toLowerCase().replace(/ /g, '').replace('.', '')}.png`}
              alt={diretor.nome}
              className="w-full h-full object-cover"
              onError={(e) => {
                e.target.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(diretor.nome)}&background=1E293B&color=fff&size=150`
              }}
            />
          </div>
        </div>
      </div>
      <p className="text-white font-bold text-[9px] sm:text-[11px] md:text-xs text-center leading-tight">
        {diretor.graduacao} {diretor.nome}
      </p>
      <p className="text-gold-400/80 text-[7px] sm:text-[9px] md:text-[10px] uppercase text-center leading-tight font-medium">
        {diretor.cargo}
      </p>
    </div>
  )

  return (
    <div className="min-h-screen bg-military-900">
      
      {/* Hero Header */}
      <section className="relative pt-36 sm:pt-40 pb-12 sm:pb-16 px-4 overflow-hidden">
        {/* Background gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-royal-500/20 via-transparent to-transparent"></div>
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-gold-500/10 rounded-full blur-3xl"></div>
        
        <div className="relative text-center max-w-4xl mx-auto">
          <p className="text-gold-400 font-bold text-sm sm:text-base uppercase tracking-[0.3em] mb-3">
            Gestão 2026 - 2029
          </p>
          <h1 className="font-display font-black text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-white tracking-tight mb-4">
            DIRETORIA <span className="text-gradient-gold">ASSEGO</span>
          </h1>
          <p className="text-gray-400 text-base sm:text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
            A força da nossa gestão está na união, no comprometimento 
            e na dedicação de cada diretor.
          </p>
        </div>
      </section>

      {/* Conselho Administrativo 2026 + Presidente */}
      <section className="py-8 sm:py-12 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          
          {/* Título Conselho Administrativo */}
          <div className="mb-10 sm:mb-14">
            <div className="inline-flex items-center gap-3">
              <div className="w-1 h-12 sm:h-16 bg-gradient-to-b from-gold-400 to-gold-600 rounded-full"></div>
              <div>
                <p className="text-gold-400 font-bold text-xs sm:text-sm uppercase tracking-wider">Conselho</p>
                <h2 className="font-display font-black text-2xl sm:text-3xl md:text-4xl text-white">
                  ADMINISTRATIVO <span className="text-gold-400">2025</span>
                </h2>
              </div>
            </div>
          </div>

          {/* Grid Principal com Presidente ao Centro */}
          <div className="flex flex-col xl:flex-row items-center justify-center gap-8 sm:gap-10 xl:gap-16">
            
            {/* Coluna Esquerda */}
            <div className="flex flex-col gap-5 sm:gap-6">
              {conselhoAdminEsquerda.map((membro, index) => (
                <MembroEsquerdaHex key={index} membro={membro} />
              ))}
            </div>

            {/* Presidente no Centro */}
            <div className="flex flex-col items-center order-first xl:order-none mb-8 xl:mb-0">
              
              {/* Logo do Presidente */}
              <div className="mb-6 text-center">
                <img 
                  src="/diretoria/logo-presidente.png"
                  alt="Logo Presidente Sérgio"
                  className="h-16 sm:h-20 md:h-24 object-contain mx-auto"
                  onError={(e) => {
                    e.target.style.display = 'none'
                  }}
                />
              </div>

              {/* Foto do Presidente */}
              <div className="relative">
                {/* Glow effect */}
                <div className="absolute inset-0 bg-gold-500/20 rounded-full blur-3xl scale-75"></div>
                <img 
                  src="/diretoria/presidente.png"
                  alt="ST PM Sérgio - Presidente"
                  className="relative h-64 sm:h-80 md:h-96 lg:h-[450px] object-contain drop-shadow-2xl"
                  onError={(e) => {
                    e.target.src = '/fotos/presidente-sergio.jpg'
                  }}
                />
              </div>
              
              {/* Label do Presidente - Alinhado à direita */}
              <div className="glass bg-white/5 border-2 border-gold-400 rounded-2xl px-8 sm:px-10 py-3 sm:py-4 text-center -mt-12 sm:-mt-14 md:-mt-16 ml-12 sm:ml-16 md:ml-20 relative z-10 shadow-xl shadow-gold-500/10">
                <p className="text-white font-display font-bold text-lg sm:text-xl md:text-2xl whitespace-nowrap">
                  ST PM SÉRGIO
                </p>
                <p className="text-gold-400 text-sm sm:text-base uppercase tracking-wider font-semibold">
                  Presidente
                </p>
              </div>
            </div>

            {/* Coluna Direita */}
            <div className="flex flex-col gap-5 sm:gap-6">
              {conselhoAdminDireita.map((membro, index) => (
                <MembroDireitaHex key={index} membro={membro} />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Conselho Deliberativo Fiscal 2026 */}
      <section className="py-8 sm:py-12 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          
          {/* Título Conselho Fiscal */}
          <div className="mb-10 sm:mb-14">
            <div className="inline-flex items-center gap-3">
              <div className="w-1 h-16 sm:h-20 bg-gradient-to-b from-gold-400 to-gold-600 rounded-full"></div>
              <div>
                <p className="text-gold-400 font-bold text-xs sm:text-sm uppercase tracking-wider">Conselho</p>
                <p className="font-display font-black text-xl sm:text-2xl md:text-3xl text-white">DELIBERATIVO</p>
                <h2 className="font-display font-black text-2xl sm:text-3xl md:text-4xl text-white">
                  FISCAL <span className="text-gold-400">2026</span>
                </h2>
              </div>
            </div>
          </div>

          {/* Titulares - 5 por linha */}
          <div className="mb-8">
            <p className="text-white/60 text-sm uppercase tracking-wider mb-6 text-center">Titulares</p>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 sm:gap-6 justify-items-center">
              {conselhoFiscalTitulares.map((membro, index) => (
                <MembroCentroHex key={index} membro={membro} />
              ))}
            </div>
          </div>

          {/* Suplentes - 5 por linha */}
          <div>
            <p className="text-white/60 text-sm uppercase tracking-wider mb-6 text-center">Suplentes</p>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 sm:gap-6 justify-items-center">
              {conselhoFiscalSuplentes.map((membro, index) => (
                <MembroCentroHex key={index} membro={membro} />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Demais Diretores */}
      <section className="py-12 sm:py-16 px-4 sm:px-6 bg-military-800/50">
        <div className="max-w-6xl mx-auto">
          
          {/* Título */}
          <div className="text-center mb-10 sm:mb-14">
            <p className="text-gold-400 font-bold text-xs sm:text-sm uppercase tracking-wider mb-2">Equipe</p>
            <h2 className="font-display font-black text-2xl sm:text-3xl md:text-4xl text-white">
              DIRETORES
            </h2>
          </div>
          
          {/* Grid 6x6 */}
          <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-5 sm:gap-6 md:gap-8">
            {todosDiretores.map((diretor, index) => (
              <DiretorRedondo key={index} diretor={diretor} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 sm:py-20 relative overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 bg-gradient-to-r from-gold-500 via-gold-400 to-gold-500"></div>
        <div className="absolute inset-0 bg-[url('/pattern.png')] opacity-10"></div>
        
        <div className="relative container mx-auto px-6 text-center">
          <h2 className="font-display font-black text-2xl sm:text-3xl md:text-4xl text-military-900 mb-4">
            Faça Parte da Nossa Família
          </h2>
          <p className="text-military-900/70 mb-8 max-w-xl mx-auto text-sm sm:text-base">
            Junte-se a milhares de policiais e bombeiros militares que confiam na ASSEGO.
          </p>
          <a 
            href="https://assego.net.br/associe/index.php"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-military-900 text-white px-8 sm:px-10 py-4 sm:py-5 rounded-full font-bold text-base sm:text-lg hover:bg-military-800 transform hover:-translate-y-1 transition-all duration-300 shadow-xl"
          >
            QUERO ME ASSOCIAR
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>
      </section>
    </div>
  )
}

export default Diretoria