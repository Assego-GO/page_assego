/**
 * ========================================
 * SocialButtons - Botões Flutuantes Lateral
 * ========================================
 * 
 * Compacta ao fazer scroll, expande ao hover
 */

import { useState, useEffect } from 'react'
import { WhatsappLogo, InstagramLogo, YoutubeLogo } from '@phosphor-icons/react'

function SocialButtons() {
  const [isExpanded, setIsExpanded] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  
  // Detecta scroll para compactar
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 200)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])
  
  // Redes sociais
  const socialLinks = [
    {
      id: 'instagram-assego',
      icon: InstagramLogo,
      color: 'from-purple-500 via-pink-500 to-orange-500',
      label: 'ASSEGO',
      url: 'https://instagram.com/assego/'
    },
    {
      id: 'instagram-presidente',
      icon: InstagramLogo,
      color: 'from-purple-600 via-pink-600 to-orange-600',
      label: 'Presidente',
      url: 'https://www.instagram.com/subtenentesergio/'
    },
    {
      id: 'youtube',
      icon: YoutubeLogo,
      color: 'from-red-600 to-red-700',
      label: 'YouTube',
      url: 'https://www.youtube.com/@assegooficial1707'
    },
    {
      id: 'whatsapp',
      icon: WhatsappLogo,
      color: 'from-green-500 to-green-600',
      label: 'WhatsApp',
      url: 'https://api.whatsapp.com/send?phone=5562992469099&text=Olá!%20Gostaria%20de%20mais%20informações%20sobre%20a%20ASSEGO.'
    }
  ]

  // Tamanho dos botões baseado no scroll
  const buttonSize = isScrolled ? 'w-12 h-12' : 'w-14 h-14'
  const iconSize = isScrolled ? 24 : 28
  const gap = isScrolled ? 'gap-2' : 'gap-3'

  return (
    <div 
      className={`fixed right-6 md:right-8 bottom-8 z-50 flex flex-col ${gap} transition-all duration-300`}
      onMouseEnter={() => setIsExpanded(true)}
      onMouseLeave={() => setIsExpanded(false)}
    >
      {socialLinks.map((social, index) => {
        const Icon = social.icon
        const isVisible = !isScrolled || isExpanded || index === socialLinks.length - 1 // WhatsApp sempre visível
        
        return (
          <div
            key={social.id}
            className={`transition-all duration-300 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-20 pointer-events-none'
            }`}
            style={{ transitionDelay: `${index * 50}ms` }}
          >
            <a
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative block"
            >
              {/* Tooltip */}
              <span 
                className={`absolute right-16 top-1/2 -translate-y-1/2 bg-white text-gray-900 text-xs font-bold px-3 py-2 rounded-lg shadow-xl whitespace-nowrap transition-all duration-300 ${
                  isExpanded ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-2 pointer-events-none'
                }`}
              >
                {social.label}
              </span>
              
              {/* Botão */}
              <div className={`${buttonSize} bg-gradient-to-br ${social.color} rounded-full flex items-center justify-center text-white shadow-lg hover:shadow-2xl hover:scale-110 transition-all duration-300 cursor-pointer ${
                social.id === 'whatsapp' && !isScrolled ? 'animate-pulse hover:animate-none' : ''
              }`}>
                <Icon size={iconSize} weight="fill" />
              </div>
            </a>
          </div>
        )
      })}
    </div>
  )
}

export default SocialButtons