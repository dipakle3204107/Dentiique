import { motion } from "motion/react";
import { Heart, Shield, Sparkles, Users } from "lucide-react";

export default function About() {
  const features = [
    {
      icon: <Heart className="w-6 h-6 text-rose-500" />,
      title: "Patient-First Approach",
      description:
        "Your comfort and well-being are at the center of everything we do.",
    },
    {
      icon: <Users className="w-6 h-6 text-primary-500" />,
      title: "Women-Owned Business",
      description:
        "Proudly women-led, fostering a nurturing and empathetic environment.",
    },
    {
      icon: <Sparkles className="w-6 h-6 text-secondary-500" />,
      title: "Modern Equipment",
      description:
        "State-of-the-art technology for precise, painless, and efficient care.",
    },
    {
      icon: <Shield className="w-6 h-6 text-emerald-500" />,
      title: "Comfortable Environment",
      description:
        "A calming studio designed to reduce anxiety and make you feel at home.",
    },
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="relative rounded-3xl overflow-hidden aspect-[4/5] shadow-xl">
              <img
                src="https://picsum.photos/seed/dentist-team/800/1000"
                alt="Our friendly dental team"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-primary-900/10" />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h2 className="text-sm font-bold text-primary-600 tracking-wider uppercase mb-2">
              About Dentiique
            </h2>
            <h3 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-6">
              Redefining the Dental Experience
            </h3>

            <div className="bg-primary-50 border-l-4 border-primary-500 p-6 rounded-r-2xl mb-8">
              <p className="text-lg text-primary-900 font-medium italic">
                "Deliver confident smiles through compassionate and inclusive
                dental care."
              </p>
            </div>

            <p className="text-slate-600 mb-10 leading-relaxed">
              At Dentiique — The Smile Studio, we believe that a visit to the
              dentist shouldn't be daunting. We've created a space that feels
              less like a clinic and more like a wellness retreat. Our friendly
              dental team is dedicated to providing gentle, personalized care
              that meets your unique needs.
            </p>

            <div className="grid sm:grid-cols-2 gap-6">
              {features.map((feature, index) => (
                <div key={index} className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-slate-50 flex items-center justify-center shadow-sm border border-slate-100">
                    {feature.icon}
                  </div>
                  <div>
                    <h4 className="text-base font-semibold text-slate-900 mb-1">
                      {feature.title}
                    </h4>
                    <p className="text-sm text-slate-500 leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
