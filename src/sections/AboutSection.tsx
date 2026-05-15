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
    <section id="sobre" className="py-32 relative overflow-hidden bg-[#06110A]">
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-green-500/10 rounded-full blur-[140px]"></div>

      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-emerald-500/10 rounded-full blur-[140px]"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <div>
            <div
              className="inline-flex items-center gap-3 bg-white/5 backdrop-blur-xl border border-white/10 px-5 py-3 rounded-full shadow-[0_8px_30px_rgba(6,96,0,0.18)]">
              <div className="w-2.5 h-2.5 rounded-full bg-(--accent) animate-pulse"></div>

              <span className="text-white text-sm font-semibold uppercase tracking-[0.2em]">
                Quem Somos
              </span>
            </div>

            <h2
              className="text-4xl lg:text-6xl font-bold mt-8 leading-tight text-white"
            >
              Desenvolvimento humano, territorial e <span className="text-(--accent)">sustentável.</span>
            </h2>

            <p
              className="mt-8 text-lg text-gray-300 leading-relaxed">
              O Instituto Aveloz é uma organização de direito privado,
              sem fins econômicos, dedicada à promoção do
              desenvolvimento territorial sustentável, fortalecimento
              da agricultura familiar e inclusão social.
            </p>

            <p
              className="mt-6 text-lg text-gray-300 leading-relaxed">
              Atuamos na construção de iniciativas voltadas ao campo e
              à cidade, promovendo equidade social, educação,
              sustentabilidade e fortalecimento das comunidades.
            </p>

            <div className="mt-12 flex flex-wrap gap-5">
              {[
                {
                  title: 'PE',
                  subtitle: 'Sede em Passira',
                },
                {
                  title: 'BR',
                  subtitle: 'Atuação Nacional',
                },
                {
                  title: 'ESG',
                  subtitle: 'Sustentabilidade',
                },
              ].map((item) => (
                <div key={item.title} className="bg-white/5 border border-white/10 backdrop-blur-xl px-6 py-5 rounded-3xl min-w-[160px]">
                  <span className="block text-3xl font-bold text-(--accent)">
                    {item.title}
                  </span>

                  <span className="text-sm text-gray-400">
                    {item.subtitle}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="absolute -top-10 -left-10 w-52 h-52 bg-green-500/20 rounded-full blur-3xl"></div>

            <div className="absolute -bottom-10 -right-10 w-52 h-52 bg-emerald-500/20 rounded-full blur-3xl"></div>

            <div className="relative rounded-[40px] overflow-hidden h-[700px] shadow-[0_20px_80px_rgba(0,0,0,0.45)]">
              {images.map((image, index) => (
                <img key={index}
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

              <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/20 to-transparent"></div>

              <div className="absolute bottom-0 left-0 p-10">
                <div className="bg-white/10
                    backdrop-blur-2xl
                    border border-white/10
                    rounded-[32px]
                    p-8
                    max-w-md
                  "
                >
                  <span
                    className="
                      uppercase
                      tracking-[0.25em]
                      text-sm
                      font-semibold
                      text-(--accent)
                    "
                  >
                    Instituto Aveloz
                  </span>

                  <h3
                    className="
                      text-3xl
                      font-bold
                      text-white
                      mt-4
                      leading-tight
                    "
                  >
                    Transformando territórios e fortalecendo comunidades.
                  </h3>

                  <p
                    className="
                      text-gray-200
                      mt-4
                      leading-relaxed
                    "
                  >
                    Desenvolvimento sustentável, agricultura familiar,
                    inclusão social e fortalecimento territorial.
                  </p>
                </div>
              </div>

              {/* Indicators */}
              <div
                className="
                  absolute bottom-8 right-8
                  flex items-center gap-3
                "
              >
                {images.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentImage(index)}
                    className={`
                      transition-all duration-300
                      rounded-full
                      ${
                        currentImage === index
                          ? 'w-10 h-3 bg-white'
                          : 'w-3 h-3 bg-white/40'
                      }
                    `}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-28">
          {[
            {
              title: 'Agricultura Familiar',
              text: 'Fortalecimento de redes produtivas e desenvolvimento rural sustentável.',
            },
            {
              title: 'Equidade Social',
              text: 'Promoção da inclusão social, cidadania e fortalecimento comunitário.',
            },
            {
              title: 'Sustentabilidade',
              text: 'Incentivo à agroecologia, resiliência climática e preservação ambiental.',
            },
            {
              title: 'Desenvolvimento Territorial',
              text: 'Fortalecimento econômico, social e humano dos territórios.',
            },
          ].map((card) => (
            <div
              key={card.title}
              className="
                bg-white/5
                backdrop-blur-xl
                border border-white/10
                p-8
                rounded-[32px]
                hover:-translate-y-2
                hover:border-green-400/20
                transition-all duration-500
              "
            >
              <h3
                className="
                  text-2xl
                  font-bold
                  text-(--accent)
                  mb-5
                "
              >
                {card.title}
              </h3>

              <p className="text-gray-300 leading-relaxed">
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