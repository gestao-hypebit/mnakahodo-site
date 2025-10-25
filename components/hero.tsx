"use client"

import { ArrowRight } from "lucide-react"
import Image from "next/image"
import { motion } from "framer-motion"

export default function Hero() {
  return (
    <section className="pt-32 px-4 sm:px-6 lg:px-8 bg-[#111143] min-h-screen flex ">
      <div className="max-w-7xl mx-auto w-full">
        <div className="grid md:grid-cols-2 gap-12 items-center h-full">
          
          {/* Coluna de texto */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex flex-col justify-center h-full"
          >
            <div className="inline-block mb-6 px-4 py-2 rounded-full border border-primary w-fit">
              <span
                style={{ fontFamily: "var(--font-urbanist)" }}
                className="text-lg text-[#dad1c8]"
              >
                Consultoria em Economia e Finanças
              </span>
            </div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ delay: 0.2, duration: 0.8, ease: "easeOut" }}
              className="text-5xl font-bold text-[#dad1c8] mb-6 leading-tight text-balance"
              style={{ fontFamily: "var(--font-campora)" }}
            >
              Transforme <span>decisões financeiras</span> em{" "}
              <span className="text-primary">resultados.</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ delay: 0.4, duration: 0.8, ease: "easeOut" }}
              className="text-lg text-[#dad1c8] mb-8 leading-relaxed text-balance"
              style={{ fontFamily: "var(--font-montserrat)" }}
            >
              Palestras, workshops e consultoria especializada em{" "}
              economia empresarial e{" "}
              educação financeira pessoal. <br />
              <span className="font-bold">
                +20 anos de experiência traduzindo conceitos complexos em aprendizados práticos e aplicáveis.
              </span>
            </motion.p>

            <div className="flex flex-col sm:flex-row gap-4">
              <motion.button
                whileHover={{ scale: 1.05 }}
                className="bg-[#dad1c8] text-[#111143] cursor-pointer px-8 py-3 rounded-full font-medium hover:opacity-90 transition-all flex items-center justify-center gap-2 shadow-md"
              >
                Agende uma conversa 
                <div className="rounded-full p-[0.1rem] border border-[#111143]">
                  <ArrowRight className="text-primary" size={20} />
                </div>
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                className="border cursor-pointer border-[#dad1c8] text-[#dad1c8] px-8 py-3 rounded-full font-medium hover:bg-[#111143]/5 transition-colors"
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
            className="flex items-end justify-center h-full"
          >
            <Image
              src="/images/img_hero.png"
              width={400}
              height={500}
              alt="Foto de perfil do economista"
              className="w-[500px] h-[600px] object-cover"
              priority
            />
          </motion.div>

        </div>
      </div>
    </section>
  )
}
