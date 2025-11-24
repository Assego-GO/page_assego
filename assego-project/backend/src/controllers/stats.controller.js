/**
 * ========================================
 * Controller de Estatísticas
 * ========================================
 * 
 * Retorna dados para a seção de números/stats
 */

// Dados das estatísticas
const stats = [
  {
    id: 1,
    value: 67,
    suffix: '',
    label: 'Anos de História',
    description: 'Fundada em 1956'
  },
  {
    id: 2,
    value: 5000,
    suffix: '+',
    label: 'Famílias',
    description: 'Associados ativos'
  },
  {
    id: 3,
    value: 24,
    suffix: 'h',
    label: 'Jurídico',
    description: 'Plantão permanente'
  },
  {
    id: 4,
    value: 100,
    suffix: '%',
    label: 'Compromisso',
    description: 'Dedicação total'
  }
];

/**
 * Retorna todas as estatísticas
 */
export const getStats = async (req, res) => {
  try {
    res.json({
      success: true,
      data: stats
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Erro ao buscar estatísticas'
    });
  }
};
