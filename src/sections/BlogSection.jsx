import { useEffect } from "react"

function BlogSection() {
    useEffect(() => {
        const existingScript = document.querySelector(
            'script[src="https://elfsightcdn.com/platform.js"]'
        )

        if (!existingScript) {
            const script = document.createElement('script')
            script.src = 'https://elfsightcdn.com/platform.js'
            script.async = true
            document.body.appendChild(script)
        }
    }, [])

    return (
        <section
            id="blog"
            className="relative py-32 overflow-hidden bg-[#06110A]"
        >
            <div className="absolute -top-40 left-0 w-[500px] h-[500px] bg-green-500/10 rounded-full blur-[140px]" />
            <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-emerald-500/10 rounded-full blur-[140px]" />

            <div className="relative z-10 max-w-7xl mx-auto px-6">

                <div className="text-center max-w-4xl mx-auto mb-20">

                    <div className="inline-flex items-center gap-3 bg-white/5 border border-white/10 backdrop-blur-xl px-5 py-3 rounded-full mb-8">
                        <div className="w-2 h-2 rounded-full bg-(--accent) animate-pulse"></div>

                        <span className="text-(--accent) text-sm font-semibold uppercase tracking-[0.2em]">
                            Notícias & Atualizações
                        </span>
                    </div>

                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white">
                        Acompanhe nossas
                        <span className="text-(--accent)">
                            {" "}últimas publicações
                        </span>
                    </h2>

                    <p className="mt-8 text-lg text-slate-300 leading-relaxed">
                        Fique por dentro das ações, projetos, eventos e iniciativas
                        desenvolvidas pelo Instituto Aveloz.
                    </p>

                </div>

                <div className="bg-white/5 border border-white/10 rounded-[32px] overflow-hidden backdrop-blur-xl p-6">

                    {/* Widget Instagram */}
                    <div
                        className="elfsight-app-576528e2-9ba1-4e9a-a06a-47d1b297aaa8"
                        data-elfsight-app-lazy
                    ></div>

                </div>

            </div>
        </section>
    )
}

export default BlogSection