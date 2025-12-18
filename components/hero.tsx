"use client"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"

export function Hero() {
  const router = useRouter()

  const handleClick = () => {
    const audio = new Audio("https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Som%20de%20Celular%20Vibrando%20-%20Efeitos%20Sonoros%20HD%20-%20Sons%20e%20Efeitos%20-%20Efeitos%20Sonoros%20FX%20%28youtube%29-BuQeqOwbApwH9dTP1XmtBvEwhsZFOn.mp3")
    audio.volume = 0.5
    audio.loop = true

    audio.play().catch((error) => {
      console.log("[v0] Erro ao tocar áudio:", error)
    })

    setTimeout(() => {
      router.push("/atendimento")
    }, 100)
  }

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-background to-secondary/30">
      <div className="relative">
        <img
          src="/cnh-sem-autoescola-hero.png"
          alt="CNH sem Autoescola - Tire sua CNH de forma legal e econômica"
          className="w-full h-auto object-cover"
        />
      </div>

      <div className="container mx-auto px-4 py-8 sm:py-12 max-w-4xl">
        <div className="text-center space-y-6">
          <div className="inline-block bg-red-500 text-white px-6 py-3 rounded-full font-bold text-sm sm:text-base">
            PARE DE PERDER DINHEIRO
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-foreground text-balance leading-tight px-4">
            Chega de pagar <span className="text-red-500 line-through decoration-4">R$ 3.000</span> na
            <br className="hidden sm:block" />
            "Máfia da Autoescola"
          </h2>

          <p className="text-base sm:text-lg lg:text-xl text-muted-foreground max-w-2xl mx-auto px-4 leading-relaxed">
            Conquiste sua liberdade sem depender de carona e sem ser explorado financeiramente.
          </p>

          <div className="pt-4">
            <Button
              size="lg"
              onClick={handleClick}
              className="w-full sm:w-auto text-base sm:text-lg font-bold px-8 sm:px-12 h-14 sm:h-16 bg-yellow-400 hover:bg-yellow-500 text-black shadow-xl"
            >
              VER O QUE MUDOU
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
