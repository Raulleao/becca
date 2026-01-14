"use client"

import { useState, useEffect } from "react"

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
    setIsMobileMenuOpen(false)
  }

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-background/95 backdrop-blur-md shadow-soft py-3" : "bg-transparent py-5"
      }`}
    >
      <div className="container mx-auto px-4">
        <nav className="flex items-center justify-between">
          <a href="#" className="flex items-center">
            <img src="/images/logo.png" alt="Becca Crochês" className="h-12 w-auto" />
          </a>

          <div className="hidden md:flex items-center gap-8">
            <button
              onClick={() => scrollToSection("produtos")}
              className="cursor-pointer text-foreground/80 hover:text-primary transition-colors font-medium"
            >
              Produtos
            </button>
            <button
              onClick={() => scrollToSection("sobre")}
              className="cursor-pointer text-foreground/80 hover:text-primary transition-colors font-medium"
            >
              Sobre
            </button>
            <button
              onClick={() => scrollToSection("contato")}
              className="cursor-pointer px-5 py-2.5 bg-primary text-primary-foreground rounded-full font-medium hover:opacity-90 transition-opacity"
            >
              Contato
            </button>
          </div>

          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 text-foreground cursor-pointer"
          >
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              {isMobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </nav>

        {isMobileMenuOpen && (
          <div className="md:hidden pt-4 pb-6 space-y-4 animate-fade-in">
            <button
              onClick={() => scrollToSection("produtos")}
              className="cursor-pointer block w-full text-left py-2 text-foreground/80 hover:text-primary transition-colors font-medium"
            >
              Produtos
            </button>
            <button
              onClick={() => scrollToSection("sobre")}
              className="cursor-pointer block w-full text-left py-2 text-foreground/80 hover:text-primary transition-colors font-medium"
            >
              Sobre
            </button>
            <button
              onClick={() => scrollToSection("contato")}
              className="cursor-pointer block w-full text-center py-3 bg-primary text-primary-foreground rounded-full font-medium"
            >
              Contato
            </button>
          </div>
        )}
      </div>
    </header>
  )
}

export default Header
