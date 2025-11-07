import Link from "next/link"
import { Mail, Linkedin, Twitter, Instagram } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-foreground text-background py-6 lg:py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          <div>
            <h3 className="text-xl font-bold mb-4">MNAKAHODO</h3>
            <p className="text-background/70 text-sm leading-relaxed">
              Consultoria em economia e educação financeira com mais de 20 anos de experiência.
            </p>
          </div>

          <div>
            <h4 className="font-bold mb-4">Navegação</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/sobre" className="text-background/70 hover:text-background transition-colors">
                  Sobre
                </Link>
              </li>
              <li>
                <Link href="/servicos" className="text-background/70 hover:text-background transition-colors">
                  Serviços
                </Link>
              </li>
              <li>
                <Link href="/portfolio" className="text-background/70 hover:text-background transition-colors">
                  Portfólio
                </Link>
              </li>
              <li>
                <Link href="/midia" className="text-background/70 hover:text-background transition-colors">
                  Mídia
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-4">Recursos</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/livros" className="text-background/70 hover:text-background transition-colors">
                  Livros
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-background/70 hover:text-background transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/contato" className="text-background/70 hover:text-background transition-colors">
                  Contato
                </Link>
              </li>
              <li>
                <Link href="/privacidade" className="text-background/70 hover:text-background transition-colors">
                  Privacidade
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-4">Conecte-se</h4>
            <div className="flex gap-4">
              <a href="#" className="text-background/70 hover:text-background transition-colors">
                <Linkedin size={20} />
              </a>
              <a href="#" className="text-background/70 hover:text-background transition-colors">
                <Instagram size={20} />
              </a>
              <a
                href="mailto:contato@mnakahodo.com.br"
                className="text-background/70 hover:text-background transition-colors"
              >
                <Mail size={20} />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-background/20 pt-8 flex flex-col sm:flex-row justify-between items-center text-sm text-background/60">
          <p>&copy; 2025 MNAKAHODO. Todos os direitos reservados.</p>
          {/* <div className="flex gap-6 mt-4 sm:mt-0">
            <Link href="/privacidade" className="hover:text-background transition-colors">
              Política de Privacidade
            </Link>
            <Link href="/termos" className="hover:text-background transition-colors">
              Termos de Uso
            </Link>
          </div> */}
        </div>
      </div>
    </footer>
  )
}
