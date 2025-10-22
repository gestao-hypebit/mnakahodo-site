import { Mail, Phone, MapPin } from "lucide-react"

export default function ContatoPage() {
  return (
    <main className="pt-24">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#111143] to-[#040c8c] text-white py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Entre em Contato</h1>
          <p className="text-xl text-white/80">Vamos conversar sobre como podemos ajudar você</p>
        </div>
      </section>

      {/* Contato */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 mb-16">
            {/* Formulário */}
            <div>
              <h2 className="text-3xl font-bold text-[#09080d] mb-8">Envie uma Mensagem</h2>
              <form className="space-y-6">
                <div>
                  <label className="block text-sm font-semibold text-[#09080d] mb-2">Nome</label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 border border-[#dad1c8] rounded-lg focus:outline-none focus:border-[#E86A0C]"
                    placeholder="Seu nome"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-[#09080d] mb-2">Email</label>
                  <input
                    type="email"
                    className="w-full px-4 py-3 border border-[#dad1c8] rounded-lg focus:outline-none focus:border-[#E86A0C]"
                    placeholder="seu@email.com"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-[#09080d] mb-2">Empresa</label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 border border-[#dad1c8] rounded-lg focus:outline-none focus:border-[#E86A0C]"
                    placeholder="Nome da empresa"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-[#09080d] mb-2">Assunto</label>
                  <select className="w-full px-4 py-3 border border-[#dad1c8] rounded-lg focus:outline-none focus:border-[#E86A0C]">
                    <option>Selecione um assunto</option>
                    <option>Palestras Econômicas</option>
                    <option>Workshops de Educação Financeira</option>
                    <option>Consultoria Estratégica</option>
                    <option>Treinamentos Corporativos</option>
                    <option>Mídia e Imprensa</option>
                    <option>Outro</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-semibold text-[#09080d] mb-2">Mensagem</label>
                  <textarea
                    rows={5}
                    className="w-full px-4 py-3 border border-[#dad1c8] rounded-lg focus:outline-none focus:border-[#E86A0C]"
                    placeholder="Sua mensagem"
                  />
                </div>
                <button className="w-full bg-[#E86A0C] text-white px-6 py-3 rounded-full font-semibold hover:bg-[#E86A0C]/90 transition-colors">
                  Enviar Mensagem
                </button>
              </form>
            </div>

            {/* Informações de Contato */}
            <div>
              <h2 className="text-3xl font-bold text-[#09080d] mb-8">Informações de Contato</h2>
              <div className="space-y-8">
                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center w-12 h-12 bg-[#E86A0C]/10 rounded-lg">
                      <Mail className="w-6 h-6 text-[#E86A0C]" />
                    </div>
                  </div>
                  <div>
                    <h3 className="font-bold text-[#09080d] mb-1">Email</h3>
                    <p className="text-[#09080d]/70">contato@mnakahodo.com.br</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center w-12 h-12 bg-[#E86A0C]/10 rounded-lg">
                      <Phone className="w-6 h-6 text-[#E86A0C]" />
                    </div>
                  </div>
                  <div>
                    <h3 className="font-bold text-[#09080d] mb-1">Telefone</h3>
                    <p className="text-[#09080d]/70">(11) 9999-9999</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center w-12 h-12 bg-[#E86A0C]/10 rounded-lg">
                      <MapPin className="w-6 h-6 text-[#E86A0C]" />
                    </div>
                  </div>
                  <div>
                    <h3 className="font-bold text-[#09080d] mb-1">Localização</h3>
                    <p className="text-[#09080d]/70">São Paulo, SP - Brasil</p>
                  </div>
                </div>

                {/* Redes Sociais */}
                <div className="pt-8 border-t border-[#dad1c8]">
                  <h3 className="font-bold text-[#09080d] mb-4">Redes Sociais</h3>
                  <div className="flex gap-4">
                    <a
                      href="#"
                      className="w-10 h-10 bg-[#E86A0C]/10 rounded-lg flex items-center justify-center text-[#E86A0C] hover:bg-[#E86A0C] hover:text-white transition-colors"
                    >
                      f
                    </a>
                    <a
                      href="#"
                      className="w-10 h-10 bg-[#E86A0C]/10 rounded-lg flex items-center justify-center text-[#E86A0C] hover:bg-[#E86A0C] hover:text-white transition-colors"
                    >
                      𝕏
                    </a>
                    <a
                      href="#"
                      className="w-10 h-10 bg-[#E86A0C]/10 rounded-lg flex items-center justify-center text-[#E86A0C] hover:bg-[#E86A0C] hover:text-white transition-colors"
                    >
                      in
                    </a>
                    <a
                      href="#"
                      className="w-10 h-10 bg-[#E86A0C]/10 rounded-lg flex items-center justify-center text-[#E86A0C] hover:bg-[#E86A0C] hover:text-white transition-colors"
                    >
                      ▶
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
