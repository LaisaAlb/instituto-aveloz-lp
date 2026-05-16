import { useState } from 'react'
import {
  ArrowRight,
  Contact,
  MapPin,
  SendHorizonal,
} from 'lucide-react'

function ParticipateSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  })

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleInstagramDirect = () => {
    window.open('https://ig.me/m/institutoaveloz', '_blank')
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    const text = `Olá, Instituto Aveloz! Nome: ${formData.name}, Email: ${formData.email}, Mensagem: ${formData.message}`

    navigator.clipboard.writeText(text)
    window.open('https://ig.me/m/institutoaveloz', '_blank')
  }

  return (
    <section
      id="participar"
      className="relative overflow-hidden py-20 md:py-32 bg-[#07110B]"
    >
      {/* BACKGROUND */}
      <div className="absolute top-0 left-0 w-[220px] md:w-[400px] h-[220px] md:h-[400px] bg-green-500/10 rounded-full blur-[120px]" />
      <div className="absolute bottom-0 right-0 w-[220px] md:w-[400px] h-[220px] md:h-[400px] bg-emerald-400/10 rounded-full blur-[120px]" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-6">

        <div className="overflow-hidden rounded-3xl md:rounded-[40px] border border-white/10 bg-white/5 backdrop-blur-2xl shadow-[0_20px_80px_rgba(0,0,0,0.35)]">

          <div className="grid lg:grid-cols-[1fr_0.9fr]">

            {/* LEFT */}
            <div className="relative p-6 md:p-12 lg:p-20 text-white border-b lg:border-b-0 lg:border-r border-white/10">

              <div className="absolute top-0 right-0 w-40 md:w-72 h-40 md:h-72 bg-(--accent)/10 rounded-full blur-[100px]" />

              <div className="relative z-10">

                <div className="inline-flex items-center gap-2 md:gap-3 bg-white/5 border border-white/10 px-4 md:px-5 py-2 md:py-3 rounded-full">
                  <div className="w-2 h-2 md:w-2.5 md:h-2.5 rounded-full bg-(--accent) animate-pulse" />

                  <span className="text-xs md:text-sm uppercase tracking-[0.2em] font-semibold text-(--accent)">
                    Como Participar
                  </span>
                </div>

                <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold mt-8 md:mt-10 leading-tight">
                  Faça parte da{' '}
                  <span className="text-(--accent)">transformação</span>.
                </h2>

                <p className="mt-6 md:mt-8 text-sm md:text-lg text-gray-300 leading-relaxed max-w-xl">
                  Participe das iniciativas do Instituto Aveloz.
                </p>

                <div className="mt-10 md:mt-14 space-y-4 md:space-y-6">

                  <button
                    type="button"
                    onClick={handleInstagramDirect}
                    className="w-full flex items-start gap-4 md:gap-5 p-4 md:p-6 rounded-2xl md:rounded-3xl border border-white/10 bg-white/5 hover:bg-white/10 transition"
                  >
                    <div className="w-12 md:w-14 h-12 md:h-14 rounded-2xl bg-(--accent)/10 text-(--accent) flex items-center justify-center">
                      <Contact size={22} />
                    </div>

                    <div>
                      <h3 className="text-lg md:text-xl font-bold">
                        Instagram
                      </h3>
                      <p className="mt-1 md:mt-2 text-sm md:text-base text-gray-300">
                        @institutoaveloz
                      </p>
                    </div>
                  </button>

                  <div className="flex items-start gap-4 md:gap-5 p-4 md:p-6 rounded-2xl md:rounded-3xl border border-white/10 bg-white/5">

                    <div className="w-12 md:w-14 h-12 md:h-14 rounded-2xl bg-(--accent)/10 text-(--accent) flex items-center justify-center">
                      <MapPin size={22} />
                    </div>

                    <div>
                      <h3 className="text-lg md:text-xl font-bold">
                        Endereço
                      </h3>

                      <p className="mt-1 md:mt-2 text-sm md:text-base text-gray-300">
                        Passira — PE
                      </p>
                    </div>

                  </div>

                </div>

              </div>
            </div>

            {/* RIGHT */}
            <div className="relative p-6 md:p-12 lg:p-20 bg-white">

              <div className="mb-8 md:mb-10">
                <span className="text-xs md:text-sm uppercase tracking-[0.2em] font-semibold text-(--primary)">
                  Entre em contato
                </span>

                <h3 className="mt-3 md:mt-4 text-2xl md:text-4xl font-bold text-slate-900">
                  Vamos conversar
                </h3>

                <p className="mt-3 md:mt-4 text-sm md:text-base text-slate-500">
                  Sua mensagem será enviada via Instagram.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4 md:space-y-6">

                <input
                  name="name"
                  placeholder="Nome"
                  onChange={handleChange}
                  className="w-full p-4 md:p-5 rounded-2xl border bg-[#F8FAF8]"
                />

                <input
                  name="email"
                  placeholder="Email"
                  onChange={handleChange}
                  className="w-full p-4 md:p-5 rounded-2xl border bg-[#F8FAF8]"
                />

                <textarea
                  name="message"
                  rows={5}
                  placeholder="Mensagem"
                  onChange={handleChange}
                  className="w-full p-4 md:p-5 rounded-2xl border bg-[#F8FAF8] resize-none"
                />

                <button
                  type="submit"
                  className="w-full bg-(--accent) text-white py-4 md:py-5 rounded-2xl font-semibold flex items-center justify-center gap-3"
                >
                  <SendHorizonal size={18} />
                  Enviar
                  <ArrowRight size={16} />
                </button>

              </form>

            </div>

          </div>

        </div>

      </div>
    </section>
  )
}

export default ParticipateSection