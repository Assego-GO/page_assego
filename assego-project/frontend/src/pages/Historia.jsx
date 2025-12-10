/**
 * ========================================
 * Nossa História - Página da História da ASSEGO
 * ========================================
 */

import { useState, useEffect } from 'react'
import { Calendar, Users, Buildings, Heart, Gavel, Trophy, Play } from '@phosphor-icons/react'

function Historia() {
  // Estado para controlar o slide atual do carrossel
  const [currentSlide, setCurrentSlide] = useState(0)
  // Estado para controlar se o vídeo está tocando
  const [isVideoPlaying, setIsVideoPlaying] = useState(false)
  
  // Imagens do carrossel de fundo
  const backgroundImages = [
    '/public/foto16.jpg', 
    '/public/foto17.jpg', 
    '/public/foto18.jpg', 
  ]

  // Trocar slide automaticamente
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % backgroundImages.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [])

  // Timeline da história
  const timeline = [
    {
      ano: '1956',
      titulo: 'A Fundação',
      descricao: 'Em 19 de maio, subtenentes e sargentos se reuniram no Quartel do Batalhão de Infantaria da PM para criar o Círculo Social.',
      icon: Calendar,
    },
    {
      ano: '1956',
      titulo: 'Aprovação do Estatuto',
      descricao: 'Em 03 de junho, foi aprovado o Estatuto e eleita a primeira Diretoria sob presidência do Subtenente Marcílio Vieira dos Santos.',
      icon: Gavel,
    },
    {
      ano: '1960s',
      titulo: 'Construção da Sede',
      descricao: 'Um barracão de três cômodos foi construído no meio de uma mata em Goiânia, dando início à estrutura física da associação.',
      icon: Buildings,
    },
    {
      ano: '1980s',
      titulo: 'Expansão',
      descricao: 'A associação cresceu e passou a oferecer mais serviços aos seus associados e familiares.',
      icon: Users,
    },
    {
      ano: '2014s',
      titulo: 'Modernização',
      descricao: 'Ampliação do clube de lazer com piscina aquecida, campos, quadras e salão de festas.',
      icon: Trophy,
    },
    {
      ano: 'Hoje',
      titulo: 'ASSEGO Moderna',
      descricao: 'Mais de 60 advogados especializados, projetos sociais e a maior representação classista de Goiás.',
      icon: Heart,
    },
  ]

  // Fundadores
  const fundadores = [
    { nome: 'Subtenente Marcílio Vieira dos Santos', cargo: 'Presidente da Comissão Provisória' },
    { nome: 'Subtenente Januário Matias', cargo: 'Fundador' },
    { nome: '1º Sargento Sebastião Arruda', cargo: 'Fundador' },
    { nome: 'Subtenente David Ferreira de Brito', cargo: 'Fundador' },
  ]

  return (
    <div className="min-h-screen bg-[#050A18]">
      
      {/* Hero Section com Carrossel */}
      <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden pt-24 md:pt-28">
        {/* Background Carrossel */}
        <div className="absolute inset-0">
          {backgroundImages.map((img, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
                index === currentSlide ? 'opacity-100' : 'opacity-0'
              }`}
            >
              <img 
                src={img}
                alt={`História ASSEGO ${index + 1}`}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
          <div className="absolute inset-0 bg-gradient-to-b from-[#050A18]/80 via-[#050A18]/70 to-[#050A18]"></div>
        </div>

        {/* Conteúdo */}
        <div className="relative z-10 text-center px-6">
          {/* Logos */}
          <div className="flex items-center justify-center gap-6 mb-8">
            <img 
              src="/logo.png" 
              alt="ASSEGO" 
              className="w-20 h-20 md:w-28 md:h-28 object-contain drop-shadow-2xl"
            />
            <div className="w-px h-16 md:h-20 bg-white/20"></div>
            <img 
              src="/logopre.png" 
              alt="Presidente ASSEGO" 
              className="w-16 h-20 md:w-24 md:h-28 object-contain drop-shadow-2xl"
            />
          </div>

          <span className="inline-flex items-center gap-2 bg-gold-500/20 border border-gold-500/30 text-gold-400 px-4 py-2 rounded-full text-sm font-bold mb-6">
            <Calendar size={18} />
            DESDE 1956
          </span>
          <h1 className="font-display font-black text-4xl md:text-6xl text-white mb-4">
            Nossa <span className="text-gold-400">História</span>
          </h1>
          <p className="text-gray-300 text-lg md:text-xl max-w-3xl mx-auto">
            Desde 1956 unindo militares e construindo uma família
          </p>

          {/* Indicadores do carrossel */}
          <div className="flex justify-center gap-2 mt-8">
            {backgroundImages.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  index === currentSlide 
                    ? 'w-8 bg-gold-500' 
                    : 'bg-white/30 hover:bg-white/50'
                }`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Introdução */}
      <section className="py-20 bg-[#0a0f1c]">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="font-display font-bold text-3xl md:text-4xl text-white mb-8">
              A <span className="text-gold-400">Ideia</span>
            </h2>
            <p className="text-gray-300 text-lg leading-relaxed mb-6">
              Tudo começou quando no dia <strong className="text-white">19 de maio de 1956</strong>, alguns subtenentes e sargentos reuniram-se no Quartel do Batalhão de Infantaria da Polícia Militar a fim de organizarem o <span className="text-gold-400">Círculo Social dos Subtenentes e Sargentos da Polícia Militar do Estado de Goiás</span>.
            </p>
            <p className="text-gray-300 text-lg leading-relaxed">
              Esta foi a primeira organização da categoria do Estado de Goiás que atravessou o tempo e hoje é conhecida como <strong className="text-white">Associação dos Subtenentes e Sargentos do Estado de Goiás - ASSEGO</strong>.
            </p>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 bg-[#050A18]">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-gold-400 font-bold tracking-widest text-xs uppercase">Linha do Tempo</span>
            <h2 className="font-display font-bold text-3xl md:text-4xl text-white mt-2">
              Nossa Trajetória
            </h2>
          </div>

          {/* Timeline Visual */}
          <div className="relative max-w-4xl mx-auto">
            {/* Linha central */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-gold-500 via-gold-500/50 to-transparent"></div>

            {timeline.map((item, index) => (
              <div 
                key={index}
                className={`relative flex items-center mb-12 ${
                  index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'
                }`}
              >
                {/* Conteúdo */}
                <div className={`w-5/12 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8 text-left'}`}>
                  <div className="bg-white/5 backdrop-blur border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all duration-300">
                    <span className="text-gold-400 font-bold text-2xl">{item.ano}</span>
                    <h3 className="text-white font-bold text-xl mt-2 mb-3">{item.titulo}</h3>
                    <p className="text-gray-400 text-sm">{item.descricao}</p>
                  </div>
                </div>

                {/* Círculo central */}
                <div className="absolute left-1/2 transform -translate-x-1/2 w-14 h-14 bg-[#050A18] border-4 border-gold-500 rounded-full flex items-center justify-center z-10">
                  <item.icon size={24} className="text-gold-400" />
                </div>

                {/* Espaço do outro lado */}
                <div className="w-5/12"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* O Começo */}
      <section className="py-20 bg-[#0a0f1c]">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Vídeo */}
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-br from-gold-500/20 to-royal-600/20 rounded-3xl blur-2xl"></div>
              <div className="relative aspect-video rounded-2xl overflow-hidden border-4 border-gold-500/20">
                {isVideoPlaying ? (
                  // Iframe do YouTube
                  <iframe
                    src="https://www.youtube.com/embed/7_ewathuf28?autoplay=1&rel=0"
                    title="História da ASSEGO"
                    className="w-full h-full"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                ) : (
                  // Thumbnail com botão de play
                  <>
                    <img 
                      src="https://img.youtube.com/vi/7_ewathuf28/maxresdefault.jpg"
                      alt="Vídeo História ASSEGO"
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        e.target.src = 'https://img.youtube.com/vi/7_ewathuf28/hqdefault.jpg'
                      }}
                    />
                    <button 
                      onClick={() => setIsVideoPlaying(true)}
                      className="absolute inset-0 flex items-center justify-center bg-black/40 hover:bg-black/30 transition-all group cursor-pointer"
                    >
                      <div className="w-20 h-20 bg-gold-500 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform shadow-2xl">
                        <Play size={32} weight="fill" className="text-black ml-1" />
                      </div>
                    </button>
                  </>
                )}
              </div>
              <p className="text-center text-gray-400 text-sm mt-4">
                {isVideoPlaying ? 'Assista ao vídeo da nossa história' : 'Clique para assistir ao vídeo da nossa história'}
              </p>
            </div>

            {/* Texto */}
            <div>
              <span className="text-gold-400 font-bold tracking-widest text-xs uppercase">Os Pioneiros</span>
              <h2 className="font-display font-bold text-3xl md:text-4xl text-white mt-2 mb-6">
                O Começo
              </h2>
              
              <div className="space-y-4 text-gray-300 leading-relaxed">
                <p>
                  Entre os pioneiros da ASSEGO, estava o <strong className="text-white">Subtenente Marcílio Vieira</strong>, então presidente da Comissão Provisória de Organização do Círculo, o <strong className="text-white">Subtenente Januário Matias</strong> e o <strong className="text-white">1º Sargento Sebastião Arruda</strong>.
                </p>
                <p>
                  Nessa reunião do dia 19 de maio eles já discutiram uma proposta de Estatuto, artigo por artigo, promovendo as alterações necessárias.
                </p>
                <p>
                  A história da ASSEGO remonta à construção de um <span className="text-gold-400">barracão de três cômodos</span>, que servia como casa para um sargento, no meio de uma mata. Foi o início humilde de uma grande história.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* A Fundação */}
      <section className="py-20 bg-gradient-to-r from-royal-600 to-[#050A18] relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-96 h-96 bg-gold-500 rounded-full blur-[150px]"></div>
        </div>
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <span className="text-gold-400 font-bold tracking-widest text-xs uppercase">03 de Junho de 1956</span>
              <h2 className="font-display font-bold text-3xl md:text-4xl text-white mt-2 mb-6">
                A Fundação Oficial
              </h2>
            </div>

            <div className="bg-white/5 backdrop-blur border border-white/10 rounded-3xl p-8 md:p-12">
              <p className="text-gray-300 text-lg leading-relaxed mb-8">
                No dia <strong className="text-white">03 de junho de 1956</strong>, data em que hoje é comemorado o aniversário da ASSEGO, na cidade de Goiânia, no Quartel do 1º BPM, sob a presidência do <span className="text-gold-400">Subtenente Marcílio Vieira dos Santos</span>, foi realizada uma reunião para discussão e aprovação do Estatuto e eleição da primeira Diretoria.
              </p>

              {/* Fundadores */}
              <h3 className="text-white font-bold text-xl mb-6 text-center">Fundadores</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {fundadores.map((fundador, index) => (
                  <div key={index} className="flex items-center gap-4 bg-white/5 rounded-xl p-4">
                    <div className="w-12 h-12 bg-gold-500/20 rounded-full flex items-center justify-center text-gold-400 font-bold">
                      {index + 1}
                    </div>
                    <div>
                      <p className="text-white font-bold text-sm">{fundador.nome}</p>
                      <p className="text-gray-400 text-xs">{fundador.cargo}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Evolução e Serviços */}
      <section className="py-20 bg-[#050A18]">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-gold-400 font-bold tracking-widest text-xs uppercase">Crescimento</span>
            <h2 className="font-display font-bold text-3xl md:text-4xl text-white mt-2">
              Evolução e Conquistas
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {/* Card 1 */}
            <div className="bg-white/5 backdrop-blur border border-white/10 rounded-2xl p-8 text-center hover:bg-white/10 transition-all group">
              <div className="w-16 h-16 bg-gradient-to-br from-gold-500 to-gold-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                <Gavel size={32} className="text-black" />
              </div>
              <h3 className="text-white font-bold text-xl mb-3">Assessoria Jurídica</h3>
              <p className="text-gray-400 text-sm">
                Estrutura com mais de <strong className="text-white">60 advogados especializados</strong> para defender os direitos dos associados.
              </p>
            </div>

            {/* Card 2 */}
            <div className="bg-white/5 backdrop-blur border border-white/10 rounded-2xl p-8 text-center hover:bg-white/10 transition-all group">
              <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                <Buildings size={32} className="text-white" />
              </div>
              <h3 className="text-white font-bold text-xl mb-3">Clube de Lazer</h3>
              <p className="text-gray-400 text-sm">
                Piscina aquecida, campos, quadras, salão de festas e estrutura completa para associados e famílias.
              </p>
            </div>

            {/* Card 3 */}
            <div className="bg-white/5 backdrop-blur border border-white/10 rounded-2xl p-8 text-center hover:bg-white/10 transition-all group">
              <div className="w-16 h-16 bg-gradient-to-br from-pink-500 to-red-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                <Heart size={32} className="text-white" />
              </div>
              <h3 className="text-white font-bold text-xl mb-3">Projetos Sociais</h3>
              <p className="text-gray-400 text-sm">
                Escolinhas de futebol e karatê para crianças carentes, e apoio a crianças com deficiência.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Números */}
      <section className="py-20 bg-[#0a0f1c]">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-5xl md:text-6xl font-display font-bold text-gold-400 mb-2">69+</div>
              <p className="text-gray-400 text-sm uppercase tracking-wider">Anos de História</p>
            </div>
            <div>
              <div className="text-5xl md:text-6xl font-display font-bold text-gold-400 mb-2">60+</div>
              <p className="text-gray-400 text-sm uppercase tracking-wider">Advogados</p>
            </div>
            <div>
              <div className="text-5xl md:text-6xl font-display font-bold text-gold-400 mb-2">5000+</div>
              <p className="text-gray-400 text-sm uppercase tracking-wider">Famílias</p>
            </div>
            <div>
              <div className="text-5xl md:text-6xl font-display font-bold text-gold-400 mb-2">1</div>
              <p className="text-gray-400 text-sm uppercase tracking-wider">Grande Família</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gradient-to-r from-gold-500 to-gold-600">
        <div className="container mx-auto px-6 text-center">
          <h2 className="font-display font-bold text-2xl md:text-3xl text-black mb-4">
            Faça Parte Dessa História
          </h2>
          <p className="text-black/70 mb-8 max-w-xl mx-auto">
            Junte-se a milhares de militares que confiam na ASSEGO há mais de 69 anos.
          </p>
          <a 
            href="#filiar"
            className="inline-flex items-center gap-2 bg-black text-white px-8 py-4 rounded-full font-bold hover:bg-gray-900 transition-all hover:scale-105"
          >
            QUERO ME ASSOCIAR
          </a>
        </div>
      </section>
    </div>
  )
}

export default Historia