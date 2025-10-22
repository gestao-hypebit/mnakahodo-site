import { Calendar, ArrowRight } from "lucide-react"
import Link from "next/link"

export default function ArtigosPage() {
  const artigos = [
    {
      id: 1,
      titulo: "Os Impactos da Inflação no Planejamento Financeiro Pessoal",
      data: "15 de Outubro, 2025",
      categoria: "Finanças Pessoais",
      resumo: "Entenda como a inflação afeta suas decisões financeiras e estratégias para proteger seu patrimônio.",
      link: "#",
    },
    {
      id: 2,
      titulo: "Cenário Econômico 2025: Perspectivas para Empresas",
      data: "10 de Outubro, 2025",
      categoria: "Economia Empresarial",
      resumo: "Análise das tendências econômicas e como as empresas devem se preparar para os próximos meses.",
      link: "#",
    },
    {
      id: 3,
      titulo: "Educação Financeira: Por Que Começar Cedo?",
      data: "05 de Outubro, 2025",
      categoria: "Educação Financeira",
      resumo: "Descubra por que a educação financeira desde cedo é fundamental para o sucesso financeiro futuro.",
      link: "#",
    },
    {
      id: 4,
      titulo: "Taxa de Câmbio e Seus Efeitos nos Negócios Internacionais",
      data: "28 de Setembro, 2025",
      categoria: "Economia Empresarial",
      resumo: "Como as variações cambiais impactam empresas que atuam no mercado internacional.",
      link: "#",
    },
    {
      id: 5,
      titulo: "Comportamento Financeiro: Emoções vs. Decisões Racionais",
      data: "20 de Setembro, 2025",
      categoria: "Finanças Comportamentais",
      resumo: "Explore como nossas emoções influenciam decisões financeiras e como tomar melhores escolhas.",
      link: "#",
    },
    {
      id: 6,
      titulo: "Planejamento Estratégico: Alinhando Economia e Negócios",
      data: "15 de Setembro, 2025",
      categoria: "Estratégia Empresarial",
      resumo: "Como integrar análise econômica no planejamento estratégico da sua empresa.",
      link: "#",
    },
  ]

  return (
    <main className="pt-24">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#111143] to-[#040c8c] text-white py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Artigos e Insights</h1>
          <p className="text-xl text-white/80">Análises econômicas e dicas de educação financeira</p>
        </div>
      </section>

      {/* Artigos Grid */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {artigos.map((artigo) => (
              <article
                key={artigo.id}
                className="bg-white border border-[#dad1c8] rounded-lg overflow-hidden hover:shadow-lg transition-shadow"
              >
                <div className="p-8">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="text-xs font-semibold text-[#E86A0C] bg-[#E86A0C]/10 px-3 py-1 rounded-full">
                      {artigo.categoria}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-[#09080d] mb-3 line-clamp-2">{artigo.titulo}</h3>
                  <p className="text-[#09080d]/70 mb-4 line-clamp-2">{artigo.resumo}</p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2 text-sm text-[#09080d]/50">
                      <Calendar size={16} />
                      {artigo.data}
                    </div>
                    <Link href={artigo.link} className="text-[#E86A0C] hover:text-[#E86A0C]/80 transition-colors">
                      <ArrowRight size={20} />
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>

          {/* Newsletter CTA */}
          <div className="bg-gradient-to-r from-[#111143] to-[#040c8c] text-white rounded-lg p-12 text-center">
            <h2 className="text-3xl font-bold mb-4">Receba Novos Artigos</h2>
            <p className="text-white/80 mb-6">
              Inscreva-se para receber análises econômicas e dicas de educação financeira diretamente no seu email.
            </p>
            <div className="flex gap-2 max-w-md mx-auto">
              <input
                type="email"
                placeholder="seu@email.com"
                className="flex-1 px-4 py-3 rounded-full text-[#09080d] focus:outline-none"
              />
              <button className="bg-[#E86A0C] text-white px-8 py-3 rounded-full font-semibold hover:bg-[#E86A0C]/90 transition-colors">
                Inscrever
              </button>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
