import { Button } from "@/components/ui/button"
import { ArrowRight, Check, Sparkles } from "lucide-react"

export function CTA() {
  return (
    <section className="py-12 sm:py-20 bg-gradient-to-br from-primary via-primary to-blue-700 text-white">
      <div className="container mx-auto px-4 max-w-5xl">
        <div className="text-center mb-8 sm:mb-12">
          <div className="inline-flex items-center gap-2 mb-4">
            <Sparkles className="h-6 w-6 text-yellow-400" />
            <span className="text-yellow-400 font-bold text-sm">OFERTA ESPECIAL</span>
            <Sparkles className="h-6 w-6 text-yellow-400" />
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-6xl font-black mb-4 text-balance">
            Pronto para economizar na sua CNH?
          </h2>
          <p className="text-base sm:text-lg opacity-90 max-w-2xl mx-auto">
            Tenha acesso imediato ao guia completo e atualizado
          </p>
        </div>

        <div className="bg-white rounded-2xl p-6 sm:p-10 mb-6 text-center shadow-2xl">
          <div className="mb-6">
            <span className="text-muted-foreground line-through text-lg">R$ 297,00</span>
            <div className="flex items-baseline justify-center gap-2 mb-2">
              <span className="text-6xl sm:text-7xl font-black text-primary">R$ 97</span>
              <span className="text-2xl text-muted-foreground">,00</span>
            </div>
            <p className="text-sm font-semibold text-red-500">⏰ Oferta por tempo limitado</p>
          </div>

          <div className="grid sm:grid-cols-2 gap-3 mb-8 text-left">
            <div className="flex items-center gap-2">
              <Check className="h-5 w-5 text-green-600 flex-shrink-0" />
              <span className="text-foreground text-sm font-medium">Guia completo passo a passo</span>
            </div>
            <div className="flex items-center gap-2">
              <Check className="h-5 w-5 text-green-600 flex-shrink-0" />
              <span className="text-foreground text-sm font-medium">Material atualizado 2026</span>
            </div>
            <div className="flex items-center gap-2">
              <Check className="h-5 w-5 text-green-600 flex-shrink-0" />
              <span className="text-foreground text-sm font-medium">Lista de instrutores</span>
            </div>
            <div className="flex items-center gap-2">
              <Check className="h-5 w-5 text-green-600 flex-shrink-0" />
              <span className="text-foreground text-sm font-medium">Modelos de documentos</span>
            </div>
            <div className="flex items-center gap-2">
              <Check className="h-5 w-5 text-green-600 flex-shrink-0" />
              <span className="text-foreground text-sm font-medium">Suporte por WhatsApp</span>
            </div>
            <div className="flex items-center gap-2">
              <Check className="h-5 w-5 text-green-600 flex-shrink-0" />
              <span className="text-foreground text-sm font-medium">Atualizações gratuitas</span>
            </div>
          </div>

          <Button
            size="lg"
            className="bg-green-600 hover:bg-green-700 text-white text-lg font-bold h-16 px-10 w-full sm:w-auto group shadow-xl"
          >
            Quero Começar Agora
            <ArrowRight className="ml-2 h-6 w-6 group-hover:translate-x-1 transition-transform" />
          </Button>

          <p className="text-center text-sm text-muted-foreground mt-4">
            🔒 Pagamento 100% seguro • ✓ Garantia de 7 dias
          </p>
        </div>
      </div>
    </section>
  )
}
