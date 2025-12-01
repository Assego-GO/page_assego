/**
 * ========================================
 * Podcast - A Voz que Representa
 * ========================================
 */

import { useState, useEffect } from 'react'
import { Microphone, YoutubeLogo, Play, Calendar, Users, Target, ArrowRight, CircleNotch } from '@phosphor-icons/react'

function Podcast() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [episodios, setEpisodios] = useState([])
  const [loading, setLoading] = useState(true)

  // ID do canal da ASSEGO no YouTube
  const CHANNEL_ID = 'UCxKq5xGb6PSBdXQoHCj-xgg'

  // Imagens do carrossel de fundo
  const backgroundImages = [
    'https://images.unsplash.com/photo-1478737270239-2f02b77fc618?w=1920&q=80',
    'https://images.unsplash.com/photo-1590602847861-f357a9332bbc?w=1920&q=80',
    'https://images.unsplash.com/photo-1611532736597-de2d4265fba3?w=1920&q=80',
  ]

  // Trocar slide automaticamente
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % backgroundImages.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [])

  // Buscar vídeos do YouTube via RSS
  useEffect(() => {
    const fetchVideos = async () => {
      setLoading(true)
      try {
        // Usar um proxy CORS para acessar o RSS do YouTube
        const rssUrl = `https://www.youtube.com/feeds/videos.xml?channel_id=${CHANNEL_ID}`
        const proxyUrl = `https://api.allorigins.win/raw?url=${encodeURIComponent(rssUrl)}`
        
        const response = await fetch(proxyUrl)
        
        if (!response.ok) {
          throw new Error('Erro ao buscar vídeos')
        }

        const xmlText = await response.text()
        
        // Parse do XML
        const parser = new DOMParser()
        const xmlDoc = parser.parseFromString(xmlText, 'text/xml')
        const entries = xmlDoc.querySelectorAll('entry')
        
        const videos = []
        entries.forEach((entry, index) => {
          if (index < 8) { // Pegar apenas os 8 mais recentes
            const videoId = entry.querySelector('yt\\:videoId, videoId')?.textContent
            const title = entry.querySelector('title')?.textContent
            const published = entry.querySelector('published')?.textContent
            const description = entry.querySelector('media\\:description, description')?.textContent || ''
            
            if (videoId && title) {
              videos.push({
                id: videoId,
                titulo: title,
                descricao: description.substring(0, 150) + (description.length > 150 ? '...' : ''),
                thumbnail: `https://i.ytimg.com/vi/${videoId}/hqdefault.jpg`,
                data: new Date(published).toLocaleDateString('pt-BR', {
                  day: '2-digit',
                  month: 'short',
                  year: 'numeric'
                }),
                url: `https://www.youtube.com/watch?v=${videoId}`
              })
            }
          }
        })
        
        if (videos.length > 0) {
          setEpisodios(videos)
        } else {
          setEpisodios(episodiosFallback)
        }
      } catch (err) {
        console.error('Erro ao buscar vídeos:', err)
        setEpisodios(episodiosFallback)
      } finally {
        setLoading(false)
      }
    }

    fetchVideos()
  }, [])

  // Episódios fallback (caso a API falhe)
  const episodiosFallback = [
    {
      id: 'fallback1',
      titulo: 'Podcast ASSEGO #90 - Desastre nas Promoções de Praças 2025',
      descricao: 'Análise completa sobre os impactos das mudanças nas promoções de praças.',
      thumbnail: 'https://i.ytimg.com/vi/dQw4w9WgXcQ/hqdefault.jpg',
      data: '20 Nov 2024',
      url: 'https://www.youtube.com/@assegooficial1707/streams'
    },
    {
      id: 'fallback2',
      titulo: 'Podcast ASSEGO #89 - Fim dos Militares Estaduais?',
      descricao: 'Discussão sobre os projetos de lei que tramitam no Congresso.',
      thumbnail: 'https://i.ytimg.com/vi/dQw4w9WgXcQ/hqdefault.jpg',
      data: '13 Nov 2024',
      url: 'https://www.youtube.com/@assegooficial1707/streams'
    },
    {
      id: 'fallback3',
      titulo: 'Podcast ASSEGO #88 - PEC Segurança Pública',
      descricao: 'Entenda os impactos da PEC da Segurança Pública.',
      thumbnail: 'https://i.ytimg.com/vi/dQw4w9WgXcQ/hqdefault.jpg',
      data: '06 Nov 2024',
      url: 'https://www.youtube.com/@assegooficial1707/streams'
    },
    {
      id: 'fallback4',
      titulo: 'Podcast ASSEGO #87 - Lei Orgânica 2025',
      descricao: 'Detalhamento das mudanças na Lei Orgânica.',
      thumbnail: 'https://i.ytimg.com/vi/dQw4w9WgXcQ/hqdefault.jpg',
      data: '30 Out 2024',
      url: 'https://www.youtube.com/@assegooficial1707/streams'
    },
  ]

  // Destaques do podcast
  const destaques = [
    {
      icon: Calendar,
      titulo: 'Toda Quarta-feira',
      descricao: 'Às 19 horas, ao vivo no YouTube'
    },
    {
      icon: Microphone,
      titulo: 'Subtenente Sérgio',
      descricao: 'Presidente da ASSEGO como apresentador'
    },
    {
      icon: Users,
      titulo: 'Participação Popular',
      descricao: 'Interação ao vivo com os associados'
    },
    {
      icon: Target,
      titulo: 'Temas Relevantes',
      descricao: 'Promoções, direitos e conquistas'
    },
  ]

  return (
    <main className="bg-[#050A18] min-h-screen">
      
      {/* Hero Section com Carrossel */}
      <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden">
        {/* Background Slides */}
        <div className="absolute inset-0">
          {backgroundImages.map((img, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-opacity duration-1000 ${
                index === currentSlide ? 'opacity-100' : 'opacity-0'
              }`}
            >
              <img 
                src={img} 
                alt="" 
                className="w-full h-full object-cover"
              />
            </div>
          ))}
          {/* Overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-[#050A18] via-[#050A18]/80 to-[#050A18]"></div>
        </div>

        {/* Conteúdo */}
        <div className="container mx-auto px-6 relative z-10 pt-32 pb-16">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            
            {/* Logo do Podcast */}
            <div className="lg:w-1/3 flex justify-center">
              <img 
                src="/logopodcast.png" 
                alt="Podcast ASSEGO" 
                className="w-64 md:w-80 drop-shadow-2xl"
              />
            </div>

            {/* Texto */}
            <div className="lg:w-2/3 text-center lg:text-left">
              <div className="inline-flex items-center gap-2 bg-gold-500/20 border border-gold-500/30 rounded-full px-5 py-2 mb-6">
                <Microphone size={18} className="text-gold-400" />
                <span className="text-sm text-gold-400 font-medium">Ao vivo toda quarta-feira às 19h</span>
              </div>
              
              <h1 className="font-display font-black text-4xl md:text-5xl lg:text-6xl text-white mb-6">
                A Voz que <span className="text-gold-400">Representa</span>
              </h1>
              
              <p className="text-gray-300 text-lg md:text-xl max-w-2xl mb-8">
                Com compromisso e transparência, a ASSEGO consolidou um espaço permanente de diálogo 
                com a categoria por meio do seu canal no YouTube. Temas relevantes são discutidos 
                com profundidade e objetividade.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <a 
                  href="https://www.youtube.com/@assegooficial1707/streams"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 bg-red-600 hover:bg-red-700 text-white font-bold py-4 px-8 rounded-full transition-all hover:scale-105"
                >
                  <YoutubeLogo size={24} weight="fill" />
                  Assistir no YouTube
                </a>
                <a 
                  href="#episodios"
                  className="inline-flex items-center justify-center gap-2 bg-white/10 border border-white/20 text-white font-bold py-4 px-8 rounded-full hover:bg-white/20 transition-all"
                >
                  <Play size={20} weight="fill" />
                  Ver Episódios
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Indicadores do carrossel */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-2 z-10">
          {backgroundImages.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-2 h-2 rounded-full transition-all ${
                index === currentSlide ? 'bg-gold-500 w-6' : 'bg-white/30'
              }`}
            />
          ))}
        </div>
      </section>

      {/* Destaques */}
      <section className="py-16 bg-[#0B1221]">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {destaques.map((item, index) => (
              <div 
                key={index}
                className="bg-white/5 border border-white/10 rounded-2xl p-6 text-center hover:border-gold-500/30 transition-all"
              >
                <div className="w-14 h-14 bg-gold-500/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <item.icon size={28} className="text-gold-400" />
                </div>
                <h3 className="text-white font-bold mb-2">{item.titulo}</h3>
                <p className="text-gray-400 text-sm">{item.descricao}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sobre o Podcast */}
      <section className="py-20 bg-[#050A18]">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            
            {/* Imagem */}
            <div className="relative">
              <div className="absolute -top-4 -left-4 w-full h-full border-2 border-gold-500/30 rounded-3xl"></div>
              <img 
                src="https://images.unsplash.com/photo-1478737270239-2f02b77fc618?w=800&q=80"
                alt="Estúdio de Podcast"
                className="relative rounded-3xl w-full object-cover shadow-2xl"
              />
              {/* Badge */}
              <div className="absolute -bottom-6 -right-6 bg-[#000e72] text-white p-6 rounded-2xl shadow-xl">
                <p className="text-3xl font-bold">+50</p>
                <p className="text-sm text-blue-200">Episódios</p>
              </div>
            </div>

            {/* Texto */}
            <div>
              <div className="flex items-center gap-3 mb-6">
                <span className="w-1 h-8 bg-gold-500 rounded-full"></span>
                <h2 className="text-3xl md:text-4xl font-display font-bold text-white">
                  Mais que um Podcast
                </h2>
              </div>
              
              <p className="text-gray-300 text-lg mb-6 leading-relaxed">
                O podcast tornou-se uma ferramenta estratégica de valorização da tropa, dando voz 
                aos militares. Cada episódio traz pautas atuais, expõe demandas reais e chama à 
                responsabilidade as autoridades políticas, reforçando o papel da entidade de 
                representar com firmeza e responsabilidade.
              </p>

              <p className="text-gray-300 text-lg mb-8 leading-relaxed">
                Essa iniciativa integra o projeto de modernização implementado pela atual gestão, 
                que alia inovação tecnológica à proximidade com a categoria. Assim, a ASSEGO 
                reafirma sua posição como entidade representativa preparada para os novos desafios.
              </p>

              {/* Citação */}
              <blockquote className="border-l-4 border-gold-500 pl-6 py-2 mb-8">
                <p className="text-white text-lg italic mb-4">
                  "Dar voz à tropa é reconhecer sua importância. Nosso compromisso é defender 
                  e valorizar cada policial e bombeiro militar."
                </p>
                <cite className="text-gold-400 font-medium">
                  — Subtenente Sérgio, Presidente da ASSEGO
                </cite>
              </blockquote>

              <a 
                href="https://www.youtube.com/@assegooficial1707"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-gold-400 font-bold hover:gap-3 transition-all"
              >
                Acompanhe no YouTube
                <ArrowRight size={18} />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Episódios Recentes - Sincronizado com YouTube */}
      <section id="episodios" className="py-20 bg-[#0B1221]">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <span className="w-1 h-8 bg-red-500 rounded-full"></span>
                <h2 className="text-3xl md:text-4xl font-display font-bold text-white">
                  Episódios Recentes
                </h2>
              </div>
              <p className="text-gray-400 max-w-xl">
                Confira os últimos episódios diretamente do nosso canal no YouTube.
              </p>
            </div>
            
            <a 
              href="https://www.youtube.com/@assegooficial1707/streams"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-red-400 font-bold hover:gap-3 transition-all mt-6 md:mt-0"
            >
              Ver todos no YouTube
              <ArrowRight size={18} />
            </a>
          </div>

          {/* Loading State */}
          {loading && (
            <div className="flex items-center justify-center py-20">
              <CircleNotch size={48} className="text-gold-500 animate-spin" />
            </div>
          )}

          {/* Episódios Grid */}
          {!loading && episodios.length > 0 && (
            <div className="grid md:grid-cols-2 gap-8">
              {episodios.map((ep) => (
                <a
                  key={ep.id}
                  href={ep.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group bg-white/5 border border-white/10 rounded-2xl overflow-hidden hover:border-red-500/30 transition-all duration-300"
                >
                  <div className="relative h-48 md:h-56 overflow-hidden">
                    <img 
                      src={ep.thumbnail} 
                      alt={ep.titulo}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                      <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center">
                        <Play size={28} weight="fill" className="text-white ml-1" />
                      </div>
                    </div>
                    {/* Badge YouTube */}
                    <div className="absolute top-3 left-3 bg-red-600 text-white text-xs px-2 py-1 rounded flex items-center gap-1">
                      <YoutubeLogo size={14} weight="fill" />
                      YouTube
                    </div>
                  </div>

                  <div className="p-6">
                    <div className="flex items-center gap-2 text-gray-400 text-sm mb-3">
                      <Calendar size={14} />
                      {ep.data}
                    </div>
                    <h3 className="text-lg font-bold text-white mb-2 group-hover:text-red-400 transition line-clamp-2">
                      {ep.titulo}
                    </h3>
                    <p className="text-gray-400 text-sm line-clamp-2">
                      {ep.descricao}
                    </p>
                  </div>
                </a>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-20 bg-gradient-to-r from-[#000e72] to-[#001090] relative overflow-hidden">
        {/* Decoração */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-gold-500/10 rounded-full blur-[150px]"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/5 rounded-full blur-[100px]"></div>
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <img 
              src="/logopodcast.png" 
              alt="Podcast ASSEGO" 
              className="w-40 mx-auto mb-8"
            />
            
            <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-6">
              Não perca nenhum episódio!
            </h2>
            
            <p className="text-blue-100/80 text-lg mb-8">
              Inscreva-se no canal da ASSEGO no YouTube e ative o sininho para receber 
              notificações sempre que um novo episódio for ao ar.
            </p>

            <a 
              href="https://www.youtube.com/@assegooficial1707?sub_confirmation=1"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-3 bg-red-600 hover:bg-red-700 text-white font-bold py-4 px-10 rounded-full transition-all hover:scale-105 text-lg"
            >
              <YoutubeLogo size={28} weight="fill" />
              Inscrever-se no Canal
            </a>
          </div>
        </div>
      </section>

    </main>
  )
}

export default Podcast