import { ArrowRight } from "lucide-react"
import Image from "next/image"

export default function Hero() {
  return (
    <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 bg-[#fefffa]">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-block mb-6 px-4 py-2 bg-[#040C8C]/10 rounded-full">
              <span  style={{ fontFamily: "var(--font-urbanist)" }} className="text-lg text-[#040C8C] font-medium">Consultoria em Economia e Finanças</span>
            </div>
            <h1
              className="text-5xl md:text-6xl font-bold text-[#09080D] mb-6 leading-tight text-balance"
              style={{ fontFamily: "var(--font-campora)" }}
            >
              Transforme <span className="">decisões financeiras</span> em resultados
            </h1>
            <p
              className="text-lg text-[#111143]/70 mb-8 leading-relaxed text-balance"
              style={{ fontFamily: "var(--font-montserrat)" }}
            >
              Palestras, workshops e consultoria especializada em economia empresarial e educação financeira pessoal.
              Mais de 20 anos de experiência transformando conceitos complexos em aprendizados claros e aplicáveis.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-[#040C8C] text-white cursor-pointer px-8 py-3 rounded-full font-medium hover:bg-[#E86A0C]/90 transition-colors flex items-center justify-center gap-2">
                Agende uma conversa <ArrowRight size={18} />
              </button>
              <button className="border cursor-pointer  border-[#111143] text-[#111143] px-8 py-3 rounded-full font-medium hover:bg-[#111143]/5 transition-colors">
                Conhecer Serviços
              </button>
            </div>
          </div>
          <div className="relative h-[600px]   rounded-2xl overflow-hidden border border-[#DAD1C8]">
            <Image src={"/images/perfil/_W1A0262.jpg"} width={400} height={400} alt="" className="w-full h-full bg-cover object-cover bg-top object-top" />
          </div>
        </div>
      </div>
    </section>
  )
}
