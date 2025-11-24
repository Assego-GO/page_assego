/**
 * ========================================
 * App.jsx - Componente Principal
 * ========================================
 * 
 * Este é o componente raiz que organiza
 * toda a estrutura da página
 */

import { useEffect } from 'react'

// Importar todos os componentes
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Stats from './components/Stats'
import Partners from './components/Partners'
import Infrastructure from './components/Infrastructure'
import Activities from './components/Activities'
import Destinations from './components/Destinations'
import Social from './components/Social'
import CTA from './components/CTA'
import Footer from './components/Footer'
import WhatsAppButton from './components/WhatsAppButton'

// Hook customizado para animações de scroll
import useScrollReveal from './hooks/useScrollReveal'

function App() {
  // Ativa as animações de reveal no scroll
  useScrollReveal()

  return (
    <>
      {/* Navegação fixa no topo */}
      <Navbar />
      
      {/* Seções da página */}
      <main>
        <Hero />
        <Stats />
        <Partners />
        <Infrastructure />
        <Activities />
        <Destinations />
        <Social />
        <CTA />
      </main>
      
      {/* Rodapé */}
      <Footer />
      
      {/* Botão flutuante do WhatsApp */}
      <WhatsAppButton />
    </>
  )
}

export default App
