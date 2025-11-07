"use client"

import { Award, Brain, Lightbulb, Zap } from "lucide-react"
import { motion } from "framer-motion"

const differentials = [
  {
    icon: Award,
    title: "Experiência Sólida",
    highlight: "20 anos",
    description:
      "Economista com mais de 20 anos de atuação no mercado financeiro, acompanhando tendências e impactos econômicos.",
  },
  {
    icon: Brain,
    title: "Didática Diferenciada",
    highlight: "conceitos complexos",
    description:
      "Professor especializado em transformar conceitos complexos em aprendizados claros, envolventes e aplicáveis.",
  },
  {
    icon: Lightbulb,
    title: "Abordagem Inovadora",
    highlight: "economia comportamental",
    description: "Integração de economia comportamental, organização financeira, investimentos e planejamento de vida.",
  },
  {
    icon: Zap,
    title: "Interatividade Total",
    highlight: "quizzes e gamificação",
    description: "Dinâmicas, quizzes, gamificação e simulações personalizadas para maior retenção e engajamento.",
  },
]

export default function Differentials() {
  return (
    <section className="py-6 lg:py-20 px-4 sm:px-6 lg:px-8 bg-[#111143]">
      <div className="max-w-7xl mx-auto lg:text-start text-center">
        {/* Header */}
        <div
          
          className="lg:mb-16"
        >
          <div className="inline-block mb-6 px-4 py-2 bg-primary rounded-full">
            <span
              style={{ fontFamily: "var(--font-urbanist)" }}
              className="text-lg text-[#dad1c7] font-medium"
            >
              Nossos diferenciais
            </span>
          </div>
          <h2
            className="text-3xl lg:text-5xl font-bold text-[#dad1c7] mb-4 text-balance"
            style={{ fontFamily: "var(--font-campora)" }}
          >
            Por que escolher <span className="text-primary">MNAKAHODO?</span>
          </h2>
          <p
            className="text-base lg:text-lg text-[#dad1c7] max-w-2xl text-balance leading-relaxed"
            style={{ fontFamily: "var(--font-montserrat)" }}
          >
            Diferenciais que fazem a diferença no seu <strong>aprendizado e resultados</strong>
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-4 lg:gap-10 mt-4 lg:mt-0">
          {differentials.map((diff, index) => {
            const Icon = diff.icon
            return (
              <div
                key={index}
            
                className="flex gap-6 p-4 lg:p-6 rounded-2xl bg-primary  transition-colors "
              >
                {/* Ícone */}
                {/* <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-[#040C8C]/20 transition-shadow group-hover:shadow-md">
                    <Icon className="text-[#040C8C]" size={24} />
                  </div>
                </div> */}
                <div>
                  <h3
                    className="text-lg font-bold text-[#dad1c7] mb-2"
                    style={{ fontFamily: "var(--font-campora)" }}
                  >
                    {diff.title}{" "}
                    <span className="text-[#111143]">{diff.highlight}</span>
                  </h3>
                  <p
                    className="text-[#dad1c7] leading-relaxed"
                    style={{ fontFamily: "var(--font-montserrat)" }}
                  >
                    {diff.description}
                  </p>
                </div>
                      <div className="lg:flex-shrink-0 hidden">
                  <div className="flex items-center justify-center h-12 w-12 rounded-lg  transition-shadow group-hover:shadow-md">
                    <Icon className="text-[#dad1c7]" size={30} />
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
