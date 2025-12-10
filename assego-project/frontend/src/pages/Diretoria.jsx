/**
 * ========================================
 * Diretoria - Página da Gestão e Diretores
 * ========================================
 */

import { useState, useEffect } from 'react'
import { Quotes, Medal, Calendar, Users, TrendUp, Buildings } from '@phosphor-icons/react'

function Diretoria() {
  // Estado para controlar o slide atual do carrossel
  const [currentSlide, setCurrentSlide] = useState(0)
  
  // Imagens do carrossel de fundo
  const backgroundImages = [
    '/fotos/diretoria1.jpg',
    '/public/foto11.jpg',
  
  ]

  // Trocar slide automaticamente
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % backgroundImages.length)
    }, 5000) // Troca a cada 5 segundos

    return () => clearInterval(interval)
  }, [])

  // Diretoria Principal
  const diretoriaPrincipal = [
    { nome: 'Ten. Wesley Davi', cargo: 'Vice-Presidente', foto: '/diretoria/wesley.jpg' },
    { nome: 'Maj. Niltomar', cargo: 'Tesoureiro', foto: '/diretoria/niltomar.jpg' },
    { nome: 'Cap. de Paula', cargo: '1º Secretário', foto: '/diretoria/paula.jpg' },
    { nome: 'Ten. Cláudio', cargo: 'Jurídico', foto: '/diretoria/claudio.jpg' },
    { nome: 'Ten. Ana Paula', cargo: '2ª Secretária', foto: '/diretoria/anapaula.jpg' },
    { nome: 'ST. Adailma', cargo: 'Comercial', foto: '/diretoria/adailma.jpg' },
  ]

  // Demais Diretores
  const demaisDiretores = [
    { nome: 'Maj. Medeiros', cargo: 'Diretor de Transporte', foto: '/diretoria/medeiros.jpg' },
    { nome: 'ST. Ivaldi', cargo: 'CDF', foto: '/diretoria/ivaldi.jpg' },
    { nome: 'ST. F. Cardoso', cargo: 'Diretor de Marketing', foto: '/diretoria/cardoso.jpg' },
    { nome: 'ST. Rui Felicidade', cargo: 'Transporte', foto: '/diretoria/rui.jpg' },
    { nome: 'Ten. França', cargo: 'Transporte', foto: '/diretoria/franca.jpg' },
    { nome: 'Ten. Vaz', cargo: 'Transporte', foto: '/diretoria/vaz.jpg' },
    { nome: 'Sgt. Diony', cargo: 'Parque Aquático', foto: '/diretoria/diony.jpg' },
    { nome: 'ST. Amauri', cargo: 'Apoio', foto: '/diretoria/amauri.jpg' },
    { nome: 'ST. Isabel', cargo: 'Patrimônio', foto: '/diretoria/isabel.jpg' },
    { nome: 'Sgt. Lindomauro', cargo: 'Veteranos', foto: '/diretoria/lindomauro.jpg' },
    { nome: 'CB. Tadeu Moura', cargo: 'Comercial', foto: '/diretoria/tadeu.jpg' },
    { nome: 'ST. Wilian Rosa', cargo: 'Relações Públicas', foto: '/diretoria/wilian.jpg' },
  ]

  // Conquistas da Gestão
  const conquistas = [
    { icon: Buildings, titulo: 'Espaço das Cores', desc: 'Novo ambiente para eventos' },
    { icon: TrendUp, titulo: 'Cantinho da Bola', desc: 'Área de lazer infantil' },
    { icon: Users, titulo: 'Parque Aquático', desc: 'Totalmente reformado' },
    { icon: Medal, titulo: 'ASSEGO + Saúde', desc: 'Novo programa de saúde' },
  ]

  return (
    <div className="min-h-screen bg-[#050A18]">
      
      {/* Hero Section com Carrossel de Fundo */}
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden pt-24 md:pt-28">
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
                alt={`Diretoria ASSEGO ${index + 1}`}
                className="w-full h-full object-cover"
                onError={(e) => {
                  e.target.src = 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=1920'
                }}
              />
            </div>
          ))}
          {/* Overlay gradiente */}
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
            GESTÃO 2022 - 2026
          </span>
          <h1 className="font-display font-black text-4xl md:text-6xl text-white mb-4">
            Nossa <span className="text-gold-400">Diretoria</span>
          </h1>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Liderança comprometida com a classe militar e o crescimento sustentável da ASSEGO
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

      {/* Presidente Section */}
      <section className="py-20 bg-[#0a0f1c]">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            
            {/* Foto do Presidente */}
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-br from-gold-500/20 to-royal-600/20 rounded-3xl blur-2xl"></div>
              <div className="relative">
                <img 
                  src="/fotos/presidente-sergio.jpg" 
                  alt="Subtenente PM Sérgio - Presidente"
                  className="w-full max-w-md mx-auto rounded-2xl shadow-2xl border-4 border-gold-500/20"
                />
                {/* Badge */}
                <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 bg-gradient-to-r from-gold-500 to-gold-600 text-black px-6 py-3 rounded-full shadow-xl">
                  <p className="font-bold text-sm">SUBTENENTE PM SÉRGIO</p>
                  <p className="text-xs text-center opacity-80">Presidente</p>
                </div>
              </div>
            </div>

            {/* Texto */}
            <div>
              <span className="text-gold-400 font-bold tracking-widest text-xs uppercase">Nosso Líder</span>
              <h2 className="font-display font-bold text-3xl md:text-4xl text-white mt-2 mb-6">
                Gestão 2022 a 2026
              </h2>
              
              <div className="space-y-4 text-gray-300 leading-relaxed">
                <p>
                  Nosso Presidente, <strong className="text-white">Subtenente PM Sérgio</strong>, é quem lidera a atual gestão da Entidade que segue até 2026. Os valores promovidos pela nova direção são os mais inspiradores possíveis – <span className="text-gold-400">luta classista com responsabilidade, estratégia e comprometimento</span>.
                </p>
                <p>
                  O Subtenente PM Sérgio, além de ser um militar exemplar, já possui um longo histórico dentro da família ASSEGO. Ele começou em 2014 como Gestor de Obras, ajudando a transformar nossa estrutura no que ela é hoje – completa, funcional e aconchegante.
                </p>
                <p>
                  Mais tarde, em 2018, tornou-se <strong className="text-white">Diretor Jurídico</strong> e se destacou por reformular o departamento nas áreas física, estratégica e profissional.
                </p>
                <p>
                  Hoje, como Presidente de uma das Entidades Representativas que mais cresce do Estado de Goiás, trabalha diuturnamente a fim de trazer cada vez mais melhorias para a categoria militar e estimular o crescimento sustentável da nossa Associação.
                </p>
              </div>

              {/* Timeline */}
              <div className="flex gap-6 mt-8">
                <div className="text-center">
                  <div className="w-12 h-12 bg-gold-500/20 rounded-full flex items-center justify-center text-gold-400 mb-2">
                    <span className="font-bold">2014</span>
                  </div>
                  <p className="text-xs text-gray-400">Gestor de Obras</p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-gold-500/20 rounded-full flex items-center justify-center text-gold-400 mb-2">
                    <span className="font-bold">2018</span>
                  </div>
                  <p className="text-xs text-gray-400">Diretor Jurídico</p>
                </div>
                  <div className="text-center">
                  <div className="w-12 h-12 bg-gold-500/20 rounded-full flex items-center justify-center text-gold-400 mb-2">
                    <span className="font-bold">2022</span>
                  </div>
                  <p className="text-xs text-gray-400">Presidente</p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-gold-500 rounded-full flex items-center justify-center text-black mb-2">
                    <span className="font-bold">2026</span>
                  </div>
                  <p className="text-xs text-gray-400">Presidente</p>

                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Citação do Presidente */}
      <section className="py-16 bg-gradient-to-r from-royal-600 to-[#050A18] relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-96 h-96 bg-gold-500 rounded-full blur-[150px]"></div>
        </div>
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <Quotes size={64} className="text-gold-500/30 mx-auto mb-6" />
            <blockquote className="text-xl md:text-2xl text-white font-light italic leading-relaxed mb-8">
              "Para mim é uma honra enorme estar à frente da ASSEGO, e reconheço também o nível de responsabilidade inerente ao cargo. Com a ajuda dos demais diretores, representantes e colaboradores, estamos juntos na luta pela classe militar em Goiás e para cuidar de todos os nossos queridos associados. <span className="text-gold-400 font-medium">Contem sempre comigo.</span>"
            </blockquote>
            <p className="text-gold-400 font-bold">— Presidente Sérgio</p>
          </div>
        </div>
      </section>

      {/* Palavra do Presidente */}
      <section className="py-20 bg-[#050A18]">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <span className="text-gold-400 font-bold tracking-widest text-xs uppercase">Mensagem</span>
              <h2 className="font-display font-bold text-3xl md:text-4xl text-white mt-2">
                Palavra do Presidente
              </h2>
            </div>

            <div className="bg-white/5 backdrop-blur border border-white/10 rounded-3xl p-8 md:p-12 space-y-6 text-gray-300 leading-relaxed">
              <p>
                O divisor de águas da Assego aconteceu há cerca de 8 anos e meio. Embora houvesse uma estrutura com potencial, faltava investimento correto, ampliação e modernização na infraestrutura da entidade. <strong className="text-white">A transformação organizacional modificou a forma como se enxerga a associação atualmente</strong>, destacando-se como entidade militar que mais cresce no país.
              </p>
              <p>
                Após a quitação de uma dívida milionária que a Assego possuía, a aplicação monetária se direcionou para a evolução estrutural da instituição. Com isso, o número de associados aumentou expressivamente e alcançou o nível classista que antes era sonho.
              </p>
              <p>
                Entretanto, essa mudança da água para o vinho só foi possível graças ao <span className="text-gold-400">empenho de cada um dos fundadores, presidentes, diretoria e associados</span> que acreditaram na entidade.
              </p>
              <p>
                Neste ano de 2024 a instituição fez <strong className="text-white">68 anos de atuação e transformação</strong>. Temos listadas grandes vitórias tanto na representação classista, quanto na ampliação e modernização de nossa estrutura física.
              </p>

              {/* Conquistas */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 py-6">
                {conquistas.map((item, index) => (
                  <div key={index} className="text-center p-4 bg-white/5 rounded-xl">
                    <item.icon size={32} className="text-gold-400 mx-auto mb-2" />
                    <p className="text-white font-bold text-sm">{item.titulo}</p>
                    <p className="text-gray-400 text-xs">{item.desc}</p>
                  </div>
                ))}
              </div>

              <p>
                A Assego não para de crescer, pois estamos empenhados na luta constante pelos direitos dos nossos policiais e bombeiros militares. <strong className="text-white">A meta sempre será alcançar melhorias coletivas e valorizar o nosso maior patrimônio que é o associado Assego.</strong>
              </p>
              <p>
                Embora haja muitas missões pela frente, acreditamos que com união e planejamento continuaremos evoluindo e transformando a entidade em um ambiente cada vez melhor.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Diretoria */}
      <section className="py-20 bg-[#0a0f1c]" id="diretores">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-gold-400 font-bold tracking-widest text-xs uppercase">Nossa Equipe</span>
            <h2 className="font-display font-bold text-3xl md:text-4xl text-white mt-2 mb-4">
              Diretores
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Conheça os membros que trabalham diariamente para fazer da ASSEGO a melhor associação militar do país.
            </p>
          </div>

          {/* Grid de Todos os Diretores */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {[...diretoriaPrincipal, ...demaisDiretores].map((diretor, index) => (
              <div key={index} className="group text-center">
                {/* Foto com borda circular */}
                <div className="relative mx-auto w-32 h-32 md:w-40 md:h-40 mb-4">
                  <div className="absolute inset-0 rounded-full border-4 border-cyan-400/50 group-hover:border-gold-500 transition-colors duration-300"></div>
                  <div className="absolute inset-2 rounded-full overflow-hidden bg-gray-800">
                    <img 
                      src={diretor.foto}
                      alt={diretor.nome}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      onError={(e) => {
                        e.target.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(diretor.nome)}&background=1e3a5f&color=fff&size=200`
                      }}
                    />
                  </div>
                </div>
                
                {/* Info */}
                <h3 className="text-white font-bold text-sm md:text-base">{diretor.nome}</h3>
                <p className="text-gray-400 text-xs uppercase tracking-wider">{diretor.cargo}</p>
              </div>
            ))}
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
            Junte-se a milhares de policiais e bombeiros militares que confiam na ASSEGO para defender seus direitos.
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

export default Diretoria