"use client";

import VideoGallery from "@/components/video-gallery";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import NextLink from "next/link";
import { Link } from "react-scroll";

export default function NaMidia() {
  const destaques = [
    {
      id: 1,
      imagem: "images/midia/linkedinmidia.png",
      veiculo: "Linkedin",
      titulo:
        "Em novo episódio do Pauta Econômica, série especial do MUFG Brasil que aborda temas do cenário macroeconômico global, convidamos o nosso Economista Sênior, Mauricio",
      data: "Outubro de 2025",
      link: "https://www.linkedin.com/posts/mufg_mufg-mufgbrasil-pautaeconomica-activity-7204911561151279105-YP7D?utm_source=social_share_send&utm_medium=android_app&rcm=ACoAAAEJpRwBriBACjD3cGTOYQGAsz3OiAajgfY&utm_campaign=whatsapp",
    },
    {
      id: 2,
      imagem: "images/midia/jpnewsmidia.png",
      veiculo: "Jovem Pan News",
      titulo: "Dólar tem forte alta e atinge maior valor em três anos",
      data: "Setembro de 2025",
      link: "https://www.youtube.com/watch?v=MC70uysyYr0",
    },
    {
      id: 3,
      imagem: "images/midia/g1midia.png",
      veiculo: "Globo",
      titulo: "Prévia da inflação, o IPCA-15, fica em 0,4% em dezembro",
      data: "Julho de 2025",
      link: "https://g1.globo.com/sp/mogi-das-cruzes-suzano/videos-diario-tv-2-edicao/video/previa-da-inflacao-o-ipca-15-fica-em-04-em-dezembro-12227153.ghtml",
    },
  ];

  const logos = [
    "images/partners/honda.png",
    "images/partners/toyota.png",
    "images/partners/kumon.png",
  ];

  return (
    <main className="bg-[#111143] text-[#dad1c7] mt-10">
      <section className="flex flex-col justify-center relative lg:py-24 py-16 px-6 sm:px-8 overflow-hidden min-h-screen">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Na <span className="text-primary">mídia</span>
          </h1>
          <p className="text-lg md:text-xl max-w-2xl mx-auto text-[#dad1c7]">
           Confira minhas participações em veículos de comunicação e plataformas digitais em que falo sobre assuntos de economia e educação financeira.
          </p>
          <div className="mt-6 mb-10">
            <iframe
              className="w-full h-[400px]"
              src="https://www.youtube.com/embed/8JHOHuu3_eI?si=5hSd-mNxYOBnUEUs"
              // src="https://www.youtube.com/embed/MC70uysyYr0?si=5tiHcr7xOGkh1G6u"
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            ></iframe>
          </div>
          <div className="flex justify-center">
            <Link
              to="featured"
              spy={true}
              smooth={true}
              offset={-50}
              duration={500}
            >
              <button className="bg-[#dad1c7] text-[#111143]  text-base lg:text-lg cursor-pointer px-12 py-2 rounded-full font-bold hover:opacity-90 transition-all flex items-center justify-center gap-2 shadow-md">
                Ver destaques
                <div className="rounded-full p-[0.1rem] border border-[#111143]">
                  <ArrowRight className="text-primary" size={20} />
                </div>
              </button>
            </Link>
          </div>
        </div>
      </section>

      <section
        id="featured"
        className="bg-[#dad1c7] text-[#111143] py-10 lg:py-20 px-6 sm:px-8"
      >
        <div className="max-w-6xl mx-auto">
          <div className="flex justify-center mb-12 ">
            <div className=" px-6 py-2 rounded-full border border-primary w-fit">
              <span
                style={{ fontFamily: "var(--font-urbanist)" }}
                className="text-lg text-[#111143]"
              >
                Destaques recentes
              </span>
            </div>
          </div>

          <div className="grid md:grid-cols-3 sm:grid-cols-2 gap-10">
            {destaques.map((item) => (
              <div
                key={item.id}
                className="bg-[#111143] rounded-4xl overflow-hidden border border-red-900 flex flex-col"
              >
                <div>
                  <Image
                    src={item.imagem}
                    alt={item.veiculo}
                    width={400}
                    height={250}
                    className="w-full h-64 object-cover  p-6 "
                  />
                </div>
                <div className="px-6">
                  <p className="text-xl font-semibold text-[#dad1c7] mb-1 uppercase">
                    {item.veiculo}
                  </p>
                  <p className="text-lg font-semibold mb-2 text-[#dad1c7]">
                    {item.titulo}
                  </p>
                  <p className="text-sm text-[#dad1c7] mb-4">{item.data}</p>
                </div>
                <div className="flex justify-center mb-5 mt-auto">
                  <NextLink href={item.link} target="_blank">
                    <button className=" text-[#dad1c7] border border-primary text-base lg:text-lg cursor-pointer px-12 py-2 rounded-full font-bold hover:opacity-90 transition-all flex items-center justify-center gap-2 shadow-md">
                      Ver matéria
                    </button>
                  </NextLink>
                </div>
              </div>
            ))}
          </div>
        </div>
  
      </section>

      {/* <VideoGallery/> */}

  <section className="py-20 px-6 sm:px-8 bg-[#111143]">
  <div className="max-w-7xl mx-auto text-center">
    <h2
      className="text-4xl md:text-5xl font-bold mb-12 text-[#dad1c8]"
      style={{ fontFamily: "'Poppins', sans-serif" }}
    >
      Galeria de Aparições
    </h2>

    <div className="grid grid-cols-4 gap-4 auto-rows-[200px] md:auto-rows-[300px]">
      <div className="row-span-2 bg-[#dad1c8] rounded-xl overflow-hidden">
        <Image
          src="/images/aparicoes/aparicao2.jpg"
          width={300}
          height={300}
          alt=""
          className="w-full h-full object-cover"
        />
      </div>

      <div className="bg-[#dad1c8] rounded-xl overflow-hidden">
        <Image
          src="/images/aparicoes/aparicao5.jpg"
          width={300}
          height={300}
          alt=""
          className="w-full h-full object-cover"
        />
      </div>

      <div className="bg-[#dad1c8] rounded-xl overflow-hidden col-span-2">
        <Image
          src="/images/aparicoes/aparicao1.jpg"
          width={300}
          height={300}
          alt=""
          className="w-full h-full object-cover"
        />
      </div>

         <div className="bg-[#dad1c8] rounded-xl overflow-hidden">
        <Image
          src="/images/aparicoes/aparicao3.jpg"
          width={300}
          height={300}
          alt=""
          className="w-full h-full object-cover"
        />
      </div>
         <div className="bg-[#dad1c8] rounded-xl overflow-hidden">
        <Image
          src="/images/aparicoes/aparicao4.jpg"
          width={300}
          height={300}
          alt=""
          className="w-full h-full object-cover"
        />
      </div>
            <div className="bg-[#dad1c8] rounded-xl overflow-hidden">
        <Image
          src="/images/aparicoes/aparicao6.jpg"
          width={300}
          height={300}
          alt=""
          className="w-full h-full object-cover bg-left object-left"
        />
      </div>
                  <div className="bg-[#dad1c8] rounded-xl overflow-hidden col-span-2">
        <Image
          src="/images/aparicoes/aparicao7.png"
          width={300}
          height={300}
          alt=""
          className="w-full h-full object-cover"
        />
      </div>
         <div className="bg-[#dad1c8] rounded-xl overflow-hidden col-span-2">
        <Image
          src="/images/aparicoes/aparicao8.jpg"
          width={300}
          height={300}
          alt=""
         className="w-full h-full object-cover"
        />
      </div>
          <div className="row-span-2 bg-[#dad1c8] rounded-xl overflow-hidden col-span-2">
        <Image
          src="/images/aparicoes/aparicao10.jpg"
          width={300}
          height={300}
          alt=""
          className="w-full h-full object-cover object-top"
        />
      </div>
          
            <div className="bg-[#dad1c8] rounded-xl overflow-hidden col-span-2">
        <Image
          src="/images/aparicoes/aparicao9.png"
          width={300}
          height={300}
          alt=""
             className="w-full h-full object-cover"
        />
      </div>
     
    </div>
  </div>
</section>


      {/* <section className="bg-[#dad1c8] py-24 px-6 min-h-[40vh] flex items-center">
        <div className="max-w-6xl mx-auto flex flex-wrap items-center justify-center gap-24">
          {logos.map((src, i) => (
            <Image
              key={i}
              src={src}
              alt="Logo de veículo"
              width={180}
              height={90}
              className="object-contain opacity-60"
            />
          ))}
        </div>
      </section> */}
    </main>
  );
}
