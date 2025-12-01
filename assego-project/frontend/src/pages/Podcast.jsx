/**
 * ========================================
 * Podcast - A Voz que Representa
 * Sincronizado com YouTube
 * ========================================
 */

import { useState, useEffect } from 'react'
import { 
  Microphone, 
  YoutubeLogo, 
  Play, 
  Calendar, 
  Users, 
  Target, 
  ArrowRight, 
  CircleNotch,
  Clock,
  Bell,
  Star
} from '@phosphor-icons/react'

function Podcast() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [episodios, setEpisodios] = useState([])
  const [loading, setLoading] = useState(true)
  const [videoDestaque, setVideoDestaque] = useState(null)

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

  // Verificar se o episódio é novo (menos de 7 dias)
  const isNovoEpisodio = (dataStr) => {
    if (!dataStr) return false
    const dataEpisodio = new Date(dataStr)
    const agora = new Date()
    const diffTime = Math.abs(agora - dataEpisodio)
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24))
    return diffDays <= 7
  }

  // Função para tempo relativo
  const getTempoRelativo = (data) => {
    const agora = new Date()
    const diff = agora - data
    const minutos = Math.floor(diff / 60000)
    const horas = Math.floor(diff / 3600000)
    const dias = Math.floor(diff / 86400000)
    const semanas = Math.floor(dias / 7)
    const meses = Math.floor(dias / 30)

    if (minutos < 60) return `há ${minutos} minutos`
    if (horas < 24) return `há ${horas} horas`
    if (dias === 1) return 'há 1 dia'
    if (dias < 7) return `há ${dias} dias`
    if (semanas === 1) return 'há 1 semana'
    if (semanas < 4) return `há ${semanas} semanas`
    if (meses === 1) return 'há 1 mês'
    return `há ${meses} meses`
  }

  // YouTube Data API Key
  const YOUTUBE_API_KEY = 'AIzaSyASjMYCsZivEe2gh4r8ut4zc-SxLyaYKsQ'
  const CHANNEL_ID = 'UC03PLERSm5_IThiyZJfaFQg' // Canal ASSEGO (correto)

  // Vídeos fallback (caso API falhe) - 4 últimos
  const videosFallback = [
    {
      id: '9AbFEj44dAs',
      titulo: 'DÉFICIT IMOBILIÁRIO PARA OS MILITARES',
      descricao: 'Discussão sobre o déficit imobiliário e seus impactos para os militares estaduais de Goiás.',
      thumbnail: 'https://i.ytimg.com/vi/9AbFEj44dAs/maxresdefault.jpg',
      thumbnailHQ: 'https://i.ytimg.com/vi/9AbFEj44dAs/hqdefault.jpg',
      data: '27 de novembro de 2024',
      dataRelativa: 'há 4 dias',
      duracao: '1:50:06',
      url: 'https://www.youtube.com/watch?v=9AbFEj44dAs',
      isNovo: true
    },
    {
      id: 'F5V_gcoLTm0',
      titulo: 'PROJETO ANTIFACÇÃO #93',
      descricao: 'Análise do projeto antifacção e suas implicações para a segurança pública.',
      thumbnail: 'https://i.ytimg.com/vi/F5V_gcoLTm0/maxresdefault.jpg',
      thumbnailHQ: 'https://i.ytimg.com/vi/F5V_gcoLTm0/hqdefault.jpg',
      data: '20 de novembro de 2024',
      dataRelativa: 'há 11 dias',
      duracao: '36:33',
      url: 'https://www.youtube.com/watch?v=F5V_gcoLTm0',
      isNovo: false
    },
    {
      id: 'VRIrWfyciFE',
      titulo: 'POSTO IMEDIATO E PL ANTIFACÇÃO #92',
      descricao: 'Debate sobre posto imediato e o PL antifacção para os militares.',
      thumbnail: 'https://i.ytimg.com/vi/VRIrWfyciFE/maxresdefault.jpg',
      thumbnailHQ: 'https://i.ytimg.com/vi/VRIrWfyciFE/hqdefault.jpg',
      data: '13 de novembro de 2024',
      dataRelativa: 'há 2 semanas',
      duracao: '1:02:14',
      url: 'https://www.youtube.com/watch?v=VRIrWfyciFE',
      isNovo: false
    },
    {
      id: 'VO7-Z7Bq0gI',
      titulo: 'Lei Orgânica Nacional #91',
      descricao: 'Discussão sobre a Lei Orgânica Nacional e seus impactos.',
      thumbnail: 'https://i.ytimg.com/vi/VO7-Z7Bq0gI/maxresdefault.jpg',
      thumbnailHQ: 'https://i.ytimg.com/vi/VO7-Z7Bq0gI/hqdefault.jpg',
      data: '06 de novembro de 2024',
      dataRelativa: 'há 3 semanas',
      duracao: '53:08',
      url: 'https://www.youtube.com/watch?v=VO7-Z7Bq0gI',
      isNovo: false
    },
  ]

  // Formatar duração ISO 8601 (PT1H30M45S) para legível (1:30:45)
  const formatDuration = (isoDuration) => {
    if (!isoDuration) return ''
    const match = isoDuration.match(/PT(?:(\d+)H)?(?:(\d+)M)?(?:(\d+)S)?/)
    if (!match) return ''
    
    const hours = match[1] ? parseInt(match[1]) : 0
    const minutes = match[2] ? parseInt(match[2]) : 0
    const seconds = match[3] ? parseInt(match[3]) : 0
    
    if (hours > 0) {
      return `${hours}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`
    }
    return `${minutes}:${seconds.toString().padStart(2, '0')}`
  }

  // Buscar vídeos do YouTube
  useEffect(() => {
    const fetchVideos = async () => {
      setLoading(true)
      
      try {
        console.log('🔄 Buscando canal pelo handle...')
        
        // Primeiro, buscar o channel ID pelo handle
        const channelUrl = `https://www.googleapis.com/youtube/v3/channels?key=${YOUTUBE_API_KEY}&forHandle=assegooficial1707&part=id,snippet`
        
        const channelResponse = await fetch(channelUrl)
        const channelData = await channelResponse.json()
        
        console.log('📦 Resposta channel:', channelData)
        
        if (channelData.error) {
          throw new Error(channelData.error.message)
        }
        
        let channelId = CHANNEL_ID // fallback
        
        if (channelData.items && channelData.items.length > 0) {
          channelId = channelData.items[0].id
          console.log('✅ Channel ID encontrado:', channelId)
        }
        
        // Buscar vídeos do canal (5 vídeos: 1 destaque + 4 anteriores)
        const searchUrl = `https://www.googleapis.com/youtube/v3/search?key=${YOUTUBE_API_KEY}&channelId=${channelId}&part=snippet&type=video&order=date&maxResults=5`
        
        console.log('📡 Buscando vídeos...')
        
        const searchResponse = await fetch(searchUrl)
        const searchData = await searchResponse.json()
        
        console.log('📦 Resposta search:', searchData)
        
        if (searchData.error) {
          console.error('❌ Erro na API:', searchData.error.message)
          throw new Error(searchData.error.message)
        }
        
        if (!searchData.items || searchData.items.length === 0) {
          console.warn('⚠️ Nenhum vídeo encontrado')
          throw new Error('Nenhum vídeo encontrado')
        }
        
        // Pegar IDs dos vídeos para buscar detalhes
        const videoIds = searchData.items
          .filter(item => item.id && item.id.videoId)
          .map(item => item.id.videoId)
          .join(',')
        
        console.log('🎬 Video IDs:', videoIds)
        
        if (!videoIds) {
          throw new Error('Nenhum ID de vídeo válido')
        }
        
        // Buscar detalhes dos vídeos
        const detailsUrl = `https://www.googleapis.com/youtube/v3/videos?key=${YOUTUBE_API_KEY}&id=${videoIds}&part=snippet,contentDetails,statistics`
        
        const detailsResponse = await fetch(detailsUrl)
        const detailsData = await detailsResponse.json()
        
        console.log('📦 Resposta details:', detailsData)
        
        if (detailsData.error) {
          throw new Error(detailsData.error.message)
        }
        
        if (detailsData.items && detailsData.items.length > 0) {
          const videos = detailsData.items.map((video) => {
            const published = video.snippet.publishedAt
            const publishedDate = new Date(published)
            
            return {
              id: video.id,
              titulo: video.snippet.title,
              descricao: video.snippet.description ? video.snippet.description.substring(0, 200) + (video.snippet.description.length > 200 ? '...' : '') : '',
              thumbnail: video.snippet.thumbnails?.maxres?.url || video.snippet.thumbnails?.high?.url || video.snippet.thumbnails?.medium?.url || `https://i.ytimg.com/vi/${video.id}/hqdefault.jpg`,
              thumbnailHQ: video.snippet.thumbnails?.high?.url || video.snippet.thumbnails?.medium?.url || `https://i.ytimg.com/vi/${video.id}/hqdefault.jpg`,
              data: publishedDate.toLocaleDateString('pt-BR', {
                day: '2-digit',
                month: 'long',
                year: 'numeric'
              }),
              dataRelativa: getTempoRelativo(publishedDate),
              duracao: formatDuration(video.contentDetails?.duration),
              url: `https://www.youtube.com/watch?v=${video.id}`,
              isNovo: isNovoEpisodio(published)
            }
          })
          
          console.log('✅ Vídeos processados:', videos.length)
          setVideoDestaque(videos[0])
          setEpisodios(videos.slice(1))
          setLoading(false)
          return
        }
        
        throw new Error('Nenhum detalhe de vídeo retornado')
        
      } catch (err) {
        console.error('❌ Erro ao buscar vídeos:', err.message)
        // Fallback: usar vídeos manuais
        console.log('⚠️ Usando vídeos fallback')
        setVideoDestaque(videosFallback[0])
        setEpisodios(videosFallback.slice(1))
        setLoading(false)
      }
    }

    fetchVideos()
  }, [])

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
      
      {/* Hero Section */}
      <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          {backgroundImages.map((img, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-opacity duration-1000 ${
                index === currentSlide ? 'opacity-100' : 'opacity-0'
              }`}
            >
              <img src={img} alt="" className="w-full h-full object-cover" />
            </div>
          ))}
          <div className="absolute inset-0 bg-gradient-to-b from-[#050A18] via-[#050A18]/80 to-[#050A18]"></div>
        </div>

        <div className="container mx-auto px-6 relative z-10 pt-32 pb-16 text-center">
          {/* Logo do Podcast */}
          <img 
            src="/logopodcast.png" 
            alt="Podcast ASSEGO" 
            className="w-32 md:w-40 mx-auto mb-6"
          />

          <div className="inline-flex items-center gap-2 bg-gold-500/20 border border-gold-500/30 rounded-full px-5 py-2 mb-6">
            <span className="w-2 h-2 bg-gold-500 rounded-full animate-pulse"></span>
            <span className="text-sm text-gold-400 font-medium">AO VIVO toda Quarta às 19h</span>
          </div>
          
          <h1 className="font-display font-black text-4xl md:text-5xl lg:text-7xl text-white mb-6">
            PODCAST <span className="text-gold-500">ASSEGO</span>
          </h1>
          
          <p className="text-gray-300 text-lg md:text-xl max-w-3xl mx-auto mb-8">
            A voz que representa os Subtenentes e Sargentos de Goiás. 
            Informação, debate e defesa dos seus direitos.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="#ultimo-episodio"
              className="inline-flex items-center justify-center gap-2 bg-[#000e72] hover:bg-[#001090] text-white font-bold py-4 px-8 rounded-full transition-all hover:scale-105"
            >
              <Play size={20} weight="fill" />
              Assistir Último Episódio
            </a>
            <a 
              href="https://www.youtube.com/@assegooficial1707?sub_confirmation=1"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-white/10 border border-white/20 text-white font-bold py-4 px-8 rounded-full hover:bg-white/20 transition-all"
            >
              <Bell size={20} />
              Inscrever-se
            </a>
          </div>
        </div>

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
      <section className="py-12 bg-[#0B1221] border-y border-white/10">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {destaques.map((item, index) => (
              <div key={index} className="text-center group">
                <div className="w-14 h-14 bg-[#000e72]/30 border border-[#000e72]/50 rounded-2xl flex items-center justify-center mx-auto mb-3 group-hover:bg-[#000e72]/50 group-hover:scale-110 transition-all">
                  <item.icon size={28} className="text-gold-400" />
                </div>
                <h3 className="text-white font-bold mb-1">{item.titulo}</h3>
                <p className="text-gray-400 text-sm">{item.descricao}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Vídeo em Destaque */}
      <section id="ultimo-episodio" className="py-20 bg-[#050A18]">
        <div className="container mx-auto px-6">
          {loading ? (
            <div className="flex items-center justify-center py-20">
              <CircleNotch size={48} className="text-gold-500 animate-spin" />
            </div>
          ) : videoDestaque ? (
            <>
              <div className="flex items-center gap-3 mb-8">
                <span className="w-1 h-8 bg-gold-500 rounded-full"></span>
                <h2 className="text-3xl md:text-4xl font-display font-bold text-white">
                  Último Episódio
                </h2>
                {videoDestaque.isNovo && (
                  <span className="bg-gradient-to-r from-gold-500 to-gold-600 text-black text-xs font-bold px-3 py-1 rounded-full animate-pulse flex items-center gap-1">
                    <Star size={12} weight="fill" />
                    NOVO
                  </span>
                )}
              </div>

              <div className="grid lg:grid-cols-5 gap-8">
                {/* Player de Vídeo */}
                <div className="lg:col-span-3">
                  <div className="aspect-video rounded-2xl overflow-hidden bg-black shadow-2xl shadow-[#000e72]/20">
                    <iframe
                      src={`https://www.youtube.com/embed/${videoDestaque.id}?rel=0`}
                      title={videoDestaque.titulo}
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                      className="w-full h-full"
                    ></iframe>
                  </div>
                </div>

                {/* Info do Vídeo */}
                <div className="lg:col-span-2 flex flex-col justify-center">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="bg-red-600 text-white text-xs px-3 py-1 rounded flex items-center gap-1">
                      <YoutubeLogo size={14} weight="fill" />
                      YouTube
                    </span>
                    {videoDestaque.isNovo && (
                      <span className="bg-gold-500 text-black text-xs font-bold px-3 py-1 rounded">
                        NOVO
                      </span>
                    )}
                  </div>

                  <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
                    {videoDestaque.titulo}
                  </h3>

                  <div className="flex items-center gap-4 text-gray-400 text-sm mb-4">
                    {videoDestaque.data && (
                      <span className="flex items-center gap-1">
                        <Calendar size={16} />
                        {videoDestaque.data}
                      </span>
                    )}
                    {videoDestaque.dataRelativa && (
                      <span className="flex items-center gap-1">
                        <Clock size={16} />
                        {videoDestaque.dataRelativa}
                      </span>
                    )}
                  </div>

                  <p className="text-gray-300 mb-6 leading-relaxed">
                    {videoDestaque.descricao || 'Acompanhe mais um episódio do Podcast ASSEGO com temas importantes para a categoria dos Subtenentes e Sargentos de Goiás.'}
                  </p>

                  <div className="flex gap-3">
                    <a 
                      href={videoDestaque.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 bg-[#000e72] hover:bg-[#001090] text-white font-bold py-3 px-6 rounded-full transition-all"
                    >
                      <Play size={18} weight="fill" />
                      Assistir no YouTube
                    </a>
                  </div>
                </div>
              </div>
            </>
          ) : (
            /* Fallback: Playlist embed quando não consegue carregar vídeos individuais */
            <>
              <div className="flex items-center gap-3 mb-8">
                <span className="w-1 h-8 bg-gold-500 rounded-full"></span>
                <h2 className="text-3xl md:text-4xl font-display font-bold text-white">
                  Últimos Episódios
                </h2>
              </div>

              <div className="aspect-video max-w-5xl mx-auto rounded-2xl overflow-hidden bg-black shadow-2xl shadow-[#000e72]/20">
                <iframe
                  src="https://www.youtube.com/embed/videoseries?list=UU1qepBTR8FUxH8vtMR9oGTg&rel=0"
                  title="Podcast ASSEGO - Últimos Episódios"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="w-full h-full"
                ></iframe>
              </div>

              <div className="text-center mt-8">
                <a 
                  href="https://www.youtube.com/@assegooficial1707/streams"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-[#000e72] hover:bg-[#001090] text-white font-bold py-3 px-6 rounded-full transition-all"
                >
                  <YoutubeLogo size={20} weight="fill" />
                  Ver todos no YouTube
                </a>
              </div>
            </>
          )}
        </div>
      </section>

      {/* Episódios Anteriores */}
      <section id="episodios" className="py-20 bg-[#0B1221]">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <span className="w-1 h-8 bg-gold-500 rounded-full"></span>
                <h2 className="text-3xl md:text-4xl font-display font-bold text-white">
                  Episódios Anteriores
                </h2>
              </div>
              <p className="text-gray-400 max-w-xl">
                Confira todos os episódios do Podcast ASSEGO diretamente do nosso canal no YouTube.
              </p>
            </div>
            
            <a 
              href="https://www.youtube.com/@assegooficial1707/streams"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-gold-400 font-bold hover:gap-3 transition-all mt-6 md:mt-0"
            >
              Ver todos no YouTube
              <ArrowRight size={18} />
            </a>
          </div>

          {/* Loading */}
          {loading && (
            <div className="flex items-center justify-center py-20">
              <CircleNotch size={48} className="text-gold-500 animate-spin" />
            </div>
          )}

          {/* Grid de Episódios */}
          {!loading && episodios.length > 0 ? (
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {episodios.map((ep) => (
                <a
                  key={ep.id}
                  href={ep.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group bg-white/5 border border-white/10 rounded-2xl overflow-hidden hover:border-gold-500/30 hover:-translate-y-2 transition-all duration-300"
                >
                  {/* Thumbnail */}
                  <div className="relative aspect-video overflow-hidden">
                    <img 
                      src={ep.thumbnail} 
                      alt={ep.titulo}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      onError={(e) => {
                        e.target.src = ep.thumbnailHQ || 'https://i.ytimg.com/vi/default/hqdefault.jpg'
                      }}
                    />
                    
                    {/* Overlay com Play */}
                    <div className="absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                      <div className="w-14 h-14 bg-[#000e72] rounded-full flex items-center justify-center transform scale-75 group-hover:scale-100 transition-transform">
                        <Play size={24} weight="fill" className="text-white ml-1" />
                      </div>
                    </div>
                    
                    {/* Badge NOVO */}
                    {ep.isNovo && (
                      <div className="absolute top-3 left-3 bg-gradient-to-r from-gold-500 to-gold-600 text-black text-xs font-bold px-3 py-1 rounded-full flex items-center gap-1 shadow-lg animate-pulse">
                        <Star size={12} weight="fill" />
                        NOVO
                      </div>
                    )}

                    {/* Badge YouTube */}
                    <div className="absolute top-3 right-3 bg-black/70 backdrop-blur-sm text-white text-xs px-2 py-1 rounded flex items-center gap-1">
                      <YoutubeLogo size={14} weight="fill" className="text-red-500" />
                    </div>

                    {/* Duração */}
                    {ep.duracao && (
                      <div className="absolute bottom-3 left-3 bg-black/80 text-white text-xs font-medium px-2 py-1 rounded">
                        {ep.duracao}
                      </div>
                    )}

                    {/* Tempo relativo */}
                    <div className="absolute bottom-3 right-3 bg-black/70 backdrop-blur-sm text-white text-xs px-2 py-1 rounded">
                      {ep.dataRelativa}
                    </div>
                  </div>

                  {/* Info */}
                  <div className="p-4">
                    <h3 className="text-white font-bold mb-2 line-clamp-2 group-hover:text-gold-400 transition-colors">
                      {ep.titulo}
                    </h3>
                    <div className="flex items-center gap-2 text-gray-500 text-xs">
                      <Calendar size={12} />
                      {ep.data}
                    </div>
                  </div>
                </a>
              ))}
            </div>
          ) : !loading && (
            /* Fallback: Botão para acessar os streams no YouTube */
            <div className="text-center py-12 bg-white/5 border border-white/10 rounded-2xl">
              <YoutubeLogo size={64} className="text-red-500 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-white mb-2">
                Acesse nosso canal no YouTube
              </h3>
              <p className="text-gray-400 mb-6 max-w-md mx-auto">
                Confira todos os episódios do Podcast ASSEGO na aba "Ao Vivo" do nosso canal.
              </p>
              <a 
                href="https://www.youtube.com/@assegooficial1707/streams"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-6 rounded-full transition-all"
              >
                <Play size={18} weight="fill" />
                Ver Episódios no YouTube
              </a>
            </div>
          )}
        </div>
      </section>

      {/* Sobre o Podcast */}
      <section className="py-20 bg-[#050A18]">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Imagem */}
            <div className="relative">
              <div className="absolute -top-4 -left-4 w-full h-full border-2 border-[#000e72]/50 rounded-3xl"></div>
              <img 
                src="https://images.unsplash.com/photo-1478737270239-2f02b77fc618?w=800&q=80"
                alt="Estúdio de Podcast"
                className="relative rounded-3xl w-full object-cover shadow-2xl"
              />
              <div className="absolute -bottom-6 -right-6 bg-gradient-to-br from-[#000e72] to-[#001090] text-white p-6 rounded-2xl shadow-xl">
                <p className="text-4xl font-bold">+90</p>
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
                responsabilidade as autoridades políticas.
              </p>

              <p className="text-gray-300 text-lg mb-8 leading-relaxed">
                Essa iniciativa integra o projeto de modernização implementado pela atual gestão, 
                que alia inovação tecnológica à proximidade com a categoria.
              </p>

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

      {/* CTA Final */}
      <section className="py-20 bg-gradient-to-r from-[#000e72] to-[#001090] relative overflow-hidden">
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
              className="inline-flex items-center justify-center gap-3 bg-gold-500 hover:bg-gold-600 text-black font-bold py-4 px-10 rounded-full transition-all hover:scale-105 text-lg"
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