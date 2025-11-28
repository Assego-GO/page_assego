/**
 * ========================================
 * RadioPlayer - Player de Rádio Customizado
 * ========================================
 */

import { useState, useRef, useEffect } from 'react'
import { Play, Pause, SpeakerHigh, SpeakerLow, SpeakerNone, Broadcast, Plus, Minus } from '@phosphor-icons/react'

function RadioPlayer() {
  const [isPlaying, setIsPlaying] = useState(false)
  const [volume, setVolume] = useState(0.8)
  const audioRef = useRef(null)

  const streamUrl = 'https://sv14.hdradios.net:7272/stream'

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = volume
    }
  }, [volume])

  const togglePlay = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause()
        audioRef.current.removeAttribute('src')
        audioRef.current.load()
        setIsPlaying(false)
      } else {
        audioRef.current.src = streamUrl
        audioRef.current.play().catch(e => console.log('Autoplay blocked:', e))
        setIsPlaying(true)
      }
    }
  }

  const increaseVolume = () => {
    const newVolume = Math.min(1, volume + 0.1)
    setVolume(newVolume)
    if (audioRef.current) {
      audioRef.current.volume = newVolume
    }
  }

  const decreaseVolume = () => {
    const newVolume = Math.max(0, volume - 0.1)
    setVolume(newVolume)
    if (audioRef.current) {
      audioRef.current.volume = newVolume
    }
  }

  const getVolumeIcon = () => {
    if (volume === 0) return <SpeakerNone size={12} weight="fill" />
    if (volume < 0.5) return <SpeakerLow size={12} weight="fill" />
    return <SpeakerHigh size={12} weight="fill" />
  }

  return (
    <div className="hidden md:flex items-center gap-2 bg-black/50 backdrop-blur border border-white/10 rounded-full px-3 py-1.5 flex-shrink-0">
      {/* Audio Element */}
      <audio ref={audioRef} preload="none" />

      {/* Ícone da Rádio */}
      <div className="relative flex-shrink-0">
        <img 
          src="/iconeradio.png" 
          alt="Rádio Voz" 
          className="w-7 h-7 object-contain"
        />
        {isPlaying && (
          <span className="absolute -top-0.5 -right-0.5 w-2.5 h-2.5 bg-green-500 rounded-full animate-pulse"></span>
        )}
      </div>

      {/* Info */}
      <div className="hidden lg:flex flex-col leading-none mx-1">
        <span className="text-white text-[10px] font-bold">Rádio Voz ASSEGO</span>
        <span className="text-[9px] flex items-center gap-1">
          {isPlaying ? (
            <>
              <Broadcast size={9} className="text-green-400" />
              <span className="text-green-400">AO VIVO</span>
            </>
          ) : (
            <span className="text-gray-400">Clique ▶</span>
          )}
        </span>
      </div>

      {/* Botão Play/Pause */}
      <button
        onClick={togglePlay}
        className={`flex items-center justify-center w-8 h-8 rounded-full transition-all duration-300 hover:scale-110 flex-shrink-0 ${
          isPlaying 
            ? 'bg-gold-500 hover:bg-gold-600' 
            : 'bg-[#000e72] hover:bg-[#001090]'
        }`}
        title={isPlaying ? 'Pausar' : 'Ouvir Rádio'}
      >
        {isPlaying ? (
          <Pause size={14} weight="fill" className="text-black" />
        ) : (
          <Play size={14} weight="fill" className="text-white ml-0.5" />
        )}
      </button>

      {/* Controles de Volume */}
      <div className="flex items-center gap-1">
        <button
          onClick={decreaseVolume}
          className="flex items-center justify-center w-6 h-6 text-gray-400 hover:text-white hover:bg-white/10 rounded transition-all"
          title="Diminuir volume"
        >
          <Minus size={12} weight="bold" />
        </button>
        
        <span className="text-gray-300">
          {getVolumeIcon()}
        </span>

        <button
          onClick={increaseVolume}
          className="flex items-center justify-center w-6 h-6 text-gray-400 hover:text-white hover:bg-white/10 rounded transition-all"
          title="Aumentar volume"
        >
          <Plus size={12} weight="bold" />
        </button>
      </div>

      {/* Indicador de onda sonora animada */}
      {isPlaying && (
        <div className="hidden xl:flex items-end gap-0.5 h-4 ml-1">
          <span className="w-1 bg-gold-400 rounded-full animate-pulse" style={{ height: '40%', animationDelay: '0ms' }}></span>
          <span className="w-1 bg-gold-400 rounded-full animate-pulse" style={{ height: '80%', animationDelay: '150ms' }}></span>
          <span className="w-1 bg-gold-400 rounded-full animate-pulse" style={{ height: '50%', animationDelay: '300ms' }}></span>
          <span className="w-1 bg-gold-400 rounded-full animate-pulse" style={{ height: '90%', animationDelay: '450ms' }}></span>
          <span className="w-1 bg-gold-400 rounded-full animate-pulse" style={{ height: '60%', animationDelay: '600ms' }}></span>
        </div>
      )}
    </div>
  )
}

export default RadioPlayer