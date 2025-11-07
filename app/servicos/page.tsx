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

export default function ServicosPage() {
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
    <main className="pt-24 min-h-screen bg-[#111143]">
      <section className=" px-4 sm:px-6 lg:px-8 bg-[#111143] min-h-screen flex">
        <div className="max-w-7xl mx-auto w-full">
          <div className="grid md:grid-cols-2 gap-12 items-center h-full">
            <div
           
              className="flex flex-col  lg:items-start h-full pt-32"
            >
              <div className="inline-block mb-6 px-4 py-2 rounded-full border border-primary w-fit">
                <span
                  style={{ fontFamily: "var(--font-urbanist)" }}
                  className="text-lg text-[#dad1c8]"
                >
                  Nossos serviços
                </span>
              </div>

              <h1
             
                className="text-3xl lg:text-5xl font-bold text-[#dad1c8] mb-6 leading-tight text-center lg:text-start text-balance"
                style={{ fontFamily: "var(--font-campora)" }}
              >
                Soluções personalizadas em{" "}
                <span className="text-primary font-bold">
                  Economia e Finanças.
                </span>
              </h1>

              <p
                className="text-base lg:text-lg text-[#dad1c8] mb-8 leading-relaxed text-center lg:text-start text-balance"
                style={{ fontFamily: "var(--font-montserrat)" }}
              >
                Palestras, consultorias e treinamentos que{" "}
                <span className="font-bold">
                  transformam conhecimento econômico em resultados estratégicos.
                </span>
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <button
                  className="bg-[#dad1c8] text-[#111143] text-base lg:text-lg cursor-pointer px-8 py-3 rounded-full font-bold hover:opacity-90 transition-all flex items-center justify-center gap-2 shadow-md"
                >
                  Solicitar Proposta
                  <div className="rounded-full p-[0.1rem] border border-[#111143]">
                    <ArrowRight className="text-primary" size={20} />
                  </div>
                </button>
                <button
                  className="border cursor-pointer text-base lg:text-lg border-primary text-[#dad1c8] px-8 py-3 rounded-full font-bold hover:bg-[#111143]/5 transition-colors"
                >
                  Agendar uma Reunião
                </button>
              </div>
            </div>

            {/* Imagem */}
            <div
              className="flex items-center justify-center h-full "
            >
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
      <section className="relative lg:py-24 py-6 px-6 sm:px-8 bg-[#dad1c7] overflow-hidden">
        <div className="max-w-7xl mx-auto relative z-10  text-center lg:text-center">
          <div
           
            className="mb-6 lg:mb-16"
          >
            <div className="inline-block mb-12 px-4 py-2  rounded-full border border-primary">
              <span
                style={{ fontFamily: "var(--font-urbanist)" }}
                className="text-lg text-[#111143] "
              >
                Finanças Pessoais
              </span>
            </div>

            <div className="grid md:grid-cols-2 gap-4 lg:gap-10">
              {services.map((service, index) => {
                return (
                  <div
                    key={index}
                    className="group p-5 lg:p-8 rounded-4xl border border-[#E5E7EB] bg-[#111143] hover:shadow-xl hover:scale-[1.02] transition-all duration-300"
                  >
                    <div className="flex lg:gap-x-4">
                      <div>
                        <h3
                          className="text-3xl lg:text-3xl font-bold text-primary mb-3 text-start"
                          style={{ fontFamily: "var(--font-campora)" }}
                        >
                          {service.title}
                        </h3>
                      </div>
                    </div>

                    <ul className="space-y-2 mt-6">
                      {service.features.map((feature, i) => (
                        <li
                          key={i}
                          className="text-base text-start lg:text-lg text-[#dad1c7] flex items-center gap-2 font-bold"
                          style={{ fontFamily: "var(--font-montserrat)" }}
                        >
                          <span className="w-1.5 h-1.5 bg-[#dad1c7] rounded-full" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-8"></div>
        </div>
      </section>
      <section className="relative lg:py-24 py-6 px-6 sm:px-8 bg-[#111143] overflow-hidden">
        <div className="max-w-7xl mx-auto relative z-10  text-center lg:text-center">
          <div
            className="mb-6 lg:mb-16"
          >
            <div className="inline-block mb-24 px-10 py-2  rounded-full border border-primary">
              <span
                style={{ fontFamily: "var(--font-urbanist)" }}
                className="text-lg text-[#dad1c7] "
              >
                Economia
              </span>
            </div>

          
            <div className="grid md:grid-cols-2 gap-4 lg:gap-10 relative">
  {/* Coluna esquerda */}
  <div className="pr-8 border-r border-[#e86a0c]">
    <h1 className="text-primary font-bold text-3xl text-start">
      Consultoria econômica para empresas e outras instituições:
    </h1>
     <ul className="list-disc pl-6 mt-6 space-y-4 text-[#dad1c7] text-xl  text-start">
    <li>
      Estudos sob demanda sobre o impacto do cenário político-econômico sobre o setor de atuação da empresa.
    </li>
    <li>
      Análise das perspectivas econômicas e setoriais.
    </li>
  </ul>

    <h1 className="text-primary font-bold text-3xl text-start mt-12">
      Palestras para empresas e outras instituições:
    </h1>
    <ul className="list-disc pl-6 mt-6 space-y-3 text-[#dad1c7] text-xl  text-start">
    <li>Cenário político-econômico no Brasil.</li>
    <li>Cenário político-econômico na América Latina.</li>
    <li>Cenário econômico global.</li>
  </ul>
  </div>

  {/* Coluna direita */}
  <div className="pl-8">
    <h1 className="text-[#dad1c7] font-bold text-3xl text-start mb-8">
      Atendimento presencial - reuniões regulares.
    </h1>
    <h1 className="text-[#dad1c7] font-bold text-3xl text-start mb-8">
      Atendimento online para empresas de qualquer região do Brasil.
    </h1>
    <h1 className="text-[#dad1c7] font-bold text-3xl text-start">
      Mini Cursos de curta duração presenciais e online sobre temas econômicos específicos.
    </h1>
    <div className="flex justify-center mt-12">
      <Image
        src="/images/logos/logo_icon.png"
        width={250}
        height={250}
        alt="Logo"
        className="object-cover"
      />
    </div>
  </div>
</div>

          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-8"></div>
        </div>
      </section>
           <section className="relative lg:py-24 py-6 px-6 sm:px-8 bg-[#dad1c7] overflow-hidden">
        <div className="max-w-7xl mx-auto relative z-10  text-center lg:text-center">
          <div
            className="mb-6 lg:mb-16"
          >
            <div className="inline-block mb-24 px-10 py-2  rounded-full border border-primary">
              <span
                style={{ fontFamily: "var(--font-urbanist)" }}
                className="text-lg text-[#111143] "
              >
                Combos e Soluções Integradas
              </span>
            </div>

          
            <div className="grid md:grid-cols-2 gap-4 lg:gap-10 relative">
<div className="rounded-4xl bg-[#111143]  px-12 ">
              <div className=" h-full flex flex-col justify-between">
                <h1    style={{ fontFamily: "var(--font-campora)" }} className="text-primary font-bold text-6xl border-b-2 border-b-primary pb-12 mt-12">Combo 1</h1>
                <div className="mt-12">
                  <div>
                    <ul className="space-y-8">
                    <li className="flex items-center gap-x-4">
                        <div>
                          <CheckCircle size={30} className="text-primary" />
                        </div>
                        <div>
                          <h1 className="font-bold text-[#dad1c7] text-2xl">Palestras Regulares.</h1>
                        </div>
                    </li>
                    <li className="flex items-center gap-x-4">
                        <div>
                          <CheckCircle size={30} className="text-primary" />
                        </div>
                        <div>
                          <h1 className="font-bold text-[#dad1c7] text-2xl">Consultoria Econômica.</h1>
                        </div>
                    </li>
                    </ul>  
                  </div>
                     
                </div>
                  <div className="mt-auto  pt-24 pb-12">
                <button
                  className="bg-[#dad1c7] text-[#111143] text-base lg:text-lg cursor-pointer px-8 py-3 rounded-full font-bold hover:opacity-90 transition-all flex items-center justify-center gap-2 shadow-md"
                >
                  Solicitar Proposta
                  <div className="rounded-full p-[0.1rem] border border-[#111143]">
                    <ArrowRight className="text-primary" size={20} />
                  </div>
                </button>
             
              </div>
                   
              </div>
</div>

<div className="rounded-4xl bg-[#111143]  px-12 ">
              <div className=" h-full flex flex-col justify-between">
                <h1    style={{ fontFamily: "var(--font-campora)" }} className="text-primary font-bold text-6xl border-b-2 border-b-primary pb-12 mt-12">Combo 2</h1>
                <div className="mt-12">
                  <div>
                    <ul className="space-y-8">
                    <li className="flex items-center gap-x-4">
                        <div>
                          <CheckCircle size={30} className="text-primary" />
                        </div>
                        <div>
                          <h1 className="font-bold text-[#dad1c7] text-2xl">Workshop Financeiro.</h1>
                        </div>
                    </li>
                    <li className="flex items-center gap-x-4">
                        <div>
                          <CheckCircle size={30} className="text-primary" />
                        </div>
                        <div>
                          <h1 className="font-bold text-[#dad1c7] text-2xl">Consultoria para Funcionários.</h1>
                        </div>
                    </li>
                    </ul>  
                  </div>
                     
                </div>
                  <div className="mt-auto  pt-24 pb-12">
                <button
                  className="bg-[#dad1c7] text-[#111143] text-base lg:text-lg cursor-pointer px-8 py-3 rounded-full font-bold hover:opacity-90 transition-all flex items-center justify-center gap-2 shadow-md"
                >
                  Solicitar Proposta
                  <div className="rounded-full p-[0.1rem] border border-[#111143]">
                    <ArrowRight className="text-primary" size={20} />
                  </div>
                </button>
             
              </div>
                   
              </div>
</div>
</div>

          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-8"></div>
        </div>
      </section>
  <section className="relative lg:py-24 py-6 px-6 sm:px-8 bg-[#111143] overflow-hidden">
      <div className="max-w-7xl mx-auto relative z-10 text-center">
        <div

          className="mb-6 lg:mb-16"
        >
          {/* Título */}
          <div className="inline-block mb-24 px-10 py-2 rounded-full border border-primary">
            <span
              style={{ fontFamily: "var(--font-urbanist)" }}
              className="text-lg text-[#dad1c7]"
            >
              FAQ
            </span>
          </div>

          {/* Lista de perguntas */}
          <ul className="text-start max-w-3xl mx-auto space-y-10">
            {faqs.map((faq, index) => (
              <li
                key={index}
                className="border-b border-[#dad1c733] pb-6 cursor-pointer"
                onClick={() => toggleFAQ(index)}
              >
                <div className="flex items-start justify-between gap-6">
                  <p
                    className="text-[#dad1c7] text-2xl leading-relaxed flex-1"
                    style={{ fontFamily: "var(--font-montserrat)" }}
                  >
                    {faq.question}
                  </p>
                  <ChevronDown
                    className={`text-[#dad1c7] w-6 h-6 transform transition-transform duration-300 ${
                      openIndex === index ? "rotate-180" : ""
                    }`}
                  />
                </div>

                <AnimatePresence>
                  {openIndex === index && (
                    <div
              
                      className="mt-4"
                    >
                      <p
                        className="text-[#b6b0a8] text-lg leading-relaxed"
                        style={{ fontFamily: "var(--font-montserrat)" }}
                      >
                        {faq.answer}
                      </p>
                    </div>
                  )}
                </AnimatePresence>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
    </main>
  );
}
