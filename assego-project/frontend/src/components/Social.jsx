/**
 * ========================================
 * Social - Seção de Responsabilidade Social
 * ========================================
 */

import { Heart } from '@phosphor-icons/react'

function Social() {
  return (
    <section id="social" className="py-32 bg-gray-50 relative">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-20">
          
          {/* Composição de Imagem */}
          <div className="lg:w-1/2 relative reveal">
            {/* Borda decorativa */}
            <div className="absolute -top-10 -left-10 w-full h-full border-[3px] border-gold-400/30 rounded-[2rem]"></div>
            
            {/* Imagem principal */}
            <div className="relative rounded-[2rem] overflow-hidden shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1516382799247-87df95d790b7?q=80&w=800" 
                alt="Projeto Social" 
                className="w-full object-cover"
              />
              
              {/* Badge flutuante */}
              <div className="absolute bottom-8 right-8 bg-white/90 backdrop-blur p-6 rounded-2xl shadow-xl max-w-xs">
                <div className="flex items-start gap-4">
                  <Heart size={32} className="text-red-500 flex-shrink-0" weight="fill" />
                  <div>
                    <p className="font-bold text-gray-900 text-lg">Projeto Acolher</p>
                    <p className="text-sm text-gray-500 mt-1">
                      Dedicado ao desenvolvimento de crianças especiais.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Conteúdo */}
          <div className="lg:w-1/2 reveal">
            <span className="text-royal-600 font-bold tracking-[0.2em] uppercase text-xs mb-4 block">
              Responsabilidade Social
            </span>
            
            <h2 className="font-display font-bold text-4xl md:text-5xl text-gray-900 mb-6">
              Cuidando de quem cuida de nós.
            </h2>
            
            <p className="text-gray-600 text-lg leading-relaxed mb-8 font-light">
              A ASSEGO vai além da representação classista. Somos um braço amigo 
              para a família militar. Nossos projetos sociais são referência no 
              atendimento a pessoas com atraso no desenvolvimento mental, 
              promovendo dignidade e amor.
            </p>
            
            {/* Citação */}
            <div className="pl-6 border-l-4 border-gold-400">
              <p className="text-xl italic text-gray-800 font-serif">
                "A inclusão não é apenas uma palavra aqui. É a prática diária do amor ao próximo."
              </p>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  )
}

export default Social
