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
import AppSection from './components/Appsection.jsx'
import JuridicoSection from './components/JuridicoSection'
import Activities from './components/Activities'
import Destinations from './components/Destinations'
import Social from './components/Social'
import ClubGallery from './components/ClubGallery'
import CTA from './components/CTA'
import InstagramFeed from './components/InstagramFeed'
import Footer from './components/Footer'
import SocialButtons from './components/SocialButtons'
import ScrollToTop from './components/ScrollToTop'

// Páginas
import Diretoria from './pages/Diretoria'
import Historia from './pages/Historia'
import Juridico from './pages/Juridico'
import Informativo from './pages/Informativo'
import NoticiaDetalhe from './pages/Noticiadetalhe.jsx'
import AssegoPanel from './pages/AssegoPanel'
import Podcast from './pages/Podcast'
import Vantagens from './pages/Vantagens.jsx'
import ParqueAquatico from './pages/Parqueaquatico.jsx'
import HotelAssego from './pages/HotelAssego'
import PousadaAruana from './pages/Pousadaaruana.jsx'
import EspacoAssego from './pages/EspacoAssego'
import Contato from './pages/Contato'

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
      <AppSection />
      <JuridicoSection />
      <Activities />
      <Destinations />
      <Social />
      <ClubGallery />
      <CTA />
      <InstagramFeed />
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
      <ScrollToTop />
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/diretoria" element={<Diretoria />} />
          <Route path="/historia" element={<Historia />} />
          <Route path="/juridico" element={<Juridico />} />
          <Route path="/informativo" element={<Informativo />} />
          <Route path="/informativo/:id" element={<NoticiaDetalhe />} />
          <Route path="/assego_panel" element={<AssegoPanel />} />
          <Route path="/podcast" element={<Podcast />} />
          <Route path="/vantagens" element={<Vantagens />} />
          <Route path="/parque-aquatico" element={<ParqueAquatico />} />
          <Route path="/hotel-assego" element={<HotelAssego />} />
          <Route path="/pousada-aruana" element={<PousadaAruana />} />
          <Route path="/espaco-assego" element={<EspacoAssego />} />
          <Route path="/contato" element={<Contato />} />
        </Routes>
      </Layout>
    </Router>
  )
}

export default App