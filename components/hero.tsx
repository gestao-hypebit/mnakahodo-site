"use client";

import { ArrowRight } from "lucide-react";
import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="pt-32 px-4 sm:px-6 lg:px-8 bg-[#111143] min-h-screen flex">
      <div className="max-w-7xl mx-auto w-full">
        <div className="grid md:grid-cols-2 gap-12 items-center h-full">
          <div className="flex flex-col justify-center items-center lg:items-start h-full">
            <div className="inline-block mb-6 px-4 py-2 rounded-full border border-primary w-fit">
              <span
                style={{ fontFamily: "var(--font-urbanist)" }}
                className="text-lg text-[#dad1c8]"
              >
                Consultoria em Economia e Finanças
              </span>
            </div>

            <h1
              className="text-3xl lg:text-5xl font-bold text-[#dad1c8] mb-6 leading-tight text-center lg:text-start text-balance"
              style={{ fontFamily: "var(--font-campora)" }}
            >
              Transforme <span>decisões financeiras</span> em{" "}
              <span className="text-primary">resultados.</span>
            </h1>

            <p
              className="text-base lg:text-lg text-[#dad1c8] mb-8 leading-relaxed text-center lg:text-start text-balance"
              style={{ fontFamily: "var(--font-montserrat)" }}
            >
              Palestras, workshops e consultoria especializada em economia
              empresarial e educação financeira pessoal. <br />
              <span className="font-bold">
                +20 anos de experiência traduzindo conceitos complexos em
                aprendizados práticos e aplicáveis.
              </span>
            </p>

            <div className="flex flex-col sm:flex-row gap-4 ">
             <Link className="lg:block flex justify-center" href={"https://wa.me/5511999024090"} target="_blank">
              <button className="bg-[#dad1c8] w-full lg:w-auto text-[#111143] text-base lg:text-lg cursor-pointer px-8 py-3 rounded-full font-bold hover:opacity-90 transition-all flex items-center justify-center gap-2 shadow-md">
                Agende uma conversa
                <div className="rounded-full p-[0.1rem] border border-[#111143]">
                  <ArrowRight className="text-primary" size={20} />
                </div>
              </button>
             </Link>
              <Link className="lg:block flex justify-center lg:w-auto w-full" href={"/servicos"}>
                <button className="w-full lg:w-auto border cursor-pointer text-base lg:text-lg border-[#dad1c8] text-[#dad1c8] px-8 py-3 rounded-full font-bold hover:bg-[#111143]/5 transition-colors">
                  Conhecer Serviços
                </button>
              </Link>
            </div>
          </div>

          {/* Imagem */}
          <div className="flex items-end justify-center h-full">
            <Image
              src="/images/img_hero.png"
              width={400}
              height={500}
              alt="Foto de perfil do economista"
              className="w-[400px] h-[450px] lg:w-[500px] lg:h-[600px] object-cover"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}
