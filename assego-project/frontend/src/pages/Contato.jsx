/**
 * ========================================
 * Contato - Página de Contato Simplificada
 * ========================================
 */

import { 
  MapPin, 
  Phone, 
  WhatsappLogo,
  InstagramLogo,
  FacebookLogo,
  YoutubeLogo,
  EnvelopeSimple
} from '@phosphor-icons/react'

function Contato() {

  const redesSociais = [
    { icon: InstagramLogo, label: 'Instagram', href: 'https://instagram.com/assego', cor: 'hover:bg-gradient-to-br hover:from-purple-600 hover:via-pink-500 hover:to-orange-500' },
    { icon: FacebookLogo, label: 'Facebook', href: 'https://facebook.com/assego', cor: 'hover:bg-blue-600' },
    { icon: YoutubeLogo, label: 'YouTube', href: 'https://youtube.com/@assegooficial1707', cor: 'hover:bg-red-600' },
  ]

  return (
    <main className="bg-[#050A18] min-h-screen">
      
      {/* Hero Section */}
      <section className="relative pt-40 pb-16 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[#000e72]/30 to-[#050A18]"></div>
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="font-display font-black text-4xl md:text-5xl lg:text-6xl text-white mb-6">
              Entre em <span className="text-gold-400">Contato</span>
            </h1>
            
            <p className="text-gray-300 text-lg md:text-xl">
              Estamos à disposição para atender você
            </p>
          </div>
        </div>
      </section>

      {/* Informações de Contato */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            
            {/* Cards de Contato */}
            <div className="grid md:grid-cols-2 gap-6 mb-12">
              
              {/* Telefone */}
              <a 
                href="tel:6232813177"
                className="group bg-white/5 border border-white/10 rounded-2xl p-8 hover:border-gold-500/30 transition-all duration-300 hover:-translate-y-1"
              >
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-500 to-blue-700 flex items-center justify-center text-white mb-5 group-hover:scale-110 transition-transform">
                  <Phone size={32} weight="duotone" />
                </div>
                <h3 className="text-white font-bold text-xl mb-2">Telefone</h3>
                <p className="text-gold-400 font-bold text-2xl">(62) 3281-3177</p>
              </a>

              {/* WhatsApp */}
              <a 
                href="https://wa.me/5562992469099"
                target="_blank"
                rel="noopener noreferrer"
                className="group bg-white/5 border border-white/10 rounded-2xl p-8 hover:border-green-500/30 transition-all duration-300 hover:-translate-y-1"
              >
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-green-500 to-green-700 flex items-center justify-center text-white mb-5 group-hover:scale-110 transition-transform">
                  <WhatsappLogo size={32} weight="duotone" />
                </div>
                <h3 className="text-white font-bold text-xl mb-2">Celular e WhatsApp</h3>
                <p className="text-green-400 font-bold text-2xl">+55 62 9 9246-9099</p>
              </a>

            </div>

            {/* Endereço */}
            <div className="bg-white/5 border border-white/10 rounded-2xl p-8 mb-12">
              <div className="flex flex-col md:flex-row md:items-center gap-6">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-gold-500 to-gold-700 flex items-center justify-center text-white flex-shrink-0">
                  <MapPin size={32} weight="duotone" />
                </div>
                <div>
                  <h3 className="text-white font-bold text-xl mb-2">Endereço</h3>
                  <p className="text-gray-300 text-lg">
                    Rua 87, n° 561 Esquina com Rua 132
                  </p>
                  <p className="text-gray-300 text-lg">
                    Setor Sul - CEP: 74093-300 - Goiânia/GO
                  </p>
                </div>
                <a
                  href="https://maps.google.com/?q=Rua+87,+561,+Setor+Sul,+Goiania,+GO"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="md:ml-auto bg-gold-500 hover:bg-gold-600 text-black font-bold px-6 py-3 rounded-xl transition-all hover:scale-105 flex items-center gap-2 whitespace-nowrap"
                >
                  <MapPin size={20} weight="bold" />
                  Ver no Mapa
                </a>
              </div>
            </div>

            {/* Mapa */}
            <div className="bg-white/5 border border-white/10 rounded-2xl overflow-hidden mb-12">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3821.8661417699396!2d-49.25736368513072!3d-16.686928988251!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x935ef11c9def5555%3A0x7780aa8f5b9b3b5c!2sR.%2087%2C%20561%20-%20Setor%20Sul%2C%20Goi%C3%A2nia%20-%20GO!5e0!3m2!1spt-BR!2sbr!4v1234567890"
                width="100%"
                height="350"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="grayscale-[30%] hover:grayscale-0 transition-all duration-500"
              ></iframe>
            </div>

            {/* Redes Sociais */}
            <div className="text-center">
              <h3 className="text-white font-bold text-xl mb-6">Siga-nos nas Redes Sociais</h3>
              <div className="flex justify-center gap-4">
                {redesSociais.map((rede, index) => (
                  <a
                    key={index}
                    href={rede.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`w-14 h-14 bg-white/10 border border-white/10 rounded-xl flex items-center justify-center text-white ${rede.cor} transition-all duration-300 hover:scale-110 hover:border-transparent`}
                  >
                    <rede.icon size={28} />
                  </a>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>

    </main>
  )
}

export default Contato