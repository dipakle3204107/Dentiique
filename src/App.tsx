/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Services from "./components/Services";
import Accessibility from "./components/Accessibility";
import Testimonials from "./components/Testimonials";
import FAQ from "./components/FAQ";
import Appointment from "./components/Appointment";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen bg-slate-50 selection:bg-primary-100 selection:text-primary-700">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <Accessibility />
        <Testimonials />
        <FAQ />
        <Appointment />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
