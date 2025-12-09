/**
 * ========================================
 * SocialButtons - Botões Flutuantes Lateral
 * ========================================
 * 
 * Na página inicial: expandido no topo, compacta ao scroll, expande ao hover
 * Nas outras páginas: sempre compactado, expande ao hover
 */

import { useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { InstagramLogo, YoutubeLogo } from '@phosphor-icons/react'

// Ícone customizado do WhatsApp (contorno + telefone preenchido)
const WhatsAppIcon = ({ size = 32 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path 
      d="M12 2C6.48 2 2 6.48 2 12C2 13.85 2.5 15.55 3.35 17L2 22L7.15 20.7C8.55 21.45 10.22 21.9 12 21.9C17.52 21.9 22 17.42 22 11.9C22 6.48 17.52 2 12 2ZM12 20C10.35 20 8.8 19.55 7.45 18.8L7.15 18.6L4.3 19.35L5.1 16.55L4.85 16.2C4 14.8 3.5 13.15 3.5 11.4C3.5 7.25 7.25 3.5 12 3.5C16.75 3.5 20.5 7.25 20.5 12C20.5 16.75 16.75 20 12 20Z" 
      fill="currentColor"
    />
    <path 
      d="M16.5 14.2C16.25 14.1 15.1 13.5 14.9 13.45C14.7 13.35 14.55 13.35 14.4 13.55C14.25 13.8 13.8 14.35 13.65 14.5C13.5 14.65 13.4 14.7 13.15 14.55C12.9 14.45 12.15 14.2 11.25 13.4C10.55 12.75 10.1 12 9.95 11.75C9.8 11.5 9.95 11.35 10.05 11.25C10.15 11.15 10.3 11 10.4 10.85C10.5 10.7 10.55 10.6 10.65 10.45C10.75 10.3 10.7 10.15 10.65 10.05C10.6 9.95 10.15 8.8 9.95 8.3C9.75 7.85 9.55 7.9 9.4 7.9C9.25 7.9 9.1 7.9 8.95 7.9C8.8 7.9 8.55 7.95 8.35 8.2C8.15 8.45 7.5 9.05 7.5 10.2C7.5 11.35 8.35 12.45 8.5 12.6C8.6 12.75 10.1 15.1 12.45 16.05C14.8 17 14.8 16.7 15.25 16.65C15.7 16.6 16.65 16.05 16.85 15.5C17.05 14.95 17.05 14.5 17 14.4C16.95 14.3 16.75 14.25 16.5 14.2Z" 
      fill="currentColor"
    />
  </svg>
)

function SocialButtons() {
  const location = useLocation()
  const isHomePage = location.pathname === '/'
  const [isHovered, setIsHovered] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  
  // Detecta scroll (só importa na home)
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 200)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Redes sociais (WhatsApp primeiro = fica embaixo com flex-col-reverse)
  const socialLinks = [
    {
      id: 'whatsapp',
      icon: null, // Usa SVG customizado
      color: 'from-green-500 to-green-600',
      label: 'WhatsApp',
      url: 'https://api.whatsapp.com/send?phone=5562992469099&text=Olá!%20Gostaria%20de%20mais%20informações%20sobre%20a%20ASSEGO.'
    },
    {
      id: 'youtube',
      icon: YoutubeLogo,
      color: 'from-red-600 to-red-700',
      label: 'YouTube',
      url: 'https://www.youtube.com/@assegooficial1707'
    },
    {
      id: 'instagram-presidente',
      icon: InstagramLogo,
      color: 'from-purple-600 via-pink-600 to-orange-600',
      label: 'Presidente',
      url: 'https://www.instagram.com/subtenentesergio/'
    },
    {
      id: 'instagram-assego',
      icon: InstagramLogo,
      color: 'from-purple-500 via-pink-500 to-orange-500',
      label: 'ASSEGO',
      url: 'https://instagram.com/assego/'
    }
  ]

  // Lógica de visibilidade:
  // - Na home: mostra tudo se não scrollou OU se está com hover
  // - Nas outras páginas: só mostra tudo se está com hover
  const shouldShowAll = isHomePage 
    ? (!isScrolled || isHovered)  // Home: expandido no topo, compacta ao scroll, expande ao hover
    : isHovered                    // Outras páginas: só expande ao hover

  // Tamanho dos botões baseado no estado
  const isCompact = isHomePage ? isScrolled : true
  const buttonSize = isCompact && !isHovered ? 'w-14 h-14' : 'w-16 h-16'
  const iconSize = isCompact && !isHovered ? 32 : 36
  const gap = isCompact && !isHovered ? 'gap-2' : 'gap-3'

  return (
    <div 
      className={`fixed right-6 md:right-8 bottom-4 z-50 flex flex-col-reverse ${gap} transition-all duration-300`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {socialLinks.map((social, index) => {
        const Icon = social.icon
        // WhatsApp é o primeiro (index 0), deve estar sempre visível
        const isWhatsApp = social.id === 'whatsapp'
        const isVisible = shouldShowAll || isWhatsApp
        
        return (
          <div
            key={social.id}
            className={`transition-all duration-500 ${
              isVisible 
                ? 'opacity-100 translate-y-0 scale-100' 
                : 'opacity-0 translate-y-12 scale-75 pointer-events-none'
            }`}
            style={{ 
              transitionDelay: isVisible ? `${index * 50}ms` : '0ms',
              zIndex: isWhatsApp ? 10 : index
            }}
          >
            <a
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative block"
            >
              {/* Tooltip */}
              <span 
                className={`absolute right-20 top-1/2 -translate-y-1/2 bg-white text-gray-900 text-xs font-bold px-3 py-2 rounded-lg shadow-xl whitespace-nowrap transition-all duration-300 ${
                  isHovered ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-2 pointer-events-none'
                }`}
              >
                {social.label}
              </span>
              
              {/* Botão */}
              <div className={`${buttonSize} bg-gradient-to-br ${social.color} rounded-full flex items-center justify-center text-white shadow-lg hover:shadow-2xl hover:scale-110 transition-all duration-300 cursor-pointer`}>
                {isWhatsApp ? (
                  <WhatsAppIcon size={iconSize} />
                ) : (
                  <Icon size={iconSize} weight={social.id === 'youtube' ? 'fill' : 'regular'} />
                )}
              </div>
            </a>
          </div>
        )
      })}
    </div>
  )
}

export default SocialButtons