/**
 * ========================================
 * Navbar - Barra de Navegação Responsiva
 * ========================================
 * 
 * Compacta automaticamente ao fazer scroll
 */

import { useState, useEffect } from 'react'
import { List, X, CaretDown } from '@phosphor-icons/react'

function Navbar() {
  // Estado para controlar menu mobile
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  // Estado para efeito de scroll
  const [isScrolled, setIsScrolled] = useState(false)
  // Estado para controlar qual dropdown está aberto
  const [activeDropdown, setActiveDropdown] = useState(null)
  // Estado para controlar a rádio
  const [isRadioOpen, setIsRadioOpen] = useState(false)

  // Detecta scroll para mudar estilo da navbar
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Abrir player da rádio em popup
  const openRadioPlayer = () => {
    // Abre o player em uma janela popup pequena
    const width = 400
    const height = 600
    const left = window.screen.width - width - 20
    const top = 100
    
    window.open(
      'https://player.hdradios.net/player-app-multi-plataforma/7272?app-multi=1764095784',
      'RadioAssego',
      `width=${width},height=${height},left=${left},top=${top},resizable=yes,scrollbars=no,status=no,menubar=no,toolbar=no`
    )
    setIsRadioOpen(true)
  }

  // Estrutura do menu com dropdowns
  const menuItems = [
    {
      label: 'SOBRE',
      hasDropdown: true,
      items: [
        { label: 'Nossa História', href: '#historia' },
        { label: 'Diretoria', href: '#diretoria' },
        { label: 'Estrutura Organizacional', href: '#estrutura' },
        { label: 'Transparência', href: '#transparencia' },
      ]
    },
    {
      label: 'ASSOCIADO',
      hasDropdown: true,
      items: [
        { label: 'Benefícios', href: '#beneficios' },
        { label: 'Serviços', href: '#servicos' },
        { label: 'Parcerias', href: '#convenios' },
        { label: 'Ouvidoria', href: 'https://ouvidoria.assego.com.br/', external: true },
      ]
    },
    {
      label: 'CLUBE',
      hasDropdown: true,
      items: [
        { label: 'Sede Goiânia', href: '#clube' },
        { label: 'Hotel ASSEGO Aruanã', href: '#hotel-aruana' },
        { label: 'Pousada ASSEGO Aruanã', href: '#pousada-aruana' },
        { label: 'Esportes', href: '#atividades' },
        { label: 'Reservas', href: '#reservas' },
      ]
    },
    {
      label: 'JURÍDICO',
      href: '#juridico',
      hasDropdown: false
    },
  ]

  return (
    <header 
      className={`fixed w-full z-[100] transition-all duration-500 glass-nav ${
        isScrolled ? 'py-2 bg-[#050A18]/80 shadow-2xl' : 'py-4 md:py-6 bg-[#050A18]/20'
      }`}
    >
      <div className="container mx-auto px-6">
        <div className="flex justify-between items-center">
          
          {/* Logo */}
          <a href="#" className="flex items-center gap-3 md:gap-4 group">
            {/* Container da logo com tamanho responsivo */}
            <div className={`relative transition-all duration-500 ${
              isScrolled 
                ? 'w-12 h-12 md:w-14 md:h-14' 
                : 'w-16 h-16 md:w-24 md:h-24'
            }`}>
              <div className="absolute inset-0 bg-gold-500 rounded-lg blur-lg opacity-30 group-hover:opacity-60 transition duration-500"></div>
              <img 
                src="/logo.png" 
                alt="ASSEGO" 
                className="relative w-full h-full object-contain drop-shadow-2xl group-hover:scale-110 transition duration-300 mix-blend-lighten" 
              />
            </div>
          </a>

          {/* Desktop Menu */}
          <nav className="hidden lg:flex items-center space-x-6 xl:space-x-8">
            
            {/* Player Rádio Voz - Lado Esquerdo */}
            <button
              onClick={openRadioPlayer}
              className={`flex items-center gap-2 bg-white/5 hover:bg-white/10 border border-white/10 hover:border-gold-500/50 rounded-full transition-all duration-300 group ${
                isScrolled ? 'px-2 py-1' : 'px-3 py-1.5'
              }`}
              title="Ouvir Rádio Voz ASSEGO"
            >
              {/* Ícone da Rádio */}
              <img 
                src="/iconeradio.png" 
                alt="Rádio Voz" 
                className={`object-contain transition-all duration-300 group-hover:scale-110 ${
                  isScrolled ? 'w-6 h-6' : 'w-8 h-8'
                }`}
              />
              
              <span className={`text-gray-300 group-hover:text-gold-400 font-medium hidden xl:block transition-colors ${
                isScrolled ? 'text-[10px]' : 'text-xs'
              }`}>
                Rádio Voz
              </span>
            </button>

            {menuItems.map((item, index) => (
              <div 
                key={index}
                className="relative group"
                onMouseEnter={() => item.hasDropdown && setActiveDropdown(index)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                {item.hasDropdown ? (
                  <>
                    <button 
                      className={`font-medium text-gray-300 hover:text-white transition duration-300 flex items-center gap-1 ${
                        isScrolled ? 'text-xs' : 'text-sm'
                      }`}
                    >
                      {item.label}
                      <CaretDown 
                        size={14} 
                        className={`transition-transform duration-300 ${
                          activeDropdown === index ? 'rotate-180' : ''
                        }`}
                      />
                    </button>
                    
                    {/* Dropdown */}
                    <div className={`absolute top-full left-0 mt-2 w-56 bg-[#0F172A]/80 backdrop-blur-2xl border border-white/20 rounded-xl shadow-2xl overflow-hidden transition-all duration-300 z-[100] ${
                      activeDropdown === index 
                        ? 'opacity-100 visible translate-y-0' 
                        : 'opacity-0 invisible -translate-y-2 pointer-events-none'
                    }`}>
                      {item.items.map((subItem, subIndex) => (
                        <a
                          key={subIndex}
                          href={subItem.href}
                          target={subItem.external ? '_blank' : undefined}
                          rel={subItem.external ? 'noopener noreferrer' : undefined}
                          className="block px-5 py-3 text-sm text-gray-200 hover:text-white hover:bg-white/10 transition-all duration-200 border-b border-white/10 last:border-0 font-medium"
                        >
                          {subItem.label}
                          {subItem.external && <span className="ml-1 text-xs">↗</span>}
                        </a>
                      ))}
                    </div>
                  </>
                ) : (
                  <a 
                    href={item.href}
                    target={item.external ? '_blank' : undefined}
                    rel={item.external ? 'noopener noreferrer' : undefined}
                    className={`font-medium text-gray-300 hover:text-white transition duration-300 ${
                      isScrolled ? 'text-xs' : 'text-sm'
                    }`}
                  >
                    {item.label}
                  </a>
                )}
              </div>
            ))}
            
            {/* Botão Quero Me Associar */}
            <a 
              href="#filiar" 
              className={`group relative overflow-hidden rounded-full bg-gold-500 hover:bg-gold-600 transition-all duration-300 ${
                isScrolled ? 'px-4 py-2' : 'px-6 py-2.5'
              }`}
            >
              <span className={`relative font-bold text-black flex items-center gap-2 transition-all duration-300 ${
                isScrolled ? 'text-xs' : 'text-sm'
              }`}>
                QUERO ME ASSOCIAR
              </span>
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden text-white text-3xl hover:text-gold-400 transition"
            aria-label="Menu"
          >
            {isMenuOpen ? <X /> : <List />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div 
        className={`lg:hidden bg-[#050A18]/95 backdrop-blur-xl border-t border-white/10 absolute w-full z-[110] transition-all duration-300 ${
          isMenuOpen ? 'opacity-100 visible max-h-screen' : 'opacity-0 invisible max-h-0'
        }`}
      >
        <div className="flex flex-col p-6 space-y-4">
          {/* Player Rádio Mobile */}
          <button
            onClick={openRadioPlayer}
            className="flex items-center justify-center gap-3 bg-white/5 border border-white/10 rounded-full px-4 py-3 mb-2 hover:bg-white/10 transition"
          >
            <img 
              src="/iconeradio.png" 
              alt="Rádio Voz" 
              className="w-10 h-10 object-contain"
            />
            <div className="flex flex-col text-left">
              <span className="text-white font-bold text-sm">Rádio Voz ASSEGO</span>
              <span className="text-gray-400 text-xs">Clique para ouvir ao vivo</span>
            </div>
          </button>

          {menuItems.map((item, index) => (
            <div key={index}>
              {item.hasDropdown ? (
                <>
                  <button
                    onClick={() => setActiveDropdown(activeDropdown === index ? null : index)}
                    className="w-full text-left text-gray-300 hover:text-gold-400 text-lg font-display font-bold flex items-center justify-between"
                  >
                    {item.label}
                    <CaretDown 
                      size={16} 
                      className={`transition-transform duration-300 ${
                        activeDropdown === index ? 'rotate-180' : ''
                      }`}
                    />
                  </button>
                  {/* Submenu Mobile */}
                  <div className={`ml-4 mt-2 space-y-2 overflow-hidden transition-all duration-300 ${
                    activeDropdown === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                  }`}>
                    {item.items.map((subItem, subIndex) => (
                      <a
                        key={subIndex}
                        href={subItem.href}
                        target={subItem.external ? '_blank' : undefined}
                        rel={subItem.external ? 'noopener noreferrer' : undefined}
                        className="block text-gray-400 hover:text-gold-400 text-sm py-2"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        {subItem.label}
                        {subItem.external && <span className="ml-1 text-xs">↗</span>}
                      </a>
                    ))}
                  </div>
                </>
              ) : (
                <a 
                  href={item.href}
                  target={item.external ? '_blank' : undefined}
                  rel={item.external ? 'noopener noreferrer' : undefined}
                  className="text-gray-300 hover:text-gold-400 text-lg font-display font-bold"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </a>
              )}
            </div>
          ))}
          
          <a 
            href="#filiar" 
            className="text-black bg-gold-500 hover:bg-gold-600 rounded-full py-3 mt-4 font-bold transition text-center"
            onClick={() => setIsMenuOpen(false)}
          >
            QUERO ME ASSOCIAR
          </a>
        </div>
      </div>
    </header>
  )
}

export default Navbar