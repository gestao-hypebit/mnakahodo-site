"use client"

import { Star } from "lucide-react"
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
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-[#fefffa]">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          className="mb-16 text-center"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className="inline-block mb-6 px-4 py-2 bg-[#040C8C]/10 rounded-full">
            <span
              style={{ fontFamily: "var(--font-urbanist)" }}
              className="text-lg text-[#040C8C] font-medium"
            >
              Depoimentos
            </span>
          </div>
          <h2
            className="text-4xl md:text-5xl font-bold text-[#09080D] mb-4 text-balance"
            style={{ fontFamily: "var(--font-campora)" }}
          >
            O que dizem sobre <span className="text-[#040C8C]">nosso trabalho</span>
          </h2>
          <p
            className="text-lg text-[#111143]/80 max-w-2xl mx-auto text-balance leading-relaxed"
            style={{ fontFamily: "var(--font-montserrat)" }}
          >
            Depoimentos de clientes <strong className="text-[#040C8C]">satisfeitos</strong>
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              className="p-8 rounded-xl border border-[#DAD1C8] bg-white hover:border-[#040C8C]/40 shadow-sm hover:shadow-md transition-all duration-300"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ delay: 0.1 * index, duration: 0.6, ease: "easeOut" }}
            >
              {/* Rating */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} size={16} className="fill-[#040C8C] text-[#040C8C]" />
                ))}
              </div>

              {/* Testimonial Text */}
              <p
                className="text-[#111143]/80 mb-6 leading-relaxed italic"
                style={{ fontFamily: "var(--font-montserrat)" }}
              >
                "{testimonial.text}"
              </p>

              {/* Author */}
              <div>
                <p
                  className="font-bold text-[#09080D]"
                  style={{ fontFamily: "var(--font-campora)" }}
                >
                  {testimonial.name}
                </p>
                <p className="text-sm text-[#111143]/60">{testimonial.role}</p>
                <p className="text-sm text-[#111143]/50">{testimonial.company}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
