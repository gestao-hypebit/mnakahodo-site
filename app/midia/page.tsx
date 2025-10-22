import { Tv, Radio, Globe, Newspaper, ArrowRight } from "lucide-react"
import Link from "next/link"

export default function MidiaPage() {
  const aparicoes = [
    {
      id: 1,
      tipo: "Jornal",
      titulo: "Análise: Impactos da Taxa de Juros nos Investimentos",
      veiculo: "Jornal Especializado em Economia e Negócios",
      data: "Outubro 2025",
      icon: Newspaper,
      link: "#",
    },
    {
      id: 2,
      tipo: "Artigo",
      titulo: "Educação Financeira: O Caminho para a Independência Econômica",
      veiculo: "Portal de Negócios",
      data: "Setembro 2025",
      icon: Globe,
      link: "#",
    },
    {
      id: 3,
      tipo: "Rádio",
      titulo: "Entrevista: Cenário Econômico e Perspectivas para 2026",
      veiculo: "Rádio Economia",
      data: "Agosto 2025",
      icon: Radio,
      link: "#",
    },
    {
      id: 4,
      tipo: "TV",
      titulo: "Debate: Finanças Pessoais em Tempos de Incerteza",
      veiculo: "Canal de Negócios",
      data: "Julho 2025",
      icon: Tv,
      link: "#",
    },
    {
      id: 5,
      tipo: "Artigo",
      titulo: "Comportamento Financeiro: Como Nossas Emoções Afetam Decisões",
      veiculo: "Revista de Finanças",
      data: "Junho 2025",
      icon: Globe,
      link: "#",
    },
    {
      id: 6,
      tipo: "Jornal",
      titulo: "Coluna: Planejamento Estratégico e Cenário Político-Econômico",
      veiculo: "Jornal Especializado em Economia e Negócios",
      data: "Maio 2025",
      icon: Newspaper,
      link: "#",
    },
  ]

  return (
    <main className="pt-24">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#111143] to-[#040c8c] text-white py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Mídia e Imprensa</h1>
          <p className="text-xl text-white/80">Aparições em TV, Rádio, Jornais e Portais Especializados</p>
        </div>
      </section>

      {/* Aparições */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="space-y-6 mb-16">
            {aparicoes.map((aparicao) => {
              const Icon = aparicao.icon
              return (
                <div
                  key={aparicao.id}
                  className="bg-white border border-[#dad1c8] rounded-lg p-8 hover:shadow-lg transition-shadow"
                >
                  <div className="flex gap-6">
                    <div className="flex-shrink-0">
                      <div className="flex items-center justify-center w-16 h-16 bg-[#E86A0C]/10 rounded-lg">
                        <Icon className="w-8 h-8 text-[#E86A0C]" />
                      </div>
                    </div>
                    <div className="flex-1">
                      <div className="flex items-start justify-between mb-2">
                        <div>
                          <span className="text-xs font-semibold text-[#E86A0C] bg-[#E86A0C]/10 px-3 py-1 rounded-full">
                            {aparicao.tipo}
                          </span>
                          <h3 className="text-xl font-bold text-[#09080d] mt-3 mb-2">{aparicao.titulo}</h3>
                        </div>
                      </div>
                      <p className="text-[#09080d]/70 mb-3">{aparicao.veiculo}</p>
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-[#09080d]/50">{aparicao.data}</span>
                        <Link href={aparicao.link} className="text-[#E86A0C] hover:text-[#E86A0C]/80 transition-colors">
                          <ArrowRight size={20} />
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>

          {/* Estatísticas */}
          <div className="grid md:grid-cols-4 gap-6 mb-16">
            <div className="bg-gradient-to-br from-[#E86A0C] to-[#111143] text-white rounded-lg p-8 text-center">
              <div className="text-4xl font-bold mb-2">50+</div>
              <p className="text-white/80">Artigos Publicados</p>
            </div>
            <div className="bg-gradient-to-br from-[#111143] to-[#040c8c] text-white rounded-lg p-8 text-center">
              <div className="text-4xl font-bold mb-2">15+</div>
              <p className="text-white/80">Aparições em TV</p>
            </div>
            <div className="bg-gradient-to-br from-[#040c8c] to-[#111143] text-white rounded-lg p-8 text-center">
              <div className="text-4xl font-bold mb-2">20+</div>
              <p className="text-white/80">Entrevistas em Rádio</p>
            </div>
            <div className="bg-gradient-to-br from-[#111143] to-[#E86A0C] text-white rounded-lg p-8 text-center">
              <div className="text-4xl font-bold mb-2">100+</div>
              <p className="text-white/80">Veículos Diferentes</p>
            </div>
          </div>

          {/* CTA */}
          <div className="bg-[#f8fafc] border border-[#dad1c8] rounded-lg p-12 text-center">
            <h2 className="text-3xl font-bold text-[#09080d] mb-4">Quer Convidar para Mídia?</h2>
            <p className="text-[#09080d]/70 mb-8">
              Entre em contato para discutir oportunidades de colaboração em mídia e imprensa.
            </p>
            <Link
              href="/contato"
              className="inline-flex items-center gap-2 bg-[#E86A0C] text-white px-8 py-3 rounded-full font-semibold hover:bg-[#E86A0C]/90 transition-colors"
            >
              Entrar em Contato <ArrowRight size={20} />
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}
