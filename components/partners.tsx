"use client"

import Image from "next/image"
import { motion } from "framer-motion"

const partners = [
  { name: "USP", logo: "images/partners/unibanco.webp" },
  { name: "B3", logo: "images/partners/b3.png" },
  { name: "Datagro", logo: "images/partners/datagro.png" },
  { name: "MUFG", logo: "images/partners/mufg.png" },
  { name: "Honda", logo: "images/partners/honda.png" },
  { name: "Toyota", logo: "images/partners/toyota.png" },
  { name: "Kumon", logo: "images/partners/kumon.png" },
  { name: "Asics", logo: "images/partners/asics.png" },
]

export default function Partners() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-[#040C8C]/5 to-[#111143]/5">
      <div className="max-w-7xl mx-auto text-center">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mb-16"
        >
          <div className="inline-block mb-6 px-4 py-2 bg-[#040C8C]/10 rounded-full">
            <span
              style={{ fontFamily: "var(--font-urbanist)" }}
              className="text-lg text-[#040C8C] font-medium"
            >
              Parceiros
            </span>
          </div>
          <h2
            className="text-4xl md:text-5xl font-bold text-[#09080D] mb-4 text-balance"
            style={{ fontFamily: "var(--font-campora)" }}
          >
            Clientes e <span className="text-[#040C8C]">Parceiros</span>
          </h2>
          <p
            className="text-lg text-[#111143]/80 max-w-2xl mx-auto text-balance leading-relaxed"
            style={{ fontFamily: "var(--font-montserrat)" }}
          >
            Empresas, universidades e instituições que confiaram em nosso <strong className="text-[#040C8C]">trabalho</strong>
          </p>
        </motion.div>

        {/* Logo Wall */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-10 items-center justify-items-center">
          {partners.map((partner, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ delay: 0.1 * index, duration: 0.6, ease: "easeOut" }}
              className="flex items-center justify-center grayscale hover:grayscale-0 opacity-80 hover:opacity-100 transition-all duration-300"
            >
              <Image
                src={partner.logo}
                alt={partner.name}
                width={160}
                height={80}
                className="object-contain"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
