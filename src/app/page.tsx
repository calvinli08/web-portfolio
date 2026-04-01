import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-zinc-50 dark:bg-zinc-950">
      {/* Hero Section */}
      <section className="max-w-6xl mx-auto px-6 py-24">
        <div className="max-w-3xl">
          <h1 className="text-5xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100 mb-6">
            Full Stack Engineer & AI Consultant
          </h1>
          <p className="text-xl text-zinc-600 dark:text-zinc-400 mb-8 leading-relaxed">
            7+ years of experience building scalable platforms and integrating AI 
            into enterprise workflows. I help organizations leverage technology 
            to achieve their business goals.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white font-medium px-6 py-3 rounded-lg transition-colors"
            >
              Start a Project
              <span>→</span>
            </Link>
            <Link
              href="/services"
              className="inline-flex items-center gap-2 border border-zinc-300 dark:border-zinc-700 text-zinc-900 dark:text-zinc-100 font-medium px-6 py-3 rounded-lg hover:bg-zinc-100 dark:hover:bg-zinc-900 transition-colors"
            >
              View Services
            </Link>
          </div>
        </div>
      </section>

      {/* Expertise Section */}
      <section className="bg-white dark:bg-zinc-900 border-y border-zinc-200 dark:border-zinc-800">
        <div className="max-w-6xl mx-auto px-6 py-16">
          <h2 className="text-3xl font-bold text-zinc-900 dark:text-zinc-100 mb-8">
            Areas of Expertise
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                title: "Full Stack Development",
                description:
                  "Scalable web applications from database to frontend",
                icon: "⚡",
              },
              {
                title: "AI Integration",
                description:
                  "RAG, NLP, and intelligent automation solutions",
                icon: "🤖",
              },
              {
                title: "Technical Consulting",
                description:
                  "Strategic guidance for C-suite stakeholders",
                icon: "💡",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="p-6 rounded-xl border border-zinc-200 dark:border-zinc-800 hover:border-emerald-500/50 transition-colors"
              >
                <div className="text-3xl mb-3">{item.icon}</div>
                <h3 className="text-lg font-semibold text-zinc-900 dark:text-zinc-100 mb-2">
                  {item.title}
                </h3>
                <p className="text-zinc-600 dark:text-zinc-400">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="max-w-6xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-4 gap-8 text-center">
          {[
            { value: "7+", label: "Years Experience" },
            { value: "$MM+", label: "Projects Directed" },
            { value: "M.S.", label: "AI & ECE Degrees" },
            { value: "100%", label: "Client Satisfaction" },
          ].map((stat) => (
            <div key={stat.label}>
              <div className="text-4xl font-bold text-emerald-600 dark:text-emerald-400 mb-2">
                {stat.value}
              </div>
              <div className="text-zinc-600 dark:text-zinc-400">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-emerald-600 dark:bg-emerald-700">
        <div className="max-w-6xl mx-auto px-6 py-16 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Transform Your Business?
          </h2>
          <p className="text-emerald-100 mb-8 max-w-2xl mx-auto">
            Let's discuss how I can help you leverage AI and modern software 
            engineering to achieve your goals.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 bg-white text-emerald-600 font-medium px-6 py-3 rounded-lg hover:bg-emerald-50 transition-colors"
          >
            Get in Touch
            <span>→</span>
          </Link>
        </div>
      </section>
    </div>
  );
}
