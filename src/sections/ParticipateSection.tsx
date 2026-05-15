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
    window.open(
      'https://ig.me/m/institutoaveloz',
      '_blank'
    )
  }

  const handleSubmit = (
    e: React.FormEvent<HTMLFormElement>
  ) => {
    e.preventDefault()

    const text = `Olá, Instituto Aveloz! Meu nome é ${formData.name}, Email: ${formData.email} Mensagem: ${formData.message}
    `
    navigator.clipboard.writeText(text)
    window.open(
      'https://ig.me/m/institutoaveloz',
      '_blank'
    )
  }

  return (
    <section id="participar" className="relative overflow-hidden py-32 bg-[#07110B]">

      <div className="absolute top-0 left-0 w-[400px] h-[400px] bg-green-500/10 rounded-full blur-[120px]"></div>

      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-emerald-400/10 rounded-full blur-[120px]"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="overflow-hidden rounded-[40px] border border-white/10 bg-white/5 backdrop-blur-2xl shadow-[0_20px_80px_rgba(0,0,0,0.35)]">
          <div className="grid lg:grid-cols-[1fr_0.9fr]">

            <div className="relative p-12 lg:p-20 text-white border-b lg:border-b-0 lg:border-r border-white/10">
              <div className="absolute top-0 right-0 w-72 h-72 bg-(--accent)/10 rounded-full blur-[100px]"></div>

              <div className="relative z-10">
                <div className="inline-flex items-center gap-3 bg-white/5 border border-white/10 backdrop-blur-xl px-5 py-3 rounded-full">

                  <div className="w-2.5 h-2.5 rounded-full bg-(--accent) animate-pulse"></div>

                  <span className="text-sm uppercase tracking-[0.2em] font-semibold text-(--accent)">Como Participar</span>
                </div>

                <h2 className="text-4xl lg:text-6xl font-bold mt-10 leading-tight">
                  Faça parte dessa
                  <span className="text-(--accent)">
                    {' '}transformação
                  </span>
                  .
                </h2>

                <p className="mt-8 text-lg text-gray-300 leading-relaxed max-w-xl">
                  Pessoas e organizações que atuam com
                  agricultura familiar, sustentabilidade,
                  inclusão social e desenvolvimento comunitário
                  podem participar das iniciativas promovidas
                  pelo Instituto Aveloz.
                </p>

                <div className="mt-14 space-y-6">
                  <button type="button" onClick={handleInstagramDirect} className="w-full text-left group flex items-start gap-5 p-6 rounded-3xl border border-white/10 bg-white/5 hover:bg-white/10 transition-all duration-300">
                    <div className="w-14 h-14 rounded-2xl bg-(--accent)/10 text-(--accent) flex items-center justify-center shrink-0 transition-all duration-300 group-hover:bg-(--accent) group-hover:text-white">
                      <Contact size={24} />
                    </div>

                    <div>
                      <h3 className="text-xl font-bold">Instagram</h3>

                      <p className="mt-2 text-gray-300">
                        @institutoaveloz
                      </p>
                    </div>
                  </button>

                  <div
                    className="
                      group
                      flex items-start gap-5
                      p-6
                      rounded-3xl
                      border border-white/10
                      bg-white/5
                      hover:bg-white/10
                      transition-all duration-300
                    "
                  >
                    <div
                      className="
                        w-14 h-14
                        rounded-2xl
                        bg-(--accent)/10
                        text-(--accent)
                        flex items-center justify-center
                        shrink-0
                        transition-all duration-300
                        group-hover:bg-(--accent)
                        group-hover:text-white
                      "
                    >
                      <MapPin size={24} />
                    </div>

                    <div>
                      <h3 className="text-xl font-bold">
                        Endereço
                      </h3>

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

            <div
              className="
                relative
                p-12 lg:p-20
                bg-white
              "
            >
              <div className="mb-10">
                <span
                  className="
                    text-sm
                    uppercase
                    tracking-[0.2em]
                    font-semibold
                    text-(--primary)
                  "
                >
                  Entre em contato
                </span>

                <h3
                  className="
                    mt-4
                    text-4xl
                    font-bold
                    text-slate-900
                    leading-tight
                  "
                >
                  Vamos conversar.
                </h3>

                <p className="mt-4 text-slate-500 leading-relaxed">
                  Sua mensagem será copiada automaticamente
                  e o direct do Instagram será aberto.
                </p>
              </div>

              <form
                onSubmit={handleSubmit}
                className="space-y-6"
              >
                <div>
                  <label className="block mb-3 font-medium text-slate-700">
                    Nome
                  </label>

                  <input
                    type="text"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Digite seu nome"
                    className="
                      w-full
                      p-5
                      rounded-2xl
                      border border-gray-200
                      bg-[#F8FAF8]
                      outline-none
                      transition-all duration-300
                      focus:border-(--primary)
                      focus:bg-white
                    "
                  />
                </div>

                <div>
                  <label className="block mb-3 font-medium text-slate-700">
                    Email
                  </label>

                  <input
                    type="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Digite seu email"
                    className="w-full p-5 rounded-2xl border border-gray-200 bg-[#F8FAF8] outline-none transition-all duration-300 focus:border-(--primary) focus:bg-white"
                  />
                </div>

                <div>
                  <label className="block mb-3 font-medium text-slate-700">
                    Mensagem
                  </label>

                  <textarea
                    rows={6}
                    name="message"
                    required
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Digite sua mensagem"
                    className="w-full p-5 rounded-2xl border border-gray-200 bg-[#F8FAF8] outline-none resize-none transition-all duration-300 focus:border-(--primary) focus:bg-white"
                  />
                </div>

                <button type="submit" className="group w-full bg-(--accent) hover:bg-(--accent-light) text-white py-5 rounded-2xl font-semibold flex items-center justify-center gap-3 transition-all duration-300 hover:-translate-y-1 shadow-[0_15px_40px_rgba(6,96,0,0.25)]">
                  <SendHorizonal size={20} className="transition-transform duration-300 group-hover:translate-x-1" />

                  Enviar mensagem

                  <ArrowRight size={18} className="transition-transform duration-300 group-hover:translate-x-1" />
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