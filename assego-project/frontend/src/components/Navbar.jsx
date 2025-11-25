/**
 * ========================================
 * Navbar - Barra de Navegação
 * ========================================
 */

import { useState, useEffect } from 'react'
import { List, X, UserCircle } from '@phosphor-icons/react'

function Navbar() {
  // Estado para controlar menu mobile
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  // Estado para efeito de scroll
  const [isScrolled, setIsScrolled] = useState(false)

  // Detecta scroll para mudar estilo da navbar
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Links de navegação
  const navLinks = [
    { href: '#missao', label: 'MISSÃO' },
    { href: '#clube', label: 'CLUBE' },
    { href: '#atividades', label: 'ESPORTES' },
    { href: '#convenios', label: 'PARCEIROS' },
  ]

  return (
    <header 
      className={`fixed w-full z-50 transition-all duration-500 glass-nav ${
        isScrolled ? 'py-2 bg-[#050A18]/90' : 'py-4'
      }`}
    >
      <div className="container mx-auto px-6">
        <div className="flex justify-between items-center">
          
          {/* Logo */}
          <a href="#" className="flex items-center gap-4 group">
            <div className="relative w-24 h-24 md:w-32 md:h-30">
              <div className="absolute inset-0 bg-gold-500 rounded-lg blur-lg opacity-30 group-hover:opacity-60 transition duration-500"></div>
              <img 
                src="/logo.png" 
                alt="ASSEGO" 
                className="relative w-full h-full object-contain drop-shadow-2xl group-hover:scale-110 transition duration-300 mix-blend-lighten" 
              />
            </div>
          </a>

          {/* Desktop Menu */}
          <nav className="hidden md:flex items-center space-x-10">
            {navLinks.map((link) => (
              <a 
                key={link.href}
                href={link.href} 
                className="text-sm font-medium text-gray-300 hover:text-white transition hover:tracking-widest duration-300"
              >
                {link.label}
              </a>
            ))}
            
            {/* Botão Área do Sócio */}
            <a 
              href="#" 
              className="group relative px-6 py-2.5 overflow-hidden rounded-full bg-white/5 border border-white/10 hover:border-gold-500/50 transition-all duration-300"
            >
              <div className="absolute inset-0 w-full h-full bg-gold-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <span className="relative text-sm font-bold text-gold-400 group-hover:text-gold-300 flex items-center gap-2">
                <UserCircle size={20} /> ÁREA DO SÓCIO
              </span>
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-white text-3xl hover:text-gold-400 transition"
            aria-label="Menu"
          >
            {isMenuOpen ? <X /> : <List />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div 
        className={`md:hidden bg-[#050A18]/95 backdrop-blur-xl border-t border-white/10 absolute w-full z-50 transition-all duration-300 ${
          isMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
        }`}
      >
        <div className="flex flex-col p-8 space-y-6 text-center">
          {navLinks.map((link) => (
            <a 
              key={link.href}
              href={link.href} 
              className="text-gray-300 hover:text-gold-400 text-xl font-display font-bold"
              onClick={() => setIsMenuOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <a 
            href="#" 
            className="text-gold-400 border border-gold-400/30 rounded-full py-3 mt-4 font-bold"
          >
            ÁREA DO SÓCIO
          </a>
        </div>
      </div>
    </header>
  )
}

export default Navbar