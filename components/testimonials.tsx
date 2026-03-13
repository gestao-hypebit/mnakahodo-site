"use client"

import { ChevronLeft, ChevronRight, StarIcon } from "lucide-react"
import { useState } from "react"

const testimonials = [
  {
    name: "Lucas Tai",
    text: "Trabalhei alguns anos com o Mauricio e posso dizer que ele é um profissional muito competente, que sabe aliar um excelente conteúdo com uma forma muito clara de comunicação.",
    rating: 5,
  },
  {
    name: "Vivian Padilha",
    text: "Durante nossa colaboração, pude observar como Maurício torna temas complexos acessíveis com explicações claras e didáticas. Ele possui profundo entendimento técnico da economia, destacado por suas projeções e análises perspicazes.",
    rating: 5,
  },
  {
    name: "Eduardo Hiroshi",
    text: "Profissional extremamente competente, comprometido e com um vasto conhecimento teórico e prático na área da ciência ecônomica, e - somando-se a tudo isso - um profissional humano acima de tudo.",
    rating: 5,
  },
  {
    name: "Gustavo Sung",
    text: "Gravar este episódio com o Maurício foi uma experiência extremamente enriquecedora. Ao longo da conversa, exploramos como os vieses comportamentais influenciam nossas decisões não apenas nos investimentos, mas também no trabalho, nos negócios e na vida cotidiana. Com exemplos práticos e situações do dia a dia, discutimos como emoções, atalhos mentais e percepções distorcidas moldam escolhas que, muitas vezes, acreditamos ser totalmente racionais. Foi um diálogo didático, acessível e ao mesmo tempo profundo, capaz de provocar reflexões reais sobre como pensamos e decidimos. Mais do que um episódio sobre economia, foi uma conversa sobre comportamento humano. Um conteúdo que todos deveriam ouvir para tomar decisões mais conscientes e construir resultados mais consistentes no médio e longo prazo.",
    rating: 5,
  },
]

export default function Testimonials() {
  const [idx, setIdx] = useState(0)

  const prev = () => setIdx((i) => (i - 1 + testimonials.length) % testimonials.length)
  const next = () => setIdx((i) => (i + 1) % testimonials.length)

  const t = testimonials[idx]

  return (
    <section className="lg:py-20 py-12 px-4 sm:px-6 lg:px-8 bg-[#111143]">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="lg:mb-16 mb-8 text-center">
          <div className="inline-block mb-6 px-4 py-2 bg-[#dad1c7] rounded-full">
            <span
              style={{ fontFamily: "var(--font-urbanist)" }}
              className="text-lg text-[#111143] font-medium"
            >
              Depoimentos
            </span>
          </div>
          <h2
            className="text-3xl lg:text-5xl font-bold text-[#dad1c7] mb-4 text-balance"
            style={{ fontFamily: "var(--font-campora)" }}
          >
            O que dizem sobre <span className="text-primary">nosso trabalho.</span>
          </h2>
          <p
            className="text-base lg:text-lg text-[#dad1c7] max-w-2xl mx-auto text-balance leading-relaxed"
            style={{ fontFamily: "var(--font-montserrat)" }}
          >
            Depoimentos de <strong>clientes satisfeitos</strong>
          </p>
        </div>

        {/* Carrossel */}
        <div className="relative max-w-2xl mx-auto px-14">
          <div className="p-8 lg:p-12 rounded-2xl bg-[#dad1c7] min-h-[200px] flex flex-col justify-between">
            {/* Rating */}
            <div className="flex justify-center gap-1 mb-4">
              {[...Array(t.rating)].map((_, i) => (
                <StarIcon key={i} size={28} className="fill-[#111143] text-[#111143]" />
              ))}
            </div>

            {/* Texto */}
            <p
              className="text-[#111143] mb-6 leading-relaxed italic text-center"
              style={{ fontFamily: "var(--font-montserrat)" }}
            >
              &ldquo;{t.text}&rdquo;
            </p>

            {/* Autor */}
            <p
              className="font-bold text-[#111143] text-center"
              style={{ fontFamily: "var(--font-campora)" }}
            >
              {t.name}
            </p>
          </div>

          {/* Seta esquerda */}
          <button
            onClick={prev}
            className="absolute left-0 top-1/2 -translate-y-1/2 bg-[#e86a0c] rounded-full p-2 hover:opacity-80 transition-all shadow-md cursor-pointer"
            aria-label="Depoimento anterior"
          >
            <ChevronLeft size={22} className="text-white" />
          </button>

          {/* Seta direita */}
          <button
            onClick={next}
            className="absolute right-0 top-1/2 -translate-y-1/2 bg-[#e86a0c] rounded-full p-2 hover:opacity-80 transition-all shadow-md cursor-pointer"
            aria-label="Próximo depoimento"
          >
            <ChevronRight size={22} className="text-white" />
          </button>

          {/* Dots */}
          <div className="flex justify-center gap-2 mt-5">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => setIdx(i)}
                className={`h-2 rounded-full transition-all cursor-pointer ${
                  i === idx ? "bg-[#e86a0c] w-6" : "bg-[#dad1c7] w-2 opacity-50"
                }`}
                aria-label={`Ir para depoimento ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
