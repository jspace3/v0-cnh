import { Card, CardContent } from "@/components/ui/card"
import { CheckCircle2 } from "lucide-react"

export function Benefits() {
  return (
    <section className="py-12 sm:py-20 bg-red-50">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center mb-8 sm:mb-12">
          <div className="inline-block bg-red-500 text-white px-4 py-2 rounded-full font-bold text-sm mb-4">
            PARE DE PERDER DINHEIRO
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-6xl font-black text-foreground mb-4 text-balance leading-tight">
            Chega de pagar <span className="text-red-500 line-through">R$ 3.000</span> na
            <br />
            "Máfia da Autoescola"
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto">
            Conquiste sua liberdade sem depender de carona e sem ser explorado financeiramente.
          </p>
        </div>

        <div className="grid gap-4 sm:gap-6 max-w-3xl mx-auto">
          <Card className="border-2 border-red-200 bg-white shadow-lg hover:shadow-xl transition-shadow">
            <CardContent className="p-5 sm:p-6">
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-red-100 flex-shrink-0">
                  <CheckCircle2 className="h-6 w-6 text-red-600" />
                </div>
                <div>
                  <h3 className="text-lg sm:text-xl font-bold text-foreground mb-2">Fim das Taxas Abusivas</h3>
                  <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                    Não pague R$ 4.000 por algo que você consegue por uma fração do preço.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-2 border-red-200 bg-white shadow-lg hover:shadow-xl transition-shadow">
            <CardContent className="p-5 sm:p-6">
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-red-100 flex-shrink-0">
                  <CheckCircle2 className="h-6 w-6 text-red-600" />
                </div>
                <div>
                  <h3 className="text-lg sm:text-xl font-bold text-foreground mb-2">Evite a Reprovação</h3>
                  <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                    Saiba exatamente o que o examinador quer ver com nosso checklist de segurança.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-2 border-red-200 bg-white shadow-lg hover:shadow-xl transition-shadow">
            <CardContent className="p-5 sm:p-6">
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-red-100 flex-shrink-0">
                  <CheckCircle2 className="h-6 w-6 text-red-600" />
                </div>
                <div>
                  <h3 className="text-lg sm:text-xl font-bold text-foreground mb-2">Fim do "Bloqueio" Burocrático</h3>
                  <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                    Um Passo a Passo completo para navegar no sistema do Detran sem travar.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
