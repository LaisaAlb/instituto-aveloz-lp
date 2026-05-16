import hero from "../assets/bg-hero.png"

function HeroSection() {
  return (
    <section
      id="hero"
      className="pt-30
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

          <h1 className="mt-6 text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-white max-w-5xl">
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

          <div className="mt-12 flex flex-col sm:flex-row items-center sm:justify-center sm:gap-6 gap-6">
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