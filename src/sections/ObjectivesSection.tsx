import { Globe, Sprout, Handshake, GraduationCap, Palmtree, Users } from 'lucide-react'

const services = [
  {
    title: 'Desenvolvimento Territorial',
    icon: Globe,
    description: 'Articulação de dimensões sociais, institucionais e políticas para gerar protagonismo e qualidade de vida no campo e na cidade.',
  },
  {
    title: 'Agroecologia e Agricultura',
    icon: Sprout,
    description: 'Apoio ao fortalecimento da agricultura familiar com ênfase em processos produtivos sustentáveis e resiliência climática.',
  },
  {
    title: 'Processos Formativos',
    icon: GraduationCap,
    description: 'Capacitação de agentes facilitadores e técnicos através de cursos, visitas e metodologias de educação contextualizada.',
  },
  {
    title: 'Cultura e Economia Criativa',
    icon: Palmtree,
    description: 'Desenvolvimento de dinâmicas territoriais baseadas na valorização cultural e no fortalecimento da economia solidária.',
  },
  {
    title: 'Direitos e Cidadania',
    icon: Handshake,
    description: 'Promoção da ética, paz, direitos humanos e democracia através da assessoria a organizações sociais e populares.',
  },
  {
    title: 'Assistência Técnica (ATER)',
    icon: Users,
    description: 'Prestação de assistência técnica e extensão rural utilizando metodologias participativas para o desenvolvimento humano.',
  },
]

function ObjectivesSection() {
  return (
    <section id="objetivos" className="relative py-32 overflow-hidden bg-slate-50">
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-(--primary)/5 rounded-full blur-[140px]" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-(--primary)/5 rounded-full blur-[140px]" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">

        <div className="text-center mb-24 max-w-4xl mx-auto">

          <div className="inline-flex items-center gap-3 bg-white border border-slate-200 shadow-sm px-5 py-3 rounded-full mb-8">
            <div className="w-2 h-2 rounded-full bg-(--primary) animate-pulse"></div>

            <span className="text-slate-700 text-sm font-semibold uppercase tracking-[0.2em]">
              Objetivos com Impacto
            </span>
          </div>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight tracking-tight text-slate-900">
            Construindo impacto sustentável
            <span className="text-(--primary)"> onde mais importa</span>.
          </h2>

          <p className="mt-8 text-lg leading-relaxed text-slate-600">
            Atuamos por meio de iniciativas sociais, ambientais e educacionais que fortalecem
            comunidades e promovem transformação territorial.
          </p>
        </div>

        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">

          {services.map((service, index) => {
            const Icon = service.icon

            return (
              <div key={index} className="group relative overflow-hidden rounded-[28px] border border-slate-200 bg-white shadow-sm p-10 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_50px_rgba(0,0,0,0.08)] hover:border-slate-300">

                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-all duration-300 bg-linear-to-b from-slate-50 to-transparent" />

                <div className="relative w-16 h-16 rounded-2xl bg-linear-to-br from-(--primary) to-emerald-500 flex items-center justify-center shadow-md mb-8 transition-transform duration-300 group-hover:scale-105">
                  <Icon size={30} className="text-white" strokeWidth={2.2} />
                </div>

                <h3 className="text-xl font-bold mb-4 text-slate-900">
                  {service.title}
                </h3>

                <p className="text-slate-600 leading-relaxed text-[14.5px]">
                  Iniciativas estratégicas voltadas ao fortalecimento territorial,
                  inclusão social e desenvolvimento sustentável das comunidades.
                </p>

                <div className="mt-6 h-[2px] w-12 rounded-full bg-linear-to-r from-(--primary) to-transparent" />

              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default ObjectivesSection