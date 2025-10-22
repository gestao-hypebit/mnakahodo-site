import { ArrowRight } from "lucide-react"

const portfolioItems = [
  {
    title: "Palestra: Cenários Econômicos 2024",
    company: "Empresa Multinacional",
    description: "Análise de perspectivas econômicas e impactos nos negócios",
    category: "Palestra Corporativa",
  },
  {
    title: "Workshop: Saúde Financeira",
    company: "Banco de Investimentos",
    description: "Educação financeira para 200+ colaboradores",
    category: "Workshop",
  },
  {
    title: "Consultoria: Planejamento Financeiro",
    company: "Empresa de Tecnologia",
    description: "Programa de educação financeira para equipe executiva",
    category: "Consultoria",
  },
  {
    title: "Palestra: Finanças Comportamentais",
    company: "Universidade Federal",
    description: "Seminário sobre decisões financeiras e emoções",
    category: "Seminário",
  },
]

export default function Portfolio() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4 text-balance">Portfólio de Trabalhos</h2>
          <p className="text-lg text-foreground/60 max-w-2xl mx-auto text-balance">
            Conheça alguns dos projetos e palestras realizadas
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {portfolioItems.map((item, index) => (
            <div
              key={index}
              className="group p-8 rounded-xl border border-border bg-card hover:border-primary/50 transition-all duration-300 hover:shadow-lg cursor-pointer"
            >
              <div className="inline-block mb-4 px-3 py-1 bg-primary/10 rounded-full">
                <span className="text-xs font-medium text-primary">{item.category}</span>
              </div>
              <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                {item.title}
              </h3>
              <p className="text-sm text-foreground/60 mb-3">{item.company}</p>
              <p className="text-foreground/70 mb-4 leading-relaxed">{item.description}</p>
              <div className="flex items-center text-primary font-medium text-sm group-hover:gap-2 transition-all">
                Saiba mais <ArrowRight size={16} className="ml-1" />
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <button className="border border-primary text-primary px-8 py-3 rounded-full font-medium hover:bg-primary/5 transition-colors">
            Ver Todos os Projetos
          </button>
        </div>
      </div>
    </section>
  )
}
