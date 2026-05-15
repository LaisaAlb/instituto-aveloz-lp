import {
  ArrowUpRight,
  Building2,
  Globe,
  Contact,
  Mail,
  MapPin,
} from 'lucide-react'

import logo from '../assets/instituto-aveloz-logo.png'

const navigation = [
  { label: 'Sobre', href: '#sobre' },
  { label: 'Objetivos', href: '#objetivos' },
  { label: 'Áreas', href: '#areas' },
  { label: 'Governança', href: '#governanca' },
  { label: 'Contato', href: '#contato' },
]

function FooterSection() {
  return (
    <footer className="relative overflow-hidden bg-[#030B05] text-white border-t border-white/5">

      <div className="absolute top-0 left-0 w-[400px] h-[400px] bg-green-500/10 rounded-full blur-[140px]"></div>

      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-emerald-400/10 rounded-full blur-[140px]"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-[1.2fr_0.8fr_0.8fr] gap-14 py-24 border-b border-white/10">

          <div>
            <img src={logo} alt="Instituto Aveloz" className="h-10 object-contain mb-8" />

            <p className="text-gray-400 leading-relaxed text-[15px] max-w-md">
              O Instituto Aveloz atua na promoção do
              desenvolvimento territorial sustentável através
              de iniciativas sociais, ambientais e comunitárias
              que fortalecem pessoas, territórios e redes
              colaborativas.
            </p>

            <div className="flex items-center gap-4 mt-10">
              <a
                href="https://instagram.com/institutoaveloz"
                target="_blank"
                rel="noreferrer"
                className="
                  group
                  w-14 h-14
                  rounded-2xl
                  bg-white/5
                  border border-white/10
                  flex items-center justify-center
                  text-gray-300
                  hover:bg-(--primary)
                  hover:text-white
                  hover:-translate-y-1
                  transition-all duration-300
                "
              >
                <Contact
                  size={24}
                  className="transition-transform duration-300 group-hover:scale-110"
                />
              </a>

              <a
                href="mailto:contato@institutoaveloz.org"
                className="
                  group
                  w-14 h-14
                  rounded-2xl
                  bg-white/5
                  border border-white/10
                  flex items-center justify-center
                  text-gray-300
                  hover:bg-(--primary)
                  hover:text-white
                  hover:-translate-y-1
                  transition-all duration-300
                "
              >
                <Mail
                  size={22}
                  className="transition-transform duration-300 group-hover:scale-110"
                />
              </a>
            </div>
          </div>

          {/* Navegação */}
          <div>
            <span
              className="
                inline-flex items-center gap-2
                text-sm
                uppercase
                tracking-[0.2em]
                text-green-300
                font-semibold
                mb-8
              "
            >
              <Globe size={16} />
              Navegação
            </span>

            <ul className="space-y-5">
              {navigation.map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    className="
                      group
                      flex items-center justify-between
                      text-gray-400
                      hover:text-white
                      transition-all duration-300
                    "
                  >
                    <span className="flex items-center gap-3">
                      <span className="w-2 h-2 rounded-full bg-green-500"></span>

                      {item.label}
                    </span>

                    <ArrowUpRight
                      size={16}
                      className="
                        opacity-0
                        -translate-x-2
                        group-hover:opacity-100
                        group-hover:translate-x-0
                        transition-all duration-300
                      "
                    />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <span className="inline-flex items-center gap-2
                text-sm
                uppercase
                tracking-[0.2em]
                text-green-300
                font-semibold
                mb-8
              "
            >
              <Building2 size={16} />
              Institucional
            </span>

            <div className="space-y-6">
              <div
                className="
                  p-5
                  rounded-3xl
                  border border-white/10
                  bg-white/5
                "
              >
                <span className="text-xs uppercase tracking-widest text-gray-500">
                  CNPJ
                </span>

                <p className="mt-2 text-white font-medium">
                  58.337.350/0001-28
                </p>
              </div>

              <div
                className="
                  p-5
                  rounded-3xl
                  border border-white/10
                  bg-white/5
                "
              >
                <span className="text-xs uppercase tracking-widest text-gray-500">
                  Fundação
                </span>

                <p className="mt-2 text-white font-medium">
                  09/09/2024
                </p>
              </div>

              <div
                className="
                  p-5
                  rounded-3xl
                  border border-white/10
                  bg-white/5
                "
              >
                <span className="text-xs uppercase tracking-widest text-gray-500">
                  Localização
                </span>

                <div className="flex items-start gap-3 mt-2">
                  <MapPin
                    size={18}
                    className="text-green-400 mt-0.5 shrink-0"
                  />

                  <p className="text-white leading-relaxed">
                    Passira — PE
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="py-8 flex flex-col md:flex-row
            items-center
            justify-between
            gap-4
          "
        >
          <p className="text-sm text-gray-500 text-center md:text-left">
            © {new Date().getFullYear()} Instituto Aveloz.
            Todos os direitos reservados.
          </p>

          <p className="text-sm text-gray-600 text-center md:text-right">
            Desenvolvimento territorial sustentável • Inclusão social • ESG
          </p>

          <p className="text-sm text-gray-600 text-center md:text-right">
            Desenvolvido por Laísa Albuquerque
          </p>
        </div>
      </div>
    </footer>
  )
}

export default FooterSection