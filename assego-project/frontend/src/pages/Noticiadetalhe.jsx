/**
 * ========================================
 * NoticiaDetalhe - Página de Notícia Individual
 * ========================================
 */

import { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import { Calendar, ArrowLeft, ShareNetwork, WhatsappLogo, FacebookLogo, XLogo, Link as LinkIcon, Check } from '@phosphor-icons/react'
import { getNoticiaById, getNoticiasPublicadas } from '../lib/Supabase'

function NoticiaDetalhe() {
  const { id } = useParams()
  const [noticia, setNoticia] = useState(null)
  const [relacionadas, setRelacionadas] = useState([])
  const [loading, setLoading] = useState(true)
  const [copiado, setCopiado] = useState(false)

  useEffect(() => {
    async function fetchNoticia() {
      setLoading(true)
      const data = await getNoticiaById(id)
      setNoticia(data)

      if (data) {
        const todas = await getNoticiasPublicadas()
        const filtradas = todas
          .filter(n => n.categoria === data.categoria && n.id !== data.id)
          .slice(0, 3)
        setRelacionadas(filtradas)
      }

      setLoading(false)
    }
    fetchNoticia()
  }, [id])

  const formatarData = (data) => {
    return new Date(data).toLocaleDateString('pt-BR', {
      day: '2-digit',
      month: 'long',
      year: 'numeric'
    })
  }

  const shareUrl = typeof window !== 'undefined' ? window.location.href : ''
  const shareTitle = noticia?.titulo || ''
  const shareMessage = `📰 *ASSEGO Informa*\n\n${shareTitle}\n\n🔗 Leia a matéria completa:`
  const shareMessageSimple = `📰 ASSEGO Informa: ${shareTitle} - Leia mais em:`

  const copiarLink = async () => {
    try {
      await navigator.clipboard.writeText(`${shareMessageSimple} ${shareUrl}`)
      setCopiado(true)
      setTimeout(() => setCopiado(false), 2000)
    } catch (err) {
      console.error('Erro ao copiar:', err)
    }
  }

  if (loading) {
    return (
      <div className="min-h-screen bg-[#050A18] pt-40 flex items-center justify-center">
        <div className="animate-spin w-12 h-12 border-4 border-gold-500 border-t-transparent rounded-full"></div>
      </div>
    )
  }

  if (!noticia) {
    return (
      <div className="min-h-screen bg-[#050A18] pt-40">
        <div className="container mx-auto px-4 text-center py-20">
          <h1 className="text-2xl font-bold text-white mb-4">Notícia não encontrada</h1>
          <Link to="/informativo" className="text-gold-400 hover:underline">
            ← Voltar para Informativos
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-[#050A18] pt-36 sm:pt-40 lg:pt-44">
      <div className="container mx-auto px-4 sm:px-6">
        
        {/* Voltar */}
        <Link
          to="/informativo"
          className="inline-flex items-center gap-2 text-gray-400 hover:text-white transition mb-4 sm:mb-6 text-sm"
        >
          <ArrowLeft size={18} />
          Voltar para Informativos
        </Link>

        {/* Imagem da Notícia */}
        <div className="relative w-full h-48 sm:h-64 md:h-80 lg:h-96 rounded-2xl overflow-hidden mb-6">
          <img
            src={noticia.imagem_url || '/noticias/placeholder.jpg'}
            alt={noticia.titulo}
            className="w-full h-full object-cover"
            onError={(e) => { e.target.src = 'https://images.unsplash.com/photo-1504711434969-e33886168f5c?w=1920' }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#050A18] via-transparent to-transparent"></div>
        </div>

        {/* Meta */}
        <div className="flex flex-wrap items-center gap-3 mb-4">
          <span className="bg-gold-500 text-black text-xs font-bold px-3 py-1 rounded-full">
            {noticia.categoria}
          </span>
          <span className="flex items-center gap-2 text-gray-400 text-xs">
            <Calendar size={14} />
            {formatarData(noticia.data_publicacao)}
          </span>
        </div>

        {/* Título */}
        <h1 className="font-display font-black text-xl sm:text-2xl md:text-3xl lg:text-4xl text-white leading-tight mb-4">
          {noticia.titulo}
        </h1>

        {/* Resumo */}
        {noticia.resumo && (
          <p className="text-sm sm:text-base md:text-lg text-gray-300 mb-8">
            {noticia.resumo}
          </p>
        )}

        {/* Conteúdo da Notícia */}
        <div className="bg-white/5 border border-white/10 rounded-2xl p-4 sm:p-6 md:p-8 mb-6">
          <div className="space-y-4">
            {noticia.conteudo?.split('\n').map((paragrafo, index) => (
              <p key={index} className="text-gray-300 leading-relaxed text-sm sm:text-base">
                {paragrafo}
              </p>
            ))}
          </div>

          {/* Compartilhar */}
          <div className="mt-8 pt-6 border-t border-white/10">
            <p className="text-gray-400 text-sm mb-4 flex items-center gap-2">
              <ShareNetwork size={18} />
              Compartilhar esta notícia:
            </p>
            <div className="flex gap-3">
              {/* WhatsApp */}
              <a
                href={`https://wa.me/?text=${encodeURIComponent(shareMessage + ' ' + shareUrl)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-11 h-11 bg-green-600 hover:bg-green-700 rounded-full flex items-center justify-center text-white transition hover:scale-110"
                title="Compartilhar no WhatsApp"
              >
                <WhatsappLogo size={22} weight="fill" />
              </a>
              
              {/* Facebook */}
              <a
                href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}&quote=${encodeURIComponent(shareMessageSimple)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-11 h-11 bg-blue-600 hover:bg-blue-700 rounded-full flex items-center justify-center text-white transition hover:scale-110"
                title="Compartilhar no Facebook"
              >
                <FacebookLogo size={22} weight="fill" />
              </a>
              
              {/* X (Twitter) */}
              <a
                href={`https://x.com/intent/tweet?text=${encodeURIComponent(shareMessageSimple)}&url=${encodeURIComponent(shareUrl)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-11 h-11 bg-black hover:bg-gray-900 rounded-full flex items-center justify-center text-white transition border border-white/20 hover:scale-110"
                title="Compartilhar no X"
              >
                <XLogo size={20} weight="bold" />
              </a>
              
              {/* Copiar Link */}
              <button
                onClick={copiarLink}
                className="w-11 h-11 bg-gray-600 hover:bg-gray-700 rounded-full flex items-center justify-center text-white transition hover:scale-110"
                title="Copiar link"
              >
                {copiado ? <Check size={20} weight="bold" /> : <LinkIcon size={20} weight="bold" />}
              </button>
            </div>
            
            {copiado && (
              <p className="text-green-400 text-sm mt-3 flex items-center gap-2">
                <Check size={16} />
                Link copiado!
              </p>
            )}
          </div>
        </div>

        {/* Notícias Relacionadas */}
        {relacionadas.length > 0 && (
          <div className="bg-white/5 border border-white/10 rounded-2xl p-4 sm:p-6 mb-6">
            <h3 className="font-display font-bold text-white text-lg mb-4">
              Notícias Relacionadas
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {relacionadas.map((rel) => (
                <Link
                  key={rel.id}
                  to={`/informativo/${rel.id}`}
                  className="flex gap-3 group bg-white/5 rounded-xl p-3 hover:bg-white/10 transition"
                >
                  <img
                    src={rel.imagem_url || '/noticias/placeholder.jpg'}
                    alt={rel.titulo}
                    className="w-16 h-16 object-cover rounded-lg flex-shrink-0"
                    onError={(e) => { e.target.src = 'https://images.unsplash.com/photo-1504711434969-e33886168f5c?w=200' }}
                  />
                  <div className="flex-1 min-w-0">
                    <h4 className="text-white text-sm font-medium group-hover:text-gold-400 transition line-clamp-2">
                      {rel.titulo}
                    </h4>
                    <span className="text-gray-500 text-xs mt-1 block">
                      {formatarData(rel.data_publicacao)}
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}

        {/* CTA Revista */}
        <div className="bg-gradient-to-br from-[#000e72] to-blue-900 rounded-2xl p-4 sm:p-6 mb-8">
          <h3 className="font-display font-bold text-white text-lg mb-2">
            Revista ASSEGO
          </h3>
          <p className="text-white/80 text-sm mb-4">
            Confira a edição completa com todas as novidades da associação.
          </p>
          <a
            href="/Revista_ASSEGO_2025_web.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-white text-[#000e72] px-4 py-2 rounded-full text-sm font-bold hover:bg-gray-100 transition"
          >
            Ver Revista
          </a>
        </div>

      </div>
    </div>
  )
}

export default NoticiaDetalhe