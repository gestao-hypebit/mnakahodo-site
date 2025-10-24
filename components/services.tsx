"use client"

import { TrendingUp, Users, BookOpen, Zap, ArrowRight } from "lucide-react"
import Image from "next/image"
import { motion } from "framer-motion"

const services = [
  {
    icon: TrendingUp,
    title: "Análise Econômica Empresarial",
    description:
      "Estudos e projeções sobre crescimento, inflação, juros e câmbio — com foco prático em planejamento estratégico e impacto setorial.",
    features: ["Cenários econômicos", "Impacto setorial", "Planejamento estratégico"],
  },
  {
    icon: Users,
    title: "Palestras e Workshops",
    description:
      "Programas dinâmicos de saúde financeira e educação econômica para equipes, com metodologias interativas e conteúdo sob medida.",
    features: ["Presencial ou remoto", "Dinâmicas práticas", "Conteúdo personalizado"],
  },
  {
    icon: BookOpen,
    title: "Educação Financeira Pessoal",
    description:
      "Planejamento financeiro e investimentos com base em economia comportamental e ferramentas práticas de organização.",
    features: ["Metodologia adaptada", "Gamificação", "Simulações personalizadas"],
  },
  {
    icon: Zap,
    title: "Consultoria Especializada",
    description:
      "Projetos sob demanda para empresas e profissionais, com relatórios exclusivos e acompanhamento estratégico.",
    features: ["Sob demanda", "Consultoria 1:1", "Relatórios customizados"],
  },
]

export default function Services() {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-[#FFFFFF] to-[#F9FAFB] relative">
      {/* Marca decorativa */}
      <div className="absolute right-20 top-16 ">
        <Image
          src="/images/logos/logo_icon_blue.png"
          alt="Ícone decorativo"
          width={140}
          height={140}
        />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Cabeçalho */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center mb-16 max-w-3xl mx-auto"
        >
          <div className="inline-block mb-5 px-4 py-2 bg-[#040C8C]/10 rounded-full">
            <span
              style={{ fontFamily: "var(--font-urbanist)" }}
              className="text-lg text-[#040C8C] font-medium"
            >
              Nossos serviços
            </span>
          </div>
          <h2
            className="text-4xl md:text-5xl font-bold text-[#09080D] mb-4"
            style={{ fontFamily: "var(--font-campora)" }}
          >
            Soluções Personalizadas em{" "}
            <span className="text-[#040C8C]">Economia e Finanças</span>
          </h2>
          <p
            className="text-lg text-[#111143]/80 leading-relaxed"
            style={{ fontFamily: "var(--font-montserrat)" }}
          >
            Consultoria, palestras e programas de educação financeira
            desenvolvidos para transformar conhecimento econômico em resultados reais.
          </p>
        </motion.div>

        {/* Cards de serviços */}
        <div className="grid md:grid-cols-2 gap-10">
          {services.map((service, index) => {
            const Icon = service.icon
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ delay: index * 0.2, duration: 0.8, ease: "easeOut" }}
                className="group p-8 rounded-2xl border border-[#E5E7EB] bg-white hover:shadow-xl hover:scale-[1.02] transition-all duration-300"
              >
                <div className="mb-4 inline-block p-3 bg-[#040C8C]/10 rounded-xl group-hover:bg-[#040C8C]/20 transition-colors">
                  <Icon className="text-[#040C8C]" size={26} />
                </div>
                <h3
                  className="text-2xl font-bold text-[#09080D] mb-3"
                  style={{ fontFamily: "var(--font-campora)" }}
                >
                  {service.title}
                </h3>
                <p
                  className="text-[#111143]/80 mb-4 leading-relaxed"
                  style={{ fontFamily: "var(--font-montserrat)" }}
                >
                  {service.description}
                </p>
                <ul className="space-y-2">
                  {service.features.map((feature, i) => (
                    <li
                      key={i}
                      className="text-sm text-[#111143]/70 flex items-center gap-2"
                      style={{ fontFamily: "var(--font-montserrat)" }}
                    >
                      <span className="w-1.5 h-1.5 bg-[#040C8C] rounded-full" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </motion.div>
            )
          })}
        </div>

        {/* Botão CTA */}
        <div className="flex justify-center mt-20">
          <motion.button
            whileHover={{ scale: 1.05 }}
            className="bg-gradient-to-r from-[#040C8C] to-[#0A1EE0] text-white cursor-pointer px-10 py-4 rounded-full font-medium transition-all flex items-center justify-center gap-2 shadow-md"
          >
            Entre em contato <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </motion.button>
        </div>
      </div>
    </section>
  )
}
