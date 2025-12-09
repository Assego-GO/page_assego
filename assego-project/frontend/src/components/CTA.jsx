/**
 * ========================================
 * CTA - Formulário de Filiação
 * ========================================
 * 
 * Envia mensagem formatada para o WhatsApp da ASSEGO
 */

import { useState } from 'react'
import { CheckCircle, Star } from '@phosphor-icons/react'

function CTA() {
  const [nome, setNome] = useState('')
  const [corporacao, setCorporacao] = useState('PMGO')

  // Número do WhatsApp da ASSEGO
  const whatsappNumber = '5562992469099'

  // Função para enviar para o WhatsApp
  const handleSubmit = (e) => {
    e.preventDefault()

    if (!nome.trim()) {
      alert('Por favor, preencha seu nome completo.')
      return
    }

    // Montar a mensagem
    const mensagem = `Olá, vim pelo site, me chamo ${nome.trim()}; sou ${corporacao} e tenho interesse em me associar na ASSEGO.`

    // Codificar a mensagem para URL
    const mensagemCodificada = encodeURIComponent(mensagem)

    // Abrir WhatsApp com a mensagem
    const whatsappUrl = `https://api.whatsapp.com/send?phone=${whatsappNumber}&text=${mensagemCodificada}`
    window.open(whatsappUrl, '_blank')
  }

  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-[#000e72] relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          
          {/* Texto */}
          <div className="text-center lg:text-left">
            <h2 className="font-display font-black text-3xl sm:text-4xl lg:text-5xl text-white mb-4 sm:mb-6">
              Junte-se à Elite.
            </h2>
            <p className="text-white/80 text-base sm:text-lg mb-6 sm:mb-8 max-w-lg mx-auto lg:mx-0">
              Garanta a proteção da sua carreira e o lazer da sua família hoje mesmo. Processo 100% digital e seguro.
            </p>
  </div>

          {/* Formulário */}
          <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-2xl max-w-md mx-auto lg:mx-0 lg:ml-auto w-full">
            <form onSubmit={handleSubmit} className="space-y-5">
              
              {/* Nome Completo */}
              <div>
                <label className="block text-gray-600 text-xs font-bold uppercase tracking-wider mb-2">
                  Nome Completo
                </label>
                <input
                  type="text"
                  value={nome}
                  onChange={(e) => setNome(e.target.value)}
                  placeholder="Ex: Sgt Silva"
                  className="w-full px-4 py-3 border border-gray-200 rounded-xl text-gray-800 placeholder-gray-400 focus:outline-none focus:border-[#000e72] focus:ring-2 focus:ring-[#000e72]/20 transition"
                  required
                />
              </div>

              {/* Corporação */}
              <div>
                <label className="block text-gray-600 text-xs font-bold uppercase tracking-wider mb-2">
                  Corporação
                </label>
                <div className="grid grid-cols-2 gap-3">
                  <button
                    type="button"
                    onClick={() => setCorporacao('PMGO')}
                    className={`py-3 px-4 rounded-xl font-bold text-sm transition-all ${
                      corporacao === 'PMGO'
                        ? 'bg-[#000e72] text-white border-2 border-[#000e72]'
                        : 'bg-white text-gray-600 border-2 border-gray-200 hover:border-gray-300'
                    }`}
                  >
                    PMGO
                  </button>
                  <button
                    type="button"
                    onClick={() => setCorporacao('CBMGO')}
                    className={`py-3 px-4 rounded-xl font-bold text-sm transition-all ${
                      corporacao === 'CBMGO'
                        ? 'bg-[#000e72] text-white border-2 border-[#000e72]'
                        : 'bg-white text-gray-600 border-2 border-gray-200 hover:border-gray-300'
                    }`}
                  >
                    CBMGO
                  </button>
                </div>
              </div>

              {/* Botão Submit */}
              <button
                type="submit"
                className="w-full bg-black hover:bg-gray-900 text-white font-bold py-4 rounded-xl transition-all hover:scale-[1.02] active:scale-[0.98] uppercase tracking-wider"
              >
                Solicitar Filiação
              </button>

            </form>
          </div>

        </div>
      </div>
    </section>
  )
}

export default CTA