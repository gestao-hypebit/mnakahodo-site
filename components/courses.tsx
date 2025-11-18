"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function CoursesHighlight() {
  return (
    <section className="py-16 px-6 lg:px-44 bg-[#111143]">
      <div className="max-w-7xl mx-auto text-center text-[#dad1c7]">

        {/* Tag */}
        <div className="inline-block mb-4 px-4 py-2 bg-[#dad1c7] rounded-full">
          <span className="text-[#111143] font-medium text-base">Cursos</span>
        </div>

        <h2
          className="text-3xl lg:text-5xl font-bold mb-4"
          style={{ fontFamily: "var(--font-campora)" }}
        >
          Aprendizado prático para transformar <span className="text-primary">sua vida financeira.</span>
        </h2>

        <p
          className="text-base lg:text-lg max-w-2xl mx-auto mb-10"
          style={{ fontFamily: "var(--font-montserrat)" }}
        >
         Aprofunde seus conhecimentos com cursos pensados para quem busca clareza, autonomia e resultados que você sente no dia-a-dia.
        </p>

        {/* Card do curso */}
        <div className="bg-[#dad1c7] text-[#111143] p-8 rounded-3xl max-w-xl mx-auto shadow-lg">
          <h3
            className="text-2xl font-bold mb-2"
            style={{ fontFamily: "var(--font-campora)" }}
          >
            <span className="text-[#111143]">Educação Financeira para você - Trilha de Aprendizado Completa</span>
          </h3>

          <p className="mb-6" style={{ fontFamily: "var(--font-montserrat)" }}>
            Organize suas finanças, tome decisões melhores e construa um futuro mais seguro.
          </p>

          <Link href="https://hotmart.com/pt-br/marketplace/produtos/educacao-financeira-para-voce-trilha-de-aprendizado-completa/X97030998G" target="_blank">
            <button className="bg-[#111143] cursor-pointer text-[#dad1c7] px-8 py-3 rounded-full font-bold flex items-center gap-2 mx-auto hover:opacity-80 transition">
              Ver curso
              <ArrowRight size={18} className="text-primary" />
            </button>
          </Link>
        </div>

      </div>
    </section>
  );
}
