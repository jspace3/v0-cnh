"use client"

import { useEffect, useState, useRef } from "react"
import { useRouter } from "next/navigation"
import {
  Phone,
  PhoneOff,
  Clock,
  MessageSquare,
  MicOff,
  Grid3X3,
  Volume2,
  UserPlus,
  Video,
  Users,
  BellOff,
} from "lucide-react"

export default function AtendimentoPage() {
  const [isInCall, setIsInCall] = useState(false)
  const [currentTime, setCurrentTime] = useState("")
  const [callDuration, setCallDuration] = useState(0)
  const [isMuted, setIsMuted] = useState(false)
  const [isSpeakerOn, setIsSpeakerOn] = useState(false)
  const [showContinueButton, setShowContinueButton] = useState(false)
  const ringtoneRef = useRef<HTMLAudioElement | null>(null)
  const callAudioRef = useRef<HTMLAudioElement | null>(null)
  const router = useRouter()

  useEffect(() => {
    const updateTime = () => {
      const now = new Date()
      const hours = String(now.getHours()).padStart(2, "0")
      const minutes = String(now.getMinutes()).padStart(2, "0")
      setCurrentTime(`${hours}:${minutes}`)
    }

    updateTime()
    const interval = setInterval(updateTime, 1000)

    return () => {
      clearInterval(interval)
      if (ringtoneRef.current) {
        ringtoneRef.current.pause()
        ringtoneRef.current.currentTime = 0
        ringtoneRef.current = null
      }
      if (callAudioRef.current) {
        callAudioRef.current.pause()
        callAudioRef.current.currentTime = 0
        callAudioRef.current = null
      }
      // Parar também o áudio global do window se existir
      if (typeof window !== "undefined" && (window as any).ringtoneAudio) {
        ;(window as any).ringtoneAudio.pause()
        ;(window as any).ringtoneAudio.currentTime = 0
        ;(window as any).ringtoneAudio = null
      }
    }
  }, [isInCall])

  useEffect(() => {
    if (isInCall) {
      const interval = setInterval(() => {
        setCallDuration((prev) => {
          if (prev >= 154) {
            setShowContinueButton(true)
            return 154
          }
          return prev + 1
        })
      }, 1000)
      return () => clearInterval(interval)
    }
  }, [isInCall])

  const formatCallDuration = (seconds: number) => {
    const mins = Math.floor(seconds / 60)
    const secs = seconds % 60
    return `${String(mins).padStart(2, "0")}:${String(secs).padStart(2, "0")}`
  }

  const handleAnswer = () => {
    console.log("[v0] Tentando parar áudio do toque...")

    // Parar o áudio armazenado no window
    if (typeof window !== "undefined" && (window as any).ringtoneAudio) {
      const audio = (window as any).ringtoneAudio
      console.log("[v0] Áudio encontrado no window, parando...")
      audio.pause()
      audio.currentTime = 0
      audio.volume = 0
      audio.src = ""
      ;(window as any).ringtoneAudio = null
      console.log("[v0] Áudio do window parado")
    }

    // Parar todos os áudios da página
    const allAudios = document.querySelectorAll("audio")
    console.log("[v0] Encontrados", allAudios.length, "elementos de áudio na página")
    allAudios.forEach((audio) => {
      audio.pause()
      audio.currentTime = 0
      audio.volume = 0
      audio.src = ""
    })

    if (ringtoneRef.current) {
      ringtoneRef.current.pause()
      ringtoneRef.current.currentTime = 0
      ringtoneRef.current.volume = 0
      ringtoneRef.current = null
    }

    console.log("[v0] Todos os áudios parados, iniciando chamada...")
    setIsInCall(true)
    setCallDuration(0)

    setTimeout(() => {
      const callAudio = new Audio("https://hebbkx1anhila5yf.public.blob.vercel-storage.com/audio-liga%C3%A7ao-yot9tBMysmCsIqIe0k0z6ojhTZ5x6m.MP3")
      callAudio.volume = 1.0
      callAudioRef.current = callAudio

      callAudio.onended = () => {
        setShowContinueButton(true)
      }

      console.log("[v0] Iniciando áudio da chamada...")
      callAudio.play().catch((error) => {
        console.log("[v0] Erro ao tocar áudio da chamada:", error)
      })
    }, 500)
  }

  const handleContinue = () => {
    const searchParams = typeof window !== "undefined" ? window.location.search : ""
    window.location.href = `/acesso${searchParams}`
  }

  if (!isInCall) {
    return (
      <div className="fixed inset-0 bg-black text-white flex flex-col animate-phone-shake">
        <div className="flex justify-between items-center px-6 pt-3 pb-2 text-sm">
          <div className="flex items-center gap-2">
            <span className="font-semibold text-base">{currentTime}</span>
            <BellOff className="w-4 h-4" />
          </div>
          <div className="flex items-center gap-1.5">
            <div className="flex gap-0.5">
              <div className="w-1 h-2 bg-white rounded-full"></div>
              <div className="w-1 h-2.5 bg-white rounded-full"></div>
              <div className="w-1 h-3 bg-white rounded-full"></div>
              <div className="w-1 h-3.5 bg-white rounded-full"></div>
            </div>
            <span className="text-xs font-semibold">5G</span>
            <div className="w-6 h-3 border-2 border-white rounded-sm relative ml-1">
              <div className="absolute left-0 top-0 bottom-0 w-[48%] bg-white"></div>
              <div className="absolute right-[-3px] top-1/2 -translate-y-1/2 w-0.5 h-1.5 bg-white rounded-r-sm"></div>
            </div>
          </div>
        </div>

        <div className="flex-1 flex flex-col items-center justify-center px-6 pb-20">
          <div className="relative mb-8">
            <div className="w-28 h-28 sm:w-32 sm:h-32 rounded-full overflow-hidden border-4 border-blue-500/30 shadow-2xl animate-pulse-slow">
              <img src="/despachante-profile.jpeg" alt="Despachante sincero" className="w-full h-full object-cover" />
            </div>
            <div className="absolute inset-0 rounded-full animate-ping-slow opacity-30">
              <div className="w-full h-full rounded-full bg-blue-500/50"></div>
            </div>
          </div>

          <h1 className="text-2xl sm:text-3xl font-semibold mb-2 text-center">@Despachante sincero</h1>
          <p className="text-gray-400 text-base sm:text-lg mb-8">iPhone</p>
        </div>

        <div className="px-6 pb-12 space-y-6">
          <div className="flex justify-center items-center gap-16 sm:gap-20">
            <button className="flex flex-col items-center gap-3 active:scale-95 transition-transform">
              <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-red-500 hover:bg-red-600 flex items-center justify-center shadow-lg shadow-red-500/50 transition-all">
                <PhoneOff className="w-7 h-7 sm:w-8 sm:h-8" />
              </div>
              <span className="text-base sm:text-lg font-medium">Recusar</span>
            </button>

            <button
              onClick={handleAnswer}
              className="flex flex-col items-center gap-3 active:scale-95 transition-transform"
            >
              <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-green-500 hover:bg-green-600 flex items-center justify-center shadow-lg shadow-green-500/50 transition-all animate-pulse-ring">
                <Phone className="w-7 h-7 sm:w-8 sm:h-8" />
              </div>
              <span className="text-base sm:text-lg font-medium">Atender</span>
            </button>
          </div>

          <div className="flex justify-center items-center gap-16 sm:gap-20">
            <button className="flex flex-col items-center gap-2 active:scale-95 transition-transform">
              <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-gray-800 hover:bg-gray-700 flex items-center justify-center transition-all">
                <Clock className="w-5 h-5 sm:w-6 sm:h-6" />
              </div>
              <span className="text-sm sm:text-base text-gray-300">Lembrar</span>
            </button>

            <button className="flex flex-col items-center gap-2 active:scale-95 transition-transform">
              <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-gray-800 hover:bg-gray-700 flex items-center justify-center transition-all">
                <MessageSquare className="w-5 h-5 sm:w-6 sm:h-6" />
              </div>
              <span className="text-sm sm:text-base text-gray-300">Mensagem</span>
            </button>
          </div>
        </div>

        <div className="pb-2 flex justify-center">
          <div className="w-32 h-1 bg-white/30 rounded-full"></div>
        </div>
      </div>
    )
  }

  return (
    <div className="fixed inset-0 bg-black text-white flex flex-col">
      <div className="flex justify-between items-center px-6 pt-3 pb-2 text-sm">
        <div className="flex items-center gap-2">
          <span className="font-semibold text-base">{currentTime}</span>
          <BellOff className="w-4 h-4" />
        </div>
        <div className="flex items-center gap-1.5">
          <div className="flex gap-0.5">
            <div className="w-1 h-2 bg-white rounded-full"></div>
            <div className="w-1 h-2.5 bg-white rounded-full"></div>
            <div className="w-1 h-3 bg-white rounded-full"></div>
            <div className="w-1 h-3.5 bg-white rounded-full"></div>
          </div>
          <span className="text-xs font-semibold">5G</span>
          <div className="w-6 h-3 border-2 border-white rounded-sm relative ml-1">
            <div className="absolute left-0 top-0 bottom-0 w-[48%] bg-white"></div>
            <div className="absolute right-[-3px] top-1/2 -translate-y-1/2 w-0.5 h-1.5 bg-white rounded-r-sm"></div>
          </div>
        </div>
      </div>

      <div className="flex-1 flex flex-col items-center justify-center px-6">
        <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-full overflow-hidden border-4 border-gray-700 shadow-2xl mb-6">
          <img src="/despachante-profile.jpeg" alt="Despachante sincero" className="w-full h-full object-cover" />
        </div>

        <h1 className="text-xl sm:text-2xl font-semibold mb-1 text-center">@Despachante sincero</h1>
        <p className="text-gray-400 text-sm sm:text-base mb-4">iPhone</p>
        <div className="text-2xl sm:text-3xl font-light text-gray-300 mb-8">{formatCallDuration(callDuration)}</div>

        {showContinueButton && (
          <button
            onClick={handleContinue}
            className="mt-4 px-8 py-3 bg-[#F7C815] hover:bg-[#e5b800] text-black font-bold rounded-full text-lg transition-all active:scale-95"
          >
            Continuar
          </button>
        )}
      </div>

      <div className="px-6 pb-8 space-y-6">
        <div className="grid grid-cols-3 gap-6 max-w-sm mx-auto">
          <button
            onClick={() => setIsMuted(!isMuted)}
            className="flex flex-col items-center gap-2 active:scale-95 transition-transform"
          >
            <div
              className={`w-14 h-14 sm:w-16 sm:h-16 rounded-full flex items-center justify-center transition-all ${
                isMuted ? "bg-white text-black" : "bg-gray-800 hover:bg-gray-700 text-white"
              }`}
            >
              <MicOff className="w-6 h-6 sm:w-7 sm:h-7" />
            </div>
            <span className="text-xs sm:text-sm text-gray-300">mudo</span>
          </button>

          <button className="flex flex-col items-center gap-2 active:scale-95 transition-transform">
            <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-gray-800 hover:bg-gray-700 flex items-center justify-center transition-all">
              <Grid3X3 className="w-6 h-6 sm:w-7 sm:h-7" />
            </div>
            <span className="text-xs sm:text-sm text-gray-300">teclado</span>
          </button>

          <button
            onClick={() => setIsSpeakerOn(!isSpeakerOn)}
            className="flex flex-col items-center gap-2 active:scale-95 transition-transform"
          >
            <div
              className={`w-14 h-14 sm:w-16 sm:h-16 rounded-full flex items-center justify-center transition-all ${
                isSpeakerOn ? "bg-white text-black" : "bg-gray-800 hover:bg-gray-700 text-white"
              }`}
            >
              <Volume2 className="w-6 h-6 sm:w-7 sm:h-7" />
            </div>
            <span className="text-xs sm:text-sm text-gray-300">viva-voz</span>
          </button>
        </div>

        <div className="grid grid-cols-3 gap-6 max-w-sm mx-auto">
          <button className="flex flex-col items-center gap-2 active:scale-95 transition-transform">
            <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-gray-800 hover:bg-gray-700 flex items-center justify-center transition-all">
              <UserPlus className="w-6 h-6 sm:w-7 sm:h-7" />
            </div>
            <span className="text-xs sm:text-sm text-gray-300">adicionar</span>
          </button>

          <button className="flex flex-col items-center gap-2 active:scale-95 transition-transform">
            <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-gray-800 hover:bg-gray-700 flex items-center justify-center transition-all">
              <Video className="w-6 h-6 sm:w-7 sm:h-7" />
            </div>
            <span className="text-xs sm:text-sm text-gray-300">FaceTime</span>
          </button>

          <button className="flex flex-col items-center gap-2 active:scale-95 transition-transform">
            <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-gray-800 hover:bg-gray-700 flex items-center justify-center transition-all">
              <Users className="w-6 h-6 sm:w-7 sm:h-7" />
            </div>
            <span className="text-xs sm:text-sm text-gray-300">contatos</span>
          </button>
        </div>
      </div>

      <div className="pb-8 flex justify-center">
        <div className="w-32 h-1 bg-white/30 rounded-full"></div>
      </div>
    </div>
  )
}
