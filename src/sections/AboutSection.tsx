import { useEffect, useState } from 'react'

import about1 from '../assets/about-1.png'
import about2 from '../assets/about-2.png'
import about3 from '../assets/about-3.png'

function AboutSection() {
  const images = [about1, about2, about3]
  const [currentImage, setCurrentImage] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) =>
        prev === images.length - 1 ? 0 : prev + 1
      )
    }, 4000)

    return () => clearInterval(interval)
  }, [])

  return (
    <section id="sobre" className="py-20 md:py-32 relative overflow-hidden bg-[#06110A]">

      <div className="absolute top-0 left-0 w-[300px] md:w-[500px] h-[300px] md:h-[500px] bg-green-500/10 rounded-full blur-[120px] md:blur-[140px]" />
      <div className="absolute bottom-0 right-0 w-[300px] md:w-[500px] h-[300px] md:h-[500px] bg-emerald-500/10 rounded-full blur-[120px] md:blur-[140px]" />

      <div className="max-w-7xl mx-auto px-4 md:px-6 relative z-10">

        <div className="grid lg:grid-cols-2 gap-12 md:gap-20 items-center">

          <div>

            <div className="inline-flex items-center gap-3 bg-white/5 backdrop-blur-xl border border-white/10 px-4 md:px-5 py-2 md:py-3 rounded-full">
              <div className="w-2 h-2 rounded-full bg-(--accent) animate-pulse" />
              <span className="text-white text-xs md:text-sm font-semibold uppercase tracking-[0.2em]">
                Quem Somos
              </span>
            </div>

            <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold mt-6 md:mt-8 leading-tight text-white">
              Desenvolvimento territorial {' '}
              <span className="text-(--accent)">sustentável.</span>
            </h2>

            <p className="mt-6 md:mt-8 text-base md:text-lg text-gray-300 leading-relaxed">
              O Instituto Aveloz é uma organização de direito privado,
              sem fins econômicos, dedicada ao desenvolvimento territorial sustentável.
            </p>

            <p className="mt-4 md:mt-6 text-base md:text-lg text-gray-300 leading-relaxed">
              Atuamos com inclusão social, agricultura familiar, fortalecimento comunitário, cultura e formação.
            </p>

            <div className="mt-10 md:mt-12 flex flex-wrap gap-4 md:gap-5">

              {[
                { title: 'PE', subtitle: 'Sede em Passira' },
                { title: 'BR', subtitle: 'Atuação Nacional' },
                { title: 'ESG', subtitle: 'Sustentabilidade' },
              ].map((item) => (
                <div
                  key={item.title}
                  className="bg-white/5 border border-white/10 backdrop-blur-xl px-5 md:px-6 py-4 md:py-5 rounded-3xl min-w-[140px] md:min-w-[160px]"
                >
                  <span className="block text-2xl md:text-3xl font-bold text-(--accent)">
                    {item.title}
                  </span>
                  <span className="text-xs md:text-sm text-gray-400">
                    {item.subtitle}
                  </span>
                </div>
              ))}

            </div>
          </div>

          <div className="relative">

            <div className="relative rounded-[24px] md:rounded-[40px] overflow-hidden h-[420px] sm:h-[500px] md:h-[700px] shadow-[0_20px_80px_rgba(0,0,0,0.45)]">

              {images.map((image, index) => (
                <img
                  key={index}
                  src={image}
                  alt="Instituto Aveloz"
                  className={`absolute inset-0 w-full h-full object-cover transition-all duration-1000
                    ${
                      currentImage === index
                        ? 'opacity-100 scale-100'
                        : 'opacity-0 scale-110'
                    }
                  `}
                />
              ))}

              <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/20 to-transparent" />

              <div className="absolute bottom-4 md:bottom-0 left-0 p-4 md:p-10 w-full">

                <div className="bg-white/10 backdrop-blur-2xl border border-white/10 rounded-2xl md:rounded-[32px] p-4 md:p-8 max-w-full md:max-w-md">

                  <span className="uppercase tracking-[0.25em] text-xs md:text-sm font-semibold text-(--accent)">
                    Instituto Aveloz
                  </span>

                  <h3 className="text-xl md:text-3xl font-bold text-white mt-3 md:mt-4 leading-tight">
                    Transformando territórios e fortalecendo comunidades.
                  </h3>

                  <p className="text-gray-200 mt-3 md:mt-4 text-sm md:text-base">
                    Desenvolvimento sustentável, agricultura familiar e inclusão social.
                  </p>

                </div>
              </div>

              <div className="absolute bottom-3 md:bottom-8 right-3 md:right-8 flex items-center gap-2 md:gap-3">
                {images.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentImage(index)}
                    className={`transition-all duration-300 rounded-full
                      ${
                        currentImage === index
                          ? 'w-8 md:w-10 h-2 md:h-3 bg-white'
                          : 'w-2 h-2 bg-white/40'
                      }
                    `}
                  />
                ))}
              </div>

            </div>
          </div>

        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 mt-20 md:mt-28">

          {[
            {
              title: 'Agricultura Familiar',
              text: 'Fortalecimento de redes produtivas e desenvolvimento rural sustentável.',
            },
            {
              title: 'Equidade Social',
              text: 'Promoção da inclusão social e cidadania.',
            },
            {
              title: 'Sustentabilidade',
              text: 'Preservação ambiental e agroecologia.',
            },
            {
              title: 'Desenvolvimento Territorial',
              text: 'Fortalecimento econômico e social dos territórios.',
            },
          ].map((card) => (
            <div
              key={card.title}
              className="bg-white/5 backdrop-blur-xl border border-white/10 p-6 md:p-8 rounded-[24px] md:rounded-[32px] hover:-translate-y-2 transition-all duration-500"
            >
              <h3 className="text-xl md:text-2xl font-bold text-(--accent) mb-4 md:mb-5">
                {card.title}
              </h3>

              <p className="text-gray-300 text-sm md:text-base leading-relaxed">
                {card.text}
              </p>
            </div>
          ))}

        </div>

      </div>
    </section>
  )
}

export default AboutSection