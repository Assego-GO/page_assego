/**
 * ========================================
 * Activities - Modalidades Esportivas
 * ========================================
 */

import { UsersThree, MusicNotesSimple, Trophy, Heartbeat } from '@phosphor-icons/react'

// Dados das atividades
const activities = [
  {
    id: 1,
    title: 'Judô Inclusivo',
    description: 'Projeto premiado que une disciplina e inclusão social para crianças e adultos.',
    icon: UsersThree,
    gradient: 'from-royal-500 to-royal-600',
    shadow: 'shadow-royal-500/20'
  },
  {
    id: 2,
    title: 'Dança de Salão',
    description: 'Ritmo e movimento para casais e terceira idade. Saúde mental através da dança.',
    icon: MusicNotesSimple,
    gradient: 'from-pink-500 to-purple-600',
    shadow: 'shadow-pink-500/20'
  },
  {
    id: 3,
    title: 'Torneios Oficiais',
    description: 'Sede estadual de campeonatos de Xadrez e Lutas. Estrutura profissional.',
    icon: Trophy,
    gradient: 'from-gold-500 to-orange-600',
    shadow: 'shadow-gold-500/20'
  },
  {
    id: 4,
    title: 'Academia',
    description: 'Equipamentos modernos e acompanhamento profissional para sua saúde.',
    icon: Heartbeat,
    gradient: 'from-green-500 to-emerald-600',
    shadow: 'shadow-green-500/20'
  }
]

function Activities() {
  return (
    <section id="atividades" className="py-32 bg-[#050A18] relative overflow-hidden">
      {/* Blob decorativo */}
      <div className="absolute right-0 top-1/4 w-[800px] h-[800px] bg-royal-600/10 rounded-full blur-[150px] animate-pulse"></div>

      <div className="container mx-auto px-6 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-24 reveal">
          <span className="text-gold-400 font-bold tracking-[0.2em] uppercase text-xs">
            Modalidades
          </span>
          <h2 className="font-display font-bold text-4xl md:text-5xl text-white mt-4 mb-6">
            Esporte é Vida
          </h2>
          <p className="text-gray-400 text-lg font-light">
            Formando campeões e promovendo saúde mental e física para todas as idades.
          </p>
        </div>

        {/* Grid de cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          
          {activities.map((activity, index) => {
            const Icon = activity.icon
            
            return (
              <div 
                key={activity.id}
                className="group bg-white/5 border border-white/10 p-8 rounded-3xl hover:bg-white/10 transition duration-500 reveal cursor-pointer hover:-translate-y-2"
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                {/* Ícone */}
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${activity.gradient} flex items-center justify-center text-white text-3xl mb-8 shadow-lg ${activity.shadow} group-hover:scale-110 transition duration-500`}>
                  <Icon size={32} />
                </div>
                
                {/* Conteúdo */}
                <h3 className="text-xl font-bold text-white mb-3">
                  {activity.title}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  {activity.description}
                </p>
              </div>
            )
          })}
          
        </div>
      </div>
    </section>
  )
}

export default Activities
