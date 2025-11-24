/**
 * ========================================
 * useScrollReveal - Hook Customizado
 * ========================================
 * 
 * Este hook adiciona a classe 'active' aos
 * elementos com classe 'reveal' quando eles
 * entram na viewport durante o scroll.
 * 
 * Como usar:
 * 1. Adicione className="reveal" no elemento
 * 2. Importe e chame useScrollReveal() no componente pai
 */

import { useEffect } from 'react'

function useScrollReveal() {
  useEffect(() => {
    // Função que verifica elementos visíveis
    const revealOnScroll = () => {
      const reveals = document.querySelectorAll('.reveal')
      const windowHeight = window.innerHeight
      const elementVisible = 100 // Pixels antes de ativar

      reveals.forEach((reveal) => {
        const elementTop = reveal.getBoundingClientRect().top

        if (elementTop < windowHeight - elementVisible) {
          reveal.classList.add('active')
        }
      })
    }

    // Adiciona listener de scroll
    window.addEventListener('scroll', revealOnScroll)
    
    // Executa uma vez no início (para elementos já visíveis)
    revealOnScroll()

    // Cleanup: remove listener quando componente desmonta
    return () => {
      window.removeEventListener('scroll', revealOnScroll)
    }
  }, [])
}

export default useScrollReveal
