/**
 * ========================================
 * NoticiaDetalhe - Página de Notícia Individual
 * ========================================
 */

import { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import { Calendar, ArrowLeft, ShareNetwork, WhatsappLogo, FacebookLogo, TwitterLogo } from '@phosphor-icons/react'
import { getNoticiaById, getNoticiasPublicadas } from '../lib/Supabase'

function NoticiaDetalhe() {
  const { id } = useParams()
  const [noticia, setNoticia] = useState(null)
  const [relacionadas, setRelacionadas] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function fetchNoticia() {
      setLoading(true)
      const data = await getNoticiaById(id)
      setNoticia(data)

      // Buscar notícias relacionadas (mesma categoria)
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

  // URLs para compartilhamento
  const shareUrl = typeof window !== 'undefined' ? window.location.href : ''
  const shareText = noticia?.titulo || ''

  if (loading) {
    return (
      <div className="min-h-screen bg-[#050A18] pt-32 flex items-center justify-center">
        <div className="animate-spin w-12 h-12 border-4 border-gold-500 border-t-transparent rounded-full"></div>
      </div>
    )
  }

  if (!noticia) {
    return (
      <div className="min-h-screen bg-[#050A18] pt-32">
        <div className="container mx-auto px-6 text-center py-20">
          <h1 className="text-3xl font-bold text-white mb-4">Notícia não encontrada</h1>
          <Link to="/informativo" className="text-gold-400 hover:underline">
            ← Voltar para Informativos
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-[#050A18]">
      {/* Hero da Notícia */}
      <section className="relative pt-28 pb-16">
        {/* Background Image */}
        <div className="absolute inset-0 h-[50vh]">
          <img
            src={noticia.imagem_url || '/noticias/placeholder.jpg'}
            alt={noticia.titulo}
            className="w-full h-full object-cover"
            onError={(e) => { e.target.src = 'https://images.unsplash.com/photo-1504711434969-e33886168f5c?w=1920' }}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#050A18]/60 via-[#050A18]/80 to-[#050A18]"></div>
        </div>

        <div className="container mx-auto px-6 relative z-10">
          {/* Voltar */}
          <Link
            to="/informativo"
            className="inline-flex items-center gap-2 text-gray-400 hover:text-white transition mb-8"
          >
            <ArrowLeft size={20} />
            Voltar para Informativos
          </Link>

          {/* Meta */}
          <div className="flex flex-wrap items-center gap-4 mb-6">
            <span className="bg-gold-500 text-black text-sm font-bold px-4 py-1.5 rounded-full">
              {noticia.categoria}
            </span>
            <span className="flex items-center gap-2 text-gray-400 text-sm">
              <Calendar size={16} />
              {formatarData(noticia.data_publicacao)}
            </span>
          </div>

          {/* Título */}
          <h1 className="font-display font-black text-3xl md:text-5xl text-white max-w-4xl leading-tight mb-6">
            {noticia.titulo}
          </h1>

          {/* Resumo */}
          {noticia.resumo && (
            <p className="text-xl text-gray-300 max-w-3xl">
              {noticia.resumo}
            </p>
          )}
        </div>
      </section>

      {/* Conteúdo */}
      <section className="py-12 bg-[#0a0f1c]">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Artigo Principal */}
            <article className="lg:col-span-2">
              <div className="bg-white/5 border border-white/10 rounded-2xl p-8 md:p-12">
                {/* Conteúdo da notícia */}
                <div className="prose prose-invert prose-lg max-w-none">
                  {noticia.conteudo?.split('\n').map((paragrafo, index) => (
                    <p key={index} className="text-gray-300 leading-relaxed mb-6">
                      {paragrafo}
                    </p>
                  ))}
                </div>

                {/* Compartilhar */}
                <div className="mt-12 pt-8 border-t border-white/10">
                  <p className="text-gray-400 text-sm mb-4 flex items-center gap-2">
                    <ShareNetwork size={18} />
                    Compartilhar esta notícia:
                  </p>
                  <div className="flex gap-3">
                    <a
                      href={`https://wa.me/?text=${encodeURIComponent(shareText + ' ' + shareUrl)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-12 h-12 bg-green-600 hover:bg-green-700 rounded-full flex items-center justify-center text-white transition"
                    >
                      <WhatsappLogo size={24} weight="fill" />
                    </a>
                    <a
                      href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-12 h-12 bg-blue-600 hover:bg-blue-700 rounded-full flex items-center justify-center text-white transition"
                    >
                      <FacebookLogo size={24} weight="fill" />
                    </a>
                    <a
                      href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(shareText)}&url=${encodeURIComponent(shareUrl)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-12 h-12 bg-sky-500 hover:bg-sky-600 rounded-full flex items-center justify-center text-white transition"
                    >
                      <TwitterLogo size={24} weight="fill" />
                    </a>
                  </div>
                </div>
              </div>
            </article>

            {/* Sidebar */}
            <aside>
              {/* Notícias Relacionadas */}
              {relacionadas.length > 0 && (
                <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
                  <h3 className="font-display font-bold text-white text-lg mb-6">
                    Notícias Relacionadas
                  </h3>
                  <div className="space-y-4">
                    {relacionadas.map((rel) => (
                      <Link
                        key={rel.id}
                        to={`/informativo/${rel.id}`}
                        className="flex gap-4 group"
                      >
                        <img
                          src={rel.imagem_url || '/noticias/placeholder.jpg'}
                          alt={rel.titulo}
                          className="w-20 h-20 object-cover rounded-lg flex-shrink-0"
                          onError={(e) => { e.target.src = 'https://images.unsplash.com/photo-1504711434969-e33886168f5c?w=200' }}
                        />
                        <div>
                          <h4 className="text-white text-sm font-medium group-hover:text-gold-400 transition line-clamp-2">
                            {rel.titulo}
                          </h4>
                          <span className="text-gray-500 text-xs">
                            {formatarData(rel.data_publicacao)}
                          </span>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              )}

              {/* CTA Revista */}
              <div className="bg-gradient-to-br from-[#000e72] to-blue-900 rounded-2xl p-6 mt-6">
                <h3 className="font-display font-bold text-white text-lg mb-3">
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
            </aside>
          </div>
        </div>
      </section>
    </div>
  )
}

export default NoticiaDetalhe