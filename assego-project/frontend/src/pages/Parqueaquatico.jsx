/**
 * ========================================
 * Parque Aquático - Park Club ASSEGO
 * ========================================
 */

import { useState, useEffect } from 'react'
import { 
  Drop, 
  SwimmingPool, 
  Sun, 
  Users, 
  Clock,
  MapPin,
  Calendar,
  ArrowRight,
  CheckCircle,
  Waves,
  Baby,
  Person,
  Warning,
  Prohibit,
  Car,
  CurrencyDollar,
  SpeakerHigh,
  Wine,
  ForkKnife,
  WhatsappLogo
} from '@phosphor-icons/react'

function ParqueAquatico() {
  const [currentSlide, setCurrentSlide] = useState(0)

  const backgroundImages = [
    '/public/foto2.JPG',
    '/public/foto4.JPG',
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % backgroundImages.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [])

  const atracoes = [
    {
      icon: SwimmingPool,
      titulo: 'Piscina Semiolímpica',
      descricao: 'Piscina semiolímpica aquecida para natação e atividades aquáticas.',
      cor: 'from-blue-500 to-blue-700'
    },
    {
      icon: Waves,
      titulo: 'Toboáguas',
      descricao: 'Toboáguas para crianças com total segurança.',
      cor: 'from-cyan-500 to-cyan-700'
    },
    {
      icon: Baby,
      titulo: 'Piscina Infantil',
      descricao: 'Área exclusiva para os pequenos com brinquedos aquáticos.',
      cor: 'from-pink-500 to-pink-700'
    },
    {
      icon: Sun,
      titulo: 'Deck Solar',
      descricao: 'Área de descanso com espreguiçadeiras e guarda-sóis.',
      cor: 'from-orange-500 to-orange-700'
    },
    {
      icon: Users,
      titulo: 'Quiosques',
      descricao: 'Espaço para confraternizações (somente com presença do associado ou cônjuge).',
      cor: 'from-green-500 to-green-700'
    },
    {
      icon: Person,
      titulo: 'Salva-vidas',
      descricao: 'Equipe de salva-vidas treinada em período integral.',
      cor: 'from-red-500 to-red-700'
    },
  ]

  const regrasPermitidas = [
    { icon: CheckCircle, texto: 'Uso de roupas de banho apropriadas nas piscinas' },
    { icon: SpeakerHigh, texto: 'Caixas de som com volume ambiente (sem atrapalhar quem está ao lado)' },
    { icon: Users, texto: 'Quiosque somente com presença do associado(a) ou cônjuge' },
    { icon: Car, texto: 'Estacionamento exclusivo para associados' },
  ]

  const regrasProibidas = [
    { icon: Wine, texto: 'Recipientes de vidro nas dependências do clube (garrafas de cerveja, refrigerante, sucos)' },
    { icon: Prohibit, texto: 'Entrada e uso de NARGUILÉ e CIGARROS ELETRÔNICOS' },
    { icon: ForkKnife, texto: 'Consumo de alimentos, petiscos e bebidas nas bordas e dentro das piscinas' },
  ]

  const horarios = [
    { dia: 'Segunda-feira', horario: 'Fechado', fechado: true },
    { dia: 'Terça a Sexta-feira', horario: '9:00 às 22:00', fechado: false },
    { dia: 'Sábado e Domingo', horario: '9:00 às 19:00', fechado: false },
    { dia: 'Feriados', horario: '9:00 às 19:00', fechado: false },
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

        <div className="container mx-auto px-6 relative z-10 pt-32 pb-16">
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
            
            {/* Lado Esquerdo - Texto */}
            <div className="flex-1 text-center lg:text-left">
              <div className="inline-flex items-center gap-2 bg-blue-500/20 border border-blue-500/30 rounded-full px-5 py-2 mb-6">
                <Drop size={18} weight="fill" className="text-blue-400" />
                <span className="text-sm text-blue-400 font-medium">Park Club ASSEGO</span>
              </div>
              
              <h1 className="font-display font-black text-4xl md:text-5xl lg:text-6xl text-white mb-6">
                Parque <span className="text-blue-400">Aquático</span>
              </h1>
              
              <p className="text-gray-300 text-lg md:text-xl max-w-xl mb-8">
                Diversão garantida para toda a família! Nosso parque aquático conta com 
                piscinas, toboáguas e área infantil em um ambiente seguro e acolhedor.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <a 
                  href="#atracoes"
                  className="inline-flex items-center justify-center gap-2 bg-blue-500 hover:bg-blue-600 text-white font-bold py-4 px-8 rounded-full transition-all hover:scale-105"
                >
                  Ver Atrações
                  <ArrowRight size={20} weight="bold" />
                </a>
                <a 
                  href="https://api.whatsapp.com/send/?phone=5562992787173&text&type=phone_number&app_absent=0"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 bg-green-500 hover:bg-green-600 text-white font-bold py-4 px-8 rounded-full transition-all hover:scale-105"
                >
                  <WhatsappLogo size={20} weight="fill" />
                  Atendimento
                </a>
              </div>
            </div>

            {/* Lado Direito - Logo */}
            <div className="flex-shrink-0">
              <img 
                src="/logoparque.png" 
                alt="Parque Aquático ASSEGO" 
                className="w-48 h-48 md:w-64 md:h-64 lg:w-80 lg:h-80 object-contain drop-shadow-2xl"
              />
            </div>

          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-2 z-10">
          {backgroundImages.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-2 h-2 rounded-full transition-all ${
                index === currentSlide ? 'bg-blue-500 w-6' : 'bg-white/30'
              }`}
            />
          ))}
        </div>
      </section>

      {/* Aviso Taxa de Convidados */}
      <section className="py-6 bg-gradient-to-r from-amber-500 to-orange-500">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center justify-center gap-4 text-center md:text-left">
            <div className="flex items-center gap-3">
              <Warning size={28} weight="fill" className="text-black" />
              <span className="text-black font-bold text-lg">ATENÇÃO:</span>
            </div>
            <p className="text-black font-medium">
              Taxa de <span className="font-black text-xl">R$ 20,00</span> para todos os convidados a partir de 13 anos 
              que adentrarem à área do Parque Aquático (incluindo bar e sauna).
            </p>
          </div>
        </div>
      </section>

      {/* Horários de Funcionamento */}
      <section className="py-12 bg-[#0B1221] border-y border-white/10">
        <div className="container mx-auto px-6">
          <h2 className="text-2xl font-display font-bold text-white mb-8 text-center">
            <Clock size={28} className="inline-block mr-2 text-blue-400" />
            Horário de Funcionamento
          </h2>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
            {horarios.map((item, index) => (
              <div 
                key={index} 
                className={`text-center p-4 rounded-2xl ${
                  item.fechado 
                    ? 'bg-red-500/20 border border-red-500/30' 
                    : 'bg-white/5 border border-white/10'
                }`}
              >
                <p className="text-gray-400 text-sm mb-2">{item.dia}</p>
                <p className={`font-bold text-lg ${item.fechado ? 'text-red-400' : 'text-white'}`}>
                  {item.horario}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Atrações */}
      <section id="atracoes" className="py-20 bg-[#050A18]">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-4">
              Nossas Atrações
            </h2>
            <p className="text-gray-400 text-lg">
              Conheça tudo o que o Park Club ASSEGO tem a oferecer.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {atracoes.map((atracao, index) => (
              <div 
                key={index}
                className="group bg-white/5 border border-white/10 rounded-3xl p-8 hover:border-blue-500/30 transition-all duration-500 hover:-translate-y-2"
              >
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${atracao.cor} flex items-center justify-center text-white text-3xl mb-6 group-hover:scale-110 transition-transform duration-500 shadow-lg`}>
                  <atracao.icon size={32} weight="duotone" />
                </div>
                
                <h3 className="text-xl font-bold text-white mb-3">{atracao.titulo}</h3>
                <p className="text-gray-400 leading-relaxed">{atracao.descricao}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Galeria */}
      <section className="py-20 bg-[#0B1221]">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-12 text-center">
            Galeria de Fotos
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              '/public/foto2.JPG',
              '/public/foto1.JPG',
              '/public/foto20.JPG',
              '/public/foto4.JPG',
            ].map((img, index) => (
              <div key={index} className="group relative aspect-square rounded-2xl overflow-hidden cursor-pointer">
                <img 
                  src={img} 
                  alt={`Parque Aquático ${index + 1}`}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-blue-500/0 group-hover:bg-blue-500/20 transition-colors"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Regras de Uso */}
      <section className="py-20 bg-[#050A18]">
        <div className="container mx-auto px-6">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-4 text-center">
              Regras de Uso
            </h2>
            <p className="text-gray-400 text-center mb-12">
              Para garantir a segurança e o bem-estar de todos, siga as orientações abaixo.
            </p>

            <div className="grid md:grid-cols-2 gap-8">
              
              {/* Permitido */}
              <div className="bg-green-500/10 border border-green-500/30 rounded-3xl p-8">
                <h3 className="text-xl font-bold text-green-400 mb-6 flex items-center gap-2">
                  <CheckCircle size={24} weight="fill" />
                  Orientações
                </h3>
                <div className="space-y-4">
                  {regrasPermitidas.map((regra, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <CheckCircle size={20} weight="fill" className="text-green-500 flex-shrink-0 mt-1" />
                      <span className="text-gray-300">{regra.texto}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Proibido */}
              <div className="bg-red-500/10 border border-red-500/30 rounded-3xl p-8">
                <h3 className="text-xl font-bold text-red-400 mb-6 flex items-center gap-2">
                  <Prohibit size={24} weight="fill" />
                  Proibições
                </h3>
                <div className="space-y-4">
                  {regrasProibidas.map((regra, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <Prohibit size={20} weight="fill" className="text-red-500 flex-shrink-0 mt-1" />
                      <span className="text-gray-300">{regra.texto}</span>
                    </div>
                  ))}
                </div>
              </div>

            </div>

            {/* Aviso Estacionamento */}
            <div className="mt-8 bg-amber-500/20 border border-amber-500/30 rounded-2xl p-6 flex items-center gap-4">
              <Car size={32} className="text-amber-400 flex-shrink-0" />
              <p className="text-amber-200 font-medium">
                <span className="font-bold">ATENÇÃO:</span> O estacionamento é exclusivo para associados.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-blue-800 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-[150px]"></div>
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-6">
              Venha se Refrescar!
            </h2>
            <p className="text-blue-100/80 text-lg mb-8">
              O Park Club ASSEGO espera você e sua família para momentos inesquecíveis.
            </p>
            <a 
              href="https://assego.net.br/associe/index.php"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-white text-blue-600 font-bold py-4 px-10 rounded-full transition-all hover:scale-105 text-lg"
            >
              Quero Me Associar
              <ArrowRight size={24} weight="bold" />
            </a>
          </div>
        </div>
      </section>

    </main>
  )
}

export default ParqueAquatico