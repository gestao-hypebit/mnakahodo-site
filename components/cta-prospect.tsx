"use client"

import { Linkedin, Instagram, Coffee, ArrowRight } from "lucide-react"
import Link from "next/link"

export default function CtaProspect() {
  return (
    <section
      className="relative bg-fixed bg-center bg-cover py-24 px-6 md:px-12 text-white"
      style={{
        backgroundImage: "url('/images/cta-prospect.jpg')", // use sua imagem da caneca + café
      }}
    >
      {/* Overlay para contraste */}
      <div className="absolute inset-0 bg-black/80 "></div>

      {/* Conteúdo */}
      <div className="relative z-10 container mx-auto text-center md:text-left max-w-3xl">
        <h2 style={{
          fontFamily: "var(--font-campora)",
        }} className="text-4xl md:text-5xl font-bold mb-4 text-center">
          Vamos conversar?
        </h2>
        <p className="text-lg md:text-xl mb-8 text-gray-100 text-center">
          Uma boa conversa pode render grandes ideias e resultados.  
          Vamos tomar um café e falar sobre novas oportunidades?
        </p>
       <div className="flex justify-center ">
           <button className="bg-[#040C8C] text-white cursor-pointer px-8 py-3 rounded-full font-medium hover:bg-[#040C8C]/90 transition-colors flex items-center justify-center gap-2">
                Agende uma reunião <ArrowRight size={18} />
              </button>
        </div>
     
      </div>
    </section>
  )
}
