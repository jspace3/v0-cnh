import { Card, CardContent } from "@/components/ui/card"

export function Features() {
  return (
    <section className="py-12 sm:py-20 bg-background">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-3xl sm:text-4xl lg:text-6xl font-black text-foreground mb-4 text-balance">
            O que você vai receber:
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground">
            Acesso completo à plataforma com todos os módulos necessários
          </p>
        </div>

        <div className="grid gap-4 sm:gap-6 sm:grid-cols-2 max-w-5xl mx-auto">
          <Card className="border-2 border-yellow-400 bg-black text-white hover:scale-[1.02] transition-transform">
            <CardContent className="p-5 sm:p-6">
              <div className="mb-3">
                <span className="text-yellow-400 font-bold text-xs tracking-wider">MÓDULO 1.3</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold mb-3">Lista EXATA de Custos</h3>
              <p className="text-gray-300 leading-relaxed text-sm sm:text-base">
                Saiba quais taxas são obrigatórias e elimine custos ocultos e margens de lucro abusivas.
              </p>
            </CardContent>
          </Card>

          <Card className="border-2 border-yellow-400 bg-black text-white hover:scale-[1.02] transition-transform">
            <CardContent className="p-5 sm:p-6">
              <div className="mb-3">
                <span className="text-yellow-400 font-bold text-xs tracking-wider">MÓDULO 3.4</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold mb-3">O Mapa da Prova</h3>
              <p className="text-gray-300 leading-relaxed text-sm sm:text-base">
                O que realmente reprova no exame prático. Treine apenas quando estiver pronto.
              </p>
            </CardContent>
          </Card>

          <Card className="border-2 border-yellow-400 bg-black text-white hover:scale-[1.02] transition-transform">
            <CardContent className="p-5 sm:p-6">
              <div className="mb-3">
                <span className="text-yellow-400 font-bold text-xs tracking-wider">MÓDULO 1.1 E 1.2</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold mb-3">GPS Burocrático</h3>
              <p className="text-gray-300 leading-relaxed text-sm sm:text-base">
                Passo a passo nos sites do Detran. Evite filas e clique nos botões certos.
              </p>
            </CardContent>
          </Card>

          <Card className="border-2 border-yellow-400 bg-black text-white hover:scale-[1.02] transition-transform">
            <CardContent className="p-5 sm:p-6">
              <div className="mb-3">
                <span className="text-yellow-400 font-bold text-xs tracking-wider">MÓDULO 2.3</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold mb-3">Fluxo de Adição de Categoria</h3>
              <p className="text-gray-300 leading-relaxed text-sm sm:text-base">
                Método exclusivo para quem já tem CNH e quer adicionar A, B ou D rapidamente.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
