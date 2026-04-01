export const metadata = {
  title: "About | AI & Full Stack Consultant",
  description: "7+ years of experience in full stack engineering and AI integration",
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
            I'm a seasoned Full Stack Engineer and AI Consultant with over 7 years of experience 
            building and scaling complex software systems. My expertise spans the entire development 
            lifecycle—from architecting multimillion-dollar sales platforms to integrating 
            cutting-edge AI solutions into enterprise workflows.
          </p>

          <h2 className="text-2xl font-semibold text-zinc-900 dark:text-zinc-100 mt-12 mb-4">
            Education
          </h2>
          <div className="space-y-4">
            <div className="bg-white dark:bg-zinc-900 rounded-lg p-6 shadow-sm border border-zinc-200 dark:border-zinc-800">
              <h3 className="text-lg font-medium text-zinc-900 dark:text-zinc-100">
                Master of Science in Artificial Intelligence
              </h3>
              <p className="text-zinc-600 dark:text-zinc-400">
                Specialized in machine learning, natural language processing, and intelligent systems
              </p>
            </div>
            <div className="bg-white dark:bg-zinc-900 rounded-lg p-6 shadow-sm border border-zinc-200 dark:border-zinc-800">
              <h3 className="text-lg font-medium text-zinc-900 dark:text-zinc-100">
                Bachelor of Science in Electrical and Computer Engineering
              </h3>
              <p className="text-zinc-600 dark:text-zinc-400">
                Foundation in hardware-software integration and systems engineering
              </p>
            </div>
          </div>

          <h2 className="text-2xl font-semibold text-zinc-900 dark:text-zinc-100 mt-12 mb-4">
            Experience Highlights
          </h2>
          <ul className="space-y-3 text-zinc-600 dark:text-zinc-400">
            <li className="flex gap-3">
              <span className="text-emerald-600 dark:text-emerald-400">•</span>
              Provided technical direction for multimillion-dollar sales platform projects
            </li>
            <li className="flex gap-3">
              <span className="text-emerald-600 dark:text-emerald-400">•</span>
              Advised C-suite stakeholders on software project direction, timelines, and best practices
            </li>
            <li className="flex gap-3">
              <span className="text-emerald-600 dark:text-emerald-400">•</span>
              Led cross-functional teams in delivering enterprise-grade solutions
            </li>
            <li className="flex gap-3">
              <span className="text-emerald-600 dark:text-emerald-400">•</span>
              Architected scalable systems handling high-volume transactions
            </li>
          </ul>

          <h2 className="text-2xl font-semibold text-zinc-900 dark:text-zinc-100 mt-12 mb-4">
            AI Expertise
          </h2>
          <p className="text-zinc-600 dark:text-zinc-400 mb-6">
            I specialize in bridging the gap between advanced AI research and practical business 
            applications. My hands-on experience includes:
          </p>
          <div className="grid md:grid-cols-2 gap-4">
            {[
              "Enterprise Workflow Automation",
              "Retrieval-Augmented Generation (RAG)",
              "ETL Pipeline Development",
              "Vector Databases & Hybrid Search",
              "BM25 Search Implementation",
              "Prompt Engineering & Optimization",
              "Natural Language Processing (NLP)",
              "Named Entity Recognition (NER)",
            ].map((skill) => (
              <div
                key={skill}
                className="flex items-center gap-3 bg-white dark:bg-zinc-900 rounded-lg px-4 py-3 shadow-sm border border-zinc-200 dark:border-zinc-800"
              >
                <span className="w-2 h-2 bg-emerald-500 rounded-full"></span>
                <span className="text-zinc-700 dark:text-zinc-300">{skill}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
