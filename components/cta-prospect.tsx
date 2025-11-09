"use client"

import { ArrowRight } from "lucide-react"
import { motion } from "framer-motion"
import Link from "next/link"

export default function CtaProspect() {
  return (
    <section
      className="relative bg-fixed bg-center bg-cover py-6 lg:py-28 px-6 md:px-12 text-white overflow-hidden"
      style={{
        backgroundImage: "url('/images/cta-prospect.jpg')",
      }}
    >
      {/* Overlay escuro para contraste */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/70 to-black/50"></div>

      {/* Conteúdo principal */}
      <div className="relative z-10 container mx-auto max-w-3xl text-center">

        <div
  
          className="inline-block mb-6 px-4 py-2 bg-white/10 rounded-full backdrop-blur-sm"
        >
          <span
            className="text-lg font-medium text-white"
            style={{ fontFamily: "var(--font-urbanist)" }}
          >
            Conecte-se comigo
          </span>
        </div>

        <h2
   
          className="text-3xl lg:text-5xl font-bold mb-6 text-balance"
          style={{ fontFamily: "var(--font-campora)" }}
        >
          Vamos conversar?
        </h2>

        <p
    
          className="text-base lg:text-lg md:text-xl mb-10 text-gray-200 leading-relaxed text-balance"
          style={{ fontFamily: "var(--font-montserrat)" }}
        >
          Uma boa conversa pode render grandes ideias e resultados.  
          Vamos tomar um café e falar sobre novas oportunidades?
        </p>

        <div
       
          className="flex justify-center"
        >
          <Link href={"https://wa.me/5511999024090"} target="_blank">
              <button
                className="bg-[#dad1c8] text-[#111143]  text-base lg:text-lg cursor-pointer px-8 py-3 rounded-full font-bold hover:opacity-90 transition-all flex items-center justify-center gap-2 shadow-md"
              >
                Agende uma reunião 
                <div className="rounded-full p-[0.1rem] border border-[#111143]">
                  <ArrowRight className="text-primary" size={20} />
                </div>
              </button>
           </Link>
        </div>

      </div>
    </section>
  )
}
