/**
 * ========================================
 * WhatsAppButton - Botão Flutuante
 * ========================================
 */

import { useState } from 'react'
import { WhatsappLogo } from '@phosphor-icons/react'

function WhatsAppButton() {
  const [isHovered, setIsHovered] = useState(false)
  
  // Número do WhatsApp (substitua pelo real)
  const whatsappNumber = '5562999999999'
  const message = 'Olá! Gostaria de mais informações sobre a ASSEGO.'
  
  // Monta a URL do WhatsApp
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`

  return (
    <a 
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-8 right-8 z-50 group"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Tooltip */}
      <span 
        className={`absolute right-16 top-3 bg-white text-black text-xs font-bold px-3 py-2 rounded-lg shadow-lg transition-all duration-300 whitespace-nowrap ${
          isHovered ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-2'
        }`}
      >
        Fale Conosco
      </span>
      
      {/* Botão */}
      <div className="w-14 h-14 bg-green-500 rounded-full flex items-center justify-center text-white text-3xl shadow-[0_0_20px_rgba(34,197,94,0.5)] hover:scale-110 transition duration-300 animate-pulse hover:animate-none">
        <WhatsappLogo size={32} weight="fill" />
      </div>
    </a>
  )
}

export default WhatsAppButton
