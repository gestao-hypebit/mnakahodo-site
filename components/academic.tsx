"use client"

import { ArrowRight } from "lucide-react"
import Image from "next/image"
import { motion } from "framer-motion"

export default function Academic() {
  return (
    <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 bg-[#fefffa]">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-7 gap-16 items-center">
          {/* Coluna de texto */}
          <motion.div
            className="col-span-4"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
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
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ delay: 0.2, duration: 0.8, ease: "easeOut" }}
              className="text-5xl md:text-5xl font-bold text-[#09080D] mb-6 leading-tight text-balance"
              style={{ fontFamily: "var(--font-campora)" }}
            >
              Sólida formação em <span className="text-[#040C8C]">Economia</span> com experiência internacional e professores renomados.
            </motion.h2>

            {/* Lista */}
            <motion.ul
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ delay: 0.4, duration: 0.8, ease: "easeOut" }}
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
            </motion.ul>

            {/* Botão */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ delay: 0.6, duration: 0.8, ease: "easeOut" }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <motion.button
                whileHover={{ scale: 1.05 }}
                className="bg-gradient-to-r from-[#040C8C] to-[#0A1EE0] text-white cursor-pointer px-8 py-3 rounded-full font-medium transition-all flex items-center justify-center gap-2 shadow-md"
              >
                Conheça minha trajetória completa <ArrowRight size={18} />
              </motion.button>
            </motion.div>
          </motion.div>

          {/* Coluna da imagem */}
          <motion.div
            className="relative h-[500px] rounded-2xl overflow-hidden border border-[#E5E7EB] col-span-3 shadow-sm"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
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
          </motion.div>
        </div>
      </div>
    </section>
  )
}
