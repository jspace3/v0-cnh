import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

const faqs = [
  {
    question: "É realmente legal tirar CNH sem auto escola?",
    answer:
      "Sim, é 100% legal! A resolução 789/2020 do CONTRAN permite que as aulas teóricas sejam feitas em formato EAD. Você só precisa contratar as aulas práticas obrigatórias com um instrutor credenciado pelo DETRAN.",
  },
  {
    question: "Quanto vou economizar com este método?",
    answer:
      "Em média, você pode economizar entre R$ 2.000 e R$ 3.500, dependendo da sua região. Isso porque você não paga pelos custos administrativos e estrutura física da auto escola, apenas pelas taxas obrigatórias do DETRAN e aulas práticas.",
  },
  {
    question: "Quais são os custos obrigatórios?",
    answer:
      "Os custos obrigatórios incluem: taxas de inscrição no DETRAN, exames médico e psicotécnico, material didático (que fornecemos), aulas práticas obrigatórias (mínimo de 20 horas) e taxas das provas teórica e prática.",
  },
  {
    question: "Como faço as aulas práticas?",
    answer:
      "Você contrata diretamente um instrutor credenciado pelo DETRAN. No nosso guia, mostramos como encontrar instrutores na sua cidade e como negociar o melhor preço, geralmente entre R$ 80 e R$ 120 por hora/aula.",
  },
  {
    question: "Funciona em todos os estados?",
    answer:
      "Sim! As regras do CONTRAN são válidas em todo território nacional. Nosso guia está atualizado com as especificidades de cada estado e mostra o passo a passo adaptado para sua região.",
  },
  {
    question: "Quanto tempo leva o processo completo?",
    answer:
      "O prazo médio é de 3 a 6 meses, dependendo do seu ritmo de estudo e disponibilidade para as aulas práticas. Como você estuda no seu tempo, pode acelerar ou desacelerar conforme sua necessidade.",
  },
]

export function FAQ() {
  return (
    <section className="py-20 lg:py-28 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-5xl font-bold text-foreground mb-4 text-balance">Perguntas Frequentes</h2>
            <p className="text-lg text-muted-foreground text-pretty">Tire suas dúvidas sobre o processo</p>
          </div>

          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-card border border-border rounded-lg px-6 data-[state=open]:shadow-md transition-shadow"
              >
                <AccordionTrigger className="text-left font-semibold text-card-foreground hover:no-underline py-6">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed pb-6">{faq.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  )
}
