import { ArrowRight } from "lucide-react"
import Image from "next/image"

export default function Academic() {
  return (
    <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 bg-[#fefffa]">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-7 gap-16 items-center">
          {/* Coluna de texto */}
          <div className="col-span-4">
            {/* Badge */}
            <div className="inline-block mb-6 px-4 py-2 bg-[#040C8C]/10 rounded-full">
              <span
                style={{ fontFamily: "var(--font-urbanist)" }}
                className="text-lg text-[#040C8C] font-medium"
              >
                Formação acadêmica
              </span>
            </div>

            {/* Título */}
            <h2
              className="text-5xl md:text-5xl font-bold text-[#09080D] mb-6 leading-tight text-balance"
              style={{ fontFamily: "var(--font-campora)" }}
            >
              Sólida formação em <span className="text-[#040C8C]">Economia</span> com experiência internacional e professores renomados.
            </h2>

            {/* Lista */}
            <ul
              className="text-lg text-[#111143]/80 mb-8 leading-relaxed space-y-3"
              style={{ fontFamily: "var(--font-montserrat)" }}
            >
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 mt-2 bg-[#040C8C] rounded-full flex-shrink-0"></span>
                Economista pela <strong>USP</strong> e Mestre pela <strong>UFRGS</strong> (conceito 6 CAPES).
              </li>
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 mt-2 bg-[#040C8C] rounded-full flex-shrink-0"></span>
                Mestre em Políticas Públicas pela <strong>Paris School of Economics</strong> — Top 5 mundial.
              </li>
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 mt-2 bg-[#040C8C] rounded-full flex-shrink-0"></span>
                Especialização em Economia Internacional pelo <strong>Kiel Institute for the World Economy</strong> (Alemanha).
              </li>
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 mt-2 bg-[#040C8C] rounded-full flex-shrink-0"></span>
                Aulas com <strong>Esther Duflo</strong> (Nobel), <strong>Thomas Piketty</strong> e <strong>Kenneth Rogoff</strong>.
              </li>
            </ul>

            {/* Botão */}
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-gradient-to-r from-[#040C8C] to-[#0A1EE0] text-white cursor-pointer px-8 py-3 rounded-full font-medium hover:opacity-90 transition-all flex items-center justify-center gap-2 shadow-md">
                Conheça minha trajetória completa <ArrowRight size={18} />
              </button>
            </div>
          </div>

          {/* Coluna da imagem */}
          <div className="relative h-[500px] rounded-2xl overflow-hidden border border-[#E5E7EB] col-span-3 shadow-sm">
            <Image
              src="/images/perfil/_W1A0276.jpg"
              width={500}
              height={500}
              alt="Foto acadêmica"
              className="w-full h-full object-cover object-top"
              priority
            />
            {/* Overlay sutil para contraste */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
          </div>
        </div>
      </div>
    </section>
  )
}
