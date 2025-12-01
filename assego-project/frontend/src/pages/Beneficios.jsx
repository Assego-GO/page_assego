/**
 * ========================================
 * Benefícios - Vantagens de ser Associado
 * ========================================
 */

import { useState, useEffect } from 'react'
import { 
  Shield, 
  Scales, 
  FirstAid, 
  Tooth, 
  GraduationCap, 
  Car, 
  House, 
  Percent, 
  Users, 
  HandHeart,
  CheckCircle,
  Star,
  ArrowRight,
  Phone
} from '@phosphor-icons/react'

function Beneficios() {
  const [currentSlide, setCurrentSlide] = useState(0)

  // Imagens do carrossel de fundo
  const backgroundImages = [
    'https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=1920&q=80',
    'https://images.unsplash.com/photo-1552664730-d307ca884978?w=1920&q=80',
    'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=1920&q=80',
  ]

  // Trocar slide automaticamente
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % backgroundImages.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [])

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
      icon: FirstAid,
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

  // Estatísticas
  const estatisticas = [
    { numero: '5.000+', label: 'Associados Ativos' },
    { numero: '150+', label: 'Parceiros Conveniados' },
    { numero: '24h', label: 'Suporte Jurídico' },
    { numero: '67', label: 'Anos de História' },
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
          <div className="inline-flex items-center gap-2 bg-gold-500/20 border border-gold-500/30 rounded-full px-5 py-2 mb-6">
            <Star size={18} weight="fill" className="text-gold-400" />
            <span className="text-sm text-gold-400 font-medium">Exclusivo para Associados</span>
          </div>
          
          <h1 className="font-display font-black text-4xl md:text-5xl lg:text-6xl text-white mb-6">
            Benefícios que <span className="text-gold-400">Transformam</span>
          </h1>
          
          <p className="text-gray-300 text-lg md:text-xl max-w-3xl mx-auto mb-8">
            Ser associado ASSEGO é ter acesso a uma rede completa de vantagens pensadas 
            para você e sua família. Conheça todos os benefícios que oferecemos.
          </p>

          <a 
            href="#beneficios"
            className="inline-flex items-center gap-2 bg-gold-500 hover:bg-gold-600 text-black font-bold py-4 px-8 rounded-full transition-all hover:scale-105"
          >
            Conhecer Benefícios
            <ArrowRight size={20} weight="bold" />
          </a>
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

      {/* Estatísticas */}
      <section className="py-12 bg-[#0B1221] border-y border-white/10">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {estatisticas.map((stat, index) => (
              <div key={index} className="text-center">
                <p className="text-3xl md:text-4xl font-display font-bold text-gold-400 mb-2">
                  {stat.numero}
                </p>
                <p className="text-gray-400 text-sm uppercase tracking-wider">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefícios Principais */}
      <section id="beneficios" className="py-20 bg-[#050A18]">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="flex items-center justify-center gap-3 mb-4">
              <span className="w-12 h-1 bg-gold-500 rounded-full"></span>
              <Shield size={32} className="text-gold-400" />
              <span className="w-12 h-1 bg-gold-500 rounded-full"></span>
            </div>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-4">
              Benefícios Principais
            </h2>
            <p className="text-gray-400 text-lg">
              Conheça as principais vantagens que você terá ao se tornar um associado ASSEGO.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {beneficiosPrincipais.map((beneficio, index) => (
              <div 
                key={index}
                className={`group relative bg-white/5 border border-white/10 rounded-3xl p-8 hover:border-gold-500/30 transition-all duration-500 hover:-translate-y-2 ${
                  beneficio.destaque ? 'md:col-span-2 lg:col-span-1 ring-2 ring-gold-500/20' : ''
                }`}
              >
                {beneficio.destaque && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-gold-500 text-black text-xs font-bold px-4 py-1 rounded-full">
                    MAIS PROCURADO
                  </div>
                )}
                
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${beneficio.cor} flex items-center justify-center text-white text-3xl mb-6 group-hover:scale-110 transition-transform duration-500 shadow-lg`}>
                  <beneficio.icon size={32} weight="duotone" />
                </div>
                
                <h3 className="text-xl font-bold text-white mb-3">{beneficio.titulo}</h3>
                <p className="text-gray-400 leading-relaxed">{beneficio.descricao}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefícios Adicionais */}
      <section className="py-20 bg-[#0B1221]">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            
            {/* Lista de Benefícios */}
            <div>
              <div className="flex items-center gap-3 mb-6">
                <span className="w-1 h-8 bg-gold-500 rounded-full"></span>
                <h2 className="text-3xl md:text-4xl font-display font-bold text-white">
                  E muito mais...
                </h2>
              </div>
              
              <p className="text-gray-400 text-lg mb-8">
                Além dos benefícios principais, você terá acesso a dezenas de outras vantagens exclusivas.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {beneficiosAdicionais.map((item, index) => (
                  <div 
                    key={index}
                    className="flex items-center gap-3 bg-white/5 rounded-xl p-4 hover:bg-white/10 transition-colors"
                  >
                    <CheckCircle size={24} weight="fill" className="text-green-500 flex-shrink-0" />
                    <span className="text-gray-300 text-sm">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Card CTA */}
            <div className="relative">
              <div className="absolute -top-4 -left-4 w-full h-full border-2 border-gold-500/30 rounded-3xl"></div>
              <div className="relative bg-gradient-to-br from-[#000e72] to-[#001090] rounded-3xl p-10 text-center">
                <div className="w-20 h-20 bg-gold-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
                  <HandHeart size={40} className="text-gold-400" />
                </div>
                
                <h3 className="text-2xl font-display font-bold text-white mb-4">
                  Faça Parte da Nossa Família
                </h3>
                
                <p className="text-blue-100/80 mb-8">
                  Junte-se a mais de 5.000 associados que já aproveitam todos esses benefícios.
                </p>

                <a 
                  href="#filiar"
                  className="inline-flex items-center gap-2 bg-gold-500 hover:bg-gold-600 text-black font-bold py-4 px-8 rounded-full transition-all hover:scale-105 w-full justify-center"
                >
                  Quero Me Associar
                  <ArrowRight size={20} weight="bold" />
                </a>

                <div className="mt-6 pt-6 border-t border-white/10">
                  <p className="text-blue-100/60 text-sm mb-2">Dúvidas? Fale conosco</p>
                  <a href="tel:6232813177" className="inline-flex items-center gap-2 text-white font-bold hover:text-gold-400 transition">
                    <Phone size={20} />
                    (62) 3281-3177
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Depoimento */}
      <section className="py-20 bg-[#050A18]">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex justify-center gap-1 mb-6">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={24} weight="fill" className="text-gold-400" />
              ))}
            </div>
            
            <blockquote className="text-2xl md:text-3xl text-white font-light italic mb-8 leading-relaxed">
              "Ser associado ASSEGO mudou minha vida. A assessoria jurídica me ajudou em um momento 
              difícil e os benefícios para minha família são incríveis. Recomendo a todos os colegas."
            </blockquote>
            
            <div className="flex items-center justify-center gap-4">
              <div className="w-16 h-16 bg-gradient-to-br from-gold-400 to-gold-600 rounded-full flex items-center justify-center text-black font-bold text-xl">
                SG
              </div>
              <div className="text-left">
                <p className="text-white font-bold">Sgt. Silva</p>
                <p className="text-gray-400 text-sm">Associado há 15 anos</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-20 bg-gradient-to-r from-[#000e72] to-[#001090] relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-gold-500/10 rounded-full blur-[150px]"></div>
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-6">
              Não perca mais tempo!
            </h2>
            <p className="text-blue-100/80 text-lg mb-8">
              Associe-se agora e comece a aproveitar todos os benefícios imediatamente.
              O processo é 100% online e seguro.
            </p>
            <a 
              href="#filiar"
              className="inline-flex items-center gap-2 bg-gold-500 hover:bg-gold-600 text-black font-bold py-4 px-10 rounded-full transition-all hover:scale-105 text-lg"
            >
              Associar-se Agora
              <ArrowRight size={24} weight="bold" />
            </a>
          </div>
        </div>
      </section>

    </main>
  )
}

export default Beneficios