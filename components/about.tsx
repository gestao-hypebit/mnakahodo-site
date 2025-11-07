"use client"

import { ArrowRight } from "lucide-react"
import Image from "next/image"
import { motion } from "framer-motion"

export default function About() {
  return (
    <section className="lg:pt-32 lg:pb-20 pt-4 pb-4 px-4 sm:px-6 lg:px-44 bg-[#dad1c7] relative overflow-hidden">
      {/* Ícone decorativo no canto */}
      {/* <div className="absolute right-24 top-16 ">
        <Image
          src="/images/logos/logo_icon_blue.png"
          alt="Ícone decorativo da marca"
          width={150}
          height={150}
        />
      </div> */}

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid md:grid-cols-2 gap-20 items-center">
          
          <div
           
            className="hidden lg:block"
          >
            <Image
              src="/images/img_about.png"
              width={500}
              height={500}
              alt="Foto de Mauricio Nakahodo"
              className="w-full h-full object-cover object-top"
              priority
            />
          </div>

          <div
            
            className=" flex flex-col items-center lg:block"
          >
            <div className="inline-block mb-6 px-4 py-2 bg-[#111143] rounded-full">
              <span
                style={{ fontFamily: "var(--font-urbanist)" }}
                className="text-lg text-[#dad1c7] font-medium tracking-wide"
              >
                Sobre mim
              </span>
            </div>

            <h1
              className="text-3xl lg:text-5xl font-bold text-[#111143] mb-3 lg:mb-6 leading-tight text-center lg:text-start text-balance"
              style={{ fontFamily: "var(--font-campora)" }}
            >
              Mauricio Nakahodo
            </h1>

            <p
              className="text-base lg:text-lg text-[#111143] mb-8 leading-relaxed text-center lg:text-justify"
              style={{ fontFamily: "var(--font-montserrat)" }}
            >
              Economista com{" "}
              <span className="font-bold">mais de 20 anos de experiência</span>{" "}
              em pesquisa econômica aplicada. Atuou em{" "}
              instituições financeiras e{" "}
              centros de pesquisa no Brasil e no exterior,
              com <span className="font-bold">foco em análise macroeconômica, políticas públicas e
              educação financeira.</span>
            </p>

           <div className="flex flex-col lg:flex-row justify-between items-center">
           <div
              className="flex flex-col sm:flex-row gap-4"
            >
              <button className="border  border-[#111143] text-base lg:text-lg font-bold text-[#111143] cursor-pointer px-8 py-3 rounded-full  transition-all flex items-center justify-center gap-2 ">
                Saiba mais 
                     <div className="rounded-full p-[0.1rem] border border-[#111143]">
                  <ArrowRight className="text-primary" size={20} />
                </div>
              </button>
            </div>
            <div>
                       <Image
              src="/images/logos/logo-icon-blue.png"
              width={110}
              height={110}
              alt="Logo icone"
              className=""
              priority
            />
            </div>
           </div>
          </div>

        </div>
      </div>
    </section>
  )
}
