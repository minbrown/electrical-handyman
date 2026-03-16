import React from 'react';
import { motion } from 'motion/react';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Search, 
  ArrowRight, 
  CheckCircle2, 
  Building2, 
  ShieldCheck, 
  Hammer, 
  Award, 
  Users, 
  Star,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Menu,
  X,
  Play
} from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  return (
    <header className="absolute top-0 left-0 w-full z-50">
      <div className="bg-brand-dark/20 backdrop-blur-sm border-b border-white/10 hidden lg:block">
        <div className="max-w-7xl mx-auto px-6 h-12 flex items-center justify-between text-white text-sm">
          <div className="flex items-center space-x-6">
            <div className="flex items-center space-x-2">
              <Phone size={14} className="text-brand-orange" />
              <span>+123 556 8824</span>
            </div>
            <div className="flex items-center space-x-2">
              <Mail size={14} className="text-brand-orange" />
              <span>info@construz.com</span>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <Facebook size={14} className="hover:text-brand-orange cursor-pointer transition-colors" />
            <Twitter size={14} className="hover:text-brand-orange cursor-pointer transition-colors" />
            <Instagram size={14} className="hover:text-brand-orange cursor-pointer transition-colors" />
            <Linkedin size={14} className="hover:text-brand-orange cursor-pointer transition-colors" />
          </div>
        </div>
      </div>
      
      <nav className="max-w-7xl mx-auto px-6 h-24 flex items-center justify-between">
        <div className="flex items-center">
          <span className="text-white text-3xl font-extrabold tracking-tighter">CONSTRUZ</span>
        </div>
        
        <div className="hidden lg:flex items-center space-x-8">
          {['Home', 'About', 'Services', 'Projects', 'News', 'Contact'].map((item) => (
            <a key={item} href={`#${item.toLowerCase()}`} className="text-white font-bold text-sm uppercase tracking-widest hover:text-brand-orange transition-colors">
              {item}
            </a>
          ))}
          <div className="flex items-center space-x-4 border-l border-white/20 pl-8">
            <button className="text-white hover:text-brand-orange transition-colors">
              <Search size={20} />
            </button>
            <button className="bg-brand-orange text-white px-8 py-4 font-bold text-xs uppercase tracking-widest hover:bg-orange-600 transition-all">
              Get Started
            </button>
          </div>
        </div>

        <button className="lg:hidden text-white" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </nav>

      {isMenuOpen && (
        <div className="lg:hidden bg-brand-dark text-white p-6 absolute top-24 left-0 w-full shadow-xl">
          <div className="flex flex-col space-y-4">
            {['Home', 'About', 'Services', 'Projects', 'News', 'Contact'].map((item) => (
              <a key={item} href={`#${item.toLowerCase()}`} className="text-lg font-medium border-b border-white/10 pb-2">
                {item}
              </a>
            ))}
            <button className="bg-brand-orange text-white px-6 py-3 font-bold text-sm uppercase tracking-wider">
              Get Started
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

const Hero = () => (
  <section className="relative min-h-screen flex items-center bg-brand-dark clip-hero overflow-hidden">
    <div className="absolute top-0 left-0 w-full h-full bg-geometric-dark opacity-20"></div>
    <div className="hero-gradient-overlay"></div>
    <div className="absolute top-0 right-0 w-[60%] h-full clip-asymmetric-right z-0">
      <img 
        src="https://placehold.co/1200x800/222/666?text=Construction+Site" 
        alt="Hero" 
        className="w-full h-full object-cover"
      />
    </div>
    <div className="absolute bottom-0 right-0 w-[30%] h-[40%] bg-brand-orange/10 clip-diagonal-up z-0"></div>
    
    <div className="max-w-7xl mx-auto px-6 pt-32 relative z-10 w-full">
      <motion.div 
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-2xl"
      >
        <div className="flex space-x-1 mb-6">
          {[...Array(5)].map((_, i) => <Star key={i} size={14} className="text-brand-orange fill-brand-orange" />)}
        </div>
        <h1 className="text-5xl md:text-7xl font-extrabold text-white leading-tight mb-6 uppercase tracking-tighter">
          We Are Unsurpassed Roofing <span className="text-brand-orange">Services Agency</span>
        </h1>
        <p className="text-gray-300 text-lg mb-10 leading-relaxed max-w-xl">
          We craft unique digital experiences. With more than 7 years of expertise we design and code clean websites.
        </p>
        <button className="group bg-brand-orange text-white px-10 py-5 font-bold text-sm uppercase tracking-widest hover:bg-orange-600 transition-all flex items-center">
          REQUEST A FREE ESTIMATE
          <ArrowRight size={20} className="ml-3 group-hover:translate-x-1 transition-transform" />
        </button>
      </motion.div>
    </div>

    {/* Decorative Roof Panel */}
    <div className="absolute -bottom-20 left-10 w-64 h-64 z-20 hidden lg:block">
      <img src="https://placehold.co/400x400/FF5722/FFF?text=Roof+Panel" alt="Roof Panel" className="w-full h-full object-contain rotate-12" />
    </div>
  </section>
);

const About = () => (
  <section id="about" className="py-32 bg-white bg-grid relative clip-diagonal-up -mt-20 z-10">
    <div className="max-w-7xl mx-auto px-6">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
        <div className="relative">
          <div className="absolute -top-10 -left-10 w-40 h-40 bg-geometric opacity-50 z-0"></div>
          <img 
            src="https://placehold.co/600x800/EEE/999?text=About+Image" 
            alt="About" 
            className="rounded-sm w-full relative z-10 aspect-[4/5] object-cover"
          />
          <div className="absolute -bottom-6 -left-6 bg-brand-orange p-6 text-white z-20">
            <button className="bg-white text-brand-orange px-8 py-4 font-bold text-xs uppercase tracking-widest hover:bg-gray-100 transition-colors">
              READ MORE COMPANY
            </button>
          </div>
        </div>
        <div>
          <span className="text-brand-orange font-bold uppercase tracking-widest text-xs mb-4 block">About Us</span>
          <h2 className="text-4xl md:text-6xl font-extrabold mb-10 leading-tight tracking-tighter uppercase">
            We building everything that you needed
          </h2>
          <p className="text-gray-500 mb-10 text-lg leading-relaxed">
            We craft unique digital experiences. With more than 7 years of expertise we design and code clean websites.
          </p>
          <ul className="space-y-6 mb-12">
            {[
              'Providing Solutions For Construction Management',
              'Engineers design and construct the structure'
            ].map((item, i) => (
              <li key={i} className="flex items-center space-x-4">
                <div className="bg-brand-orange/10 p-1 rounded-full">
                  <CheckCircle2 className="text-brand-orange" size={20} />
                </div>
                <span className="font-bold text-gray-800 text-lg">{item}</span>
              </li>
            ))}
          </ul>
          <div className="flex flex-wrap items-center gap-8 border-t border-gray-100 pt-10">
            <div className="flex items-center space-x-4">
              <div className="bg-brand-orange p-4 rounded-sm text-white">
                <Phone size={24} />
              </div>
              <div>
                <span className="text-gray-400 text-xs block uppercase font-bold tracking-widest mb-1">Call us anytime</span>
                <span className="text-2xl font-bold text-brand-dark">+123 556 8824</span>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <img src="https://placehold.co/60x60/EEE/999?text=BA" className="w-14 h-14 rounded-full border-2 border-brand-orange" alt="Founder" />
              <div>
                <span className="font-bold block text-lg">Ben Ashik</span>
                <span className="text-xs text-gray-400 uppercase font-bold tracking-widest">Founder of Construz</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

const VideoSection = () => (
  <section className="relative h-[500px] overflow-hidden group">
    <img 
      src="https://placehold.co/1920x800/333/666?text=Construction+Video+Background" 
      alt="Video" 
      className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
    />
    <div className="absolute inset-0 bg-brand-dark/40 flex items-center justify-center">
      <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center text-brand-orange cursor-pointer hover:scale-110 transition-transform relative">
        <div className="absolute inset-0 rounded-full bg-white animate-ping opacity-20"></div>
        <Play size={32} fill="currentColor" className="ml-1" />
      </div>
    </div>
  </section>
);

const Services = () => (
  <section id="services" className="py-32 bg-white bg-grid clip-diagonal-up relative z-20 -mt-20">
    <div className="max-w-7xl mx-auto px-6">
      <div className="text-center mb-20">
        <span className="text-brand-orange font-bold uppercase tracking-widest text-xs mb-4 block">What We Do</span>
        <h2 className="text-4xl md:text-6xl font-extrabold uppercase tracking-tighter">
          We provide excellent service <br /> to our customers
        </h2>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        <div className="lg:col-span-1 space-y-3">
          {[
            { name: 'General construction', active: true },
            { name: 'Property maintenance', active: false },
            { name: 'Project management', active: false },
            { name: 'Renovation & Remodeling', active: false },
            { name: 'Pre-construction', active: false }
          ].map((service, i) => (
            <button 
              key={i} 
              className={`w-full text-left px-8 py-5 font-bold text-sm uppercase tracking-widest flex items-center justify-between transition-all border-b border-gray-200 ${service.active ? 'bg-brand-orange text-white border-none' : 'bg-white text-gray-600 hover:bg-gray-100'}`}
            >
              {service.name}
              <ArrowRight size={16} />
            </button>
          ))}
        </div>
        
        <div className="lg:col-span-3 grid grid-cols-1 md:grid-cols-2 gap-12 items-center bg-white p-12 border border-gray-100 rounded-sm relative overflow-hidden">
          <div className="absolute top-0 right-0 w-40 h-40 bg-geometric opacity-20"></div>
          <div className="relative h-full min-h-[400px]">
            <img 
              src="https://placehold.co/600x600/EEE/999?text=Service+Image" 
              alt="Service" 
              className="rounded-sm w-full h-full object-cover"
            />
            <div className="absolute bottom-6 right-6 bg-brand-dark text-white w-20 h-20 flex items-center justify-center font-bold text-3xl">
              01
            </div>
          </div>
          <div>
            <span className="text-brand-orange font-bold uppercase tracking-widest text-xs mb-4 block">About this Service</span>
            <h3 className="text-3xl font-extrabold mb-8 uppercase tracking-tighter">General construction</h3>
            <p className="text-gray-500 mb-10 leading-relaxed text-lg">
              We craft unique digital experiences. With more than 7 years of expertise we design and code clean websites.
            </p>
            <ul className="space-y-5 mb-12">
              <li className="flex items-center space-x-4 text-gray-800 font-bold">
                <CheckCircle2 className="text-brand-orange" size={20} />
                <span>Projects Monitoring and Organizing tools</span>
              </li>
            </ul>
            <button className="bg-brand-dark text-white px-10 py-5 font-bold text-xs uppercase tracking-widest hover:bg-brand-orange transition-all flex items-center">
              MORE DETAILS <ArrowRight size={16} className="ml-3" />
            </button>
          </div>
        </div>
      </div>
    </div>
  </section>
);

const WhyChooseUs = () => (
  <section className="py-32 bg-white bg-grid clip-diagonal-up relative z-30 -mt-20">
    <div className="max-w-7xl mx-auto px-6">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
        <div className="relative">
          <div className="absolute -top-10 -right-10 w-40 h-40 bg-geometric opacity-50 z-0"></div>
          <img 
            src="https://placehold.co/800x600/EEE/999?text=Roofing+Worker" 
            alt="Roofing" 
            className="rounded-sm relative z-10"
          />
          <div className="absolute -bottom-10 -right-10 bg-white p-8 border border-gray-100 rounded-sm z-20 hidden md:block border-b-4 border-brand-orange">
            <div className="flex items-center space-x-6">
              <div className="bg-brand-orange text-white p-4 rounded-sm">
                <Users size={32} />
              </div>
              <div>
                <span className="text-4xl font-extrabold block text-brand-dark">10k+</span>
                <span className="text-xs text-gray-400 uppercase font-bold tracking-widest">Satisfied Clients</span>
              </div>
            </div>
          </div>
        </div>
        <div>
          <span className="text-brand-orange font-bold uppercase tracking-widest text-xs mb-4 block">Our Benefits</span>
          <h2 className="text-4xl md:text-6xl font-extrabold mb-10 leading-tight tracking-tighter uppercase">
            Reasons for why people choosing 'Construz'
          </h2>
          <p className="text-gray-500 mb-12 text-lg leading-relaxed">
            Producing specialized design management of workflows to establish a framework, taking seamless key performance indicators others.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {[
              { title: 'Professional Engineers', icon: <Users size={32} /> },
              { title: 'Award Winning Company', icon: <Award size={32} /> },
              { title: 'Hassle-Free Services', icon: <ShieldCheck size={32} /> },
              { title: 'Excellent Planning', icon: <MapPin size={32} /> },
              { title: '10 years of experience', icon: <Star size={32} /> },
              { title: 'Best Roofing Warranty', icon: <ShieldCheck size={32} /> }
            ].map((item, i) => (
              <div key={i} className="flex items-start space-x-5 group">
                <div className="text-brand-orange mt-1 group-hover:scale-110 transition-transform">{item.icon}</div>
                <h4 className="font-extrabold text-lg text-gray-800 uppercase tracking-tighter leading-tight">{item.title}</h4>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  </section>
);

const Testimonials = () => (
  <section className="py-32 bg-brand-dark text-white clip-diagonal-up relative z-40 -mt-20 overflow-hidden">
    <div className="absolute top-0 right-0 w-full h-full bg-geometric-dark opacity-10"></div>
    <div className="max-w-7xl mx-auto px-6 relative z-10">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
        <div>
          <span className="text-brand-orange font-bold uppercase tracking-widest text-xs mb-4 block">Testimonials</span>
          <h2 className="text-4xl md:text-6xl font-extrabold mb-12 uppercase tracking-tighter">What client says</h2>
          <div className="bg-white/5 backdrop-blur-xl p-12 border border-white/10 relative">
            <div className="absolute -top-6 -left-6 text-brand-orange opacity-20">
              <Star size={100} fill="currentColor" />
            </div>
            <div className="flex text-brand-orange mb-8 space-x-1">
              {[...Array(5)].map((_, i) => <Star key={i} size={20} fill="currentColor" />)}
            </div>
            <p className="text-2xl italic text-gray-200 mb-10 leading-relaxed font-serif">
              "When an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries."
            </p>
            <div className="flex items-center space-x-6">
              <img 
                src="https://placehold.co/100x100/FF5722/FFF?text=DA" 
                alt="Client" 
                className="w-20 h-20 rounded-full border-4 border-brand-orange"
              />
              <div>
                <h4 className="font-bold text-xl uppercase tracking-tighter">David Anthony</h4>
                <span className="text-brand-orange text-xs uppercase font-bold tracking-widest">CEO, TechCorp</span>
              </div>
            </div>
          </div>
        </div>
        <div className="hidden lg:block">
          <img src="https://placehold.co/800x600/333/666?text=Testimonial+Image" alt="Testimonial" className="rounded-sm opacity-50 grayscale" />
        </div>
      </div>
    </div>
  </section>
);

const Awards = () => (
  <section className="py-32 bg-white bg-grid clip-diagonal-up relative z-50 -mt-20">
    <div className="max-w-7xl mx-auto px-6">
      <div className="text-center mb-20">
        <span className="text-brand-orange font-bold uppercase tracking-widest text-xs mb-4 block">Recognition</span>
        <h2 className="text-4xl md:text-6xl font-extrabold uppercase tracking-tighter">Our Awards & Achievements</h2>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {[
          { title: 'Best of the year', year: '2021' },
          { title: 'Innovation Award', year: '2022' },
          { title: 'Safety Excellence', year: '2023' },
          { title: 'Top Contractor', year: '2024' }
        ].map((award, i) => (
          <div key={i} className="bg-white p-12 border border-gray-100 flex flex-col items-center text-center group relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-1 bg-brand-orange scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></div>
            <div className="w-24 h-24 bg-gray-50 rounded-full flex items-center justify-center mb-8 group-hover:bg-brand-orange group-hover:text-white transition-all duration-500 group-hover:rotate-[360deg]">
              <Award size={48} />
            </div>
            <h4 className="font-extrabold text-xl mb-3 uppercase tracking-tighter">{award.title}</h4>
            <span className="text-brand-orange font-black text-lg">{award.year}</span>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const Contact = () => (
  <section id="contact" className="py-32 bg-white bg-grid clip-diagonal-up relative z-[60] -mt-20">
    <div className="max-w-7xl mx-auto px-6">
      <div className="bg-white border border-gray-100 rounded-sm overflow-hidden grid grid-cols-1 lg:grid-cols-5">
        <div className="lg:col-span-2 bg-brand-orange p-16 text-white relative overflow-hidden">
          <div className="absolute top-0 right-0 w-40 h-40 bg-white/10 clip-diagonal-down"></div>
          <h2 className="text-4xl md:text-5xl font-extrabold mb-10 uppercase tracking-tighter">Have a project in mind?</h2>
          <p className="mb-16 text-orange-50 text-lg">Fill out the form and our team will get back to you within 24 hours.</p>
          <div className="space-y-10">
            <div className="flex items-center space-x-6">
              <div className="bg-white/20 p-3 rounded-sm"><MapPin size={24} /></div>
              <span className="font-bold">123 Construction Ave, NY 10001</span>
            </div>
            <div className="flex items-center space-x-6">
              <div className="bg-white/20 p-3 rounded-sm"><Phone size={24} /></div>
              <span className="font-bold">+123 556 8824</span>
            </div>
            <div className="flex items-center space-x-6">
              <div className="bg-white/20 p-3 rounded-sm"><Mail size={24} /></div>
              <span className="font-bold">contact@construz.com</span>
            </div>
          </div>
        </div>
        <div className="lg:col-span-3 p-16 relative">
          <div className="absolute top-0 left-0 w-40 h-40 bg-geometric opacity-10"></div>
          <form className="grid grid-cols-1 md:grid-cols-2 gap-8 relative z-10">
            <div className="space-y-3">
              <label className="text-xs font-black text-gray-400 uppercase tracking-widest">Your Name</label>
              <input type="text" className="w-full p-5 bg-gray-50 border-2 border-gray-100 rounded-sm focus:border-brand-orange focus:ring-0 transition-colors font-bold" placeholder="John Doe" />
            </div>
            <div className="space-y-3">
              <label className="text-xs font-black text-gray-400 uppercase tracking-widest">Email Address</label>
              <input type="email" className="w-full p-5 bg-gray-50 border-2 border-gray-100 rounded-sm focus:border-brand-orange focus:ring-0 transition-colors font-bold" placeholder="john@example.com" />
            </div>
            <div className="space-y-3 md:col-span-2">
              <label className="text-xs font-black text-gray-400 uppercase tracking-widest">Subject</label>
              <input type="text" className="w-full p-5 bg-gray-50 border-2 border-gray-100 rounded-sm focus:border-brand-orange focus:ring-0 transition-colors font-bold" placeholder="How can we help?" />
            </div>
            <div className="space-y-3 md:col-span-2">
              <label className="text-xs font-black text-gray-400 uppercase tracking-widest">Message</label>
              <textarea className="w-full p-5 bg-gray-50 border-2 border-gray-100 rounded-sm focus:border-brand-orange focus:ring-0 transition-colors h-40 font-bold" placeholder="Tell us about your project..."></textarea>
            </div>
            <div className="md:col-span-2">
              <button className="w-full bg-brand-dark text-white py-6 rounded-sm font-black text-sm uppercase tracking-widest hover:bg-brand-orange transition-all">
                SEND MESSAGE
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </section>
);

const Portfolio = () => (
  <section id="projects" className="py-32 bg-white bg-grid clip-diagonal-up relative z-[70] -mt-20">
    <div className="max-w-7xl mx-auto px-6">
      <div className="text-center mb-20">
        <span className="text-brand-orange font-bold uppercase tracking-widest text-xs mb-4 block">Portfolio</span>
        <h2 className="text-4xl md:text-6xl font-extrabold uppercase tracking-tighter">Recently completed projects</h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {[1, 2, 3, 4, 5, 6].map((i) => (
          <div key={i} className="group relative overflow-hidden rounded-sm aspect-square">
            <img 
              src={`https://placehold.co/600x600/EEE/999?text=Project+${i}`} 
              alt={`Project ${i}`} 
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-brand-orange/90 opacity-0 group-hover:opacity-100 transition-all duration-500 flex flex-col items-center justify-center text-white p-10 translate-y-10 group-hover:translate-y-0">
              <h4 className="text-3xl font-black mb-3 uppercase tracking-tighter">Modern Complex</h4>
              <span className="text-xs uppercase font-bold tracking-widest mb-8">Construction</span>
              <button className="p-4 bg-white text-brand-orange rounded-full hover:scale-110 transition-transform">
                <ArrowRight size={24} />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const Stats = () => (
  <div className="bg-white bg-grid py-24 border-t border-gray-100 clip-diagonal-up relative z-[80] -mt-20">
    <div className="max-w-7xl mx-auto px-6">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-12 text-center">
        {[
          { label: 'Completed Projects', value: '26k+' },
          { label: 'Happy Clients', value: '98%' },
          { label: 'Annual Turnover', value: '20M' },
          { label: 'Expert Engineers', value: '304' }
        ].map((stat, i) => (
          <div key={i} className="flex flex-col items-center group">
            <span className="text-6xl font-black text-brand-dark mb-4 group-hover:text-brand-orange transition-colors tracking-tighter">{stat.value}</span>
            <div className="w-12 h-1 bg-brand-orange mb-4 opacity-20 group-hover:opacity-100 transition-opacity"></div>
            <span className="text-xs uppercase tracking-widest font-black text-gray-400">{stat.label}</span>
          </div>
        ))}
      </div>
    </div>
  </div>
);

const Blog = () => (
  <section id="news" className="py-32 bg-white bg-grid clip-diagonal-up relative z-[90] -mt-20">
    <div className="max-w-7xl mx-auto px-6">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-20">
        <div>
          <span className="text-brand-orange font-bold uppercase tracking-widest text-xs mb-4 block">Latest News</span>
          <h2 className="text-4xl md:text-6xl font-extrabold uppercase tracking-tighter">Our latest news and blog</h2>
        </div>
        <button className="mt-10 md:mt-0 bg-brand-dark text-white px-10 py-5 font-bold text-xs uppercase tracking-widest hover:bg-brand-orange transition-all flex items-center">
          VIEW ALL POSTS <ArrowRight size={18} className="ml-3" />
        </button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
        {[
          { date: '15 Oct', title: 'Modern construction methods for 2024' },
          { date: '12 Oct', title: 'Why roofing maintenance is essential' },
          { date: '10 Oct', title: 'The future of sustainable architecture' }
        ].map((post, i) => (
          <div key={i} className="group cursor-pointer bg-white border border-gray-100 hover:border-brand-orange transition-all rounded-sm overflow-hidden">
            <div className="relative overflow-hidden aspect-[4/3]">
              <img src={`https://placehold.co/600x450/EEE/999?text=Blog+${i+1}`} alt={post.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
              <div className="absolute top-6 left-6 bg-brand-orange text-white w-16 h-16 flex flex-col items-center justify-center rounded-sm">
                <span className="block text-2xl font-black leading-none">{post.date.split(' ')[0]}</span>
                <span className="text-[10px] uppercase font-black tracking-widest">{post.date.split(' ')[1]}</span>
              </div>
            </div>
            <div className="p-10">
              <h3 className="text-2xl font-extrabold mb-6 group-hover:text-brand-orange transition-colors leading-tight uppercase tracking-tighter">
                {post.title}
              </h3>
              <div className="flex items-center text-gray-400 text-xs font-bold uppercase tracking-widest space-x-4 border-t border-gray-100 pt-6">
                <span>By Admin</span>
                <span className="w-1 h-1 bg-brand-orange rounded-full"></span>
                <span>3 Comments</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const Footer = () => (
  <footer className="bg-brand-dark text-white pt-32 pb-16 relative z-[100] clip-diagonal-up -mt-20">
    <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-24">
      <div className="space-y-8">
        <span className="text-4xl font-black tracking-tighter">CONSTRUZ</span>
        <p className="text-gray-400 leading-relaxed text-lg">
          We craft unique digital experiences. With more than 7 years of expertise we design and code clean websites.
        </p>
        <div className="flex space-x-5">
          {[Facebook, Twitter, Instagram, Linkedin].map((Icon, i) => (
            <div key={i} className="w-12 h-12 rounded-sm bg-white/5 flex items-center justify-center hover:bg-brand-orange cursor-pointer transition-all hover:-translate-y-1">
              <Icon size={20} />
            </div>
          ))}
        </div>
      </div>
      
      <div>
        <h4 className="text-xl font-black mb-10 uppercase tracking-tighter border-b-2 border-brand-orange inline-block pb-2">Useful Links</h4>
        <ul className="space-y-5 text-gray-400 font-bold text-sm uppercase tracking-widest">
          {['About Company', 'Our Services', 'Latest Projects', 'News & Blog', 'Contact Us'].map((link) => (
            <li key={link} className="hover:text-brand-orange transition-colors cursor-pointer flex items-center space-x-3 group">
              <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
              <span>{link}</span>
            </li>
          ))}
        </ul>
      </div>

      <div>
        <h4 className="text-xl font-black mb-10 uppercase tracking-tighter border-b-2 border-brand-orange inline-block pb-2">Our Services</h4>
        <ul className="space-y-5 text-gray-400 font-bold text-sm uppercase tracking-widest">
          {['General Construction', 'Property Maintenance', 'Project Management', 'Renovation', 'Pre-construction'].map((link) => (
            <li key={link} className="hover:text-brand-orange transition-colors cursor-pointer flex items-center space-x-3 group">
              <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
              <span>{link}</span>
            </li>
          ))}
        </ul>
      </div>

      <div>
        <h4 className="text-xl font-black mb-10 uppercase tracking-tighter border-b-2 border-brand-orange inline-block pb-2">Office Address</h4>
        <ul className="space-y-8 text-gray-400 font-bold">
          <li className="flex items-start space-x-5">
            <div className="bg-brand-orange p-2 rounded-sm text-white"><MapPin size={20} /></div>
            <span className="text-sm uppercase tracking-widest">123 Construction Ave, New York, NY 10001</span>
          </li>
          <li className="flex items-start space-x-5">
            <div className="bg-brand-orange p-2 rounded-sm text-white"><Phone size={20} /></div>
            <span className="text-sm uppercase tracking-widest">+123 556 8824</span>
          </li>
          <li className="flex items-start space-x-5">
            <div className="bg-brand-orange p-2 rounded-sm text-white"><Mail size={20} /></div>
            <span className="text-sm uppercase tracking-widest">contact@construz.com</span>
          </li>
        </ul>
      </div>
    </div>
    
    <div className="max-w-7xl mx-auto px-6 pt-12 border-t border-white/10 text-center text-gray-500 text-xs font-black uppercase tracking-[0.2em]">
      <p>© 2026 CONSTRUZ. All Rights Reserved. Designed with passion.</p>
    </div>
  </footer>
);

export default function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <Hero />
        <About />
        <VideoSection />
        <Services />
        <WhyChooseUs />
        <Testimonials />
        <Awards />
        <Contact />
        <Portfolio />
        <Stats />
        <Blog />
      </main>
      <Footer />
    </div>
  );
}
