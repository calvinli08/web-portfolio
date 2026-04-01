export const metadata = {
  title: "Services | AI & Full Stack Consultant",
  description: "Full stack development, AI integration, and technical consulting services",
};

export default function ServicesPage() {
  const services = [
    {
      title: "Technical Consulting",
      description:
        "Strategic guidance on technology stack selection, architecture decisions, and project roadmaps. I help C-suite stakeholders make informed technical decisions.",
      icon: "💡",
    },
    {
      title: "AI/Digital Transformation Advisory",
      description:
        "Strategic guidance on adopting AI and digital technologies to transform your business operations. From roadmap planning to implementation oversight, I help you navigate the evolving tech landscape.",
      icon: "🚀",
    },
    {
      title: "AI Workflow Automation",
      description:
        "Identify and implement automation opportunities in enterprise workflows using AI and intelligent process design to reduce manual effort and errors.",
      icon: "⚙️",
    },
    {
      title: "Full Stack Engineering",
      description:
        "End-to-end engineering of scalable web applications using modern frameworks and best practices. From database design to frontend UX, I deliver production-ready solutions.",
      icon: "⚡",
    },
    {
      title: "AI Integration",
      description:
        "Seamlessly integrate AI capabilities into your existing applications. From chatbots to intelligent automation, I help you leverage AI for competitive advantage.",
      icon: "🤖",
    },
    {
      title: "RAG Systems",
      description:
        "Build Retrieval-Augmented Generation systems that combine your proprietary data with LLM capabilities. Perfect for internal knowledge bases and customer support automation.",
      icon: "🔍",
    },
    {
      title: "ETL Pipeline Development",
      description:
        "Design and implement robust Extract-Transform-Load pipelines for processing large volumes of data efficiently and reliably.",
      icon: "🔄",
    },
    {
      title: "Vector Database Solutions",
      description:
        "Implement hybrid search solutions combining vector embeddings, traditional search, and BM25 algorithms for optimal information retrieval.",
      icon: "📊",
    },
    {
      title: "NLP & Named Entity Recognition",
      description:
        "Extract meaningful insights from unstructured text data using advanced natural language processing and entity recognition techniques.",
      icon: "📝",
    }
  ];

  return (
    <div className="min-h-screen bg-zinc-50 dark:bg-zinc-950">
      <div className="max-w-6xl mx-auto px-6 py-16">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100 mb-4">
            Services
          </h1>
          <p className="text-lg text-zinc-600 dark:text-zinc-400 max-w-2xl mx-auto">
            Comprehensive solutions combining full stack engineering expertise with 
            cutting-edge AI capabilities to drive your business forward.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {services.map((service) => (
            <div
              key={service.title}
              className="group bg-white dark:bg-zinc-900 rounded-xl p-6 shadow-sm border border-zinc-200 dark:border-zinc-800 hover:shadow-md hover:border-emerald-500/50 dark:hover:border-emerald-500/50 transition-all duration-200"
            >
              <div className="text-3xl mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold text-zinc-900 dark:text-zinc-100 mb-2">
                {service.title}
              </h3>
              <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-emerald-50 dark:bg-emerald-950/20 rounded-xl p-8 border border-emerald-200 dark:border-emerald-800">
          <h2 className="text-2xl font-bold text-zinc-900 dark:text-zinc-100 mb-4">
            Custom Solutions
          </h2>
          <p className="text-zinc-700 dark:text-zinc-300 mb-6">
            Every business has unique challenges. I work closely with you to understand 
            your specific needs and develop tailored solutions that deliver measurable results.
          </p>
          <a
            href="/contact"
            className="inline-flex items-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white font-medium px-6 py-3 rounded-lg transition-colors"
          >
            Get in Touch
            <span>→</span>
          </a>
        </div>
      </div>
    </div>
  );
}
