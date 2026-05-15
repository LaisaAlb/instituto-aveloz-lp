import { useEffect, useState } from 'react'
import { Menu, X } from 'lucide-react'
import logo from '../assets/Instituto-aveloz-logo.png'

function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const [isScrolled, setIsScrolled] = useState(false)
    const [activeSection, setActiveSection] = useState('')

    const navLinks = [
        { href: '#sobre', label: 'Quem Somos' },
        { href: '#atuacao', label: 'Objetivos' },
        { href: '#areas', label: 'Atuação' },
        { href: '#governanca', label: 'Governança' },
        { href: '#participar', label: 'Participar' },
    ]

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20)

            if (window.scrollY < 300) {
                setActiveSection('')
                return
            }

            const scrollPosition = window.scrollY + 200

            navLinks.forEach((link) => {
                const sectionId = link.href.replace('#', '')
                const section = document.getElementById(sectionId)

                if (section) {
                    const offsetTop = section.offsetTop
                    const offsetHeight = section.offsetHeight

                    if (
                        scrollPosition >= offsetTop &&
                        scrollPosition < offsetTop + offsetHeight
                    ) {
                        setActiveSection(sectionId)
                    }
                }
            })
        }

        handleScroll()

        window.addEventListener('scroll', handleScroll)

        return () => {
            window.removeEventListener('scroll', handleScroll)
        }
    }, [])

    useEffect(() => {
        if (isMenuOpen) {
            document.body.style.overflow = 'hidden'
        } else {
            document.body.style.overflow = 'auto'
        }

        return () => {
            document.body.style.overflow = 'auto'
        }
    }, [isMenuOpen])

    const handleGoToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        })

        setIsMenuOpen(false)
        setActiveSection('')
    }

    return (
        <header
            className={`
                fixed top-0 left-0 w-full z-50 transition-all duration-500
                ${isScrolled
                    ? 'bg-white/70 backdrop-blur-2xl border-b border-white/10'
                    : 'bg-transparent'
                }
            `}
        >
            <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-16">
                <div className="h-24 flex items-center justify-between">
                    <div className="flex-1 flex justify-start">
                        <button
                            onClick={handleGoToTop}
                            className="flex items-center cursor-pointer group"
                        >
                            <img
                                src={logo}
                                alt="Instituto Aveloz"
                                className="
                                    w-24 h-24 object-contain
                                    transition-all duration-500
                                    group-hover:scale-105
                                    lg:translate-x-8
                                "
                            />
                        </button>
                    </div>

                    <nav className="hidden lg:flex items-center gap-10">
                        {navLinks.map((link) => {
                            const isActive =
                                activeSection ===
                                link.href.replace('#', '')

                            return (
                                <a
                                    key={link.href}
                                    href={link.href}
                                    className={`
                                        relative font-medium transition-all duration-300
                                        after:absolute after:left-0 after:-bottom-2
                                        after:h-[2px]
                                        after:bg-(--primary)
                                        after:transition-all after:duration-300
                                       
                                        ${isActive
                                            ? 'text-(--primary) after:w-full'
                                            : `
            after:w-0
            hover:text-(--primary)
            hover:after:w-full
            ${!isScrolled
                                                ? 'text-white'
                                                : 'text-gray-700'
                                            }
          `
                                        }
                                    `}
                                >
                                    {link.label}
                                </a>
                            )
                        })}
                    </nav>

                    <div className="flex-1 flex justify-end items-center gap-4">
                        <a href="#contato"
                            className="
                                hidden lg:flex
                                bg-(--primary)
                                hover:bg-[#044A00]
                                text-white
                                transition-all duration-300
                                font-medium
                                py-3 px-8
                                rounded-full
                                shadow-[0_4px_14px_0_rgba(6,96,0,0.39)]
                                hover:shadow-[0_6px_20px_rgba(6,96,0,0.23)]
                                hover:-translate-y-0.5
                            "
                        >
                            Entre em contato
                        </a>

                        <button
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                            className="
                                lg:hidden
                                p-3
                                rounded-2xl
                                bg-(--primary)
                                backdrop-blur-xl
                                border border-white/20
                                text-gray-700 dark:text-white
                                transition-all duration-300
                            "
                            aria-label="Toggle menu"
                        >
                            {isMenuOpen ? (
                                <X size={22} />
                            ) : (
                                <Menu size={22} />
                            )}
                        </button>
                    </div>
                </div>
            </div>

            <div
                className={`
                    lg:hidden overflow-hidden transition-all duration-500
                    ${isMenuOpen
                        ? 'max-h-[600px] opacity-100'
                        : 'max-h-0 opacity-0'
                    }
                `}
            >
                <div
                    className="
                        mx-4 mb-4
                        rounded-[32px]
                        bg-white/70
                        backdrop-blur-2xl
                        border border-white/20
                        shadow-2xl
                        p-8
                    "
                >
                    <nav className="flex flex-col gap-2">
                        {navLinks.map((link) => {
                            const isActive =
                                activeSection ===
                                link.href.replace('#', '')

                            return (
                                <a
                                    key={link.href}
                                    href={link.href}
                                    onClick={() =>
                                        setIsMenuOpen(false)
                                    }
                                    className={`
                                        px-4 py-4 rounded-2xl
                                        font-medium transition-all duration-300
                                        
                                        ${isActive
                                            ? 'bg-(--primary) text-white'
                                            : 'text-gray-700'
                                        }
                                    `}
                                >
                                    {link.label}
                                </a>
                            )
                        })}

                        <button  className="
                                mt-4
                                bg-[#066000]
                                hover:bg-[#044A00]
                                text-white
                                transition-all duration-300
                                font-medium
                                py-4 px-6
                                rounded-2xl
                            ">
                            Entre em contato
                        </button>
                    </nav>
                </div>
            </div>
        </header>
    )
}

export default Navbar