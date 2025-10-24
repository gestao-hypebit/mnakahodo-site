"use client"

import { Briefcase, Users, Mic } from "lucide-react"

export default function Experience() {
  return (
    <section className="bg-white py-20">
      <div className="container mx-auto px-6 md:px-12 text-center md:text-left max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-8 text-neutral-900 flex items-center justify-center md:justify-start gap-2">
          <Briefcase className="text-[#0A66C2]" size={32} />
          Experiência Profissional
        </h2>

        <p className="text-lg text-neutral-700 mb-8">
          Economista com mais de <strong>20 anos de experiência</strong> em análise econômica, 
          com atuação em empresas e instituições de destaque no Brasil e no exterior, além de ampla experiência 
          como <strong>professor e palestrante</strong>.
        </p>

        <div className="grid md:grid-cols-3 gap-10">
          {/* Coluna 1 - Empresas */}
          <div>
            <h3 className="text-xl font-semibold text-neutral-900 mb-3">💼 Empresas</h3>
            <ul className="list-disc list-inside text-neutral-700 space-y-2 text-base">
              <li>Unibanco</li>
              <li>B3 – Brasil, Bolsa, Balcão</li>
              <li>Datagro (agronegócio)</li>
              <li>Banco MUFG (Japão)</li>
              <li>ABN Amro (Holanda)</li>
              <li>CM Capital Markets (Espanha)</li>
              <li>Kiel Institute (Alemanha)</li>
              <li>Bruegel (Bélgica)</li>
            </ul>
          </div>

          {/* Coluna 2 - Ensino */}
          <div>
            <h3 className="text-xl font-semibold text-neutral-900 mb-3">🎓 Ensino</h3>
            <ul className="list-disc list-inside text-neutral-700 space-y-2 text-base">
              <li>Professor na <strong>ESEG (Grupo Etapa)</strong> — disciplinas de Economia e Educação Financeira</li>
              <li>Professor na <strong>UFRGS</strong> — Microeconomia</li>
              <li>Experiência de <strong>5 anos</strong> com Educação Financeira em empresas</li>
            </ul>
          </div>

          {/* Coluna 3 - Palestras */}
          <div>
            <h3 className="text-xl font-semibold text-neutral-900 mb-3">🎤 Palestras</h3>
            <p className="text-neutral-700 mb-2">
              Palestrante em eventos corporativos no Brasil e América Latina, incluindo:
            </p>
            <ul className="list-disc list-inside text-neutral-700 space-y-2 text-base">
              <li>Honda</li>
              <li>Ajinomoto</li>
              <li>Iharabras</li>
              <li>Toyota</li>
              <li>Daikin</li>
              <li>Mitsubishi</li>
              <li>Nissin Foods</li>
              <li>Prometeon</li>
            </ul>
          </div>
        </div>

        <div className="mt-10">
          <a
            href="/sobre"
            className="inline-flex items-center gap-2 text-[#0A66C2] font-semibold hover:underline"
          >
            <Users size={20} />
            Veja todas as experiências e palestras →
          </a>
        </div>
      </div>
    </section>
  )
}
