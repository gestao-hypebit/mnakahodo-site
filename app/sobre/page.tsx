"use client";

import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function SobrePage() {
  return (
    <main>
      <section className="pt-32 px-4 sm:px-6 lg:px-8 bg-[#111143] min-h-screen flex flex-col lg:flex-row justify-center relative">
        <div className="flex flex-col  ">
          <div className="flex justify-center mt-auto ">
            <div className=" px-6 py-2 rounded-full border border-primary w-fit">
              <span
                style={{ fontFamily: "var(--font-urbanist)" }}
                className="text-lg text-[#dad1c8]"
              >
                Sobre mim
              </span>
            </div>
          </div>
          <div className="flex flex-col lg:flex-row  gap-x-8 ">
            <div className="   ">
              <Image
                src="/images/img_sobre.png"
                width={400}
                height={500}
                alt="Foto de perfil do economista"
                className="w-[400px] h-[450px] lg:w-[450px] lg:h-[600px] object-cover hidden lg:block"
                priority
              />
            </div>

            <div className="flex flex-col   lg:items-start h-full mt-8 lg:mt-6 max-w-3xl text-justify">
              <h1
                className="text-3xl lg:text-5xl font-bold text-[#dad1c8] mb-6 leading-tight text-center lg:text-start text-balance"
                style={{ fontFamily: "var(--font-campora)" }}
              >
                Prazer, sou
                <span className="text-primary"> Mauricio Nakahodo.</span>
              </h1>

              <p
                className="text-base lg:text-lg text-[#dad1c8] mb-4 lg:mb-4 leading-relaxed text-center lg:text-start text-balance max-w-5xl "
                style={{ fontFamily: "var(--font-montserrat)" }}
              >
                Sou economista formado pela USP e mestre pela UFRGS e pela Paris School of Economics. Depois de mais de 20 anos no mercado financeiro, sigo atuando como economista, palestrante e educador financeiro — usando toda essa experiência para ajudar pessoas e empresas a tomarem decisões mais seguras e viverem com mais tranquilidade.
                {/* Planejador financeiro com foco em ajudar pessoas a conquistarem
                liberdade e segurança financeira{" "}
                <strong>sem abrir mão da qualidade de vida.</strong> */}
              </p>
              <p
                className="text-base lg:text-lg text-[#dad1c8] mb-6 lg:mb-4 leading-relaxed text-center lg:text-start text-balance max-w-5xl"
                style={{ fontFamily: "var(--font-montserrat)" }}
              >
                Desde 2020, dedico-me intensamente à educação financeira, apoiando indivíduos e famílias a alcançarem bem-estar, equilíbrio e liberdade para realizar seus sonhos.
                {/* Sou formado em [área], e há [X] anos ajudo pessoas a
                conquistarem liberdade e segurança financeira, sem abrir mão da
                qualidade de vida. Acredito que planejar é o primeiro passo para
                viver com tranquilidade */}
              </p>
              <p
                className="text-base lg:text-lg text-[#dad1c8] mb-6 lg:mb-4 leading-relaxed text-center lg:text-start text-balance max-w-5xl"
                style={{ fontFamily: "var(--font-montserrat)" }}
              >
                Levo esse propósito para empresas, universidades e eventos, conduzindo palestras e workshops que transformam conhecimento em ação e aproximam as pessoas de uma vida financeira mais consciente.
              </p>
              <p
                className="text-base lg:text-lg text-[#dad1c8] mb-6 lg:mb-4 leading-relaxed text-center lg:text-start text-balance max-w-5xl"
                style={{ fontFamily: "var(--font-montserrat)" }}
              >
                Acredito que planejar com clareza — na vida pessoal, familiar ou empresarial — é um dos caminhos mais poderosos para enfrentar imprevistos e conquistar metas com confiança.
              </p>
   <div className="flex items-center justify-center w-full h-full  ">
              <Image
                src="/images/img_sobre.png"
                width={400}
                height={500}
                alt="Foto de perfil do economista"
                className="w-[400px] h-[550px]  object-cover lg:hidden"
                priority
              />
            </div>
              <div className="lg:block lg:absolute lg:bottom-0 lg:right-24 pb-12  hidden ">
                <Image
                  src="/images/logos/logo-icon-white.png"
                  width={150}
                  height={150}
                  alt="Logo icone"
                  className=" object-cover"
                  priority
                />
              </div>

             
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
                  Promover segurança, clareza e bem-estar financeiro, capacitando indivíduos e empresas a tomarem decisões mais conscientes e consistentes.
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
                  Transformar a relação de pessoas e empresas com suas finanças, fortalecendo escolhas inteligentes e sustentáveis para enfrentar os imprevistos da economia e do cotidiano.
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
                  Transparência, ética, profissionalismo, respeito às necessidades individuais. 
                </p>
              </div>
            </div>

            {/* Linha inferior */}
            <div className="h-[1px] bg-[#e86a0c] w-full mt-12"></div>
          </div>
        </div>
      </section>

      <section className="relative lg:py-16 py-10 px-6 sm:px-8 bg-[#111143] overflow-hidden">
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
            className="text-[#dad1c8] text-base md:text-lg leading-relaxed mx-auto mb-8 lg:mb-12"
            style={{ fontFamily: "var(--font-montserrat)" }}
          >
            Minha trajetória começou quando percebi que muitas pessoas ao meu
            redor viviam com insegurança financeira — e eu mesmo já passei por
            isso. Decidi transformar essa realidade estudando, me especializando
            e criando um método acessível{" "}
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

  <section className="bg-[#dad1c8] lg:py-20 py-10 px-6 sm:px-8 text-center">
  <div className="max-w-6xl mx-auto">
    {/* Título */}
    <h2
      className="text-4xl md:text-5xl font-bold mb-12 lg:mb-20"
      style={{ fontFamily: "var(--font-campora)" }}
    >
      <span className="text-[#111143]">Como funciona </span>
      <span className="text-[#e86a0c]">meu processo</span>
    </h2>

    {/* Layout Desktop */}
    <div className="relative hidden lg:flex justify-between items-start md:mx-8">
      {/* Linha horizontal principal */}
      <div className="absolute top-[28px] left-0 right-0 h-[2px] bg-[#e86a0c]" />

      {[1, 2, 3].map((num, index) => (
        <div key={num} className="flex flex-col items-center w-1/3 px-2">
          <div className="relative">
            <div className="bg-[#111143] text-[#e86a0c] font-bold rounded-full w-14 h-14 flex items-center justify-center text-xl z-10">
              {num}
            </div>
            <div className="absolute left-1/2 transform -translate-x-1/2 top-14 h-16 w-[2px] bg-[#e86a0c]" />
          </div>

          <div className="mt-20">
            <h3
              className="text-[#111143] font-semibold text-lg mb-2"
              style={{ fontFamily: "var(--font-montserrat)" }}
            >
              {index === 0
                ? "Diagnóstico:"
                : index === 1
                ? "Plano Personalizado:"
                : "Acompanhamento Contínuo:"}
            </h3>
            <p
              className="text-[#111143] text-base leading-relaxed max-w-xs mx-auto"
              style={{ fontFamily: "var(--font-montserrat)" }}
            >
              {index === 0
                ? "Análise detalhada da situação atual."
                : index === 1
                ? "Metas realistas e estratégias sob medida."
                : "Suporte e ajustes ao longo do caminho."}
            </p>
          </div>
        </div>
      ))}
    </div>

    {/* Layout Mobile */}
    <div className="flex flex-col items-center gap-12 lg:hidden relative">
      {/* Linha vertical principal */}
      {/* <div className="absolute top-0 bottom-0 left-1/2 transform -translate-x-1/2 w-[2px] bg-[#e86a0c]" /> */}

      {[1, 2, 3].map((num, index) => (
        <div key={num} className="relative flex flex-col items-center">
          <div className="bg-[#111143] text-[#e86a0c] font-bold rounded-full w-14 h-14 flex items-center justify-center text-xl z-10">
            {num}
          </div>

          <div className="mt-6">
            <h3
              className="text-[#111143] font-semibold text-lg mb-2"
              style={{ fontFamily: "var(--font-montserrat)" }}
            >
              {index === 0
                ? "Diagnóstico:"
                : index === 1
                ? "Plano Personalizado:"
                : "Acompanhamento Contínuo:"}
            </h3>
            <p
              className="text-[#111143] text-base leading-relaxed max-w-[280px] mx-auto"
              style={{ fontFamily: "var(--font-montserrat)" }}
            >
              {index === 0
                ? "Análise detalhada da situação atual."
                : index === 1
                ? "Metas realistas e estratégias sob medida."
                : "Suporte e ajustes ao longo do caminho."}
            </p>
          </div>
        </div>
      ))}
    </div>

    {/* Texto final */}
    <p
      className="mt-12 lg:mt-24 text-[#111143] text-lg md:text-xl font-semibold leading-relaxed mx-auto max-w-4xl"
      style={{ fontFamily: "var(--font-montserrat)" }}
    >
      Utilizo uma metodologia baseada em{" "}
      <span className="text-[#111143] font-bold">metas realistas</span>,{" "}
      <span className="text-[#111143] font-bold">análise personalizada</span> e{" "}
      <span className="text-[#111143] font-bold">
        acompanhamento contínuo.
      </span>
    </p>
  </div>
</section>

<section className="relative py-10 lg:py-20 px-6 sm:px-8 bg-[#111143] overflow-hidden">
  <div className="max-w-6xl mx-auto text-center">
    {/* Título */}
    <h2
      className="text-4xl md:text-5xl font-bold text-[#dad1c8] mb-16 lg:mb-20"
      style={{ fontFamily: "var(--font-campora)" }}
    >
      O impacto que já geramos
    </h2>

    {/* Container principal */}
    <div className="relative flex flex-col md:flex-row justify-between items-stretch text-center md:text-left">
      {/* Linha vertical central (apenas no desktop) */}
      <div className="hidden md:block absolute top-0 bottom-0 left-1/2 w-[2px] bg-[#e86a0c] transform -translate-x-1/2" />

      {/* BLOCO 1 */}
      <div className="w-full md:w-1/2 px-6 lg:px-16 flex flex-col items-center md:items-end mb-16 md:mb-0">
        <div>
          <h3
            className="text-4xl lg:text-5xl font-bold text-[#dad1c8]"
            style={{ fontFamily: "var(--font-campora)" }}
          >
            +100
          </h3>
          <p
            className="text-[#e86a0c] text-lg lg:text-xl font-semibold leading-snug mt-2 text-center md:text-right"
            style={{ fontFamily: "var(--font-montserrat)" }}
          >
            Famílias organizadas
            <br />
            financeiramente.
          </p>
        </div>

        {/* Caixa de depoimento */}
        <div className="bg-[#dad1c8] rounded-3xl px-6 py-8 lg:px-8 lg:py-12 max-w-sm mt-10 shadow-md">
          <p
            className="italic text-[#111143] text-base mb-4 leading-relaxed"
            style={{ fontFamily: "var(--font-montserrat)" }}
          >
            “Graças ao acompanhamento, consegui quitar dívidas e começar a
            investir.”
          </p>
          <p
            className="text-[#111143] font-semibold text-sm"
            style={{ fontFamily: "var(--font-montserrat)" }}
          >
            – Cliente X
          </p>
        </div>
      </div>

      {/* BLOCO 2 */}
      <div className="w-full md:w-1/2 px-6 lg:px-16 flex flex-col items-center md:items-start">
        <div>
          <h3
            className="text-4xl lg:text-5xl font-bold text-[#dad1c8]"
            style={{ fontFamily: "var(--font-campora)" }}
          >
            +300
          </h3>
          <p
            className="text-[#e86a0c] text-lg lg:text-xl font-semibold leading-snug mt-2 text-center md:text-left"
            style={{ fontFamily: "var(--font-montserrat)" }}
          >
            Horas de consultoria
            <br />
            individual.
          </p>
        </div>

        {/* Caixa de depoimento */}
        <div className="bg-[#dad1c8] rounded-3xl px-6 py-8 lg:px-8 lg:py-12 max-w-sm mt-10 shadow-md">
          <p
            className="italic text-[#111143] text-base mb-4 leading-relaxed"
            style={{ fontFamily: "var(--font-montserrat)" }}
          >
            “As orientações me ajudaram a estruturar melhor meus investimentos.”
          </p>
          <p
            className="text-[#111143] font-semibold text-sm"
            style={{ fontFamily: "var(--font-montserrat)" }}
          >
            – Cliente Y
          </p>
        </div>
      </div>
    </div>
  </div>
</section>


      <section className="bg-[#dad1c8] py-10 lg:py-20 px-6 sm:px-8">
        <div className="max-w-5xl mx-auto text-center">
          {/* Título */}
          <h2
            className="text-4xl md:text-5xl font-bold text-[#111143] mb-8"
            style={{ fontFamily: "var(--font-campora)" }}
          >
            Formação e reconhecimento.
          </h2>

          {/* Linha */}
          <div className="w-full border-t border-[#e86a0c] mb-8" />

          {/* Texto */}
          <p
            className="text-[#111143] text-base md:text-lg leading-relaxed"
            style={{ fontFamily: "var(--font-montserrat)" }}
          >
            Certificado CFP®, especialista em Planejamento Financeiro pela
            [instituição]. Participações em [revista, evento].
          </p>
        </div>
      </section>

      <section className="relative lg:pt-8 pb-10 lg:pb-20 px-6 sm:px-8 bg-[#111143] overflow-hidden">
        <div className="max-w-6xl mx-auto text-center">
          {/* Título */}
          <div className="flex justify-center">
            <Image
              src="/images/logos/logo-icon-white.png"
              width={150}
              height={150}
              alt="Logo icone"
              className=" object-cover"
              priority
            />
          </div>

          <div className="flex justify-center">
            <h1 className="text-4xl lg:text-5xl font-bold text-[#dad1c8] max-w-4xl text-center">Pronto para <span className="text-primary">transformar</span> sua relação com o dinheiro?</h1>
          </div>
          <div className="flex justify-center my-8">
         <Link href={"https://wa.me/5511999024090"} target="_blank">
                 <button
                className=" text-[#dad1c8] border border-primary text-base lg:text-lg cursor-pointer px-8 py-2 rounded-full font-bold hover:opacity-90 transition-all flex items-center justify-center gap-2 shadow-md"
              >
                Agende uma conversa gratuita
                <div className="rounded-full p-[0.1rem] border border-[#dad1c8]">
                  <ArrowRight className="text-primary" size={20} />
                </div>
              </button>
         </Link>
          </div>
          <div className="flex justify-center">
            <p className="text-[#dad1c8] text-base lg:text-lg max-w-3xl  text-center">
               Sem compromisso — um primeiro passo para entender onde você está e para 
onde pode ir.
            </p>
          </div>
          {/* <p
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
    </p> */}

        
        </div>
      </section>
    </main>
  );
}
