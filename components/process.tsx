import { Card, CardContent } from "@/components/ui/card"
import { FileText, GraduationCap, Car, CheckCircle } from "lucide-react"

const steps = [
  {
    icon: FileText,
    number: "01",
    title: "Inscrição no DETRAN",
    description:
      "Faça seu cadastro diretamente no site do DETRAN e pague as taxas obrigatórias (exames médico e psicotécnico)",
  },
  {
    icon: GraduationCap,
    number: "02",
    title: "Estudo Teórico",
    description:
      "Estude o material do curso teórico em casa, no seu ritmo, usando nosso material atualizado e completo",
  },
  {
    icon: Car,
    number: "03",
    title: "Aulas Práticas",
    description: "Contrate apenas as aulas práticas obrigatórias diretamente com um instrutor credenciado",
  },
  {
    icon: CheckCircle,
    number: "04",
    title: "Provas e CNH",
    description: "Faça as provas teórica e prática no DETRAN e receba sua carteira de motorista definitiva",
  },
]

export function Process() {
  return (
    <section className="py-16 lg:py-28 bg-background">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center mb-12 lg:mb-16">
          <h2 className="text-2xl sm:text-3xl lg:text-5xl font-bold text-foreground mb-3 sm:mb-4 text-balance px-2">
            Como funciona o processo
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto text-pretty px-2">
            Siga estes 4 passos simples para conseguir sua CNH economizando
          </p>
        </div>

        <div className="grid gap-6 sm:gap-8 md:grid-cols-2 lg:gap-12 max-w-5xl mx-auto">
          {steps.map((step, index) => (
            <Card
              key={index}
              className="relative border-2 border-border bg-card hover:border-primary/50 transition-colors"
            >
              <CardContent className="pt-8 sm:pt-10 pb-6 sm:pb-8 px-5 sm:px-8">
                <div className="absolute -top-3 -left-3 sm:-top-4 sm:-left-4 w-10 h-10 sm:w-12 sm:h-12 rounded-lg sm:rounded-xl bg-primary text-primary-foreground flex items-center justify-center font-bold text-base sm:text-lg shadow-lg">
                  {step.number}
                </div>
                <div className="rounded-lg sm:rounded-xl bg-secondary w-12 h-12 sm:w-14 sm:h-14 flex items-center justify-center mb-4 sm:mb-6">
                  <step.icon className="h-6 w-6 sm:h-7 sm:w-7 text-primary" />
                </div>
                <h3 className="text-lg sm:text-xl font-semibold text-card-foreground mb-2 sm:mb-3">{step.title}</h3>
                <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">{step.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
