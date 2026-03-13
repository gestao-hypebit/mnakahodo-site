"use client";
import {
  ArrowRight,
  BookOpen,
  CheckCircle,
  Handshake,
  TrendingUp,
  Users,
} from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";
import { AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

const services = [
  {
    icon: TrendingUp,
    title: "Workshops - 1x/semana durante 1 mês com abordagem 360º:",
    features: [
      "Economia comportamental",
      "Organização das finanças pessoais.",
      "Traçando metas/objetivos.",
    ],
  },
  {
    icon: Users,
    title: "Consultoria personalizada para funcionários das empresas.",
    features: ["Economia comportamental", "Organização das finanças pessoais."],
  },
  {
    icon: BookOpen,
    title:
      "Palestras de 1 a 2 horas sobre saúde financeira para funcionários de empresas.",
    features: [
      "Traçando metas/objetivos.",
      " Investimentos financeiros para concretizar os objetivos de vida.",
    ],
  },
  {
    icon: Handshake,
    title: " Workshops - 1x/semana durante 1 mês com abordagem 360º:",
    features: [
      "Organização das finanças pessoais.",
      "Traçando metas/objetivos.",
    ],
  },
];

export default function ParceriasPage() {
  const faqs = [
    {
      question: "“As palestras são presenciais ou online?”",
      answer:
        "As palestras podem ser realizadas de forma presencial ou online, conforme a necessidade e disponibilidade da empresa.",
    },
    {
      question: "“Vocês atendem empresas de fora de SP?”",
      answer:
        "Sim! Atendemos empresas em todo o Brasil e também no exterior, tanto de forma remota quanto presencial mediante agendamento.",
    },
    {
      question: "“É possível adaptar os temas?”",
      answer:
        "Claro. Os temas são totalmente personalizáveis de acordo com o público e os objetivos do evento.",
    },
  ];

  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index: any) => {
    setOpenIndex(openIndex === index ? null : index);
  };
  return (
    <main className="lg:pt-24 h-auto lg:min-h-screen bg-[#111143]">
      <section className=" px-4 sm:px-6 lg:px-8 bg-[#111143] lg:min-h-screen flex pb-10 lg:pb-0">
        <div className="max-w-7xl mx-auto w-full">
          <div className="grid md:grid-cols-2 gap-12 items-center h-full">
            <div className="flex flex-col items-center  lg:items-start h-full pt-32">
              <div className="inline-block mb-6 px-4 py-2 rounded-full border border-primary w-fit">
                <span
                  style={{ fontFamily: "var(--font-urbanist)" }}
                  className="text-lg text-[#dad1c8]"
                >
                  Parcerias que geram impacto
                </span>
              </div>

              <h1
                className="text-4xl lg:text-5xl font-bold text-[#dad1c8] mb-6 leading-tight text-center lg:text-start text-balance"
                style={{ fontFamily: "var(--font-campora)" }}
              >
                Conectando especialistas para{" "}
                <span className="text-primary font-bold">
                  ampliar o conhecimento financeiro.
                </span>
              </h1>

              <p
                className="text-base lg:text-lg text-[#dad1c8] mb-8 leading-relaxed text-center lg:text-start text-balance"
                style={{ fontFamily: "var(--font-montserrat)" }}
              >
                Trabalho em colaboração com especialistas de diferentes áreas para ampliar análises econômicas, enriquecer estratégias financeiras e entregar soluções mais completas para empresas, equipes e famílias.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link href={"https://wa.me/5511978847329"} target="_blank">
                  <button className="bg-[#dad1c8] text-[#111143] text-base lg:text-lg cursor-pointer px-8 py-3 rounded-full font-bold hover:opacity-90 transition-all flex items-center justify-center gap-2 shadow-md">
                    Entre em contato
                    <div className="rounded-full p-[0.1rem] border border-[#111143]">
                      <ArrowRight className="text-primary" size={20} />
                    </div>
                  </button>
                </Link>
              </div>
            </div>

            {/* Imagem */}
            <div className="hidden lg:flex items-center justify-center h-full ">
              <Image
                src="/images/logos/logo_icon.png"
                width={400}
                height={500}
                alt="Foto de perfil do economista"
                className="w-[400px] h-[450px] lg:w-[500px] lg:h-[500px] object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </section>
      <section className="bg-[#dad1c8] py-10 lg:py-20 px-6 sm:px-8">
        <div className="max-w-6xl mx-auto text-center">
          {/* Título */}
          <h2
            className="text-4xl md:text-5xl font-bold text-[#111143] mb-10"
            style={{ fontFamily: "var(--font-campora)" }}
          >
            Parcerias e Colaborações.
          </h2>
          {/* Linha decorativa */}
          <div className="w-full h-[1px] bg-[#e86a0c] mx-auto mb-16 hidden lg:block"></div>

          {/* Cards */}
          <div className="grid md:grid-cols-3 gap-6">
            {/* Card 1 */}
            <div className="bg-[#111143] text-[#dad1c8] rounded-[2rem] p-10 flex flex-col items-center text-center">
              <h3
                className="text-2xl font-semibold mb-4"
                style={{ fontFamily: "var(--font-campora)" }}
              >
                Marcelo Carvalho
              </h3>
              <p
                className="text-base leading-relaxed mb-6"
                style={{ fontFamily: "var(--font-montserrat)" }}
              >
                Economista-chefe global do banco BNP Paribas de 2022 a 2024, especialista em economia global.
                Parceria para palestras online sobre o cenário econômico global
                e brasileiro.
              </p>
              <a
                href="https://marcelocarvalhomacroeconomist.com/"
                target="_blank"
                className="text-[#e86a0c] font-semibold flex items-center gap-2"
                style={{ fontFamily: "var(--font-montserrat)" }}
              >
                Ver site <span>→</span>
              </a>
            </div>

            {/* Card 2 */}
            <div className="bg-[#111143] text-[#dad1c8] rounded-[2rem] p-10 flex flex-col items-center text-center">
              <h3
                className="text-2xl font-semibold mb-4"
                style={{ fontFamily: "var(--font-campora)" }}
              >
                Psicologia financeira
              </h3>
              <p
                className="text-base leading-relaxed"
                style={{ fontFamily: "var(--font-montserrat)" }}
              >
                Parcerias com especialistas em comportamento financeiro para
                abordar aspectos emocionais das decisões de investimento.
              </p>
            </div>

            {/* Card 3 */}
            <div className="bg-[#111143] text-[#dad1c8] rounded-[2rem] p-10 flex flex-col items-center text-center">
              <h3
                className="text-2xl font-semibold mb-4"
                style={{ fontFamily: "var(--font-campora)" }}
              >
                Consultoria contábil e jurídica
              </h3>
              <p
                className="text-base leading-relaxed"
                style={{ fontFamily: "var(--font-montserrat)" }}
              >
                Colaborações com contadores e advogados para tratar de
                planejamento tributário e sucessório.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#111143] py-10 lg:py-20 px-6 sm:px-8">
        <div className="max-w-6xl mx-auto text-center">
          {/* Selo superior */}
          <div className="inline-block mb-10 px-6 py-2 border border-[#e86a0c] rounded-full">
            <span
              className="text-[#dad1c8] text-base"
              style={{ fontFamily: "var(--font-urbanist)" }}
            >
              Expansão da rede
            </span>
          </div>

          {/* Título */}
          <h2
            className="text-4xl md:text-5xl font-bold text-[#dad1c8] mb-16"
            style={{ fontFamily: "var(--font-campora)" }}
          >
            Novas colaborações em desenvolvimento.
          </h2>

          {/* Cards */}
          <div className="grid md:grid-cols-3 gap-8">
            {/* Card 1 */}
            <div className="bg-[#dad1c8] text-[#111143] rounded-[2rem] p-10 flex flex-col items-center text-center">
              <h3
                className="text-2xl font-semibold mb-4 text-[#111143]"
                style={{ fontFamily: "var(--font-campora)" }}
              >
                Psicologia financeira
              </h3>
              <p
                className="text-base leading-relaxed"
                style={{ fontFamily: "var(--font-montserrat)" }}
              >
                Colaborações com psicólogos para abordar os aspectos emocionais
                e comportamentais das decisões financeiras.
              </p>
            </div>

            {/* Card 2 */}
            <div className="bg-[#dad1c8] text-[#111143] rounded-[2rem] p-10 flex flex-col items-center text-center">
              <h3
                className="text-2xl font-semibold mb-4 text-[#111143]"
                style={{ fontFamily: "var(--font-campora)" }}
              >
                Contabilidade e gestão tributária
              </h3>
              <p
                className="text-base leading-relaxed"
                style={{ fontFamily: "var(--font-montserrat)" }}
              >
                Parcerias com contadores para tratar de planejamento financeiro
                e eficiência fiscal para empresas e famílias.
              </p>
            </div>

            {/* Card 3 */}
            <div className="bg-[#dad1c8] text-[#111143] rounded-[2rem] p-10 flex flex-col items-center text-center">
              <h3
                className="text-2xl font-semibold mb-4 text-[#111143]"
                style={{ fontFamily: "var(--font-campora)" }}
              >
                Consultoria jurídica e sucessória
              </h3>
              <p
                className="text-base leading-relaxed"
                style={{ fontFamily: "var(--font-montserrat)" }}
              >
                Especialistas em direito financeiro e sucessório para temas de
                patrimônio e proteção familiar.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="relative lg:pt-8 pb-10 lg:pb-20 px-6 sm:px-8 bg-[#111143] overflow-hidden">
        <div className="max-w-6xl mx-auto text-center">
          <div className="flex justify-center">
            <h1 className="text-4xl lg:text-5xl font-bold text-[#dad1c8] max-w-4xl text-center">
              Seja um parceiro na construção de uma <span className="text-primary font-bold">educação financeira mais
              completa.</span>
            </h1>
          </div>

          <div className="flex justify-center my-8">
            <p className="text-[#dad1c8] text-base lg:text-lg max-w-3xl  text-center">
             Se você é um profissional que deseja colaborar em eventos, conteúdo ou 
consultoria, entre em contato conosco para avaliarmos sinergias.
            </p>
          </div>
          <div className="flex justify-center my-8">
            <Link href={"https://wa.me/5511978847329"} target="_blank">
              <button className=" text-[#dad1c8] border border-primary text-base lg:text-lg cursor-pointer px-8 py-2 rounded-full font-bold hover:opacity-90 transition-all flex items-center justify-center gap-2 shadow-md">
                Falar com a equipe
                <div className="rounded-full p-[0.1rem] border border-[#dad1c8]">
                  <ArrowRight className="text-primary" size={20} />
                </div>
              </button>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
