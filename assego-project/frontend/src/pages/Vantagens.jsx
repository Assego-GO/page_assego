/**
 * ========================================
 * Vantagens - Benefícios, Parcerias e Convênios
 * ========================================
 * 
 * Página unificada com todos os benefícios do associado
 */

import { useState } from 'react'
import { 
  Handshake, 
  Heart, 
  Tooth, 
  GraduationCap, 
  Car, 
  Airplane,
  Sparkle,
  MagnifyingGlass,
  ArrowRight,
  Percent,
  Tag,
  MapPin,
  Phone,
  WhatsappLogo,
  Scales,
  House,
  CheckCircle,
  Star
} from '@phosphor-icons/react'

function Vantagens() {
  const [categoriaAtiva, setCategoriaAtiva] = useState('todas')
  const [busca, setBusca] = useState('')

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

  // Categorias de parceiros
  const categorias = [
    { id: 'todas', label: 'Todas', icon: Sparkle },
    { id: 'saude', label: 'Saúde', icon: Heart },
    { id: 'educacao', label: 'Educação', icon: GraduationCap },
    { id: 'lazer', label: 'Lazer e Turismo', icon: Airplane },
    { id: 'servicos', label: 'Serviços', icon: Car },
    { id: 'comercio', label: 'Comércio', icon: Tag },
  ]

  // Parceiros REAIS da ASSEGO
  const parceiros = [
    // ============ SAÚDE ============
    { id: 1, nome: 'Clínica Espaço Saúde', categoria: 'saude', descricao: 'Clínica médica multidisciplinar com consultas e exames laboratoriais.', desconto: 'Condições especiais', telefone: '(61) 3025-1627', local: 'Brasília, DF' },
    { id: 2, nome: 'GYN Laser', categoria: 'saude', descricao: 'Tratamentos estéticos a laser com tecnologia de ponta.', desconto: '30% OFF', telefone: '(62) 9 8280-0750', local: 'Goiânia, GO' },
    { id: 3, nome: 'OdontoMédica Uberaba', categoria: 'saude', descricao: 'Clínica odontológica completa com limpeza e tratamentos diversos.', desconto: 'Condições especiais', telefone: '(61) 9 8188-8780', local: 'Uberaba, MG' },
    { id: 4, nome: 'Clínica Meire Soares', categoria: 'saude', descricao: 'Clínica de especialidades médicas com agendamento prioritário.', desconto: 'Condições especiais', telefone: '(62) 9 8329-5050', local: 'Goiânia, GO' },
    { id: 5, nome: 'Olhar Radiante', categoria: 'saude', descricao: 'Instituto de beleza com tratamentos estéticos e faciais.', desconto: 'Condições especiais', telefone: '(62) 99962-2022', local: 'Goiânia, GO' },
    { id: 6, nome: 'Sonatta - Aparelhos Auditivos', categoria: 'saude', descricao: 'Aparelhos auditivos com manutenção gratuita.', desconto: 'Condições especiais', telefone: '(61) 99308-8453', local: 'Goiás' },
    { id: 7, nome: 'Aparecida Tavares - Psicóloga', categoria: 'saude', descricao: 'Atendimento psicológico com primeira consulta gratuita.', desconto: 'Condições especiais', telefone: '(62) 98458-0500', local: 'Goiânia, GO' },
    { id: 8, nome: 'Óticas Dômina', categoria: 'saude', descricao: 'Armações, lentes e exame de vista gratuito.', desconto: 'Condições especiais', telefone: '(62) 98129-7373', local: 'Goiânia, GO' },
    { id: 9, nome: 'Drogasil', categoria: 'saude', descricao: 'Rede de farmácias com descontos em medicamentos e programa de fidelidade.', desconto: 'Condições especiais', telefone: '(62) 99611-9250', local: 'Goiânia, GO' },

    // ============ EDUCAÇÃO ============
    { id: 10, nome: 'Colégio Alfa', categoria: 'educacao', descricao: 'Ensino fundamental e médio com material didático incluso.', desconto: 'Condições especiais', telefone: '(62) 9-9963-8250', local: 'Goiânia, GO' },
    { id: 11, nome: 'Universo - Centro Universitário', categoria: 'educacao', descricao: 'Graduação, pós-graduação e cursos técnicos.', desconto: 'Condições especiais', telefone: '(62) 3094-9494', local: 'Goiânia, GO' },
    { id: 12, nome: 'Unigoyazes', categoria: 'educacao', descricao: 'Faculdade tradicional com mensalidades especiais e biblioteca completa.', desconto: 'Condições especiais', telefone: '(62) 3506-9300', local: 'Goiânia, GO' },
    { id: 13, nome: 'Unigoiás - Centro Universitário', categoria: 'educacao', descricao: 'Vários cursos disponíveis com 20% de desconto.', desconto: '20% OFF', telefone: '0800 605 9003', local: 'Goiânia, GO' },
    { id: 14, nome: 'Unigoyazes Formosa', categoria: 'educacao', descricao: 'Faculdade em Formosa com cursos de extensão.', desconto: 'Condições especiais', telefone: '(61) 3631-1010', local: 'Formosa, GO' },
    { id: 15, nome: 'AHV - Escola de Aviação', categoria: 'educacao', descricao: 'Formação de pilotos com simulador gratuito.', desconto: 'Condições especiais', telefone: '(62) 3251-5556', local: 'Goiânia, GO' },
    { id: 16, nome: 'Instituto Goiano de Direito', categoria: 'educacao', descricao: 'Pós-graduação em Direito e cursos preparatórios.', desconto: 'Condições especiais', telefone: '(62) 9 9209-5550', local: 'Goiânia, GO' },
    { id: 17, nome: 'Faculdades Estácio', categoria: 'educacao', descricao: 'Rede de ensino superior com bolsas de até 50% - EAD e presencial.', desconto: 'Até 50% OFF', telefone: '011945137259', local: 'Goiânia, GO' },

    // ============ LAZER E TURISMO ============
    { id: 18, nome: 'SESI Multiparque Goiânia', categoria: 'lazer', descricao: 'Centro esportivo e cultural com piscinas, academia e quadras.', desconto: 'Desconto', telefone: '(62) 3347-6662', local: 'Goiânia, GO' },
    { id: 19, nome: 'SESI Multiparque Barro Alto', categoria: 'lazer', descricao: 'Acesso às instalações do SESI com descontos em atividades.', desconto: 'Condições especiais', telefone: '(62) 3347-6662', local: 'Barro Alto, GO' },
    { id: 20, nome: 'SESI Multiparque Itumbiara', categoria: 'lazer', descricao: 'Centro de lazer e esportes com descontos em eventos.', desconto: 'Condições especiais', telefone: '(64) 3404-2901', local: 'Itumbiara, GO' },
    { id: 21, nome: 'Lagoa Termas Park - Caldas Novas', categoria: 'lazer', descricao: 'Parque aquático termal com entrada com 20% de desconto.', desconto: '20% OFF', telefone: '(62) 99279-2300', local: 'Caldas Novas, GO' },
    { id: 22, nome: 'Chácaras Thermas - Caldas Novas', categoria: 'lazer', descricao: 'Chácaras com águas termais e chalés com desconto.', desconto: 'Desconto', telefone: '(64) 99279-4753', local: 'Caldas Novas, GO' },
    { id: 23, nome: 'Náutico Praia Clube - Caldas Novas', categoria: 'lazer', descricao: 'Clube náutico com day use com desconto e atividades náuticas.', desconto: 'Desconto', telefone: '(62) 99279-2339', local: 'Caldas Novas, GO' },
    { id: 24, nome: 'Diroma Fiori - Caldas Novas', categoria: 'lazer', descricao: 'Resort com descontos em diárias e acesso ao parque aquático.', desconto: 'Condições especiais', telefone: '(64) 3455-5051', local: 'Caldas Novas, GO' },
    { id: 25, nome: 'Estância Park - Anápolis', categoria: 'lazer', descricao: 'Parque aquático e resort com entrada com desconto e day use especial.', desconto: 'Condições especiais', telefone: '(62) 98411-4157', local: 'Anápolis, GO' },
    { id: 26, nome: 'Pousada ASSEGO - Aruanã', categoria: 'lazer', descricao: 'Pousada exclusiva para associados com pescaria inclusa.', desconto: 'Exclusivo', telefone: '(62) 99353-8100', local: 'Aruanã, GO', destaque: true },
    { id: 27, nome: 'Clube Bela Vista Pesque e Park', categoria: 'lazer', descricao: 'Clube de pesca esportiva com área de churrasco.', desconto: 'Desconto', telefone: '(61) 98208-4649', local: 'Bela Vista de Goiás, GO' },
    { id: 28, nome: 'Águas Correntes Park - Cidade Ocidental', categoria: 'lazer', descricao: 'Parque aquático natural com entrada com desconto e trilhas ecológicas.', desconto: 'Desconto', telefone: '(62) 98208-4649', local: 'Cidade Ocidental, GO' },
    { id: 29, nome: 'Ideal Turismo', categoria: 'lazer', descricao: 'Agência de turismo com pacotes com desconto e excursões especiais.', desconto: 'Desconto', telefone: '(62) 98607-9059', local: 'Goiânia, GO' },
    { id: 30, nome: 'Clube de Turismo Bancorbrás', categoria: 'lazer', descricao: 'Pacotes turísticos exclusivos com parcelamento facilitado.', desconto: 'Condições especiais', telefone: '(62) 99297-7031', local: 'Goiás' },
    { id: 31, nome: 'Clube AABB - Formosa', categoria: 'lazer', descricao: 'Clube social e esportivo com acesso às instalações e esportes.', desconto: 'Condições especiais', telefone: '(61) 3631-2372', local: 'Formosa, GO' },
    { id: 32, nome: 'Ceres Clube Recreativo', categoria: 'lazer', descricao: 'Clube recreativo com mensalidade com desconto e eventos especiais.', desconto: 'Desconto', telefone: '(62) 98423-2482', local: 'Ceres, GO' },
    { id: 33, nome: 'Pousada Al Castello - Pirenópolis', categoria: 'lazer', descricao: 'Pousada temática medieval com tarifas especiais e welcome drink.', desconto: 'Condições especiais', telefone: '(62) 99372-2285', local: 'Pirenópolis, GO' },
    { id: 34, nome: 'Pousada Jardim do Éden - Pirenópolis', categoria: 'lazer', descricao: 'Descontos em hospedagem com café da manhã colonial.', desconto: 'Condições especiais', telefone: '(62) 98128-6425', local: 'Pirenópolis, GO' },
    { id: 35, nome: 'Restaurante Tempero do Rosário - Pirenópolis', categoria: 'lazer', descricao: 'Restaurante típico goiano com 10% de desconto no almoço e sobremesa cortesia.', desconto: '10% OFF', telefone: '(62) 3331-2706', local: 'Pirenópolis, GO' },
    { id: 36, nome: 'Clube de Caça e Pesca Sampaio - Rio Verde', categoria: 'lazer', descricao: 'Clube de pesca esportiva com acesso ao clube e desconto em day use.', desconto: 'Condições especiais', telefone: '(64) 9 9234-5300', local: 'Rio Verde, GO' },
    { id: 37, nome: 'Hotel 24 de Outubro', categoria: 'lazer', descricao: 'Hotel tradicional em Goiânia com 15% de desconto em diárias e café da manhã.', desconto: '15% OFF', telefone: '(62) 9 9192-2320', local: 'Goiânia, GO' },
    { id: 38, nome: 'Golden Tulip Natal Ponta Negra', categoria: 'lazer', descricao: 'Hotel de praia em Natal com vista para o mar e descontos especiais.', desconto: 'Condições especiais', telefone: '(62) 9 9192-2320', local: 'Natal, RN' },
    { id: 39, nome: 'Hotel Samba Itaboraí - RJ', categoria: 'lazer', descricao: 'Hotel com condições especiais e check-in/out flexível.', desconto: 'Condições especiais', telefone: '(62) 9 9192-2323', local: 'Itaboraí, RJ' },
    { id: 40, nome: 'Hotel Bossa Nova Ipanema - Rio de Janeiro', categoria: 'lazer', descricao: 'Hotel em Ipanema próximo à praia com rooftop com vista.', desconto: 'Condições especiais', telefone: '(62) 9 9192-2320', local: 'Rio de Janeiro, RJ' },
    { id: 41, nome: 'Golden Tulip Porto Vitória - ES', categoria: 'lazer', descricao: 'Hotel de luxo em Vitória com tarifas especiais e upgrade de categoria.', desconto: 'Condições especiais', telefone: '(62) 9 9192-2320', local: 'Vitória, ES' },

    // ============ SERVIÇOS ============
    { id: 42, nome: 'POUPEX', categoria: 'servicos', descricao: 'Poupança e financiamentos com taxas especiais e produtos exclusivos.', desconto: 'Condições especiais', telefone: '0800 0613040', local: 'Nacional' },
    { id: 43, nome: 'ICATU - Seguro de Vida para PM & BM', categoria: 'servicos', descricao: 'Seguro de vida especializado para militares com coberturas especiais.', desconto: 'Condições especiais', telefone: '(62) 3085-2495', local: 'Goiás' },
    { id: 44, nome: 'Centurions - Proteção Veicular', categoria: 'servicos', descricao: 'Proteção completa para veículos com condições especiais.', desconto: 'Condições especiais', telefone: '(62) 98322-0374', local: 'Goiás' },
    { id: 45, nome: 'Braga Auto Center', categoria: 'servicos', descricao: 'Serviços automotivos e manutenção.', desconto: 'Condições especiais', telefone: '(62) 98162-9779', local: 'Goiânia, GO' },
    { id: 46, nome: 'Originale Couros & Acessórios Automotivos', categoria: 'servicos', descricao: 'Descontos em capas de couro e personalização gratuita.', desconto: 'Condições especiais', telefone: '(62) 99434-2083', local: 'Goiás' },
    { id: 47, nome: 'Lava Jato & Estacionamento Barros', categoria: 'servicos', descricao: '20% de desconto em lavagens e mensalidade especial.', desconto: '20% OFF', telefone: '(62) 9 98240-5000', local: 'Goiânia, GO' },
    { id: 48, nome: 'Aluguel de Veículos', categoria: 'servicos', descricao: 'Serviço de aluguel de veículos com condições especiais.', desconto: 'Condições especiais', telefone: '(62) 99507-4088', local: 'Goiás' },
    { id: 49, nome: 'PAX Goiânia', categoria: 'servicos', descricao: 'Serviços funerários com planos especiais para associados e assistência 24h.', desconto: 'Condições especiais', telefone: '(62) 9 91468050', local: 'Goiânia, GO' },

    // ============ COMÉRCIO ============
    { id: 50, nome: 'Atacadão Dia a Dia', categoria: 'comercio', descricao: 'Atacado e varejo com condições especiais.', desconto: 'Condições especiais', telefone: '(62) 4009-4710', local: 'Goiás' },
    { id: 51, nome: 'Tô Demais', categoria: 'comercio', descricao: 'Loja com descontos em produtos selecionados e promoções exclusivas.', desconto: 'Condições especiais', telefone: '(62) 9932-61568', local: 'Goiás' },
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

  // Filtrar parceiros
  const parceirosFiltrados = parceiros.filter(p => {
    const matchCategoria = categoriaAtiva === 'todas' || p.categoria === categoriaAtiva
    const matchBusca = p.nome.toLowerCase().includes(busca.toLowerCase()) ||
                       p.descricao.toLowerCase().includes(busca.toLowerCase())
    return matchCategoria && matchBusca
  })

  // Helper para ícones de categoria
  const getCategoryIcon = (categoria) => {
    const icons = {
      saude: <Heart size={16} className="text-white" weight="fill" />,
      educacao: <GraduationCap size={16} className="text-white" weight="fill" />,
      lazer: <Airplane size={16} className="text-white" weight="fill" />,
      servicos: <Car size={16} className="text-white" weight="fill" />,
      comercio: <Tag size={16} className="text-white" weight="fill" />,
    }
    return icons[categoria] || <Sparkle size={16} className="text-white" />
  }

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
                href="#parceiros"
                className="inline-flex items-center justify-center gap-2 bg-gold-500 hover:bg-gold-600 text-black font-bold py-4 px-8 rounded-full transition-all hover:scale-105"
              >
                Ver Parceiros
                <ArrowRight size={20} weight="bold" />
              </a>
              <a 
                href="https://api.whatsapp.com/send?phone=5562984520897&text=Olá!%20Quero%20saber%20mais%20sobre%20os%20convênios%20ASSEGO!"
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
      <section className="py-20 bg-[#0B1221]">
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

      {/* Parceria SESC/SENAC */}
      <section className="py-16 bg-gradient-to-br from-[#000e72]/30 to-[#001090]/20">
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

      {/* Busca e Filtros */}
      <section id="parceiros" className="py-8 bg-[#050A18] border-y border-white/10 sticky top-0 z-40">
        <div className="container mx-auto px-6">
          {/* Busca */}
          <div className="max-w-xl mx-auto mb-6">
            <div className="relative">
              <MagnifyingGlass size={20} className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                placeholder="Buscar parceiro..."
                value={busca}
                onChange={(e) => setBusca(e.target.value)}
                className="w-full bg-white/5 border border-white/10 text-white pl-12 pr-4 py-3 rounded-full focus:border-gold-500/50 focus:outline-none transition-colors"
              />
            </div>
          </div>

          {/* Filtros */}
          <div className="flex flex-wrap gap-2 justify-center">
            {categorias.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setCategoriaAtiva(cat.id)}
                className={`flex items-center gap-2 px-4 py-2 rounded-full font-medium text-sm transition-all ${
                  categoriaAtiva === cat.id
                    ? 'bg-gold-500 text-black'
                    : 'bg-white/5 text-gray-300 border border-white/10 hover:border-gold-500/50'
                }`}
              >
                <cat.icon size={16} weight={categoriaAtiva === cat.id ? 'fill' : 'regular'} />
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
              <p className="text-gray-400 mb-8 text-center">
                <span className="text-white font-bold">{parceirosFiltrados.length}</span> parceiros encontrados
              </p>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                {parceirosFiltrados.map((parceiro) => (
                  <div 
                    key={parceiro.id}
                    className={`group bg-white/5 border rounded-xl overflow-hidden hover:border-gold-500/30 transition-all hover:-translate-y-1 ${
                      parceiro.destaque ? 'border-gold-500/50 ring-1 ring-gold-500/20' : 'border-white/10'
                    }`}
                  >
                    {/* Header */}
                    <div className="relative h-20 bg-gradient-to-br from-[#000e72] to-[#001090] p-3 flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        {getCategoryIcon(parceiro.categoria)}
                        <span className="text-white/80 text-xs capitalize">{parceiro.categoria}</span>
                      </div>
                      
                      {parceiro.desconto && (
                        <div className="bg-green-500 text-white text-xs font-bold px-2 py-1 rounded-full flex items-center gap-1">
                          <Percent size={10} weight="bold" />
                          {parceiro.desconto}
                        </div>
                      )}

                      {parceiro.destaque && (
                        <div className="absolute top-2 left-2 bg-gold-500 text-black text-xs font-bold px-2 py-0.5 rounded">
                          DESTAQUE
                        </div>
                      )}
                    </div>
                    
                    <div className="p-4">
                      <h3 className="text-base font-bold text-white mb-2 group-hover:text-gold-400 transition line-clamp-1">
                        {parceiro.nome}
                      </h3>
                      
                      <p className="text-gray-400 text-xs line-clamp-2 mb-3">
                        {parceiro.descricao}
                      </p>

                      <div className="space-y-1 text-xs">
                        {parceiro.local && (
                          <div className="flex items-center gap-2 text-gray-500">
                            <MapPin size={12} className="flex-shrink-0" />
                            <span className="line-clamp-1">{parceiro.local}</span>
                          </div>
                        )}
                        {parceiro.telefone && (
                          <div className="flex items-center gap-2 text-gray-500">
                            <Phone size={12} className="flex-shrink-0" />
                            <span>{parceiro.telefone}</span>
                          </div>
                        )}
                      </div>
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
                className="text-gold-400 hover:underline font-medium"
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
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-2xl md:text-3xl font-display font-bold text-white mb-4">
              Como Usar Seus Descontos
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {[
              { num: '1', titulo: 'Apresente sua Carteirinha', desc: 'Mostre sua carteirinha de associado ASSEGO.', icon: Tag },
              { num: '2', titulo: 'Informe o Convênio', desc: 'Diga que é associado ASSEGO.', icon: Handshake },
              { num: '3', titulo: 'Aproveite o Desconto', desc: 'O desconto será aplicado automaticamente.', icon: Percent },
            ].map((passo, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-gold-500/20 border-2 border-gold-500/30 rounded-full flex items-center justify-center mx-auto mb-4">
                  <passo.icon size={28} className="text-gold-400" weight="duotone" />
                </div>
                <div className="text-4xl font-black text-gold-500/20 mb-2">{passo.num}</div>
                <h3 className="text-white font-bold mb-1">{passo.titulo}</h3>
                <p className="text-gray-400 text-sm">{passo.desc}</p>
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
            <a 
              href="https://assego.net.br/associe/index.php"
              target="_blank"
              rel="noopener noreferrer"
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

export default Vantagens