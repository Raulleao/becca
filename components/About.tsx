const About = () => {
  return (
    <section id="sobre" className="py-24" style={{ backgroundColor: "#F6F3F2" }}>
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary text-sm font-medium rounded-full">
                Sobre Mim
              </span>

              <h2 className="text-4xl md:text-5xl font-display text-foreground leading-tight">
                Olá, eu sou a <span className="text-primary italic">Rebecca</span>
              </h2>

              <div className="space-y-4 text-muted-foreground">
                <p>
                  Tenho 22 anos e moro em Campo Grande, Mato Grosso do Sul. Faço crochê desde os 18 anos, atividade que
                  começou como um hobby e, com o incentivo e os elogios de pessoas próximas, decidi transformar em algo
                  a mais.
                </p>
                <p>
                  O crochê sempre foi uma paixão e também uma forma de terapia para mim. Cada peça é feita com carinho,
                  dedicação e atenção aos detalhes, tornando cada encomenda única.
                </p>
                <p>
                  A loja funciona exclusivamente durante os meses de férias universitárias, devido à minha dedicação
                  para com a faculdade durante o período letivo.
                </p>
                <p className="font-medium text-foreground">Ficarei muito feliz em receber seu pedido! ✨</p>
              </div>

              <div className="grid grid-cols-2 gap-4 pt-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center">
                    <span className="text-lg">🧵</span>
                  </div>
                  <div>
                    <p className="font-medium text-foreground">100% Manual</p>
                    <p className="text-xs text-muted-foreground">Feito à mão</p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center">
                    <span className="text-lg">💝</span>
                  </div>
                  <div>
                    <p className="font-medium text-foreground">Único</p>
                    <p className="text-xs text-muted-foreground">Peça exclusiva</p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center">
                    <span className="text-lg">📦</span>
                  </div>
                  <div>
                    <p className="font-medium text-foreground">Envio</p>
                    <p className="text-xs text-muted-foreground">Campo Grande</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="aspect-square rounded-[2rem] overflow-hidden shadow-soft">
                <img
                  src="/images/bec.jpg"
                  alt="Peça de crochê artesanal"
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="absolute -top-6 -right-6 w-24 h-24 bg-secondary/40 rounded-full blur-2xl" />
              <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-primary/30 rounded-full blur-2xl" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
