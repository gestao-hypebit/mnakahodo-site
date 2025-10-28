"use client"

import Link from "next/link"
import { useState, useEffect } from "react"
import { Menu, X } from "lucide-react"
import Image from "next/image"

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const [isAtTop, setIsAtTop] = useState(true)

  // Detecta se está na primeira dobra (hero)
  useEffect(() => {
    const handleScroll = () => {
      setIsAtTop(window.scrollY < window.innerHeight) // altera esse valor conforme a altura do seu hero
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navItems = [{ label: "Início", href: "/sobre" }]

  return (
    <header className="fixed top-0 w-full z-50 bg-[#111143] transition-all duration-300">
      <nav className="max-w-7xl mx-auto py-6 flex items-center justify-between relative">
        <Link href="/" className="text-2xl font-bold text-[#040C8C]">
          <Image
            src={"/images/logos/logo_full_white.png"}
            alt=""
            width={300}
            height={300}
          />
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm hover:text-primary transition-colors uppercase text-[#dad1c8]"
            >
              {item.label}
            </Link>
          ))}
          <button className="bg-[#dad1c8] text-[#111143] text-lg cursor-pointer px-8 py-3 rounded-full font-bold hover:opacity-90 transition-all flex items-center justify-center gap-2 shadow-md">
            Entre em contato
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-[#dad1c8]"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Linha inferior (aparece só na primeira dobra) */}
        {isAtTop && (
          <div className="absolute bottom-0 left-0 right-0 h-px bg-[#dad1c8] transition-opacity duration-300" />
        )}
      </nav>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="absolute top-full left-0 right-0 bg-[#111143] border-t border-[#dad1c8]/20 md:hidden">
          <div className="flex flex-col gap-4 p-4">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-sm text-[#dad1c8]/80 hover:text-[#E86A0C] transition-colors"
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
    </header>
  )
}
