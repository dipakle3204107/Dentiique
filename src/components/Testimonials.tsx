import { motion } from "motion/react";
import { Star, Quote } from "lucide-react";

export default function Testimonials() {
  const reviews = [
    {
      name: "Sarah Jenkins",
      rating: 5,
      text: "The most comfortable dental experience I've ever had. The staff is incredibly welcoming, and the clinic feels like a spa. Highly recommend!",
      date: "2 weeks ago",
    },
    {
      name: "Michael Chen",
      rating: 5,
      text: "As someone with dental anxiety, Dentiique was a breath of fresh air. They explained everything clearly and made sure I was comfortable throughout the entire procedure.",
      date: "1 month ago",
    },
    {
      name: "Emily Rodriguez",
      rating: 5,
      text: "Beautiful clinic, accessible facilities, and a truly inclusive environment. It's so refreshing to see a healthcare provider care so much about their patients' overall experience.",
      date: "2 months ago",
    },
  ];

  return (
    <section
      id="testimonials"
      className="py-20 bg-primary-900 text-white relative overflow-hidden"
    >
      {/* Decorative background elements */}
      <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/3 w-96 h-96 bg-primary-800 rounded-full blur-3xl opacity-50" />
      <div className="absolute bottom-0 left-0 translate-y-1/3 -translate-x-1/3 w-96 h-96 bg-secondary-900 rounded-full blur-3xl opacity-50" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-sm font-bold text-primary-300 tracking-wider uppercase mb-2">
            Patient Stories
          </h2>
          <h3 className="text-3xl lg:text-4xl font-bold mb-4">
            Smiles that speak for themselves
          </h3>
          <div className="flex items-center justify-center gap-2 text-yellow-400 mb-2">
            {[1, 2, 3, 4, 5].map((star) => (
              <Star key={star} className="w-6 h-6 fill-current" />
            ))}
          </div>
          <p className="text-primary-100">5.0 Average Rating on Google</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {reviews.map((review, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl p-8 relative"
            >
              <Quote className="absolute top-6 right-6 w-10 h-10 text-white/10" />
              <div className="flex gap-1 text-yellow-400 mb-4">
                {[...Array(review.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-current" />
                ))}
              </div>
              <p className="text-primary-50 leading-relaxed mb-6 italic">
                "{review.text}"
              </p>
              <div className="flex justify-between items-end">
                <div>
                  <h4 className="font-bold text-white">{review.name}</h4>
                  <p className="text-sm text-primary-300">Verified Patient</p>
                </div>
                <span className="text-xs text-primary-400">{review.date}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
