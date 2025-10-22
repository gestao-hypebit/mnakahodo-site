import { ArrowRight, CheckCircle } from "lucide-react"
import Link from "next/link"

export default function ServicosPage() {
  const servicos = [
    {
      id: 1,
      titulo: "Palestras Econômicas Empresariais",
      descricao:
        "Apresentação das perspectivas econômicas no Brasil, América Latina e Mundo com foco em crescimento econômico, inflação, taxa de juros e câmbio.",
      beneficios: [
        "Análise de cenários econômicos atuais",
        "Impactos no setor específico da empresa",
        "Estratégias de adaptação empresarial",
        "Formato presencial ou remoto",
      ],
      preco: "Sob demanda",
    },
    {
      id: 2,
      titulo: "Workshops de Educação Financeira",
      descricao:
        "Programas completos de educação financeira pessoal e familiar com foco em saúde financeira e bem-estar dos colaboradores.",
      beneficios: [
        "Ferramentas práticas de finanças",
        "Economia comportamental aplicada",
        "Planejamento financeiro pessoal",
        "Redução de estresse financeiro",
      ],
      preco: "Sob demanda",
    },
    {
      id: 3,
      titulo: "Consultoria Econômica Estratégica",
      descricao:
        "Análise personalizada do cenário político-econômico e seus impactos específicos no seu negócio e planejamento estratégico.",
      beneficios: [
        "Análise customizada para seu setor",
        "Cenários econômicos futuros",
        "Recomendações estratégicas",
        "Acompanhamento contínuo",
      ],
      preco: "Sob demanda",
    },
    {
      id: 4,
      titulo: "Treinamentos Corporativos",
      descricao:
        "Programas de desenvolvimento para equipes com foco em finanças comportamentais e tomada de decisão econômica.",
      beneficios: [
        "Dinâmicas e gamificação",
        "Simulações personalizadas",
        "Certificação de participação",
        "Materiais exclusivos",
      ],
      preco: "Sob demanda",
    },
  ]

  return (
    <main className="pt-24">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#111143] to-[#040c8c] text-white py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Nossos Serviços</h1>
          <p className="text-xl text-white/80">Soluções em Economia e Educação Financeira</p>
        </div>
      </section>

      {/* Serviços */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="space-y-12">
            {servicos.map((servico) => (
              <div
                key={servico.id}
                className="bg-white border border-[#dad1c8] rounded-lg overflow-hidden hover:shadow-lg transition-shadow"
              >
                <div className="grid md:grid-cols-2 gap-8 p-8">
                  <div>
                    <h3 className="text-2xl font-bold text-[#09080d] mb-4">{servico.titulo}</h3>
                    <p className="text-lg text-[#09080d]/70 mb-6 leading-relaxed">{servico.descricao}</p>
                    <div className="space-y-3">
                      {servico.beneficios.map((beneficio, idx) => (
                        <div key={idx} className="flex items-start gap-3">
                          <CheckCircle className="w-5 h-5 text-[#E86A0C] flex-shrink-0 mt-0.5" />
                          <span className="text-[#09080d]/70">{beneficio}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="bg-gradient-to-br from-[#E86A0C] to-[#111143] text-white rounded-lg p-8 flex flex-col justify-between">
                    <div>
                      <p className="text-white/80 mb-2">Investimento</p>
                      <p className="text-3xl font-bold mb-8">{servico.preco}</p>
                    </div>
                    <Link
                      href="/contato"
                      className="inline-flex items-center justify-center gap-2 bg-white text-[#E86A0C] px-6 py-3 rounded-full font-semibold hover:bg-white/90 transition-colors"
                    >
                      Solicitar Orçamento <ArrowRight size={20} />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* CTA Final */}
          <div className="mt-20 bg-[#f8fafc] border border-[#dad1c8] rounded-lg p-12 text-center">
            <h2 className="text-3xl font-bold text-[#09080d] mb-4">Não Encontrou o Que Procura?</h2>
            <p className="text-[#09080d]/70 mb-8">
              Oferecemos soluções customizadas. Entre em contato para discutir suas necessidades específicas.
            </p>
            <Link
              href="/contato"
              className="inline-flex items-center gap-2 bg-[#E86A0C] text-white px-8 py-3 rounded-full font-semibold hover:bg-[#E86A0C]/90 transition-colors"
            >
              Fale Conosco <ArrowRight size={20} />
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}
