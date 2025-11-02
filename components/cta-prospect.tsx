"use client"

import { ArrowRight } from "lucide-react"
import { motion } from "framer-motion"

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

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="inline-block mb-6 px-4 py-2 bg-white/10 rounded-full backdrop-blur-sm"
        >
          <span
            className="text-lg font-medium text-white"
            style={{ fontFamily: "var(--font-urbanist)" }}
          >
            Conecte-se comigo
          </span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ delay: 0.2, duration: 0.8, ease: "easeOut" }}
          className="text-3xl lg:text-5xl font-bold mb-6 text-balance"
          style={{ fontFamily: "var(--font-campora)" }}
        >
          Vamos conversar?
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ delay: 0.4, duration: 0.8, ease: "easeOut" }}
          className="text-base lg:text-lg md:text-xl mb-10 text-gray-200 leading-relaxed text-balance"
          style={{ fontFamily: "var(--font-montserrat)" }}
        >
          Uma boa conversa pode render grandes ideias e resultados.  
          Vamos tomar um café e falar sobre novas oportunidades?
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ delay: 0.6, duration: 0.8, ease: "easeOut" }}
          className="flex justify-center"
        >
              <motion.button
                whileHover={{ scale: 1.05 }}
                className="bg-[#dad1c8] text-[#111143]  text-base lg:text-lg cursor-pointer px-8 py-3 rounded-full font-bold hover:opacity-90 transition-all flex items-center justify-center gap-2 shadow-md"
              >
                Agende uma reunião 
                <div className="rounded-full p-[0.1rem] border border-[#111143]">
                  <ArrowRight className="text-primary" size={20} />
                </div>
              </motion.button>
        </motion.div>

      </div>
    </section>
  )
}
