"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import Image from "next/image";
import { usePathname } from "next/navigation"; // <-- importa o hook

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isAtTop, setIsAtTop] = useState(true);
  const pathname = usePathname(); // <-- pega a rota atual

  // Detecta se está na primeira dobra (hero)
  useEffect(() => {
    const handleScroll = () => {
      setIsAtTop(window.scrollY < window.innerHeight);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { label: "Início", href: "/" },
    { label: "Sobre Mim", href: "/sobre" },
    { label: "Serviços", href: "/servicos" },
    { label: "Na Mídia", href: "/namidia" },
    { label: "Parcerias", href: "/parcerias" },
    { label: "Palestras", href: "/palestras" },
    { label: "Blog", href: "https://medium.com/@mauricio.nakahodo" },
  ];

  return (
    <header className="fixed top-0 w-full z-50 bg-[#111143] transition-all duration-300">
      <nav className="max-w-7xl mx-auto px-4 lg:px-0 py-6 flex items-center justify-between relative">
        {/* Logo desktop */}
        <Link href="/" className="text-2xl font-bold text-[#040C8C] hidden lg:block">
          <Image src={"/images/logos/logo_full_white.png"} alt="" width={300} height={300} />
        </Link>

        {/* Logo mobile */}
        <Link href="/" className="text-2xl font-bold text-[#040C8C] block lg:hidden">
          <Image src={"/images/logos/logo_full_white.png"} alt="" width={200} height={200} />
        </Link>

        {/* Menu desktop */}
        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item) => {
            const isActive = pathname === item.href; // <-- verifica se é a rota atual
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`text-sm uppercase transition-colors font-medium ${
                  isActive ? "text-primary" : "text-[#dad1c8] hover:text-primary"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        <Link href={"https://wa.me/5511999024090"} target="_blank">
          <button className="bg-[#dad1c8] text-[#111143] text-lg cursor-pointer px-8 py-3 rounded-full font-bold hover:opacity-90 transition-all flex items-center justify-center gap-2 shadow-md">
            Entre em contato
          </button>
         </Link>
        </div>

        {/* Mobile Menu Button */}
        <button className="md:hidden text-[#dad1c8]" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={32} /> : <Menu size={32} />}
        </button>

        {isAtTop && (
          <div className="absolute bottom-0 left-0 right-0 h-px bg-[#dad1c8] transition-opacity duration-300" />
        )}
      </nav>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="absolute top-full left-0 right-0 bg-[#111143] border-t border-[#dad1c8]/20 md:hidden">
          <div className="flex flex-col gap-4 p-4">
            {navItems.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`text-sm transition-colors ${
                    isActive
                      ? "text-primary"
                      : "text-[#dad1c8]/80 hover:text-[#E86A0C]"
                  }`}
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </Link>
              );
            })}
                 <Link href={"https://wa.me/5511999024090"} target="_blank">
            <button className="bg-[#E86A0C] text-white px-6 py-2 rounded-full text-sm font-medium hover:bg-[#E86A0C]/90 transition-colors w-full">
              Me chame para palestrar
            </button>
           </Link>
          </div>
        </div>
      )}
    </header>
  );
}
