import { Card, CardContent } from "@/components/ui/card"
import { XCircle, Smartphone } from "lucide-react"

export function PlatformInfo() {
  return (
    <section className="py-12 sm:py-20 bg-gradient-to-b from-yellow-50 to-background">
      <div className="container mx-auto px-4 max-w-5xl">
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-3xl sm:text-4xl lg:text-6xl font-black text-foreground mb-3 text-balance leading-tight">
            GUIA DEFINITIVO E<br />
            ATUALIZADO NAS
            <br />
            NOVAS REGRAS
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground">
            Começar o <span className="text-yellow-600 font-bold">ANO de 2026</span> dando entrada na sua CNH
          </p>
        </div>

        <Card className="border-3 border-red-500 bg-white mb-6 shadow-lg">
          <CardContent className="p-5 sm:p-6">
            <div className="flex items-start gap-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-red-100 flex-shrink-0">
                <XCircle className="h-7 w-7 text-red-600" />
              </div>
              <div>
                <h3 className="text-xl sm:text-2xl font-black text-red-600 mb-1">O nosso GUIA NÃO É em PDF (E-book)</h3>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="border-3 border-green-500 bg-white shadow-xl">
          <CardContent className="p-5 sm:p-6">
            <div className="flex items-start gap-4 mb-6">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-green-100 flex-shrink-0">
                <Smartphone className="h-7 w-7 text-green-600" />
              </div>
              <div>
                <h3 className="text-xl sm:text-2xl font-black text-foreground">
                  É uma Plataforma com TUDO que você precisa para tirar sua CNH Sem Autoescola
                </h3>
              </div>
            </div>

            <div className="rounded-xl overflow-hidden border-2 border-border shadow-lg">
              <img
                src="/tela-de-login-plataforma-guia-cnh-com-formulario-e.jpg"
                alt="Plataforma Guia CNH"
                className="w-full h-auto"
              />
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
