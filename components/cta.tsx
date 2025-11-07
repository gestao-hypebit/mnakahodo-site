"use client"

import { ArrowRight, Mail, Phone } from "lucide-react"
import { motion } from "framer-motion"

export default function CTA() {
  return (
    <section className="py-6 lg:py-20 px-4  lg:px-8 bg-[#dad1c7]">
      <div className="lg:max-w-4xl mx-auto text-center">
        <h2
          className="text-3xl lg:text-5xl font-bold text-primary mb-6 text-balance"
          style={{ fontFamily: "var(--font-campora)" }}
 
        >
          Pronto para transformar sua empresa?
        </h2>

        <p
          style={{ fontFamily: "var(--font-montserrat)" }}
          className="text-base lg:text-lg text-[#111143] mb-8 leading-relaxed text-balance"
 
      
        >
          Entre em contato conosco para solicitar uma palestra, workshop ou consultoria especializada.
        </p>

        <div
          className="flex flex-col sm:flex-row gap-4 justify-center mb-12"
          
        >
         <div
              className="flex flex-col sm:flex-row gap-4"
            >
              <button className="bg-[#111143] text-base lg:text-lg font-bold text-[#dad1c7] cursor-pointer px-8 py-3 rounded-full  transition-all flex items-center justify-center gap-2 ">
               Me chame para palestrar
                     <div className="rounded-full p-[0.1rem] border border-[#dad1c7]">
                  <ArrowRight className="text-primary" size={20} />
                </div>
              </button>
            </div>
          <button
            className="border-2 border-[#111143] cursor-pointer text-[#111143] px-8 py-3 rounded-full font-medium  transition-colors"
          >
            Solicitar Consultoria
          </button>
        </div>

        {/* Contato */}
        <div
          className="grid sm:grid-cols-2 gap-8 pt-8 border-t border-[#111143] "
         
        >
          <div className="flex items-center lg:justify-center gap-3">
            <Mail className="text-primary" size={32} />
            <div className="text-left">
              <p className="text-sm text-[#111143]">Email</p>
              <p className="text-[#111143] font-bold">mauricio.nakahodo@gmail.com</p>
            </div>
          </div>
          <div className="flex items-center lg:justify-center gap-3">
            <Phone className="text-primary" size={32} />
            <div className="text-left">
              <p className="text-sm text-[#111143]">Telefone</p>
              <p className="text-[#111143] font-bold">(11) 99902-4090</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
