export const metadata = {
  title: "Services | AI Advisory Consultant",
  description: "AI build advisory and AI governance policy services for growing companies",
};

export default function ServicesPage() {
  const buildAdvisory = [
    {
      title: "Diagnosis",
      tagline: "Understand where you stand",
      description:
        "A structured assessment of your organization's AI readiness. I examine your current technology stack, data infrastructure, team capabilities, and operational workflows to produce a clear picture of what's working, what's missing, and what needs to change before you invest in building AI tools.",
      icon: "🔍",
      process: [
        {
          step: "Discovery",
          detail:
            "Interviews with leadership and technical teams to understand current operations, pain points, and strategic priorities.",
        },
        {
          step: "Assessment",
          detail:
            "Evaluation of data readiness, infrastructure maturity, workflow complexity, and organizational change capacity.",
        },
        {
          step: "Deliverables",
          detail:
            "A diagnostic report with prioritized recommendations, risk assessment, and an AI transformation playbook tailored to your business context.",
        },
      ],
      outcomes: [
        "AI readiness scorecard",
        "Gap analysis & risk evaluation",
        "Prioritized recommendation report",
        "AI transformation playbook",
      ],
      idealFor:
        "Companies exploring AI adoption who need an independent, expert assessment before committing resources.",
    },
    {
      title: "Roadmap",
      tagline: "Plan what to build and how",
      description:
        "A six-week advisory engagement that produces a complete system architecture and engineering plan for AI-powered applications that automate your existing revenue workflows. This is purely advisory — you receive a detailed blueprint your team or any engineering partner can execute against.",
      icon: "🗺️",
      process: [
        {
          step: "Architecture Foundation",
          detail:
            "We start by mapping your highest-impact revenue workflows to a target architecture — identifying where AI can create the most leverage. The output is a set of architecture principles that anchor every decision that follows.",
        },
        {
          step: "System Design",
          detail:
            "The core system takes shape: data flows, API contracts, scalability patterns, and failure modes are all designed and documented. We validate assumptions together in a single alignment call, and you receive architecture diagrams.",
        },
        {
          step: "Engineering Processes",
          detail:
            "Architecture is only as good as the processes that sustain it. I define your CI/CD strategy, testing approach, monitoring standards, and deployment patterns — compiled into an engineering playbook your team can adopt from day one.",
        },
        {
          step: "Integration & Scale",
          detail:
            "Real systems don't live in isolation. I design the integration architecture across your CRM, AI layer, and analytics stack — along with a scaling strategy and cost model so there are no surprises as usage grows.",
        },
        {
          step: "Risk & Handoff",
          detail:
            "The final phase ties everything together: a risk matrix, a tech stack decision framework, and an RFP template you can hand to any development team. You walk away with a complete Roadmap document and a recorded walkthrough your stakeholders can review on their own time.",
        },
      ],
      outcomes: [
        "Architecture principles document",
        "System architecture diagrams",
        "Engineering process handbook",
        "Integration architecture + scale plan",
        "Risk matrix & tech stack decision framework",
        "RFP template for development teams",
        "Complete Roadmap PDF (~20 pages) + Loom walkthrough",
      ],
      idealFor:
        "Leadership teams ready to move from assessment to action — who need a detailed, execution-ready plan before engaging developers.",
    },
    {
      title: "Advisory Retainer",
      tagline: "Stay on course as you grow",
      description:
        "An ongoing advisory relationship with scheduled strategy sessions and progress audits. I monitor your AI adoption milestones, review compliance posture, and provide continuous guidance as your plans evolve — ensuring the decisions you make along the way remain aligned with your original strategy.",
      icon: "🤝",
      process: [
        {
          step: "Monthly Strategy Sessions",
          detail:
            "Structured calls to review progress, address emerging challenges, and recalibrate priorities as your business and the AI landscape evolve.",
        },
        {
          step: "Progress Audits",
          detail:
            "Periodic reviews of adoption milestones, technical debt, compliance posture, and team readiness against the original roadmap.",
        },
        {
          step: "On-Demand Access",
          detail:
            "Direct advisory access between scheduled sessions for time-sensitive decisions, vendor evaluations, or architectural questions.",
        },
      ],
      outcomes: [
        "Monthly strategy sessions",
        "AI adoption progress audits",
        "Compliance & readiness reviews",
        "On-demand advisory access",
      ],
      idealFor:
        "Companies actively executing an AI transformation who want an experienced advisor monitoring progress and course-correcting in real time.",
    },
  ];

  const governance = {
    title: "AI Governance & Tool Vetting",
    tagline: "Secure AI adoption without stifling it",
    description:
      "Right now, employees across every industry are pasting proprietary company data into public AI tools — and IT security teams are caught between locking everything down and embracing the productivity gains AI offers. I help you build a policy framework that lets your team use AI safely, with clear rules on what tools are approved, what data can be shared, and how new tools get evaluated before adoption.",
    icon: "🛡️",
    process: [
      {
        step: "Current-State Audit",
        detail:
          "I map how your teams are currently using AI tools — which ones, for what purposes, and where the data exposure risks sit. This includes shadow AI usage that most organizations don't even know about.",
      },
      {
        step: "Policy Drafting",
        detail:
          "I draft an AI cybersecurity and acceptable-use policy tailored to your industry, risk tolerance, and regulatory environment. This covers data classification rules, approved tool lists, and clear escalation paths for employees who want to adopt new AI tools.",
      },
      {
        step: "Tool Vetting Framework",
        detail:
          "A repeatable evaluation process for assessing any third-party AI tool — covering data handling practices, vendor security posture, compliance certifications, and integration risks. Your IT team gets a structured rubric instead of ad-hoc decisions.",
      },
      {
        step: "Training & Handoff",
        detail:
          "I produce employee-facing training guidelines that explain the policy in plain language — not legalese. You receive the complete policy package ready for leadership review and rollout.",
      },
    ],
    outcomes: [
      "AI usage & data handling policy",
      "Third-party AI tool vetting framework",
      "Approved tool registry & escalation process",
      "Employee training guidelines",
      "Shadow AI risk assessment",
      "Policy rollout playbook",
    ],
    idealFor:
      "Any organization where employees are already using third-party AI tools — and leadership needs a structured policy to manage the risk without killing the productivity gains.",
  };

  function EngagementSection({
    engagement,
    index,
    showDivider = true,
  }: {
    engagement: (typeof buildAdvisory)[number];
    index: number;
    showDivider?: boolean;
  }) {
    return (
      <section>
        <div className="grid lg:grid-cols-5 gap-10">
          {/* Left: Overview */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-3">
              <span className="text-4xl">{engagement.icon}</span>
              <div>
                <span className="text-sm font-medium text-emerald-600 dark:text-emerald-400 uppercase tracking-wide">
                  {engagement.tagline}
                </span>
                <h2 className="text-3xl font-bold text-zinc-900 dark:text-zinc-100">
                  {engagement.title}
                </h2>
              </div>
            </div>
            <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed mb-6">
              {engagement.description}
            </p>
            <div className="bg-emerald-50 dark:bg-emerald-950/20 rounded-lg p-4 border border-emerald-200 dark:border-emerald-800">
              <p className="text-sm text-emerald-800 dark:text-emerald-300">
                <strong>Ideal for:</strong> {engagement.idealFor}
              </p>
            </div>
          </div>

          {/* Right: Process & Outcomes */}
          <div className="lg:col-span-3 space-y-8">
            <div>
              <h3 className="text-sm font-semibold text-zinc-500 dark:text-zinc-400 uppercase tracking-wide mb-4">
                How It Works
              </h3>
              <div className="space-y-4">
                {engagement.process.map((item) => (
                  <div
                    key={item.step}
                    className="flex gap-4 p-4 rounded-lg bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800"
                  >
                    <div>
                      <h4 className="font-semibold text-emerald-700 dark:text-emerald-400 mb-1">
                        {item.step}
                      </h4>
                      <p className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">
                        {item.detail}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-sm font-semibold text-zinc-500 dark:text-zinc-400 uppercase tracking-wide mb-4">
                What You Receive
              </h3>
              <div className="grid sm:grid-cols-2 gap-3">
                {engagement.outcomes.map((outcome) => (
                  <div
                    key={outcome}
                    className="flex items-center gap-2 text-sm text-zinc-700 dark:text-zinc-300"
                  >
                    <span className="text-emerald-600 dark:text-emerald-400">
                      ✓
                    </span>
                    {outcome}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {showDivider && (
          <div className="mt-20 border-t border-zinc-200 dark:border-zinc-800" />
        )}
      </section>
    );
  }

  return (
    <div className="min-h-screen bg-zinc-50 dark:bg-zinc-950">
      <div className="max-w-6xl mx-auto px-6 py-16">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100 mb-4">
            Services
          </h1>
          <p className="text-lg text-zinc-600 dark:text-zinc-400 max-w-2xl mx-auto mb-6">
            Two distinct advisory tracks — one for companies building their own
            AI tools, and one for organizations that need to govern how their
            teams use third-party AI.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="#build-advisory"
              className="inline-flex items-center gap-2 bg-indigo-600 hover:bg-indigo-700 text-white font-medium px-6 py-3 rounded-lg transition-colors"
            >
              AI Build Advisory
              <span>→</span>
            </a>
            <a
              href="#ai-governance"
              className="inline-flex items-center gap-2 bg-amber-500 hover:bg-amber-600 text-zinc-900 font-medium px-6 py-3 rounded-lg transition-colors"
            >
              AI Governance &amp; Tool Vetting
              <span>→</span>
            </a>
          </div>
        </div>

        {/* Track 1: AI Build Advisory */}
        <div id="build-advisory" className="mb-20 scroll-mt-24">
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-zinc-900 dark:text-zinc-100 mb-2">
              AI Build Advisory
            </h2>
            <p className="text-lg text-zinc-600 dark:text-zinc-400 max-w-3xl">
              For enterprises planning to build their own internal AI tools. A
              three-phase engagement that takes you from readiness assessment
              through architecture blueprint to ongoing advisory support.
            </p>
          </div>

          <div className="space-y-20">
            {buildAdvisory.map((engagement, index) => (
              <EngagementSection
                key={engagement.title}
                engagement={engagement}
                index={index}
                showDivider={index < buildAdvisory.length - 1}
              />
            ))}
          </div>
        </div>

        {/* Track 2: AI Governance & Tool Vetting */}
        <div id="ai-governance" className="scroll-mt-24">
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-zinc-900 dark:text-zinc-100 mb-2">
              AI Governance & Tool Vetting
            </h2>
            <p className="text-lg text-zinc-600 dark:text-zinc-400 max-w-3xl">
              For any organization whose employees are already using third-party
              AI tools — and leadership needs a cybersecurity policy to manage
              the risk. This is a standalone engagement, independent of whether
              you're building internal AI tools.
            </p>
          </div>

          <EngagementSection
            engagement={governance}
            index={0}
            showDivider={false}
          />
        </div>

        <div className="mt-20 bg-emerald-50 dark:bg-emerald-950/20 rounded-xl p-8 border border-emerald-200 dark:border-emerald-800">
          <h2 className="text-2xl font-bold text-zinc-900 dark:text-zinc-100 mb-4">
            Not Sure Which Track Is Right?
          </h2>
          <p className="text-zinc-700 dark:text-zinc-300 mb-6">
            Many clients need both — a governance policy to secure their
            current AI usage, and a build advisory engagement to plan their
            own tools. A brief conversation is enough to identify where to
            start.
          </p>
          <a
            href="/contact"
            className="inline-flex items-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white font-medium px-6 py-3 rounded-lg transition-colors"
          >
            Schedule a Discussion
            <span>→</span>
          </a>
        </div>
      </div>
    </div>
  );
}
