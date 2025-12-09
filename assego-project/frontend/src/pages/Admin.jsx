/**
 * ========================================
 * Admin - Painel de Gerenciamento de Notícias
 * ========================================
 * 
 * Acesse: /admin
 * Requer login com email/senha cadastrado no Supabase
 */

import { useState, useEffect } from 'react'
import { 
  SignOut, Plus, Pencil, Trash, Eye, EyeSlash, Star, 
  Check, X 
} from '@phosphor-icons/react'
import { 
  supabase, 
  getSession, 
  loginAdmin, 
  logoutAdmin,
  criarNoticia,
  atualizarNoticia,
  deletarNoticia
} from '../lib/Supabase'

function Admin() {
  const [session, setSession] = useState(null)
  const [loading, setLoading] = useState(true)
  const [noticias, setNoticias] = useState([])
  const [modalAberto, setModalAberto] = useState(false)
  const [noticiaEditando, setNoticiaEditando] = useState(null)
  const [salvando, setSalvando] = useState(false)

  // Form de login
  const [email, setEmail] = useState('')
  const [senha, setSenha] = useState('')
  const [erroLogin, setErroLogin] = useState('')

  // Form de notícia
  const [formNoticia, setFormNoticia] = useState({
    titulo: '',
    resumo: '',
    conteudo: '',
    imagem_url: '',
    categoria: 'Geral',
    destaque: false,
    publicado: true
  })

  const categorias = ['Geral', 'Institucional', 'Benefícios', 'Jurídico', 'Lazer', 'Comunicação']

  // Verificar sessão ao carregar
  useEffect(() => {
    checkSession()
    
    // Escutar mudanças de auth
    const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session)
      if (session) fetchNoticias()
    })

    return () => subscription.unsubscribe()
  }, [])

  async function checkSession() {
    const session = await getSession()
    setSession(session)
    if (session) await fetchNoticias()
    setLoading(false)
  }

  async function fetchNoticias() {
    const { data, error } = await supabase
      .from('noticias')
      .select('*')
      .order('created_at', { ascending: false })
    
    if (!error) setNoticias(data || [])
  }

  async function handleLogin(e) {
    e.preventDefault()
    setErroLogin('')
    const { error } = await loginAdmin(email, senha)
    if (error) {
      setErroLogin('Email ou senha incorretos')
    }
  }

  async function handleLogout() {
    await logoutAdmin()
    setSession(null)
    setNoticias([])
  }

  function abrirModalNovo() {
    setNoticiaEditando(null)
    setFormNoticia({
      titulo: '',
      resumo: '',
      conteudo: '',
      imagem_url: '',
      categoria: 'Geral',
      destaque: false,
      publicado: true
    })
    setModalAberto(true)
  }

  function abrirModalEditar(noticia) {
    setNoticiaEditando(noticia)
    setFormNoticia({
      titulo: noticia.titulo,
      resumo: noticia.resumo || '',
      conteudo: noticia.conteudo || '',
      imagem_url: noticia.imagem_url || '',
      categoria: noticia.categoria || 'Geral',
      destaque: noticia.destaque || false,
      publicado: noticia.publicado
    })
    setModalAberto(true)
  }

  async function handleSalvar() {
    if (!formNoticia.titulo.trim()) {
      alert('Título é obrigatório')
      return
    }

    setSalvando(true)

    if (noticiaEditando) {
      // Atualizar
      const { error } = await atualizarNoticia(noticiaEditando.id, formNoticia)
      if (!error) {
        await fetchNoticias()
        setModalAberto(false)
      }
    } else {
      // Criar
      const { error } = await criarNoticia({
        ...formNoticia,
        data_publicacao: new Date().toISOString()
      })
      if (!error) {
        await fetchNoticias()
        setModalAberto(false)
      }
    }

    setSalvando(false)
  }

  async function handleDeletar(id) {
    if (!confirm('Tem certeza que deseja excluir esta notícia?')) return
    
    const { error } = await deletarNoticia(id)
    if (!error) await fetchNoticias()
  }

  async function togglePublicado(noticia) {
    await atualizarNoticia(noticia.id, { publicado: !noticia.publicado })
    await fetchNoticias()
  }

  async function toggleDestaque(noticia) {
    await atualizarNoticia(noticia.id, { destaque: !noticia.destaque })
    await fetchNoticias()
  }

  // Loading
  if (loading) {
    return (
      <div className="min-h-screen bg-[#050A18] flex items-center justify-center">
        <div className="animate-spin w-12 h-12 border-4 border-gold-500 border-t-transparent rounded-full"></div>
      </div>
    )
  }

  // Tela de Login
  if (!session) {
    return (
      <div className="min-h-screen bg-[#050A18] flex items-center justify-center p-6">
        <div className="w-full max-w-md">
          <div className="text-center mb-8">
            <img src="/logo.png" alt="ASSEGO" className="w-20 h-20 mx-auto mb-4" />
            <h1 className="text-2xl font-bold text-white">Painel Admin</h1>
            <p className="text-gray-500">Faça login para gerenciar as notícias</p>
          </div>

          <form onSubmit={handleLogin} className="bg-white/5 border border-white/10 rounded-2xl p-8">
            {erroLogin && (
              <div className="bg-red-500/20 border border-red-500/50 text-red-400 px-4 py-3 rounded-lg mb-6 text-sm">
                {erroLogin}
              </div>
            )}

            <div className="mb-4">
              <label className="block text-gray-400 text-sm mb-2">Email</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white focus:outline-none focus:border-gold-500"
                required
              />
            </div>

            <div className="mb-6">
              <label className="block text-gray-400 text-sm mb-2">Senha</label>
              <input
                type="password"
                value={senha}
                onChange={(e) => setSenha(e.target.value)}
                className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white focus:outline-none focus:border-gold-500"
                required
              />
            </div>

            <button
              type="submit"
              className="w-full bg-gold-500 hover:bg-gold-600 text-black font-bold py-3 rounded-xl transition"
            >
              Entrar
            </button>
          </form>
        </div>
      </div>
    )
  }

  // Painel Admin
  return (
    <div className="min-h-screen bg-[#050A18] pt-24 pb-12">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
          <div>
            <h1 className="text-3xl font-bold text-white">Gerenciar Notícias</h1>
            <p className="text-gray-500">Logado como: {session.user.email}</p>
          </div>
          <div className="flex gap-3">
            <button
              onClick={abrirModalNovo}
              className="flex items-center gap-2 bg-gold-500 hover:bg-gold-600 text-black font-bold px-6 py-3 rounded-xl transition"
            >
              <Plus size={20} weight="bold" />
              Nova Notícia
            </button>
            <button
              onClick={handleLogout}
              className="flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white px-4 py-3 rounded-xl transition"
            >
              <SignOut size={20} />
            </button>
          </div>
        </div>

        {/* Lista de Notícias */}
        <div className="bg-white/5 border border-white/10 rounded-2xl overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-white/5">
                <tr>
                  <th className="text-left text-gray-400 text-sm font-medium px-6 py-4">Título</th>
                  <th className="text-left text-gray-400 text-sm font-medium px-6 py-4 hidden md:table-cell">Categoria</th>
                  <th className="text-center text-gray-400 text-sm font-medium px-6 py-4">Status</th>
                  <th className="text-center text-gray-400 text-sm font-medium px-6 py-4">Destaque</th>
                  <th className="text-right text-gray-400 text-sm font-medium px-6 py-4">Ações</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5">
                {noticias.map((noticia) => (
                  <tr key={noticia.id} className="hover:bg-white/5 transition">
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-4">
                        {noticia.imagem_url && (
                          <img
                            src={noticia.imagem_url}
                            alt=""
                            className="w-12 h-12 object-cover rounded-lg hidden sm:block"
                          />
                        )}
                        <div>
                          <p className="text-white font-medium line-clamp-1">{noticia.titulo}</p>
                          <p className="text-gray-500 text-xs">
                            {new Date(noticia.data_publicacao).toLocaleDateString('pt-BR')}
                          </p>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 hidden md:table-cell">
                      <span className="bg-[#000e72]/50 text-blue-300 text-xs px-3 py-1 rounded-full">
                        {noticia.categoria}
                      </span>
                    </td>
                    <td className="px-6 py-4 text-center">
                      <button
                        onClick={() => togglePublicado(noticia)}
                        className={`inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-medium transition ${
                          noticia.publicado
                            ? 'bg-green-500/20 text-green-400'
                            : 'bg-gray-500/20 text-gray-400'
                        }`}
                      >
                        {noticia.publicado ? <Eye size={14} /> : <EyeSlash size={14} />}
                        {noticia.publicado ? 'Ativo' : 'Oculto'}
                      </button>
                    </td>
                    <td className="px-6 py-4 text-center">
                      <button
                        onClick={() => toggleDestaque(noticia)}
                        className={`transition ${
                          noticia.destaque ? 'text-gold-400' : 'text-gray-600 hover:text-gray-400'
                        }`}
                      >
                        <Star size={24} weight={noticia.destaque ? 'fill' : 'regular'} />
                      </button>
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex items-center justify-end gap-2">
                        <button
                          onClick={() => abrirModalEditar(noticia)}
                          className="p-2 text-gray-400 hover:text-white hover:bg-white/10 rounded-lg transition"
                        >
                          <Pencil size={18} />
                        </button>
                        <button
                          onClick={() => handleDeletar(noticia.id)}
                          className="p-2 text-gray-400 hover:text-red-400 hover:bg-red-500/10 rounded-lg transition"
                        >
                          <Trash size={18} />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {noticias.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-500">Nenhuma notícia cadastrada</p>
            </div>
          )}
        </div>
      </div>

      {/* Modal de Criar/Editar */}
      {modalAberto && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-[#0a0f1c] border border-white/10 rounded-2xl w-full max-w-2xl max-h-[90vh] overflow-y-auto">
            {/* Header do Modal */}
            <div className="flex items-center justify-between p-6 border-b border-white/10">
              <h2 className="text-xl font-bold text-white">
                {noticiaEditando ? 'Editar Notícia' : 'Nova Notícia'}
              </h2>
              <button
                onClick={() => setModalAberto(false)}
                className="text-gray-400 hover:text-white transition"
              >
                <X size={24} />
              </button>
            </div>

            {/* Form */}
            <div className="p-6 space-y-5">
              {/* Título */}
              <div>
                <label className="block text-gray-400 text-sm mb-2">Título *</label>
                <input
                  type="text"
                  value={formNoticia.titulo}
                  onChange={(e) => setFormNoticia({...formNoticia, titulo: e.target.value})}
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white focus:outline-none focus:border-gold-500"
                  placeholder="Título da notícia"
                />
              </div>

              {/* Resumo */}
              <div>
                <label className="block text-gray-400 text-sm mb-2">Resumo</label>
                <textarea
                  value={formNoticia.resumo}
                  onChange={(e) => setFormNoticia({...formNoticia, resumo: e.target.value})}
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white focus:outline-none focus:border-gold-500 h-24 resize-none"
                  placeholder="Breve descrição da notícia"
                />
              </div>

              {/* Conteúdo */}
              <div>
                <label className="block text-gray-400 text-sm mb-2">Conteúdo</label>
                <textarea
                  value={formNoticia.conteudo}
                  onChange={(e) => setFormNoticia({...formNoticia, conteudo: e.target.value})}
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white focus:outline-none focus:border-gold-500 h-48 resize-none"
                  placeholder="Texto completo da notícia"
                />
              </div>

              {/* URL da Imagem */}
              <div>
                <label className="block text-gray-400 text-sm mb-2">URL da Imagem</label>
                <input
                  type="text"
                  value={formNoticia.imagem_url}
                  onChange={(e) => setFormNoticia({...formNoticia, imagem_url: e.target.value})}
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white focus:outline-none focus:border-gold-500"
                  placeholder="/noticias/imagem.jpg ou URL externa"
                />
              </div>

              {/* Categoria e Opções */}
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-gray-400 text-sm mb-2">Categoria</label>
                  <select
                    value={formNoticia.categoria}
                    onChange={(e) => setFormNoticia({...formNoticia, categoria: e.target.value})}
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white focus:outline-none focus:border-gold-500"
                  >
                    {categorias.map((cat) => (
                      <option key={cat} value={cat} className="bg-[#0a0f1c]">{cat}</option>
                    ))}
                  </select>
                </div>

                <div className="flex flex-col justify-end gap-3">
                  <label className="flex items-center gap-3 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={formNoticia.destaque}
                      onChange={(e) => setFormNoticia({...formNoticia, destaque: e.target.checked})}
                      className="w-5 h-5 rounded border-white/20 bg-white/5 text-gold-500 focus:ring-gold-500"
                    />
                    <span className="text-gray-300 text-sm">Destaque na home</span>
                  </label>
                  <label className="flex items-center gap-3 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={formNoticia.publicado}
                      onChange={(e) => setFormNoticia({...formNoticia, publicado: e.target.checked})}
                      className="w-5 h-5 rounded border-white/20 bg-white/5 text-gold-500 focus:ring-gold-500"
                    />
                    <span className="text-gray-300 text-sm">Publicado</span>
                  </label>
                </div>
              </div>
            </div>

            {/* Footer do Modal */}
            <div className="flex items-center justify-end gap-3 p-6 border-t border-white/10">
              <button
                onClick={() => setModalAberto(false)}
                className="px-6 py-3 text-gray-400 hover:text-white transition"
              >
                Cancelar
              </button>
              <button
                onClick={handleSalvar}
                disabled={salvando}
                className="flex items-center gap-2 bg-gold-500 hover:bg-gold-600 disabled:opacity-50 text-black font-bold px-6 py-3 rounded-xl transition"
              >
                {salvando ? (
                  <div className="w-5 h-5 border-2 border-black/30 border-t-black rounded-full animate-spin"></div>
                ) : (
                  <Check size={20} weight="bold" />
                )}
                {noticiaEditando ? 'Salvar' : 'Criar'}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default Admin