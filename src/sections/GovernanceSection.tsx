import {
  BadgeCheck,
  Building2,
  Download,
  Landmark,
  ShieldCheck,
  Users,
} from 'lucide-react'

import estatutoPdf from '../assets/estatuto.pdf'

const board = [
  {
    title: 'Presidência',
    name: 'Madalena Margarida da Silva Teixeira',
    icon: Landmark,
  },
  {
    title: 'Secretaria',
    name: 'Diretoria institucional',
    icon: Users,
  },
  {
    title: 'Tesouraria',
    name: 'Diretoria financeira',
    icon: Building2,
  },
]

function GovernanceSection() {
  const handleDownload = () => {
    const link = document.createElement('a')

    link.href = estatutoPdf
    link.download = 'Estatuto-Instituto-Aveloz.pdf'

    document.body.appendChild(link)

    link.click()

    document.body.removeChild(link)
  }

  return (
    <section id="governanca" className="relative py-32 overflow-hidden bg-slate-50">

      <div className="absolute top-0 left-0 w-[350px] h-[350px] bg-(--primary)/5 rounded-full blur-[120px]" />
      <div className="absolute bottom-0 right-0 w-[350px] h-[350px] bg-emerald-500/5 rounded-full blur-[120px]" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">

        <div className="text-center max-w-4xl mx-auto mb-24">

          <div className="inline-flex items-center gap-3 bg-white border border-slate-200 shadow-sm px-5 py-3 rounded-full mb-8">
            <ShieldCheck size={18} className="text-(--primary)" />

            <span className="text-slate-700 text-sm font-semibold uppercase tracking-[0.2em]">
              Governança
            </span>
          </div>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-slate-900">
            Transparência e
            <span className="text-(--primary)"> compromisso</span>.
          </h2>

          <p className="mt-8 text-lg text-slate-600 leading-relaxed">
            O Instituto Aveloz atua com compromisso ético,
            responsabilidade social e governança transparente,
            fortalecendo relações institucionais e comunitárias.
          </p>
        </div>

        <div className="grid lg:grid-cols-[1.2fr_0.8fr] gap-10">

          {/* LEFT */}
          <div className="relative overflow-hidden rounded-[32px] border border-slate-200 bg-white shadow-sm p-10 lg:p-12">

            <div className="absolute top-0 right-0 w-60 h-60 bg-emerald-500/5 rounded-full blur-[120px]" />

            <div className="relative z-10">

              <div className="flex items-center gap-4 mb-12">

                <div className="w-14 h-14 rounded-2xl bg-(--primary) flex items-center justify-center text-white shadow-sm">
                  <Users size={26} />
                </div>

                <div>
                  <span className="text-sm uppercase tracking-[0.2em] text-(--primary) font-semibold">
                    Diretoria Institucional
                  </span>

                  <h3 className="text-3xl font-bold text-slate-900 mt-2">
                    Estrutura organizacional
                  </h3>
                </div>
              </div>

              <div className="space-y-6">

                {board.map((item) => {
                  const Icon = item.icon

                  return (
                    <div
                      key={item.title}
                      className="
                    group flex items-start gap-5
                    p-6 rounded-3xl
                    border border-slate-100
                    bg-slate-50
                    transition-all duration-300
                    hover:-translate-y-1
                    hover:border-slate-200
                    hover:bg-white
                  "
                    >
                      <div className="
                    w-14 h-14 rounded-2xl
                    bg-emerald-50
                    text-(--primary)
                    flex items-center justify-center
                    shrink-0
                    transition-all duration-300
                    group-hover:bg-(--primary)
                    group-hover:text-white
                  ">
                        <Icon size={24} />
                      </div>

                      <div>
                        <h4 className="text-xl font-bold text-slate-900">
                          {item.title}
                        </h4>

                        <p className="mt-2 text-slate-600 leading-relaxed">
                          {item.name}
                        </p>
                      </div>
                    </div>
                  )
                })}

              </div>

            </div>
          </div>

          {/* RIGHT */}
          <div className="
        relative overflow-hidden
        rounded-[32px]
        bg-(--primary)
        p-10 lg:p-12
        text-white
        flex flex-col justify-between
        shadow-sm
      ">

            <div className="absolute -top-10 -right-10 w-64 h-64 bg-white/10 rounded-full blur-[100px]" />

            <div className="relative z-10">

              <div className="w-16 h-16 rounded-2xl bg-white/10 border border-white/10 flex items-center justify-center">
                <BadgeCheck size={30} />
              </div>

              <span className="block mt-8 uppercase tracking-[0.2em] text-sm font-semibold text-green-100">
                Transparência Institucional
              </span>

              <h3 className="text-4xl font-bold leading-tight mt-6">
                Consulte documentos e informações institucionais.
              </h3>

              <p className="mt-8 text-lg text-green-50 leading-relaxed">
                Disponibilizamos informações institucionais, diretrizes organizacionais e documentos públicos
                para fortalecer a confiança e a transparência.
              </p>

            </div>

            <div className="relative z-10 mt-14">

              <button
                onClick={handleDownload}
                className="
              w-full
              bg-white
              text-(--primary)
              px-8 py-5
              rounded-2xl
              font-semibold
              flex items-center justify-center gap-3
              transition-all duration-300
              hover:-translate-y-1
              hover:bg-slate-100
            "
              >
                <Download size={20} />
                Download do Estatuto
              </button>

            </div>

          </div>

        </div>

      </div>
    </section>
  )
}

export default GovernanceSection