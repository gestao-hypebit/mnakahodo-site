import { Star } from "lucide-react"

const testimonials = [
  {
    name: "João Silva",
    role: "Diretor Executivo",
    company: "Empresa XYZ",
    text: "A palestra foi excelente! Conseguiu transformar conceitos complexos em aprendizados práticos que toda a equipe compreendeu.",
    rating: 5,
  },
  {
    name: "Maria Santos",
    role: "Gerente de RH",
    company: "Banco ABC",
    text: "O workshop de educação financeira foi um sucesso. Os colaboradores saíram com ferramentas reais para melhorar sua saúde financeira.",
    rating: 5,
  },
  {
    name: "Carlos Oliveira",
    role: "CFO",
    company: "Tech Solutions",
    text: "Profissional altamente qualificado. A consultoria agregou muito valor ao nosso planejamento estratégico.",
    rating: 5,
  },
]

export default function Testimonials() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-[#fefffa]">
      <div className="max-w-7xl mx-auto">
        <div className=" mb-16">
           <div className="inline-block mb-6 px-4 py-2 bg-primary/10 rounded-full">
              <span  style={{ fontFamily: "var(--font-urbanist)" }} className="text-lg text-primary font-medium">
                Depoimentos
              </span>
            </div>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4 text-balance">
            <span className="">O que dizem sobre</span> <span className="">nosso trabalho</span>
          </h2>
          <p className="text-lg text-foreground/60 max-w-2xl text-balance">
            Depoimentos de clientes satisfeitos
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="p-8 rounded-xl border border-border bg-background hover:border-primary/50 transition-all duration-300"
            >
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} size={16} className="fill-primary text-primary" />
                ))}
              </div>
              <p className="text-foreground/70 mb-6 leading-relaxed italic">"{testimonial.text}"</p>
              <div>
                <p className="font-bold text-foreground">{testimonial.name}</p>
                <p className="text-sm text-foreground/60">{testimonial.role}</p>
                <p className="text-sm text-foreground/50">{testimonial.company}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
