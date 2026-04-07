import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-zinc-50 dark:bg-zinc-950">
      {/* Hero Section */}
      <section className="max-w-6xl mx-auto px-6 py-24">
        <div className="max-w-3xl">
          <h1 className="text-5xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100 mb-6">
            AI Advisory for Growing Companies
          </h1>
          <p className="text-xl text-zinc-600 dark:text-zinc-400 mb-4 leading-relaxed">
            I help leadership teams make confident decisions about AI adoption —
            before they commit engineering resources. My advisory practice is built
            for small and mid-sized companies that need seasoned strategic guidance
            without the overhead of a large firm.
          </p>
          <p className="text-lg text-zinc-500 dark:text-zinc-500 mb-8 leading-relaxed">
            With a background directing technology strategy for enterprise sales
            platforms and multimillion-dollar initiatives, I bring the same rigour
            to companies that are ready to move forward with AI but want a clear,
            independent assessment first.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white font-medium px-6 py-3 rounded-lg transition-colors"
            >
              Schedule a Discussion
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

      {/* Why Advisory */}
      <section className="max-w-6xl mx-auto px-6 py-16">
        <h2 className="text-3xl font-bold text-zinc-900 dark:text-zinc-100 mb-3">
          Why Advisory First
        </h2>
        <p className="text-lg text-zinc-600 dark:text-zinc-400 mb-10 max-w-2xl">
          The costliest AI mistakes happen before a project starts — in the
          decisions about what to build, how to build it, and whether the
          organization is ready. Advisory engagement de-risks those decisions.
        </p>
        <div className="grid md:grid-cols-3 gap-6">
          {[
            {
              title: "Independent Perspective",
              description:
                "I have no vested interest in which tools or vendors you choose. My recommendations are unbiased and aligned solely with your business outcomes.",
              icon: "🎯",
            },
            {
              title: "Strategic Clarity",
              description:
                "Leadership teams walk away with a clear understanding of where AI creates real value for their operations — and where it doesn't — backed by a structured plan.",
              icon: "🧭",
            },
            {
              title: "Execution Readiness",
              description:
                "Every engagement produces architecture documents, roadmaps, and playbooks your team — or any engineering partner — can execute against with confidence.",
              icon: "📋",
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
              <p className="text-zinc-600 dark:text-zinc-400 text-sm leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Who I Work With */}
      <section className="max-w-6xl mx-auto px-6 py-16">
        <h2 className="text-3xl font-bold text-zinc-900 dark:text-zinc-100 mb-3">
          Who I Work With
        </h2>
        <p className="text-lg text-zinc-600 dark:text-zinc-400 mb-10 max-w-2xl">
          I partner with small to medium enterprises across sectors where AI
          adoption is becoming urgent — and the cost of getting it wrong is high.
        </p>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            {
              title: "E-Commerce",
              description:
                "Retailers and DTC brands looking to automate operations, personalize customer experiences, and scale with AI-driven tools.",
              icon: "🛒",
            },
            {
              title: "Marketing & Agencies",
              description:
                "Teams seeking AI-powered content workflows, campaign optimization, and data-driven decision-making at scale.",
              icon: "📣",
            },
            {
              title: "AI Startups",
              description:
                "Founders who need architectural guidance, go-to-market technical strategy, and investor-ready roadmaps.",
              icon: "🚀",
            },
            {
              title: "AI-Curious Companies",
              description:
                "Organizations exploring AI adoption but unsure where to start — I help you build a clear, defensible plan.",
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
              <p className="text-zinc-600 dark:text-zinc-400 text-sm leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* What I Advise On */}
      <section className="bg-white dark:bg-zinc-900 border-y border-zinc-200 dark:border-zinc-800">
        <div className="max-w-6xl mx-auto px-6 py-16">
          <h2 className="text-3xl font-bold text-zinc-900 dark:text-zinc-100 mb-3">
            What I Advise On
          </h2>
          <p className="text-lg text-zinc-600 dark:text-zinc-400 mb-10 max-w-2xl">
            Three domains — all grounded in real systems I've built and deployed,
            not theoretical frameworks.
          </p>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="p-6 rounded-xl border border-zinc-200 dark:border-zinc-800 hover:border-emerald-500/50 transition-colors">
              <div className="text-3xl mb-3">🔍</div>
              <h3 className="text-lg font-semibold text-zinc-900 dark:text-zinc-100 mb-2">
                Internal Knowledge &amp; RAG Systems
              </h3>
              <p className="text-zinc-600 dark:text-zinc-400 text-sm leading-relaxed">
                Your team's institutional knowledge is trapped in documents,
                tickets, and tribal expertise. I advise on building AI assistants
                that connect to your proprietary data so employees get accurate,
                sourced answers in seconds — accelerating onboarding, reducing
                repeated mistakes, and keeping expertise inside the company.
              </p>
            </div>
            <div className="p-6 rounded-xl border border-zinc-200 dark:border-zinc-800 hover:border-emerald-500/50 transition-colors">
              <div className="text-3xl mb-3">⚡</div>
              <h3 className="text-lg font-semibold text-zinc-900 dark:text-zinc-100 mb-2">
                Agentic AI &amp; Workflow Automation
              </h3>
              <p className="text-zinc-600 dark:text-zinc-400 text-sm leading-relaxed">
                Beyond answering questions, AI can now take action. I help
                organizations identify their highest-friction workflows — order
                processing, inventory reconciliation, customer triage — and
                design intelligent agent architectures that automate them end to
                end. Systems that reason, adapt, and escalate to humans when
                judgment is needed — multiplying output without multiplying
                headcount.
              </p>
            </div>
            <div className="p-6 rounded-xl border border-zinc-200 dark:border-zinc-800 hover:border-emerald-500/50 transition-colors">
              <div className="text-3xl mb-3">🛡️</div>
              <h3 className="text-lg font-semibold text-zinc-900 dark:text-zinc-100 mb-2">
                AI Governance &amp; Tool Vetting
              </h3>
              <p className="text-zinc-600 dark:text-zinc-400 text-sm leading-relaxed">
                Employees are already using AI tools — the question is whether
                your organization has a policy for it. I help you draft an AI
                cybersecurity and tool vetting framework so your team can use AI
                productively without exposing proprietary data to unvetted
                third-party tools.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Engagement Packages */}
      <section className="max-w-6xl mx-auto px-6 py-16">
          <h2 className="text-3xl font-bold text-zinc-900 dark:text-zinc-100 mb-3">
            Engagement Packages
          </h2>
          <p className="text-lg text-zinc-600 dark:text-zinc-400 mb-10 max-w-2xl">
            Two advisory tracks — one for companies building their own AI tools,
            and one for organizations that need to govern how their teams use
            third-party AI.
          </p>

          {/* Track 1: AI Build Advisory */}
          <div className="mb-12">
            <h3 className="text-xl font-semibold text-zinc-900 dark:text-zinc-100 mb-2">
              AI Build Advisory
            </h3>
            <p className="text-zinc-600 dark:text-zinc-400 mb-6 max-w-2xl">
              For enterprises planning to build their own internal AI tools. A
              three-phase engagement that takes you from readiness assessment
              through architecture blueprint to ongoing advisory support.
            </p>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                {
                  title: "Diagnosis",
                  description:
                    "A structured assessment of your organization's AI readiness. You receive a diagnostic report with prioritized recommendations and a transformation playbook tailored to your business context.",
                  icon: "🔍",
                  deliverables: [
                    "AI readiness assessment",
                    "Gap analysis & risk evaluation",
                    "Prioritized recommendation report",
                    "AI transformation playbook",
                  ],
                },
                {
                  title: "Roadmap",
                  description:
                    "Complete system architecture and engineering plan for AI-powered applications that automate your existing workflows. You receive a blueprint your team can build against — architecture, data flows, CI/CD strategy, testing frameworks, and a phased deployment timeline.",
                  icon: "🗺️",
                  deliverables: [
                    "Core API & system architecture",
                    "Data flow & integration design",
                    "CI/CD, testing & deployment strategy",
                    "Engineering timeline & scalability plan",
                  ],
                },
                {
                  title: "Advisory Retainer",
                  description:
                    "An ongoing advisory relationship with scheduled strategy sessions and progress audits. I monitor your AI adoption milestones, review compliance posture, and provide continuous guidance as your plans evolve.",
                  icon: "🤝",
                  deliverables: [
                    "Monthly strategy sessions",
                    "AI adoption progress audits",
                    "Compliance & readiness reviews",
                    "On-demand advisory access",
                  ],
                },
              ].map((pkg) => (
                <div
                  key={pkg.title}
                  className="group bg-zinc-50 dark:bg-zinc-950 rounded-xl p-6 shadow-sm border border-zinc-200 dark:border-zinc-800 hover:shadow-md hover:border-emerald-500/50 dark:hover:border-emerald-500/50 transition-all duration-200"
                >
                  <div className="text-3xl mb-4">{pkg.icon}</div>
                  <h3 className="text-xl font-semibold text-zinc-900 dark:text-zinc-100 mb-2">
                    {pkg.title}
                  </h3>
                  <p className="text-zinc-600 dark:text-zinc-400 text-sm leading-relaxed mb-4">
                    {pkg.description}
                  </p>
                  <ul className="space-y-2">
                    {pkg.deliverables.map((d) => (
                      <li
                        key={d}
                        className="flex items-start gap-2 text-sm text-zinc-700 dark:text-zinc-300"
                      >
                        <span className="text-emerald-600 dark:text-emerald-400 mt-0.5">
                          ✓
                        </span>
                        {d}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Track 2: AI Governance & Tool Vetting */}
          <div>
            <h3 className="text-xl font-semibold text-zinc-900 dark:text-zinc-100 mb-2">
              AI Governance & Tool Vetting
            </h3>
            <p className="text-zinc-600 dark:text-zinc-400 mb-6 max-w-2xl">
              For any organization whose employees are already using third-party
              AI tools — and leadership needs a cybersecurity policy to manage
              the risk. A standalone engagement, independent of whether you're
              building internal AI tools.
            </p>
            <div className="max-w-md">
              <div className="group bg-zinc-50 dark:bg-zinc-950 rounded-xl p-6 shadow-sm border border-zinc-200 dark:border-zinc-800 hover:shadow-md hover:border-emerald-500/50 dark:hover:border-emerald-500/50 transition-all duration-200">
                <div className="text-3xl mb-4">🛡️</div>
                <h3 className="text-xl font-semibold text-zinc-900 dark:text-zinc-100 mb-2">
                  AI Governance & Tool Vetting
                </h3>
                <p className="text-zinc-600 dark:text-zinc-400 text-sm leading-relaxed mb-4">
                  A policy framework that closes the gap between employee AI
                  adoption and IT security. I help you draft an AI cybersecurity
                  and external tool vetting policy — so your team can use AI
                  productively without exposing proprietary data.
                </p>
                <ul className="space-y-2">
                  {[
                    "AI usage & data handling policy",
                    "Third-party AI tool vetting framework",
                    "Approved tool registry & escalation process",
                    "Employee training guidelines",
                  ].map((d) => (
                    <li
                      key={d}
                      className="flex items-start gap-2 text-sm text-zinc-700 dark:text-zinc-300"
                    >
                      <span className="text-emerald-600 dark:text-emerald-400 mt-0.5">
                        ✓
                      </span>
                      {d}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
      </section>

      {/* CTA Section */}
      <section className="bg-emerald-600 dark:bg-emerald-700">
        <div className="max-w-6xl mx-auto px-6 py-16 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Let's Discuss Where Your Business Stands
          </h2>
          <p className="text-emerald-100 mb-8 max-w-2xl mx-auto">
            A brief conversation can reveal whether advisory engagement is the
            right next step — no commitment required.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 bg-white text-emerald-600 font-medium px-6 py-3 rounded-lg hover:bg-emerald-50 transition-colors"
          >
            Schedule a Discussion
            <span>→</span>
          </Link>
        </div>
      </section>
    </div>
  );
}
