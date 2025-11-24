/**
 * ========================================
 * Controller de Contato / Filiação
 * ========================================
 * 
 * Contém a lógica de negócio para contatos
 * No futuro, aqui você conectaria com o banco de dados
 */

// Simulação de banco de dados (em memória)
// Em produção, use MongoDB, PostgreSQL, etc.
let contacts = [];

/**
 * Recebe e processa solicitação de filiação
 */
export const submitContact = async (req, res) => {
  try {
    const { nome, whatsapp, corporacao } = req.body;

    // Validação básica
    if (!nome || !whatsapp || !corporacao) {
      return res.status(400).json({
        success: false,
        message: 'Todos os campos são obrigatórios',
        fields: {
          nome: !nome ? 'Nome é obrigatório' : null,
          whatsapp: !whatsapp ? 'WhatsApp é obrigatório' : null,
          corporacao: !corporacao ? 'Corporação é obrigatória' : null
        }
      });
    }

    // Validar corporação
    if (!['PMGO', 'CBMGO'].includes(corporacao)) {
      return res.status(400).json({
        success: false,
        message: 'Corporação deve ser PMGO ou CBMGO'
      });
    }

    // Criar novo contato
    const newContact = {
      id: Date.now().toString(),
      nome,
      whatsapp,
      corporacao,
      status: 'pendente',
      createdAt: new Date().toISOString()
    };

    // Salvar (em produção, salvaria no banco de dados)
    contacts.push(newContact);

    console.log('📧 Nova solicitação de filiação:', newContact);

    // Resposta de sucesso
    res.status(201).json({
      success: true,
      message: 'Solicitação enviada com sucesso! Entraremos em contato em breve.',
      data: {
        id: newContact.id,
        nome: newContact.nome,
        status: newContact.status
      }
    });

  } catch (error) {
    console.error('Erro ao processar contato:', error);
    res.status(500).json({
      success: false,
      message: 'Erro ao processar solicitação'
    });
  }
};

/**
 * Lista todos os contatos (para admin)
 */
export const getContacts = async (req, res) => {
  try {
    res.json({
      success: true,
      count: contacts.length,
      data: contacts
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Erro ao buscar contatos'
    });
  }
};
