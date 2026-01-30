"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

const bolsas = [
  {
    image: "/images/Hadassa.png",
    name: "Bolsa Hadassa",
    price: "R$ 85,00",
    description:
      "Trabalhada em fio de malha ou fio náutico; Tamanho pequeno - uso para saídas ou coisas básicas; Alça presa com mosquetão e fecho de imã.",
  },
  {
    image: "/images/Laís.png",
    name: "Minibag Laís",
    price: "R$ 80,00",
    description:
      "Trabalhada em fio de malha; Tamanho bem pequeno - uso básico como celular, maquiagem; Fecho de imã.",
  },
  {
    image: "/images/Lívia.png",
    name: "Minibag Lívia",
    price: "R$ 80,00",
    description:
      "Trabalhada em fio de malha; Tamanho bem pequeno - uso básico como celular, maquiagem; Fecho de imã.",
  },
  {
    image: "/images/Joyce.png",
    name: "Bolsa Joyce",
    price: "R$ 85,00",
    description:
      "Trabalhada em fio de malha ou fio náutico; Tamanho pequeno/médio - uso dia a dia, saídas; Fecho de imã.",
  },
  {
    image: "/images/Eloina.png",
    name: "Bolsa Eloina",
    price: "R$ 100,00",
    description:
      "Trabalhada em fio barbante 6; Tamanho grande - uso diário, faculdade, viagens, passeios; Opção de com ou sem fecho de imã.",
  },
];

const pecas = [
  {
    image: "/images/2.png",
    name: "Chaveiro de Coração",
    price: "R$ 6,00",
    priceDetails: "Unidade",
    description:
      "Chaveiro artesanal em formato de coração com mosquetão dourado.",
    material: "Fio de malha, barbante ou náutico",
  },
  {
    image: "/images/3.png",
    name: "Descanso de Panela",
    price: "A partir de R$ 20,00",
    priceDetails:
      "Unidade: R$20 | Kit 2: R$40 | Kit 3: R$50 | Kit 4: R$60 | Kit +4: Apartir de R$80",
    description:
      "Descanso de panela em formato de flor com design delicado e funcional.",
    material: "Fio barbante",
  },
  {
    image: "/images/4.png",
    name: "Cachepot",
    price: "A partir de R$ 25,00",
    priceDetails:
      "P: R$25 (6x15x15cm) | M: R$40 (7x22x20cm) | G: R$50 (8x22x27cm)",
    description:
      "Conjunto de cachepots para organização e decoração em tons neutros.",
    material: "Fio de malha",
  },
  {
    image: "/images/5.png",
    name: "Sousplat",
    price: "A partir de R$ 20,00",
    priceDetails:
      "Unidade: R$20 | Kit 2: R$40 | Kit 3: R$50 | Kit 4: R$60 | Kit +4: Apartir de R$80",
    description:
      "Sousplat redondo com bordas em crochê delicado para sua mesa.",
    material: "Fio barbante",
  },
  {
    image: "/images/7.png",
    name: "Capa para Tablet/Notebook",
    price: "A partir de R$ 65,00",
    priceDetails: "Tablet iPad (11'): R$65 | Notebook (15,6'): R$85",
    description:
      "Capa protetora acolchoada para tablets e notebooks em cores variadas.",
    material: "Fio de malha ou fio náutico",
  },
  {
    image: "/images/8.png",
    name: "Necessaire com Boca de Lobo",
    price: "R$ 120,00",
    priceDetails: "Tamanho único",
    description:
      "Necessaire com zíper e design em duas cores para facilitar a organização. Fecho Boca de Lobo 25cm.",
    material: "Fio de malha",
  },
  {
    image: "/images/9.png",
    name: "Kit Lis",
    price: "R$ 120,00",
    priceDetails: "Tamanho único",
    description: "Kit porta tralheres e porta pratos.",
    material: "Fio barbante",
  },
  {
    image: "/images/10.png",
    name: "Kit Lily",
    price: "R$ 140,00",
    priceDetails: "Tamanho único",
    description: "Kit porta tralheres e porta pratos.",
    material: "Fio barbante",
  },
  // {
  //   image: "/images/13.png",
  //   name: "Porta Treco/Óculos",
  //   price: "R$ 35,00",
  //   priceDetails: "Unidade",
  //   description:
  //     "Bandeja oval perfeita para servir petiscos ou organizar itens.",
  //   material: "Fio de malha",
  // },
  {
    image: "/images/12.png",
    name: "Porta Copo",
    price: "R$ 8,00",
    priceDetails: "Unidade",
    description: "Descanso para copo.",
    material: "Fio barbante",
  },
];

