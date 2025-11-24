/**
 * ========================================
 * useTiltEffect - Hook Customizado
 * ========================================
 * 
 * Adiciona efeito 3D de inclinação aos cards
 * quando o mouse passa sobre eles.
 * 
 * Como usar:
 * 1. Adicione className="tilt-card" no elemento
 * 2. Passe a ref do elemento para o hook
 */

import { useEffect, useRef } from 'react'

function useTiltEffect(elementRef) {
  useEffect(() => {
    const element = elementRef?.current
    if (!element) return

    const handleMouseMove = (e) => {
      const rect = element.getBoundingClientRect()
      const x = e.clientX - rect.left
      const y = e.clientY - rect.top
      const centerX = rect.width / 2
      const centerY = rect.height / 2
      
      const rotateX = ((y - centerY) / centerY) * -5 // Max 5 graus
      const rotateY = ((x - centerX) / centerX) * 5

      element.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`
    }

    const handleMouseLeave = () => {
      element.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) scale3d(1, 1, 1)'
    }

    element.addEventListener('mousemove', handleMouseMove)
    element.addEventListener('mouseleave', handleMouseLeave)

    return () => {
      element.removeEventListener('mousemove', handleMouseMove)
      element.removeEventListener('mouseleave', handleMouseLeave)
    }
  }, [elementRef])
}

export default useTiltEffect
