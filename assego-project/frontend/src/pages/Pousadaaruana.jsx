/**
 * ========================================
 * Pousada Aruanã - Hospedagem no Rio Araguaia
 * ========================================
 */

import { useState, useEffect } from 'react'
import { 
  House, 
  FishSimple, 
  Boat, 
  Tree,
  Sun,
  Clock,
  MapPin,
  ArrowRight,
  CheckCircle,
  Star,
  Mountains,
  Users,
  Bed,
  Coffee,
  Car,
  SwimmingPool,
  Tent,
  Sparkle,
  Heart,
  WhatsappLogo,
  CaretLeft,
  CaretRight,
  NavigationArrow
} from '@phosphor-icons/react'

function PousadaAruana() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [gallerySlide, setGallerySlide] = useState(0)

  const backgroundImages = [
    '/public/foto32.jpg',
    '/public/foto33.jpg',
    '/public/foto34.jpg',
  ]

  const galleryImages = [
    '/public/foto32.jpg',
    '/public/foto33.jpg',
    '/public/foto34.jpg',
    '/public/foto35.jpg',
    '/public/foto36.jpg',
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % backgroundImages.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [])

  // Auto-play galeria
  useEffect(() => {
    const interval = setInterval(() => {
      setGallerySlide((prev) => (prev + 1) % galleryImages.length)
    }, 4000)
    return () => clearInterval(interval)
  }, [])

  const diferenciais = [
    {
      icon: Sparkle,
      titulo: 'Estrutura Renovada',
      descricao: 'Paisagismo moderno e infraestrutura completamente revitalizada para seu conforto.',
      cor: 'from-gold-500 to-gold-700'
    },
    {
      icon: Bed,
      titulo: 'Novos Chalés',
      descricao: 'Ambientes amplos, modernos e acolhedores com privacidade e funcionalidade.',
      cor: 'from-orange-500 to-orange-700'
    },
    {
      icon: SwimmingPool,
      titulo: 'Piscina Revitalizada',
      descricao: 'Ambiente seguro e agradável para todas as faixas etárias e integração familiar.',
      cor: 'from-blue-500 to-blue-700'
    },
    {
      icon: Tent,
      titulo: 'Área de Camping',
      descricao: 'Opção versátil para quem busca contato direto com a natureza sem abrir mão do conforto.',
      cor: 'from-green-500 to-green-700'
    },
    {
      icon: FishSimple,
      titulo: 'Pesca Esportiva',
      descricao: 'O Rio Araguaia é um dos melhores destinos para pesca esportiva do Brasil.',
      cor: 'from-cyan-500 to-cyan-700'
    },
    {
      icon: Sun,
      titulo: 'Praias de Água Doce',
      descricao: 'Praias de areias brancas durante a temporada de seca (junho a setembro).',
      cor: 'from-amber-500 to-amber-700'
    },
  ]

  const conquistas = [
    {
      icon: House,
      valor: '2.000+',
      label: 'm² de área construída'
    },
    {
      icon: Bed,
      valor: 'Novos',
      label: 'Chalés modernos'
    },
    {
      icon: SwimmingPool,
      valor: 'Piscina',
      label: 'Revitalizada'
    },
    {
      icon: Tent,
      valor: 'Camping',
      label: 'Estruturado'
    },
  ]

  const atrativos = [
    {
      icon: FishSimple,
      titulo: 'Pesca Esportiva',
      descricao: 'Tucunaré, Pirarucu, Pintado e diversas espécies em um dos melhores rios do Brasil.',
      cor: 'from-blue-500 to-blue-700'
    },
    {
      icon: Boat,
      titulo: 'Passeios de Barco',
      descricao: 'Explore as belezas do Rio Araguaia em passeios inesquecíveis.',
      cor: 'from-cyan-500 to-cyan-700'
    },
    {
      icon: Sun,
      titulo: 'Praias de Água Doce',
      descricao: 'Praias de areias brancas e água cristalina durante a temporada.',
      cor: 'from-orange-500 to-orange-700'
    },
    {
      icon: Tree,
      titulo: 'Natureza Preservada',
      descricao: 'Fauna e flora do cerrado em seu estado mais puro.',
      cor: 'from-green-500 to-green-700'
    },
    {
      icon: Mountains,
      titulo: 'Trilhas Ecológicas',
      descricao: 'Caminhos pela natureza com guias especializados.',
      cor: 'from-emerald-500 to-emerald-700'
    },
    {
      icon: Users,
      titulo: 'Área de Convivência',
      descricao: 'Espaços para confraternização, encontros e integração familiar.',
      cor: 'from-purple-500 to-purple-700'
    },
  ]

  const comodidades = [
    'Wi-Fi nas áreas comuns',
    'Estacionamento',
    'Churrasqueiras',
    'Área de lazer',
    'Restaurante',
    'Recepção',
  ]

  return (
    <main className="bg-[#050A18] min-h-screen">
      
      {/* Hero Section */}
      <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden">
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
          <div className="absolute inset-0 bg-gradient-to-b from-[#050A18] via-[#050A18]/60 to-[#050A18]"></div>
        </div>

        <div className="container mx-auto px-6 relative z-10 pt-32 pb-16 text-center">
          <div className="inline-flex items-center gap-2 bg-green-500/20 border border-green-500/30 rounded-full px-5 py-2 mb-6">
            <House size={18} className="text-green-400" />
            <span className="text-sm text-green-400 font-medium">Vale do Araguaia - Aruanã/GO</span>
          </div>
          
          <h1 className="font-display font-black text-4xl md:text-5xl lg:text-6xl text-white mb-6">
            Pousada <span className="text-green-400">Aruanã</span>
          </h1>
          
          <p className="text-gray-300 text-lg md:text-xl max-w-3xl mx-auto mb-4">
            Transformações que elevam o padrão de bem-estar e conforto para a Família ASSEGO.
          </p>
          
          <p className="text-gray-400 text-base max-w-2xl mx-auto mb-8">
            Com mais de 2.000 m² de área construída, paisagismo moderno e estrutura renovada, 
            a pousada é referência em infraestrutura e lazer no Vale do Araguaia.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="#infraestrutura"
              className="inline-flex items-center justify-center gap-2 bg-green-500 hover:bg-green-600 text-white font-bold py-4 px-8 rounded-full transition-all hover:scale-105"
            >
              Conhecer Estrutura
              <ArrowRight size={20} weight="bold" />
            </a>
            <a 
              href="https://api.whatsapp.com/send?phone=5562992469099&text=Olá!%20Gostaria%20de%20fazer%20uma%20reserva%20na%20Pousada%20Aruanã"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-green-600 hover:bg-green-700 text-white font-bold py-4 px-8 rounded-full transition-all hover:scale-105"
            >
              <WhatsappLogo size={20} weight="fill" />
              Fazer Reserva
            </a>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-2 z-10">
          {backgroundImages.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-2 h-2 rounded-full transition-all ${
                index === currentSlide ? 'bg-green-500 w-6' : 'bg-white/30'
              }`}
            />
          ))}
        </div>
      </section>

      {/* Conquistas/Números */}
      <section className="py-12 bg-[#0B1221] border-y border-white/10">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {conquistas.map((item, index) => (
              <div key={index} className="text-center">
                <item.icon size={32} className="text-green-400 mx-auto mb-2" />
                <p className="text-2xl font-bold text-white">{item.valor}</p>
                <p className="text-gray-400 text-sm">{item.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Nova Infraestrutura */}
      <section id="infraestrutura" className="py-20 bg-[#050A18]">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 bg-gold-500/20 border border-gold-500/30 rounded-full px-5 py-2 mb-6">
              <Sparkle size={18} className="text-gold-400" />
              <span className="text-sm text-gold-400 font-medium">Estrutura Renovada</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-4">
              Um Novo Patamar de <span className="text-green-400">Infraestrutura</span>
            </h2>
            <p className="text-gray-400 text-lg">
              O projeto de construção e renovação transformou o complexo em um ambiente completo 
              de convivência e lazer, pensado para atender às diversas necessidades dos associados e seus familiares.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {diferenciais.map((item, index) => (
              <div 
                key={index}
                className="group bg-white/5 border border-white/10 rounded-2xl p-6 hover:border-green-500/30 transition-all duration-500 hover:-translate-y-2"
              >
                <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${item.cor} flex items-center justify-center text-white mb-4 group-hover:scale-110 transition-transform duration-500 shadow-lg`}>
                  <item.icon size={28} weight="duotone" />
                </div>
                
                <h3 className="text-lg font-bold text-white mb-2">{item.titulo}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{item.descricao}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Seção Chalés */}
      <section className="py-20 bg-[#0B1221]">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            
            {/* Imagem/Carrossel */}
            <div className="relative rounded-3xl overflow-hidden group">
              <div className="aspect-[4/3] relative">
                {galleryImages.map((img, index) => (
                  <div
                    key={index}
                    className={`absolute inset-0 transition-opacity duration-500 ${
                      index === gallerySlide ? 'opacity-100' : 'opacity-0'
                    }`}
                  >
                    <img 
                      src={img} 
                      alt={`Pousada Aruanã - Foto ${index + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </div>
                ))}
              </div>
              
              {/* Navegação */}
              <button
                onClick={() => setGallerySlide((prev) => (prev - 1 + galleryImages.length) % galleryImages.length)}
                className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-black/50 hover:bg-black/70 rounded-full flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity"
              >
                <CaretLeft size={24} weight="bold" />
              </button>
              <button
                onClick={() => setGallerySlide((prev) => (prev + 1) % galleryImages.length)}
                className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-black/50 hover:bg-black/70 rounded-full flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity"
              >
                <CaretRight size={24} weight="bold" />
              </button>

              {/* Indicadores */}
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                {galleryImages.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setGallerySlide(index)}
                    className={`w-2 h-2 rounded-full transition-all ${
                      index === gallerySlide ? 'bg-white w-6' : 'bg-white/50'
                    }`}
                  />
                ))}
              </div>
            </div>

            {/* Conteúdo */}
            <div>
              <div className="inline-flex items-center gap-2 bg-orange-500/20 border border-orange-500/30 rounded-full px-4 py-1 mb-4">
                <Bed size={16} className="text-orange-400" />
                <span className="text-xs text-orange-400 font-medium">Novos Chalés</span>
              </div>

              <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-6">
                Ambientes Modernos e <span className="text-green-400">Acolhedores</span>
              </h2>
              
              <p className="text-gray-300 mb-6 leading-relaxed">
                Os novos chalés foram preparados para receber os associados e dependentes com 
                conforto, privacidade e funcionalidade. Cada detalhe foi pensado e planejado 
                para refletir o cuidado da entidade com a qualidade de vida de seus membros.
              </p>

              <div className="grid grid-cols-2 gap-4 mb-8">
                {[
                  'Ambientes amplos',
                  'Móveis modernos',
                  'Varanda privativa',
                  'Ventilação natural',
                  'Banheiro privativo',
                  'Roupas de cama',
                ].map((item, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <CheckCircle size={18} weight="fill" className="text-green-500" />
                    <span className="text-gray-300 text-sm">{item}</span>
                  </div>
                ))}
              </div>

              <a 
                href="https://api.whatsapp.com/send?phone=5562992469099&text=Olá!%20Gostaria%20de%20saber%20sobre%20os%20chalés%20da%20Pousada%20Aruanã"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-6 rounded-xl transition-all hover:scale-105"
              >
                <WhatsappLogo size={20} weight="fill" />
                Reservar Chalé
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Piscina e Camping */}
      <section className="py-20 bg-[#050A18]">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-8">
            
            {/* Piscina */}
            <div className="bg-gradient-to-br from-blue-900/30 to-blue-800/20 border border-blue-500/30 rounded-3xl p-8">
              <div className="w-14 h-14 bg-blue-500 rounded-xl flex items-center justify-center mb-6">
                <SwimmingPool size={28} className="text-white" weight="duotone" />
              </div>
              
              <h3 className="text-2xl font-display font-bold text-white mb-4">
                Piscina Revitalizada
              </h3>
              
              <p className="text-gray-300 mb-6 leading-relaxed">
                Ambiente seguro e agradável, pensado para atender todas as faixas etárias 
                e proporcionar momentos de lazer e integração familiar.
              </p>

              <div className="space-y-3">
                {[
                  'Área para adultos e crianças',
                  'Deck com espreguiçadeiras',
                  'Ambiente seguro',
                  'Paisagismo renovado',
                ].map((item, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <CheckCircle size={18} weight="fill" className="text-blue-400" />
                    <span className="text-gray-300 text-sm">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Camping */}
            <div className="bg-gradient-to-br from-green-900/30 to-green-800/20 border border-green-500/30 rounded-3xl p-8">
              <div className="w-14 h-14 bg-green-500 rounded-xl flex items-center justify-center mb-6">
                <Tent size={28} className="text-white" weight="duotone" />
              </div>
              
              <h3 className="text-2xl font-display font-bold text-white mb-4">
                Área de Camping
              </h3>
              
              <p className="text-gray-300 mb-6 leading-relaxed">
                Opção versátil para quem busca maior contato direto com a natureza, 
                mas não abre mão da segurança, infraestrutura adequada e conforto.
              </p>

              <div className="space-y-3">
                {[
                  'Área demarcada',
                  'Infraestrutura de apoio',
                  'Banheiros próximos',
                  'Segurança 24h',
                ].map((item, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <CheckCircle size={18} weight="fill" className="text-green-400" />
                    <span className="text-gray-300 text-sm">{item}</span>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* O que fazer */}
      <section className="py-20 bg-[#0B1221]">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-4">
              O que fazer em <span className="text-green-400">Aruanã</span>
            </h2>
            <p className="text-gray-400 text-lg">
              Aventura, descanso e contato com a natureza. O Vale do Araguaia tem tudo isso!
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {atrativos.map((atrativo, index) => (
              <div 
                key={index}
                className="group bg-white/5 border border-white/10 rounded-2xl p-6 hover:border-green-500/30 transition-all duration-500 hover:-translate-y-2"
              >
                <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${atrativo.cor} flex items-center justify-center text-white mb-4 group-hover:scale-110 transition-transform duration-500 shadow-lg`}>
                  <atrativo.icon size={28} weight="duotone" />
                </div>
                
                <h3 className="text-lg font-bold text-white mb-2">{atrativo.titulo}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{atrativo.descricao}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Temporada de Pesca */}
      <section className="py-20 bg-[#050A18]">
        <div className="container mx-auto px-6">
          <div className="max-w-5xl mx-auto bg-gradient-to-br from-cyan-900/40 to-blue-900/30 border border-cyan-500/30 rounded-3xl p-10 md:p-16">
            <div className="grid md:grid-cols-2 gap-10 items-center">
              <div>
                <FishSimple size={48} className="text-cyan-400 mb-6" />
                <h2 className="text-3xl font-display font-bold text-white mb-4">
                  Temporada de Pesca
                </h2>
                <p className="text-gray-300 mb-6">
                  O Rio Araguaia é conhecido mundialmente pela variedade de peixes 
                  e pela pesca esportiva. Durante a temporada (junho a setembro), 
                  as praias de água doce surgem e transformam a região em um 
                  verdadeiro paraíso.
                </p>
                
                <div className="space-y-3">
                  {[
                    'Tucunaré, Pirarucu, Pintado',
                    'Praias de areia branca',
                    'Água cristalina',
                    'Guias de pesca disponíveis'
                  ].map((item, index) => (
                    <div key={index} className="flex items-center gap-2">
                      <CheckCircle size={20} weight="fill" className="text-cyan-400" />
                      <span className="text-gray-300">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="relative">
                <div className="bg-cyan-500/20 border border-cyan-500/30 rounded-2xl p-6 text-center">
                  <FishSimple size={64} className="text-cyan-400 mx-auto mb-4" />
                  <h3 className="text-xl font-bold text-white mb-2">Melhor Época</h3>
                  <p className="text-3xl font-display font-bold text-cyan-400 mb-2">Junho a Setembro</p>
                  <p className="text-gray-400 text-sm">Temporada de praias e pesca esportiva</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Propósito */}
      <section className="py-20 bg-[#0B1221]">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <Heart size={48} className="text-green-400 mx-auto mb-6" />
            
            <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-6">
              Propósito que se Vê nos <span className="text-green-400">Detalhes</span>
            </h2>
            
            <p className="text-gray-300 text-lg mb-8 leading-relaxed">
              A nova pousada da ASSEGO em Aruanã reflete a linha de trabalho que tem norteado a associação: 
              atenção contínua às necessidades do associado, valorização das bases e investimentos consistentes 
              em infraestrutura. Cada detalhe, desde os chalés até as áreas de convivência e lazer, foi pensado 
              e planejado para refletir o cuidado da entidade com a qualidade de vida de seus membros e associados.
            </p>

            <p className="text-gray-400 leading-relaxed">
              Com isso, a pousada torna-se ponto de encontro, símbolo de integração, acolhimento e 
              fortalecimento da associação. Mais do que um local de lazer, a pousada consolida-se como 
              um patrimônio coletivo, símbolo de conquistas, da representatividade da ASSEGO e do 
              cuidado permanente com os militares e suas famílias.
            </p>
          </div>
        </div>
      </section>

      {/* Localização */}
      <section className="py-20 bg-[#050A18]">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white/5 border border-white/10 rounded-3xl p-8 md:p-10">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <MapPin size={32} className="text-green-400 mb-4" />
                  <h3 className="text-2xl font-display font-bold text-white mb-4">
                    Como Chegar
                  </h3>
                  <p className="text-gray-400 mb-6">
                    A Pousada ASSEGO Aruanã está localizada no coração do Vale do Araguaia, 
                    a aproximadamente 310 km de Goiânia.
                  </p>
                  
                  <div className="space-y-3 mb-6">
                    <div className="flex items-center gap-3">
                      <Car size={20} className="text-green-400" />
                      <span className="text-gray-300">310 km de Goiânia (4h de carro)</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <MapPin size={20} className="text-green-400" />
                      <span className="text-gray-300">Aruanã - GO</span>
                    </div>
                  </div>

                  <a 
                    href="https://maps.app.goo.gl/aruana"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-6 rounded-xl transition-all"
                  >
                    <NavigationArrow size={20} weight="fill" />
                    Ver no Mapa
                  </a>
                </div>

                <div className="bg-green-500/10 border border-green-500/30 rounded-2xl p-6">
                  <h4 className="text-lg font-bold text-white mb-4">Comodidades</h4>
                  <div className="grid grid-cols-2 gap-3">
                    {comodidades.map((item, index) => (
                      <div key={index} className="flex items-center gap-2">
                        <CheckCircle size={16} weight="fill" className="text-green-500" />
                        <span className="text-gray-300 text-sm">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-r from-green-700 to-green-900 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-[150px]"></div>
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-6">
              Venha Viver essa Experiência!
            </h2>
            <p className="text-green-100/80 text-lg mb-8">
              Reserve já sua estadia na Pousada ASSEGO Aruanã e conecte-se com a natureza.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="https://api.whatsapp.com/send?phone=5562992469099&text=Olá!%20Gostaria%20de%20fazer%20uma%20reserva%20na%20Pousada%20Aruanã"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-white text-green-700 font-bold py-4 px-8 rounded-full transition-all hover:scale-105"
              >
                <WhatsappLogo size={20} weight="fill" />
                Fazer Reserva
              </a>
              <a 
                href="https://assego.net.br/associe/index.php"
                target="_blank"
                rel="noopener noreferrer"
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

export default PousadaAruana