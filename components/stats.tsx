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
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-[#040C8C]/5 to-[#111143]/5 relative">
          <div className="absolute left-32 top-20">
                    <Image src={"/images/logos/logo_icon.png"} className="opacity-50" alt="" width={150} height={150} />
                  </div>
      <div className="max-w-7xl mx-auto text-center">
        <div className="mb-16">
           <div className="inline-block mb-6 px-4 py-2 bg-[#E86A0C]/10 rounded-full">
              <span  style={{ fontFamily: "var(--font-urbanist)" }} className="text-lg text-[#E86A0C] font-medium">
                Nossos números
              </span>
            </div>
          <h2 className="text-4xl md:text-5xl font-bold text-[#09080D] mb-4 text-balance">
            Resultados que falam por si
          </h2>
          <p className="text-lg text-[#111143]/60 max-w-2xl mx-auto text-balance">
            Uma trajetória marcada por impacto, relevância e transformação real
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => {
            const Icon = stat.icon
            return (
              <div
                key={index}
                className="flex flex-col items-center p-8 rounded-xl bg-white border border-[#DAD1C8] hover:border-[#111143]/20 transition-colors"
              >
                <div className="flex items-center justify-center h-14 w-14 rounded-lg bg-[#040C8C]/10 mb-4">
                  <Icon className="text-[#040C8C]" size={28} />
                </div>
                <h3 className="text-3xl md:text-4xl font-extrabold text-[#040C8C] mb-1">
                  {stat.number}
                </h3>
                <p className="text-lg font-semibold text-[#09080D] mb-2">
                  {stat.label}
                </p>
                <p className="text-[#111143]/70 text-sm leading-relaxed">
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
