/**
 * ========================================
 * RadioPlayerMobile - Player Mobile Compacto
 * ========================================
 */

import { useState, useRef, useEffect } from 'react'
import { Play, Pause, SpeakerHigh, SpeakerLow, SpeakerNone, Broadcast, Plus, Minus } from '@phosphor-icons/react'

function RadioPlayerMobile() {
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
    if (volume === 0) return <SpeakerNone size={14} weight="fill" />
    if (volume < 0.5) return <SpeakerLow size={14} weight="fill" />
    return <SpeakerHigh size={14} weight="fill" />
  }

  return (
    <div className="flex items-center justify-between bg-black/30 border border-white/10 rounded-xl px-3 py-2">
      <audio ref={audioRef} preload="none" />

      {/* Ícone + Info */}
      <div className="flex items-center gap-2">
        <div className="relative">
          <img src="/iconeradio.png" alt="Rádio Voz" className="w-8 h-8" />
          {isPlaying && (
            <span className="absolute -top-0.5 -right-0.5 w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
          )}
        </div>
        <div className="flex flex-col leading-tight">
          <span className="text-white text-xs font-bold">Rádio Voz ASSEGO</span>
          <span className="text-[10px] flex items-center gap-1">
            {isPlaying ? (
              <>
                <Broadcast size={10} className="text-green-400" />
                <span className="text-green-400">AO VIVO</span>
              </>
            ) : (
              <span className="text-gray-400">Clique ▶</span>
            )}
          </span>
        </div>
      </div>

      {/* Controles */}
      <div className="flex items-center gap-1">
        {/* Volume */}
        <button onClick={decreaseVolume} className="w-6 h-6 flex items-center justify-center text-gray-400 hover:text-white">
          <Minus size={10} weight="bold" />
        </button>
        <span className="text-gray-300">{getVolumeIcon()}</span>
        <button onClick={increaseVolume} className="w-6 h-6 flex items-center justify-center text-gray-400 hover:text-white">
          <Plus size={10} weight="bold" />
        </button>

        {/* Play/Pause */}
        <button
          onClick={togglePlay}
          className={`flex items-center justify-center w-10 h-10 rounded-full ml-2 ${
            isPlaying ? 'bg-gold-500' : 'bg-[#000e72]'
          }`}
        >
          {isPlaying ? (
            <Pause size={16} weight="fill" className="text-black" />
          ) : (
            <Play size={16} weight="fill" className="text-white ml-0.5" />
          )}
        </button>
      </div>
    </div>
  )
}

export default RadioPlayerMobile