/**
 * ========================================
 * Conselho Deliberativo Fiscal
 * ========================================
 */

import { useState, useEffect } from 'react'
import { Calendar, Scales, Users } from '@phosphor-icons/react'

function ConselhoFiscal() {
  // Estado para controlar o slide atual do carrossel
  const [currentSlide, setCurrentSlide] = useState(0)
  
  // Imagens do carrossel de fundo
  const backgroundImages = [
    'https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=1920&q=80',
    
  ]

  // Trocar slide automaticamente
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % backgroundImages.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [])

  // Membros do Conselho Deliberativo Fiscal
  const membrosConselho = [
    { 
      graduacao: 'SGT PM', 
      nome: 'IVALDI Alves de Freitas', 
      cargo: 'Presidente',
      destaque: true,
      foto: '/diretoria/ivaldi.jpg'
    },
    { 
      graduacao: 'ST BM', 
      nome: 'Mauro Cezar Miguel de PÁDUA', 
      cargo: 'Vice-Presidente',
      destaque: true,
      foto: '/diretoria/mauro.jpg'
    },
    { 
      graduacao: 'SGT BM', 
      nome: 'LEIDYANA Pereira da Silva', 
      cargo: 'Relatora',
      destaque: true,
      foto: '/diretoria/leidyana.jpg'
    },
    { 
      graduacao: 'TEN PM', 
      nome: 'Luiz AMARO da Silva', 
      cargo: '1º Vogal',
      foto: '/diretoria/amaro.jpg'
    },
    { 
      graduacao: 'SGT PM', 
      nome: 'ALÍRIO Pereira dos Santos', 
      cargo: '2º Vogal',
      foto: '/diretoria/alirio.jpg'
    },
  ]

  const suplentes = [
    { 
      graduacao: 'TEN CEL PM', 
      nome: 'JUNE Margarette da Silveira', 
      cargo: '1º Suplente',
      foto: '/diretoria/june.jpg'
    },
    { 
      graduacao: 'TEN PM', 
      nome: 'Davidson CIRILO de Moura', 
      cargo: '2º Suplente',
      foto: '/diretoria/davidson.jpg'
    },
    { 
      graduacao: 'CAP PM', 
      nome: 'MARILUCE Teles Gonçalves de Souza', 
      cargo: '3º Suplente',
      foto: '/diretoria/mariluce.jpg'
    },
    { 
      graduacao: 'SGT PM', 
      nome: 'NILVALDO Abadia de Oliveira', 
      cargo: '4º Suplente',
      foto: '/diretoria/nilvaldo.jpg'
    },
    { 
      graduacao: 'SGT PM', 
      nome: 'REGYS Machado dos Reis', 
      cargo: '5º Suplente',
      foto: '/diretoria/regys.jpg'
    },
  ]

  return (
    <div className="min-h-screen bg-[#050A18]">
      
      {/* Hero Section com Carrossel */}
      <section className="relative min-h-[50vh] flex items-center justify-center overflow-hidden pt-24 md:pt-28">
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
                alt={`Conselho ASSEGO ${index + 1}`}
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
            <Scales size={18} />
            GESTÃO 2022 - 2026
          </span>
          <h1 className="font-display font-black text-3xl md:text-5xl text-white mb-4">
            Conselho <span className="text-gold-400">Deliberativo Fiscal</span>
          </h1>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Órgão responsável pela fiscalização e deliberação das atividades da ASSEGO
          </p>
        </div>
      </section>

      {/* Membros Titulares */}
      <section className="py-20 bg-[#0a0f1c]">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-gold-400 font-bold tracking-widest text-xs uppercase">Membros</span>
            <h2 className="font-display font-bold text-3xl md:text-4xl text-white mt-2 mb-4">
              Titulares do Conselho
            </h2>
          </div>

          {/* Grid de Membros Titulares */}
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8 max-w-6xl mx-auto">
            {membrosConselho.map((membro, index) => (
              <div 
                key={index} 
                className={`group text-center ${membro.destaque ? '' : ''}`}
              >
                {/* Foto com borda circular */}
                <div className={`relative mx-auto w-32 h-32 md:w-40 md:h-40 mb-4 ${
                  membro.destaque ? 'scale-105' : ''
                }`}>
                  <div className={`absolute inset-0 rounded-full border-4 transition-colors duration-300 ${
                    membro.destaque 
                      ? 'border-gold-500 group-hover:border-gold-400' 
                      : 'border-cyan-400/50 group-hover:border-gold-500'
                  }`}></div>
                  <div className="absolute inset-2 rounded-full overflow-hidden bg-gray-800">
                    <img 
                      src={membro.foto}
                      alt={membro.nome}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      onError={(e) => {
                        e.target.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(membro.nome)}&background=1e3a5f&color=fff&size=200`
                      }}
                    />
                  </div>
                  {/* Badge de destaque */}
                  {membro.destaque && (
                    <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 bg-gold-500 text-black text-[10px] font-bold px-3 py-1 rounded-full whitespace-nowrap">
                      {membro.cargo}
                    </div>
                  )}
                </div>
                
                {/* Info */}
                <div className={membro.destaque ? 'mt-6' : 'mt-2'}>
                  <span className="text-gold-400 text-xs font-bold">{membro.graduacao}</span>
                  <h3 className="text-white font-bold text-sm md:text-base mt-1">{membro.nome}</h3>
                  {!membro.destaque && (
                    <p className="text-gray-400 text-xs uppercase tracking-wider mt-1">{membro.cargo}</p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Suplentes */}
      <section className="py-20 bg-[#050A18]">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-gold-400 font-bold tracking-widest text-xs uppercase">Membros</span>
            <h2 className="font-display font-bold text-3xl md:text-4xl text-white mt-2 mb-4">
              Suplentes do Conselho
            </h2>
          </div>

          {/* Grid de Suplentes */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 max-w-6xl mx-auto">
            {suplentes.map((membro, index) => (
              <div key={index} className="group text-center">
                {/* Foto com borda circular */}
                <div className="relative mx-auto w-28 h-28 md:w-36 md:h-36 mb-4">
                  <div className="absolute inset-0 rounded-full border-4 border-white/20 group-hover:border-gold-500 transition-colors duration-300"></div>
                  <div className="absolute inset-2 rounded-full overflow-hidden bg-gray-800">
                    <img 
                      src={membro.foto}
                      alt={membro.nome}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      onError={(e) => {
                        e.target.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(membro.nome)}&background=1e3a5f&color=fff&size=200`
                      }}
                    />
                  </div>
                </div>
                
                {/* Info */}
                <span className="text-gold-400 text-xs font-bold">{membro.graduacao}</span>
                <h3 className="text-white font-bold text-sm mt-1">{membro.nome}</h3>
                <p className="text-gray-400 text-xs uppercase tracking-wider mt-1">{membro.cargo}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tabela Completa */}
      <section className="py-20 bg-[#0a0f1c]">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="font-display font-bold text-2xl md:text-3xl text-white">
              Relação Completa dos Diretores
            </h2>
          </div>

          <div className="max-w-4xl mx-auto overflow-hidden rounded-2xl border border-white/10">
            <table className="w-full">
              <thead className="bg-gold-500 text-black">
                <tr>
                  <th className="py-4 px-6 text-left font-bold text-sm uppercase tracking-wider">Grad/Posto</th>
                  <th className="py-4 px-6 text-left font-bold text-sm uppercase tracking-wider">Nome</th>
                  <th className="py-4 px-6 text-left font-bold text-sm uppercase tracking-wider">Cargo</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/10">
                {[...membrosConselho, ...suplentes].map((membro, index) => (
                  <tr 
                    key={index} 
                    className={`transition-colors ${
                      index % 2 === 0 ? 'bg-white/5' : 'bg-transparent'
                    } hover:bg-white/10`}
                  >
                    <td className="py-4 px-6 text-gold-400 font-bold text-sm">{membro.graduacao}</td>
                    <td className="py-4 px-6 text-white font-medium">{membro.nome}</td>
                    <td className="py-4 px-6 text-gray-400">{membro.cargo}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gradient-to-r from-gold-500 to-gold-600">
        <div className="container mx-auto px-6 text-center">
          <h2 className="font-display font-bold text-2xl md:text-3xl text-black mb-4">
            Faça Parte da Nossa Família
          </h2>
          <p className="text-black/70 mb-8 max-w-xl mx-auto">
            Junte-se a milhares de policiais e bombeiros militares que confiam na ASSEGO.
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

export default ConselhoFiscal