import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ChevronDown } from "lucide-react";

export default function FAQ() {
  const faqs = [
    {
      question: "Are you accepting new patients?",
      answer:
        "Yes! We are always happy to welcome new patients to our Dentiique family. You can easily book your first appointment online or by calling our clinic.",
    },
    {
      question: "Do you accept insurance?",
      answer:
        "We accept most major dental insurance plans. Our team will happily verify your benefits before your appointment and help you maximize your coverage.",
    },
    {
      question: "What should I expect during my first visit?",
      answer:
        "Your first visit includes a comprehensive exam, digital X-rays, a professional cleaning (if time permits), and a personalized consultation with our dentist to discuss your oral health goals.",
    },
    {
      question: "Do you offer treatments for dental anxiety?",
      answer:
        "Absolutely. We understand dental anxiety is common. We offer a calming environment, noise-canceling headphones, and various sedation options to ensure you are completely comfortable.",
    },
    {
      question: "Is the clinic wheelchair accessible?",
      answer:
        "Yes, our entire clinic is fully wheelchair accessible, including our entrance, waiting area, treatment rooms, and restrooms. We also have designated accessible parking.",
    },
  ];

  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-20 bg-slate-50">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-sm font-bold text-primary-600 tracking-wider uppercase mb-2">
            FAQ
          </h2>
          <h3 className="text-3xl font-bold text-slate-900">
            Frequently Asked Questions
          </h3>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white border border-slate-200 rounded-2xl overflow-hidden shadow-sm"
            >
              <button
                className="w-full px-6 py-5 text-left flex justify-between items-center focus:outline-none"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <span className="font-semibold text-slate-900 pr-8">
                  {faq.question}
                </span>
                <ChevronDown
                  className={`w-5 h-5 text-slate-400 shrink-0 transition-transform duration-300 ${openIndex === index ? "rotate-180" : ""}`}
                />
              </button>
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="px-6 pb-5 text-slate-600 leading-relaxed border-t border-slate-100 pt-4">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
