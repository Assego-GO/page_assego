/**
 * ========================================
 * AppSection - Seção do Aplicativo ASSEGO
 * ========================================
 * 
 * Apresenta o app da ASSEGO com mockup de celular
 */

import { useEffect, useRef } from 'react'
import { DeviceMobile, CheckCircle, Star } from '@phosphor-icons/react'

function AppSection() {
  const videoRef = useRef(null)

  // Garantir que o vídeo rode automaticamente
  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch(() => {
        // Fallback se autoplay for bloqueado
      })
    }
  }, [])

  // Funcionalidades do app
  const funcionalidades = [
    'Carteirinha Digital',
    'Agendamento de Serviços',
    'Notícias e Comunicados',
    'Acesso ao Jurídico',
    'Clube de Vantagens',
    'Chat com Suporte',
  ]

  return (
    <section className="relative py-16 bg-gradient-to-b from-[#050A18] via-[#0a1628] to-[#050A18] overflow-hidden">
      {/* Elementos decorativos de fundo */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-0 w-72 h-72 bg-gold-500/10 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-1/4 right-0 w-72 h-72 bg-[#000e72]/20 rounded-full blur-[120px]"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          {/* Coluna Esquerda - Conteúdo */}
          <div className="text-center lg:text-left order-2 lg:order-1">
            {/* Logos */}
            <div className="flex items-center justify-center lg:justify-start gap-4 mb-6">
              <img 
                src="/logoapp.png" 
                alt="ASSEGO App" 
                className="w-18 h-28 object-contain drop-shadow-lg"
              />
              
              <div className="w-px h-12 bg-white/20"></div>
              <img 
                src="/logopre.png" 
                alt="Presidente ASSEGO" 
                className="w-24 h-20 object-contain drop-shadow-lg"
              />
            </div>

            {/* Badge */}
            <span className="inline-flex items-center gap-2 bg-gold-500 text-black px-4 py-2 rounded-full text-sm font-bold mb-5">
              <DeviceMobile size={18} weight="fill" />
              NOVO APLICATIVO
            </span>

            <h2 className="font-display font-black text-3xl md:text-4xl text-white mb-2 leading-tight">
              A ASSEGO na
            </h2>
            <h2 className="font-display font-black text-3xl md:text-4xl mb-5 leading-tight">
              <span className="text-gradient-gold">Palma da Sua Mão</span>
            </h2>

            <p className="text-gray-300 text-base mb-6 max-w-md mx-auto lg:mx-0">
              Baixe o aplicativo oficial da ASSEGO e tenha acesso a todos os serviços, 
              benefícios e informações de onde você estiver. Praticidade e comodidade para o associado.
            </p>

            {/* Funcionalidades */}
            <div className="grid grid-cols-2 gap-2 mb-8 max-w-md mx-auto lg:mx-0">
              {funcionalidades.map((func, index) => (
                <div key={index} className="flex items-center gap-2 text-gray-300 text-sm">
                  <CheckCircle size={16} className="text-green-500 flex-shrink-0" weight="fill" />
                  <span>{func}</span>
                </div>
              ))}
            </div>

            {/* Botões de Download - Estilo Oficial */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              {/* Google Play */}
              <a 
                href="https://play.google.com/store/apps/details?id=br.com.app.gpu3199248.gpu70099d33f4396e73d458c043f8dc34c6" 
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-3 bg-black hover:bg-[#1a1a1a] text-white pl-4 pr-6 py-3 rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-black/30 border border-white/10"
              >
                {/* Ícone Google Play */}
                <svg className="w-8 h-8" viewBox="0 0 512 512" fill="none">
                  <path d="M325.3 234.3L104.6 13l280.8 161.2-60.1 60.1zM47 0C34 6.8 25.3 19.2 25.3 35.3v441.3c0 16.1 8.7 28.5 21.7 35.3l256.6-256L47 0zm425.2 225.6l-58.9-34.1-65.7 64.5 65.7 64.5 60.1-34.1c18-14.3 18-46.5-1.2-60.8zM104.6 499l280.8-161.2-60.1-60.1L104.6 499z" fill="url(#playGradient)"/>
                  <defs>
                    <linearGradient id="playGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#00C4FF"/>
                      <stop offset="25%" stopColor="#00F076"/>
                      <stop offset="50%" stopColor="#FFBC00"/>
                      <stop offset="100%" stopColor="#FF3A44"/>
                    </linearGradient>
                  </defs>
                </svg>
                <div className="text-left">
                  <span className="text-[10px] uppercase tracking-wider text-gray-400 block leading-tight">Disponível no</span>
                  <p className="font-semibold text-lg leading-tight -mt-0.5">Google Play</p>
                </div>
              </a>

              {/* App Store */}
              <a 
                href="https://apps.apple.com/br/app/assego-app/id6747394526" 
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-3 bg-black hover:bg-[#1a1a1a] text-white pl-4 pr-6 py-3 rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-black/30 border border-white/10"
              >
                {/* Ícone Apple */}
                <svg className="w-8 h-8" viewBox="0 0 384 512" fill="currentColor">
                  <path d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z"/>
                </svg>
                <div className="text-left">
                  <span className="text-[10px] uppercase tracking-wider text-gray-400 block leading-tight">Baixe na</span>
                  <p className="font-semibold text-lg leading-tight -mt-0.5">App Store</p>
                </div>
              </a>
            </div>

            {/* Avaliações */}
            <div className="mt-6 flex items-center gap-3 justify-center lg:justify-start">
              <div className="flex items-center gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={16} weight="fill" className="text-gold-400" />
                ))}
              </div>
              <span className="text-gray-400 text-sm">4.9 • Mais de 1.000 downloads</span>
            </div>
          </div>

          {/* Coluna Direita - Mockups dos Celulares */}
          <div className="flex justify-center order-1 lg:order-2">
            <div className="relative">
              {/* Glow effect animado atrás dos celulares */}
              <div className="absolute -inset-8 bg-gradient-to-br from-gold-500/20 via-[#000e72]/30 to-gold-500/20 rounded-[3rem] blur-3xl opacity-60 animate-pulse"></div>
              
              {/* Círculos decorativos animados */}
              <div className="absolute -top-8 -right-4 w-24 h-24 border border-gold-500/20 rounded-full animate-[spin_25s_linear_infinite]"></div>
              <div className="absolute -bottom-6 -left-8 w-20 h-20 border border-[#000e72]/30 rounded-full animate-[spin_20s_linear_infinite_reverse]"></div>

              {/* Container dos dois celulares */}
              <div className="relative w-[320px] md:w-[380px] h-[500px] md:h-[580px]">
                
                {/* CELULAR DE TRÁS - Imagem Estática */}
                <div className="absolute top-0 right-0 w-[200px] md:w-[240px] h-[400px] md:h-[480px] bg-gradient-to-b from-gray-700 via-gray-800 to-gray-900 rounded-[2rem] p-1 shadow-xl border border-white/5 transform rotate-6 translate-x-4 -translate-y-2 opacity-80">
                  {/* Notch */}
                  <div className="absolute top-2.5 left-1/2 -translate-x-1/2 w-16 h-4 bg-black rounded-full z-20"></div>
                  
                  {/* Tela */}
                  <div className="relative w-full h-full bg-black rounded-[1.75rem] overflow-hidden">
                    <img 
                      src="/app-preview.jpeg" 
                      alt="ASSEGO App Preview"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  
                  {/* Home indicator */}
                  <div className="absolute bottom-1.5 left-1/2 -translate-x-1/2 w-16 h-1 bg-white/20 rounded-full z-20"></div>
                </div>

                {/* CELULAR DA FRENTE - Vídeo */}
                <div className="absolute bottom-0 left-0 w-[220px] md:w-[260px] h-[440px] md:h-[520px] bg-gradient-to-b from-gray-800 via-gray-900 to-black rounded-[2.5rem] p-1.5 shadow-2xl border border-white/10 transform -rotate-3 z-10 group hover:scale-[1.02] transition-transform duration-500">
                  {/* Borda interna brilhante */}
                  <div className="absolute inset-0 rounded-[2.5rem] bg-gradient-to-tr from-white/10 via-transparent to-white/5 pointer-events-none"></div>
                  
                  {/* Notch/Dynamic Island */}
                  <div className="absolute top-3 left-1/2 -translate-x-1/2 w-20 h-5 bg-black rounded-full z-20 flex items-center justify-center gap-2">
                    <div className="w-2 h-2 bg-gray-800 rounded-full"></div>
                    <div className="w-8 h-2 bg-gray-800 rounded-full"></div>
                  </div>
                  
                  {/* Tela do celular com vídeo */}
                  <div className="relative w-full h-full bg-black rounded-[2rem] overflow-hidden">
                    <video
                      ref={videoRef}
                      className="w-full h-full object-cover"
                      autoPlay
                      loop
                      muted
                      playsInline
                    >
                      <source src="/app-demo.mp4" type="video/mp4" />
                    </video>
                    
                    {/* Overlay sutil no topo */}
                    <div className="absolute top-0 left-0 right-0 h-10 bg-gradient-to-b from-black/40 to-transparent pointer-events-none"></div>
                  </div>

                  {/* Botões laterais do celular */}
                  <div className="absolute right-[-2px] top-24 w-[3px] h-10 bg-gray-600 rounded-l-full"></div>
                  <div className="absolute left-[-2px] top-20 w-[3px] h-6 bg-gray-600 rounded-r-full"></div>
                  <div className="absolute left-[-2px] top-32 w-[3px] h-14 bg-gray-600 rounded-r-full"></div>
                  
                  {/* Barra inferior do celular (home indicator) */}
                  <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-24 h-1 bg-white/30 rounded-full z-20"></div>
                  
                  {/* Reflexo */}
                  <div className="absolute top-0 left-0 right-1/2 bottom-1/2 bg-gradient-to-br from-white/5 to-transparent rounded-tl-[2.5rem] pointer-events-none"></div>
                </div>

              </div>
              
              {/* Partículas flutuantes */}
              <div className="absolute -top-4 right-16 w-2 h-2 bg-gold-400/60 rounded-full animate-bounce" style={{ animationDelay: '0s', animationDuration: '2s' }}></div>
              <div className="absolute top-1/3 -right-2 w-1.5 h-1.5 bg-blue-400/60 rounded-full animate-bounce" style={{ animationDelay: '0.5s', animationDuration: '2.5s' }}></div>
              <div className="absolute bottom-1/4 -left-4 w-2 h-2 bg-gold-400/60 rounded-full animate-bounce" style={{ animationDelay: '1s', animationDuration: '3s' }}></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AppSection