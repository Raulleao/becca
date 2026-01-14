"use client"

interface ProductCardProps {
  image: string
  name: string
  description: string
  delay?: string
}

const ProductCard = ({ image, name, description, delay = "" }: ProductCardProps) => {
  const handleWhatsApp = () => {
    const message = `Olá! Vi a peça "${name}" no site e gostaria de saber mais sobre preço e disponibilidade!`
    window.open(
      `https://wa.me/5567981761398?text=${encodeURIComponent(message)}`,
      "_blank"
    )
  }

  return (
    <div className={`group opacity-0 animate-fade-up h-full ${delay}`}>
      <div className="bg-card rounded-2xl overflow-hidden shadow-soft hover:shadow-hover transition-all duration-500 hover:-translate-y-2 flex flex-col h-full min-h-[420px]">

        {/* IMAGEM */}
        <div className="relative h-72 overflow-hidden bg-white flex items-center justify-center p-4">
          <img
            src={image || "/placeholder.svg"}
            alt={name}
            className="max-w-full max-h-full object-contain transition-transform duration-700 group-hover:scale-110"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-foreground/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

          <button
            onClick={handleWhatsApp}
            className="absolute bottom-4 left-1/2 -translate-x-1/2 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 px-6 py-2.5 bg-background text-foreground rounded-full text-sm font-medium shadow-card flex items-center gap-2"
          >
            <svg className="w-4 h-4 text-primary" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347" />
            </svg>
            Quero essa!
          </button>
        </div>

        {/* TEXTO */}
        <div className="p-5 flex-1 flex flex-col justify-between">
          <div>
            <h3 className="font-display text-xl text-foreground mb-2">{name}</h3>
            <p className="text-sm text-muted-foreground line-clamp-2">{description}</p>
          </div>
        </div>

      </div>
    </div>
  )
}

export default ProductCard
