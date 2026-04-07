export const metadata = {
  title: "About | AI Advisory Consultant",
  description: "AI advisory consultant with 7+ years of experience across e-commerce, consulting, and advertising",
};

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-zinc-50 dark:bg-zinc-950">
      <div className="max-w-4xl mx-auto px-6 py-16">
        <h1 className="text-4xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100 mb-8">
          About Me
        </h1>

        <div className="prose prose-zinc dark:prose-invert max-w-none">
          <p className="text-lg text-zinc-600 dark:text-zinc-400 leading-relaxed">
            I'm an AI Advisory Consultant with 7+ years of experience in full
            stack engineering and AI engineering across e-commerce, consulting,
            and advertising. I've spent my career building and scaling technology
            for small and medium enterprises — the companies that move fast,
            operate with real constraints, and can't afford to get their AI
            strategy wrong.
          </p>
          <p className="text-lg text-zinc-600 dark:text-zinc-400 leading-relaxed mt-4">
            That background shapes how I advise. I've sat on the other side of
            the table — architecting systems, leading engineering teams, and
            answering to stakeholders who needed clear answers, not jargon. Today,
            I bring that perspective to leadership teams who want an independent,
            experienced voice guiding their AI decisions before they commit
            engineering resources.
          </p>

          <h2 className="text-2xl font-semibold text-zinc-900 dark:text-zinc-100 mt-12 mb-4">
            AI Expertise
          </h2>
          <p className="text-zinc-600 dark:text-zinc-400 mb-6">
            My advisory practice is grounded in hands-on technical depth. I've
            built and deployed AI systems across the stack — so my recommendations
            come from experience, not theory. My work falls into three areas:
          </p>

          <div className="space-y-4 mb-8">
            <div className="bg-white dark:bg-zinc-900 rounded-lg p-5 shadow-sm border border-zinc-200 dark:border-zinc-800">
              <h3 className="text-base font-semibold text-zinc-900 dark:text-zinc-100 mb-1">
                Internal Knowledge &amp; RAG Systems
              </h3>
              <p className="text-zinc-600 dark:text-zinc-400 text-sm leading-relaxed">
                AI assistants connected to your proprietary data — SOPs, product
                catalogs, support histories — so employees get accurate, sourced
                answers instantly. Faster onboarding, fewer repeated mistakes,
                and expertise that stays in the company.
              </p>
            </div>
            <div className="bg-white dark:bg-zinc-900 rounded-lg p-5 shadow-sm border border-zinc-200 dark:border-zinc-800">
              <h3 className="text-base font-semibold text-zinc-900 dark:text-zinc-100 mb-1">
                Agentic AI &amp; Workflow Automation
              </h3>
              <p className="text-zinc-600 dark:text-zinc-400 text-sm leading-relaxed">
                Intelligent systems that automate high-friction workflows end to
                end — order processing, inventory reconciliation, customer triage.
                They reason, adapt, and escalate to humans when judgment is needed,
                multiplying output without multiplying headcount.
              </p>
            </div>
            <div className="bg-white dark:bg-zinc-900 rounded-lg p-5 shadow-sm border border-zinc-200 dark:border-zinc-800">
              <h3 className="text-base font-semibold text-zinc-900 dark:text-zinc-100 mb-1">
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

          <p className="text-zinc-600 dark:text-zinc-400 mb-6">
            Underpinning all three is deep technical expertise across the AI stack:
          </p>
          <div className="grid md:grid-cols-2 gap-4">
            {[
              "Retrieval-Augmented Generation (RAG)",
              "Vector Databases & Hybrid Search",
              "ETL Pipeline Development",
              "Natural Language Processing (NLP)",
              "Prompt Engineering & Optimization",
              "Named Entity Recognition (NER)",
              "BM25 Search Implementation",
              "Enterprise Workflow Automation",
            ].map((skill) => (
              <div
                key={skill}
                className="flex items-center gap-3 bg-white dark:bg-zinc-900 rounded-lg px-4 py-3 shadow-sm border border-zinc-200 dark:border-zinc-800"
              >
                <span className="w-2 h-2 bg-emerald-500 rounded-full"></span>
                <span className="text-zinc-700 dark:text-zinc-300">
                  {skill}
                </span>
              </div>
            ))}
          </div>

          <h2 className="text-2xl font-semibold text-zinc-900 dark:text-zinc-100 mt-12 mb-4">
            Experience Highlights
          </h2>
          <ul className="space-y-3 text-zinc-600 dark:text-zinc-400">
            <li className="flex gap-3">
              <span className="text-emerald-600 dark:text-emerald-400">•</span>
              Provided technical direction for multimillion-dollar sales platform
              projects serving enterprise clients
            </li>
            <li className="flex gap-3">
              <span className="text-emerald-600 dark:text-emerald-400">•</span>
              Advised C-suite stakeholders on software project direction,
              timelines, and engineering best practices
            </li>
            <li className="flex gap-3">
              <span className="text-emerald-600 dark:text-emerald-400">•</span>
              Led cross-functional teams delivering enterprise-grade solutions
              across e-commerce, consulting, and advertising
            </li>
            <li className="flex gap-3">
              <span className="text-emerald-600 dark:text-emerald-400">•</span>
              Architected scalable systems handling high-volume transactions and
              complex data workflows
            </li>
          </ul>

          <h2 className="text-2xl font-semibold text-zinc-900 dark:text-zinc-100 mt-12 mb-4">
            Education
          </h2>
          <div className="space-y-4">
            <div className="bg-white dark:bg-zinc-900 rounded-lg p-6 shadow-sm border border-zinc-200 dark:border-zinc-800">
              <div className="flex items-start gap-4">
                <img
                  src="/smu-logo.svg"
                  alt="Singapore Management University"
                  className="w-12 h-12 object-contain flex-shrink-0"
                />
                <div>
                  <h3 className="text-lg font-medium text-zinc-900 dark:text-zinc-100">
                    Master of IT in Business (Artificial Intelligence)
                  </h3>
                  <p className="text-zinc-500 dark:text-zinc-400 text-sm mb-1">
                    Singapore Management University
                  </p>
                </div>
              </div>
            </div>
            <div className="bg-white dark:bg-zinc-900 rounded-lg p-6 shadow-sm border border-zinc-200 dark:border-zinc-800">
              <div className="flex items-start gap-4">
                <img
                  src="/rutgers-logo.svg"
                  alt="Rutgers University"
                  className="w-12 h-12 object-contain flex-shrink-0"
                />
                <div>
                  <h3 className="text-lg font-medium text-zinc-900 dark:text-zinc-100">
                    Bachelor of Science in Electrical and Computer Engineering
                  </h3>
                  <p className="text-zinc-500 dark:text-zinc-400 text-sm mb-1">
                    Rutgers University – New Brunswick
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
