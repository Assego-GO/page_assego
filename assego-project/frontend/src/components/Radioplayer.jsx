/**
 * ========================================
 * RadioPlayer - Player de Rádio Customizado
 * ========================================
 */

import { useState, useRef } from 'react'
import { Play, Pause, Broadcast } from '@phosphor-icons/react'

function RadioPlayer() {
  const [isPlaying, setIsPlaying] = useState(false)
  const audioRef = useRef(null)

  const streamUrl = 'https://sv14.hdradios.net:7272/stream'

  const togglePlay = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause()
        audioRef.current.removeAttribute('src')
        audioRef.current.load()
        setIsPlaying(false)
      } else {
        audioRef.current.src = streamUrl
        audioRef.current.volume = 0.8
        audioRef.current.play().catch(e => console.log('Autoplay blocked:', e))
        setIsPlaying(true)
      }
    }
  }

  return (
    <div className={`hidden md:flex items-center gap-3 backdrop-blur-md rounded-full px-4 py-2 flex-shrink-0 transition-all duration-500 ${
      isPlaying 
        ? 'bg-gradient-to-r from-gold-500/20 to-gold-600/10 border border-gold-500/30 shadow-[0_0_20px_rgba(255,193,7,0.15)]' 
        : 'bg-black/40 border border-white/10 hover:border-white/20'
    }`}>
      {/* Audio Element */}
      <audio ref={audioRef} preload="none" />

      {/* Ícone da Rádio com efeito */}
      <div className="relative flex-shrink-0">
        <div className={`absolute inset-0 rounded-full blur-md transition-opacity duration-500 ${
          isPlaying ? 'bg-gold-500/40 opacity-100' : 'opacity-0'
        }`}></div>
        <img 
          src="/iconeradio.png" 
          alt="Rádio Voz" 
          className={`relative w-8 h-8 object-contain transition-transform duration-300 ${
            isPlaying ? 'scale-110' : ''
          }`}
        />
        {isPlaying && (
          <span className="absolute -top-0.5 -right-0.5 w-2.5 h-2.5 bg-green-500 rounded-full animate-pulse shadow-[0_0_8px_#22c55e]"></span>
        )}
      </div>

      {/* Info */}
      <div className="hidden lg:flex flex-col leading-tight">
        <span className="text-white text-xs font-bold tracking-wide">Rádio Voz ASSEGO</span>
        <span className="text-[10px] flex items-center gap-1">
          {isPlaying ? (
            <>
              <Broadcast size={10} weight="fill" className="text-green-400 animate-pulse" />
              <span className="text-green-400 font-medium">AO VIVO</span>
            </>
          ) : (
            <span className="text-gray-400">Clique ▶</span>
          )}
        </span>
      </div>

      {/* Botão Play/Pause */}
      <button
        onClick={togglePlay}
        className={`relative flex items-center justify-center w-10 h-10 rounded-full transition-all duration-300 hover:scale-110 flex-shrink-0 overflow-hidden ${
          isPlaying 
            ? 'bg-gradient-to-br from-gold-400 to-gold-600 shadow-[0_0_15px_rgba(255,193,7,0.4)]' 
            : 'bg-gradient-to-br from-[#000e72] to-[#001090] hover:shadow-[0_0_15px_rgba(0,14,114,0.5)]'
        }`}
        title={isPlaying ? 'Pausar' : 'Ouvir Rádio'}
      >
        {/* Efeito de brilho interno */}
        <div className="absolute inset-0 bg-gradient-to-t from-transparent to-white/20 rounded-full"></div>
        
        {isPlaying ? (
          <Pause size={18} weight="fill" className="relative text-black" />
        ) : (
          <Play size={18} weight="fill" className="relative text-white ml-0.5" />
        )}
      </button>

      {/* Indicador de onda sonora animada */}
      {isPlaying && (
        <div className="hidden xl:flex items-end gap-0.5 h-5">
          <span className="w-1 bg-gradient-to-t from-gold-600 to-gold-400 rounded-full animate-[soundwave_0.5s_ease-in-out_infinite]" style={{ height: '40%' }}></span>
          <span className="w-1 bg-gradient-to-t from-gold-600 to-gold-400 rounded-full animate-[soundwave_0.5s_ease-in-out_infinite_0.1s]" style={{ height: '80%' }}></span>
          <span className="w-1 bg-gradient-to-t from-gold-600 to-gold-400 rounded-full animate-[soundwave_0.5s_ease-in-out_infinite_0.2s]" style={{ height: '50%' }}></span>
          <span className="w-1 bg-gradient-to-t from-gold-600 to-gold-400 rounded-full animate-[soundwave_0.5s_ease-in-out_infinite_0.3s]" style={{ height: '90%' }}></span>
          <span className="w-1 bg-gradient-to-t from-gold-600 to-gold-400 rounded-full animate-[soundwave_0.5s_ease-in-out_infinite_0.4s]" style={{ height: '60%' }}></span>
        </div>
      )}
    </div>
  )
}

export default RadioPlayer