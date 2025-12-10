/**
 * ========================================
 * JuridicoSection - Seção do Jurídico na Home
 * ========================================
 */

import { Link } from 'react-router-dom'
import { Scales, Shield, Users, Gavel, ArrowRight, CheckCircle } from '@phosphor-icons/react'

function JuridicoSection() {
  const destaques = [
    { numero: '+45', label: 'Advogados' },
    { numero: '+15', label: 'Escritórios' },
    { numero: '40.000+', label: 'Atendidos' },
    { numero: '23', label: 'Ações Coletivas' },
  ]

  const servicos = [
    'Diferenças Salariais',
    'Promoções',
    'Ações Coletivas',
    'Defesa Administrativa',
  ]

  return (
    <section className="py-24 bg-gradient-to-br from-[#000e72] via-[#001090] to-[#000a50] relative overflow-hidden">
      {/* Elementos decorativos */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-400/10 rounded-full blur-[150px]"></div>
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-white/5 rounded-full blur-[100px]"></div>
      
      {/* Ícone de fundo */}
      <div className="absolute right-10 top-1/2 -translate-y-1/2 opacity-5">
        <Scales size={400} weight="thin" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Conteúdo */}
          <div className="reveal">
            <span className="inline-flex items-center gap-2 bg-white/10 border border-white/20 text-white px-4 py-2 rounded-full text-xs font-bold mb-6">
              <Scales size={16} />
              REFERÊNCIA NACIONAL
            </span>
            
            <h2 className="font-display font-black text-4xl md:text-5xl text-white mb-6 leading-tight">
              Departamento<br />
              <span className="text-blue-300">Jurídico</span>
            </h2>
            
            <p className="text-blue-100/80 text-lg mb-8 leading-relaxed">
              Defender seu direito, nossa missão! Um dos pilares mais fortes da ASSEGO, 
              tornando-se referência nacional pela eficiência e resultados alcançados em 
              defesa de seus associados.
            </p>

            {/* Serviços */}
            <div className="grid grid-cols-2 gap-3 mb-8">
              {servicos.map((servico, index) => (
                <div key={index} className="flex items-center gap-2">
                  <CheckCircle size={18} weight="fill" className="text-green-400" />
                  <span className="text-white text-sm">{servico}</span>
                </div>
              ))}
            </div>

            <Link 
              to="/juridico"
              className="inline-flex items-center gap-2 bg-white text-[#000e72] px-6 py-3 rounded-full font-bold hover:bg-blue-100 transition-all hover:scale-105 group"
            >
              Conhecer o Jurídico
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          {/* Números */}
          <div className="reveal">
            <div className="grid grid-cols-2 gap-6">
              {destaques.map((item, index) => (
                <div 
                  key={index}
                  className="bg-white/10 backdrop-blur border border-white/20 rounded-2xl p-6 text-center hover:bg-white/15 transition-all hover:scale-105"
                >
                  <div className="text-4xl md:text-5xl font-display font-bold text-white mb-2">
                    {item.numero}
                  </div>
                  <p className="text-blue-200 text-sm font-medium uppercase tracking-wider">
                    {item.label}
                  </p>
                </div>
              ))}
            </div>

            {/* Card destaque */}
            <div className="mt-6 bg-gradient-to-r from-gold-500 to-gold-600 rounded-2xl p-6 text-center">
              <p className="text-black font-bold text-lg mb-1">
                Soma milhões em ações
              </p>
              <p className="text-black/70 text-sm">
                Coletivas e individuais para os associados
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default JuridicoSection