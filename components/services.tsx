import { TrendingUp, Users, BookOpen, Zap, ArrowRight } from "lucide-react"
import Image from "next/image"

const services = [
  {
    icon: TrendingUp,
    title: "Análise Econômica Empresarial",
    description:
      "Perspectivas econômicas do Brasil, América Latina e Mundo com foco em crescimento, inflação, taxa de juros e câmbio.",
    features: ["Cenários econômicos", "Impacto setorial", "Planejamento estratégico"],
  },
  {
    icon: Users,
    title: "Palestras e Workshops",
    description: "Saúde financeira e bem-estar dos colaboradores com ferramentas práticas de finanças comportamentais.",
    features: ["Presencial e remoto", "Dinâmicas interativas", "Conteúdo personalizado"],
  },
  {
    icon: BookOpen,
    title: "Educação Financeira Pessoal",
    description: "Planejamento financeiro integrado com economia comportamental, organização e investimentos.",
    features: ["Metodologia adaptada", "Gamificação", "Simulações personalizadas"],
  },
  {
    icon: Zap,
    title: "Consultoria Especializada",
    description: "Soluções sob demanda para empresas e pessoas físicas com abordagem inovadora e completa.",
    features: ["Sob demanda", "Consultoria 1:1", "Relatórios customizados"],
  },
]

export default function Services() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-[#fefffa] relative">
      {/* <div className="absolute right-32 top-20">
        <Image src={"/images/logos/logo_icon.png"} className="opacity-50" alt="" width={150} height={150} />
      </div> */}
      <div className="max-w-7xl mx-auto">
        <div className=" mb-12">
          <div className="inline-block mb-6 px-4 py-2 bg-primary/10 rounded-full">
              <span  style={{ fontFamily: "var(--font-urbanist)" }} className="text-lg text-primary font-medium">Nossos serviços</span>
            </div>
          <h2
            className="text-4xl md:text-5xl font-bold text-[#09080D] mb-4 text-balance"
            style={{ fontFamily: "var(--font-campora)" }}
          >
            Soluções Personalizadas em Economia e Finanças
          </h2>
          <p
            className="text-lg text-[#111143]/60   text-balance"
            style={{ fontFamily: "var(--font-montserrat)" }}
          >
            Soluções completas em economia e educação financeira para empresas e pessoas físicas
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon
            return (
              <div
                key={index}
                className="p-8 rounded-xl border border-[#DAD1C8] bg-white hover:border-[#040C8C]/50 transition-all duration-300 hover:shadow-lg"
              >
                <div className="mb-4 inline-block p-3 bg-[#040C8C]/10 rounded-lg">
                  <Icon className="text-[#040C8C]" size={24} />
                </div>
                <h3 className="text-xl font-bold text-[#09080D] mb-3" style={{ fontFamily: "var(--font-campora)" }}>
                  {service.title}
                </h3>
                <p className="text-[#111143]/70 mb-4 leading-relaxed" style={{ fontFamily: "var(--font-montserrat)" }}>
                  {service.description}
                </p>
                <ul className="space-y-2">
                  {service.features.map((feature, i) => (
                    <li
                      key={i}
                      className="text-sm text-[#111143]/60 flex items-center gap-2"
                      style={{ fontFamily: "var(--font-montserrat)" }}
                    >
                      <span className="w-1.5 h-1.5 bg-[#040C8C] rounded-full"></span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            )
          })}
        </div>
        <div className="flex justify-center mt-16">
           <button className="bg-[#040C8C] text-white cursor-pointer px-8 py-3 rounded-full font-medium hover:bg-[#040C8C]/90 transition-colors flex items-center justify-center gap-2">
                Entre em contato <ArrowRight size={18} />
              </button>
        </div>
      </div>
    </section>
  )
}
