/**
 * ========================================
 * Controller de Parceiros
 * ========================================
 * 
 * Gerencia dados dos parceiros/convênios
 * Dados mockados - em produção viriam do banco
 */

// Dados dos parceiros (mock)
const partners = [
  {
    id: '1',
    name: 'Bali Park',
    location: 'Luziânia - GO',
    description: 'A maior praia artificial da América do Sul. Diversão sem limites para toda a família com descontos exclusivos.',
    image: 'https://images.unsplash.com/photo-1605218427368-35b012180767?q=80&w=800',
    discount: '20%',
    featured: true,
    category: 'lazer',
    accentColor: 'gold'
  },
  {
    id: '2',
    name: 'Lagoa Termas',
    location: 'Caldas Novas - GO',
    description: 'O berço das águas termais. Tradição, natureza e relaxamento no coração de Caldas Novas.',
    image: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?q=80&w=800',
    discount: '15%',
    featured: true,
    category: 'hotel',
    accentColor: 'orange'
  },
  {
    id: '3',
    name: 'Hotel Aruanã',
    location: 'Aruanã - GO',
    description: 'Às margens do Rio Araguaia. A pescaria e o descanso que você merece em nossa sede própria.',
    image: 'https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?q=80&w=800',
    discount: 'Exclusivo ASSEGO',
    featured: true,
    exclusive: true,
    category: 'hotel',
    accentColor: 'green'
  },
  {
    id: '4',
    name: 'SESC Goiás',
    location: 'Goiânia - GO',
    description: 'Cultura, lazer e educação para toda a família com condições especiais.',
    image: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=800',
    discount: '10%',
    featured: false,
    category: 'lazer'
  },
  {
    id: '5',
    name: 'Unimed',
    location: 'Goiânia - GO',
    description: 'Planos de saúde com valores diferenciados para associados ASSEGO.',
    image: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?q=80&w=800',
    discount: 'Tabela especial',
    featured: false,
    category: 'saude'
  },
  {
    id: '6',
    name: 'Drogasil',
    location: 'Todo o Estado',
    description: 'Descontos em medicamentos e produtos de saúde.',
    image: 'https://images.unsplash.com/photo-1587854692152-cbe660dbde88?q=80&w=800',
    discount: '15%',
    featured: false,
    category: 'saude'
  }
];

// Nomes dos parceiros para o carrossel
const partnerNames = [
  'BALI PARK',
  'LAGOA TERMAS',
  'SESC GOIÁS',
  'HOTEL ARUANÃ',
  'UNIMED',
  'DROGASIL'
];

/**
 * Lista todos os parceiros
 */
export const getAllPartners = async (req, res) => {
  try {
    // Filtros opcionais via query string
    const { category, featured } = req.query;
    
    let result = [...partners];
    
    if (category) {
      result = result.filter(p => p.category === category);
    }
    
    if (featured === 'true') {
      result = result.filter(p => p.featured);
    }

    res.json({
      success: true,
      count: result.length,
      data: result,
      carousel: partnerNames
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Erro ao buscar parceiros'
    });
  }
};

/**
 * Lista parceiros em destaque
 */
export const getFeaturedPartners = async (req, res) => {
  try {
    const featured = partners.filter(p => p.featured);
    
    res.json({
      success: true,
      count: featured.length,
      data: featured
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Erro ao buscar parceiros em destaque'
    });
  }
};

/**
 * Busca parceiro por ID
 */
export const getPartnerById = async (req, res) => {
  try {
    const { id } = req.params;
    const partner = partners.find(p => p.id === id);
    
    if (!partner) {
      return res.status(404).json({
        success: false,
        message: 'Parceiro não encontrado'
      });
    }

    res.json({
      success: true,
      data: partner
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Erro ao buscar parceiro'
    });
  }
};
