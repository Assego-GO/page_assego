/**
 * ========================================
 * Footer - Rodapé Completo
 * ========================================
 */

import { InstagramLogo, FacebookLogo, YoutubeLogo, MapPin, DeviceMobile, Phone, EnvelopeSimple, MapPinLine } from '@phosphor-icons/react'

function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-[#02040a] text-white py-20 border-t border-white/5">
      <div className="container mx-auto px-6">
        
        {/* Seção Logos + Texto (TOPO) */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 pb-8 mb-8 border-b border-white/5">
          
          {/* Logos e Descrição */}
          <div className="text-center lg:text-left">
            {/* Logos - ASSEGO e Presidente */}
            <div className="flex items-center justify-center lg:justify-start gap-6 mb-6">
              <img 
                src="/logo.png" 
                alt="ASSEGO" 
                className="w-20 h-20 object-contain drop-shadow-lg mix-blend-lighten" 
              />
              <div className="w-px h-16 bg-white/10"></div>
              <img 
                src="/logopre.png" 
                alt="Presidente - Sub Ten Sérgio" 
                className="w-40 h-24 object-contain drop-shadow-lg" 
              />
            </div>
            
            <p className="text-gray-500 text-sm leading-relaxed mb-6">
              A Associação dos Subtenentes e Sargentos do Estado de Goiás (Assego), 
              iniciou sua história de desafios e vitórias em 1956. Ao longo dos anos, 
              homens e mulheres contribuíram para a criação de uma entidade classista 
              que representa policiais e bombeiros militares de soldado a coronel.
            </p>

            {/* Redes Sociais */}
            <div className="flex justify-center lg:justify-start gap-4">
              <a 
                href="https://instagram.com/assego/" 
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-pink-500 transition duration-300"
                aria-label="Instagram"
              >
                <InstagramLogo size={28} weight="fill" />
              </a>
              <a 
                href="https://pt-br.facebook.com/assego/" 
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-blue-500 transition duration-300"
                aria-label="Facebook"
              >
                <FacebookLogo size={28} weight="fill" />
              </a>
              <a 
                href="https://www.youtube.com/@assegooficial1707" 
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-red-500 transition duration-300"
                aria-label="YouTube"
              >
                <YoutubeLogo size={28} weight="fill" />
              </a>
            </div>
          </div>

          {/* Mapa */}
          <div className="text-center lg:text-left">
            <div className="flex items-center justify-center lg:justify-start gap-2 mb-4">
              <MapPin size={24} className="text-gold-400" weight="fill" />
              <h4 className="font-bold text-white text-lg">Nossa Localização</h4>
            </div>
            <div className="rounded-xl overflow-hidden border border-white/10 shadow-lg h-[180px]">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3821.8756273456983!2d-49.26308!3d-16.68629!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x935ef6d9c8b3a3d9%3A0x4c4f4f4f4f4f4f4f!2sRua%2087%2C%20St.%20Sul%20-%20Goi%C3%A2nia%2C%20GO!5e0!3m2!1spt-BR!2sbr!4v1234567890"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Localização ASSEGO"
              ></iframe>
            </div>
          </div>
        </div>

        {/* Grid Colunas (MEIO) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12 text-center md:text-left">
          
          {/* Coluna 1 - Institucional */}
          <div>
            <h4 className="font-bold text-white mb-6">Institucional</h4>
            <ul className="space-y-3 text-sm text-gray-500">
              <li><a href="#historia" className="hover:text-gold-400 transition">Nossa História</a></li>
              <li><a href="#diretoria" className="hover:text-gold-400 transition">Diretoria</a></li>
              <li><a href="#estrutura" className="hover:text-gold-400 transition">Estrutura</a></li>
              <li><a href="#transparencia" className="hover:text-gold-400 transition">Transparência</a></li>
            </ul>
          </div>

          {/* Coluna 2 - Serviços */}
          <div>
            <h4 className="font-bold text-white mb-6">Serviços</h4>
            <ul className="space-y-3 text-sm text-gray-500">
              <li><a href="#clube" className="hover:text-gold-400 transition">Sede Goiânia</a></li>
              <li><a href="#hotel-aruana" className="hover:text-gold-400 transition">Hotel Aruanã</a></li>
              <li><a href="#convenios" className="hover:text-gold-400 transition">Parcerias</a></li>
              <li><a href="#atividades" className="hover:text-gold-400 transition">Esportes</a></li>
              <li><a href="https://ouvidoria.assego.com.br/" target="_blank" rel="noopener noreferrer" className="hover:text-gold-400 transition">Ouvidoria ↗</a></li>
            </ul>
          </div>

          {/* Coluna 3 - Contato */}
          <div>
            <h4 className="font-bold text-white mb-6">Fale Conosco</h4>
            <ul className="space-y-3 text-sm text-gray-500">
              <li className="flex items-start gap-2 justify-center md:justify-start">
                <Phone size={16} className="text-gold-400 mt-0.5 flex-shrink-0" weight="bold" />
                <span>(62) 3281-3177</span>
              </li>
              <li className="flex items-start gap-2 justify-center md:justify-start">
                <EnvelopeSimple size={16} className="text-gold-400 mt-0.5 flex-shrink-0" weight="bold" />
                <a href="mailto:secretaria@assego.com.br" className="hover:text-gold-400 transition">secretaria@assego.com.br</a>
              </li>
              <li className="flex items-start gap-2 justify-center md:justify-start">
                <MapPinLine size={16} className="text-gold-400 mt-0.5 flex-shrink-0" weight="bold" />
                <span>Rua 87, St. Sul - Goiânia</span>
              </li>
            </ul>
          </div>

          {/* Coluna 4 - Apps */}
          <div>
            <div className="flex items-center justify-center md:justify-start gap-2 mb-4">
              <DeviceMobile size={20} className="text-gold-400" weight="fill" />
              <h4 className="font-bold text-white">Baixe nosso App</h4>
            </div>
            <p className="text-gray-500 text-xs mb-4">Acesse benefícios e serviços na palma da sua mão</p>
            <div className="flex flex-col gap-3">
              {/* Google Play */}
              <a 
                href="https://play.google.com/store/apps/details?id=br.com.app.gpu3199248.gpu70099d33f4396e73d458c043f8dc34c6"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 bg-white/5 hover:bg-white/10 border border-white/10 rounded-xl px-3 py-2 transition duration-300 group"
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="flex-shrink-0">
                  <path d="M3 20.5V3.5C3 2.91 3.34 2.39 3.84 2.15L13.69 12L3.84 21.85C3.34 21.6 3 21.09 3 20.5Z" fill="currentColor" className="text-green-400"/>
                  <path d="M16.81 15.12L6.05 21.34L14.54 12.85L16.81 15.12Z" fill="currentColor" className="text-gold-400"/>
                  <path d="M20.16 10.81C20.5 11.08 20.75 11.5 20.75 12C20.75 12.5 20.5 12.92 20.16 13.19L17.89 14.5L15.39 12L17.89 9.5L20.16 10.81Z" fill="currentColor" className="text-red-400"/>
                  <path d="M6.05 2.66L16.81 8.88L14.54 11.15L6.05 2.66Z" fill="currentColor" className="text-blue-400"/>
                </svg>
                <div className="text-left">
                  <p className="text-[9px] text-gray-400 uppercase">Disponível no</p>
                  <p className="text-xs font-bold text-white group-hover:text-gold-400 transition">Google Play</p>
                </div>
              </a>

              {/* Apple Store */}
              <a 
                href="https://apps.apple.com/br/app/assego-app/id6747394526"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 bg-white/5 hover:bg-white/10 border border-white/10 rounded-xl px-3 py-2 transition duration-300 group"
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" className="text-white flex-shrink-0">
                  <path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.99-2.54 4.09l.01-.01zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z"/>
                </svg>
                <div className="text-left">
                  <p className="text-[9px] text-gray-400 uppercase">Baixe na</p>
                  <p className="text-xs font-bold text-white group-hover:text-gold-400 transition">App Store</p>
                </div>
              </a>
            </div>
          </div>
        </div>
        
        {/* Copyright */}
        <div className="border-t border-white/5 mt-8 pt-8 text-center text-gray-600 text-xs">
          <p>&copy; {currentYear} ASSEGO - Associação dos Subtenentes e Sargentos do Estado de Goiás. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer