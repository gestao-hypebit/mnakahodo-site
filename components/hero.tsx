"use client"

import { ArrowRight } from "lucide-react"
import Image from "next/image"
import { motion } from "framer-motion"

export default function Hero() {
  return (
    <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 bg-[#fefffa]">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          
          {/* Coluna de texto */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="inline-block mb-6 px-4 py-2 bg-[#040C8C]/10 rounded-full">
              <span
                style={{ fontFamily: "var(--font-urbanist)" }}
                className="text-lg text-[#040C8C] font-medium"
              >
                Consultoria em Economia e Finanças
              </span>
            </div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ delay: 0.2, duration: 0.8, ease: "easeOut" }}
              className="text-5xl md:text-6xl font-bold text-[#09080D] mb-6 leading-tight text-balance"
              style={{ fontFamily: "var(--font-campora)" }}
            >
              Transforme <span>decisões financeiras</span> em resultados
            </motion.h1>

            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ delay: 0.4, duration: 0.8, ease: "easeOut" }}
              className="text-lg text-[#111143]/80 mb-8 leading-relaxed text-balance"
              style={{ fontFamily: "var(--font-montserrat)" }}
            >
              Palestras, workshops e consultoria especializada em{" "}
              <strong>economia empresarial</strong> e{" "}
              <strong>educação financeira pessoal</strong>. <br />
              <span className="text-[#040C8C] font-semibold">
                +20 anos de experiência
              </span>{" "}
              traduzindo conceitos complexos em aprendizados práticos e aplicáveis.
            </motion.p>

            <div className="flex flex-col sm:flex-row gap-4">
              <motion.button
                whileHover={{ scale: 1.05 }}
                className="bg-gradient-to-r from-[#040C8C] to-[#0A1EE0] text-white cursor-pointer px-8 py-3 rounded-full font-medium hover:opacity-90 transition-all flex items-center justify-center gap-2 shadow-md"
              >
                Agende uma conversa <ArrowRight size={18} />
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                className="border cursor-pointer border-[#111143] text-[#111143] px-8 py-3 rounded-full font-medium hover:bg-[#111143]/5 transition-colors"
              >
                Conhecer Serviços
              </motion.button>
            </div>
          </motion.div>

          {/* Imagem */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="relative h-[600px] rounded-2xl overflow-hidden border border-[#E5E7EB] shadow-sm"
          >
            <Image
              src="/images/perfil/_W1A0262.jpg"
              width={500}
              height={600}
              alt="Foto de perfil do economista"
              className="w-full h-full object-cover object-top"
              priority
            />
            {/* Overlay sutil para contraste */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
          </motion.div>

        </div>
      </div>
    </section>
  )
}
