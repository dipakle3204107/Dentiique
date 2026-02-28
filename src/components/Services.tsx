import { motion } from "motion/react";
import {
  Stethoscope,
  Sparkles,
  Smile,
  Activity,
  ShieldCheck,
  Syringe,
} from "lucide-react";

export default function Services() {
  const services = [
    {
      icon: <Stethoscope className="w-8 h-8" />,
      title: "General Dentistry",
      description:
        "Comprehensive exams, cleanings, and fillings to keep your smile healthy and bright.",
      color: "bg-blue-50 text-blue-600",
    },
    {
      icon: <Sparkles className="w-8 h-8" />,
      title: "Cosmetic Dentistry",
      description:
        "Veneers, bonding, and smile makeovers to give you the confidence you deserve.",
      color: "bg-purple-50 text-purple-600",
    },
    {
      icon: <Smile className="w-8 h-8" />,
      title: "Teeth Whitening",
      description:
        "Professional, safe, and effective whitening treatments for a radiant smile.",
      color: "bg-amber-50 text-amber-600",
    },
    {
      icon: <Activity className="w-8 h-8" />,
      title: "Dental Implants",
      description:
        "Permanent, natural-looking solutions to replace missing teeth and restore function.",
      color: "bg-emerald-50 text-emerald-600",
    },
    {
      icon: <Syringe className="w-8 h-8" />,
      title: "Root Canal Treatment",
      description:
        "Painless endodontic therapy to save infected teeth and relieve discomfort.",
      color: "bg-rose-50 text-rose-600",
    },
    {
      icon: <ShieldCheck className="w-8 h-8" />,
      title: "Preventive Care",
      description:
        "Sealants, fluoride treatments, and education to prevent future dental issues.",
      color: "bg-primary-50 text-primary-600",
    },
  ];

  return (
    <section id="services" className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-sm font-bold text-primary-600 tracking-wider uppercase mb-2">
            Our Services
          </h2>
          <h3 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">
            Comprehensive Care for Every Smile
          </h3>
          <p className="text-slate-600">
            From routine check-ups to advanced cosmetic procedures, we offer a
            full spectrum of dental services tailored to your needs.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-2xl p-8 shadow-sm border border-slate-100 hover:shadow-md transition-shadow group"
            >
              <div
                className={`w-16 h-16 rounded-2xl ${service.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}
              >
                {service.icon}
              </div>
              <h4 className="text-xl font-bold text-slate-900 mb-3">
                {service.title}
              </h4>
              <p className="text-slate-600 leading-relaxed mb-6">
                {service.description}
              </p>
              <a
                href="#appointment"
                className="text-primary-600 font-medium inline-flex items-center gap-1 hover:text-primary-700"
              >
                Learn more <span aria-hidden="true">&rarr;</span>
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
