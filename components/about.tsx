"use client"

import { ArrowRight } from "lucide-react"
import Image from "next/image"
import { motion } from "framer-motion"

export default function About() {
  return (
    <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-44 bg-gradient-to-b from-[#040C8C]/5 to-[#111143]/5 relative overflow-hidden">
      {/* Ícone decorativo no canto */}
      <div className="absolute right-24 top-16 ">
        <Image
          src="/images/logos/logo_icon_blue.png"
          alt="Ícone decorativo da marca"
          width={150}
          height={150}
        />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid md:grid-cols-2 gap-20 items-center">
          
          {/* Imagem com overlay leve */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="relative h-[500px] rounded-2xl overflow-hidden border border-[#E5E7EB] shadow-sm"
          >
            <Image
              src="/images/perfil/_W1A0280.jpg"
              width={500}
              height={500}
              alt="Foto de Mauricio Nakahodo"
              className="w-full h-full object-cover object-top"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/15 via-transparent to-transparent" />
          </motion.div>

          {/* Conteúdo textual */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="inline-block mb-6 px-4 py-2 bg-[#040C8C]/10 rounded-full">
              <span
                style={{ fontFamily: "var(--font-urbanist)" }}
                className="text-lg text-[#040C8C] font-medium tracking-wide"
              >
                Sobre mim
              </span>
            </div>

            <h1
              className="text-5xl md:text-6xl font-bold text-[#0A0A0A] mb-6 leading-tight text-balance"
              style={{ fontFamily: "var(--font-campora)" }}
            >
              Mauricio <span className="text-[#040C8C]">Nakahodo</span>
            </h1>

            <p
              className="text-lg text-[#111143]/80 mb-8 leading-relaxed text-justify"
              style={{ fontFamily: "var(--font-montserrat)" }}
            >
              Economista com{" "}
              <span className="font-semibold text-[#040C8C]">mais de 20 anos de experiência</span>{" "}
              em pesquisa econômica aplicada. Atuou em{" "}
              <strong>instituições financeiras</strong> e{" "}
              <strong>centros de pesquisa</strong> no Brasil e no exterior,
              com foco em análise macroeconômica, políticas públicas e
              educação financeira.
            </p>

            <motion.div
              whileHover={{ scale: 1.05 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <button className="bg-gradient-to-r from-[#040C8C] to-[#0A1EE0] text-white cursor-pointer px-8 py-3 rounded-full font-medium transition-all flex items-center justify-center gap-2 shadow-md">
                Saiba mais <ArrowRight size={18} />
              </button>
            </motion.div>
          </motion.div>

        </div>
      </div>
    </section>
  )
}
