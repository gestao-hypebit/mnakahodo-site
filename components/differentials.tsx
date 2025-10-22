import { Award, Brain, Lightbulb, Zap } from "lucide-react"

const differentials = [
  {
    icon: Award,
    title: "Experiência Sólida",
    description:
      "Economista com mais de 20 anos de atuação no mercado financeiro, acompanhando tendências e impactos econômicos.",
  },
  {
    icon: Brain,
    title: "Didática Diferenciada",
    description:
      "Professor especializado em transformar conceitos complexos em aprendizados claros, envolventes e aplicáveis.",
  },
  {
    icon: Lightbulb,
    title: "Abordagem Inovadora",
    description: "Integração de economia comportamental, organização financeira, investimentos e planejamento de vida.",
  },
  {
    icon: Zap,
    title: "Interatividade Total",
    description: "Dinâmicas, quizzes, gamificação e simulações personalizadas para maior retenção e engajamento.",
  },
]

export default function Differentials() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className=" mb-16">
             <div className="inline-block mb-6 px-4 py-2 bg-[#E86A0C]/10 rounded-full">
              <span  style={{ fontFamily: "var(--font-urbanist)" }} className="text-lg text-[#E86A0C] font-medium">
                Nossos diferenciais
              </span>
            </div>
          <h2 className="text-4xl md:text-5xl font-bold text-[#09080D] mb-4 text-balance">
            Por que escolher MNAKAHODO?
          </h2>
          <p className="text-lg text-[#111143]/60 max-w-2xl  text-balance">
            Diferenciais que fazem a diferença no seu aprendizado e resultados
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {differentials.map((diff, index) => {
            const Icon = diff.icon
            return (
              <div
                key={index}
                className="flex gap-6 p-6 rounded-xl bg-white border border-[#DAD1C8] hover:border-[#111143]/20 transition-colors"
              >
                <div className="flex-shrink-0">
                  <div
                    className={`flex items-center justify-center h-12 w-12 rounded-lg ${
                      index % 2 === 0 ? "bg-[#040C8C]/10" : "bg-[#040C8C]/10"
                    }`}
                  >
                    <Icon className={index % 2 === 0 ? "text-[#040C8C]" : "text-[#040C8C]"} size={24} />
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-[#09080D] mb-2">{diff.title}</h3>
                  <p className="text-[#111143]/70 leading-relaxed">{diff.description}</p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
