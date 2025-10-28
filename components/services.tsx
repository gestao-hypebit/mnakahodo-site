"use client"

import { TrendingUp, Users, BookOpen, Zap, ArrowRight } from "lucide-react"
import Image from "next/image"
import { motion } from "framer-motion"

const services = [
  {
    icon: TrendingUp,
    title: "Análise Econômica Empresarial",
    description:
      "Estudos e projeções sobre crescimento, inflação, juros e câmbio, com foco prático em planejamento estratégico e impacto setorial.",
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
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-[#dad1c7] relative">
      {/* Marca decorativa */}
 

      <div className="px-12 mx-auto relative z-10">
        {/* Cabeçalho */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center mb-16  mx-auto  flex justify-center flex-col items-center"
        >
          <div className="inline-block mb-5 px-4 py-2 bg-[#111143] rounded-full">
            <span
              style={{ fontFamily: "var(--font-urbanist)" }}
              className="text-lg text-[#dad1c7] font-medium"
            >
              Nossos serviços
            </span>
          </div>
          <h2
            className="text-4xl md:text-5xl font-bold text-[#111143] mb-4"
            style={{ fontFamily: "var(--font-campora)" }}
          >
            Soluções Personalizadas em{" "}
            <span className="text-primary">Economia e Finanças</span>
          </h2>
          <p
            className="text-xl text-[#111143] leading-relaxed  text-center  max-w-4xl"
            style={{ fontFamily: "var(--font-urbanist)" }}
          >
            Consultoria, palestras e programas de educação financeira
            desenvolvidos <span className="font-bold">para transformar conhecimento econômico em resultados reais.</span>
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
                className="group p-8 rounded-4xl border border-[#E5E7EB] bg-[#111143] hover:shadow-xl hover:scale-[1.02] transition-all duration-300"
              >
                {/* <div className="mb-4 inline-block p-3 bg-[#040C8C]/10 rounded-xl group-hover:bg-[#040C8C]/20 transition-colors">
                  <Icon className="text-[#040C8C]" size={26} />
                </div> */}
              <div className="flex   gap-x-4">
                  <div>
                      <h3
                  className="text-3xl font-bold text-primary mb-3"
                  style={{ fontFamily: "var(--font-campora)" }}
                >
                  {service.title}
                </h3>
                  </div>
                  <div>
                     <Icon className="text-[#dad1c7]" size={44} />
                  </div>
              </div>
                <p
                  className="text-[#dad1c7] text-lg mb-4 leading-relaxed"
                  style={{ fontFamily: "var(--font-montserrat)" }}
                >
                  {service.description}
                </p>
                <ul className="space-y-2">
                  {service.features.map((feature, i) => (
                    <li
                      key={i}
                      className="text-lg text-[#dad1c7] flex items-center gap-2 font-bold"
                      style={{ fontFamily: "var(--font-montserrat)" }}
                    >
                      <span className="w-1.5 h-1.5 bg-[#dad1c7] rounded-full" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </motion.div>
            )
          })}
        </div>
     <motion.div
              whileHover={{ scale: 1.05 }}
              className="flex justify-center mt-20"
            >
              <button className="border  border-[#111143] text-[#111143] text-lg cursor-pointer px-8 py-3 rounded-full font-bold transition-all flex items-center justify-center gap-2 ">
                Entre em contato 
                     <div className="rounded-full p-[0.1rem] border border-[#111143]">
                  <ArrowRight className="text-primary" size={20} />
                </div>
              </button>
            </motion.div>
        {/* Botão CTA */}
        {/* <div className="flex justify-center mt-20">
          <motion.button
            whileHover={{ scale: 1.05 }}
            className="bg-gradient-to-r from-[#040C8C] to-[#0A1EE0] text-white cursor-pointer px-10 py-4 rounded-full font-medium transition-all flex items-center justify-center gap-2 shadow-md"
          >
            Entre em contato <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </motion.button>
        </div> */}
      </div>
    </section>
  )
}
