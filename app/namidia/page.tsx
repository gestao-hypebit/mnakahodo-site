"use client"

import Image from "next/image"
import Link from "next/link"

export default function NaMidia() {
  const destaques = [
    {
      id: 1,
      imagem: "/midia/cnn.jpg",
      veiculo: "CNN Brasil",
      titulo: "Como proteger seu patrimônio em tempos de incerteza econômica",
      data: "Outubro de 2025",
      link: "#",
    },
    {
      id: 2,
      imagem: "/midia/valor-investe.jpg",
      veiculo: "Valor Investe",
      titulo: "Os principais erros no planejamento de aposentadoria",
      data: "Setembro de 2025",
      link: "#",
    },
    {
      id: 3,
      imagem: "/midia/podcast.jpg",
      veiculo: "Podcast Finanças Reais",
      titulo: "Comportamento financeiro e autoconhecimento",
      data: "Julho de 2025",
      link: "#",
    },
  ]

  const logos = [
    "/logos/cnn.png",
    "/logos/valor.png",
    "/logos/exame.png",
    "/logos/estadao.png",
    "/logos/bandnews.png",
  ]

  return (
    <main className="bg-[#111143] text-[#dad1c8]">
      {/* HERO */}
      <section className="relative lg:py-24 py-16 px-6 sm:px-8 overflow-hidden">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Na Mídia</h1>
          <p className="text-lg md:text-xl max-w-2xl mx-auto text-[#dad1c8]/80">
            Entrevistas, matérias e participações em que o educador financeiro compartilha análises sobre economia, investimentos e comportamento financeiro.
          </p>
        </div>
      </section>

      {/* DESTAQUES RECENTES */}
      <section className="bg-[#dad1c8] text-[#111143] py-20 px-6 sm:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Destaques Recentes</h2>

          <div className="grid md:grid-cols-3 sm:grid-cols-2 gap-10">
            {destaques.map((item) => (
              <div
                key={item.id}
                className="bg-white rounded-2xl overflow-hidden shadow-lg transition-transform hover:scale-[1.02]"
              >
                <Image
                  src={item.imagem}
                  alt={item.veiculo}
                  width={400}
                  height={250}
                  className="w-full h-52 object-cover"
                />
                <div className="p-6">
                  <p className="text-sm font-semibold text-[#e86a0c] mb-1">{item.veiculo}</p>
                  <h3 className="text-lg font-semibold mb-2">{item.titulo}</h3>
                  <p className="text-sm text-gray-700 mb-4">{item.data}</p>
                  <Link
                    href={item.link}
                    className="text-[#111143] font-medium hover:text-[#e86a0c] transition"
                  >
                    Ver matéria →
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* GALERIA DE APARIÇÕES */}
      <section className="py-20 px-6 sm:px-8 bg-[#111143]/95">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-10">Aparições e Conteúdos</h2>
          <p className="text-[#dad1c8]/80 max-w-2xl mx-auto mb-12">
            Veja outras participações em podcasts, eventos e postagens sobre educação financeira.
          </p>

          {/* Grid de imagens (substituir pelos conteúdos reais depois) */}
          <div className="grid md:grid-cols-3 sm:grid-cols-2 gap-6">
            {[1, 2, 3, 4, 5, 6].map((n) => (
              <div
                key={n}
                className="rounded-xl overflow-hidden shadow-md bg-[#dad1c8]/10 hover:bg-[#dad1c8]/20 transition"
              >
                <div className="aspect-video bg-[#dad1c8]/10 flex items-center justify-center text-[#dad1c8]/50 text-sm">
                  Mídia {n}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* LOGOS DE VEÍCULOS */}
      <section className="bg-[#dad1c8] py-14 px-6">
        <div className="max-w-6xl mx-auto flex flex-wrap items-center justify-center gap-10 opacity-80">
          {logos.map((src, i) => (
            <Image
              key={i}
              src={src}
              alt="Logo de veículo"
              width={120}
              height={60}
              className="object-contain grayscale hover:grayscale-0 transition"
            />
          ))}
        </div>
      </section>

      {/* CONTATO / ASSESSORIA */}
      <section className="py-24 px-6 sm:px-8 bg-[#111143] text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Fale com a assessoria</h2>
          <p className="text-[#dad1c8]/80 mb-8">
            Deseja convidar para entrevistas, eventos ou colaborações? Entre em contato com nossa equipe.
          </p>
          <Link
            href="/contato"
            className="inline-block bg-[#e86a0c] text-white font-semibold px-8 py-3 rounded-full hover:bg-[#d55f0b] transition"
          >
            Entrar em contato
          </Link>
        </div>
      </section>
    </main>
  )
}
