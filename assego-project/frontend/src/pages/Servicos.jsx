/**
 * ========================================
 * Serviços - Serviços Oferecidos pela ASSEGO
 * ========================================
 */

import { useState, useEffect } from 'react'
import { 
  Scales, 
  FileText, 
  Handshake, 
  Megaphone, 
  Buildings, 
  CalendarCheck,
  Certificate,
  Headset,
  ArrowRight,
  Phone,
  Envelope,
  Clock,
  MapPin,
  CheckCircle,
  Star
} from '@phosphor-icons/react'

function Servicos() {
  const [currentSlide, setCurrentSlide] = useState(0)

  // Imagens do carrossel de fundo
  const backgroundImages = [
    'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=1920&q=80',
    'https://images.unsplash.com/photo-1521791136064-7986c2920216?w=1920&q=80',
    'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=1920&q=80',
  ]

  // Trocar slide automaticamente
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % backgroundImages.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [])

  // Serviços principais
  const servicosPrincipais = [
    {
      icon: Scales,
      titulo: 'Assessoria Jurídica',
      descricao: 'Equipe de advogados especializados em direito militar, trabalhista e previdenciário. Atendimento 24 horas para situações emergenciais.',
      itens: [
        'Defesa em processos administrativos',
        'Ações de promoção e progressão',
        'Questões previdenciárias',
        'Orientação trabalhista',
        'Plantão 24 horas'
      ],
      cor: 'from-[#000e72] to-blue-800',
      destaque: true
    },
    {
      icon: Megaphone,
      titulo: 'Representação Sindical',
      descricao: 'Atuação junto aos poderes públicos na defesa dos interesses da categoria, participando de negociações e audiências.',
      itens: [
        'Negociações salariais',
        'Defesa de direitos coletivos',
        'Audiências públicas',
        'Articulação política',
        'Mobilização da categoria'
      ],
      cor: 'from-gold-500 to-gold-700'
    },
    {
      icon: FileText,
      titulo: 'Documentação',
      descricao: 'Auxílio na elaboração e tramitação de documentos junto aos órgãos competentes.',
      itens: [
        'Requerimentos administrativos',
        'Recursos e petições',
        'Certidões e declarações',
        'Orientação documental',
        'Acompanhamento de processos'
      ],
      cor: 'from-purple-500 to-purple-700'
    },
    {
      icon: Handshake,
      titulo: 'Mediação de Conflitos',
      descricao: 'Intermediação em situações de conflito entre associados e a instituição, buscando sempre a melhor solução.',
      itens: [
        'Mediação institucional',
        'Resolução de conflitos',
        'Acordos administrativos',
        'Conciliação',
        'Orientação preventiva'
      ],
      cor: 'from-green-500 to-green-700'
    },
    {
      icon: Buildings,
      titulo: 'Estrutura de Lazer',
      descricao: 'Acesso completo às sedes da ASSEGO em Goiânia e Aruanã, com toda infraestrutura de lazer.',
      itens: [
        'Piscinas e parque aquático',
        'Campos de futebol',
        'Churrasqueiras e quiosques',
        'Salão de eventos',
        'Hotel e pousada'
      ],
      cor: 'from-cyan-500 to-cyan-700'
    },
    {
      icon: CalendarCheck,
      titulo: 'Eventos e Capacitações',
      descricao: 'Programação regular de eventos sociais, cursos e capacitações para associados e familiares.',
      itens: [
        'Cursos de capacitação',
        'Palestras e workshops',
        'Eventos comemorativos',
        'Confraternizações',
        'Torneios esportivos'
      ],
      cor: 'from-orange-500 to-orange-700'
    },
  ]

  // Canais de atendimento
  const canaisAtendimento = [
    {
      icon: Phone,
      titulo: 'Telefone',
      info: '(62) 3281-3177',
      detalhe: 'Segunda a Sexta, 8h às 18h'
    },
    {
      icon: Headset,
      titulo: 'Plantão Jurídico',
      info: '(62) 99999-9999',
      detalhe: '24 horas, todos os dias'
    },
    {
      icon: Envelope,
      titulo: 'E-mail',
      info: 'contato@assego.com.br',
      detalhe: 'Resposta em até 24h'
    },
    {
      icon: MapPin,
      titulo: 'Presencial',
      info: 'Rua 87, Setor Sul',
      detalhe: 'Goiânia - GO'
    },
  ]

  return (
    <main className="bg-[#050A18] min-h-screen">
      
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden">
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
          <div className="absolute inset-0 bg-gradient-to-b from-[#050A18] via-[#050A18]/80 to-[#050A18]"></div>
        </div>

        {/* Conteúdo */}
        <div className="container mx-auto px-6 relative z-10 pt-32 pb-16 text-center">
          <div className="inline-flex items-center gap-2 bg-[#000e72]/50 border border-[#000e72] rounded-full px-5 py-2 mb-6">
            <Certificate size={18} className="text-gold-400" />
            <span className="text-sm text-gold-400 font-medium">Atendimento de Excelência</span>
          </div>
          
          <h1 className="font-display font-black text-4xl md:text-5xl lg:text-6xl text-white mb-6">
            Nossos <span className="text-gold-400">Serviços</span>
          </h1>
          
          <p className="text-gray-300 text-lg md:text-xl max-w-3xl mx-auto mb-8">
            A ASSEGO oferece uma gama completa de serviços para atender às necessidades 
            dos associados e suas famílias. Conheça tudo o que podemos fazer por você.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="#servicos"
              className="inline-flex items-center justify-center gap-2 bg-gold-500 hover:bg-gold-600 text-black font-bold py-4 px-8 rounded-full transition-all hover:scale-105"
            >
              Ver Serviços
              <ArrowRight size={20} weight="bold" />
            </a>
            <a 
              href="#contato"
              className="inline-flex items-center justify-center gap-2 bg-white/10 border border-white/20 text-white font-bold py-4 px-8 rounded-full hover:bg-white/20 transition-all"
            >
              <Phone size={20} />
              Fale Conosco
            </a>
          </div>
        </div>

        {/* Indicadores */}
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

      {/* Serviços Principais */}
      <section id="servicos" className="py-20 bg-[#0B1221]">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="flex items-center justify-center gap-3 mb-4">
              <span className="w-12 h-1 bg-gold-500 rounded-full"></span>
              <h2 className="text-3xl md:text-4xl font-display font-bold text-white">
                O que Oferecemos
              </h2>
              <span className="w-12 h-1 bg-gold-500 rounded-full"></span>
            </div>
            <p className="text-gray-400 text-lg">
              Serviços especializados para defender seus direitos e promover seu bem-estar.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {servicosPrincipais.map((servico, index) => (
              <div 
                key={index}
                className={`group relative bg-white/5 border border-white/10 rounded-3xl overflow-hidden hover:border-gold-500/30 transition-all duration-500 ${
                  servico.destaque ? 'ring-2 ring-gold-500/20' : ''
                }`}
              >
                {servico.destaque && (
                  <div className="absolute top-0 left-0 right-0 bg-gold-500 text-black text-xs font-bold py-2 text-center">
                    ⭐ SERVIÇO DESTAQUE
                  </div>
                )}
                
                <div className={`h-2 bg-gradient-to-r ${servico.cor}`}></div>
                
                <div className={`p-8 ${servico.destaque ? 'pt-12' : ''}`}>
                  <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${servico.cor} flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform duration-500 shadow-lg`}>
                    <servico.icon size={28} weight="duotone" />
                  </div>
                  
                  <h3 className="text-xl font-bold text-white mb-3">{servico.titulo}</h3>
                  <p className="text-gray-400 text-sm mb-6 leading-relaxed">{servico.descricao}</p>
                  
                  <ul className="space-y-2">
                    {servico.itens.map((item, i) => (
                      <li key={i} className="flex items-center gap-2 text-gray-300 text-sm">
                        <CheckCircle size={16} weight="fill" className="text-green-500 flex-shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Como Funciona */}
      <section className="py-20 bg-[#050A18]">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-4">
              Como Funciona
            </h2>
            <p className="text-gray-400 text-lg">
              Acessar nossos serviços é simples e rápido. Veja o passo a passo.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              { num: '01', titulo: 'Associe-se', desc: 'Faça sua filiação online ou presencialmente' },
              { num: '02', titulo: 'Identifique', desc: 'Identifique o serviço que você precisa' },
              { num: '03', titulo: 'Entre em Contato', desc: 'Ligue, envie e-mail ou venha pessoalmente' },
              { num: '04', titulo: 'Seja Atendido', desc: 'Nossa equipe cuidará de tudo para você' },
            ].map((passo, index) => (
              <div key={index} className="relative text-center group">
                {index < 3 && (
                  <div className="hidden md:block absolute top-10 left-1/2 w-full h-0.5 bg-gradient-to-r from-gold-500/50 to-transparent"></div>
                )}
                
                <div className="relative z-10 w-20 h-20 bg-[#0B1221] border-2 border-gold-500/30 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:border-gold-500 transition-colors">
                  <span className="text-2xl font-display font-bold text-gold-400">{passo.num}</span>
                </div>
                
                <h3 className="text-lg font-bold text-white mb-2">{passo.titulo}</h3>
                <p className="text-gray-400 text-sm">{passo.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Canais de Atendimento */}
      <section id="contato" className="py-20 bg-[#0B1221]">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-4">
              Canais de Atendimento
            </h2>
            <p className="text-gray-400 text-lg">
              Estamos sempre prontos para atender você. Escolha o canal de sua preferência.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {canaisAtendimento.map((canal, index) => (
              <div 
                key={index}
                className="bg-white/5 border border-white/10 rounded-2xl p-6 text-center hover:border-gold-500/30 hover:bg-white/10 transition-all group"
              >
                <div className="w-14 h-14 bg-[#000e72] rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <canal.icon size={28} className="text-gold-400" />
                </div>
                <h3 className="text-white font-bold mb-2">{canal.titulo}</h3>
                <p className="text-gold-400 font-medium mb-1">{canal.info}</p>
                <p className="text-gray-500 text-sm">{canal.detalhe}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Horário de Funcionamento */}
      <section className="py-20 bg-[#050A18]">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto bg-gradient-to-br from-[#000e72] to-[#001090] rounded-3xl p-10 md:p-16">
            <div className="grid md:grid-cols-2 gap-10 items-center">
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <Clock size={32} className="text-gold-400" />
                  <h2 className="text-2xl md:text-3xl font-display font-bold text-white">
                    Horário de Funcionamento
                  </h2>
                </div>
                <p className="text-blue-100/80 mb-6">
                  Nossa sede em Goiânia funciona em horário comercial, mas o plantão jurídico está disponível 24 horas.
                </p>
              </div>
              
              <div className="space-y-4">
                <div className="flex justify-between items-center py-3 border-b border-white/10">
                  <span className="text-white font-medium">Segunda a Sexta</span>
                  <span className="text-gold-400 font-bold">08:00 - 18:00</span>
                </div>
                <div className="flex justify-between items-center py-3 border-b border-white/10">
                  <span className="text-white font-medium">Sábado</span>
                  <span className="text-gold-400 font-bold">08:00 - 12:00</span>
                </div>
                <div className="flex justify-between items-center py-3 border-b border-white/10">
                  <span className="text-white font-medium">Plantão Jurídico</span>
                  <span className="text-green-400 font-bold">24 horas</span>
                </div>
                <div className="flex justify-between items-center py-3">
                  <span className="text-white font-medium">Clube (finais de semana)</span>
                  <span className="text-gold-400 font-bold">08:00 - 22:00</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-20 bg-gradient-to-r from-gold-500 to-gold-600 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: 'url("data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23000000" fill-opacity="0.4"%3E%3Cpath d="M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")'
          }}></div>
        </div>
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-black mb-6">
              Precisa de Algum Serviço?
            </h2>
            <p className="text-black/70 text-lg mb-8">
              Entre em contato conosco agora mesmo. Nossa equipe está pronta para ajudar!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="tel:6232813177"
                className="inline-flex items-center justify-center gap-2 bg-black text-white font-bold py-4 px-8 rounded-full transition-all hover:scale-105"
              >
                <Phone size={20} />
                (62) 3281-3177
              </a>
              <a 
                href="#filiar"
                className="inline-flex items-center justify-center gap-2 bg-white text-black font-bold py-4 px-8 rounded-full transition-all hover:scale-105"
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

export default Servicos