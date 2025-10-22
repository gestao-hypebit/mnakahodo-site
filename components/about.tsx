import { ArrowRight } from "lucide-react"
import Image from "next/image"

export default function Hero() {
  return (
    <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-44 bg-gradient-to-b from-[#040C8C]/5 to-[#111143]/5 relative">
            <div className="absolute right-32 top-20">
              <Image src={"/images/logos/logo_icon.png"} className="opacity-50" alt="" width={150} height={150} />
            </div>
      <div className=" mx-auto">
        <div className="grid md:grid-cols-2 gap-24 items-center">
            <div className="relative h-[500px]   rounded-2xl overflow-hidden border border-[#DAD1C8]">
            <Image src={"/images/perfil/_W1A0280.jpg"} width={400} height={400} alt="" className="w-full h-full bg-cover object-cover bg-top object-top" />
          </div>
          <div>
            <div className="inline-block mb-6 px-4 py-2 bg-[#E86A0C]/10 rounded-full">
              <span  style={{ fontFamily: "var(--font-urbanist)" }} className="text-lg text-[#E86A0C] font-medium">Sobre mim</span>
            </div>
            <h1
              className="text-5xl md:text-6xl font-bold text-[#09080D] mb-6 leading-tight text-balance"
              style={{ fontFamily: "var(--font-campora)" }}
            >
              Maurício Nakahodo
            </h1>
            <p
              className="text-lg text-[#111143]/70 mb-8 leading-relaxed  text-justify"
              style={{ fontFamily: "var(--font-montserrat)" }}
            >
             Economista com mais de 20 anos de experiência profissional em pesquisa econômica aplicada, com carreira desenvolvida principalmente em instituições financeiras e institutos de pesquisa
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-[#E86A0C] text-white cursor-pointer px-8 py-3 rounded-full font-medium hover:bg-[#E86A0C]/90 transition-colors flex items-center justify-center gap-2">
                Saiba mais <ArrowRight size={18} />
              </button>
           
            </div>
          </div>
        
        </div>
      </div>
    </section>
  )
}
