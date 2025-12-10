/**
 * ========================================
 * Departamento Jurídico - Página Completa
 * ========================================
 */

import { useState, useEffect } from 'react'
import { Scales, Shield, Users, Gavel, MapPin, Phone, Clock, CheckCircle, TrendUp, CaretDown, Buildings, WhatsappLogo, ArrowRight } from '@phosphor-icons/react'
import MapaGoias from '../components/MapaGoias'

function Juridico() {
  // Estado para controlar o slide atual do carrossel
  const [currentSlide, setCurrentSlide] = useState(0)
  // Estado para expandir/recolher equipe
  const [showEquipe, setShowEquipe] = useState(false)
  // Estado para FAQ
  const [faqAberto, setFaqAberto] = useState(null)
  
  // Imagens do carrossel de fundo
  const backgroundImages = [
    'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=1920&q=80',
    'https://images.unsplash.com/photo-1505664194779-8beaceb93744?w=1920&q=80',
    'https://images.unsplash.com/photo-1479142506502-19b3a3b7ff33?w=1920&q=80',
  ]

  // Trocar slide automaticamente
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % backgroundImages.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [])

  // Equipe Jurídica
  const equipeJuridica = [
    { nome: 'Ten. Cláudio', cargo: 'Coordenador Jurídico', foto: '/diretoria/claudio.jpg' },
    { nome: 'Adv. Maria Silva', cargo: 'Advogada Sênior', foto: '/juridico/adv1.jpg' },
    { nome: 'Adv. João Santos', cargo: 'Advogado', foto: '/juridico/adv2.jpg' },
    { nome: 'Adv. Ana Costa', cargo: 'Advogada', foto: '/juridico/adv3.jpg' },
    { nome: 'Adv. Pedro Lima', cargo: 'Advogado', foto: '/juridico/adv4.jpg' },
    { nome: 'Adv. Carla Souza', cargo: 'Advogada', foto: '/juridico/adv5.jpg' },
    { nome: 'Adv. Ricardo Alves', cargo: 'Advogado', foto: '/juridico/adv6.jpg' },
    { nome: 'Adv. Fernanda Reis', cargo: 'Advogada', foto: '/juridico/adv7.jpg' },
    { nome: 'Adv. Lucas Martins', cargo: 'Advogado', foto: '/juridico/adv8.jpg' },
    { nome: 'Adv. Juliana Rocha', cargo: 'Advogada', foto: '/juridico/adv9.jpg' },
    { nome: 'Adv. Bruno Ferreira', cargo: 'Advogado', foto: '/juridico/adv10.jpg' },
    { nome: 'Adv. Patrícia Dias', cargo: 'Advogada', foto: '/juridico/adv11.jpg' },
  ]

  // Números do Jurídico
  const numeros = [
    { numero: '45', label: 'Advogados', icon: Users },
    { numero: '15', label: 'Regionais no Interior', icon: MapPin },
    { numero: '7.000+', label: 'Associados Atendidos', icon: Shield },
    { numero: '10.000+', label: 'Processos em Andamento', icon: Gavel },
    { numero: '23', label: 'Ações Coletivas', icon: TrendUp },
  ]

  // Perguntas Frequentes
  const faqData = [
    {
      pergunta: 'Como faço para me associar?',
      resposta: 'Para associar, se faz necessário o preenchimento do formulário o qual se encontra em nosso site ou ir de encontro com algum diretor ou na sede da ASSEGO e solicitar a ficha de filiação.'
    },
    {
      pergunta: 'Qual o valor mensal? Qual a forma de pagamento?',
      resposta: 'O valor do Clube Social é R$ 133,98. Caso houver interesse em incluir os serviços jurídicos será incluído uma taxa de R$ 33,49. O pagamento é feito no contracheque ou em conta.'
    },
    {
      pergunta: 'Posso aderir somente os serviços jurídicos?',
      resposta: 'Não, somente é possível contratar o clube social e incluir os serviços jurídicos.'
    }
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
                alt={`Jurídico ASSEGO ${index + 1}`}
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
              src="/logojuridico.png" 
              alt="Logo Juridico" 
              className="w-16 h-16 md:w-24 md:h-24 object-contain drop-shadow-2xl"
            />
            <div className="w-px h-16 md:h-20 bg-white/20"></div>
            <img 
              src="/logopre.png" 
              alt="Presidente ASSEGO" 
              className="w-16 h-20 md:w-24 md:h-28 object-contain drop-shadow-2xl"
            />
          </div>

          <span className="inline-flex items-center gap-2 bg-[#000e72]/30 border border-[#000e72]/50 text-blue-300 px-4 py-2 rounded-full text-sm font-bold mb-6">
            <Scales size={18} />
            REFERÊNCIA NACIONAL
          </span>
          <h1 className="font-display font-black text-4xl md:text-6xl text-white mb-4">
            Departamento <span className="text-blue-400">Jurídico</span>
          </h1>
          <p className="text-gray-300 text-lg md:text-xl max-w-3xl mx-auto mb-8">
            Defender seu direito, nossa missão!
          </p>

          {/* Indicadores do carrossel */}
          <div className="flex justify-center gap-2 mt-8">
            {backgroundImages.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  index === currentSlide 
                    ? 'w-8 bg-[#000e72]' 
                    : 'bg-white/30 hover:bg-white/50'
                }`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Números Impactantes */}
      <section className="py-16 bg-gradient-to-r from-[#000e72]/50 to-[#050A18]">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-5 gap-8 text-center">
            {numeros.map((item, index) => (
              <div key={index} className="group">
                <item.icon size={32} className="text-blue-400 mx-auto mb-3 group-hover:scale-110 transition-transform" />
                <div className="text-3xl md:text-4xl font-display font-bold text-white mb-1">{item.numero}</div>
                <p className="text-gray-400 text-xs uppercase tracking-wider">{item.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sobre o Departamento */}
      <section className="py-20 bg-[#0a0f1c]">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            
            {/* Texto */}
            <div>
              <span className="text-blue-400 font-bold tracking-widest text-xs uppercase">Excelência Jurídica</span>
              <h2 className="font-display font-bold text-3xl md:text-4xl text-white mt-2 mb-6">
                Um dos Pilares Mais Fortes da Entidade
              </h2>
              
              <div className="space-y-4 text-gray-300 leading-relaxed">
                <p>
                  O Departamento Jurídico da Associação dos Subtenentes e Sargentos PM & BM do Estado de Goiás (ASSEGO) consolidou-se como <strong className="text-white">um dos pilares mais fortes da entidade</strong>, tornando-se referência nacional pela eficiência na gestão e pelos resultados alcançados em defesa de seus associados.
                </p>
                <p>
                  A estrutura moderna e inovadora do departamento começou a ser desenvolvida antes mesmo da atual gestão, quando o <span className="text-blue-400">Subtenente Sérgio</span>, ainda antes de assumir a presidência da ASSEGO, foi responsável por estruturar e implementar tecnologias e sistemas com bases sólidas e modernas, tornando-o um modelo reconhecido nacionalmente.
                </p>
                <p>
                  Atualmente, o <strong className="text-white">Tenente Cláudio</strong> e sua equipe dão continuidade a esse legado, mantendo o compromisso com inovação, excelência e atendimento jurídico qualificado.
                </p>
              </div>
            </div>

            {/* Imagem */}
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-br from-[#000e72]/30 to-blue-900/20 rounded-3xl blur-2xl"></div>
              <div className="relative rounded-2xl overflow-hidden border-4 border-[#000e72]/30">
                <img 
                  src="/fotos/equipe-juridico.jpg"
                  alt="Equipe Jurídica ASSEGO"
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.target.src = 'https://images.unsplash.com/photo-1521791055366-0d553872125f?w=800&q=80'
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Destaque - Soma Milhões */}
      <section className="py-20 bg-gradient-to-r from-[#000e72] to-blue-900 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full blur-[150px]"></div>
        </div>
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="font-display font-black text-4xl md:text-5xl text-white mb-6">
              SOMA MILHÕES EM<br/>
              <span className="text-yellow-400">AÇÕES COLETIVAS E INDIVIDUAIS</span>
            </h2>
            <p className="text-white/80 text-lg mb-8 max-w-2xl mx-auto">
              O Departamento Jurídico da ASSEGO alcançou êxito em centenas de ações judiciais, garantindo a restituição de milhões de reais aos seus associados.
            </p>
            <div className="bg-white/10 backdrop-blur rounded-2xl p-8 border border-white/20">
              <p className="text-white text-lg leading-relaxed">
                Nos últimos anos, o Departamento Jurídico já conquistou <strong>valores significativos em ações coletivas e individuais</strong>, proporcionando melhorias reais na qualidade de vida e no bem-estar financeiro dos militares e suas famílias.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SEÇÃO: Escritórios pelo Goiás com MAPA GEOJSON */}
      <section className="py-20 bg-[#050A18]">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <span className="inline-flex items-center gap-2 bg-[#000e72]/50 text-blue-300 px-4 py-2 rounded-full text-sm font-bold mb-4">
              <Buildings size={18} />
              PRESENÇA ESTADUAL
            </span>
            <h2 className="font-display font-bold text-3xl md:text-4xl text-white mb-4">
              Escritórios por Todo o <span className="text-blue-400">Estado de Goiás</span>
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Nossa rede de atendimento jurídico cobre todo o estado, garantindo que você tenha 
              suporte especializado onde quer que esteja.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Mapa GeoJSON */}
            <div className="order-2 lg:order-1">
              <MapaGoias />
            </div>

            {/* Informações */}
            <div className="space-y-6 order-1 lg:order-2">
              <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-blue-500/20 rounded-xl flex items-center justify-center flex-shrink-0">
                    <MapPin size={24} className="text-blue-400" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-white mb-2">Cobertura Completa</h3>
                    <p className="text-gray-400 text-sm">
                      Mais de 15 pontos de atendimento estrategicamente localizados em todas as regiões do estado.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-blue-500/20 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Clock size={24} className="text-blue-400" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-white mb-2">Atendimento Ágil</h3>
                    <p className="text-gray-400 text-sm">
                      Advogados de plantão prontos para atender você em qualquer emergência, 24 horas por dia.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-blue-500/20 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Users size={24} className="text-blue-400" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-white mb-2">Equipe Especializada</h3>
                    <p className="text-gray-400 text-sm">
                      Advogados com experiência em direito militar e administrativo em cada escritório regional.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SEÇÃO: Consultar Processo */}
      <section className="py-16 bg-gradient-to-r from-green-600 to-green-700">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="text-center md:text-left">
              <h2 className="font-display font-bold text-2xl sm:text-3xl text-white mb-3">
                Consultar Processo
              </h2>
              <p className="text-white/90 max-w-lg">
                Faça sua consulta processual com mais facilidade através do nosso WhatsApp. 
                Acompanhe o andamento do seu caso de forma rápida e prática.
              </p>
            </div>
            <a
              href="https://api.whatsapp.com/send?phone=5562991152972&text=Ol%C3%A1%20quero%20saber%20como%20esta%20o%20andamento%20do%20meu%20processo."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-white hover:bg-gray-100 text-green-700 font-bold px-8 py-4 rounded-full transition-all hover:scale-105 shadow-lg"
            >
              <WhatsappLogo size={24} weight="fill" />
              Consultar Processo
            </a>
          </div>
        </div>
      </section>

      {/* SEÇÃO: Perguntas Frequentes */}
      <section className="py-20 bg-[#0a0f1c]">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <span className="inline-flex items-center gap-2 bg-blue-500/10 border border-blue-500/30 text-blue-400 px-4 py-2 rounded-full text-sm font-bold mb-4">
              FAQ
            </span>
            <h2 className="font-display font-bold text-3xl md:text-4xl text-white mb-4">
              Perguntas Frequentes
            </h2>
            <p className="text-gray-400">Tire suas dúvidas sobre associação e serviços</p>
          </div>

          <div className="max-w-3xl mx-auto space-y-4">
            {faqData.map((item, index) => (
              <div 
                key={index}
                className="bg-white/5 border border-white/10 rounded-2xl overflow-hidden"
              >
                <button
                  onClick={() => setFaqAberto(faqAberto === index ? null : index)}
                  className="w-full flex items-center justify-between p-5 sm:p-6 text-left"
                >
                  <span className="text-white font-medium pr-4">{item.pergunta}</span>
                  <CaretDown 
                    size={24} 
                    className={`text-blue-400 flex-shrink-0 transition-transform duration-300 ${
                      faqAberto === index ? 'rotate-180' : ''
                    }`}
                  />
                </button>
                <div 
                  className={`overflow-hidden transition-all duration-300 ${
                    faqAberto === index ? 'max-h-96 pb-5 sm:pb-6' : 'max-h-0'
                  }`}
                >
                  <p className="text-gray-400 px-5 sm:px-6">{item.resposta}</p>
                </div>
              </div>
            ))}
          </div>

          {/* CTA Associe-se */}
          <div className="text-center mt-12">
            <p className="text-gray-400 mb-4">Ainda tem dúvidas? Entre em contato conosco!</p>
            <a
              href="/#cta"
              className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-bold px-8 py-4 rounded-full transition-all hover:scale-105"
            >
              Associe-se Agora
              <ArrowRight size={20} weight="bold" />
            </a>
          </div>
        </div>
      </section>

      {/* Contato */}
      <section className="py-20 bg-[#050A18]">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <span className="text-blue-400 font-bold tracking-widest text-xs uppercase">Atendimento</span>
            <h2 className="font-display font-bold text-3xl md:text-4xl text-white mt-2">
              Entre em Contato
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="bg-white/5 border border-white/10 rounded-2xl p-6 text-center">
              <Phone size={32} className="text-blue-400 mx-auto mb-4" />
              <h3 className="text-white font-bold mb-2">Telefone</h3>
              <p className="text-gray-400">(62) 3281-3177</p>
            </div>

            <div className="bg-white/5 border border-white/10 rounded-2xl p-6 text-center">
              <Clock size={32} className="text-blue-400 mx-auto mb-4" />
              <h3 className="text-white font-bold mb-2">Horário</h3>
              <p className="text-gray-400">Seg a Sex: 8h às 18h</p>
            </div>

            <div className="bg-white/5 border border-white/10 rounded-2xl p-6 text-center">
              <MapPin size={32} className="text-blue-400 mx-auto mb-4" />
              <h3 className="text-white font-bold mb-2">Endereço</h3>
              <p className="text-gray-400">Sede ASSEGO - Goiânia</p>
            </div>
          </div>
        </div>
      </section>

      {/* Equipe Jurídica - Expandível */}
      <section className="py-20 bg-[#0a0f1c]">
        <div className="container mx-auto px-6">
          <div className="text-center mb-8">
            <span className="text-blue-400 font-bold tracking-widest text-xs uppercase">Time</span>
            <h2 className="font-display font-bold text-3xl md:text-4xl text-white mt-2 mb-4">
              Nossa Equipe
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto mb-8">
              Conheça os profissionais que trabalham diariamente para defender seus direitos.
            </p>

            {/* Botão Expandir/Recolher */}
            <button
              onClick={() => setShowEquipe(!showEquipe)}
              className="inline-flex items-center gap-2 bg-[#000e72] hover:bg-[#001090] text-white px-6 py-3 rounded-full font-bold transition-all duration-300"
            >
              {showEquipe ? 'Recolher Equipe' : 'Ver Equipe Completa'}
              <CaretDown 
                size={20} 
                className={`transition-transform duration-300 ${showEquipe ? 'rotate-180' : ''}`}
              />
            </button>
          </div>

          {/* Grid da Equipe - Expandível */}
          <div className={`overflow-hidden transition-all duration-500 ${
            showEquipe ? 'max-h-[2000px] opacity-100' : 'max-h-0 opacity-0'
          }`}>
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6 pt-8">
              {equipeJuridica.map((membro, index) => (
                <div key={index} className="group text-center">
                  {/* Foto com borda circular */}
                  <div className="relative mx-auto w-28 h-28 md:w-32 md:h-32 mb-4">
                    <div className="absolute inset-0 rounded-full border-4 border-[#000e72]/50 group-hover:border-blue-400 transition-colors duration-300"></div>
                    <div className="absolute inset-2 rounded-full overflow-hidden bg-gray-800">
                      <img 
                        src={membro.foto}
                        alt={membro.nome}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                        onError={(e) => {
                          e.target.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(membro.nome)}&background=000e72&color=fff&size=200`
                        }}
                      />
                    </div>
                  </div>
                  
                  {/* Info */}
                  <h3 className="text-white font-bold text-sm">{membro.nome}</h3>
                  <p className="text-gray-400 text-xs uppercase tracking-wider">{membro.cargo}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gradient-to-r from-[#000e72] to-blue-700">
        <div className="container mx-auto px-6 text-center">
          <h2 className="font-display font-bold text-2xl md:text-3xl text-white mb-4">
            Precisa de Assistência Jurídica?
          </h2>
          <p className="text-white/80 mb-8 max-w-xl mx-auto">
            Associe-se e tenha acesso a um dos melhores departamentos jurídicos do país.
          </p>
          <a 
            href="#filiar"
            className="inline-flex items-center gap-2 bg-white text-[#000e72] px-8 py-4 rounded-full font-bold hover:bg-gray-100 transition-all hover:scale-105"
          >
            QUERO ME ASSOCIAR
          </a>
        </div>
      </section>
    </div>
  )
}

export default Juridico