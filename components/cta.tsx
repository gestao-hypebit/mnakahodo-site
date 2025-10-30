"use client"

import { ArrowRight, Mail, Phone } from "lucide-react"
import { motion } from "framer-motion"

export default function CTA() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-[#dad1c7]">
      <div className="max-w-4xl mx-auto text-center">
        {/* Título */}
        <motion.h2
          className="text-4xl md:text-5xl font-bold text-primary mb-6 text-balance"
          style={{ fontFamily: "var(--font-campora)" }}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          Pronto para transformar sua empresa?
        </motion.h2>

        {/* Parágrafo */}
        <motion.p
          style={{ fontFamily: "var(--font-montserrat)" }}
          className="text-lg text-[#111143] mb-8 leading-relaxed text-balance"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ delay: 0.2, duration: 0.8, ease: "easeOut" }}
        >
          Entre em contato conosco para solicitar uma palestra, workshop ou consultoria especializada.
        </motion.p>

        {/* Botões */}
        <motion.div
          className="flex flex-col sm:flex-row gap-4 justify-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ delay: 0.4, duration: 0.8, ease: "easeOut" }}
        >
         <motion.div
              whileHover={{ scale: 1.05 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <button className="bg-[#111143] text-lg font-bold text-[#dad1c7] cursor-pointer px-8 py-3 rounded-full  transition-all flex items-center justify-center gap-2 ">
               Me chame para palestrar
                     <div className="rounded-full p-[0.1rem] border border-[#dad1c7]">
                  <ArrowRight className="text-primary" size={20} />
                </div>
              </button>
            </motion.div>
          <motion.button
            whileHover={{ scale: 1.05 }}
            className="border-2 border-[#111143] cursor-pointer text-[#111143] px-8 py-3 rounded-full font-medium  transition-colors"
          >
            Solicitar Consultoria
          </motion.button>
        </motion.div>

        {/* Contato */}
        <motion.div
          className="grid sm:grid-cols-2 gap-8 pt-8 border-t border-[#111143]"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ delay: 0.6, duration: 0.8, ease: "easeOut" }}
        >
          <div className="flex items-center justify-center gap-3">
            <Mail className="text-primary" size={32} />
            <div className="text-left">
              <p className="text-sm text-[#111143]">Email</p>
              <p className="text-[#111143] font-bold">mauricio.nakahodo@gmail.com</p>
            </div>
          </div>
          <div className="flex items-center justify-center gap-3">
            <Phone className="text-primary" size={32} />
            <div className="text-left">
              <p className="text-sm text-[#111143]">Telefone</p>
              <p className="text-[#111143] font-bold">(11) 99902-4090</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
