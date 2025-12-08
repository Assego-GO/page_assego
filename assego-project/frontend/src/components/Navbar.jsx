/**
 * ========================================
 * Navbar - Barra de Navegação Responsiva
 * ========================================
 * 
 * Compacta automaticamente ao fazer scroll
 */

import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { List, X, CaretDown } from '@phosphor-icons/react'
import RadioPlayer from './RadioPlayer'
import RadioPlayerMobile from './RadioPlayerMobile'

function Navbar() {
  // Estado para controlar menu mobile
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  // Estado para efeito de scroll
  const [isScrolled, setIsScrolled] = useState(false)
  // Estado para controlar qual dropdown está aberto
  const [activeDropdown, setActiveDropdown] = useState(null)
  
  // Verificar se está na home
  const location = useLocation()
  const isHomePage = location.pathname === '/'

  // Detecta scroll para mudar estilo da navbar
  // Em outras páginas, começa compacta
  useEffect(() => {
    const handleScroll = () => {
      // Se não for home, sempre compacta
      if (!isHomePage) {
        setIsScrolled(true)
      } else {
        setIsScrolled(window.scrollY > 100)
      }
    }

    // Executar imediatamente
    handleScroll()

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [isHomePage, location.pathname])

  // Estrutura do menu com dropdowns
  const menuItems = [
    {
      label: 'INÍCIO',
      href: '/',
      hasDropdown: false,
      isRoute: true
    },
    {
      label: 'SOBRE',
      hasDropdown: true,
      items: [
        { label: 'Nossa História', href: '/historia', isRoute: true },
        { label: 'Diretoria', href: '/diretoria', isRoute: true },
        { label: 'Conselho Deliberativo Fiscal', href: '/conselho-fiscal', isRoute: true },
      ]
    },
    {
      label: 'ASSOCIADO',
      hasDropdown: true,
      items: [
        { label: 'Benefícios', href: '/beneficios', isRoute: true },
        { label: 'Serviços', href: '/servicos', isRoute: true },
        { label: 'Parcerias', href: '/parcerias', isRoute: true },
        { label: 'Ouvidoria', href: 'https://ouvidoria.assego.com.br/', external: true },
        { label: 'Jurídico', href: '/juridico', isRoute: true },
      ]
    },
    {
      label: 'CLUBE',
      hasDropdown: true,
      items: [
        { label: 'Parque Aquático', href: '/parque-aquatico', isRoute: true },
        { label: 'Hotel ASSEGO', href: '/hotel-assego', isRoute: true },
        { label: 'Pousada Aruanã', href: '/pousada-aruana', isRoute: true },
        { label: 'Espaço ASSEGO', href: '/espaco-assego', isRoute: true },
      ]
    },
    {
      label: 'COMUNICAÇÃO',
      hasDropdown: true,
      items: [
        { label: 'Podcast ASSEGO', href: '/podcast', isRoute: true },
        { label: 'ASSEGO WebTV', href: 'https://www.youtube.com/@assegooficial1707', external: true },
        { label: 'Revista ASSEGO', href: '/revista.pdf', external: true },
        { label: 'Informativo', href: '/informativo', isRoute: true },
        { label: 'Rádio Voz ASSEGO', href: 'https://player.hdradios.net/player-app-multi-plataforma/7272?app-multi=1764095784', external: true },
      ]
    },
    {
      label: 'CONTATO',
      href: '/contato',
      hasDropdown: false,
      isRoute: true
    },
  ]

  return (
    <>
    {/* Ticker de Notícias - Topo */}
    <div className="fixed top-0 left-0 w-full bg-[#000e72]/40 backdrop-blur-sm overflow-hidden z-[110]">
      <div className="flex items-center h-8">
        <div className="animate-marquee whitespace-nowrap flex items-center">
          <span className="text-white text-xs font-medium mx-8 flex items-center gap-2">
            <span className="w-2 h-2 bg-gold-400 rounded-full animate-pulse"></span>
            Toda Quarta-Feira às 19 horas tem podcast ao vivo da ASSEGO com o presidente Subtenente Sérgio
          </span>
          <span className="text-white text-xs font-medium mx-8 flex items-center gap-2">
            <span className="w-2 h-2 bg-gold-400 rounded-full animate-pulse"></span>
            Toda Quarta-Feira às 19 horas tem podcast ao vivo da ASSEGO com o presidente Subtenente Sérgio
          </span>
          <span className="text-white text-xs font-medium mx-8 flex items-center gap-2">
            <span className="w-2 h-2 bg-gold-400 rounded-full animate-pulse"></span>
            Toda Quarta-Feira às 19 horas tem podcast ao vivo da ASSEGO com o presidente Subtenente Sérgio
          </span>
        </div>
      </div>
    </div>

    {/* Navbar Principal */}
    <div className="fixed top-8 left-0 w-full z-[100]">
      <header 
        className="w-full transition-all duration-500 glass-nav py-2 bg-[#050A18]/80 shadow-2xl"
      >
        <div className="container mx-auto px-6">
          <div className="flex justify-between items-center gap-4">
            
            {/* Logo - Link para Home */}
            <Link to="/" className="flex items-center gap-3 md:gap-4 group flex-shrink-0">
              {/* Container da logo - tamanho fixo compacto */}
              <div className="relative w-16 h-16 md:w-20 md:h-20">
                <img 
                  src="/logo.png" 
                  alt="ASSEGO" 
                  className="w-full h-full object-contain group-hover:scale-105 transition duration-300" 
                />
              </div>
            </Link>

            {/* Desktop Menu */}
            <nav className="hidden lg:flex items-center gap-4">

              {menuItems.map((item, index) => (
                <div 
                  key={index}
                  className="relative flex items-center"
                  onMouseEnter={() => item.hasDropdown && setActiveDropdown(index)}
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  {item.hasDropdown ? (
                    <>
                      <button 
                        className="font-semibold text-gray-300 hover:text-white transition duration-300 flex items-center gap-1 text-sm h-10"
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
                      <div className={`absolute top-full left-0 pt-2 w-56 transition-all duration-300 z-[200] ${
                        activeDropdown === index 
                          ? 'opacity-100 visible translate-y-0' 
                          : 'opacity-0 invisible -translate-y-2 pointer-events-none'
                      }`}>
                        <div className="bg-[#0F172A] border border-white/20 rounded-xl shadow-2xl overflow-hidden">
                          {item.items.map((subItem, subIndex) => (
                            subItem.isRoute ? (
                              <Link
                                key={subIndex}
                                to={subItem.href}
                                className="block px-5 py-3 text-sm text-gray-200 hover:text-white hover:bg-[#1e293b] transition-all duration-200 border-b border-white/10 last:border-0 font-medium"
                                onClick={() => setActiveDropdown(null)}
                              >
                                {subItem.label}
                              </Link>
                            ) : (
                            <a
                                key={subIndex}
                                href={subItem.href}
                                target={subItem.external ? '_blank' : undefined}
                                rel={subItem.external ? 'noopener noreferrer' : undefined}
                                className="block px-5 py-3 text-sm text-gray-200 hover:text-white hover:bg-[#1e293b] transition-all duration-200 border-b border-white/10 last:border-0 font-medium"
                                onClick={() => setActiveDropdown(null)}
                              >
                                {subItem.label}
                                {subItem.external && <span className="ml-1 text-xs">↗</span>}
                              </a>
                            )
                          ))}
                        </div>
                      </div>
                    </>
                  ) : item.isRoute ? (
                    <Link 
                      to={item.href}
                      className="font-semibold text-gray-300 hover:text-white transition duration-300 text-sm h-10 flex items-center"
                    >
                      {item.label}
                    </Link>
                  ) : (
                    <a 
                      href={item.href}
                      target={item.external ? '_blank' : undefined}
                      rel={item.external ? 'noopener noreferrer' : undefined}
                      className="font-semibold text-gray-300 hover:text-white transition duration-300 text-sm h-10 flex items-center"
                    >
                      {item.label}
                    </a>
                  )}
                </div>
              ))}
              
              {/* Botão Quero Me Associar */}
              <a 
                href="https://assego.net.br/associe/index.php" 
                target="_blank"
                rel="noopener noreferrer"
                className="group relative overflow-hidden rounded-full bg-gold-500 hover:bg-gold-600 transition-all duration-300 px-4 py-2"
              >
                <span className="relative font-bold text-black flex items-center gap-2 transition-all duration-300 text-sm">
                  QUERO ME ASSOCIAR
                </span>
              </a>

              {/* Player Rádio Voz */}
              <RadioPlayer />
            </nav>

            {/* Mobile: Menu Button */}
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
                        subItem.isRoute ? (
                          <Link
                            key={subIndex}
                            to={subItem.href}
                            className="block text-gray-400 hover:text-gold-400 text-sm py-2"
                            onClick={() => setIsMenuOpen(false)}
                          >
                            {subItem.label}
                          </Link>
                        ) : (
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
                        )
                      ))}
                    </div>
                  </>
                ) : item.isRoute ? (
                  <Link 
                    to={item.href}
                    className="text-gray-300 hover:text-gold-400 text-lg font-display font-bold"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.label}
                  </Link>
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
              href="https://assego.net.br/associe/index.php" 
              target="_blank"
              rel="noopener noreferrer"
              className="text-black bg-gold-500 hover:bg-gold-600 rounded-full py-3 mt-4 font-bold transition text-center"
              onClick={() => setIsMenuOpen(false)}
            >
              QUERO ME ASSOCIAR
            </a>

            {/* Player Rádio no Menu Mobile */}
            <RadioPlayerMobile />
          </div>
        </div>
      </header>
    </div>
    </>
  )
}

export default Navbar