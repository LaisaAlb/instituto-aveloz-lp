import {
  Building2,
  Landmark,
  ShieldCheck,
  Users,
} from 'lucide-react'

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
  // const handleDownload = () => {
  //   const link = document.createElement('a')
  //   link.href = estatutoPdf
  //   link.download = 'Estatuto-Instituto-Aveloz.pdf'
  //   document.body.appendChild(link)
  //   link.click()
  //   document.body.removeChild(link)
  // }

  return (
    <section
      id="governanca"
      className="relative py-20 md:py-32 overflow-hidden bg-slate-50"
    >

      <div className="absolute top-0 left-0 w-[220px] md:w-[350px] h-[220px] md:h-[350px] bg-(--primary)/5 rounded-full blur-[100px]" />
      <div className="absolute bottom-0 right-0 w-[220px] md:w-[350px] h-[220px] md:h-[350px] bg-emerald-500/5 rounded-full blur-[100px]" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-6">

        <div className="text-center max-w-3xl mx-auto mb-14 md:mb-24">

          <div className="inline-flex items-center gap-2 md:gap-3 bg-white border border-slate-200 shadow-sm px-4 md:px-5 py-2 md:py-3 rounded-full mb-6 md:mb-8">
            <ShieldCheck size={18} className="text-(--primary)" />

            <span className="text-slate-700 text-xs md:text-sm font-semibold uppercase tracking-[0.2em]">
              Governança
            </span>
          </div>

          <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold leading-tight text-slate-900">
            Transparência e <span className="text-(--primary)">compromisso</span>.
          </h2>

          <p className="mt-6 md:mt-8 text-sm md:text-lg text-slate-600 leading-relaxed">
            Governança transparente e responsabilidade institucional.
          </p>

        </div>

        <div className="relative overflow-hidden rounded-3xl p-6 md:p-10 lg:p-12 flex flex-col justify-center min-h-[420px] md:min-h-[520px] shadow-sm">

          <div className="relative overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm p-5 md:p-10 lg:p-12">

            <div className="absolute top-0 right-0 w-40 md:w-60 h-40 md:h-60 bg-emerald-500/5 rounded-full blur-[100px]" />

            <div className="relative z-10">

              <div className="flex items-center gap-3 md:gap-4 mb-8 md:mb-12">

                <div className="w-12 md:w-14 h-12 md:h-14 rounded-2xl bg-(--primary) flex items-center justify-center text-white">
                  <Users size={22} />
                </div>

                <div>
                  <span className="text-xs md:text-sm uppercase tracking-[0.2em] text-(--primary) font-semibold">
                    Diretoria
                  </span>

                  <h3 className="text-xl md:text-3xl font-bold text-slate-900 mt-1 md:mt-2">
                    Estrutura organizacional
                  </h3>
                </div>

              </div>

              <div className="space-y-4 md:space-y-6">

                {board.map((item) => {
                  const Icon = item.icon

                  return (
                    <div
                      key={item.title}
                      className="flex items-start gap-4 md:gap-5 p-4 md:p-6 rounded-2xl md:rounded-3xl border border-slate-100 bg-slate-50 hover:bg-white transition"
                    >

                      <div className="w-12 md:w-14 h-12 md:h-14 rounded-2xl bg-emerald-50 text-(--primary) flex items-center justify-center shrink-0">
                        <Icon size={20} />
                      </div>

                      <div>
                        <h4 className="text-lg md:text-xl font-bold text-slate-900">
                          {item.title}
                        </h4>

                        <p className="mt-1 md:mt-2 text-sm md:text-base text-slate-600 leading-relaxed">
                          {item.name}
                        </p>
                      </div>

                    </div>
                  )
                })}

              </div>

            </div>
          </div>

          {/* <div className="
            relative overflow-hidden
            rounded-3xl
            bg-(--primary)
            p-6 md:p-10 lg:p-12
            text-white
            flex flex-col justify-between
            shadow-sm
          ">

            <div className="absolute -top-10 -right-10 w-48 md:w-64 h-48 md:h-64 bg-white/10 rounded-full blur-[100px]" />

            <div className="relative z-10">

              <div className="w-14 md:w-16 h-14 md:h-16 rounded-2xl bg-white/10 border border-white/10 flex items-center justify-center">
                <BadgeCheck size={26} />
              </div>

              <span className="block mt-6 md:mt-8 uppercase tracking-[0.2em] text-xs md:text-sm font-semibold text-green-100">
                Transparência Institucional
              </span>

              <h3 className="text-2xl md:text-4xl font-bold leading-tight mt-5 md:mt-6">
                Consulte documentos institucionais.
              </h3>

              <p className="mt-6 md:mt-8 text-sm md:text-lg text-green-50 leading-relaxed">
                Acesso público às diretrizes e estatuto.
              </p>

            </div>

            <div className="relative z-10 mt-10 md:mt-14">

              <button
                onClick={handleDownload}
                className="
                  w-full
                  bg-white
                  text-(--primary)
                  px-6 md:px-8 py-4 md:py-5
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

          </div> */}

        </div>

      </div>
    </section>
  )
}

export default GovernanceSection