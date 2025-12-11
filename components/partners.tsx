"use client"

import Image from "next/image"
import { motion } from "framer-motion"

const partners = [
  { name: "USP", logo: "images/partners/unibanco.webp", width: 160 },
  { name: "B3", logo: "images/partners/b3.png", width: 160 },
  { name: "Datagro", logo: "images/partners/datagro.png", width: 160 },
  { name: "MUFG", logo: "images/partners/mufg.png", width: 160 },
  { name: "Honda", logo: "images/partners/honda.png", width: 160 },
  { name: "Toyota", logo: "images/partners/toyota.png", width: 160 },
  { name: "Kumon", logo: "images/partners/kumon.png", width: 160 },
  { name: "Asics", logo: "images/partners/asics.png", width: 160 },
  { name: "vezzilapolla", logo: "images/partners/vezzilapolla.png", width: 250   },
]

export default function Partners() {
  return (
    <section className="py-6 lg:py-20 px-4  lg:px-8 bg-[#dad1c7]">
      <div className="max-w-7xl mx-auto text-center">
        {/* Header */}
        <div
       
          className="mb-8 lg:mb-16"
        >
          <div className="inline-block mb-6 px-4 py-2 bg-[#111143] rounded-full">
            <span
              style={{ fontFamily: "var(--font-urbanist)" }}
              className="text-lg text-[#dad1c7] font-medium"
            >
              Parceiros
            </span>
          </div>
          <h2
            className="text-3xl lg:text-5xl font-bold text-[#111143] mb-4 text-balance"
            style={{ fontFamily: "var(--font-campora)" }}
          >
            Clientes e <span className="text-primary">Parceiros</span>
          </h2>
          <p
            className="text-base lg:text-lg text-[#111143] max-w-2xl mx-auto text-balance leading-relaxed"
            style={{ fontFamily: "var(--font-montserrat)" }}
          >
            Empresas, universidades e instituições que <strong>confiaram em nosso trabalho.</strong>
          </p>
        </div>

        {/* Logo Wall */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-10 items-center justify-items-center">
          {partners.map((partner, index) => (
            <div
              key={index}
           
              className="flex items-center justify-center grayscale hover:grayscale-0 opacity-80 hover:opacity-100 transition-all duration-300"
            >
              <Image
                src={partner.logo}
                alt={partner.name}
                width={partner.width}
                height={80}
                className="object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
