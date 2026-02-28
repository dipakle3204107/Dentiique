import { motion } from "motion/react";
import {
  Accessibility as AccessibilityIcon,
  Users,
  HeartHandshake,
  Car,
  CreditCard,
  CheckCircle2,
} from "lucide-react";

export default function Accessibility() {
  return (
    <section id="accessibility" className="py-20 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-sm font-bold text-primary-600 tracking-wider uppercase mb-2">
            Inclusive Care
          </h2>
          <h3 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-6">
            We believe dental care should be accessible to everyone.
          </h3>
          <p className="text-lg text-slate-600">
            Dentiique is designed to be a safe, welcoming, and barrier-free
            environment for all our patients.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Accessibility Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-slate-50 rounded-3xl p-8 border border-slate-100"
          >
            <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-xl flex items-center justify-center mb-6">
              <AccessibilityIcon className="w-6 h-6" />
            </div>
            <h4 className="text-xl font-bold text-slate-900 mb-4">
              Physical Accessibility
            </h4>
            <ul className="space-y-3">
              {[
                "Wheelchair-accessible car park",
                "Wheelchair-accessible entrance",
                "Wheelchair-accessible seating",
                "Step-free clinic layout",
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-slate-600">
                  <CheckCircle2 className="w-5 h-5 text-primary-500 shrink-0 mt-0.5" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Inclusivity Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="bg-slate-50 rounded-3xl p-8 border border-slate-100"
          >
            <div className="w-12 h-12 bg-purple-100 text-purple-600 rounded-xl flex items-center justify-center mb-6">
              <HeartHandshake className="w-6 h-6" />
            </div>
            <h4 className="text-xl font-bold text-slate-900 mb-4">
              Inclusivity & Safety
            </h4>
            <ul className="space-y-3">
              {[
                "LGBTQ+ friendly environment",
                "Women-owned & led clinic",
                "Gender-neutral restrooms",
                "Safe & respectful space for all",
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-slate-600">
                  <CheckCircle2 className="w-5 h-5 text-primary-500 shrink-0 mt-0.5" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Facilities & Payments Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="bg-slate-50 rounded-3xl p-8 border border-slate-100 flex flex-col gap-8"
          >
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-emerald-100 text-emerald-600 rounded-lg flex items-center justify-center">
                  <Car className="w-5 h-5" />
                </div>
                <h4 className="text-lg font-bold text-slate-900">Facilities</h4>
              </div>
              <p className="text-slate-600 text-sm">
                On-site parking available. Relax in our comfortable waiting area
                with complimentary refreshments and clean restroom facilities.
              </p>
            </div>

            <div className="h-px bg-slate-200 w-full" />

            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-amber-100 text-amber-600 rounded-lg flex items-center justify-center">
                  <CreditCard className="w-5 h-5" />
                </div>
                <h4 className="text-lg font-bold text-slate-900">
                  Payments Accepted
                </h4>
              </div>
              <div className="flex flex-wrap gap-2">
                {[
                  "Credit Cards",
                  "Debit Cards",
                  "Google Pay",
                  "Apple Pay",
                  "NFC Mobile",
                ].map((method, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 bg-white border border-slate-200 rounded-full text-xs font-medium text-slate-600 shadow-sm"
                  >
                    {method}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
