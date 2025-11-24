/**
 * ========================================
 * CTA - Call to Action / Formulário
 * ========================================
 */

import { useState } from 'react'
import { CheckFat, Star } from '@phosphor-icons/react'
import { submitContact } from '../services/api'

function CTA() {
  // Estados do formulário
  const [formData, setFormData] = useState({
    nome: '',
    whatsapp: '',
    corporacao: 'PMGO'
  })
  const [isLoading, setIsLoading] = useState(false)
  const [message, setMessage] = useState({ type: '', text: '' })

  // Atualiza campos do formulário
  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  // Envia formulário
  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsLoading(true)
    setMessage({ type: '', text: '' })

    try {
      const response = await submitContact(formData)
      
      if (response.success) {
        setMessage({ type: 'success', text: response.message })
        setFormData({ nome: '', whatsapp: '', corporacao: 'PMGO' })
      }
    } catch (error) {
      setMessage({ 
        type: 'error', 
        text: error.message || 'Erro ao enviar. Tente novamente.' 
      })
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <section id="filiar" className="py-32 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-royal-600 to-military-900"></div>
      <div className="absolute inset-0 opacity-30 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto bg-white/10 backdrop-blur-2xl rounded-[3rem] border border-white/10 overflow-hidden shadow-2xl flex flex-col lg:flex-row reveal">
          
          {/* Lado esquerdo - Informações */}
          <div className="lg:w-1/2 p-12 lg:p-20 text-white flex flex-col justify-center">
            <h2 className="font-display font-black text-4xl lg:text-5xl mb-6">
              Junte-se à Elite.
            </h2>
            <p className="text-gray-300 text-lg mb-10 font-light">
              Garanta a proteção da sua carreira e o lazer da sua família hoje mesmo. 
              Processo 100% digital e seguro.
            </p>
            
            {/* Lista de benefícios */}
            <ul className="space-y-6">
              <li className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-green-500 flex items-center justify-center text-black shadow-[0_0_15px_#22c55e]">
                  <CheckFat size={24} weight="fill" />
                </div>
                <span className="text-lg font-medium">Jurídico 24h Plantão</span>
              </li>
              <li className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-gold-500 flex items-center justify-center text-black shadow-[0_0_15px_#eab308]">
                  <Star size={24} weight="fill" />
                </div>
                <span className="text-lg font-medium">Acesso Total aos Clubes</span>
              </li>
            </ul>
          </div>

          {/* Lado direito - Formulário */}
          <div className="lg:w-1/2 bg-white p-12 lg:p-20">
            <form onSubmit={handleSubmit} className="space-y-6">
              
              {/* Campo Nome */}
              <div>
                <label className="block text-xs font-bold text-gray-400 uppercase tracking-wider mb-2">
                  Nome Completo
                </label>
                <input 
                  type="text"
                  name="nome"
                  value={formData.nome}
                  onChange={handleChange}
                  required
                  className="w-full bg-gray-50 border-b-2 border-gray-200 p-4 focus:border-royal-600 outline-none transition text-gray-900 font-medium placeholder-gray-400"
                  placeholder="Ex: Sgt Silva"
                />
              </div>

              {/* Campo WhatsApp */}
              <div>
                <label className="block text-xs font-bold text-gray-400 uppercase tracking-wider mb-2">
                  WhatsApp
                </label>
                <input 
                  type="tel"
                  name="whatsapp"
                  value={formData.whatsapp}
                  onChange={handleChange}
                  required
                  className="w-full bg-gray-50 border-b-2 border-gray-200 p-4 focus:border-royal-600 outline-none transition text-gray-900 font-medium placeholder-gray-400"
                  placeholder="(62) 99999-9999"
                />
              </div>

              {/* Campo Corporação */}
              <div className="pt-4">
                <label className="block text-xs font-bold text-gray-400 uppercase tracking-wider mb-4">
                  Corporação
                </label>
                <div className="flex gap-4">
                  <label className="flex-1 cursor-pointer group">
                    <input 
                      type="radio" 
                      name="corporacao" 
                      value="PMGO"
                      checked={formData.corporacao === 'PMGO'}
                      onChange={handleChange}
                      className="peer sr-only" 
                    />
                    <div className="text-center py-3 rounded-xl border-2 border-gray-200 peer-checked:border-royal-600 peer-checked:text-royal-600 font-bold text-gray-400 transition group-hover:bg-gray-50">
                      PMGO
                    </div>
                  </label>
                  <label className="flex-1 cursor-pointer group">
                    <input 
                      type="radio" 
                      name="corporacao" 
                      value="CBMGO"
                      checked={formData.corporacao === 'CBMGO'}
                      onChange={handleChange}
                      className="peer sr-only" 
                    />
                    <div className="text-center py-3 rounded-xl border-2 border-gray-200 peer-checked:border-red-600 peer-checked:text-red-600 font-bold text-gray-400 transition group-hover:bg-gray-50">
                      CBMGO
                    </div>
                  </label>
                </div>
              </div>

              {/* Mensagem de feedback */}
              {message.text && (
                <div className={`p-4 rounded-xl text-sm font-medium ${
                  message.type === 'success' 
                    ? 'bg-green-100 text-green-700' 
                    : 'bg-red-100 text-red-700'
                }`}>
                  {message.text}
                </div>
              )}

              {/* Botão Submit */}
              <button 
                type="submit"
                disabled={isLoading}
                className="w-full bg-black text-white font-bold py-5 rounded-xl hover:bg-gray-900 transform hover:-translate-y-1 transition-all duration-300 shadow-xl mt-4 text-lg disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isLoading ? 'ENVIANDO...' : 'SOLICITAR FILIAÇÃO'}
              </button>
            </form>
          </div>
          
        </div>
      </div>
    </section>
  )
}

export default CTA
