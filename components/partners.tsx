"use client"

import Image from "next/image"

const partners = [
  { name: "USP", logo: "images/partners/usp.png" },
  { name: "USP", logo: "images/partners/usp.png" },
  { name: "USP", logo: "images/partners/usp.png" },
  { name: "USP", logo: "images/partners/usp.png" },
  { name: "USP", logo: "images/partners/usp.png" },
  { name: "USP", logo: "images/partners/usp.png" },
  { name: "USP", logo: "images/partners/usp.png" },
  { name: "USP", logo: "images/partners/usp.png" },
]

export default function Partners() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-[#040C8C]/5 to-[#111143]/5">
      <div className="max-w-7xl mx-auto text-center">
        {/* Título */}
        <div className="mb-16">
             <div className="inline-block mb-6 px-4 py-2 bg-[#E86A0C]/10 rounded-full">
              <span  style={{ fontFamily: "var(--font-urbanist)" }} className="text-lg text-[#E86A0C] font-medium">
                Parceiros
              </span>
            </div>
          <h2 className="text-4xl md:text-5xl font-bold text-[#09080D] mb-4 text-balance">
            Clientes e Parceiros
          </h2>
          <p className="text-lg text-[#111143]/60 max-w-2xl mx-auto text-balance">
            Empresas, universidades e instituições que confiaram em nosso trabalho
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
                width={160}
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
