import {
  ArrowRight,
  Contact,
  Mail,
  MapPin,
} from 'lucide-react'

import logo from '../assets/Instituto-aveloz-logo.png'

function ContactSection() {
  const handleInstagramDirect = () => {
    window.open(
      'https://ig.me/m/institutoaveloz',
      '_blank'
    )
  }

  return (
    <section
      id="contato"
      className="
        relative
        overflow-hidden
        py-32
        bg-[#F7FAF7]
      "
    >
      {/* Glow */}
      <div className="absolute top-0 left-0 w-[350px] h-[350px] bg-green-500/10 rounded-full blur-[120px]"></div>

      <div className="absolute bottom-0 right-0 w-[350px] h-[350px] bg-green-400/10 rounded-full blur-[120px]"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-24">
          <div
            className="
              inline-flex items-center gap-3
              bg-green-500/10
              border border-green-500/20
              px-5 py-3
              rounded-full
              mb-8
            "
          >
            <div className="w-2.5 h-2.5 rounded-full bg-(--primary) animate-pulse"></div>

            <span
              className="
                text-(--primary)
                text-sm
                font-semibold
                uppercase
                tracking-[0.2em]
              "
            >
              Contato
            </span>
          </div>

          <h2
            className="
              text-4xl
              lg:text-6xl
              font-bold
              leading-tight
              text-slate-900
            "
          >
            Vamos construir impacto
            <span className="text-(--primary)">
              {' '}juntos
            </span>
            .
          </h2>

          <p
            className="
              mt-8
              text-lg
              text-slate-600
              leading-relaxed
            "
          >
            Entre em contato com o Instituto Aveloz
            e descubra como colaborar em iniciativas
            voltadas ao desenvolvimento territorial sustentável.
          </p>
        </div>

        {/* Content */}
        <div
          className="
            grid
            lg:grid-cols-[1fr_0.8fr]
            gap-8
            items-stretch
          "
        >
          {/* Left */}
          <div
            className="
              relative
              overflow-hidden
              rounded-[40px]
              bg-[#07110B]
              p-12 lg:p-16
              text-white
              shadow-[0_20px_80px_rgba(0,0,0,0.25)]
            "
          >
            <div
              className="
                absolute top-0 right-0
                w-72 h-72
                bg-green-500/10
                rounded-full
                blur-[100px]
              "
            ></div>

            <div className="relative z-10">
              <span
                className="
                  uppercase
                  tracking-[0.2em]
                  text-sm
                  font-semibold
                  text-green-100
                "
              >
                Instituto Aveloz
              </span>

              <h3
                className="
                  mt-8
                  text-4xl
                  lg:text-5xl
                  font-bold
                  leading-tight
                "
              >
                Fortalecendo comunidades e territórios.
              </h3>

              <p
                className="
                  mt-8
                  text-lg
                  text-gray-300
                  leading-relaxed
                  max-w-xl
                "
              >
                Atuamos com desenvolvimento sustentável,
                agricultura familiar, inclusão social
                e fortalecimento territorial através
                de iniciativas humanas e comunitárias.
              </p>

              {/* Cards */}
              <div className="mt-14 grid gap-6">
                <button
                  type="button"
                  onClick={handleInstagramDirect}
                  className="
                    group
                    flex items-start gap-5
                    p-6
                    rounded-3xl
                    border border-white/10
                    bg-white/5
                    hover:bg-white/10
                    transition-all duration-300
                    text-left
                  "
                >
                  <div
                    className="
                      w-14 h-14
                      rounded-2xl
                      bg-green-500/10
                      text-green-400
                      flex items-center justify-center
                      shrink-0
                      transition-all duration-300
                      group-hover:bg-green-500
                      group-hover:text-white
                    "
                  >
                    <Contact size={24} />
                  </div>

                  <div>
                    <h4 className="text-xl font-bold">
                      Instagram
                    </h4>

                    <p className="mt-2 text-gray-300">
                      @institutoaveloz
                    </p>
                  </div>
                </button>

                <div
                  className="
                    flex items-start gap-5
                    p-6
                    rounded-3xl
                    border border-white/10
                    bg-white/5
                  "
                >
                  <div
                    className="
                      w-14 h-14
                      rounded-2xl
                      bg-green-500/10
                      text-green-400
                      flex items-center justify-center
                      shrink-0
                    "
                  >
                    <Mail size={24} />
                  </div>

                  <div>
                    <h4 className="text-xl font-bold">
                      Email
                    </h4>

                    <p className="mt-2 text-gray-300">
                      contato@institutoaveloz.org
                    </p>
                  </div>
                </div>

                <div
                  className="
                    flex items-start gap-5
                    p-6
                    rounded-3xl
                    border border-white/10
                    bg-white/5
                  "
                >
                  <div
                    className="
                      w-14 h-14
                      rounded-2xl
                      bg-green-500/10
                      text-green-400
                      flex items-center justify-center
                      shrink-0
                    "
                  >
                    <MapPin size={24} />
                  </div>

                  <div>
                    <h4 className="text-xl font-bold">
                      Endereço
                    </h4>

                    <p className="mt-2 text-gray-300 leading-relaxed">
                      Rua Severino Fontes, 28 — Centro
                      <br />
                      Passira — PE
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right */}
          <div
            className="
              relative
              overflow-hidden
              rounded-[40px]
              bg-white
              border border-gray-200
              p-12
              flex items-center justify-center
              min-h-[650px]
            "
          >
            <div
              className="
                absolute inset-0
                bg-linear-to-b
                from-green-50
                to-white
              "
            ></div>

            <div className="relative z-10 text-center">
              <img
                src={logo}
                alt="Instituto Aveloz"
                className="
                  w-full
                  max-w-[280px]
                  mx-auto
                  object-contain
                  drop-shadow-2xl
                "
              />

              <h3
                className="
                  mt-10
                  text-3xl
                  font-bold
                  text-slate-900
                "
              >
                Desenvolvimento humano e territorial.
              </h3>

              <p
                className="
                  mt-6
                  text-slate-600
                  leading-relaxed
                  max-w-md
                  mx-auto
                "
              >
                Promovendo sustentabilidade,
                fortalecimento comunitário
                e inclusão social através
                de ações transformadoras.
              </p>

              <button
                onClick={handleInstagramDirect}
                className="
                  group
                  mt-10
                  inline-flex
                  items-center gap-3
                  bg-(--primary)
                  hover:bg-[#044A00]
                  text-white
                  px-8 py-5
                  rounded-2xl
                  font-semibold
                  transition-all duration-300
                  hover:-translate-y-1
                  shadow-[0_15px_40px_rgba(6,96,0,0.20)]
                "
              >
                Falar com o Instituto

                <ArrowRight
                  size={18}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ContactSection