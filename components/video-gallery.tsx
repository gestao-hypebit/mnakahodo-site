"use client";
import { useState } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import Image from "next/image";

const items = [
  {
    id: 1,
    type: "video",
    url: "https://www.youtube.com/embed/uHGxlZA9-x8?si=vGwVdxBux2xQp32i",
  },
  {
    id: 2,
    type: "image",
    src: "/images/aparicoes/aparicao11.jpeg",
    caption:
      "Coordenação de evento acadêmico em que alunos desenvolveram jogos de tabuleiro para educação financeira.",
    alt: "Aparição em evento",
  },
  {
    id: 3,
    type: "image",
    src: "/images/aparicoes/aparicao12.jpeg",
    alt: "Entrevista",
  },
];

function MediaItem({ item }: { item: any }) {
  if (item.type === "video") {
    return (
      <iframe
        src={item.url}
        className="absolute top-0 left-0 w-full h-full"
        allowFullScreen
      />
    );
  }

  return (
    <Image src={item.src} alt={item.alt || ""} fill className="object-cover" />
  );
}

export default function VideoGallery() {
  const [current, setCurrent] = useState(0);

  const prev = () => setCurrent((current - 1 + items.length) % items.length);

  const next = () => setCurrent((current + 1) % items.length);

  return (
    <section className="bg-[#111143] py-10 lg:py-20 px-6 flex justify-center">
      <div className="max-w-6xl w-full text-center">
        <h1
          className="text-4xl md:text-5xl text-[#dad1c7] mb-8 lg:mb-16"
          style={{ fontFamily: "var(--font-campora)" }}
        >
          Galeria de Aparições
        </h1>

        <div className="relative flex items-center justify-center">
          {/* Item anterior */}
          <div className="hidden md:block absolute -left-64 w-[44%] opacity-40 scale-90 z-10 pointer-events-none">
            <div className="relative pb-[56.25%] h-0 rounded-xl overflow-hidden">
              <MediaItem
                item={items[(current - 1 + items.length) % items.length]}
              />
            </div>
          </div>

          {/* Item principal */}
          <div className="w-full md:w-[80%] z-20 relative">
            <div className="bg-[#1c1c1c] rounded-xl overflow-hidden shadow-2xl">
              <div className="relative pb-[56.25%] h-0">
                <div
                  key={current}
                  className="absolute top-0 left-0 w-full h-full opacity-0 animate-[fadeIn_0.5s_ease_forwards]"
                >
                  <MediaItem item={items[current]} />
                </div>
              </div>
            </div>

            {/* Legenda (opcional) */}
            {items[current].caption && (
              <p className="mt-4 text-sm md:text-base text-[#dad1c7] opacity-90">
                {items[current].caption}
              </p>
            )}
          </div>

          {/* Item próximo */}
          <div className="hidden md:block absolute -right-64 w-[44%] opacity-40 scale-90 z-10 pointer-events-none">
            <div className="relative pb-[56.25%] h-0 rounded-xl overflow-hidden">
              <MediaItem item={items[(current + 1) % items.length]} />
            </div>
          </div>

          {/* Botões */}
          <button
            className="absolute left-2 md:left-10 bg-[#dad1c7]/20 hover:bg-[#dad1c7]/30 text-[#dad1c7] p-3 rounded-full z-30"
            onClick={prev}
          >
            <ArrowLeft size={30} />
          </button>

          <button
            className="absolute right-2 md:right-10 bg-[#dad1c7]/20 hover:bg-[#dad1c7]/30 text-[#dad1c7] p-3 rounded-full z-30"
            onClick={next}
          >
            <ArrowRight size={30} />
          </button>
        </div>
      </div>
    </section>
  );
}
