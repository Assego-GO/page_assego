/**
 * ========================================
 * Vantagens - Benefícios e Serviços ASSEGO
 * ========================================
 * 
 * Página unificada com benefícios e serviços do associado
 */

import { Link, useNavigate } from 'react-router-dom'
import { 
  Handshake, 
  Heart, 
  Tooth, 
  GraduationCap, 
  Car, 
  Airplane,
  Sparkle,
  ArrowRight,
  Percent,
  Tag,
  Phone,
  WhatsappLogo,
  Scales,
  House,
  CheckCircle,
  Star,
  DeviceMobile,
  Buildings,
  CalendarCheck,
  Megaphone,
  FileText,
  Certificate,
  MapPin,
  Headset
} from '@phosphor-icons/react'

function Vantagens() {
  const navigate = useNavigate()

  // Função para navegar até a seção do App na home
  const handleAppClick = () => {
    navigate('/')
    setTimeout(() => {
      const appSection = document.getElementById('app')
      if (appSection) {
        appSection.scrollIntoView({ behavior: 'smooth' })
      }
    }, 100)
  }

  // Benefícios principais
  const beneficiosPrincipais = [
    {
      icon: Scales,
      titulo: 'Assessoria Jurídica 24h',
      descricao: 'Equipe jurídica especializada disponível 24 horas para orientação e defesa dos seus direitos.',
      cor: 'from-blue-500 to-blue-700',
      destaque: true
    },
    {
      icon: Heart,
      titulo: 'Plano de Saúde',
      descricao: 'Convênios com os melhores planos de saúde do estado com condições especiais para associados.',
      cor: 'from-red-500 to-red-700'
    },
    {
      icon: Tooth,
      titulo: 'Plano Odontológico',
      descricao: 'Cobertura odontológica completa para você e sua família com rede credenciada ampla.',
      cor: 'from-cyan-500 to-cyan-700'
    },
    {
      icon: GraduationCap,
      titulo: 'Bolsas de Estudo',
      descricao: 'Parcerias com instituições de ensino oferecendo descontos de até 50% em graduação e pós.',
      cor: 'from-purple-500 to-purple-700'
    },
    {
      icon: Car,
      titulo: 'Seguro Veicular',
      descricao: 'Condições exclusivas em seguros de automóveis com as melhores seguradoras do mercado.',
      cor: 'from-orange-500 to-orange-700'
    },
    {
      icon: House,
      titulo: 'Clube e Lazer',
      descricao: 'Acesso completo às sedes da ASSEGO em Goiânia e Aruanã para você e sua família.',
      cor: 'from-green-500 to-green-700'
    },
  ]

  // Serviços principais
  const servicosPrincipais = [
    {
      icon: Scales,
      titulo: 'Assessoria Jurídica',
      descricao: 'Equipe de advogados especializados em direito militar, trabalhista e previdenciário.',
      itens: [
        'Defesa em processos administrativos',
        'Ações de promoção e progressão',
        'Questões previdenciárias',
        'Plantão 24 horas'
      ],
      cor: 'from-[#000e72] to-blue-800',
      destaque: true
    },
    {
      icon: Megaphone,
      titulo: 'Representação Sindical',
      descricao: 'Atuação junto aos poderes públicos na defesa dos interesses da categoria.',
      itens: [
        'Negociações salariais',
        'Defesa de direitos coletivos',
        'Audiências públicas',
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
        'Acompanhamento de processos'
      ],
      cor: 'from-purple-500 to-purple-700'
    },
    {
      icon: Buildings,
      titulo: 'Estrutura de Lazer',
      descricao: 'Acesso completo às sedes da ASSEGO em Goiânia e Aruanã.',
      itens: [
        'Piscinas e parque aquático',
        'Churrasqueiras e quiosques',
        'Salão de eventos',
        'Hotel e pousada'
      ],
      cor: 'from-cyan-500 to-cyan-700'
    },
    {
      icon: CalendarCheck,
      titulo: 'Eventos e Capacitações',
      descricao: 'Programação regular de eventos sociais, cursos e capacitações.',
      itens: [
        'Cursos de capacitação',
        'Palestras e workshops',
        'Eventos comemorativos',
        'Torneios esportivos'
      ],
      cor: 'from-orange-500 to-orange-700'
    },
    {
      icon: Handshake,
      titulo: 'Mediação de Conflitos',
      descricao: 'Intermediação em situações de conflito entre associados e a instituição.',
      itens: [
        'Mediação institucional',
        'Resolução de conflitos',
        'Acordos administrativos',
        'Orientação preventiva'
      ],
      cor: 'from-green-500 to-green-700'
    },
  ]

  // Benefícios adicionais
  const beneficiosAdicionais = [
    'Descontos em farmácias conveniadas',
    'Auxílio funeral para associados e dependentes',
    'Convênios com óticas e laboratórios',
    'Descontos em academias e centros esportivos',
    'Parcerias com hotéis e pousadas',
    'Descontos em parques aquáticos',
    'Convênios com autoescolas',
    'Assistência em viagens',
    'Descontos em lojas parceiras',
    'Acesso a eventos exclusivos',
    'Representação sindical',
    'Cursos e capacitações gratuitos'
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
      icon: WhatsappLogo,
      titulo: 'WhatsApp',
      info: '(62) 9 9246-9099',
      detalhe: 'Atendimento rápido'
    },
    {
      icon: Headset,
      titulo: 'Plantão Jurídico',
      info: '24 horas',
      detalhe: 'Todos os dias'
    },
    {
      icon: MapPin,
      titulo: 'Presencial',
      info: 'Rua 87, nº 561',
      detalhe: 'Setor Sul - Goiânia'
    },
  ]

  return (
    <main className="bg-[#050A18] min-h-screen">
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        {/* Background com gradiente */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#000e72]/30 to-transparent"></div>
        
        {/* Padrão de fundo */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
            backgroundSize: '40px 40px'
          }}></div>
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            
            {/* Logos lado a lado */}
            <div className="flex items-center justify-center gap-6 md:gap-10 mb-8">
              {/* Logo Vantagens */}
              <img 
                src="/logovantagens.png" 
                alt="ASSEGO Mais Vantagens" 
                className="h-20 md:h-28 lg:h-32 object-contain"
                onError={(e) => {
                  e.target.style.display = 'none'
                }}
              />
              
              {/* Logo Presidente */}
              <img 
                src="/logopresidente.png" 
                alt="Presidente ASSEGO" 
                className="h-20 md:h-28 lg:h-32 object-contain"
                onError={(e) => {
                  e.target.style.display = 'none'
                }}
              />
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-black text-white mb-6 leading-tight">
              Um Universo de <span className="text-gold-400">Benefícios</span> ao seu Alcance
            </h1>

            <p className="text-gray-300 text-lg md:text-xl mb-10 leading-relaxed max-w-3xl mx-auto">
              Com o compromisso constante de oferecer mais qualidade de vida e valorização aos seus associados, 
              a ASSEGO oferece uma rede completa de vantagens pensadas para você e sua família.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="#beneficios"
                className="inline-flex items-center justify-center gap-2 bg-gold-500 hover:bg-gold-600 text-black font-bold py-4 px-8 rounded-full transition-all hover:scale-105"
              >
                Ver Benefícios
                <ArrowRight size={20} weight="bold" />
              </a>
              <a 
                href="https://api.whatsapp.com/send?phone=5562992469099&text=Olá!%20Quero%20saber%20mais%20sobre%20os%20benefícios%20ASSEGO!"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-green-500 hover:bg-green-600 text-white font-bold py-4 px-8 rounded-full transition-all hover:scale-105"
              >
                <WhatsappLogo size={24} weight="fill" />
                Falar no WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Benefícios Principais */}
      <section id="beneficios" className="py-20 bg-[#0B1221]">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="flex items-center justify-center gap-3 mb-4">
              <span className="w-12 h-1 bg-gold-500 rounded-full"></span>
              <Star size={28} weight="fill" className="text-gold-400" />
              <span className="w-12 h-1 bg-gold-500 rounded-full"></span>
            </div>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-4">
              Benefícios Exclusivos
            </h2>
            <p className="text-gray-400 text-lg">
              Conheça as principais vantagens que você terá ao se tornar um associado ASSEGO.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {beneficiosPrincipais.map((beneficio, index) => (
              <div 
                key={index}
                className={`group relative bg-white/5 border border-white/10 rounded-2xl p-6 hover:border-gold-500/30 transition-all duration-500 hover:-translate-y-2 ${
                  beneficio.destaque ? 'ring-2 ring-gold-500/20' : ''
                }`}
              >
                {beneficio.destaque && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-gold-500 text-black text-xs font-bold px-4 py-1 rounded-full">
                    DESTAQUE
                  </div>
                )}
                
                <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${beneficio.cor} flex items-center justify-center text-white mb-4 group-hover:scale-110 transition-transform duration-500 shadow-lg`}>
                  <beneficio.icon size={28} weight="duotone" />
                </div>
                
                <h3 className="text-lg font-bold text-white mb-2">{beneficio.titulo}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{beneficio.descricao}</p>
              </div>
            ))}
          </div>

          {/* Lista de benefícios adicionais */}
          <div className="mt-16 bg-white/5 border border-white/10 rounded-2xl p-8">
            <h3 className="text-xl font-bold text-white mb-6 text-center">E muito mais...</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
              {beneficiosAdicionais.map((item, index) => (
                <div key={index} className="flex items-center gap-3">
                  <CheckCircle size={20} weight="fill" className="text-green-500 flex-shrink-0" />
                  <span className="text-gray-300 text-sm">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Convênios e Parcerias - CTA para App/WhatsApp */}
      <section className="py-20 bg-gradient-to-br from-[#000e72]/40 to-[#001090]/30">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white/5 border border-white/10 rounded-3xl p-8 md:p-12 text-center">
              
              <div className="w-20 h-20 bg-gradient-to-br from-gold-500 to-gold-600 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg">
                <Handshake size={40} className="text-black" weight="duotone" />
              </div>

              <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-4">
                Convênios e <span className="text-gold-400">Parcerias</span>
              </h2>
              
              <p className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto leading-relaxed">
                A ASSEGO possui uma extensa rede de parceiros em diversas áreas: saúde, educação, 
                lazer, turismo, serviços e comércio. São dezenas de empresas oferecendo 
                descontos exclusivos para você e sua família.
              </p>

              <div className="grid md:grid-cols-3 gap-4 mb-10">
                {[
                  { icon: Heart, label: 'Saúde e Odontologia', num: '15+' },
                  { icon: GraduationCap, label: 'Educação', num: '10+' },
                  { icon: Airplane, label: 'Lazer e Turismo', num: '25+' },
                ].map((item, i) => (
                  <div key={i} className="bg-white/5 border border-white/10 rounded-xl p-4">
                    <item.icon size={28} className="text-gold-400 mx-auto mb-2" weight="duotone" />
                    <p className="text-2xl font-bold text-white">{item.num}</p>
                    <p className="text-gray-400 text-sm">{item.label}</p>
                  </div>
                ))}
              </div>

              <p className="text-gray-400 mb-6">
                Para conhecer todos os nossos convênios e parcerias:
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a 
                  href="https://api.whatsapp.com/send?phone=5562992469099&text=Olá!%20Quero%20saber%20mais%20sobre%20os%20convênios%20e%20parcerias%20ASSEGO!"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 bg-green-500 hover:bg-green-600 text-white font-bold py-4 px-8 rounded-full transition-all hover:scale-105"
                >
                  <WhatsappLogo size={24} weight="fill" />
                  Falar com Atendimento
                </a>
               
              </div>

              <p className="text-gray-500 text-sm mt-6">
                📱 No app você encontra todos os convênios, pode gerar sua carteirinha digital e muito mais!
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Parceria SESC/SENAC */}
      <section className="py-16 bg-[#0B1221]">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-display font-bold text-white mb-4">
              Parceria com Sistema Fecomércio - SESC/SENAC
            </h2>
            <p className="text-gray-300 max-w-3xl mx-auto">
              Um dos grandes diferenciais do ASSEGO Mais Vantagens é a parceria com o Sistema Fecomércio - Sesc/Senac, 
              que amplia significativamente o leque de benefícios disponíveis.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-5xl mx-auto">
            {[
              { icon: GraduationCap, titulo: 'Cursos de qualificação', desc: 'Formação profissional com descontos' },
              { icon: Airplane, titulo: 'Atividades de lazer', desc: 'Promovidas pelo Sesc em Goiás' },
              { icon: Heart, titulo: 'Saúde preventiva', desc: 'Bem-estar e esportes' },
              { icon: Tag, titulo: 'Hospedagem Sesc', desc: 'Em todo o Brasil' },
              { icon: Sparkle, titulo: 'Acesso a serviços', desc: 'Educação e assistência social' },
              { icon: Handshake, titulo: 'Desenvolvimento', desc: 'Cuidado com as famílias' },
            ].map((item, i) => (
              <div key={i} className="bg-white/5 border border-white/10 rounded-xl p-5 hover:bg-white/10 transition-all">
                <div className="w-12 h-12 bg-gold-500/20 rounded-lg flex items-center justify-center mb-3">
                  <item.icon size={24} className="text-gold-400" weight="duotone" />
                </div>
                <h3 className="text-white font-bold mb-1">{item.titulo}</h3>
                <p className="text-gray-400 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Serviços */}
      <section id="servicos" className="py-20 bg-[#050A18]">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 bg-[#000e72]/50 border border-[#000e72] rounded-full px-5 py-2 mb-6">
              <Certificate size={18} className="text-gold-400" />
              <span className="text-sm text-gold-400 font-medium">Atendimento de Excelência</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-4">
              Nossos Serviços
            </h2>
            <p className="text-gray-400 text-lg">
              Serviços especializados para defender seus direitos e promover seu bem-estar.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {servicosPrincipais.map((servico, index) => (
              <div 
                key={index}
                className={`group relative bg-white/5 border border-white/10 rounded-2xl overflow-hidden hover:border-gold-500/30 transition-all duration-500 ${
                  servico.destaque ? 'ring-2 ring-gold-500/20' : ''
                }`}
              >
                {servico.destaque && (
                  <div className="absolute top-0 left-0 right-0 bg-gold-500 text-black text-xs font-bold py-2 text-center">
                    ⭐ SERVIÇO DESTAQUE
                  </div>
                )}
                
                <div className={`h-2 bg-gradient-to-r ${servico.cor}`}></div>
                
                <div className={`p-6 ${servico.destaque ? 'pt-10' : ''}`}>
                  <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${servico.cor} flex items-center justify-center text-white mb-4 group-hover:scale-110 transition-transform duration-500 shadow-lg`}>
                    <servico.icon size={28} weight="duotone" />
                  </div>
                  
                  <h3 className="text-lg font-bold text-white mb-2">{servico.titulo}</h3>
                  <p className="text-gray-400 text-sm mb-4 leading-relaxed">{servico.descricao}</p>
                  
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
      <section className="py-20 bg-[#0B1221]">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-4">
              Como Usar Seus Benefícios
            </h2>
            <p className="text-gray-400 text-lg">
              Acessar nossos serviços e benefícios é simples e rápido.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8 max-w-5xl mx-auto">
            {[
              { num: '01', titulo: 'Associe-se', desc: 'Faça sua filiação online ou presencialmente', icon: Handshake },
              { num: '02', titulo: 'Baixe o App', desc: 'Tenha sua carteirinha digital sempre à mão', icon: DeviceMobile },
              { num: '03', titulo: 'Apresente-se', desc: 'Mostre sua carteirinha nos parceiros', icon: Tag },
              { num: '04', titulo: 'Aproveite', desc: 'Os descontos são aplicados na hora!', icon: Percent },
            ].map((passo, index) => (
              <div key={index} className="relative text-center group">
                {index < 3 && (
                  <div className="hidden md:block absolute top-10 left-1/2 w-full h-0.5 bg-gradient-to-r from-gold-500/50 to-transparent"></div>
                )}
                
                <div className="relative z-10 w-20 h-20 bg-[#050A18] border-2 border-gold-500/30 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:border-gold-500 transition-colors">
                  <passo.icon size={32} className="text-gold-400" weight="duotone" />
                </div>
                
                <div className="text-3xl font-display font-bold text-gold-500/30 mb-2">{passo.num}</div>
                <h3 className="text-lg font-bold text-white mb-1">{passo.titulo}</h3>
                <p className="text-gray-400 text-sm">{passo.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Canais de Atendimento */}
      <section className="py-20 bg-[#050A18]">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-4">
              Canais de Atendimento
            </h2>
            <p className="text-gray-400 text-lg">
              Estamos sempre prontos para atender você.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
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

      {/* CTA Final */}
      <section className="py-20 bg-gradient-to-r from-[#000e72] to-[#001090] relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-gold-500/10 rounded-full blur-[150px]"></div>
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-6">
              Ainda não é associado?
            </h2>
            <p className="text-blue-100/80 text-lg mb-8">
              Associe-se agora e comece a aproveitar todos esses benefícios!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="https://assego.net.br/associe/index.php"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-gold-500 hover:bg-gold-600 text-black font-bold py-4 px-10 rounded-full transition-all hover:scale-105 text-lg"
              >
                Quero Me Associar
                <ArrowRight size={24} weight="bold" />
              </a>
              <a 
                href="https://api.whatsapp.com/send?phone=5562992469099&text=Olá!%20Quero%20me%20associar%20à%20ASSEGO!"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white font-bold py-4 px-8 rounded-full transition-all hover:scale-105"
              >
                <WhatsappLogo size={24} weight="fill" />
                (62) 9 9246-9099
              </a>
            </div>
          </div>
        </div>
      </section>

    </main>
  )
}

export default Vantagens