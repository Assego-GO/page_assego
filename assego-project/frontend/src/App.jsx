/**
 * ========================================
 * App.jsx - Componente Principal
 * ========================================
 * 
 * Este é o componente raiz que organiza
 * toda a estrutura da página
 */

import { useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

// Importar todos os componentes
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Stats from './components/Stats'
import Partners from './components/Partners'
import Infrastructure from './components/Infrastructure'
import JuridicoSection from './components/JuridicoSection'
import Activities from './components/Activities'
import Destinations from './components/Destinations'
import Social from './components/Social'
import ClubGallery from './components/ClubGallery'
import CTA from './components/CTA'
import Footer from './components/Footer'
import SocialButtons from './components/SocialButtons'

// Páginas
import Diretoria from './pages/Diretoria'
import Historia from './pages/Historia'
import ConselhoFiscal from './pages/ConselhoFiscal'
import Juridico from './pages/Juridico'
import Informativo from './pages/Informativo'

// Hook customizado para animações de scroll
import useScrollReveal from './hooks/useScrollReveal'

// Componente da página inicial
function HomePage() {
  useScrollReveal()
  
  return (
    <main>
      <Hero />
      <Stats />
      <Partners />
      <Infrastructure />
      <JuridicoSection />
      <Activities />
      <Destinations />
      <Social />
      <ClubGallery />
      <CTA />
    </main>
  )
}

// Layout com Navbar e Footer
function Layout({ children }) {
  return (
    <>
      <Navbar />
      {children}
      <Footer />
      <SocialButtons />
    </>
  )
}

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/diretoria" element={<Diretoria />} />
          <Route path="/historia" element={<Historia />} />
          <Route path="/conselho-fiscal" element={<ConselhoFiscal />} />
          <Route path="/juridico" element={<Juridico />} />
          <Route path="/informativo" element={<Informativo />} />
        </Routes>
      </Layout>
    </Router>
  )
}

export default App