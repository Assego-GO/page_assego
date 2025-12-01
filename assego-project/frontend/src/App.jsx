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
import SocialButtons from './components/Socialbuttons.jsx'

// Páginas
import Diretoria from './pages/Diretoria'
import Historia from './pages/Historia'
import ConselhoFiscal from './pages/ConselhoFiscal'
import Juridico from './pages/Juridico'
import Informativo from './pages/Informativo'
import Podcast from './pages/Podcast'
import Beneficios from './pages/Beneficios'
import Servicos from './pages/Servicos'
import Parcerias from './pages/Parcerias'
import ParqueAquatico from './pages/Parqueaquatico.jsx'
import HotelAssego from './pages/Hotelassego.jsx'
import PousadaAruana from './pages/Pousadaaruana.jsx'
import EspacoAssego from './pages/Espacoassego.jsx'

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
          <Route path="/podcast" element={<Podcast />} />
          <Route path="/beneficios" element={<Beneficios />} />
          <Route path="/servicos" element={<Servicos />} />
          <Route path="/parcerias" element={<Parcerias />} />
          <Route path="/parque-aquatico" element={<ParqueAquatico />} />
          <Route path="/hotel-assego" element={<HotelAssego />} />
          <Route path="/pousada-aruana" element={<PousadaAruana />} />
          <Route path="/espaco-assego" element={<EspacoAssego />} />
        </Routes>
      </Layout>
    </Router>
  )
}

export default App