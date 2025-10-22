import { ArrowRight, Award, BookOpen, Users } from "lucide-react"
import Link from "next/link"

export default function SobrePage() {
  return (
    <main className="pt-24">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#111143] to-[#040c8c] text-white py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Sobre a MNAKAHODO</h1>
          <p className="text-xl text-white/80">Economia e Finanças com Didática e Profissionalismo</p>
        </div>
      </section>

      {/* Sobre o Profissional */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h2 className="text-4xl font-bold text-[#09080d] mb-6">Quem Somos</h2>
              <p className="text-lg text-[#09080d]/70 mb-4 leading-relaxed">
                A MNAKAHODO é uma consultoria especializada em economia e finanças, fundada por um economista com mais
                de 20 anos de experiência no mercado financeiro.
              </p>
              <p className="text-lg text-[#09080d]/70 mb-4 leading-relaxed">
                Nossa missão é transformar conceitos complexos de economia e finanças em aprendizados claros,
                envolventes e aplicáveis no dia a dia de empresas e pessoas.
              </p>
              <p className="text-lg text-[#09080d]/70 leading-relaxed">
                Combinamos expertise técnica com didática diferenciada, criando experiências de aprendizado memoráveis e
                impactantes.
              </p>
            </div>
            <div className="bg-gradient-to-br from-[#E86A0C] to-[#111143] rounded-lg p-8 text-white">
              <div className="space-y-6">
                <div>
                  <div className="text-4xl font-bold mb-2">20+</div>
                  <p className="text-white/80">Anos de experiência no mercado financeiro</p>
                </div>
                <div>
                  <div className="text-4xl font-bold mb-2">500+</div>
                  <p className="text-white/80">Profissionais impactados através de palestras</p>
                </div>
                <div>
                  <div className="text-4xl font-bold mb-2">50+</div>
                  <p className="text-white/80">Empresas atendidas com consultoria</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Diferenciais */}
      <section className="bg-[#f8fafc] py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-[#09080d] mb-12 text-center">Nossos Diferenciais</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-lg border border-[#dad1c8]">
              <Award className="w-12 h-12 text-[#E86A0C] mb-4" />
              <h3 className="text-xl font-bold text-[#09080d] mb-3">Experiência Sólida</h3>
              <p className="text-[#09080d]/70">
                Economista com mais de 20 anos acompanhando tendências, cenários e impactos econômicos nos negócios e
                investimentos.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg border border-[#dad1c8]">
              <BookOpen className="w-12 h-12 text-[#E86A0C] mb-4" />
              <h3 className="text-xl font-bold text-[#09080d] mb-3">Didática Diferenciada</h3>
              <p className="text-[#09080d]/70">
                Professor de economia e educação financeira com ampla experiência em transformar conceitos complexos em
                aprendizados claros e aplicáveis.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg border border-[#dad1c8]">
              <Users className="w-12 h-12 text-[#E86A0C] mb-4" />
              <h3 className="text-xl font-bold text-[#09080d] mb-3">Abordagem Completa</h3>
              <p className="text-[#09080d]/70">
                Integro economia comportamental, organização financeira, investimentos e planejamento de vida em
                metodologia adaptada a diferentes perfis.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg border border-[#dad1c8]">
              <Award className="w-12 h-12 text-[#E86A0C] mb-4" />
              <h3 className="text-xl font-bold text-[#09080d] mb-3">Interatividade</h3>
              <p className="text-[#09080d]/70">
                Dinâmicas, quizzes, gamificação e simulações personalizadas promovem maior retenção de conteúdo e
                participação ativa.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gradient-to-r from-[#111143] to-[#040c8c] text-white py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Pronto para transformar sua empresa?</h2>
          <p className="text-lg text-white/80 mb-8">Conheça nossos serviços e veja como podemos ajudar seu negócio.</p>
          <Link
            href="/servicos"
            className="inline-flex items-center gap-2 bg-[#E86A0C] text-white px-8 py-3 rounded-full font-semibold hover:bg-[#E86A0C]/90 transition-colors"
          >
            Explorar Serviços <ArrowRight size={20} />
          </Link>
        </div>
      </section>
    </main>
  )
}
