import {
  ArrowRight,
  Contact,
  Mail,
  MapPin,
} from 'lucide-react'

import logo from '../assets/Instituto-aveloz-logo.png'

function ContactSection() {
  const handleInstagramDirect = () => {
    window.open('https://ig.me/m/institutoaveloz', '_blank')
  }

  return (
    <section
      id="contato"
      className="relative overflow-hidden py-20 md:py-32 bg-[#F7FAF7]"
    >
      {/* GLOW */}
      <div className="absolute top-0 left-0 w-[220px] md:w-[350px] h-[220px] md:h-[350px] bg-green-500/10 rounded-full blur-[120px]" />
      <div className="absolute bottom-0 right-0 w-[220px] md:w-[350px] h-[220px] md:h-[350px] bg-green-400/10 rounded-full blur-[120px]" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-6">

        {/* HEADER */}
        <div className="text-center max-w-3xl mx-auto mb-14 md:mb-24">

          <h2 className="text-3xl md:text-6xl font-bold leading-tight text-slate-900">
            Vamos construir impacto{' '}
            <span className="text-(--primary)">juntos</span>.
          </h2>

          <p className="mt-6 md:mt-8 text-sm md:text-lg text-slate-600 leading-relaxed">
            Entre em contato com o Instituto Aveloz.
          </p>

        </div>

        {/* GRID */}
        <div className="grid lg:grid-cols-[1fr_0.8fr] gap-6 md:gap-8">

          {/* LEFT */}
          <div className="relative overflow-hidden rounded-3xl bg-[#07110B] p-6 md:p-12 lg:p-16 text-white">

            <div className="absolute top-0 right-0 w-40 md:w-72 h-40 md:h-72 bg-green-500/10 rounded-full blur-[100px]" />

            <div className="relative z-10">

              <span className="uppercase tracking-[0.2em] text-xs md:text-sm font-semibold text-green-100">
                Instituto Aveloz
              </span>

              <h3 className="mt-6 md:mt-8 text-2xl md:text-5xl font-bold leading-tight">
                Fortalecendo comunidades
              </h3>

              <p className="mt-6 md:mt-8 text-sm md:text-lg text-gray-300 leading-relaxed">
                Desenvolvimento sustentável e inclusão social.
              </p>

              {/* CARDS */}
              <div className="mt-10 md:mt-14 space-y-4 md:space-y-6">

                <button
                  onClick={handleInstagramDirect}
                  className="flex items-start gap-4 md:gap-5 p-4 md:p-6 rounded-2xl md:rounded-3xl border border-white/10 bg-white/5 hover:bg-white/10 transition"
                >
                  <div className="w-12 md:w-14 h-12 md:h-14 rounded-2xl bg-green-500/10 text-green-400 flex items-center justify-center">
                    <Contact size={22} />
                  </div>

                  <div>
                    <h4 className="text-lg md:text-xl font-bold">
                      Instagram
                    </h4>
                    <p className="mt-1 md:mt-2 text-sm md:text-base text-gray-300">
                      @institutoaveloz
                    </p>
                  </div>
                </button>

                <div className="flex items-start gap-4 md:gap-5 p-4 md:p-6 rounded-2xl md:rounded-3xl border border-white/10 bg-white/5">

                  <div className="w-12 md:w-14 h-12 md:h-14 rounded-2xl bg-green-500/10 text-green-400 flex items-center justify-center">
                    <Mail size={22} />
                  </div>

                  <div>
                    <h4 className="text-lg md:text-xl font-bold">
                      Email
                    </h4>
                    <p className="mt-1 md:mt-2 text-sm md:text-base text-gray-300">
                      contato@institutoaveloz.org
                    </p>
                  </div>

                </div>

                <div className="flex items-start gap-4 md:gap-5 p-4 md:p-6 rounded-2xl md:rounded-3xl border border-white/10 bg-white/5">

                  <div className="w-12 md:w-14 h-12 md:h-14 rounded-2xl bg-green-500/10 text-green-400 flex items-center justify-center">
                    <MapPin size={22} />
                  </div>

                  <div>
                    <h4 className="text-lg md:text-xl font-bold">
                      Endereço
                    </h4>
                    <p className="mt-1 md:mt-2 text-sm md:text-base text-gray-300">
                      Passira — PE
                    </p>
                  </div>

                </div>

              </div>

            </div>
          </div>

          {/* RIGHT */}
          <div className="relative overflow-hidden rounded-3xl bg-white border border-gray-200 p-6 md:p-12 flex items-center justify-center min-h-[420px] md:min-h-[650px]">

            <div className="absolute inset-0 bg-linear-to-b from-green-50 to-white" />

            <div className="relative z-10 text-center">

              <img
                src={logo}
                className="w-full max-w-[180px] md:max-w-[280px] mx-auto object-contain"
              />

              <h3 className="mt-8 md:mt-10 text-2xl md:text-3xl font-bold text-slate-900">
                Desenvolvimento territorial
              </h3>

              <p className="mt-4 md:mt-6 text-sm md:text-base text-slate-600 max-w-md mx-auto">
                Sustentabilidade e impacto social.
              </p>

              <button
                onClick={handleInstagramDirect}
                className="mt-8 md:mt-10 inline-flex items-center gap-3 bg-(--primary) text-white px-6 md:px-8 py-4 md:py-5 rounded-2xl font-semibold"
              >
                Falar com o Instituto
                <ArrowRight size={18} />
              </button>

            </div>
          </div>

        </div>

      </div>
    </section>
  )
}

export default ContactSection