import { ArrowRight, Mail, Phone } from "lucide-react"

export default function CTA() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-[#111143]">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-primary-foreground mb-6 text-balance"  style={{ fontFamily: "var(--font-campora)" }}>
          Pronto para transformar sua empresa?
        </h2>
        <p  style={{ fontFamily: "var(--font-montserrat)" }} className="text-lg text-primary-foreground/90 mb-8 leading-relaxed text-balance">
          Entre em contato conosco para solicitar uma palestra, workshop ou consultoria especializada.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <button className="bg-primary-foreground cursor-pointer text-[#040C8C] px-8 py-3 rounded-full font-medium hover:bg-primary-foreground/90 transition-colors flex items-center justify-center gap-2">
            Me chame para palestrar <ArrowRight size={18} />
          </button>
          <button className="border-2 border-primary-foreground cursor-pointer text-primary-foreground px-8 py-3 rounded-full font-medium hover:bg-primary-foreground/10 transition-colors">
            Solicitar Consultoria
          </button>
        </div>

        <div className="grid sm:grid-cols-2 gap-8 pt-8 border-t border-primary-foreground/20">
          <div className="flex items-center justify-center gap-3">
            <Mail className="text-primary-foreground" size={20} />
            <div className="text-left">
              <p className="text-sm text-primary-foreground/70">Email</p>
              <p className="text-primary-foreground font-medium">mauricio.nakahodo@gmail.com</p>
            </div>
          </div>
          <div className="flex items-center justify-center gap-3">
            <Phone className="text-primary-foreground" size={20} />
            <div className="text-left">
              <p className="text-sm text-primary-foreground/70">Telefone</p>
              <p className="text-primary-foreground font-medium">(11) 99902-4090</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
