"use client"

import { Users, Briefcase, Mic, Award } from "lucide-react"
import Image from "next/image"

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
    <section className="relative py-24 px-6 sm:px-8 bg-gradient-to-b from-[#040C8C]/5 to-[#111143]/5 overflow-hidden">
      {/* Marca d’água sutil */}
      <div className="absolute left-32 top-24">
        <Image src={"/images/logos/logo_icon_blue.png"} alt="Logo" width={140} height={140} />
      </div>

      <div className="max-w-7xl mx-auto relative z-10 text-center">
        {/* Título e subtítulo */}
        <div className="mb-16">
          <div className="inline-block mb-6 px-4 py-2 bg-[#040C8C]/10 rounded-full">
            <span
              style={{ fontFamily: "var(--font-urbanist)" }}
              className="text-lg text-[#040C8C] font-medium"
            >
              Nossos números
            </span>
          </div>

          <h2
            className="text-4xl md:text-5xl font-bold text-[#09080D] mb-4 leading-tight text-balance"
            style={{ fontFamily: "var(--font-campora)" }}
          >
            Resultados que <span className="text-[#040C8C]">falam por si</span>
          </h2>

          <p
            className="text-lg text-[#111143]/70 max-w-2xl mx-auto leading-relaxed"
            style={{ fontFamily: "var(--font-montserrat)" }}
          >
            Uma trajetória marcada por impacto, relevância e transformação real.
          </p>
        </div>

        {/* Cards de estatísticas */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => {
            const Icon = stat.icon
            return (
              <div
                key={index}
                className="flex flex-col items-center text-center p-8 rounded-2xl bg-white border border-[#DAD1C8]/70 hover:border-[#040C8C]/20 shadow-sm hover:shadow-md transition-all"
              >
                <div className="flex items-center justify-center h-14 w-14 rounded-lg bg-[#040C8C]/10 mb-5">
                  <Icon className="text-[#040C8C]" size={28} />
                </div>
                <h3
                  className="text-3xl md:text-4xl font-extrabold text-[#040C8C] mb-2"
                  style={{ fontFamily: "var(--font-campora)" }}
                >
                  {stat.number}
                </h3>
                <p
                  className="text-lg font-semibold text-[#09080D] mb-2"
                  style={{ fontFamily: "var(--font-urbanist)" }}
                >
                  {stat.label}
                </p>
                <p
                  className="text-[#111143]/70 text-base leading-relaxed"
                  style={{ fontFamily: "var(--font-montserrat)" }}
                >
                  {stat.description}
                </p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
