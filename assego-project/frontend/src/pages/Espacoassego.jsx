/**
 * ========================================
 * Espaço ASSEGO - Eventos e Confraternizações
 * ========================================
 */

import { useState, useEffect } from 'react'
import { 
  Buildings, 
  UsersThree, 
  Champagne, 
  MicrophoneStage,
  CookingPot,
  MusicNotes,
  Clock,
  MapPin,
  Phone,
  ArrowRight,
  CheckCircle,
  Star,
  CalendarCheck,
  Camera,
  Confetti,
  Heart
} from '@phosphor-icons/react'

function EspacoAssego() {
  const [currentSlide, setCurrentSlide] = useState(0)

  const backgroundImages = [
    'https://images.unsplash.com/photo-1519167758481-83f550bb49b3?w=1920&q=80',
    'https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?w=1920&q=80',
    'https://images.unsplash.com/photo-1478147427282-58a87a120781?w=1920&q=80',
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % backgroundImages.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [])

  const espacos = [
    {
      nome: 'Salão Principal',
      capacidade: '300 pessoas',
      descricao: 'Amplo salão climatizado para grandes eventos, formaturas e festas.',
      imagem: 'https://images.unsplash.com/photo-1519167758481-83f550bb49b3?w=600&q=80',
      recursos: ['Ar condicionado', 'Palco', 'Som profissional', 'Iluminação cênica']
    },
    {
      nome: 'Salão de Festas',
      capacidade: '150 pessoas',
      descricao: 'Espaço versátil para aniversários, confraternizações e reuniões.',
      imagem: 'https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?w=600&q=80',
      recursos: ['Ar condicionado', 'Cozinha de apoio', 'Mesas e cadeiras', 'Estacionamento']
    },
    {
      nome: 'Churrasqueiras',
      capacidade: '50 pessoas cada',
      descricao: 'Quiosques com churrasqueira para encontros familiares.',
      imagem: 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=600&q=80',
      recursos: ['Churrasqueira', 'Pia', 'Mesas', 'Área coberta']
    },
    {
      nome: 'Área Gourmet',
      capacidade: '40 pessoas',
      descricao: 'Espaço sofisticado com cozinha completa para eventos intimistas.',
      imagem: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=600&q=80',
      recursos: ['Cozinha completa', 'Ilha gourmet', 'Adega', 'Ar condicionado']
    },
  ]

  const tiposEventos = [
    { icon: Champagne, label: 'Casamentos', cor: 'text-pink-400' },
    { icon: Confetti, label: 'Aniversários', cor: 'text-purple-400' },
    { icon: UsersThree, label: 'Formaturas', cor: 'text-blue-400' },
    { icon: Buildings, label: 'Corporativos', cor: 'text-green-400' },
    { icon: Heart, label: 'Noivados', cor: 'text-red-400' },
    { icon: MusicNotes, label: 'Shows', cor: 'text-orange-400' },
  ]

  const servicos = [
    'Decoração personalizada',
    'Buffet sob consulta',
    'DJ e som profissional',
    'Iluminação cênica',
    'Recepcionistas',
    'Manobrista',
    'Segurança',
    'Limpeza inclusa'
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
          <div className="absolute inset-0 bg-gradient-to-b from-[#050A18] via-[#050A18]/70 to-[#050A18]"></div>
        </div>

        <div className="container mx-auto px-6 relative z-10 pt-32 pb-16 text-center">
          <div className="inline-flex items-center gap-2 bg-purple-500/20 border border-purple-500/30 rounded-full px-5 py-2 mb-6">
            <Buildings size={18} className="text-purple-400" />
            <span className="text-sm text-purple-400 font-medium">Eventos e Celebrações</span>
          </div>
          
          <h1 className="font-display font-black text-4xl md:text-5xl lg:text-6xl text-white mb-6">
            Espaço <span className="text-purple-400">ASSEGO</span>
          </h1>
          
          <p className="text-gray-300 text-lg md:text-xl max-w-3xl mx-auto mb-8">
            O cenário perfeito para os momentos mais especiais da sua vida. 
            Salões, churrasqueiras e áreas gourmet para todos os tipos de eventos.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="#espacos"
              className="inline-flex items-center justify-center gap-2 bg-purple-500 hover:bg-purple-600 text-white font-bold py-4 px-8 rounded-full transition-all hover:scale-105"
            >
              Conhecer Espaços
              <ArrowRight size={20} weight="bold" />
            </a>
            <a 
              href="tel:6232813177"
              className="inline-flex items-center justify-center gap-2 bg-white/10 border border-white/20 text-white font-bold py-4 px-8 rounded-full hover:bg-white/20 transition-all"
            >
              <Phone size={20} />
              Solicitar Orçamento
            </a>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-2 z-10">
          {backgroundImages.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-2 h-2 rounded-full transition-all ${
                index === currentSlide ? 'bg-purple-500 w-6' : 'bg-white/30'
              }`}
            />
          ))}
        </div>
      </section>

      {/* Tipos de Eventos */}
      <section className="py-12 bg-[#0B1221] border-y border-white/10">
        <div className="container mx-auto px-6">
          <p className="text-center text-gray-400 text-sm uppercase tracking-wider mb-8">
            Ideal para todos os tipos de eventos
          </p>
          <div className="grid grid-cols-3 md:grid-cols-6 gap-6">
            {tiposEventos.map((tipo, index) => (
              <div key={index} className="text-center group">
                <div className="w-14 h-14 bg-white/5 border border-white/10 rounded-2xl flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform">
                  <tipo.icon size={28} className={tipo.cor} />
                </div>
                <p className="text-gray-400 text-sm">{tipo.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Espaços */}
      <section id="espacos" className="py-20 bg-[#050A18]">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-4">
              Nossos Espaços
            </h2>
            <p className="text-gray-400 text-lg">
              Ambientes versáteis e bem equipados para eventos de todos os tamanhos.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {espacos.map((espaco, index) => (
              <div 
                key={index}
                className="group bg-white/5 border border-white/10 rounded-3xl overflow-hidden hover:border-purple-500/30 transition-all"
              >
                <div className="relative h-64 overflow-hidden">
                  <img 
                    src={espaco.imagem} 
                    alt={espaco.nome}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="flex items-center justify-between">
                      <h3 className="text-2xl font-bold text-white">{espaco.nome}</h3>
                      <span className="bg-purple-500 text-white text-xs font-bold px-3 py-1 rounded-full">
                        {espaco.capacidade}
                      </span>
                    </div>
                  </div>
                </div>
                
                <div className="p-6">
                  <p className="text-gray-400 mb-4">{espaco.descricao}</p>
                  
                  <div className="flex flex-wrap gap-2">
                    {espaco.recursos.map((recurso, i) => (
                      <span 
                        key={i} 
                        className="bg-white/5 border border-white/10 text-gray-300 text-xs px-3 py-1 rounded-full"
                      >
                        {recurso}
                      </span>
                    ))}
                  </div>

                  <button className="w-full mt-6 bg-purple-500/20 border border-purple-500/30 text-purple-400 font-bold py-3 rounded-xl hover:bg-purple-500 hover:text-white transition-all">
                    Solicitar Orçamento
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Serviços */}
      <section className="py-20 bg-[#0B1221]">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-6">
                Serviços Adicionais
              </h2>
              <p className="text-gray-400 text-lg mb-8">
                Além dos espaços, oferecemos uma gama completa de serviços para 
                tornar seu evento ainda mais especial.
              </p>

              <div className="grid grid-cols-2 gap-4">
                {servicos.map((servico, index) => (
                  <div 
                    key={index}
                    className="flex items-center gap-3 bg-white/5 rounded-xl p-4"
                  >
                    <CheckCircle size={20} weight="fill" className="text-purple-500 flex-shrink-0" />
                    <span className="text-gray-300 text-sm">{servico}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="absolute -top-4 -left-4 w-full h-full border-2 border-purple-500/30 rounded-3xl"></div>
              <img 
                src="https://images.unsplash.com/photo-1530103862676-de8c9debad1d?w=600&q=80"
                alt="Decoração de eventos"
                className="relative rounded-3xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Como Reservar */}
      <section className="py-20 bg-[#050A18]">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-4">
              Como Reservar
            </h2>
            <p className="text-gray-400 text-lg">
              Processo simples e rápido para garantir seu evento.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8 max-w-5xl mx-auto">
            {[
              { num: '1', icon: Phone, titulo: 'Entre em Contato', desc: 'Ligue ou envie mensagem' },
              { num: '2', icon: CalendarCheck, titulo: 'Escolha a Data', desc: 'Verifique disponibilidade' },
              { num: '3', icon: Camera, titulo: 'Visite o Espaço', desc: 'Conheça pessoalmente' },
              { num: '4', icon: CheckCircle, titulo: 'Confirme', desc: 'Feche o contrato' },
            ].map((passo, index) => (
              <div key={index} className="text-center group">
                <div className="relative z-10 w-20 h-20 bg-purple-500/20 border-2 border-purple-500/30 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:border-purple-500 transition-colors">
                  <passo.icon size={32} className="text-purple-400" />
                </div>
                <h3 className="text-lg font-bold text-white mb-2">{passo.titulo}</h3>
                <p className="text-gray-400 text-sm">{passo.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Depoimento */}
      <section className="py-20 bg-[#0B1221]">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex justify-center gap-1 mb-6">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={24} weight="fill" className="text-gold-400" />
              ))}
            </div>
            
            <blockquote className="text-2xl md:text-3xl text-white font-light italic mb-8 leading-relaxed">
              "Realizamos nosso casamento no Espaço ASSEGO e foi simplesmente perfeito! 
              A estrutura, o atendimento e o carinho de toda a equipe fizeram nosso dia 
              ainda mais especial."
            </blockquote>
            
            <div className="flex items-center justify-center gap-4">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-400 to-purple-600 rounded-full flex items-center justify-center text-white font-bold text-xl">
                MC
              </div>
              <div className="text-left">
                <p className="text-white font-bold">Maria e Carlos</p>
                <p className="text-gray-400 text-sm">Casamento em 2024</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-r from-purple-700 to-purple-900 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-[150px]"></div>
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-6">
              Realize Seu Evento Conosco
            </h2>
            <p className="text-purple-100/80 text-lg mb-8">
              Entre em contato e solicite um orçamento sem compromisso.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="tel:6232813177"
                className="inline-flex items-center justify-center gap-2 bg-white text-purple-700 font-bold py-4 px-8 rounded-full transition-all hover:scale-105"
              >
                <Phone size={20} />
                (62) 3281-3177
              </a>
              <a 
                href="#filiar"
                className="inline-flex items-center justify-center gap-2 bg-white/10 border border-white/20 text-white font-bold py-4 px-8 rounded-full hover:bg-white/20 transition-all"
              >
                Quero Me Associar
                <ArrowRight size={20} weight="bold" />
              </a>
            </div>
          </div>
        </div>
      </section>

    </main>
  )
}

export default EspacoAssego