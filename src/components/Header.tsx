import React from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { Phone, Mail, Facebook, Twitter, Instagram, Linkedin, Search, Menu, X } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Blog', path: '/blog' },
    { name: 'Contact', path: '/contact' },
  ];

  const location = useLocation();
  const isHome = location.pathname === '/';

  return (
    <header className={`${isHome ? 'absolute' : 'relative bg-brand-dark'} top-0 left-0 w-full z-50`}>
      <div className="bg-brand-dark/20 backdrop-blur-sm border-b border-white/10 hidden lg:block">
        <div className="max-w-7xl mx-auto px-6 h-12 flex items-center justify-between text-white text-sm">
          <div className="flex items-center space-x-6">
            <a href="tel:2483085960" className="flex items-center space-x-2 hover:text-brand-primary transition-colors">
              <Phone size={14} className="text-brand-primary" />
              <span>(248) 308-5960</span>
            </a>
            <a href="mailto:alluphtradesllc@gmail.com" className="flex items-center space-x-2 hover:text-brand-primary transition-colors">
              <Mail size={14} className="text-brand-primary" />
              <span>alluphtradesllc@gmail.com</span>
            </a>
          </div>
          <div className="flex items-center space-x-4">
            <a href="https://www.facebook.com/alluphtrades/" target="_blank" rel="noopener noreferrer" className="hover:text-brand-primary transition-colors">
              <Facebook size={14} />
            </a>
            <a href="https://www.instagram.com/alluphtrades" target="_blank" rel="noopener noreferrer" className="hover:text-brand-primary transition-colors">
              <Instagram size={14} />
            </a>
          </div>
        </div>
      </div>
      
      <nav className="max-w-7xl mx-auto px-6 h-24 flex items-center justify-between">
        <Link to="/" className="flex items-center">
          <img src="/logo-white.png" alt="Alluph Trades" className="h-10 md:h-12 w-auto object-contain" />
        </Link>
        
        <div className="hidden lg:flex items-center space-x-8">
          {navLinks.map((item) => (
            <NavLink 
              key={item.name} 
              to={item.path} 
              className={({ isActive }) => `font-bold text-sm uppercase tracking-widest transition-colors ${isActive ? 'text-brand-primary' : 'text-white hover:text-brand-primary'}`}
            >
              {item.name}
            </NavLink>
          ))}
          <div className="flex items-center space-x-4 border-l border-white/20 pl-8">
            <button className="text-white hover:text-brand-primary transition-colors">
              <Search size={20} />
            </button>
            <a href="https://api.echovoicelabs.com/widget/form/tQUXk6FOf8D6fdg79jhK?notrack=true" target="_blank" rel="noopener noreferrer" className="bg-brand-primary text-white px-8 py-4 font-bold text-xs uppercase tracking-widest hover:opacity-90 transition-all">
              Free Estimate
            </a>
          </div>
        </div>

        <button className="lg:hidden text-white" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </nav>

      {isMenuOpen && (
        <div className="lg:hidden bg-brand-dark text-white p-6 absolute top-24 left-0 w-full shadow-xl">
          <div className="flex flex-col space-y-4">
            {navLinks.map((item) => (
              <Link 
                key={item.name} 
                to={item.path} 
                className="text-lg font-medium border-b border-white/10 pb-2"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            <a 
              href="https://api.echovoicelabs.com/widget/form/tQUXk6FOf8D6fdg79jhK?notrack=true" target="_blank" rel="noopener noreferrer"
              className="bg-brand-primary text-white px-6 py-3 font-bold text-sm uppercase tracking-wider text-center"
              onClick={() => setIsMenuOpen(false)}
            >
              Free Estimate
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
