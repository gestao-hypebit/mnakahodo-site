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
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-[#fefffa]">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mb-16"
        >
          <div className="inline-block mb-6 px-4 py-2 bg-[#040C8C]/10 rounded-full">
            <span
              style={{ fontFamily: "var(--font-urbanist)" }}
              className="text-lg text-[#040C8C] font-medium"
            >
              Nossos diferenciais
            </span>
          </div>
          <h2
            className="text-4xl md:text-5xl font-bold text-[#09080D] mb-4 text-balance"
            style={{ fontFamily: "var(--font-campora)" }}
          >
            Por que escolher <span className="text-[#040C8C]">MNAKAHODO</span>?
          </h2>
          <p
            className="text-lg text-[#111143]/80 max-w-2xl text-balance leading-relaxed"
            style={{ fontFamily: "var(--font-montserrat)" }}
          >
            Diferenciais que fazem a diferença no seu aprendizado e <strong className="text-[#040C8C]">resultados</strong>
          </p>
        </motion.div>

        {/* Grid de diferenciais */}
        <div className="grid md:grid-cols-2 gap-10">
          {differentials.map((diff, index) => {
            const Icon = diff.icon
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ delay: 0.2 * index, duration: 0.8, ease: "easeOut" }}
                className="flex gap-6 p-6 rounded-xl bg-white border border-[#DAD1C8] hover:border-[#111143]/20 transition-colors shadow-sm hover:shadow-md"
              >
                {/* Ícone */}
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-[#040C8C]/20 transition-shadow group-hover:shadow-md">
                    <Icon className="text-[#040C8C]" size={24} />
                  </div>
                </div>
                {/* Texto */}
                <div>
                  <h3
                    className="text-lg font-bold text-[#09080D] mb-2"
                    style={{ fontFamily: "var(--font-campora)" }}
                  >
                    {diff.title}{" "}
                    <span className="text-[#040C8C]">{diff.highlight}</span>
                  </h3>
                  <p
                    className="text-[#111143]/80 leading-relaxed"
                    style={{ fontFamily: "var(--font-montserrat)" }}
                  >
                    {diff.description}
                  </p>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
