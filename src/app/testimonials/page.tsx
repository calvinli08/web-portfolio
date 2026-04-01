export const metadata = {
  title: "Testimonials | AI & Full Stack Consultant",
  description: "What clients and colleagues say about working with me",
};

export default function TestimonialsPage() {
  const testimonials = [
    {
      quote:
        "Good job!",
      author: "John Smith",
      role: "CTO, Client Company",
    },
  ];

  return (
    <div className="min-h-screen bg-zinc-50 dark:bg-zinc-950">
      <div className="max-w-5xl mx-auto px-6 py-16">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100 mb-4">
            Testimonials
          </h1>
          <p className="text-lg text-zinc-600 dark:text-zinc-400 max-w-2xl mx-auto">
            Feedback from clients and colleagues I've had the pleasure of working with.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white dark:bg-zinc-900 rounded-xl p-6 shadow-sm border border-zinc-200 dark:border-zinc-800"
            >
              <div className="mb-4">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-yellow-500">★</span>
                ))}
              </div>
              <blockquote className="text-zinc-700 dark:text-zinc-300 mb-6 leading-relaxed">
                "{testimonial.quote}"
              </blockquote>
              <div className="border-t border-zinc-200 dark:border-zinc-800 pt-4">
                <p className="font-medium text-zinc-900 dark:text-zinc-100">
                  {testimonial.author}
                </p>
                <p className="text-sm text-zinc-600 dark:text-zinc-400">
                  {testimonial.role}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="text-zinc-600 dark:text-zinc-400 mb-6">
            Ready to achieve similar results for your organization?
          </p>
          <a
            href="/contact"
            className="inline-flex items-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white font-medium px-6 py-3 rounded-lg transition-colors"
          >
            Start a Conversation
            <span>→</span>
          </a>
        </div>
      </div>
    </div>
  );
}
