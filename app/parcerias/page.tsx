"use client";

import { ArrowRight, Handshake, Globe, Brain, Scale, Calculator } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function ParceriasPage() {
  const futurasParcerias = [
    {
      icon: Brain,
      title: "Psicologia financeira",
      description:
        "Colaborações com psicólogos para abordar os aspectos emocionais e comportamentais das decisões financeiras.",
    },
    {
      icon: Calculator,
      title: "Contabilidade e gestão tributária",
      description:
        "Parcerias com contadores para tratar de planejamento financeiro e eficiência fiscal para empresas e famílias.",
    },
    {
      icon: Scale,
      title: "Consultoria jurídica e sucessória",
      description:
        "Especialistas em direito financeiro e sucessório para temas de patrimônio e proteção familiar.",
    },
  ];

  return (
    <main className="pt-24 min-h-screen bg-[#111143]">
      {/* Hero Section */}
      <section className="px-6 sm:px-8 lg:px-12 bg-[#111143] py-32">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div className="text-center md:text-left">
            <div className="inline-block mb-6 px-4 py-2 rounded-full border border-primary">
              <span
                style={{ fontFamily: "var(--font-urbanist)" }}
                className="text-lg text-[#dad1c8]"
              >
                Parcerias e Colaborações
              </span>
            </div>
            <h1
              className="text-4xl lg:text-5xl font-bold text-[#dad1c8] mb-6 leading-tight text-balance"
              style={{ fontFamily: "var(--font-campora)" }}
            >
              Conectando especialistas para{" "}
              <span className="text-primary">ampliar o conhecimento financeiro.</span>
            </h1>
            <p
              className="text-base lg:text-lg text-[#dad1c8]/90 leading-relaxed mb-10"
              style={{ fontFamily: "var(--font-montserrat)" }}
            >
              Unimos economistas, profissionais de finanças e especialistas de áreas
              complementares para promover educação e estratégia financeira de alto impacto.
            </p>
            <button className="bg-[#dad1c8] text-[#111143] font-bold px-8 py-3 rounded-full flex items-center gap-2 mx-auto md:mx-0">
              Entrar em contato
              <ArrowRight className="text-primary" size={20} />
            </button>
          </div>
          <div className="flex justify-center">
            <Image
              src="/images/logos/logo_icon.png"
              width={420}
              height={420}
              alt="Parcerias"
              className="object-contain"
            />
          </div>
        </div>
      </section>

<section className="bg-[#dad1c8] py-24 px-6 sm:px-8">
  <div className="max-w-6xl mx-auto text-center">
    <h2
      className="text-4xl md:text-5xl font-bold text-[#111143] mb-8"
      style={{ fontFamily: "var(--font-campora)" }}
    >
      Parcerias e colaborações.
    </h2>
    <div className="w-full border-t border-[#e86a0c] mb-12" />

    {/* Grid de parceiros */}
    <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-3">
      {/* Parceiro 1 */}
      <div className="bg-white/50 rounded-2xl p-6 shadow-sm hover:shadow-md transition">
  
        <h3
          className="text-xl font-semibold text-[#111143] mb-2"
          style={{ fontFamily: "var(--font-campora)" }}
        >
          Marcelo Carvalho
        </h3>
        <p
          className="text-[#111143] text-sm leading-relaxed"
          style={{ fontFamily: "var(--font-montserrat)" }}
        >
          Economista internacional, especialista em economia global. Parceria para
          palestras online sobre o cenário econômico global e brasileiro.
        </p>
        <a
          href="https://marcelocarvalhomacroeconomist.com/"
          target="_blank"
          className="text-[#e86a0c] text-sm font-semibold mt-3 inline-block"
          style={{ fontFamily: "var(--font-montserrat)" }}
        >
          Ver site →
        </a>
      </div>

      {/* Futuras parcerias */}
      <div className="bg-white/40 rounded-2xl p-6 border border-[#111143]/10">
        <h3
          className="text-lg font-semibold text-[#111143] mb-2"
          style={{ fontFamily: "var(--font-campora)" }}
        >
          Psicologia financeira
        </h3>
        <p
          className="text-[#111143] text-sm leading-relaxed"
          style={{ fontFamily: "var(--font-montserrat)" }}
        >
          Parcerias com especialistas em comportamento financeiro para
          abordar aspectos emocionais das decisões de investimento.
        </p>
      </div>

      <div className="bg-white/40 rounded-2xl p-6 border border-[#111143]/10">
        <h3
          className="text-lg font-semibold text-[#111143] mb-2"
          style={{ fontFamily: "var(--font-campora)" }}
        >
          Consultoria contábil e jurídica
        </h3>
        <p
          className="text-[#111143] text-sm leading-relaxed"
          style={{ fontFamily: "var(--font-montserrat)" }}
        >
          Colaborações com contadores e advogados para tratar de
          planejamento tributário e sucessório.
        </p>
      </div>
    </div>
  </div>
</section>

      {/* Parceria em destaque */}
      {/* <section className="bg-[#dad1c8] py-24 px-6 sm:px-8">
        <div className="max-w-6xl mx-auto text-center">
          <div className="inline-block mb-12 px-4 py-2 rounded-full border border-primary">
            <span
              style={{ fontFamily: "var(--font-urbanist)" }}
              className="text-lg text-[#111143]"
            >
              Destaque
            </span>
          </div>

          <h2
            className="text-4xl md:text-5xl font-bold text-[#111143] mb-8"
            style={{ fontFamily: "var(--font-campora)" }}
          >
            Parceria com <span className="text-primary">Marcelo Carvalho</span>
          </h2>

          <div className="max-w-4xl mx-auto bg-white/60 rounded-3xl p-10 shadow-sm">
            <div className="flex flex-col md:flex-row items-center gap-10">
              <Image
                src="/images/marcelo-carvalho.png"
                alt="Marcelo Carvalho"
                width={180}
                height={180}
                className="rounded-full object-cover"
              />
              <div className="text-left">
                <h3
                  className="text-2xl font-bold text-[#111143] mb-2"
                  style={{ fontFamily: "var(--font-campora)" }}
                >
                  Marcelo Carvalho
                </h3>
                <p
                  className="text-[#111143] text-base leading-relaxed mb-4"
                  style={{ fontFamily: "var(--font-montserrat)" }}
                >
                  Economista internacional renomado, com ampla experiência em macroeconomia
                  global. Parceria para palestras conjuntas sobre o cenário econômico global e
                  regional.
                </p>
                <Link
                  href="https://marcelocarvalhomacroeconomist.com/"
                  target="_blank"
                  className="text-[#e86a0c] font-semibold"
                  style={{ fontFamily: "var(--font-montserrat)" }}
                >
                  Visitar site →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section> */}

      {/* Futura rede de parcerias */}
      <section className="bg-[#111143] py-24 px-6 sm:px-8">
        <div className="max-w-6xl mx-auto text-center">
          <div className="inline-block mb-12 px-4 py-2 rounded-full border border-primary">
            <span
              style={{ fontFamily: "var(--font-urbanist)" }}
              className="text-lg text-[#dad1c8]"
            >
              Expansão da rede
            </span>
          </div>

          <h2
            className="text-4xl md:text-5xl font-bold text-[#dad1c8] mb-16"
            style={{ fontFamily: "var(--font-campora)" }}
          >
            Novas colaborações em desenvolvimento
          </h2>

          <div className="grid md:grid-cols-3 gap-10">
            {futurasParcerias.map((parceria, index) => (
              <div
                key={index}
                className="bg-[#dad1c8]/10 border border-[#dad1c8]/30 rounded-3xl p-8 hover:scale-[1.02] hover:shadow-lg transition-all duration-300"
              >
                <parceria.icon className="text-primary w-10 h-10 mx-auto mb-4" />
                <h3
                  className="text-2xl font-bold text-[#dad1c8] mb-3"
                  style={{ fontFamily: "var(--font-campora)" }}
                >
                  {parceria.title}
                </h3>
                <p
                  className="text-[#dad1c8]/90 text-base leading-relaxed"
                  style={{ fontFamily: "var(--font-montserrat)" }}
                >
                  {parceria.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="bg-[#dad1c8] py-24 px-6 sm:px-8 text-center">
        <div className="max-w-4xl mx-auto">
          <h2
            className="text-4xl md:text-5xl font-bold text-[#111143] mb-6"
            style={{ fontFamily: "var(--font-campora)" }}
          >
            Seja um parceiro na construção de uma educação financeira mais completa.
          </h2>
          <p
            className="text-[#111143]/90 text-lg mb-10"
            style={{ fontFamily: "var(--font-montserrat)" }}
          >
            Se você é um profissional que deseja colaborar em eventos, conteúdo ou consultoria,
            entre em contato conosco para avaliarmos sinergias.
          </p>
          <button className="bg-[#111143] text-[#dad1c8] font-bold px-10 py-4 rounded-full hover:opacity-90 transition flex items-center justify-center gap-2 mx-auto">
            Falar com a equipe
            <Handshake className="text-primary" size={22} />
          </button>
        </div>
      </section>
    </main>
  );
}
