"use client"

import { useEffect, useState } from "react"
import { Mic, MicOff, Grid3x3, Volume2, UserPlus, Video, Users, PhoneOff } from "lucide-react"
import { useRouter } from "next/navigation"

export default function EmChamadaPage() {
  const [currentTime, setCurrentTime] = useState("")
  const [callDuration, setCallDuration] = useState(0)
  const [isMuted, setIsMuted] = useState(false)
  const router = useRouter()

  useEffect(() => {
    // Atualizar horário em tempo real
    const updateTime = () => {
      const now = new Date()
      const hours = String(now.getHours()).padStart(2, "0")
      const minutes = String(now.getMinutes()).padStart(2, "0")
      setCurrentTime(`${hours}:${minutes}`)
    }

    updateTime()
    const timeInterval = setInterval(updateTime, 1000)

    // Contador de duração da chamada
    const durationInterval = setInterval(() => {
      setCallDuration((prev) => prev + 1)
    }, 1000)

    return () => {
      clearInterval(timeInterval)
      clearInterval(durationInterval)
    }
  }, [])

  // Formatar duração da chamada (MM:SS)
  const formatDuration = (seconds: number) => {
    const mins = Math.floor(seconds / 60)
    const secs = seconds % 60
    return `${String(mins).padStart(2, "0")}:${String(secs).padStart(2, "0")}`
  }

  return (
    <div className="fixed inset-0 bg-black text-white flex flex-col">
      {/* Status Bar */}
      <div className="flex justify-between items-center px-6 pt-4 pb-2 text-sm">
        <div className="font-semibold">{currentTime}</div>
        <div className="flex items-center gap-2">
          <div className="flex gap-0.5">
            <div className="w-1 h-3 bg-white"></div>
            <div className="w-1 h-3 bg-white"></div>
            <div className="w-1 h-3 bg-white"></div>
            <div className="w-1 h-3 bg-white"></div>
          </div>
          <div className="flex gap-0.5">
            <div className="w-1 h-2.5 bg-white"></div>
            <div className="w-1 h-3 bg-white"></div>
            <div className="w-1 h-3.5 bg-white"></div>
          </div>
          <div className="flex items-center gap-1">
            <span className="text-xs font-medium">48%</span>
            <div className="w-6 h-3 border-2 border-white rounded-sm relative">
              <div className="absolute left-0 top-0 bottom-0 w-[48%] bg-white"></div>
              <div className="absolute right-[-2px] top-1/2 -translate-y-1/2 w-0.5 h-1.5 bg-white"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col items-center justify-center px-6 pb-8">
        {/* Profile Picture */}
        <div className="relative mb-6">
          <div className="w-32 h-32 sm:w-40 sm:h-40 rounded-full overflow-hidden border-4 border-blue-500/30 shadow-2xl">
            <img src="/despachante-profile.jpeg" alt="Despachante sincero" className="w-full h-full object-cover" />
          </div>
        </div>

        {/* Contact Name */}
        <h1 className="text-2xl sm:text-3xl font-semibold mb-2 text-center">@Despachante sincero</h1>

        {/* Device Type */}
        <p className="text-gray-400 text-base sm:text-lg mb-6">iPhone</p>

        {/* Call Duration */}
        <div className="text-3xl sm:text-4xl font-light tracking-wider text-green-400">
          {formatDuration(callDuration)}
        </div>
      </div>

      {/* Call Controls */}
      <div className="px-4 sm:px-8 pb-8 space-y-6">
        {/* First Row */}
        <div className="grid grid-cols-3 gap-4 sm:gap-8 max-w-md mx-auto">
          {/* Mute */}
          <button
            onClick={() => setIsMuted(!isMuted)}
            className="flex flex-col items-center gap-2 active:scale-95 transition-transform"
          >
            <div
              className={`w-16 h-16 sm:w-18 sm:h-18 rounded-full ${
                isMuted ? "bg-white" : "bg-gray-700/80"
              } hover:bg-gray-600 flex items-center justify-center transition-all`}
            >
              {isMuted ? (
                <MicOff className={`w-6 h-6 sm:w-7 sm:h-7 ${isMuted ? "text-black" : ""}`} />
              ) : (
                <Mic className="w-6 h-6 sm:w-7 sm:h-7" />
              )}
            </div>
            <span className="text-sm sm:text-base text-gray-300">mute</span>
          </button>

          {/* Keypad */}
          <button className="flex flex-col items-center gap-2 active:scale-95 transition-transform">
            <div className="w-16 h-16 sm:w-18 sm:h-18 rounded-full bg-gray-700/80 hover:bg-gray-600 flex items-center justify-center transition-all">
              <Grid3x3 className="w-6 h-6 sm:w-7 sm:h-7" />
            </div>
            <span className="text-sm sm:text-base text-gray-300">keypad</span>
          </button>

          {/* Speaker */}
          <button className="flex flex-col items-center gap-2 active:scale-95 transition-transform">
            <div className="w-16 h-16 sm:w-18 sm:h-18 rounded-full bg-gray-700/80 hover:bg-gray-600 flex items-center justify-center transition-all">
              <Volume2 className="w-6 h-6 sm:w-7 sm:h-7" />
            </div>
            <span className="text-sm sm:text-base text-gray-300">speaker</span>
          </button>
        </div>

        {/* Second Row */}
        <div className="grid grid-cols-3 gap-4 sm:gap-8 max-w-md mx-auto">
          {/* Add Call */}
          <button className="flex flex-col items-center gap-2 active:scale-95 transition-transform">
            <div className="w-16 h-16 sm:w-18 sm:h-18 rounded-full bg-gray-700/80 hover:bg-gray-600 flex items-center justify-center transition-all">
              <UserPlus className="w-6 h-6 sm:w-7 sm:h-7" />
            </div>
            <span className="text-sm sm:text-base text-gray-300">add call</span>
          </button>

          {/* FaceTime */}
          <button className="flex flex-col items-center gap-2 active:scale-95 transition-transform">
            <div className="w-16 h-16 sm:w-18 sm:h-18 rounded-full bg-gray-700/80 hover:bg-gray-600 flex items-center justify-center transition-all">
              <Video className="w-6 h-6 sm:w-7 sm:h-7" />
            </div>
            <span className="text-sm sm:text-base text-gray-300">FaceTime</span>
          </button>

          {/* Contacts */}
          <button className="flex flex-col items-center gap-2 active:scale-95 transition-transform">
            <div className="w-16 h-16 sm:w-18 sm:h-18 rounded-full bg-gray-700/80 hover:bg-gray-600 flex items-center justify-center transition-all">
              <Users className="w-6 h-6 sm:w-7 sm:h-7" />
            </div>
            <span className="text-sm sm:text-base text-gray-300">contacts</span>
          </button>
        </div>

        {/* End Call Button */}
        <div className="flex justify-center pt-6">
          <button
            onClick={() => router.push("/")}
            className="flex flex-col items-center gap-3 active:scale-95 transition-transform"
          >
            <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-red-500 hover:bg-red-600 flex items-center justify-center shadow-lg shadow-red-500/50 transition-all">
              <PhoneOff className="w-7 h-7 sm:w-8 sm:h-8" />
            </div>
          </button>
        </div>
      </div>

      {/* Home Indicator */}
      <div className="pb-2 flex justify-center">
        <div className="w-32 h-1 bg-white/30 rounded-full"></div>
      </div>
    </div>
  )
}
