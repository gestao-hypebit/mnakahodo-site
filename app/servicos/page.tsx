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
    title:
      "Palestras e Workshops para decisões financeiras pessoais mais conscientes",
    features: [
      "Modalidades presencial e online.",
      "Economia comportamental - como emoçôes, vieses e hábitos influenciam suas decisões financeiras.",
      "Ferramentas práticas de organização financeira - orçamento, metas, reserva de emergência e investimentos adequados para o planejamento financeiro.",
      "Interatividade e simulações personalizadas - dinâmicas, exercícios e projeções reais para apoiar o bem-estar financeiro.",
    ],
  },
  {
    icon: Handshake,
    title: "Mentoria personalizada para funcionários",
    features: [
      "Economia comportamental.",
      "Organização das finanças pessoais.",
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
                  Nossos serviços
                </span>
              </div>

              <h1
                className="text-4xl lg:text-5xl font-bold text-[#dad1c8] mb-6 leading-tight text-center lg:text-start text-balance"
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
                Palestras, consultorias e treinamentos que ajudam{" "}
                <span className="font-bold">empresas</span> e{" "}
                <span className="font-bold">famílias</span> a tomarem decisões{" "}
                <span className="font-bold">mais conscientes</span>.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link href={"https://wa.me/5511999024090"} target="_blank">
                  <button className="bg-[#dad1c8] text-[#111143] text-base lg:text-lg cursor-pointer px-8 py-3 rounded-full font-bold hover:opacity-90 transition-all flex items-center justify-center gap-2 shadow-md">
                    Solicitar Proposta
                    <div className="rounded-full p-[0.1rem] border border-[#111143]">
                      <ArrowRight className="text-primary" size={20} />
                    </div>
                  </button>
                </Link>
                <Link href={"https://wa.me/5511999024090"} target="_blank">
                  <button className="border cursor-pointer text-base lg:text-lg border-primary text-[#dad1c8] px-8 py-3 rounded-full font-bold hover:bg-[#111143]/5 transition-colors">
                    Agendar uma Reunião
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
      <section className="relative lg:pt-20 pt-10 lg:pb-0  px-6 sm:px-8 bg-[#dad1c7] overflow-hidden ">
        <div className="max-w-7xl mx-auto relative z-10  text-center lg:text-center">
          <div className="mb-6 lg:mb-16">
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
                          className="text-2xl lg:text-3xl font-bold text-primary mb-3 text-start"
                          style={{ fontFamily: "var(--font-campora)" }}
                        >
                          {service.title}
                        </h3>
                      </div>
                    </div>

                    <ul className="space-y-2 mt-6">
                      {service.features.map((feature, i) => (
                        <li className="text-base text-start lg:text-lg text-[#dad1c7] font-bold list-none relative pl-4">
  <span className="absolute left-0 top-2 w-2 h-2 bg-[#dad1c7] rounded-full"></span>
  {feature}
</li>


                        // <li
                        //   key={i}
                        //   className="text-base text-start lg:text-lg text-[#dad1c7] flex items-center gap-2 font-bold"
                        //   style={{ fontFamily: "var(--font-montserrat)" }}
                        // >
                        //   <span className="w-1.5 h-1.5 bg-[#dad1c7] rounded-full" />
                        //   {feature}
                        // </li>
                      ))}
                    </ul>
                  </div>
                );
              })}
            </div>
          </div>


        </div>
      </section>
      <section className="relative lg:py-0  px-6 sm:px-8 bg-[#dad1c7] overflow-hidden ">
        <div className="max-w-7xl mx-auto relative z-10  text-center lg:text-center ">
          <div className="mb-6 lg:mb-16 ">
            <div className="gap-4 lg:gap-10 relative  lg:px-44">
              <div className="mb-6">
              <h1 className="text-[#111143] text-lg text-justify lg:text-center">Um pacote completo para fortalecer a educação financeira dentro da empresa, combinando conteúdo prático, desenvolvimento de hábitos e acompanhamento contínuo. Ideal para organizações que desejam apoiar colaboradores na construção de uma vida financeira mais equilibrada, consciente e sustentável. </h1>

              </div>
              <div className="rounded-4xl bg-[#111143] px-6  lg:px-12 ">
                <div className=" h-full flex flex-col justify-between">
                  <h1
                    style={{ fontFamily: "var(--font-campora)" }}
                    className="text-primary font-bold text-6xl border-b-2 border-b-primary pb-12 mt-12"
                  >
                    Combo
                  </h1>
                  <div className="mt-12">
                    <div>
                      <ul className="space-y-8">
                        <li className="flex justify-center items-center gap-x-4">
                          <div>
                            <CheckCircle size={30} className="text-primary" />
                          </div>
                          <div>
                            <h1 className="font-bold text-[#dad1c7] text-xl lg:text-2xl">
                              Palestras Regulares.
                            </h1>
                          </div>
                        </li>
                        <li className="flex justify-center items-center gap-x-4">
                          <div>
                            <CheckCircle size={30} className="text-primary" />
                          </div>
                          <div>
                            <h1 className="font-bold text-[#dad1c7]  text-xl lg:text-2xl">
                              Consultoria Econômica.
                            </h1>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="flex justify-center lg:block mt-auto  pt-12 lg:pt-12 pb-12">
                    <Link
                      className="flex justify-center"
                      href={"https://wa.me/5511999024090"}
                      target="_blank"
                    >
                      <button className="bg-[#dad1c7] text-[#111143] text-base lg:text-lg cursor-pointer px-8 py-3 rounded-full font-bold hover:opacity-90 transition-all flex items-center justify-center gap-2 shadow-md">
                        Solicitar Proposta
                        <div className="rounded-full p-[0.1rem] border border-[#111143]">
                          <ArrowRight className="text-primary" size={20} />
                        </div>
                      </button>
                    </Link>
                  </div>
                </div>
              </div>

              {/* <div className="rounded-4xl bg-[#111143] px-6  lg:px-12 ">
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
                          <h1 className="font-bold text-[#dad1c7] text-xl lg:text-2xl">Workshop Financeiro.</h1>
                        </div>
                    </li>
                    <li className="flex items-center gap-x-4">
                        <div>
                          <CheckCircle size={30} className="text-primary" />
                        </div>
                        <div>
                          <h1 className="font-bold text-[#dad1c7] text-xl lg:text-2xl">Consultoria para Funcionários.</h1>
                        </div>
                    </li>
                    </ul>  
                  </div>
                     
                </div>
                  <div className="mt-auto flex justify-center lg:block  pt-12 lg:pt-24 pb-12">
                  <Link href={"https://wa.me/5511999024090"} target="_blank">
                <button
                  className="bg-[#dad1c7] text-[#111143] text-base lg:text-lg cursor-pointer px-8 py-3 rounded-full font-bold hover:opacity-90 transition-all flex items-center justify-center gap-2 shadow-md"
                >
                  Solicitar Proposta
                  <div className="rounded-full p-[0.1rem] border border-[#111143]">
                    <ArrowRight className="text-primary" size={20} />
                  </div>
                </button>
            </Link>
             
              </div>
                   
              </div>
</div> */}
            </div>
          </div>

          {/* <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-8"></div> */}
        </div>
      </section>
      <section className="relative lg:py-20 py-12 px-6 sm:px-8 bg-[#111143] overflow-hidden">
        <div className="max-w-7xl mx-auto relative z-10 text-center">
          {/* Título principal */}
          <div className="inline-block mb-10 lg:mb-8 px-10 py-2 rounded-full border border-[#e86a0c]">
            <span
              style={{ fontFamily: "var(--font-urbanist)" }}
              className="text-lg text-[#dad1c7] tracking-wide"
            >
              Economia
            </span>
          </div>

          <p className="mb-12 text-lg text-[#dad1c7]">
            Palestras, workshops e consultoria para empresas ajudando na melhor
            compreensão dos rumos da economia e dos impactos em seu setor de
            atuação
          </p>

          {/* Conteúdo principal */}
          <div className="grid md:grid-cols-2 gap-12 lg:gap-20 text-left">
            {/* Coluna esquerda */}
            <div className="relative md:pr-12">
              {/* Linha vertical decorativa no desktop */}
              <div className="hidden md:block absolute top-0 right-0 h-full w-[1.5px] bg-[#e86a0c]" />

              <div>
                <h2
                  className="text-3xl md:text-4xl font-bold text-[#dad1c7] mb-6"
                  style={{ fontFamily: "var(--font-campora)" }}
                >
                  Consultoria econômica para empresas e instituições
                </h2>
                <ul
                  className="list-disc pl-6 space-y-4 text-[#dad1c7] text-lg leading-relaxed"
                  style={{ fontFamily: "var(--font-montserrat)" }}
                >
                  <li>
                    Estudos sob demanda sobre o impacto do cenário
                    político-econômico no setor de atuação da empresa.
                  </li>
                  <li>Análise das perspectivas econômicas e setoriais.</li>
                </ul>
              </div>

              <div className="mt-16">
                <h2
                  className="text-3xl md:text-4xl font-bold text-[#dad1c7] mb-6"
                  style={{ fontFamily: "var(--font-campora)" }}
                >
                  Palestras para empresas e outras instituições
                </h2>
                <ul
                  className="list-disc pl-6 space-y-4 text-[#dad1c7] text-lg leading-relaxed"
                  style={{ fontFamily: "var(--font-montserrat)" }}
                >
                  <li>Cenário político-econômico no Brasil.</li>
                  <li>Cenário político-econômico na América Latina.</li>
                  <li>Cenário econômico global.</li>
                </ul>
              </div>
            </div>

            {/* Coluna direita */}
            <div className="flex flex-col justify-between">
              <div className="space-y-10">
                <h2
                  className="text-2xl md:text-3xl font-bold text-[#dad1c7]"
                  style={{ fontFamily: "var(--font-campora)" }}
                >
                  Atendimento presencial — reuniões regulares.
                </h2>

                <h2
                  className="text-2xl md:text-3xl font-bold text-[#dad1c7]"
                  style={{ fontFamily: "var(--font-campora)" }}
                >
                  Atendimento online para empresas em qualquer região do Brasil.
                </h2>

                <h2
                  className="text-2xl md:text-3xl font-bold text-[#dad1c7]"
                  style={{ fontFamily: "var(--font-campora)" }}
                >
                  Mini cursos de curta duração — presenciais e online — sobre
                  temas econômicos específicos.
                </h2>
              </div>

              {/* Logo inferior centralizada */}
              <div className="lg:flex justify-center mt-16 hidden">
                <Image
                  src="/images/logos/logo_icon.png"
                  width={220}
                  height={220}
                  alt="Logo"
                  className="object-contain opacity-90"
                />
              </div>
            </div>
          </div>
          <div className="gap-4 lg:gap-10 relative  lg:px-44">
              <div className="mt-8 lg:mt-12">
              <h1 className="text-[#dad1c7] text-lg text-justify lg:text-center">Um conjunto robusto de análises, workshops e acompanhamento estratégico para empresas que precisam entender o cenário econômico e antecipar movimentos importantes. Ideal para diretoria, times estratégicos e gestores que dependem de informação qualificada para tomar decisões com segurança.</h1>

              </div>
            <div className="rounded-4xl bg-[#dad1c7] px-6  lg:px-12 lg:mt-6 mt-8">
              <div className=" h-full flex flex-col justify-between">
                <h1
                  style={{ fontFamily: "var(--font-campora)" }}
                  className="text-[#111143] font-bold text-6xl border-b-2 border-b-[#111143] pb-12 mt-12"
                >
                  Combo
                </h1>
                <div className="mt-12">
                  <div>
                    <ul className="space-y-8">
                      <li className="flex justify-center items-center gap-x-4">
                        <div>
                          <CheckCircle size={30} className="text-[#111143]" />
                        </div>
                        <div>
                          <h1 className="font-bold text-[#111143] text-xl lg:text-2xl">
                            Workshops.
                          </h1>
                        </div>
                      </li>
                      <li className="flex justify-center items-center gap-x-4">
                        <div>
                          <CheckCircle size={30} className="text-[#111143]" />
                        </div>
                        <div>
                          <h1 className="font-bold text-[#111143]  text-xl lg:text-2xl">
                            Mentoria personalizada para funcionários.
                          </h1>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="flex justify-center lg:block mt-auto  pt-12 lg:pt-12 pb-12">
                  <Link
                    className="flex justify-center"
                    href={"https://wa.me/5511999024090"}
                    target="_blank"
                  >
                    <button className="bg-[#111143] text-[#dad1c7] text-base lg:text-lg cursor-pointer px-8 py-3 rounded-full font-bold hover:opacity-90 transition-all flex items-center justify-center gap-2 shadow-md">
                      Solicitar Proposta
                      <div className="rounded-full p-[0.1rem] border border-[#dad1c7]">
                        <ArrowRight className="text-primary" size={20} />
                      </div>
                    </button>
                  </Link>
                </div>
              </div>
            </div>

            {/* <div className="rounded-4xl bg-[#111143] px-6  lg:px-12 ">
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
                          <h1 className="font-bold text-[#dad1c7] text-xl lg:text-2xl">Workshop Financeiro.</h1>
                        </div>
                    </li>
                    <li className="flex items-center gap-x-4">
                        <div>
                          <CheckCircle size={30} className="text-primary" />
                        </div>
                        <div>
                          <h1 className="font-bold text-[#dad1c7] text-xl lg:text-2xl">Consultoria para Funcionários.</h1>
                        </div>
                    </li>
                    </ul>  
                  </div>
                     
                </div>
                  <div className="mt-auto flex justify-center lg:block  pt-12 lg:pt-24 pb-12">
                  <Link href={"https://wa.me/5511999024090"} target="_blank">
                <button
                  className="bg-[#dad1c7] text-[#111143] text-base lg:text-lg cursor-pointer px-8 py-3 rounded-full font-bold hover:opacity-90 transition-all flex items-center justify-center gap-2 shadow-md"
                >
                  Solicitar Proposta
                  <div className="rounded-full p-[0.1rem] border border-[#111143]">
                    <ArrowRight className="text-primary" size={20} />
                  </div>
                </button>
            </Link>
             
              </div>
                   
              </div>
</div> */}
          </div>
        </div>
      </section>

      <section className="relative lg:py-20 py-10 px-6 sm:px-8 bg-[#dad1c7] overflow-hidden">
        <div className="max-w-7xl mx-auto relative z-10 text-center">
          <div className="mb-6 lg:mb-16">
            {/* Título */}
            <div className="inline-block mb-12 lg:mb-24 px-10 py-2 rounded-full border border-primary">
              <span
                style={{ fontFamily: "var(--font-urbanist)" }}
                className="text-lg text-[#111143]"
              >
                FAQ
              </span>
            </div>

            {/* Lista de perguntas */}
            <ul className="text-start max-w-3xl mx-auto space-y-10">
              {faqs.map((faq, index) => (
                <li
                  key={index}
                  className="border-b border-[#111143] pb-6 cursor-pointer"
                  onClick={() => toggleFAQ(index)}
                >
                  <div className="flex items-start justify-between gap-6">
                    <p
                      className="text-[#111143] text-xl lg:text-2xl leading-relaxed flex-1"
                      style={{ fontFamily: "var(--font-montserrat)" }}
                    >
                      {faq.question}
                    </p>
                    <ChevronDown
                      className={`text-[#111143] w-6 h-6 transform transition-transform duration-300 ${
                        openIndex === index ? "rotate-180" : ""
                      }`}
                    />
                  </div>

                  <AnimatePresence>
                    {openIndex === index && (
                      <div className="mt-4">
                        <p
                          className="text-[#111143] text-base lg:text-lg leading-relaxed"
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
