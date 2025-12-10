/**
 * ========================================
 * MapaGoias - Mapa SVG do Estado de Goiás
 * ========================================
 * 
 * Mapa acinzentado com pontos azuis
 * piscando devagar em posições aleatórias
 */

import { useState, useEffect, useMemo } from 'react'

function MapaGoias() {
  const [geoData, setGeoData] = useState(null)
  const [loading, setLoading] = useState(true)
  const [pinPositions, setPinPositions] = useState([])

  // Número de pontos
  const numPins = 15

  // Carregar GeoJSON
  useEffect(() => {
    fetch('/Goias.geojson')
      .then(res => res.json())
      .then(data => {
        setGeoData(data)
        setLoading(false)
      })
      .catch(err => {
        console.error('Erro ao carregar GeoJSON:', err)
        setLoading(false)
      })
  }, [])

  // Dimensões do SVG
  const width = 600
  const height = 600
  const padding = 30

  // Calcular bounds e funções de projeção
  const { bounds, projectPoint, createPath, allPoints } = useMemo(() => {
    if (!geoData) return { bounds: null, projectPoint: () => ({}), createPath: () => '', allPoints: [] }

    // Calcular limites
    let minX = Infinity, maxX = -Infinity
    let minY = Infinity, maxY = -Infinity
    const allPoints = []

    geoData.features.forEach(feature => {
      const coords = feature.geometry.coordinates[0]
      coords.forEach(([x, y]) => {
        minX = Math.min(minX, x)
        maxX = Math.max(maxX, x)
        minY = Math.min(minY, y)
        maxY = Math.max(maxY, y)
        // Coletar alguns pontos para posições aleatórias
        if (Math.random() < 0.03) {
          allPoints.push({ lng: x, lat: y })
        }
      })
    })

    const bounds = { minX, maxX, minY, maxY }
    
    // Função de projeção
    const scaleX = (width - padding * 2) / (maxX - minX)
    const scaleY = (height - padding * 2) / (maxY - minY)
    const scale = Math.min(scaleX, scaleY)

    const projectPoint = (lng, lat) => {
      const x = padding + (lng - minX) * scale
      const y = padding + (maxY - lat) * scale
      return { x, y }
    }

    // Criar path SVG
    const createPath = (coordinates) => {
      const points = coordinates.map(([lng, lat]) => {
        const { x, y } = projectPoint(lng, lat)
        return `${x.toFixed(2)},${y.toFixed(2)}`
      })
      return `M${points.join(' L')}Z`
    }

    return { bounds, projectPoint, createPath, allPoints }
  }, [geoData])

  // Gerar posições aleatórias para os pontos
  useEffect(() => {
    if (!allPoints.length) return

    const generateRandomPositions = () => {
      const positions = []
      for (let i = 0; i < numPins; i++) {
        const randomPoint = allPoints[Math.floor(Math.random() * allPoints.length)]
        const { x, y } = projectPoint(randomPoint.lng, randomPoint.lat)
        positions.push({ 
          x, 
          y, 
          delay: i * 0.3, // Delay escalonado para piscar em sequência
        })
      }
      setPinPositions(positions)
    }

    generateRandomPositions()

    // Mudar posições a cada 6 segundos
    const interval = setInterval(generateRandomPositions, 6000)
    return () => clearInterval(interval)
  }, [allPoints, projectPoint])

  if (loading) {
    return (
      <div className="w-full aspect-square max-w-lg mx-auto bg-white/5 rounded-2xl animate-pulse flex items-center justify-center">
        <div className="text-center">
          <div className="w-12 h-12 border-4 border-gray-500 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-gray-400">Carregando mapa...</p>
        </div>
      </div>
    )
  }

  if (!geoData) {
    return (
      <div className="w-full aspect-square max-w-lg mx-auto bg-white/5 rounded-2xl flex items-center justify-center">
        <p className="text-gray-400">Erro ao carregar mapa</p>
      </div>
    )
  }

  return (
    <div className="relative w-full max-w-lg mx-auto">
      {/* CSS para animação de piscar devagar */}
      <style>{`
        @keyframes slowBlink {
          0%, 100% { opacity: 0.3; }
          50% { opacity: 1; }
        }
        .slow-blink {
          animation: slowBlink 3s ease-in-out infinite;
        }
      `}</style>

      <svg
        viewBox={`0 0 ${width} ${height}`}
        className="w-full h-auto relative z-10"
        style={{ filter: 'drop-shadow(0 4px 20px rgba(0, 0, 0, 0.3))' }}
      >
        {/* Definições */}
        <defs>
          {/* Gradiente acinzentado do mapa */}
          <linearGradient id="grayGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#4b5563" />
            <stop offset="50%" stopColor="#374151" />
            <stop offset="100%" stopColor="#4b5563" />
          </linearGradient>

          {/* Filtro de brilho para os pontos */}
          <filter id="blueGlow" x="-100%" y="-100%" width="300%" height="300%">
            <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
            <feMerge>
              <feMergeNode in="coloredBlur"/>
              <feMergeNode in="SourceGraphic"/>
            </feMerge>
          </filter>
        </defs>

        {/* Renderizar municípios (acinzentado) */}
        <g>
          {geoData.features.map((feature, index) => (
            <path
              key={feature.properties.id || index}
              d={createPath(feature.geometry.coordinates[0])}
              fill="url(#grayGradient)"
              stroke="#6b7280"
              strokeWidth="0.5"
              opacity="0.9"
            />
          ))}
        </g>

        {/* Borda dos municípios */}
        <g>
          {geoData.features.map((feature, index) => (
            <path
              key={`border-${index}`}
              d={createPath(feature.geometry.coordinates[0])}
              fill="none"
              stroke="#9ca3af"
              strokeWidth="0.3"
              opacity="0.4"
            />
          ))}
        </g>

        {/* Pontos azuis piscando devagar */}
        {pinPositions.map((pos, index) => (
          <g key={index}>
            {/* Brilho externo */}
            <circle
              cx={pos.x}
              cy={pos.y}
              r="12"
              fill="#3b82f6"
              opacity="0.2"
              className="slow-blink"
              style={{ animationDelay: `${pos.delay}s` }}
            />
            
            {/* Ponto azul principal */}
            <circle
              cx={pos.x}
              cy={pos.y}
              r="6"
              fill="#2563eb"
              filter="url(#blueGlow)"
              className="slow-blink"
              style={{ animationDelay: `${pos.delay}s` }}
            />
            
            {/* Centro mais claro */}
            <circle
              cx={pos.x}
              cy={pos.y}
              r="3"
              fill="#60a5fa"
              className="slow-blink"
              style={{ animationDelay: `${pos.delay}s` }}
            />
          </g>
        ))}
      </svg>

      {/* Legenda */}
      <div className="flex items-center justify-center gap-4 mt-6">
        <div className="flex items-center gap-2">
          <div className="relative">
            <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
            <div className="absolute inset-0 w-3 h-3 bg-blue-400 rounded-full animate-ping opacity-40"></div>
          </div>
          <span className="text-gray-400 text-sm">Escritórios Jurídicos</span>
        </div>
        <div className="text-gray-500 text-sm">
          15+ unidades pelo estado
        </div>
      </div>
    </div>
  )
}

export default MapaGoias