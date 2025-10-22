import { BookOpen, ArrowRight, Calendar } from "lucide-react"
import Link from "next/link"

export default function LivrosPage() {
  return (
    <main className="pt-24">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#111143] to-[#040c8c] text-white py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Livros</h1>
          <p className="text-xl text-white/80">Conhecimento em Economia e Educação Financeira</p>
        </div>
      </section>

      {/* Livro em Desenvolvimento */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
            <div className="bg-gradient-to-br from-[#E86A0C] to-[#111143] rounded-lg p-12 text-white flex flex-col items-center justify-center min-h-96">
              <BookOpen size={80} className="mb-6 opacity-80" />
              <p className="text-center text-lg">Capa do Livro em Desenvolvimento</p>
            </div>
            <div>
              <span className="text-sm font-semibold text-[#E86A0C] bg-[#E86A0C]/10 px-4 py-2 rounded-full inline-block mb-4">
                Em Desenvolvimento
              </span>
              <h2 className="text-4xl font-bold text-[#09080d] mb-6">Finanças Pessoais: Do Caos ao Controle</h2>
              <p className="text-lg text-[#09080d]/70 mb-6 leading-relaxed">
                Um guia prático e envolvente que transforma conceitos complexos de finanças pessoais em estratégias
                aplicáveis no dia a dia. Este livro integra economia comportamental, organização financeira,
                investimentos e planejamento de vida.
              </p>
              <div className="space-y-4 mb-8">
                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center w-10 h-10 bg-[#E86A0C]/10 rounded-full">
                      <span className="text-[#E86A0C] font-bold">✓</span>
                    </div>
                  </div>
                  <div>
                    <h3 className="font-bold text-[#09080d] mb-1">Didática Acessível</h3>
                    <p className="text-[#09080d]/70">Conceitos complexos explicados de forma clara e prática</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center w-10 h-10 bg-[#E86A0C]/10 rounded-full">
                      <span className="text-[#E86A0C] font-bold">✓</span>
                    </div>
                  </div>
                  <div>
                    <h3 className="font-bold text-[#09080d] mb-1">Exercícios Práticos</h3>
                    <p className="text-[#09080d]/70">Atividades para aplicar o aprendizado na sua vida</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center w-10 h-10 bg-[#E86A0C]/10 rounded-full">
                      <span className="text-[#E86A0C] font-bold">✓</span>
                    </div>
                  </div>
                  <div>
                    <h3 className="font-bold text-[#09080d] mb-1">Casos Reais</h3>
                    <p className="text-[#09080d]/70">Exemplos práticos de situações financeiras comuns</p>
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-4 p-4 bg-[#f8fafc] rounded-lg border border-[#dad1c8]">
                <Calendar className="text-[#E86A0C]" size={24} />
                <div>
                  <p className="text-sm text-[#09080d]/70">Lançamento Previsto</p>
                  <p className="font-bold text-[#09080d]">Primeiro Semestre de 2026</p>
                </div>
              </div>
            </div>
          </div>

          {/* Newsletter para Notificação */}
          <div className="bg-gradient-to-r from-[#111143] to-[#040c8c] text-white rounded-lg p-12 text-center">
            <h2 className="text-3xl font-bold mb-4">Seja o Primeiro a Saber</h2>
            <p className="text-white/80 mb-8">
              Inscreva-se para receber notificações sobre o lançamento do livro e ganhe um desconto exclusivo.
            </p>
            <div className="flex gap-2 max-w-md mx-auto">
              <input
                type="email"
                placeholder="seu@email.com"
                className="flex-1 px-4 py-3 rounded-full text-[#09080d] focus:outline-none"
              />
              <button className="bg-[#E86A0C] text-white px-8 py-3 rounded-full font-semibold hover:bg-[#E86A0C]/90 transition-colors">
                Notificar
              </button>
            </div>
          </div>

          {/* Sobre o Autor */}
          <div className="mt-20 bg-[#f8fafc] border border-[#dad1c8] rounded-lg p-12">
            <h2 className="text-3xl font-bold text-[#09080d] mb-6">Sobre o Autor</h2>
            <p className="text-lg text-[#09080d]/70 leading-relaxed mb-6">
              Com mais de 20 anos de experiência no mercado financeiro e como educador, o autor traz uma perspectiva
              única que combina análise econômica profunda com didática acessível. Sua paixão é transformar a forma como
              as pessoas entendem e lidam com suas finanças.
            </p>
            <Link
              href="/sobre"
              className="inline-flex items-center gap-2 text-[#E86A0C] hover:text-[#E86A0C]/80 transition-colors font-semibold"
            >
              Conheça Mais Sobre o Autor <ArrowRight size={20} />
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}
