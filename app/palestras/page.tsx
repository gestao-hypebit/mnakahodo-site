"use client";
import {
  ArrowRight,
  BookOpen,
  CheckCircle,
  Handshake,
  Star,
  TrendingUp,
  Users,
} from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";
import { AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import VideoGallery from "@/components/video-gallery";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";

const formSchema = z.object({
  nome: z.string().min(1, "Por favor, insira seu nome completo"),
   email: z.string().email("Insira um e-mail válido").min(1, "Por favor, insira seu e-mail"),
  telefone: z.string().min(1, "Por favor, insira um número de telefone"),
});

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

export default function PalestrasPage() {
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

    const [loading, setLoading] = useState(false);
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      nome: "",
      email: "",
      telefone: "",
    },
  });

  const resetForm = () => {
    form.reset();
  };

  async function onSubmit(values: any) {
    setLoading(true);

    try {
      const form = new URLSearchParams();
      form.append("nome", values.nome);
      form.append("email", values.email);
      form.append("telefone", values.telefone);

      const response = await fetch(
        "https://script.google.com/macros/s/AKfycby4iMkt3xOw7XczHY0kRf_664WXfi5nUtCDGX4LCa9qVNKxVpPiSrgZrxU10dNB3zAM-g/exec",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
          },
          body: form.toString(),
        }
      );

      if (response.ok) {
        toast.success("Seu contato foi enviado! Retornaremos em até 24h.", {
          style: {
            marginTop: "90px",
          },
        });

        setLoading(false);
        resetForm();
      } else {
        setLoading(false);
        toast.error("Erro ao enviar informações. Tente novamente.");
      }
    } catch (error) {
      console.error("Erro ao enviar formulário:", error);
      setLoading(false);
      toast.error("Erro ao enviar o formulário. Tente novamente mais tarde.");
    }
  }
  return (
    <main className="lg:pt-24 h-auto lg:min-h-screen bg-[#111143] overflow-hidden">
      <section className=" px-4 sm:px-6 lg:px-8 bg-[#111143] lg:min-h-screen flex pb-10 lg:pb-0">
        <div className="max-w-7xl mx-auto w-full">
          <div className="grid md:grid-cols-2 gap-12 items-center h-full">
            <div className="flex flex-col items-center  lg:items-start h-full pt-32">
              <div className="inline-block mb-6 px-4 py-2 rounded-full border border-primary w-fit">
                <span
                  style={{ fontFamily: "var(--font-urbanist)" }}
                  className="text-lg text-[#dad1c8]"
                >
                  Palestras
                </span>
              </div>

              <h1
                className="text-4xl lg:text-5xl font-bold text-[#dad1c8] mb-6 leading-tight text-center lg:text-start text-balance"
                style={{ fontFamily: "var(--font-campora)" }}
              >
                {/* <span className="text-primary font-bold">
                  Transforme {" "}
                </span>
                 a relação da sua equipe com o dinheiro. */}

                 <span className="font-bold text-primary">Análises econômicas</span> e <span className="font-bold text-primary">educação financeira</span> para orientar decisões mais seguras 

              </h1>


              <p
                className="text-base lg:text-lg text-[#dad1c8] mb-8 leading-relaxed text-center lg:text-start text-balance"
                style={{ fontFamily: "var(--font-montserrat)" }}
              >
               Palestras que ajudam empresas e pessoas a planejar melhor e decidir com clareza.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link href={"https://wa.me/5511999024090"} target="_blank">
                  <button className="bg-[#dad1c8] text-[#111143] text-base lg:text-lg cursor-pointer px-8 py-3 rounded-full font-bold hover:opacity-90 transition-all flex items-center justify-center gap-2 shadow-md">
                    Entrar em contato
                    <div className="rounded-full p-[0.1rem] border border-[#111143]">
                      <ArrowRight className="text-primary" size={20} />
                    </div>
                  </button>
                </Link>
              </div>
            </div>

            {/* Imagem */}
            <div className="hidden lg:flex items-center justify-center h-full rounded-2xl">
                {/* <iframe
              className="w-full h-[400px] rounded-3xl"
              src="https://www.youtube.com/embed/8JHOHuu3_eI?si=5hSd-mNxYOBnUEUs"
              // src="https://www.youtube.com/embed/MC70uysyYr0?si=5tiHcr7xOGkh1G6u"
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            ></iframe> */}
            <div className="hidden lg:flex w-full items-center justify-center h-full rounded-2xl">
  <video
    src="/videos/video-palestras.mp4"
    className="w-full h-[400px] rounded-3xl object-cover"
   autoPlay
  muted
  loop
  playsInline
  />
</div>

            </div>
          </div>
        </div>
      </section>
  


   <section className="bg-[#dad1c7] py-10 lg:py-20 px-6 sm:px-8">
  <div className="max-w-6xl mx-auto">
    {/* Selo superior */}
    <div className="text-center mb-10">
      <div className="inline-block px-6 py-2 border border-[#e86a0c] rounded-full">
        <span
          className="text-[#111143] text-base"
          style={{ fontFamily: "var(--font-urbanist)" }}
        >
          Sobre as palestras
        </span>
      </div>
    </div>

    {/* Texto principal */}
    <p
      className="text-center text-xl md:text-2xl text-[#111143] mx-auto leading-relaxed mb-4"
      style={{ fontFamily: "var(--font-montserrat)" }}
    >
     Mais do que apresentar números e gráficos, minhas palestras traduzem o cenário político-econômico do Brasil e do mundo em insights práticos para o planejamento das empresas. Cada encontro conecta tendências macroeconômicas aos desafios reais dos setores de atuação, ajudando líderes e equipes a tomar decisões mais conscientes e estratégicas.
    </p>
    <p
      className="text-center text-xl md:text-2xl text-[#111143] mx-auto leading-relaxed"
      style={{ fontFamily: "var(--font-montserrat)" }}
    >
      Minha outra linha de atuação é levar educação financeira prática aos colaboradores, fortalecendo bem-estar financeiro pessoal, o que se traduz em maior engajamento no ambiente corporativo.
    </p>

    {/* Linha divisória */}
    <hr className="border-t border-primary my-12" />

    {/* Conteúdo principal - duas colunas */}
    <div className="grid md:grid-cols-2 gap-10 items-center">
      {/* Lista de tópicos */}
      <ul
        className="space-y-6 font-bold text-[#111143] text-xl md:text-2xl"
        style={{ fontFamily: "var(--font-montserrat)" }}
      >
        <li>• Educação Financeira Corporativa.</li>
        <li>• Finanças Pessoais na Prática.</li>
        <li>• Palestras Customizadas.</li>
        <li>• Comportamento e Mentalidade Financeira.</li>
      </ul>

      {/* Logo à direita */}
      <div className="hidden lg:flex justify-center md:justify-end">
              <Image
                src="/images/logos/logo-icon-blue.png"
                width={300}
                height={300}
                alt="Foto de perfil do economista"
                className="object-cover"
                priority
              />
      </div>
    </div>
  </div>
</section>

<section className="bg-[#111143] py-16 px-6 sm:px-8">
  <div className="max-w-7xl mx-auto">

    <div className="text-center mb-12">
      <span className="inline-block px-6 py-2 border border-[#e86a0c] rounded-full text-[#dad1c8] text-lg"
        style={{ fontFamily: "var(--font-urbanist)" }}>
        Educação Financeira
      </span>
    </div>

    <h2
      className="text-3xl md:text-4xl font-bold text-[#dad1c8] text-center mb-8 leading-snug"
      style={{ fontFamily: "var(--font-campora)" }}
    >
      Palestras práticas para transformar a relação das pessoas com o dinheiro
    </h2>

    <ul className="grid md:grid-cols-2 gap-8 mt-10">
      <li className="bg-[#dad1c8] text-[#111143] rounded-3xl p-8">
        <h3 className="text-2xl font-bold mb-4" style={{ fontFamily: "var(--font-campora)" }}>
          Finanças Pessoais na Prática - Estrutura para decisões mais seguras
        </h3>
        <ul className="space-y-2 text-lg" style={{ fontFamily: "var(--font-montserrat)" }}>
          <li>• Estruturação do orçamento pessoal</li>
          <li>• Gestão consciente dos gastos</li>
          <li>• Prevenção ao endividamento e construção de reserva de emergência</li>
          <li>• Alinhamento financeiro para metas individuais e familiares</li>
        </ul>
      </li>

      <li className="bg-[#dad1c8] text-[#111143] rounded-3xl p-8">
        <h3 className="text-2xl font-bold mb-4" style={{ fontFamily: "var(--font-campora)" }}>
          Mentalidade e Comportamento Financeiro - Consciência para decisões consistentes
        </h3>
        <ul className="space-y-2 text-lg" style={{ fontFamily: "var(--font-montserrat)" }}>
          <li>• Reconhecimento dos fatores emocionais que influenciam decisões</li>
          <li>• Hábitos que impedem o progresso financeiro</li>
          <li>• Estratégias para tomada de decisão em cenários de incerteza</li>
          <li>• Promoção de práticas financeiras saudáveis e consistentes</li>
        </ul>
        <p className="mt-4 text-lg">
          Pense que equipes com maior consciência e bem-estar financeiro contribuem diretamente para maior foco e estabilidade no ambiente de trabalho
        </p>
      </li>
    </ul>

  </div>
</section>

<section className="bg-[#dad1c7] py-16 px-6 sm:px-8">
  <div className="max-w-7xl mx-auto">

    <div className="text-center mb-12">
      <span className="inline-block px-6 py-2 border border-[#e86a0c] rounded-full text-[#111143] text-lg"
        style={{ fontFamily: "var(--font-urbanist)" }}>
        Economia
      </span>
    </div>

    

    <h2
      className="text-3xl md:text-4xl font-bold text-[#111143] text-center mb-8 leading-snug"
      style={{ fontFamily: "var(--font-campora)" }}
    >
      Palestras estratégicas sobre o cenário econômico para empresas
    </h2>

    <div className="grid lg:grid-cols-2 gap-8 mt-10">

      <div className="bg-[#111143] text-[#dad1c8] rounded-3xl p-8">
        <h3 className="text-2xl font-bold mb-2" style={{ fontFamily: "var(--font-campora)" }}>
          Cenário Econômico Atual
        </h3>
        <p className="mb-4 text-lg">
          Transforme incertezas em clareza com uma leitura direta do que realmente impacta sua empresa.
        </p>
        <ul className="space-y-3 text-lg" style={{ fontFamily: "var(--font-montserrat)" }}>
          <li>• Tendências de juros, inflação e câmbio que afetam custos, preços e investimentos</li>
          <li>• Sinais do mercado de trabalho, consumo e crédito — essenciais para planejar demanda</li>
          <li>• Alertas sobre riscos fiscais e seus efeitos na curva de juros</li>
          <li>• Panorama internacional (EUA, China, Europa) e impacto no Brasil e na América Latina</li>
          <li>• Projeções exclusivas para os próximos meses</li>
        </ul>
        <p className="mt-4 text-lg">
          Decisões melhores começam com informação confiável e análises robustas.
        </p>
      </div>

      <div className="bg-[#111143] text-[#dad1c8] rounded-3xl p-8">
        <h3 className="text-2xl font-bold mb-2" style={{ fontFamily: "var(--font-campora)" }}>
          Impacto Econômico no Setor da Sua Empresa - Cenários sob medida
        </h3>
        <p className="mb-4 text-lg">
          Conecte o macro ao seu mercado para identificar riscos, oportunidades e pontos de atenção antes da concorrência.
        </p>
        <ul className="space-y-3 text-lg" style={{ fontFamily: "var(--font-montserrat)" }}>
          <li>• Estudos personalizados para o seu setor ou segmento</li>
          <li>• Indicadores práticos para orientar pricing, demanda e investimentos</li>
          <li>• Mapeamento de riscos e oportunidades no curto e médio prazo</li>
          <li>• Conexão entre economia e estratégia empresarial</li>
        </ul>
      </div>
      <div className="bg-[#111143] text-[#dad1c8] rounded-3xl p-8 lg:col-span-2">
        <h3 className="text-2xl font-bold mb-2" style={{ fontFamily: "var(--font-campora)" }}>
          Palestra - Economia e Finanças Pessoais
        </h3>
        <p className="mb-4 text-lg">
          Palestra voltada à integração entre análise econômica e decisões individuais de investimento, oferecendo clareza para a construção de estratégias financeiras consistentes.
        </p>
        <ul className="space-y-3 text-lg" style={{ fontFamily: "var(--font-montserrat)" }}>
          <li>• Entendimento do cenário econômico e seus impactos nos investimentos</li>
          <li>• Leitura de juros, inflação, câmbio e tendências relevantes</li>
          <li>• Alocação adequada ao perfil de risco e aos objetivos de vida</li>
          <li>• Estratégias de diversificação e proteção patrimonial</li>
          <li>• Orientações para decisões mais seguras em ambientes voláteis</li>
        </ul>
        <p className="mt-4 text-lg">
          Promove maior consciência financeira e apoia escolhas de investimento alinhadas ao contexto econômico e às metas pessoais.
        </p>
      </div>

    </div>

      <hr className="border-t border-primary my-12" />

 <div className="lg:mt-16  ">
  <h3
    className="text-3xl md:text-4xl font-bold text-[#111143] mb-6"
    style={{ fontFamily: "var(--font-campora)" }}
  >
    Por que contratar estas palestras?
  </h3>

  <ul
    className="space-y-3 text-lg text-[#111143] font-bold"
    style={{ fontFamily: "var(--font-montserrat)" }}
  >
    <li>• Conteúdo sempre atualizado</li>
    <li>• Explicação clara e didática, sem jargões</li>
    <li>• Personalização total ao momento pessoal e da empresa</li>
    <li>• Experiência de mais de 20 anos em economia e educação financeira</li>
  </ul>

  <p
    className="mt-6 text-xl leading-relaxed text-[#111143] font-bold"
    style={{ fontFamily: "var(--font-montserrat)" }}
  >
    Leve para sua equipe uma visão econômica e de educação financeira que gera resultados — não apenas informação.
  </p>
</div>



  </div>
</section>


<VideoGallery/>


     <section className="w-full bg-[#e7dfd6] py-10 lg:py-20 px-6 sm:px-8">
      {/* Título */}
      <div className="text-center mb-10 lg:mb-14">
        <h2 className="text-4xl md:text-5xl font-bold text-[#111143]">
          Depoimentos e Resultados
        </h2>
      </div>

      {/* Cards */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">
        {[1, 2, 3].map((i) => (
          <div
            key={i}
            className="bg-[#111143] text-[#dad1c8] rounded-[2.5rem] px-10 py-14 flex flex-col items-center text-center shadow-xl"
          >
            {/* Estrelas */}
            <div className="flex gap-2 mb-6">
              {[1, 2, 3, 4, 5].map((s) => (
                <Star key={s} className="text-[#dad1c8] fill-[#dad1c8]" size={28} />
              ))}
            </div>

            {/* Depoimento */}
            <p className="text-lg italic leading-relaxed mb-10">
              “Uma palestra leve e transformadora. Nossa equipe saiu motivada a repensar
              o consumo e planejar melhor o futuro.”
            </p>

            {/* Autor */}
            <p className="text-lg"><span className="font-bold">João Silva,</span> <span className="">Diretor de RH</span></p>
            {/* <p className="text-base mt-1">Diretor de RH</p> */}
            <p className="text-base font-semibold mt-2">Empresa X</p>
          </div>
        ))}
      </div>
    </section>

     <section className="w-full bg-[#0a0d45] py-10 lg:py-20 px-6 sm:px-8">
      <div className="max-w-3xl mx-auto text-center">

        <h2 className="text-3xl md:text-5xl font-bold text-[#dad1c8] leading-snug mb-12">
          Quer levar essa <span className="text-[#ff8c32]">experiência</span> para sua
          empresa, escola ou evento?
        </h2>

        {/* Formulário */}
       <form onSubmit={form.handleSubmit(onSubmit)} className="flex flex-col gap-8 mt-6">

  {/* Nome */}
  <div className="flex flex-col text-left">
    <label className="text-[#dad1c8] text-lg mb-2">Nome</label>
    <input
      {...form.register("nome")}
      type="text"
      className="bg-transparent border border-[#dad1c8] text-[#dad1c8] px-4 py-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#ff8c32] transition"
    />
    {form.formState.errors.nome && (
      <p className="text-red-300 text-sm mt-1">
        {form.formState.errors.nome.message}
      </p>
    )}
  </div>

  {/* Email */}
  <div className="flex flex-col text-left">
    <label className="text-[#dad1c8] text-lg mb-2">E-mail</label>
    <input
      {...form.register("email")}
      type="email"
      className="bg-transparent border border-[#dad1c8] text-[#dad1c8] px-4 py-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#ff8c32] transition"
    />
    {form.formState.errors.email && (
      <p className="text-red-300 text-sm mt-1">
        {form.formState.errors.email.message}
      </p>
    )}
  </div>

  {/* Telefone */}
  <div className="flex flex-col text-left">
    <label className="text-[#dad1c8] text-lg mb-2">Telefone</label>
    <input
      {...form.register("telefone")}
      type="text"
      className="bg-transparent border border-[#dad1c8] text-[#dad1c8] px-4 py-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#ff8c32] transition"
    />
    {form.formState.errors.telefone && (
      <p className="text-red-300 text-sm mt-1">
        {form.formState.errors.telefone.message}
      </p>
    )}
  </div>

  {/* Botão */}
  <button
    type="submit"
    disabled={loading}
    className="bg-[#dad1c8] text-[#0a0d45] font-semibold text-lg py-3 rounded-xl hover:opacity-90 transition cursor-pointer disabled:opacity-50"
  >
    {loading ? "Enviando..." : "Enviar"}
  </button>
</form>

      </div>
    </section>
    </main>
  );
}
