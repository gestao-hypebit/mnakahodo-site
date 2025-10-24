import { ArrowRight } from "lucide-react"
import Image from "next/image"

export default function Academic() {
  return (
    <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 bg-[#fefffa]">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-7 gap-12 items-center">
          <div className="col-span-4">
            <div className="inline-block mb-6 px-4 py-2 bg-primary/10 rounded-full">
              <span  style={{ fontFamily: "var(--font-urbanist)" }} className="text-lg text-primary font-medium">Formação acadêmica</span>
            </div>
            <h1
              className="text-5xl md:text-5xl font-bold text-[#09080D] mb-6 leading-tight text-balance"
              style={{ fontFamily: "var(--font-campora)" }}
            >
              Sólida formação em Economia com experiência internacional e professores renomados.
            </h1>
               <ul className="list-disc list-inside text-neutral-700 space-y-3 text-base">
  <li>Economista pela <strong>USP</strong> e Mestre pela <strong>UFRGS</strong> (conceito 6 CAPES).</li>
  <li>Mestre em Políticas Públicas pela <strong>Paris School of Economics</strong> — Top 5 mundial.</li>
  <li>Especialização em Economia Internacional pelo <strong>Kiel Institute for the World Economy</strong> (Alemanha).</li>
  <li>Aulas com <strong>Esther Duflo</strong> (Nobel), <strong>Thomas Piketty</strong> e <strong>Kenneth Rogoff</strong>.</li>
</ul>


            {/* <p
              className="text-lg text-[#111143]/70 mb-8 leading-relaxed text-balance"
              style={{ fontFamily: "var(--font-montserrat)" }}
            >
              Palestras, workshops e consultoria especializada em economia empresarial e educação financeira pessoal.
              Mais de 20 anos de experiência transformando conceitos complexos em aprendizados claros e aplicáveis.
            </p> */}
            <div className="flex flex-col sm:flex-row gap-4 mt-8">
              <button className="bg-[#040C8C] text-white cursor-pointer px-8 py-3 rounded-full font-medium hover:bg-[#040C8C]/90 transition-colors flex items-center justify-center gap-2">
                Conheça minha trajetória completa <ArrowRight size={18} />
              </button>
            </div>
          </div>
          <div className="relative h-[500px]   rounded-2xl overflow-hidden border border-[#DAD1C8] col-span-3">
            <Image src={"/images/perfil/_W1A0276.jpg"} width={400} height={400} alt="" className="w-full h-full bg-cover object-cover bg-top object-top" />
          </div>
        </div>
      </div>
    </section>
  )
}
