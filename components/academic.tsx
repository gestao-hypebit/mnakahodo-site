"use client"

import { ArrowRight } from "lucide-react"
import Image from "next/image"
import { motion } from "framer-motion"

export default function Academic() {
  return (
    <section className="pt-6 pb-6 lg:pt-32 lg:pb-20 px-4 sm:px-6 lg:px-8 bg-[#111143]">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-7 gap-16 items-center">
          <motion.div
            className="col-span-4 text-center lg:text-start"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="inline-block mb-6 px-4 py-2 bg-[#dad1c7] rounded-full">
              <span
                style={{ fontFamily: "var(--font-urbanist)" }}
                className="text-lg text-[#111143] font-medium"
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
              className="text-3xl lg:text-5xl font-bold text-[#dad1c7] mb-6 leading-tight text-balance"
              style={{ fontFamily: "var(--font-campora)" }}
            >
              Sólida formação em <span className="text-primary">Economia</span> com experiência internacional e professores renomados.
            </motion.h2>

            {/* Lista */}
            <motion.ul
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ delay: 0.4, duration: 0.8, ease: "easeOut" }}
              className="text-base lg:text-lg text-[#dad1c7] mb-8 text-start  leading-relaxed space-y-3 list-disc ml-5"
              style={{ fontFamily: "var(--font-montserrat)" }}
            >
              <li className=" gap-2 font-bold">
                {/* <span className="w-1.5 h-1.5 mt-2 bg-[#dad1c7] rounded-full flex-shrink-0"></span> */}
                Economista pela <strong>USP</strong> e Mestre pela <strong>UFRGS</strong> (conceito 6 CAPES).
              </li>
              <li className=" gap-2 font-bold">
                {/* <span className="w-1.5 h-1.5 mt-2 bg-[#dad1c7] rounded-full flex-shrink-0"></span> */}
                Mestre em Políticas Públicas pela <strong>Paris School of Economics</strong> — Top 5 mundial.
              </li>
              <li className=" gap-2 font-bold">
                {/* <span className="w-1.5 h-1.5 mt-2 bg-[#dad1c7] rounded-full flex-shrink-0"></span> */}
                Especialização em Economia Internacional pelo <strong>Kiel Institute for the World Economy</strong> (Alemanha).
              </li>
              <li className="gap-2 font-bold">
                {/* <span className="w-1.5 h-1.5 mt-2 bg-[#dad1c7] rounded-full flex-shrink-0"></span> */}
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
                 <motion.div
              whileHover={{ scale: 1.05 }}
              className=""
            >
              <button className="border  border-primary text-[#dad1c7] text-base lg:text-lg cursor-pointer px-8 py-3 rounded-full font-bold transition-all flex items-center justify-center gap-2 ">
               Conheça minha trajetória completa
                     <div className="rounded-full p-[0.1rem] border border-[#dad1c7]">
                  <ArrowRight className="text-primary" size={20} />
                </div>
              </button>
            </motion.div>
            </motion.div>
          </motion.div>

          <motion.div
            className="relative  rounded-2xl overflow-hidden  col-span-3 hidden lg:block"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <Image
              src="/images/img-academic.png"
              width={500}
              height={500}
              alt="Foto acadêmica"
              className="w-full h-full object-cover object-top"
              priority
            />
          </motion.div>
        </div>
      </div>
    </section>
  )
}
