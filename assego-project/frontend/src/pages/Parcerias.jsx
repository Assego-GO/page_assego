/**
 * ========================================
 * Parcerias - Convênios e Parceiros ASSEGO
 * ========================================
 */

import { useState, useEffect } from 'react'
import { 
  Handshake, 
  Heart, 
  Tooth, 
  Eye, 
  Pill, 
  GraduationCap, 
  Car, 
  House,
  Barbell,
  ShoppingBag,
  Airplane,
  Sparkle,
  MagnifyingGlass,
  ArrowRight,
  MapPin,
  Percent,
  Tag,
  Star
} from '@phosphor-icons/react'

function Parcerias() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [categoriaAtiva, setCategoriaAtiva] = useState('todas')
  const [busca, setBusca] = useState('')

  // Imagens do carrossel de fundo
  const backgroundImages = [
    'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=1920&q=80',
    'https://images.unsplash.com/photo-1556742111-a301076d9d18?w=1920&q=80',
    'https://images.unsplash.com/photo-1556742212-5b321f3c261b?w=1920&q=80',
  ]

  // Trocar slide automaticamente
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % backgroundImages.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [])

  // Categorias
  const categorias = [
    { id: 'todas', label: 'Todas', icon: Sparkle },
    { id: 'saude', label: 'Saúde', icon: Heart },
    { id: 'educacao', label: 'Educação', icon: GraduationCap },
    { id: 'lazer', label: 'Lazer', icon: Airplane },
    { id: 'comercio', label: 'Comércio', icon: ShoppingBag },
    { id: 'servicos', label: 'Serviços', icon: Car },
  ]

  // Parceiros
  const parceiros = [
    // Saúde
    {
      id: 1,
      nome: 'Unimed Goiânia',
      categoria: 'saude',
      descricao: 'Planos de saúde com condições especiais para associados e dependentes.',
      desconto: 'Até 30% OFF',
      logo: 'https://images.unsplash.com/photo-1505751172876-fa1923c5c528?w=200&q=80',
      destaque: true
    },
    {
      id: 2,
      nome: 'Hapvida',
      categoria: 'saude',
      descricao: 'Ampla rede de atendimento com preços diferenciados.',
      desconto: 'Até 25% OFF',
      logo: 'https://images.unsplash.com/photo-1538108149393-fbbd81895907?w=200&q=80'
    },
    {
      id: 3,
      nome: 'OdontoPrev',
      categoria: 'saude',
      descricao: 'Planos odontológicos completos para toda a família.',
      desconto: 'Até 40% OFF',
      logo: 'https://images.unsplash.com/photo-1606811841689-23dfddce3e95?w=200&q=80'
    },
    {
      id: 4,
      nome: 'Óticas Carol',
      categoria: 'saude',
      descricao: 'Óculos, lentes e acessórios com preços especiais.',
      desconto: '20% OFF',
      logo: 'https://images.unsplash.com/photo-1574258495973-f010dfbb5371?w=200&q=80'
    },
    {
      id: 5,
      nome: 'Drogasil',
      categoria: 'saude',
      descricao: 'Medicamentos e produtos de higiene com descontos.',
      desconto: 'Até 15% OFF',
      logo: 'https://images.unsplash.com/photo-1587854692152-cbe660dbde88?w=200&q=80'
    },
    // Educação
    {
      id: 6,
      nome: 'PUC Goiás',
      categoria: 'educacao',
      descricao: 'Graduação e pós-graduação com bolsas exclusivas.',
      desconto: 'Até 50% OFF',
      logo: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=200&q=80',
      destaque: true
    },
    {
      id: 7,
      nome: 'UniAlfa',
      categoria: 'educacao',
      descricao: 'Cursos de graduação e tecnólogos com desconto.',
      desconto: 'Até 40% OFF',
      logo: 'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=200&q=80'
    },
    {
      id: 8,
      nome: 'SENAC Goiás',
      categoria: 'educacao',
      descricao: 'Cursos técnicos e profissionalizantes.',
      desconto: '30% OFF',
      logo: 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=200&q=80'
    },
    {
      id: 9,
      nome: 'Wizard',
      categoria: 'educacao',
      descricao: 'Cursos de idiomas para todas as idades.',
      desconto: '25% OFF',
      logo: 'https://images.unsplash.com/photo-1546410531-bb4caa6b424d?w=200&q=80'
    },
    // Lazer
    {
      id: 10,
      nome: 'Bali Park',
      categoria: 'lazer',
      descricao: 'A maior praia artificial da América do Sul em Luziânia.',
      desconto: '20% OFF',
      logo: 'https://images.unsplash.com/photo-1605218427368-35b012180767?w=200&q=80',
      destaque: true
    },
    {
      id: 11,
      nome: 'Lagoa Termas Park',
      categoria: 'lazer',
      descricao: 'Resort com águas termais em Caldas Novas.',
      desconto: '25% OFF',
      logo: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?w=200&q=80'
    },
    {
      id: 12,
      nome: 'Hot Park',
      categoria: 'lazer',
      descricao: 'Parque aquático de águas quentes em Rio Quente.',
      desconto: '15% OFF',
      logo: 'https://images.unsplash.com/photo-1560703030-e03e5c8ffb90?w=200&q=80'
    },
    {
      id: 13,
      nome: 'SESC Goiás',
      categoria: 'lazer',
      descricao: 'Hotéis e unidades de lazer em todo o estado.',
      desconto: 'Preço Especial',
      logo: 'https://images.unsplash.com/photo-1540541338287-41700207dee6?w=200&q=80'
    },
    // Comércio
    {
      id: 14,
      nome: 'Magazine Luiza',
      categoria: 'comercio',
      descricao: 'Eletrodomésticos e eletrônicos com condições especiais.',
      desconto: 'Até 15% OFF',
      logo: 'https://images.unsplash.com/photo-1556742393-d75f468bfcb0?w=200&q=80'
    },
    {
      id: 15,
      nome: 'Casas Bahia',
      categoria: 'comercio',
      descricao: 'Móveis e eletrodomésticos com desconto.',
      desconto: 'Até 12% OFF',
      logo: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=200&q=80'
    },
    {
      id: 16,
      nome: 'Centauro',
      categoria: 'comercio',
      descricao: 'Artigos esportivos e fitness.',
      desconto: '10% OFF',
      logo: 'https://images.unsplash.com/photo-1461896836934- voices-of-war?w=200&q=80'
    },
    // Serviços
    {
      id: 17,
      nome: 'Porto Seguro',
      categoria: 'servicos',
      descricao: 'Seguros de automóveis e residenciais.',
      desconto: 'Até 20% OFF',
      logo: 'https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=200&q=80',
      destaque: true
    },
    {
      id: 18,
      nome: 'Localiza',
      categoria: 'servicos',
      descricao: 'Aluguel de veículos em todo o Brasil.',
      desconto: '15% OFF',
      logo: 'https://images.unsplash.com/photo-1485291571150-772bcfc10da5?w=200&q=80'
    },
    {
      id: 19,
      nome: 'Smart Fit',
      categoria: 'servicos',
      descricao: 'Academias com mensalidade reduzida.',
      desconto: '30% OFF',
      logo: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=200&q=80'
    },
    {
      id: 20,
      nome: 'CFC Brasil',
      categoria: 'servicos',
      descricao: 'Autoescolas com desconto para associados.',
      desconto: '20% OFF',
      logo: 'https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?w=200&q=80'
    },
  ]

  // Filtrar parceiros
  const parceirosFiltrados = parceiros.filter(p => {
    const matchCategoria = categoriaAtiva === 'todas' || p.categoria === categoriaAtiva
    const matchBusca = p.nome.toLowerCase().includes(busca.toLowerCase()) || 
                       p.descricao.toLowerCase().includes(busca.toLowerCase())
    return matchCategoria && matchBusca
  })

  // Parceiros em destaque
  const parceirosDestaque = parceiros.filter(p => p.destaque)

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
            <Handshake size={18} className="text-gold-400" />
            <span className="text-sm text-gold-400 font-medium">+150 Parceiros Conveniados</span>
          </div>
          
          <h1 className="font-display font-black text-4xl md:text-5xl lg:text-6xl text-white mb-6">
            Parcerias e <span className="text-gold-400">Convênios</span>
          </h1>
          
          <p className="text-gray-300 text-lg md:text-xl max-w-3xl mx-auto mb-8">
            Descontos exclusivos em saúde, educação, lazer e muito mais. 
            Sua carteirinha ASSEGO vale ouro em centenas de estabelecimentos.
          </p>

          {/* Barra de Busca */}
          <div className="max-w-xl mx-auto">
            <div className="relative">
              <MagnifyingGlass size={24} className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                placeholder="Buscar parceiro ou serviço..."
                value={busca}
                onChange={(e) => setBusca(e.target.value)}
                className="w-full bg-white/10 border border-white/20 rounded-full py-4 pl-12 pr-6 text-white placeholder-gray-400 focus:outline-none focus:border-gold-500 transition"
              />
            </div>
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

      {/* Destaques */}
      <section className="py-16 bg-[#0B1221]">
        <div className="container mx-auto px-6">
          <div className="flex items-center gap-3 mb-8">
            <Star size={24} weight="fill" className="text-gold-400" />
            <h2 className="text-2xl font-display font-bold text-white">Parceiros em Destaque</h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {parceirosDestaque.map((parceiro) => (
              <div 
                key={parceiro.id}
                className="group relative bg-gradient-to-br from-gold-500/10 to-gold-500/5 border border-gold-500/30 rounded-2xl p-6 hover:border-gold-500 transition-all"
              >
                <div className="absolute top-3 right-3 bg-gold-500 text-black text-xs font-bold px-2 py-1 rounded">
                  {parceiro.desconto}
                </div>
                
                <div className="w-16 h-16 bg-white rounded-xl overflow-hidden mb-4">
                  <img 
                    src={parceiro.logo} 
                    alt={parceiro.nome}
                    className="w-full h-full object-cover"
                  />
                </div>
                
                <h3 className="text-lg font-bold text-white mb-2">{parceiro.nome}</h3>
                <p className="text-gray-400 text-sm line-clamp-2">{parceiro.descricao}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Filtros por Categoria */}
      <section className="py-8 bg-[#050A18] border-b border-white/10 sticky top-[124px] z-40">
        <div className="container mx-auto px-6">
          <div className="flex flex-wrap gap-3 justify-center">
            {categorias.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setCategoriaAtiva(cat.id)}
                className={`flex items-center gap-2 px-5 py-2.5 rounded-full font-medium text-sm transition-all ${
                  categoriaAtiva === cat.id
                    ? 'bg-gold-500 text-black'
                    : 'bg-white/5 text-gray-300 border border-white/10 hover:border-gold-500/50'
                }`}
              >
                <cat.icon size={18} />
                {cat.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Lista de Parceiros */}
      <section className="py-16 bg-[#050A18]">
        <div className="container mx-auto px-6">
          {parceirosFiltrados.length > 0 ? (
            <>
              <p className="text-gray-400 mb-8">
                Exibindo <span className="text-white font-bold">{parceirosFiltrados.length}</span> parceiros
              </p>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {parceirosFiltrados.map((parceiro) => (
                  <div 
                    key={parceiro.id}
                    className="group bg-white/5 border border-white/10 rounded-2xl overflow-hidden hover:border-gold-500/30 transition-all hover:-translate-y-1"
                  >
                    <div className="relative h-32 bg-gradient-to-br from-gray-800 to-gray-900 overflow-hidden">
                      <img 
                        src={parceiro.logo} 
                        alt={parceiro.nome}
                        className="w-full h-full object-cover opacity-50 group-hover:opacity-70 transition-opacity"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#050A18] to-transparent"></div>
                      
                      {/* Badge de desconto */}
                      <div className="absolute top-3 right-3 bg-green-500 text-white text-xs font-bold px-3 py-1 rounded-full flex items-center gap-1">
                        <Percent size={12} weight="bold" />
                        {parceiro.desconto}
                      </div>

                      {/* Categoria */}
                      <div className="absolute bottom-3 left-3">
                        <span className="bg-white/20 backdrop-blur text-white text-xs px-2 py-1 rounded capitalize">
                          {parceiro.categoria}
                        </span>
                      </div>
                    </div>
                    
                    <div className="p-5">
                      <h3 className="text-lg font-bold text-white mb-2 group-hover:text-gold-400 transition">
                        {parceiro.nome}
                      </h3>
                      <p className="text-gray-400 text-sm line-clamp-2 mb-4">
                        {parceiro.descricao}
                      </p>
                      
                      <button className="w-full bg-white/5 border border-white/10 text-white text-sm py-2 rounded-lg hover:bg-gold-500 hover:text-black hover:border-gold-500 transition-all font-medium">
                        Ver Detalhes
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </>
          ) : (
            <div className="text-center py-16">
              <MagnifyingGlass size={48} className="text-gray-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-white mb-2">Nenhum parceiro encontrado</h3>
              <p className="text-gray-400 mb-6">Tente ajustar os filtros ou a busca.</p>
              <button
                onClick={() => { setCategoriaAtiva('todas'); setBusca(''); }}
                className="text-gold-400 hover:underline"
              >
                Limpar filtros
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Como usar */}
      <section className="py-20 bg-[#0B1221]">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-4">
              Como Usar Seus Descontos
            </h2>
            <p className="text-gray-400 text-lg">
              É simples! Basta seguir estes passos para aproveitar os benefícios.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {[
              { 
                num: '1', 
                titulo: 'Apresente sua Carteirinha', 
                desc: 'Mostre sua carteirinha de associado ASSEGO no estabelecimento parceiro.',
                icon: Tag
              },
              { 
                num: '2', 
                titulo: 'Informe o Convênio', 
                desc: 'Diga que é associado ASSEGO e pergunte sobre as condições especiais.',
                icon: Handshake
              },
              { 
                num: '3', 
                titulo: 'Aproveite o Desconto', 
                desc: 'O desconto será aplicado automaticamente na sua compra ou serviço.',
                icon: Percent
              },
            ].map((passo, index) => (
              <div key={index} className="text-center">
                <div className="w-20 h-20 bg-gold-500/20 border-2 border-gold-500/30 rounded-full flex items-center justify-center mx-auto mb-6">
                  <passo.icon size={32} className="text-gold-400" />
                </div>
                <h3 className="text-lg font-bold text-white mb-2">{passo.titulo}</h3>
                <p className="text-gray-400 text-sm">{passo.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Seja um Parceiro */}
      <section className="py-20 bg-[#050A18]">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto bg-gradient-to-br from-[#000e72] to-[#001090] rounded-3xl p-10 md:p-16 text-center">
            <Handshake size={48} className="text-gold-400 mx-auto mb-6" />
            
            <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-4">
              Seja um Parceiro ASSEGO
            </h2>
            
            <p className="text-blue-100/80 text-lg mb-8 max-w-2xl mx-auto">
              Sua empresa quer fazer parte da maior rede de benefícios para militares de Goiás? 
              Entre em contato e saiba como se tornar um parceiro conveniado.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="tel:6232813177"
                className="inline-flex items-center justify-center gap-2 bg-gold-500 hover:bg-gold-600 text-black font-bold py-4 px-8 rounded-full transition-all hover:scale-105"
              >
                Quero Ser Parceiro
                <ArrowRight size={20} weight="bold" />
              </a>
              <a 
                href="mailto:parcerias@assego.com.br"
                className="inline-flex items-center justify-center gap-2 bg-white/10 border border-white/20 text-white font-bold py-4 px-8 rounded-full hover:bg-white/20 transition-all"
              >
                parcerias@assego.com.br
              </a>
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
              Ainda não é associado?
            </h2>
            <p className="text-blue-100/80 text-lg mb-8">
              Associe-se agora e comece a aproveitar todos esses descontos e muito mais!
            </p>
            <a 
              href="#filiar"
              className="inline-flex items-center gap-2 bg-gold-500 hover:bg-gold-600 text-black font-bold py-4 px-10 rounded-full transition-all hover:scale-105 text-lg"
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

export default Parcerias