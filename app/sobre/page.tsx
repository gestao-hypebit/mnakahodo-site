"use client";

import { ArrowRight } from "lucide-react";
import Image from "next/image";

export default function SobrePage() {
  return (
<main>
   <section className="pt-32 px-4 sm:px-6 lg:px-8 bg-[#111143] min-h-screen flex justify-center">
      <div className="flex flex-col  ">
          <div className="flex justify-center mt-4 ">
              <div className=" px-6 py-2 rounded-full border border-primary w-fit">
              <span
                style={{ fontFamily: "var(--font-urbanist)" }}
                className="text-lg text-[#dad1c8]"
              >
                Sobre mim
              </span>
            </div>
          </div>
        <div className="flex max-w-6xl gap-x-8 ">

            <div
          
            className="flex items-end justify-end w-full h-full  "
          >
            <Image
              src="/images/img_sobre.png"
              width={400}
              height={500}
              alt="Foto de perfil do economista"
              className="w-[400px] h-[450px] lg:w-[450px] lg:h-[600px] object-cover"
              priority
            />
          </div>
          
          <div
           
            className="flex flex-col   lg:items-start h-full mt-12"
          >
          

            <h1
        
              className="text-3xl lg:text-5xl font-bold text-[#dad1c8] mb-6 leading-tight text-center lg:text-start text-balance"
              style={{ fontFamily: "var(--font-campora)" }}
            >
              Prazer, sou
              <span className="text-primary"> Mauricio Nakahodo.</span>
            </h1>

            <p
              className="text-base lg:text-lg text-[#dad1c8] mb-8 leading-relaxed text-center lg:text-start text-balance"
              style={{ fontFamily: "var(--font-montserrat)" }}
            >
             Planejador financeiro com foco em ajudar pessoas a conquistarem 
liberdade e segurança financeira <strong>sem abrir mão da qualidade de vida.</strong>
            </p>
            <p
              className="text-base lg:text-lg text-[#dad1c8] mb-8 leading-relaxed text-center lg:text-start text-balance"
              style={{ fontFamily: "var(--font-montserrat)" }}
            >
            Sou formado em [área], e há [X] anos ajudo pessoas a conquistarem 
liberdade e segurança financeira, sem abrir mão da qualidade de vida. 
Acredito que planejar é o primeiro passo para viver com tranquilidade
            </p>

            <div className="flex justify-end w-full">
                <Image
              src="/images/logos/logo-icon-white.png"
              width={150}
              height={150}
              alt="Logo icone"
              className=" object-cover"
              priority
            />
            </div>

            {/* <div className="flex flex-col sm:flex-row gap-4">
              <button
                className="bg-[#dad1c8] text-[#111143] text-base lg:text-lg cursor-pointer px-8 py-3 rounded-full font-bold hover:opacity-90 transition-all flex items-center justify-center gap-2 shadow-md"
              >
                Agende uma conversa 
                <div className="rounded-full p-[0.1rem] border border-[#111143]">
                  <ArrowRight className="text-primary" size={20} />
                </div>
              </button>
              <button
                className="border cursor-pointer text-base lg:text-lg border-[#dad1c8] text-[#dad1c8] px-8 py-3 rounded-full font-bold hover:bg-[#111143]/5 transition-colors"
              >
                Conhecer Serviços
              </button>
            </div> */}
          </div>

        

        </div>
      </div>
    </section>
     <section className="relative lg:py-16 py-10 px-6 sm:px-8 bg-[#dad1c7] overflow-hidden">
  <div className="max-w-7xl mx-auto relative z-10 text-center">
    {/* Título */}
    <div className="mb-12">
      <div className="inline-block mb-12 px-6 py-2 rounded-full border border-[#e86a0c]">
        <span
          style={{ fontFamily: "var(--font-urbanist)" }}
          className="text-lg text-[#111143]"
        >
          Missão, visão e valores
        </span>
      </div>

      {/* Linha superior */}
      <div className="h-[1px] bg-[#e86a0c] w-full mb-12"></div>

      {/* Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
        {/* Missão */}
        <div>
          <div className="flex justify-center mb-4">
                     <svg
  xmlns="http://www.w3.org/2000/svg"
  viewBox="0 0 24 24"
  fill="none"
  stroke="#e86a0c"
  strokeWidth={2}
  strokeLinecap="round"
  strokeLinejoin="round"
  className="w-20 h-20"
>
  <circle cx="12" cy="12" r="10" />
  <path d="M12 6v6l4 2" />
  <path d="M20 4l-4 4" />
  <path d="M16 4h4v4" />
</svg>
          </div>
          <h3
            style={{ fontFamily: "var(--font-campora)" }}
            className="text-4xl font-bold text-[#111143] mb-4"
          >
            Missão
          </h3>
          <p className="text-[#111143] text-base leading-relaxed max-w-xs mx-auto">
            Ajudar pessoas a entenderem, organizarem e conquistarem uma vida
            financeira equilibrada e consciente.
          </p>
        </div>

        {/* Visão */}
        <div>
          <div className="flex justify-center mb-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="#e86a0c"
              className="w-20 h-20"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 4.5C7.305 4.5 3.293 7.385 1.5 12c1.793 4.615 5.805 7.5 10.5 7.5s8.707-2.885 10.5-7.5C20.707 7.385 16.695 4.5 12 4.5z"
              />
              <circle cx="12" cy="12" r="3" fill="none" />
            </svg>
          </div>
          <h3
            style={{ fontFamily: "var(--font-campora)" }}
            className="text-4xl font-bold text-[#111143] mb-4"
          >
            Visão
          </h3>
          <p className="text-[#111143] text-base leading-relaxed max-w-xs mx-auto">
            Ser referência em educação e planejamento financeiro humanizado no
            Brasil.
          </p>
        </div>

        {/* Valores */}
        <div>
          <div className="flex justify-center mb-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="#e86a0c"
              className="w-20 h-20"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9 12l2 2 4-4m6 2a10 10 0 11-20 0 10 10 0 0120 0z"
              />
            </svg>
          </div>
          <h3
            style={{ fontFamily: "var(--font-campora)" }}
            className="text-4xl font-bold text-[#111143] mb-4"
          >
            Valores
          </h3>
          <p className="text-[#111143] text-base leading-relaxed max-w-xs mx-auto">
            Transparência, ética, personalização e educação contínua.
          </p>
        </div>
      </div>

      {/* Linha inferior */}
      <div className="h-[1px] bg-[#e86a0c] w-full mt-12"></div>
    </div>
  </div>
</section>

 <section className="relative lg:py-16 px-6 sm:px-8 bg-[#111143] overflow-hidden">
  <div className="max-w-6xl mx-auto text-center">
    {/* Título */}
    <h2
      className="text-4xl md:text-5xl font-bold text-[#dad1c8] mb-6"
      style={{ fontFamily: "var(--font-campora)" }}
    >
      Minha jornada.
    </h2>

    {/* Texto introdutório */}
    <p
      className="text-[#dad1c8] text-base md:text-lg leading-relaxed mx-auto mb-12"
      style={{ fontFamily: "var(--font-montserrat)" }}
    >
      Minha trajetória começou quando percebi que muitas pessoas ao meu redor
      viviam com insegurança financeira — e eu mesmo já passei por isso. Decidi
      transformar essa realidade estudando, me especializando e criando um
      método acessível{" "}
      <span className="font-semibold">
        para quem busca estabilidade e liberdade financeira.
      </span>
    </p>

    {/* Cards */}
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8 lg:gap-10">
      {/* Card 1 */}
      <div className="bg-[#dad1c8] rounded-3xl py-10 px-8">
        <h3
          className="text-4xl font-bold text-[#e86a0c] mb-4"
          style={{ fontFamily: "var(--font-campora)" }}
        >
          2015
        </h3>
        <p
          className="text-[#111143] font-bold text-lg leading-relaxed"
          style={{ fontFamily: "var(--font-montserrat)" }}
        >
          Primeiros passos em consultoria financeira.
        </p>
      </div>

      {/* Card 2 */}
      <div className="bg-[#dad1c8] rounded-3xl py-10 px-8">
        <h3
          className="text-4xl font-bold text-[#e86a0c] mb-4"
          style={{ fontFamily: "var(--font-campora)" }}
        >
          2018
        </h3>
        <p
          className="text-[#111143] font-bold text-lg leading-relaxed"
          style={{ fontFamily: "var(--font-montserrat)" }}
        >
          Certificação [X] e início da carreira independente.
        </p>
      </div>

      {/* Card 3 */}
      <div className="bg-[#dad1c8] rounded-3xl py-10 px-8">
        <h3
          className="text-4xl font-bold text-[#e86a0c] mb-4"
          style={{ fontFamily: "var(--font-campora)" }}
        >
          2022
        </h3>
        <p
          className="text-[#111143] font-bold text-lg leading-relaxed"
          style={{ fontFamily: "var(--font-montserrat)" }}
        >
          Criação do método [nome da metodologia].
        </p>
      </div>

      {/* Card 4 */}
      <div className="bg-[#dad1c8] rounded-3xl py-10 px-8">
        <h3
          className="text-4xl font-bold text-[#e86a0c] mb-4"
          style={{ fontFamily: "var(--font-campora)" }}
        >
          2024
        </h3>
        <p
          className="text-[#111143] font-bold text-lg leading-relaxed"
          style={{ fontFamily: "var(--font-montserrat)" }}
        >
          Mais de 100 famílias atendidas.
        </p>
      </div>
    </div>
  </div>
</section>


<section className="bg-[#dad1c8] py-20 px-6 sm:px-8 text-center">
  <div className="max-w-6xl mx-auto">
    {/* Título */}
    <h2
      className="text-4xl md:text-5xl font-bold mb-20"
      style={{ fontFamily: "var(--font-campora)" }}
    >
      <span className="text-[#111143]">Como funciona </span>
      <span className="text-[#e86a0c]">meu processo.</span>
    </h2>

    {/* Linha horizontal principal */}
    <div className="relative flex justify-between items-start md:mx-8">
      <div className="absolute top-[28px] left-0 right-0 h-[2px] bg-[#e86a0c]" />

      {/* Etapa 1 */}
      <div className="flex flex-col items-center w-1/3 px-2">
        <div className="relative">
          {/* Círculo com número */}
          <div className="bg-[#111143] text-[#e86a0c] font-bold rounded-full w-14 h-14 flex items-center justify-center text-xl z-10">
            1
          </div>
          {/* Linha vertical abaixo */}
          <div className="absolute left-1/2 transform -translate-x-1/2 top-14 h-16 w-[2px] bg-[#e86a0c]" />
        </div>

        <div className="mt-20">
          <h3
            className="text-[#111143] font-semibold text-lg mb-2"
            style={{ fontFamily: "var(--font-montserrat)" }}
          >
            Diagnóstico:
          </h3>
          <p
            className="text-[#111143] text-base leading-relaxed max-w-xs mx-auto"
            style={{ fontFamily: "var(--font-montserrat)" }}
          >
            Análise detalhada da situação atual.
          </p>
        </div>
      </div>

      {/* Etapa 2 */}
      <div className="flex flex-col items-center w-1/3 px-2">
        <div className="relative">
          <div className="bg-[#111143] text-[#e86a0c] font-bold rounded-full w-14 h-14 flex items-center justify-center text-xl z-10">
            2
          </div>
          <div className="absolute left-1/2 transform -translate-x-1/2 top-14 h-16 w-[2px] bg-[#e86a0c]" />
        </div>

        <div className="mt-20">
          <h3
            className="text-[#111143] font-semibold text-lg mb-2"
            style={{ fontFamily: "var(--font-montserrat)" }}
          >
            Plano Personalizado:
          </h3>
          <p
            className="text-[#111143] text-base leading-relaxed max-w-xs mx-auto"
            style={{ fontFamily: "var(--font-montserrat)" }}
          >
            Metas realistas e estratégias sob medida.
          </p>
        </div>
      </div>

      {/* Etapa 3 */}
      <div className="flex flex-col items-center w-1/3 px-2">
        <div className="relative">
          <div className="bg-[#111143] text-[#e86a0c] font-bold rounded-full w-14 h-14 flex items-center justify-center text-xl z-10">
            3
          </div>
          <div className="absolute left-1/2 transform -translate-x-1/2 top-14 h-16 w-[2px] bg-[#e86a0c]" />
        </div>

        <div className="mt-20">
          <h3
            className="text-[#111143] font-semibold text-lg mb-2"
            style={{ fontFamily: "var(--font-montserrat)" }}
          >
            Acompanhamento Contínuo:
          </h3>
          <p
            className="text-[#111143] text-base leading-relaxed max-w-xs mx-auto"
            style={{ fontFamily: "var(--font-montserrat)" }}
          >
            Suporte e ajustes ao longo do caminho.
          </p>
        </div>
      </div>
    </div>

    {/* Texto final */}
    <p
      className="mt-24 text-[#111143] text-lg md:text-xl font-semibold leading-relaxed mx-auto max-w-4xl"
      style={{ fontFamily: "var(--font-montserrat)" }}
    >
      Utilizo uma metodologia baseada em{" "}
      <span className="text-[#111143] font-bold">metas realistas</span>,{" "}
      <span className="text-[#111143] font-bold">análise personalizada</span> e{" "}
      <span className="text-[#111143] font-bold">acompanhamento contínuo.</span>
    </p>
  </div>
</section>




</main>
  );
}
