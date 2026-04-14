import React from 'react';
import { motion } from 'motion/react';
import { Phone, Mail, MapPin, Clock, ArrowRight, Star } from 'lucide-react';

const Contact = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <section className="relative py-32 bg-brand-dark overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="/commercial.jpg" 
            alt="Contact Background" 
            className="w-full h-full object-cover opacity-10 grayscale"
          />
          <div className="absolute inset-0 bg-brand-dark/95"></div>
        </div>
        <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
          <span className="text-brand-primary font-bold uppercase tracking-widest text-xs mb-6 block">Contact Us</span>
          <h1 className="text-5xl md:text-8xl font-extrabold text-white uppercase tracking-tighter mb-8">Get In Touch</h1>
          <p className="max-w-2xl mx-auto text-gray-400 text-xl leading-relaxed font-bold uppercase tracking-wider">
            Ready to handle your next electrical, renovation, or surveillance project.
          </p>
        </div>
      </section>

      {/* Contact Info & Form */}
      <section className="py-20 md:py-32 bg-white bg-grid relative z-10 clip-diagonal-up -mt-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col lg:grid lg:grid-cols-2 gap-16 lg:gap-24">
            <div className="text-center lg:text-left">
              <span className="text-brand-primary font-bold uppercase tracking-widest text-[10px] mb-4 block">Quick Contact</span>
              <h2 className="text-3xl sm:text-4xl md:text-6xl font-extrabold mb-12 uppercase tracking-tighter text-brand-dark">How Can We Help?</h2>
              
              <div className="space-y-10 md:space-y-12">
                {[
                  { icon: <Phone size={28} />, title: 'Call us anytime', val: '(248) 308-5960' },
                  { icon: <Mail size={28} />, title: 'Email address', val: 'alluphtradesllc@gmail.com' },
                  { icon: <MapPin size={28} />, title: 'Our location', val: '900 Wilshire Dr., Suite 202, Troy MI 48048' },
                  { icon: <Clock size={28} />, title: 'Working hours', val: 'Mon - Fri: 8am - 6pm' }
                ].map((item, i) => (
                  <div key={i} className="flex flex-col sm:flex-row items-center sm:items-start text-center sm:text-left space-y-4 sm:space-y-0 sm:space-x-8 group">
                    <div className="bg-brand-primary p-4 md:p-5 rounded-sm text-white group-hover:scale-110 transition-transform shrink-0">
                      {item.icon}
                    </div>
                    <div>
                      <span className="text-[10px] text-gray-400 uppercase font-black tracking-widest block mb-2">{item.title}</span>
                      <span className="text-xl md:text-2xl font-bold text-brand-dark block sm:inline leading-tight">{item.val}</span>
                    </div>
                  </div>
                ))}
              </div>

              {/* Reviews Widget Mock */}
              <div className="mt-16 md:mt-20 p-8 md:p-12 bg-gray-50 border-l-0 md:border-l-8 border-t-8 md:border-t-0 border-brand-primary max-w-xl mx-auto lg:mx-0">
                <div className="flex justify-center lg:justify-start text-brand-primary mb-4 space-x-1">
                  {[...Array(5)].map((_, i) => <Star key={i} size={18} fill="currentColor" />)}
                </div>
                <p className="text-gray-600 font-bold uppercase tracking-wider text-xs md:text-sm mb-6 leading-relaxed">"Fantastic service. Very professional and helpful."</p>
                <span className="text-[10px] font-black uppercase tracking-widest text-brand-dark block">— Google Review</span>
              </div>
            </div>

            <div className="bg-brand-dark p-8 md:p-20 relative overflow-hidden group shadow-2xl">
              <div className="absolute top-0 right-0 w-32 h-1 bg-brand-primary"></div>
              <div className="relative z-10">
                <h3 className="text-2xl md:text-3xl font-extrabold text-white mb-10 md:12 uppercase tracking-tighter text-center lg:text-left">Request an Estimate</h3>
                <form className="space-y-6 md:space-y-8">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
                    <div className="space-y-3">
                      <label className="text-[10px] font-black text-gray-500 uppercase tracking-[0.2em] block text-center lg:text-left">Full Name</label>
                      <input type="text" className="w-full bg-white/5 border border-white/10 p-5 font-bold text-white focus:border-brand-primary transition-colors text-center lg:text-left" placeholder="Name" />
                    </div>
                    <div className="space-y-3">
                      <label className="text-[10px] font-black text-gray-500 uppercase tracking-[0.2em] block text-center lg:text-left">Email Address</label>
                      <input type="email" className="w-full bg-white/5 border border-white/10 p-5 font-bold text-white focus:border-brand-primary transition-colors text-center lg:text-left" placeholder="Email" />
                    </div>
                  </div>
                  <div className="space-y-3">
                    <label className="text-[10px] font-black text-gray-500 uppercase tracking-[0.2em] block text-center lg:text-left">Service Type</label>
                    <select className="w-full bg-white/5 border border-white/10 p-5 font-bold text-white focus:border-brand-primary transition-colors appearance-none text-center lg:text-left">
                      <option className="bg-brand-dark text-white">Electrical</option>
                      <option className="bg-brand-dark text-white">Home Renovation</option>
                      <option className="bg-brand-dark text-white">Smart Home / AV</option>
                      <option className="bg-brand-dark text-white">Plumbing</option>
                    </select>
                  </div>
                  <div className="space-y-3">
                    <label className="text-[10px] font-black text-gray-500 uppercase tracking-[0.2em] block text-center lg:text-left">Message</label>
                    <textarea className="w-full bg-white/5 border border-white/10 p-5 font-bold text-white focus:border-brand-primary transition-colors h-40 text-center lg:text-left" placeholder="Describe your project..."></textarea>
                  </div>
                  <button className="w-full bg-brand-primary text-white py-5 md:py-6 font-black uppercase tracking-widest text-xs md:text-sm hover:opacity-90 transition-all shadow-2xl shadow-brand-primary/20">
                    Submit Request
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="h-[400px] md:h-[600px] relative z-20 clip-diagonal-up -mt-20 overflow-hidden bg-gray-100">
        <iframe 
          title="Alluph Trades Location"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2936.6432120352274!2d-83.15570222340576!3d42.5830113711732!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8824c1f8d48a12e3%3A0xc3f1f3e790c377c0!2s900%20Wilshire%20Dr%20%23202%2C%20Troy%2C%20MI%2048084!5e0!3m2!1sen!2sus!4v1710640000000!5m2!1sen!2sus" 
          width="100%" 
          height="100%" 
          style={{ border: 0 }} 
          allowFullScreen={true} 
          loading="lazy" 
          referrerPolicy="no-referrer-when-downgrade"
          className="grayscale invert brightness-90 contrast-125"
        ></iframe>
        <div className="absolute bottom-10 left-10 md:top-10 md:left-10 md:bottom-auto bg-brand-dark text-white p-8 md:p-10 border-l-4 border-brand-primary shadow-2xl scale-90 md:scale-100">
          <h4 className="text-lg md:text-xl font-black uppercase tracking-tighter mb-4">Our Service Area</h4>
          <p className="text-[10px] md:text-xs font-bold uppercase tracking-widest text-gray-400 leading-relaxed">
            Serving Troy, Birmingham, Bloomfield Hills, <br /> and the Greater Detroit area.
          </p>
        </div>
      </section>
    </div>
  );
};

export default Contact;
