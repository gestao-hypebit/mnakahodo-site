"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function LecturesHighlight() {
  return (
    <section className="py-16 px-6 lg:px-44 bg-[#dad1c7]">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">

        {/* Texto */}
        <div>
          <div className="inline-block mb-4 px-4 py-2 bg-[#111143] rounded-full">
            <span className="text-[#dad1c7] font-medium text-base">
              Palestras
            </span>
          </div>

          <h2
            className="text-3xl lg:text-5xl font-bold text-[#111143] mb-4"
            style={{ fontFamily: "var(--font-campora)" }}
          >
            Transformando conhecimento em <span className="text-primary">experiências únicas.</span>
          </h2>

          <p
            className="text-[#111143] leading-relaxed mb-6"
            style={{ fontFamily: "var(--font-montserrat)" }}
          >
            Palestras dinâmicas, interativas e com forte embasamento econômico,
            ajudando equipes e instituições a repensarem decisões e planejarem o futuro.
          </p>

          <ul className="text-[#111143] space-y-2 mb-8">
            <li>• Cenário político-econômico</li>
            <li>• Educação financeira aplicada</li>
            <li>• Tomada de decisão e economia comportamental</li>
          </ul>

          <Link href="/palestras">
            <button className="border border-[#111143] text-[#111143] px-8 py-3 rounded-full font-bold flex items-center gap-2 hover:opacity-75 transition">
              Ver palestras
              <ArrowRight size={20} className="text-primary" />
            </button>
          </Link>
        </div>

        {/* Imagem */}
        <div className="hidden md:block">
          <Image
            src="/images/palestra.jpg"
            width={500}
            height={500}
            alt="Palestras"
            className="rounded-3xl object-cover"
          />
        </div>

      </div>
    </section>
  );
}
