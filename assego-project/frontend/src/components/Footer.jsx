/**
 * ========================================
 * Footer - Rodapé
 * ========================================
 */

import { InstagramLogo, FacebookLogo } from '@phosphor-icons/react'

function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-[#02040a] text-white py-20 border-t border-white/5">
      <div className="container mx-auto px-6 text-center md:text-left">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          
          {/* Logo e Descrição */}
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center justify-center md:justify-start gap-3 mb-6">
              <img 
                src="/logo.png" 
                alt="ASSEGO" 
                className="w-12 h-12 rounded-full object-cover shadow-sm" 
              />
              <span className="font-display font-bold text-2xl tracking-widest">ASSEGO</span>
            </div>
            <p className="text-gray-500 text-sm leading-relaxed">
              A Associação dos Subtenentes e Sargentos do Estado de Goiás (Assego), 
              iniciou sua história de desafios e vitórias em 1956. Ao longo dos anos, 
              homens e mulheres contribuíram para a criação de uma entidade classista 
              que representa policiais e bombeiros militares de soldado a coronel.
            </p>
          </div>
          
          {/* Institucional */}
          <div>
            <h4 className="font-bold text-white mb-6">Institucional</h4>
            <ul className="space-y-3 text-sm text-gray-500">
              <li>
                <a href="#" className="hover:text-gold-400 transition">Nossa História</a>
              </li>
              <li>
                <a href="#" className="hover:text-gold-400 transition">Diretoria</a>
              </li>
              <li>
                <a href="#" className="hover:text-gold-400 transition">Transparência</a>
              </li>
            </ul>
          </div>

          {/* Facilidades */}
          <div>
            <h4 className="font-bold text-white mb-6">Facilidades</h4>
            <ul className="space-y-3 text-sm text-gray-500">
              <li>
                <a href="#" className="hover:text-gold-400 transition">Reservar Quiosque</a>
              </li>
              <li>
                <a href="#" className="hover:text-gold-400 transition">Hotel de Trânsito</a>
              </li>
              <li>
                <a href="#" className="hover:text-gold-400 transition">Clube de Vantagens</a>
              </li>
            </ul>
          </div>

          {/* Contato */}
          <div>
            <h4 className="font-bold text-white mb-6">Fale Conosco</h4>
            <ul className="space-y-3 text-sm text-gray-500">
              <li>(62) 3281-3177</li>
              <li>secretaria@assego.com.br</li>
              <li>Rua 87, St. Sul - Goiânia</li>
            </ul>
            
            {/* Redes Sociais */}
            <div className="flex justify-center md:justify-start gap-4 mt-6">
              <a 
                href="#" 
                className="text-gray-400 hover:text-white transition"
                aria-label="Instagram"
              >
                <InstagramLogo size={28} />
              </a>
              <a 
                href="#" 
                className="text-gray-400 hover:text-white transition"
                aria-label="Facebook"
              >
                <FacebookLogo size={28} />
              </a>
            </div>
          </div>
        </div>
        
        {/* Copyright */}
        <div className="border-t border-white/5 mt-16 pt-8 text-center text-gray-600 text-xs">
          &copy; {currentYear} ASSEGO. Todos os direitos reservados.
        </div>
      </div>
    </footer>
  )
}

export default Footer
