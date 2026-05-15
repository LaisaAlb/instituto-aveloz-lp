import {
  Sprout,
  Users,
  Lightbulb,
} from 'lucide-react'

import agricultura from '../assets/atuaction-1.png'
import genero from '../assets/atuaction-2.png'
import economia from '../assets/atuaction-3.png'

const areas = [
  {
    title: 'Agricultura Familiar',
    description:
      'Fortalecimento de redes socioprodutivas, assistência técnica e incentivo ao desenvolvimento rural sustentável.',
    image: agricultura,
    icon: Sprout,
  },
  {
    title: 'Gênero e Etnia',
    description:
      'Promoção da inclusão social, equidade de gênero, diversidade cultural e fortalecimento comunitário.',
    image: genero,
    icon: Users,
  },
  {
    title: 'Economia Criativa',
    description:
      'Incentivo à economia solidária, empreendedorismo local e desenvolvimento territorial sustentável.',
    image: economia,
    icon: Lightbulb,
  },
]

function AreasSection() {
  return (
    <section id="areas" className="relative py-32 overflow-hidden bg-[#07110B]">

      <div className="absolute -top-40 -left-40 w-[500px] h-[500px] bg-green-500/10 rounded-full blur-[140px]"></div>

      <div className="absolute -bottom-40 -right-40 w-[500px] h-[500px] bg-emerald-500/10 rounded-full blur-[140px]"></div>


      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="text-center max-w-4xl mx-auto mb-24">
          <div className="inline-flex items-center gap-3 bg-white/5 border border-white/10 backdrop-blur-xl px-5 py-3 rounded-full mb-8">
            <div className="w-2 h-2 rounded-full bg-(--accent) animate-pulse"></div>

            <span className="text-(--accent) text-sm font-semibold uppercase tracking-[0.2em]"> Áreas de Atuação </span>
          </div>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-white">
            Eixos estratégicos para
            <span className="text-(--accent)">
              {" "}transformação territorial
            </span>
            .
          </h2>

          <p className="mt-8 text-lg text-slate-300 leading-relaxed">
            O Instituto Aveloz atua em diferentes frentes
            voltadas ao fortalecimento das comunidades,
            sustentabilidade e desenvolvimento humano.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {areas.map((area) => {
            const Icon = area.icon

            return (
              <div key={area.title} className="group relative overflow-hidden rounded-[36px] h-[600px] border border-white/10 shadow-[0_20px_60px_rgba(0,0,0,0.35)] transition-all duration-700 hover:-translate-y-3 hover:border-(--accent)/20">

                <img src={area.image} alt={area.title} className="absolute inset-0 w-full h-full object-cover transition-all duration-1800 group-hover:scale-110" />

                <div className="absolute inset-0 bg-linear-to-t from-[#020617] via-black/40 to-black/10"></div>

                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-all duration-700 bg-linear-to-t from-(--accent)/40 via-transparent to-(--accent)/10"></div>

                <div className="relative z-10 h-full flex flex-col justify-end p-10">
                  <div className="w-16 h-16 rounded-2xl bg-white/10 backdrop-blur-xl border border-white/20 flex items-center justify-center text-white mb-8 transition-all duration-500 group-hover:bg-(--accent)">
                    <Icon size={30} strokeWidth={2.2} />
                  </div>

                  <div className="mb-5">
                    <span className="bg-white/10 border border-white/10 backdrop-blur-xl text-white px-4 py-2 rounded-full text-xs uppercase tracking-[0.2em] font-medium">
                      Instituto Aveloz
                    </span>
                  </div>
                  <h3 className="text-4xl font-bold text-white leading-tight"> {area.title} </h3>
                  <p className="mt-6 text-lg text-slate-200 leading-relaxed">{area.description}</p>

                  <div className="mt-8 w-16 h-[3px] rounded-full bg-(--accent)"></div>
                </div>
              </div>
            )
          })}
        </div>

        <div className="grid md:grid-cols-3 gap-8 mt-24">
          {[
            {
              title: 'ESG',
              description:
                'Sustentabilidade e responsabilidade social.',
            },
            {
              title: 'PE',
              description:
                'Atuação territorial com sede em Pernambuco.',
            },
            {
              title: 'BR',
              description:
                'Projetos e iniciativas com abrangência nacional.',
            },
          ].map((item) => (
            <div key={item.title} className="relative overflow-hidden rounded-[32px] border border-white/10 bg-white/5 backdrop-blur-2xl p-10 text-center transition-all duration-500 hover:-translate-y-2 hover:border-(--primary)/20">
              <div className="absolute inset-0 opacity-0 hover:opacity-100 transition-all duration-500 bg-linear-to-b from-(--accent)/5 to-transparent" ></div>
              <h3 className="relative text-5xl font-bold text-(--accent)"> {item.title} </h3>
              <p className="relative mt-4 text-slate-300 leading-relaxed"> {item.description} </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default AreasSection