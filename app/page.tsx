import React from 'react';
import { CheckCircle, ArrowRight, Star, Phone, MapPin, Clock } from 'lucide-react';

export default function GenericBusinessLandingPage() {
  return (
    <div className="flex flex-col min-h-screen font-sans text-slate-900">
      
      {/* HEADER / NAVIGATION */}
      <header className="fixed top-0 w-full bg-white/80 backdrop-blur-md z-50 border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="text-2xl font-bold tracking-tight text-emerald-600 uppercase">Your Business Name</div>
          <nav className="hidden md:flex space-x-8 font-medium text-slate-600">
            <a href="#services" className="hover:text-emerald-600 transition">Services</a>
            <a href="#about" className="hover:text-emerald-600 transition">About Us</a>
            <a href="#location" className="hover:text-emerald-600 transition">Location</a>
            <a href="#contact" className="hover:text-emerald-600 transition">Contact</a>
          </nav>
          <div className="flex items-center gap-4">
            {/* Phone Number visible above the fold for high trust [cite: 12, 22] */}
            <a href="tel:+15550001234" className="hidden lg:flex items-center gap-2 text-sm font-semibold">
              <Phone size={18} className="text-emerald-600" /> (555) 000-1234
            </a>
            <button className="bg-emerald-600 text-white px-5 py-2.5 rounded-full font-semibold hover:bg-emerald-700 transition">
              Order Now
            </button>
          </div>
        </div>
      </header>

      <main className="flex-grow pt-20">
        {/* HERO SECTION - 6 word headline for clarity [cite: 8, 21] */}
        <section className="relative py-16 lg:py-28 overflow-hidden bg-slate-50">
          <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl lg:text-5xl font-extrabold leading-tight mb-6">
                Quality you can trust, <span className="text-emerald-600">every single day.</span>
              </h1>
              <p className="text-xl text-slate-600 mb-8 max-w-lg">
                We are dedicated to providing our community with the best products and personalized service they deserve.
              </p>
              {/* Primary CTA using actionable verbs [cite: 9, 22] */}
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="bg-emerald-600 text-white px-8 py-4 rounded-xl text-lg font-bold flex items-center justify-center gap-2 hover:shadow-lg transition">
                  Visit Our Store <ArrowRight size={20} />
                </button>
                <button className="bg-white border-2 border-slate-200 text-slate-700 px-8 py-4 rounded-xl text-lg font-bold hover:bg-slate-50 transition">
                  View Our Services
                </button>
              </div>
            </div>
            <div className="relative">
              <div className="w-full h-[350px] lg:h-[450px] bg-slate-200 rounded-3xl overflow-hidden shadow-xl border-8 border-white">
                <div className="w-full h-full bg-gradient-to-br from-emerald-500 to-teal-600 flex items-center justify-center text-white text-lg text-center p-8 italic">
                  [Warm Image of your Shop, Restaurant, or Pharmacy Staff]
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* TRUST SIGNALS - Icons/Certifications instead of corporate logos [cite: 10, 23] */}
        <section className="py-10 border-b border-slate-100">
          <div className="max-w-7xl mx-auto px-6 flex flex-wrap justify-center gap-10 md:gap-20 items-center opacity-60">
             <div className="flex items-center gap-2 font-bold"><CheckCircle size={24} /> Locally Owned</div>
             <div className="flex items-center gap-2 font-bold"><Clock size={24} /> Open 7 Days</div>
             <div className="flex items-center gap-2 font-bold"><MapPin size={24} /> Central Location</div>
          </div>
        </section>

        {/* BENEFIT BULLETS - Answering "What's in it for me?" [cite: 10] */}
        <section id="services" className="py-20 max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Why our customers love us</h2>
            <p className="text-slate-600 max-w-2xl mx-auto text-lg">A simple approach to excellence in everything we do.</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: "Fresh & Reliable", desc: "We source only the finest materials and ingredients for our customers." },
              { title: "Expert Knowledge", desc: "Our friendly staff is always here to help with expert advice and support." },
              { title: "Quick & Easy", desc: "Fast service and easy online ordering to save you time in your busy day." }
            ].map((benefit, i) => (
              <div key={i} className="p-8 border border-slate-100 rounded-2xl bg-white hover:border-emerald-200 hover:shadow-lg transition">
                <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center mb-6">
                  <CheckCircle className="text-emerald-600" size={24} />
                </div>
                <h3 className="text-xl font-bold mb-2">{benefit.title}</h3>
                <p className="text-slate-600 leading-relaxed">{benefit.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* TESTIMONIALS - Short, impactful social proof [cite: 11] */}
        <section className="py-20 bg-emerald-900 text-white rounded-[3rem] mx-4 mb-24">
          <div className="max-w-5xl mx-auto px-6 text-center">
            <div className="flex justify-center gap-1 mb-6">
              {[1, 2, 3, 4, 5].map((s) => <Star key={s} fill="currentColor" className="text-yellow-400" size={20} />)}
            </div>
            <p className="text-2xl md:text-3xl font-medium leading-relaxed mb-8 italic">
              "The best service in town. They really care about their customers and the quality of their work shows every time."
            </p>
            <div>
              <p className="font-bold text-lg">Jane Doe</p>
              <p className="text-emerald-300">Local Resident</p>
            </div>
          </div>
        </section>
      </main>

      {/* FOOTER - The safety net with contact info and legal links [cite: 6, 7] */}
      <footer id="contact" className="bg-white border-t border-slate-100 pt-16 pb-8">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="col-span-1 md:col-span-1">
            <div className="text-xl font-bold mb-4 uppercase">Your Brand</div>
            <p className="text-slate-500 text-sm leading-relaxed">
              Serving our community with pride since 2010. Your satisfaction is our top priority.
            </p>
          </div>
          <div>
            <h4 className="font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-slate-500 text-sm">
              <li><a href="#" className="hover:text-emerald-600">Menu / Services</a></li>
              <li><a href="#" className="hover:text-emerald-600">Gallery</a></li>
              <li><a href="#" className="hover:text-emerald-600">Gift Cards</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-4">Support</h4>
            <ul className="space-y-2 text-slate-500 text-sm">
              <li><a href="#" className="hover:text-emerald-600">Contact Us</a></li>
              <li><a href="#" className="hover:text-emerald-600">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-emerald-600">Terms of Use</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-4">Find Us</h4>
            <div className="text-slate-500 text-sm space-y-2">
              <p className="flex items-center gap-2"><MapPin size={16} /> 123 Main St, Hometown, ST 12345</p>
              <p className="flex items-center gap-2"><Phone size={16} /> (555) 000-1234</p>
              <p className="mt-4 font-semibold text-slate-900">Open Daily: 8am — 9pm</p>
            </div>
          </div>
        </div>
        <div className="max-w-7xl mx-auto px-6 pt-8 border-t border-slate-50 text-center text-slate-400 text-xs">
          © {new Date().getFullYear()} Your Business Name. All rights reserved.
        </div>
      </footer>
    </div>
  );
}