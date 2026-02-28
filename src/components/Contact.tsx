import { MapPin, Phone, Mail, Clock } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16">
          <div>
            <h2 className="text-sm font-bold text-primary-600 tracking-wider uppercase mb-2">
              Get in Touch
            </h2>
            <h3 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-6">
              We're here to help you smile.
            </h3>
            <p className="text-slate-600 mb-10 leading-relaxed">
              Have a question about our services or need to schedule an
              appointment? Reach out to us using the contact details below, or
              book directly online.
            </p>

            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary-50 text-primary-600 rounded-full flex items-center justify-center shrink-0">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-lg font-bold text-slate-900 mb-1">
                    Visit Us
                  </h4>
                  <p className="text-slate-600">
                    123 Wellness Boulevard, Suite 200
                    <br />
                    San Francisco, CA 94105
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary-50 text-primary-600 rounded-full flex items-center justify-center shrink-0">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-lg font-bold text-slate-900 mb-1">
                    Call Us
                  </h4>
                  <p className="text-slate-600">(555) 123-4567</p>
                  <p className="text-sm text-slate-500 mt-1">
                    For emergencies, please call our 24/7 line.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary-50 text-primary-600 rounded-full flex items-center justify-center shrink-0">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-lg font-bold text-slate-900 mb-1">
                    Email Us
                  </h4>
                  <p className="text-slate-600">hello@dentiique.com</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary-50 text-primary-600 rounded-full flex items-center justify-center shrink-0">
                  <Clock className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-lg font-bold text-slate-900 mb-1">
                    Opening Hours
                  </h4>
                  <ul className="text-slate-600 space-y-1">
                    <li className="flex justify-between w-48">
                      <span>Mon - Fri:</span> <span>8:00 AM - 6:00 PM</span>
                    </li>
                    <li className="flex justify-between w-48">
                      <span>Saturday:</span> <span>9:00 AM - 2:00 PM</span>
                    </li>
                    <li className="flex justify-between w-48">
                      <span>Sunday:</span> <span>Closed</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="mt-10">
              <a
                href="#appointment"
                className="inline-block bg-slate-900 hover:bg-slate-800 text-white px-8 py-4 rounded-full font-medium transition-colors"
              >
                Book your visit today
              </a>
            </div>
          </div>

          <div className="h-[500px] lg:h-auto rounded-3xl overflow-hidden shadow-lg border border-slate-100 relative">
            {/* Placeholder for Google Map embed */}
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d100939.98555098464!2d-122.50764017948534!3d37.7578149966017!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80859a6d00690021%3A0x4a501367f076adff!2sSan%20Francisco%2C%20CA!5e0!3m2!1sen!2sus!4v1650000000000!5m2!1sen!2sus"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="absolute inset-0"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
}
