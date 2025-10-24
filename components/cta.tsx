"use client"

import { ArrowRight, Mail, Phone } from "lucide-react"
import { motion } from "framer-motion"

export default function CTA() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-[#111143]">
      <div className="max-w-4xl mx-auto text-center">
        {/* Título */}
        <motion.h2
          className="text-4xl md:text-5xl font-bold text-primary-foreground mb-6 text-balance"
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
          className="text-lg text-primary-foreground/90 mb-8 leading-relaxed text-balance"
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
          <motion.button
            whileHover={{ scale: 1.05 }}
            className="bg-primary-foreground cursor-pointer text-[#040C8C] px-8 py-3 rounded-full font-medium hover:bg-primary-foreground/90 transition-colors flex items-center justify-center gap-2"
          >
            Me chame para palestrar <ArrowRight size={18} />
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.05 }}
            className="border-2 border-primary-foreground cursor-pointer text-primary-foreground px-8 py-3 rounded-full font-medium hover:bg-primary-foreground/10 transition-colors"
          >
            Solicitar Consultoria
          </motion.button>
        </motion.div>

        {/* Contato */}
        <motion.div
          className="grid sm:grid-cols-2 gap-8 pt-8 border-t border-primary-foreground/20"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ delay: 0.6, duration: 0.8, ease: "easeOut" }}
        >
          <div className="flex items-center justify-center gap-3">
            <Mail className="text-primary-foreground" size={20} />
            <div className="text-left">
              <p className="text-sm text-primary-foreground/70">Email</p>
              <p className="text-primary-foreground font-medium">mauricio.nakahodo@gmail.com</p>
            </div>
          </div>
          <div className="flex items-center justify-center gap-3">
            <Phone className="text-primary-foreground" size={20} />
            <div className="text-left">
              <p className="text-sm text-primary-foreground/70">Telefone</p>
              <p className="text-primary-foreground font-medium">(11) 99902-4090</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
