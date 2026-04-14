import React from 'react';
import { motion } from 'motion/react';
import { CheckCircle2, Award, ShieldCheck, Users, Hammer, MapPin, Phone, Mail } from 'lucide-react';

const About = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Page Header */}
      <section className="relative py-32 bg-brand-dark overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="/about-midwest-home.jpg" 
            alt="About Header Background" 
            className="w-full h-full object-cover opacity-20 grayscale"
          />
          <div className="absolute inset-0 bg-brand-dark/80"></div>
        </div>
        <div className="max-w-7xl mx-auto px-6 relative z-10 text-center md:text-left">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-brand-primary font-bold uppercase tracking-widest text-[10px] md:text-xs mb-6 block">Legacy of Excellence</span>
            <h1 className="text-4xl sm:text-5xl md:text-8xl font-extrabold text-white uppercase tracking-tighter mb-8 leading-tight">About Alluph <br className="hidden md:block" /> Trades LLC</h1>
            <p className="max-w-2xl text-gray-400 text-lg md:text-xl leading-relaxed border-l-0 md:border-l-4 border-brand-primary pl-0 md:pl-8 mx-auto md:mx-0">
              Based in Troy, MI, we bring commercial-grade discipline and precision to every residential and industrial project we touch.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="py-20 md:py-32 bg-white bg-grid relative z-10 clip-diagonal-up -mt-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col lg:grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            <div className="relative w-full max-w-lg mx-auto lg:mx-0">
              <div className="absolute -top-10 -left-10 w-40 h-40 bg-geometric opacity-50 hidden md:block"></div>
              <img 
                src="/about-image.jpg" 
                alt="Terrance Brown" 
                className="rounded-sm relative z-10 w-full object-cover object-top aspect-[4/5] shadow-2xl"
              />
              <div className="absolute -bottom-10 -right-10 bg-brand-primary p-10 text-white z-20 hidden md:block shadow-2xl">
                <span className="text-6xl font-black block">20+</span>
                <span className="text-sm uppercase font-bold tracking-widest">Years in the Trade</span>
              </div>
            </div>
            <div className="text-center lg:text-left">
              <span className="text-brand-primary font-bold uppercase tracking-widest text-[10px] mb-4 block">Our Story</span>
              <h2 className="text-3xl sm:text-4xl md:text-6xl font-extrabold mb-8 md:mb-10 leading-tight uppercase tracking-tighter text-brand-dark">
                The Standard of Triple-Check Quality
              </h2>
              <p className="text-gray-500 mb-8 text-base md:text-lg leading-relaxed max-w-2xl mx-auto lg:mx-0">
                Founded by Terrance Brown, Alluph Trades LLC was born out of a simple observation: residential electrical and renovation projects often lacked the rigorous safety standards and precision found in commercial construction.
              </p>
              <p className="text-gray-500 mb-12 text-base md:text-lg leading-relaxed font-bold max-w-2xl mx-auto lg:mx-0">
                "We don't just finish a job; we certify it for our own families. Every wire, every structural beam, and every connection is inspected three times before we call it done."
              </p>
              <div className="space-y-4 md:space-y-6 max-w-lg mx-auto lg:mx-0">
                {[
                  { title: 'Licensed Master Craftsmanship', icon: <Award className="text-brand-primary" /> },
                  { title: 'Safety-First Methodology', icon: <ShieldCheck className="text-brand-primary" /> },
                  { title: 'Community-Focused Service', icon: <Users className="text-brand-primary" /> }
                ].map((item, i) => (
                  <div key={i} className="flex items-center space-x-6 bg-gray-50 p-5 md:p-6 border border-gray-100 group hover:border-brand-primary transition-colors text-left">
                    <div className="group-hover:scale-110 transition-transform shrink-0">{item.icon}</div>
                    <span className="font-extrabold text-base md:text-lg uppercase tracking-tighter text-brand-dark">{item.title}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 md:py-32 bg-brand-dark relative overflow-hidden clip-diagonal-up -mt-20">
        <div className="absolute top-0 right-0 w-full h-full bg-geometric-dark opacity-10"></div>
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-center mb-16 md:mb-24">
            <span className="text-brand-primary font-bold uppercase tracking-widest text-[10px] mb-4 block">Our Values</span>
            <h2 className="text-3xl sm:text-4xl md:text-6xl font-extrabold text-white uppercase tracking-tighter">What We Stand For</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
            {[
              { 
                title: 'Integrity', 
                desc: 'No cutting corners. We use the highest quality materials and follow federal safety guidelines to the letter.',
                icon: <ShieldCheck size={40} />
              },
              { 
                title: 'Innovation', 
                desc: 'From smart home panels to high-efficiency surveillance systems, we stay at the forefront of electrical technology.',
                icon: <Hammer size={40} />
              },
              { 
                title: 'Accountability', 
                desc: 'We show up on time, provide transparent pricing, and stand behind our work with a full satisfaction guarantee.',
                icon: <Award size={40} />
              }
            ].map((value, i) => (
              <div key={i} className="bg-white/5 backdrop-blur-md p-10 md:p-16 border border-white/10 group hover:bg-brand-primary transition-all duration-500 text-center md:text-left">
                <div className="text-brand-primary group-hover:text-white mb-8 md:mb-10 transition-colors flex justify-center md:justify-start">{value.icon}</div>
                <h4 className="text-2xl md:text-3xl font-extrabold text-white mb-6 uppercase tracking-tighter">{value.title}</h4>
                <p className="text-gray-400 group-hover:text-white/80 transition-colors leading-relaxed uppercase font-bold text-xs md:text-sm tracking-wider">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 md:py-32 bg-white bg-grid relative z-20 clip-diagonal-up -mt-20">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <div className="bg-brand-primary p-12 md:p-20 text-white relative overflow-hidden rounded-sm shadow-2xl">
            <div className="absolute top-0 left-0 w-full h-full bg-geometric opacity-20"></div>
            <h2 className="text-3xl sm:text-4xl md:text-7xl font-extrabold uppercase tracking-tighter mb-10 relative z-10 leading-tight">Ready to start your <br className="hidden md:block" /> next project?</h2>
            <div className="flex flex-col sm:flex-row justify-center gap-6 relative z-10">
              <a href="tel:2483085960" className="bg-brand-dark text-white px-10 py-5 sm:px-12 sm:py-6 font-black text-xs sm:text-sm uppercase tracking-widest hover:bg-black transition-all">
                Call (248) 308-5960
              </a>
              <a href="/contact" className="bg-white text-brand-primary px-10 py-5 sm:px-12 sm:py-6 font-black text-xs sm:text-sm uppercase tracking-widest hover:bg-gray-100 transition-all">
                Request an Estimate
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
