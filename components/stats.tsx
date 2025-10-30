"use client"

import { Users, Briefcase, Mic, Award } from "lucide-react"
import Image from "next/image"
import { motion } from "framer-motion"

const stats = [
  {
    icon: Award,
    number: "+20",
    label: "Anos de Experiência",
    description: "Atuando em economia empresarial, educação financeira e consultoria estratégica.",
  },
  {
    icon: Mic,
    number: "+300",
    label: "Palestras e Workshops",
    description: "Eventos realizados em empresas, universidades e instituições em todo o Brasil.",
  },
  {
    icon: Users,
    number: "+10 mil",
    label: "Pessoas Impactadas",
    description: "Profissionais e estudantes transformados com conteúdo acessível e aplicável.",
  },
  {
    icon: Briefcase,
    number: "+100",
    label: "Empresas Atendidas",
    description: "Organizações que confiaram em análises e treinamentos personalizados.",
  },
]

export default function Stats() {
  return (
    <section className="relative py-24 px-6 sm:px-8 bg-[#dad1c7] overflow-hidden">
      {/* Marca d’água sutil */}
      {/* <div className="absolute left-32 top-24">
        <Image src={"/images/logos/logo_icon_blue.png"} alt="Logo" width={140} height={140} />
      </div> */}

      <div className="max-w-7xl mx-auto relative z-10 text-center">
        {/* Título e subtítulo */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mb-16"
        >
          <div className="inline-block mb-6 px-4 py-2 bg-[#111143] rounded-full">
            <span
              style={{ fontFamily: "var(--font-urbanist)" }}
              className="text-lg text-[#dad1c7] font-medium"
            >
              Nossos números
            </span>
          </div>

          <h2
            className="text-4xl md:text-5xl font-bold text-[#111143] mb-4 leading-tight text-balance"
            style={{ fontFamily: "var(--font-campora)" }}
          >
            Resultados que <span className="text-primary font-bold">falam por si.</span>
          </h2>

          <p
            className="text-lg text-[#111143] max-w-2xl mx-auto leading-relaxed"
            style={{ fontFamily: "var(--font-montserrat)" }}
          >
            Uma trajetória marcada por <span className="font-bold">impacto, relevância e transformação real.</span>
          </p>
        </motion.div>

        {/* Cards de estatísticas */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => {
            const Icon = stat.icon
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ delay: 0.2 * index, duration: 0.8, ease: "easeOut" }}
                className="flex flex-col items-center text-center p-8 rounded-2xl bg-[#111143]   transition-all"
              >
                <div className="flex items-center justify-center h-14 w-14 rounded-lg bg-[#040C8C]/10 mb-5">
                  <Icon className="text-[#dad1c7]" size={44} />
                </div>
                <h3
                  className="text-3xl md:text-4xl font-extrabold text-primary mb-2"
                  style={{ fontFamily: "var(--font-campora)" }}
                >
                  {stat.number}
                </h3>
                <p
                  className="text-lg font-semibold text-[#dad1c7] mb-2"
                  style={{ fontFamily: "var(--font-urbanist)" }}
                >
                  {stat.label}
                </p>
                <p
                  className="text-[#dad1c7] text-base leading-relaxed"
                  style={{ fontFamily: "var(--font-montserrat)" }}
                >
                  {stat.description}
                </p>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
