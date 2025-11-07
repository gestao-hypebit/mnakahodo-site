"use client"

import { Star, StarIcon } from "lucide-react"
import { motion } from "framer-motion"

const testimonials = [
  {
    name: "João Silva",
    role: "Diretor Executivo",
    company: "Empresa XYZ",
    text: "A palestra foi excelente! Conseguiu transformar conceitos complexos em aprendizados práticos que toda a equipe compreendeu.",
    rating: 5,
  },
  {
    name: "Maria Santos",
    role: "Gerente de RH",
    company: "Banco ABC",
    text: "O workshop de educação financeira foi um sucesso. Os colaboradores saíram com ferramentas reais para melhorar sua saúde financeira.",
    rating: 5,
  },
  {
    name: "Carlos Oliveira",
    role: "CFO",
    company: "Tech Solutions",
    text: "Profissional altamente qualificado. A consultoria agregou muito valor ao nosso planejamento estratégico.",
    rating: 5,
  },
]

export default function Testimonials() {
  return (
    <section className="lg:py-20 py-6 px-4 sm:px-6 lg:px-8 bg-[#111143]">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div
          className="lg:mb-16 mb-6 text-center"
         
        >
          <div className="inline-block mb-6 px-4 py-2 bg-[#dad1c7] rounded-full">
            <span
              style={{ fontFamily: "var(--font-urbanist)" }}
              className="text-lg text-[#111143] font-medium"
            >
              Depoimentos
            </span>
          </div>
          <h2
            className="text-3xl lg:text-5xl font-bold text-[#dad1c7] mb-4 text-balance"
            style={{ fontFamily: "var(--font-campora)" }}
          >
            O que dizem sobre <span className="text-primary">nosso trabalho.</span>
          </h2>
          <p
            className="text-base lg:text-lg text-[#dad1c7] max-w-2xl mx-auto text-balance leading-relaxed"
            style={{ fontFamily: "var(--font-montserrat)" }}
          >
            Depoimentos de <strong>clientes satisfeitos</strong>
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="p-8 rounded-2xl   bg-[#dad1c7] transition-all duration-300"
        
            >
              {/* Rating */}
              <div className="flex justify-center gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <StarIcon key={i} size={32} className="fill-[#111143] text-[#111143]" />
                ))}
              </div>

              {/* Testimonial Text */}
              <p
                className="text-[#111143] mb-6 leading-relaxed italic text-center"
                style={{ fontFamily: "var(--font-montserrat)" }}
              >
                "{testimonial.text}"
              </p>

              {/* Author */}
              <div>
                <p
                  className=" text-[#111143] text-center"
                  style={{ fontFamily: "var(--font-campora)" }}
                >
                  <span className="font-bold">{testimonial.name}</span> {testimonial.role}
                </p>
                <p className="text-sm font-bold text-[#111143] text-center">{testimonial.company}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
