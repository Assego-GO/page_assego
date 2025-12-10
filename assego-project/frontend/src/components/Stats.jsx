/**
 * ========================================
 * Stats - Seção de Estatísticas
 * ========================================
 */

import { useState, useEffect, useRef } from 'react'

// Função para calcular anos de história
// Aniversário da ASSEGO: 03 de Junho
// Ano de fundação: 1956 (69 anos em 2025)
function calcularAnosDeHistoria() {
  const anoFundacao = 1956
  const mesAniversario = 6 // Junho
  const diaAniversario = 3
  
  const hoje = new Date()
  const anoAtual = hoje.getFullYear()
  const mesAtual = hoje.getMonth() + 1 // getMonth() retorna 0-11
  const diaAtual = hoje.getDate()
  
  // Verifica se já passou o aniversário este ano
  const jaFezAniversario = 
    mesAtual > mesAniversario || 
    (mesAtual === mesAniversario && diaAtual >= diaAniversario)
  
  // Calcula os anos
  const anos = jaFezAniversario 
    ? anoAtual - anoFundacao 
    : anoAtual - anoFundacao - 1
  
  return anos
}

// Dados das estatísticas
const statsData = [
  { value: calcularAnosDeHistoria(), suffix: '', label: 'Anos de História' },
  { value: 5000, suffix: '+', label: 'Famílias' },
  { value: 24, suffix: 'h', label: 'Jurídico' },
  { value: 100, suffix: '%', label: 'Compromisso' },
]

// Componente de contador animado
function AnimatedCounter({ value, suffix }) {
  const [count, setCount] = useState(0)
  const [hasStarted, setHasStarted] = useState(false)
  const ref = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasStarted) {
          setHasStarted(true)
        }
      },
      { threshold: 0.5 }
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => observer.disconnect()
  }, [hasStarted])

  useEffect(() => {
    if (!hasStarted) return

    const duration = 2000 // 2 segundos
    const steps = 60
    const increment = value / steps
    let current = 0

    const timer = setInterval(() => {
      current += increment
      if (current >= value) {
        setCount(value)
        clearInterval(timer)
      } else {
        setCount(Math.floor(current))
      }
    }, duration / steps)

    return () => clearInterval(timer)
  }, [hasStarted, value])

  return (
    <div ref={ref} className="text-5xl md:text-6xl font-display font-bold text-white mb-2 flex justify-center items-baseline">
      <span>{count}</span>
      {suffix && <span className="text-3xl text-gold-500">{suffix}</span>}
    </div>
  )
}

function Stats() {
  return (
    <section className="relative z-30 -mt-20 container mx-auto px-6">
      <div className="glass rounded-3xl p-10 md:p-14 border border-white/10 shadow-2xl backdrop-blur-xl">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-12 text-center divide-x divide-white/10">
          
          {statsData.map((stat, index) => (
            <div 
              key={index} 
              className="reveal"
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <AnimatedCounter value={stat.value} suffix={stat.suffix} />
              <span className="text-xs md:text-sm text-gold-400 font-bold uppercase tracking-[0.2em]">
                {stat.label}
              </span>
            </div>
          ))}
          
        </div>
      </div>
    </section>
  )
}

export default Stats