const colorPalettes = {
  "Fio Barbante 6": [
    { name: "BRANCO", hex: "#D9D9D9" },
    { name: "CINZA", hex: "#E8E3D8" },
    { name: "CRU", hex: "#F0EAD6" },
    { name: "PRETO", hex: "#000000" },
    { name: "CHUMBO", hex: "#808080" },
    { name: "AMARELO BEBÊ", hex: "#FFF9B0" },
    { name: "OURO", hex: "#FFD700" },
    { name: "MOSTARDA", hex: "#A89000" },
    { name: "ROSA", hex: "#FF6FB5" },
    { name: "ROSA BEBÊ", hex: "#FFB5D8" },
    { name: "MALVA", hex: "#8B5580" },
    { name: "LILÁS", hex: "#D8B5FF" },
    { name: "SALMÃO", hex: "#FFA89E" },
    { name: "TELHA", hex: "#9B4416" },
    { name: "LARANJA", hex: "#FF8C00" },
    { name: "VERDE ÁGUA CLARO", hex: "#A4E4C8" },
    { name: "VERDE LIMÃO", hex: "#BFFF00" },
    { name: "VERDE BANDEIRA", hex: "#009350" },
    { name: "VERDE MUSGO", hex: "#556B2F" },
    { name: "AZUL BEBÊ", hex: "#B0D7FF" },
    { name: "AZUL PISCINA", hex: "#00B4D8" },
    { name: "AZUL ROYAL", hex: "#0000FF" },
    { name: "AZUL PETRÓLEO", hex: "#2B4E5F" },
    { name: "AZUL MARINHO", hex: "#1F3A5F" },
    { name: "VERMELHO", hex: "#FF0000" },
    { name: "BORDÔ", hex: "#6B1C23" },
    { name: "MELANCIA", hex: "#E76F8C" },
    { name: "MARROM", hex: "#8B4513" },
    { name: "BEGE", hex: "#FFE4C4" },
    { name: "JEANS", hex: "#4169A0" },
  ],
  "Fio Náutico": [
    { name: "VERDE NEON", hex: "#66FF33" },
    { name: "BANDEIRA", hex: "#009B3A" },
    { name: "ESMERALDA", hex: "#2D7D6E" },
    { name: "MILITAR", hex: "#4B5320" },
    { name: "MUSGO", hex: "#1C2321" },
    { name: "PERGAMINHO", hex: "#E5E5E5" },
    { name: "GRANIZO", hex: "#8B8B8B" },
    { name: "ALUMÍNIO", hex: "#6E7A7A" },
    { name: "AÇO", hex: "#404040" },
    { name: "PRETO", hex: "#000000" },
    { name: "BRANCO", hex: "#FFFFFF" },
    { name: "CREME", hex: "#FFFDD0" },
    { name: "PORCELANA", hex: "#F5F5DC" },
    { name: "AMÊNDOA", hex: "#D4AF7A" },
    { name: "CASTANHA", hex: "#C4A572" },
    { name: "VALENCIA", hex: "#B8926A" },
    { name: "TERRACOTA", hex: "#D2691E" },
    { name: "COBRE", hex: "#AD6B3A" },
    { name: "CHOCOLATE", hex: "#5D3A1A" },
    { name: "TABACO", hex: "#1A0F0A" },
    { name: "CANÁRIO", hex: "#FFFF00" },
    { name: "GEMA", hex: "#FFB300" },
    { name: "BRASA", hex: "#FF5722" },
    { name: "VERMELHO CÍRCULO", hex: "#DC143C" },
    { name: "VALENTINO", hex: "#8B3A62" },
    { name: "UVA PASSA", hex: "#4B2840" },
    { name: "TULIPA", hex: "#FF69B4" },
    { name: "PINK", hex: "#FF1493" },
    { name: "LILÁS", hex: "#9370DB" },
    { name: "PÚRPURA", hex: "#6A0DAD" },
    { name: "VERDE CANDY", hex: "#90EE90" },
    { name: "AZUL ROYAL", hex: "#4169E1" },
    { name: "AZUL BIC", hex: "#0047AB" },
    { name: "AZUL MARINHO", hex: "#191970" },
    { name: "GREENERY", hex: "#88B04B" },
  ],
  "Fio de Malha": [
    { name: "AZUL CANDY", hex: "#7DD3FC" },
    { name: "TURQUESA", hex: "#0D9488" },
    { name: "ESCALADA", hex: "#64748B" },
    { name: "PATTE", hex: "#6366F1" },
    { name: "AZUL TROPICAL", hex: "#0EA5E9" },
    { name: "AZUL BIC", hex: "#1E3A8A" },
    { name: "BROTINHO", hex: "#D9F99D" },
    { name: "VERDE FASHION", hex: "#84CC16" },
    { name: "BANDEIRA", hex: "#16A34A" },
    { name: "FLORESTA SELVAGEM", hex: "#557153" },
    { name: "CRÔMIO", hex: "#9CA3AF" },
    { name: "CINZA RESINA", hex: "#374151" },
    { name: "PRETO", hex: "#000000" },
    { name: "BRANCO", hex: "#FFFFFF" },
    { name: "DIECK", hex: "#D1D5DB" },
    { name: "NINHO", hex: "#E7E5E4" },
    { name: "GRUTA", hex: "#B45F4F" },
    { name: "MELADO", hex: "#92400E" },
    { name: "HENA", hex: "#78350F" },
    { name: "CHOCOLATE EM PÓ", hex: "#431407" },
    { name: "NÉCTAR", hex: "#FDE047" },
    { name: "CURRY", hex: "#D4AF37" },
    { name: "MARMELO", hex: "#F59E0B" },
    { name: "CITRINO", hex: "#FEF08A" },
    { name: "CANÁRIO", hex: "#FDE047" },
    { name: "CASCATA LARANJA", hex: "#FB923C" },
    { name: "MAÇÃDO AMOR", hex: "#DC2626" },
    { name: "MARTINI", hex: "#991B1B" },
    { name: "PICANTE", hex: "#7F1D1D" },
    { name: "CORAL VIVO", hex: "#FB7185" },
    { name: "CORAL VIVO NEON", hex: "#FF6B6B" },
    { name: "ROSA TROPICAL", hex: "#EC4899" },
    { name: "PORCELANA ROSA", hex: "#FCA5A5" },
    { name: "ROSA AMOR", hex: "#FBCFE8" },
    { name: "ROSA POEMA", hex: "#E9D5FF" },
    { name: "ROSA CANDY", hex: "#FBE2F4" },
    { name: "LILÁS SUAVE", hex: "#C4B5FD" },
    { name: "ROXO BRILHANTE", hex: "#7C3AED" },
  ],
};

