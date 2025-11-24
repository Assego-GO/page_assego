/**
 * ========================================
 * useCountUp - Hook Customizado
 * ========================================
 * 
 * Anima um número de 0 até o valor final
 * quando o elemento entra na viewport.
 * 
 * Uso:
 * const count = useCountUp(5000, 2000) // valor, duração em ms
 */

import { useState, useEffect, useRef } from 'react'

function useCountUp(target, duration = 2000, startOnView = true) {
  const [count, setCount] = useState(0)
  const [hasStarted, setHasStarted] = useState(false)
  const elementRef = useRef(null)

  useEffect(() => {
    if (!startOnView) {
      // Inicia imediatamente se não precisar esperar viewport
      animateCount()
      return
    }

    // Observer para detectar quando elemento entra na viewport
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasStarted) {
          setHasStarted(true)
          animateCount()
        }
      },
      { threshold: 0.5 }
    )

    const currentElement = elementRef.current
    if (currentElement) {
      observer.observe(currentElement)
    }

    return () => {
      if (currentElement) {
        observer.unobserve(currentElement)
      }
    }
  }, [hasStarted, startOnView])

  const animateCount = () => {
    const startTime = Date.now()
    const startValue = 0

    const updateCount = () => {
      const elapsed = Date.now() - startTime
      const progress = Math.min(elapsed / duration, 1)
      
      // Easing function (ease-out)
      const easeOut = 1 - Math.pow(1 - progress, 3)
      
      const currentValue = Math.floor(startValue + (target - startValue) * easeOut)
      setCount(currentValue)

      if (progress < 1) {
        requestAnimationFrame(updateCount)
      }
    }

    requestAnimationFrame(updateCount)
  }

  return { count, ref: elementRef }
}

export default useCountUp
