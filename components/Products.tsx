import ProductCard from "./ProductCard"
import Link from "next/link"

const products = [
  {
    image: "/images/Hadassa.png",
    name: "Bolsa Hadassa",
    description: "Trabalhada em fio de malha ou fio náutico",
  },
  {
    image: "/images/Laís.png",
    name: "Minibag Laís",
    description: "Trabalhada em fio de malha",
  },
  {
    image: "/images/Lívia.png",
    name: "Minibag Lívia",
    description: "Trabalhada em fio de malha",
  },
  {
    image: "/images/Joyce.png",
    name: "Bolsa Joyce",
    description: "Trabalhada em fio de malha ou fio náutico",
  },
  {
    image: "/images/Eloina.png",
    name: "Bolsa Eloina",
    description: "Trabalhada em fio barbante",
  },
]

const Products = () => {
  return (
    <section id="produtos" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        
        {/* TÍTULO */}
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-display text-foreground">
            Nossas <span className="text-primary italic">Peças</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Cada peça é confeccionada artesanalmente, garantindo que você terá um acessório único e especial.
          </p>
        </div>

        {/* GRID */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-6 items-stretch">
          {products.map((product, index) => (
            <ProductCard
              key={product.name}
              {...product}
              delay={`animation-delay-${(index + 1) * 100}`}
            />
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <p className="text-muted-foreground mb-4">
            Para ver mais opções, acesse o nosso catálogo completo!
          </p>
          <Link
            href="/catalogo"
            className="inline-flex items-center gap-2 px-6 py-3 border-2 border-accent text-accent rounded-full font-medium hover:bg-accent hover:text-accent-foreground transition-all duration-300 cursor-pointer"
          >
            <span>Visualizar catálogo completo</span>
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </Link>
        </div>

      </div>
    </section>
  )
}

export default Products
