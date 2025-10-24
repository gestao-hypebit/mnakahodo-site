"use client"

import Link from "next/link"
import { useState } from "react"
import { Menu, X } from "lucide-react"
import Image from "next/image"

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)

  const navItems = [
        { label: "Início", href: "/sobre" },
    // { label: "Sobre", href: "/sobre" },
    // { label: "Serviços", href: "/servicos" },
    // { label: "Portfólio", href: "/portfolio" },
    // { label: "Mídia", href: "/midia" },
    // { label: "Livros", href: "/livros" },
    // { label: "Contato", href: "/contato" },
  ]
// #fefffa
// #dad1c8
  return (
    <header className="fixed top-0 w-full  backdrop-blur-sm border-b border-border z-50 bg-[#fefffa]">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex items-center justify-between">
        <Link href="/" className="text-2xl font-bold text-[#040C8C]">
          <Image src={"/images/logos/logo_full_blue.png"} className="  " alt="" width={250} height={250} />
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm text-foreground/70 hover:text-[#040C8C] transition-colors"
            >
              {item.label}
            </Link>
          ))}
          <button className="bg-[#040C8C] text-white px-6 py-2 cursor-pointer rounded-full text-sm font-medium hover:bg-[#040C8C]/90 transition-colors">
            Entre em contato
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="absolute top-full left-0 right-0 bg-background border-b border-border md:hidden">
            <div className="flex flex-col gap-4 p-4">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-sm text-foreground/70 hover:text-[#E86A0C] transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
              <button className="bg-[#E86A0C] text-white px-6 py-2 rounded-full text-sm font-medium hover:bg-[#E86A0C]/90 transition-colors w-full">
                Me chame para palestrar
              </button>
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}