export default function CatalogoPage() {
  const [selectedProduct, setSelectedProduct] = useState<string | null>(null);
  const [selectedColors, setSelectedColors] = useState<string[]>([]);
  const [showColorModal, setShowColorModal] = useState(false);

  const handleWhatsApp = (productName: string, colors?: string[]) => {
    let message = `Olá! Vi a peça "${productName}" no catálogo e gostaria de saber mais sobre disponibilidade!`;

    if (colors && colors.length > 0) {
      message += `\n\nCores escolhidas: ${colors.join(", ")}`;
    }

    window.open(
      `https://wa.me/5567981761398?text=${encodeURIComponent(message)}`,
      "_blank"
    );
  };

  const handleChooseColor = (productName: string) => {
    setSelectedProduct(productName);
    setSelectedColors([]);
    setShowColorModal(true);
  };

  const toggleColor = (colorName: string) => {
    setSelectedColors((prev) =>
      prev.includes(colorName)
        ? prev.filter((c) => c !== colorName)
        : [...prev, colorName]
    );
  };

  const confirmColorSelection = () => {
    if (selectedProduct) {
      handleWhatsApp(selectedProduct, selectedColors);
    }
    setShowColorModal(false);
    setSelectedProduct(null);
    setSelectedColors([]);
  };

  return (
    <div className="min-h-screen bg-background">
      <header className="sticky top-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2 cursor-pointer">
            <Image
              src="/images/logo.png"
              alt="Becca Crochês"
              width={120}
              height={40}
              className="h-10 w-auto"
            />
          </Link>
          <Link
            href="/"
            className="text-sm text-muted-foreground hover:text-primary transition-colors flex items-center gap-2 cursor-pointer"
          >
            <svg
              className="w-4 h-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M10 19l-7-7m0 0l7-7m-7 7h18"
              />
            </svg>
            Voltar ao início
          </Link>
        </div>
      </header>

      <main className="container mx-auto px-4 py-12">
        <section className="mb-20">
          <h1 className="text-4xl md:text-5xl font-display text-center mb-4">
            Catálogo de <span className="text-primary italic">Bolsas</span>
          </h1>
          <p className="text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
            Todas as bolsas são feitas à mão com muito carinho. As cores podem
            ser personalizadas conforme sua preferência!
          </p>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {bolsas.map((bolsa) => (
              <div
                key={bolsa.name}
                className="bg-card rounded-2xl overflow-hidden shadow-soft hover:shadow-hover transition-all duration-500 hover:-translate-y-2 group flex flex-col"
              >
                {/* IMAGEM */}
                <div className="relative bg-white p-6 flex items-center justify-center min-h-[300px]">
                  <img
                    src={bolsa.image || "/placeholder.svg"}
                    alt={bolsa.name}
                    className="max-w-full max-h-[280px] object-contain transition-transform duration-700 group-hover:scale-105"
                  />
                </div>

                {/* CONTEÚDO */}
                <div className="p-6 flex flex-col flex-1">
                  <div className="space-y-3">
                    <h3 className="font-display text-xl text-primary">
                      {bolsa.name}
                    </h3>

                    <p className="text-2xl font-semibold text-foreground">
                      {bolsa.price}
                    </p>

                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {bolsa.description}
                    </p>
                  </div>

                  {/* BOTÕES FIXOS NO BOTTOM */}
                  <div className="mt-auto space-y-3 pt-6">
                    <div className="flex gap-2">
                      <button
                        onClick={() => handleChooseColor(bolsa.name)}
                        className="flex-1 px-6 py-3 bg-secondary text-foreground rounded-full font-medium hover:bg-secondary/80 transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer border-2 border-primary/20"
                      >
                        <svg
                          className="w-5 h-5"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01"
                          />
                        </svg>
                        Escolher Cores
                      </button>
                    </div>

                    <button
                      onClick={() => handleWhatsApp(bolsa.name)}
                      className="w-full px-6 py-3 bg-primary text-primary-foreground rounded-full font-medium hover:bg-primary/90 transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer"
                    >
                      <svg
                        className="w-5 h-5"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                      </svg>
                      Quero essa!
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-4xl md:text-5xl font-display text-center mb-4">
            Catálogo de <span className="text-primary italic">Peças</span>
          </h2>
          <p className="text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
            Peças decorativas e utilitárias feitas à mão para deixar sua casa
            ainda mais aconchegante!
          </p>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {pecas.map((peca) => (
              <div
                key={peca.name}
                className="bg-card rounded-2xl overflow-hidden shadow-soft hover:shadow-hover transition-all duration-500 hover:-translate-y-1 group flex flex-col"
              >
                {/* IMAGEM */}
                <div className="relative bg-gradient-to-br from-white to-secondary/20 p-8 flex items-center justify-center aspect-square">
                  <img
                    src={peca.image || "/placeholder.svg"}
                    alt={peca.name}
                    className="max-w-full max-h-full object-contain transition-transform duration-700 group-hover:scale-110 group-hover:rotate-3"
                  />
                </div>

                {/* CONTEÚDO */}
                <div className="p-5 flex flex-col flex-1">
                  {/* TEXTO */}
                  <div className="space-y-2">
                    <h3 className="font-display text-lg text-primary leading-tight">
                      {peca.name}
                    </h3>

                    <div className="flex items-baseline gap-2">
                      <p className="text-xl font-bold text-foreground">
                        {peca.price}
                      </p>
                    </div>

                    {peca.priceDetails && (
                      <p className="text-xs text-muted-foreground leading-relaxed">
                        {peca.priceDetails}
                      </p>
                    )}

                    <p className="text-sm text-muted-foreground leading-relaxed pt-1">
                      {peca.description}
                    </p>

                    <p className="text-xs text-muted-foreground/80 italic pt-1">
                      {peca.material}
                    </p>
                  </div>

                  {/* BOTÕES NO BOTTOM */}
                  <div className="mt-auto pt-4 space-y-3">
                    <button
                      onClick={() => handleChooseColor(peca.name)}
                      className="w-full px-4 py-2.5 bg-secondary hover:bg-secondary/80 text-foreground rounded-full text-sm font-medium transition-colors cursor-pointer border border-primary/20 flex items-center justify-center gap-2"
                    >
                      <svg
                        className="w-4 h-4"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01"
                        />
                      </svg>
                      <span>Escolher Cores</span>
                    </button>

                    <button
                      onClick={() => handleWhatsApp(peca.name)}
                      className="w-full px-4 py-2.5 bg-primary hover:bg-primary/90 text-primary-foreground rounded-full text-sm font-medium transition-colors cursor-pointer shadow-sm hover:shadow-md flex items-center justify-center gap-2"
                    >
                      <svg
                        className="w-5 h-5"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                      </svg>
                      <span>Encomendar</span>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        <div className="text-center mt-16 p-8 bg-secondary/50 rounded-2xl">
          <p className="text-lg text-foreground mb-4">
            Não encontrou o que procurava? Fazemos modelos{" "}
            <span className="text-primary font-semibold">personalizados</span>!
          </p>
          <button
            onClick={() => handleWhatsApp("modelo personalizado")}
            className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-primary-foreground rounded-full font-medium hover:bg-primary/90 transition-all duration-300 cursor-pointer"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
            </svg>
            Fale conosco no WhatsApp
          </button>
        </div>
      </main>

      {showColorModal && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-background rounded-3xl shadow-2xl max-w-5xl w-full max-h-[90vh] overflow-hidden flex flex-col">
            <div className="p-6 border-b border-border bg-gradient-to-r from-primary/5 to-secondary/10">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-2xl font-display text-primary">
                    Escolha suas cores favoritas
                  </h3>
                  <p className="text-sm text-muted-foreground mt-1">
                    Selecione uma ou mais cores para {selectedProduct}
                  </p>
                </div>
                <button
                  onClick={() => setShowColorModal(false)}
                  className="w-10 h-10 rounded-full bg-secondary hover:bg-secondary/80 flex items-center justify-center cursor-pointer transition-colors"
                >
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </div>
              {selectedColors.length > 0 && (
                <div className="mt-4 p-3 bg-primary/10 rounded-xl">
                  <p className="text-xs font-medium text-primary mb-2">
                    Cores selecionadas:
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {selectedColors.map((color) => (
                      <span
                        key={color}
                        className="px-3 py-1 bg-primary text-primary-foreground rounded-full text-xs font-medium"
                      >
                        {color}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>
            <div className="overflow-y-auto flex-1 p-6">
              {Object.entries(colorPalettes).map(([category, colors]) => (
                <div key={category} className="mb-8 last:mb-0">
                  <h4 className="text-lg font-display text-primary mb-4 flex items-center gap-2">
                    <span className="w-1 h-6 bg-primary rounded-full"></span>
                    {category}
                  </h4>
                  <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-3">
                    {colors.map((color) => (
                      <button
                        key={color.name}
                        onClick={() => toggleColor(color.name)}
                        className={`group relative aspect-square rounded-xl transition-all duration-300 cursor-pointer ${
                          selectedColors.includes(color.name)
                            ? "ring-4 ring-primary ring-offset-2 ring-offset-background scale-105 shadow-lg"
                            : "hover:scale-105 hover:shadow-md"
                        }`}
                        style={{ backgroundColor: color.hex }}
                        title={color.name}
                      >
                        {selectedColors.includes(color.name) && (
                          <div className="absolute inset-0 flex items-center justify-center">
                            <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-lg">
                              <svg
                                className="w-5 h-5 text-primary"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth={3}
                                  d="M5 13l4 4L19 7"
                                />
                              </svg>
                            </div>
                          </div>
                        )}
                        <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
                          <div className="bg-foreground text-background text-xs px-2 py-1 rounded shadow-lg">
                            {color.name}
                          </div>
                        </div>
                      </button>
                    ))}
                  </div>
                </div>
              ))}
            </div>
            <div className="p-6 border-t border-border bg-secondary/5">
              <div className="flex gap-3">
                <button
                  onClick={() => setShowColorModal(false)}
                  className="flex-1 px-6 py-3 bg-secondary hover:bg-secondary/80 text-foreground rounded-full font-medium transition-colors cursor-pointer"
                >
                  Cancelar
                </button>
                <button
                  onClick={confirmColorSelection}
                  disabled={selectedColors.length === 0}
                  className="flex-1 px-6 py-3 bg-primary hover:bg-primary/90 text-primary-foreground rounded-full font-medium transition-colors cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                >
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347" />
                  </svg>
                  Enviar pelo WhatsApp
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      <footer className="bg-secondary/30 py-8 mt-16">
        <div className="container mx-auto px-4 text-center">
          <p className="text-muted-foreground text-sm">
            © {new Date().getFullYear()} Becca Crochês. Todos os direitos
            reservados.
          </p>
        </div>
      </footer>
    </div>
  );
}
