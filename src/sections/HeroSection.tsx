import hero from "../assets/bg-hero.png"

function HeroSection() {
  return (
    <section
      id="hero"
      className="
        pt-30
        relative min-h-screen
        flex items-center justify-center
        overflow-hidden
      "
    >
      <div className="absolute inset-0">
        <img
          src={hero}
          alt="Instituto Aveloz"
          className="w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-black/60"></div>

        <div className="absolute inset-0 bg-linear-to-r from-black/70 via-black/40 to-black/20"></div>
      </div>

      <div className="relative z-10 w-full px-6">
        <div
          className="
            max-w-5xl mx-auto
            flex flex-col items-center
            text-center
            animate-slide-up
          "
        >
          <div
            className="
              inline-flex sm:items-center sm:gap-3
              bg-white/10
              backdrop-blur-xl
              border border-white/20
              px-5 py-3
              rounded-full
              sm:hidden
            "
          >
            <div className="w-2 h-2 rounded-full bg-(--accent) animate-pulse sm:block hidden"></div>

            <span className="text-white text-sm font-semibold uppercase tracking-[0.2em] sm:block hidden">
              Desenvolvimento Territorial Sustentável
            </span>
          </div>

          <h1 className="mt-8 text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-white max-w-5xl">
            Desenvolvendo
            <span className="text-(--accent)">
              {" "}territórios
            </span>
            {" "}e
            <span className="text-(--accent)">
              {" "}comunidades
            </span>
            {" "}sustentáveis.
          </h1>

          <p
            className="
              mt-8
              text-lg md:text-xl
              text-gray-200
              leading-relaxed
              max-w-3xl
            "
          >
            O Instituto Aveloz promove agricultura familiar,
            sustentabilidade e equidade social através de
            iniciativas voltadas ao desenvolvimento humano,
            territorial e comunitário.
          </p>

          <div
            className="
              mt-12
              flex flex-col sm:flex-row
              items-center gap-5
            "
          >
            <button
              className="
                bg-(--primary)
                text-white
                px-8 py-4
                rounded-2xl
                font-semibold
                hover:-translate-y-1
                hover:scale-[1.02]
                transition-all duration-300
                shadow-[0_8px_30px_rgba(6,96,0,0.35)]
              "
            >
              Conheça nosso trabalho
            </button>

            <button
              className="
                bg-(--accent)
                hover:bg-[#B8861F]
                text-black
                px-8 py-4
                rounded-2xl
                font-semibold
                hover:-translate-y-1
                transition-all duration-300
                shadow-[0_10px_30px_rgba(217,164,65,0.25)]
              "
            >
              Seja um associado
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HeroSection