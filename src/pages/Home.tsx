import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  ArrowRight, 
  CheckCircle2, 
  Building2, 
  ShieldCheck, 
  Hammer, 
  Award, 
  Users, 
  Star,
  Phone,
  Mail
} from 'lucide-react';
import { services, portfolioProjects, blogPosts } from '../data/siteData';

const Hero = () => {
  const [index, setIndex] = React.useState(0);
  const words = [
    "Electrical", 
    "Home Renovation", 
    "Kitchen Renovation", 
    "Bath Renovation", 
    "Minor Plumbing", 
    "Data Camera"
  ];

  React.useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % words.length);
    }, 2800);
    return () => clearInterval(timer);
  }, [words.length]);

  return (
    <section className="relative min-h-[60vh] md:min-h-screen flex flex-col md:flex-row items-center justify-center bg-brand-dark overflow-hidden pt-16 pb-12 md:py-0">
      <div className="absolute top-0 left-0 w-full h-full bg-geometric-dark opacity-10"></div>
      <div className="hero-gradient-overlay hidden md:block"></div>
      
      {/* Background/Mobile Image */}
      <div className="absolute top-0 left-0 md:left-auto right-0 w-full md:w-[65%] h-full z-0 overflow-hidden">
        <div className="absolute inset-0 bg-brand-dark/5 z-10 md:hidden"></div>
        <img 
          src="/project-wiring.jpg" 
          alt="Electrical rough-in wiring" 
          className="w-full h-full object-cover grayscale opacity-30 md:opacity-50"
        />
        <div className="absolute inset-0 bg-brand-dark/60 mix-blend-multiply"></div>
        {/* Asymmetric clip only on desktop */}
        <div className="absolute inset-0 clip-asymmetric-right bg-brand-dark/10 hidden md:block"></div>
      </div>

      <motion.div 
        initial={{ x: -200, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        className="absolute bottom-[-3%] left-[-2%] w-[30%] h-[6%] bg-brand-primary clip-trapezoid z-20 opacity-90 shadow-[0_0_30px_rgba(173,1,41,0.3)] hidden md:block"
      ></motion.div>

      <div className="max-w-7xl mx-auto px-6 relative z-10 w-full text-center md:text-left pt-24 md:pt-36">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto md:mx-0"
        >
          <div className="flex justify-center md:justify-start space-x-1 mb-6">
            {[...Array(5)].map((_, i) => <Star key={i} size={14} className="text-brand-primary fill-brand-primary" />)}
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-8xl font-extrabold text-white leading-[1.1] mb-8 uppercase tracking-tighter flex flex-col">
            <span className="block opacity-90">Expert</span>
            <span className="relative h-[1.2em] overflow-hidden">
              <AnimatePresence mode="wait">
                <motion.span
                  key={words[index]}
                  initial={{ y: 40, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: -40, opacity: 0 }}
                  transition={{ duration: 0.6, ease: [0.23, 1, 0.32, 1] }}
                  className="text-brand-primary block"
                >
                  {words[index]}
                </motion.span>
              </AnimatePresence>
            </span>
            <span className="block opacity-90">Services</span>
          </h1>
          <p className="text-gray-300 text-base md:text-lg mb-12 leading-relaxed max-w-xl mx-auto md:mx-0 border-l-0 md:border-l-4 border-brand-primary pl-0 md:pl-8">
            Licensed & insured professionals serving Troy, MI and surrounding areas. Full rewires, smart home installs, surveillance, TV mounting, and renovation — all under one roof.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center md:justify-start gap-6">
            <a href="https://api.echovoicelabs.com/widget/form/tQUXk6FOf8D6fdg79jhK?notrack=true" target="_blank" rel="noopener noreferrer" className="group bg-brand-primary text-white px-10 py-5 font-bold text-sm uppercase tracking-widest hover:opacity-90 transition-all flex items-center w-full sm:w-fit justify-center shadow-2xl shadow-brand-primary/40 relative z-30">
              REQUEST A FREE ESTIMATE
              <ArrowRight size={20} className="ml-3 group-hover:translate-x-1 transition-transform" />
            </a>
            <div className="flex items-center space-x-4 px-8 py-5 border border-white/10 backdrop-blur-sm w-full sm:w-fit justify-center">
              <div className="w-2 h-2 rounded-full bg-brand-red animate-pulse"></div>
              <span className="text-white text-xs font-bold uppercase tracking-widest">Available Now</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

const AboutSection = () => (
  <section id="about" className="pt-32 pb-20 md:pt-48 md:pb-32 bg-white bg-grid relative clip-diagonal-up -mt-20 z-10">
    <div className="max-w-7xl mx-auto px-6">
      <div className="flex flex-col lg:grid lg:grid-cols-2 gap-16 lg:gap-20 items-center">
        <div className="relative w-full max-w-lg mx-auto lg:mx-0">
          <div className="absolute -top-10 -left-10 w-40 h-40 bg-geometric opacity-50 z-0 hidden md:block"></div>
          <img 
            src="/about-image.jpg" 
            alt="Terrance Brown - Alluph Trades LLC" 
            className="rounded-sm w-full relative z-10 aspect-[4/5] object-cover object-top shadow-xl"
          />
          <div className="absolute -bottom-6 -left-6 bg-brand-primary p-6 text-white z-20 hidden md:block">
            <a href="https://api.echovoicelabs.com/widget/form/tQUXk6FOf8D6fdg79jhK?notrack=true" target="_blank" rel="noopener noreferrer" className="bg-white text-brand-primary px-8 py-4 font-bold text-xs uppercase tracking-widest hover:bg-gray-100 transition-colors inline-block text-center min-w-[200px]">
              GET A QUOTE
            </a>
          </div>
        </div>
        <div className="text-center lg:text-left pt-8 lg:pt-0">
          <span className="text-brand-primary font-bold uppercase tracking-widest text-xs mb-4 block">About Us</span>
          <h2 className="text-3xl sm:text-4xl md:text-6xl font-extrabold mb-8 md:mb-10 leading-tight tracking-tighter uppercase">
            Licensed & Insured — Built on 20+ Years of Experience
          </h2>
          <p className="text-gray-500 mb-10 text-base md:text-lg leading-relaxed max-w-2xl mx-auto lg:mx-0">
            Alluph Trades LLC is a Troy, MI-based electrical and handyman company. Owner Terrance Brown brings commercial-grade workmanship to every residential and commercial project — from full rewires to smart home integrations.
          </p>
          <ul className="space-y-6 mb-12 text-left inline-block lg:block">
            {[
              'Licensed & Insured Professionals',
              'Transparent Pricing & Free Estimates',
              'Commercial-Grade Workmanship'
            ].map((item, i) => (
              <li key={i} className="flex items-center space-x-4">
                <div className="bg-brand-primary/10 p-1 rounded-full shrink-0">
                  <CheckCircle2 className="text-brand-primary" size={20} />
                </div>
                <span className="font-bold text-gray-800 text-base md:text-lg">{item}</span>
              </li>
            ))}
          </ul>
          <div className="lg:hidden mt-8">
            <a href="https://api.echovoicelabs.com/widget/form/tQUXk6FOf8D6fdg79jhK?notrack=true" target="_blank" rel="noopener noreferrer" className="bg-brand-primary text-white px-10 py-5 font-bold text-sm uppercase tracking-widest hover:opacity-90 transition-all inline-block w-full text-center shadow-xl">
              GET A FREE QUOTE
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
);

const VideoSection = () => (
  <section className="relative h-[400px] md:h-[500px] overflow-hidden group">
    <img 
      src="/commercial.jpg" 
      alt="Commercial quality workmanship" 
      className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
    />
    <div className="absolute inset-0 bg-[#0a162e]/90 flex items-center justify-center">
      <div className="text-center text-white px-6">
        <p className="text-brand-primary font-bold uppercase tracking-widest text-xs md:text-sm mb-4">Commercial & Residential</p>
        <h2 className="text-3xl md:text-6xl font-extrabold uppercase tracking-tighter leading-tight">Quality Work,<br />Every Time</h2>
      </div>
    </div>
  </section>
);

const ServicesSection = () => {
  const [activeService, setActiveService] = React.useState(0);
  
  return (
    <section id="services" className="pt-32 pb-20 md:pt-48 md:pb-32 bg-white bg-grid clip-diagonal-up relative z-20 -mt-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16 md:mb-20">
          <span className="text-brand-primary font-bold uppercase tracking-widest text-xs mb-4 block">What We Do</span>
          <h2 className="text-3xl sm:text-4xl md:text-6xl font-extrabold uppercase tracking-tighter leading-tight">
            We provide excellent service <br className="hidden md:block" /> to our customers (Electrical)
          </h2>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
          <div className="lg:col-span-1 flex flex-wrap lg:flex-col gap-3 justify-center">
            {services.map((service, i) => (
              <button 
                key={i} 
                onClick={() => setActiveService(i)}
                className={`flex-1 lg:flex-none text-center lg:text-left px-4 lg:px-8 py-4 lg:py-5 font-bold text-[10px] sm:text-xs lg:text-sm uppercase tracking-widest flex items-center justify-between transition-all border-b border-gray-200 min-w-[140px] md:min-w-0 ${activeService === i ? 'bg-brand-primary text-white border-none shadow-lg scale-[1.02] z-30' : 'bg-white text-gray-600 hover:bg-gray-100'}`}
              >
                {service.name}
                <ArrowRight size={16} className="hidden lg:block" />
              </button>
            ))}
          </div>
          
          <div className="lg:col-span-3 grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center bg-white p-6 md:p-12 border border-gray-100 rounded-sm relative overflow-hidden shadow-2xl shadow-gray-200/50">
            <div className="absolute top-0 right-0 w-40 h-40 bg-geometric opacity-10 hidden md:block"></div>
            <div className="relative h-64 md:h-[300px] lg:h-[350px] w-full md:w-[85%] mx-auto group order-2 md:order-1 flex-shrink-0 flex items-center justify-center">
              <img 
                src={services[activeService].image} 
                alt={services[activeService].title} 
                className={`rounded-sm w-full h-full object-cover transition-all duration-500 border border-[#0a162e] ${activeService === 3 ? 'object-center md:scale-[0.75]' : 'object-center'}`}
              />
              
              <div className="absolute bottom-[-10px] right-[-10px] md:bottom-[-15px] md:right-[-15px] bg-brand-dark text-white w-12 h-12 md:w-16 md:h-16 flex items-center justify-center font-bold text-xl md:text-2xl z-10 shadow-xl">
                0{activeService + 1}
              </div>
            </div>
            <div className="order-1 md:order-2 text-center md:text-left">
              <span className="text-brand-primary font-bold uppercase tracking-widest text-[10px] mb-4 block">Featured Service</span>
              <h3 className="text-2xl md:text-3xl font-extrabold mb-6 md:mb-8 uppercase tracking-tighter leading-tight">{services[activeService].title}</h3>
              <p className="text-gray-500 mb-8 md:mb-10 leading-relaxed text-base md:text-lg">
                {services[activeService].desc}
              </p>
              <ul className="space-y-4 md:space-y-5 mb-4 md:mb-12 text-left inline-block md:block">
                {services[activeService].points.map((point, i) => (
                  <li key={i} className="flex items-center space-x-4 text-gray-800 font-bold text-sm md:text-base">
                    <CheckCircle2 className="text-brand-primary" size={18} />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Testimonials = () => (
  <section className="pt-32 pb-20 md:pt-48 md:pb-32 bg-gray-50 text-brand-dark clip-diagonal-up relative z-40 -mt-20 overflow-hidden">
    <div className="absolute top-0 right-0 w-full h-full bg-grid opacity-[0.05]"></div>
    <div className="absolute bottom-[-1%] right-[-2%] w-[40%] h-[10%] bg-[#ad0129] clip-trapezoid opacity-80 z-20 overflow-hidden rotate-180 hidden md:block"></div>

    <div className="max-w-7xl mx-auto px-6 relative z-10">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 items-center">
        <div className="text-center lg:text-left">
          <span className="text-brand-primary font-bold uppercase tracking-widest text-xs mb-4 block">Testimonials</span>
          <h2 className="text-3xl md:text-6xl font-extrabold mb-10 md:12 uppercase tracking-tighter">What client says</h2>
          <div className="bg-white p-8 md:p-12 shadow-2xl shadow-gray-200/50 border border-gray-100 relative max-w-2xl mx-auto lg:mx-0">
            <div className="absolute -top-6 -left-6 text-brand-primary opacity-10 hidden md:block">
              <Star size={100} fill="currentColor" />
            </div>
            <div className="flex justify-center lg:justify-start text-brand-primary mb-6 md:8 space-x-1">
              {[...Array(5)].map((_, i) => <Star key={i} size={18} fill="currentColor" />)}
            </div>
            <p className="text-lg md:text-2xl italic text-gray-600 mb-8 md:mb-10 leading-relaxed font-serif">
              "Terrance and his team at Alluph Trades provided exceptional service for our office rewire. Professional, punctual, and the quality of work was top-notch. Highly recommended for any electrical or renovation needs."
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start space-y-4 sm:space-y-0 sm:space-x-6">
              <div className="w-16 h-16 md:w-20 md:h-20 rounded-full border-4 border-brand-primary overflow-hidden bg-brand-primary flex items-center justify-center text-white font-black text-xl md:text-2xl shrink-0">
                DA
              </div>
              <div className="text-center sm:text-left">
                <h4 className="font-bold text-lg md:text-xl uppercase tracking-tighter text-brand-dark">David Anthony</h4>
                <span className="text-brand-primary text-[10px] md:text-xs uppercase font-bold tracking-widest">CEO, TechCorp</span>
              </div>
            </div>
          </div>
        </div>
        <div className="hidden lg:block relative group">
          <div className="absolute -inset-4 bg-brand-primary/5 rounded-sm -rotate-2 group-hover:rotate-0 transition-transform duration-500"></div>
          <img src="/rewiring-project.jpg" alt="Rewiring Project" className="relative rounded-sm w-full object-cover aspect-[4/3] shadow-2xl" />
        </div>
      </div>
    </div>
  </section>
);

const Home = () => {
  return (
    <div className="bg-white">
      <Hero />
      <AboutSection />
      <VideoSection />
      <ServicesSection />
      <Testimonials />
    </div>
  );
};

export default Home;
