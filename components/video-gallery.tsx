"use client"
import { useState } from "react"
import { ArrowLeft, ArrowRight } from "lucide-react"

const videos = [
  // { id: 1, url: "https://www.youtube.com/embed/8JHOHuu3_eI?si=Svp2gzetdtQHI_Ep" },
  { id: 2, url: "https://www.youtube.com/embed/uHGxlZA9-x8?si=vGwVdxBux2xQp32i" },
  // { id: 3, url: "https://www.youtube.com/embed/dyWDOLPdE7Q?start=4881" },
]


export default function VideoGallery() {
  const [current, setCurrent] = useState(0)

  const prev = () =>
    setCurrent((current - 1 + videos.length) % videos.length)

  const next = () =>
    setCurrent((current + 1) % videos.length)

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

          {/* Vídeo anterior */}
          <div className="
            hidden md:block absolute -left-64
            w-[44%] opacity-40 scale-90 
            z-10 pointer-events-none
          ">
            <div className="relative pb-[56.25%] h-0 rounded-xl overflow-hidden">
              <iframe
                src={videos[(current - 1 + videos.length) % videos.length].url}
                className="absolute top-0 left-0 w-full h-full"
                allowFullScreen
              />
            </div>
          </div>

          {/* Vídeo principal com fade */}
          <div className="
            w-full md:w-[80%] 
            bg-[#1c1c1c] rounded-xl overflow-hidden shadow-2xl
            z-20 relative
          ">
            <div className="relative pb-[56.25%] h-0">

              {/* Wrapper animado */}
              <div
                key={current} 
                className="
                  absolute top-0 left-0 w-full h-full
                  opacity-0 animate-[fadeIn_0.5s_ease_forwards]
                "
              >
                <iframe
                  src={videos[current].url}
                  className="absolute top-0 left-0 w-full h-full"
                  allowFullScreen
                />
              </div>

            </div>
          </div>

          {/* Vídeo próximo */}
          <div className="
            hidden md:block absolute -right-64 
            w-[44%] opacity-40 scale-90 
            z-10 pointer-events-none
          ">
            <div className="relative pb-[56.25%] h-0 rounded-xl overflow-hidden">
              <iframe
                src={videos[(current + 1) % videos.length].url}
                className="absolute top-0 left-0 w-full h-full"
                allowFullScreen
              />
            </div>
          </div>

          {/* Botão esquerda */}
          <button
            className="absolute left-2 md:left-10 cursor-pointer
              bg-[#dad1c7]/20 hover:bg-[#dad1c7]/30 
              text-[#dad1c7] p-3 rounded-full z-30
            "
            onClick={prev}
          >
            <ArrowLeft size={30} />
          </button>

          {/* Botão direita */}
          <button
            className="absolute right-2 md:right-10  cursor-pointer
              bg-[#dad1c7]/20 hover:bg-[#dad1c7]/30 
              text-[#dad1c7] p-3 rounded-full z-30
            "
            onClick={next}
          >
            <ArrowRight size={30} />
          </button>

        </div>
      </div>
    </section>
  )
}
