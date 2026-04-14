import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Facebook, Twitter, Instagram, Linkedin, ArrowRight } from 'lucide-react';
import { serviceLocations } from '../data/locationsData';

const Footer = () => (
  <footer className="bg-brand-dark text-white pt-20 md:pt-32 pb-12 md:pb-16 relative z-[100] clip-diagonal-up -mt-20 overflow-hidden">
    {/* Decorative Accent */}
    <div className="absolute bottom-[-2%] left-[-2%] w-[35%] h-[8%] bg-brand-primary clip-trapezoid opacity-90 z-10"></div>

    <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-12 md:gap-16 mb-16 md:mb-24 text-center sm:text-left">
      <div className="space-y-6 md:space-y-8 flex flex-col items-center sm:items-start lg:col-span-2">
        <img src="/logo.png" alt="Alluph Trades" className="h-12 md:h-16 w-auto object-contain brightness-0 invert opacity-90" />
        <p className="text-gray-400 leading-relaxed text-base md:text-lg max-w-sm mx-auto md:mx-0">
          Licensed & insured electrical and handyman services in Troy, MI. Commercial-grade workmanship on every job.
        </p>
        <div className="flex justify-center md:justify-start space-x-5">
          {[
            { Icon: Facebook, url: 'https://www.facebook.com/alluphtrades/' },
            { Icon: Instagram, url: 'https://www.instagram.com/alluphtrades' }
          ].map((social, i) => (
            <a 
              key={i} 
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 rounded-sm bg-white/5 flex items-center justify-center hover:bg-brand-primary cursor-pointer transition-all hover:-translate-y-1 block"
            >
              <social.Icon size={20} />
            </a>
          ))}
        </div>
      </div>
      
      <div className="flex flex-col items-center md:items-start">
        <h4 className="text-lg md:text-xl font-black mb-8 md:mb-10 uppercase tracking-tighter">Useful Links</h4>
        <ul className="space-y-4 md:space-y-5 text-gray-400 font-bold text-xs md:text-sm uppercase tracking-widest flex flex-col items-center md:items-start">
          {[
            { name: 'About Company', path: '/about' },
            { name: 'News & Blog', path: '/blog' },
            { name: 'Contact Us', path: '/contact' }
          ].map((link) => (
            <li key={link.name}>
              <Link to={link.path} className="hover:text-brand-primary transition-colors cursor-pointer flex items-center space-x-3 group text-center md:text-left">
                <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform hidden md:block" />
                <span>{link.name}</span>
              </Link>
            </li>
          ))}
        </ul>
      </div>

      <div className="flex flex-col items-center sm:items-start">
        <h4 className="text-lg md:text-xl font-black mb-8 md:mb-10 uppercase tracking-tighter">Our Services</h4>
        <ul className="space-y-4 md:space-y-5 text-gray-400 font-bold text-xs md:text-sm uppercase tracking-widest flex flex-col items-center sm:items-start">
          {['Electrical', 'Home Renovation', 'Kitchen & Bath', 'Minor Plumbing', 'Data & Cameras'].map((link) => (
            <li key={link} className="hover:text-brand-primary transition-colors cursor-pointer flex items-center space-x-3 group text-center sm:text-left">
              <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform hidden sm:block" />
              <span>{link}</span>
            </li>
          ))}
        </ul>
      </div>

      <div className="flex flex-col items-center sm:items-start">
        <h4 className="text-lg md:text-xl font-black mb-8 md:mb-10 uppercase tracking-tighter">Service Areas</h4>
        <ul className="space-y-4 md:space-y-5 text-gray-400 font-bold text-xs md:text-sm uppercase tracking-widest flex flex-col items-center sm:items-start">
          {serviceLocations.map((loc) => (
            <li key={loc.id}>
              <Link to={`/areas/${loc.id}`} className="hover:text-brand-primary transition-colors cursor-pointer flex items-center space-x-3 group text-center sm:text-left">
                <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform hidden sm:block" />
                <span>{loc.name}, {loc.state}</span>
              </Link>
            </li>
          ))}
        </ul>
      </div>

      <div className="flex flex-col items-center sm:items-start lg:col-span-1 sm:col-span-2 lg:col-span-1">
        <h4 className="text-lg md:text-xl font-black mb-8 md:mb-10 uppercase tracking-tighter">Contact Us</h4>
        <ul className="space-y-6 md:space-y-8 text-gray-400 font-bold max-w-sm mx-auto md:mx-0">
          <li className="flex justify-center md:justify-start">
            <a 
              href="https://www.google.com/maps/search/?api=1&query=900+Wilshire+Dr+Suite+202+Troy+MI+48048" 
              target="_blank" 
              rel="noopener noreferrer"
              className="group flex flex-col md:flex-row items-center md:items-start space-y-3 md:space-y-0 md:space-x-5 hover:text-brand-primary transition-colors text-center md:text-left"
            >
              <div className="bg-brand-primary p-2 rounded-sm text-white shrink-0"><MapPin size={20} /></div>
              <span className="text-[10px] md:text-xs uppercase tracking-widest leading-relaxed mt-2 md:mt-0">900 Wilshire Dr., Suite 202, Troy MI 48048</span>
            </a>
          </li>
          <li className="flex justify-center md:justify-start">
            <a href="tel:2483085960" className="group flex flex-col md:flex-row items-center md:items-start space-y-3 md:space-y-0 md:space-x-5 hover:text-brand-primary transition-colors text-center md:text-left">
              <div className="bg-brand-primary p-2 rounded-sm text-white shrink-0"><Phone size={20} /></div>
              <span className="text-[10px] md:text-xs uppercase tracking-widest mt-2 md:mt-0">(248) 308-5960</span>
            </a>
          </li>
          <li className="flex justify-center md:justify-start">
            <a href="mailto:alluphtradesllc@gmail.com" className="group flex flex-col md:flex-row items-center md:items-start space-y-3 md:space-y-0 md:space-x-5 hover:text-brand-primary transition-colors text-center md:text-left">
              <div className="bg-brand-primary p-2 rounded-sm text-white shrink-0"><Mail size={20} /></div>
              <span className="text-[10px] md:text-xs uppercase tracking-widest mt-2 md:mt-0">alluphtradesllc@gmail.com</span>
            </a>
          </li>
        </ul>
      </div>
    </div>
    
    <div className="max-w-7xl mx-auto px-6 pt-10 md:pt-12 border-t border-white/10 flex flex-col items-center gap-6 relative z-20">
      <div className="flex space-x-6 text-[10px] md:text-xs text-gray-400 font-bold uppercase tracking-widest">
        <Link to="/terms" className="hover:text-brand-primary transition-colors">Terms of Service</Link>
        <span>|</span>
        <Link to="/privacy" className="hover:text-brand-primary transition-colors">Privacy Policy</Link>
      </div>
      <p className="text-gray-500 text-[8px] md:text-xs font-black uppercase tracking-[0.2em] text-center">© 2026 Alluphtrades LLC · Troy, MI · All Rights Reserved.</p>
    </div>
  </footer>
);

export default Footer;
