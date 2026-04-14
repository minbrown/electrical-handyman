import React, { useEffect } from 'react';
import { useParams, Navigate, Link } from 'react-router-dom';
import { CheckCircle2, Phone, ArrowRight, MapPin } from 'lucide-react';
import { serviceLocations } from '../data/locationsData';
import { services } from '../data/siteData';

const LocationPage = () => {
  const { city } = useParams<{ city: string }>();
  
  const location = serviceLocations.find(loc => loc.id === city);
  
  useEffect(() => {
    if (location) {
      document.title = `Electrician & Handyman in ${location.name}, ${location.state} | Alluph Trades`;
      const metaDescription = document.querySelector('meta[name="description"]');
      if (metaDescription) {
        metaDescription.setAttribute('content', `Top-rated electrical and handyman services in ${location.name}, ${location.state}. ${location.description}`);
      }
    }
  }, [location]);

  if (!location) {
    return <Navigate to="/" replace />;
  }

  return (
    <div className="bg-white">

      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex flex-col items-center justify-center bg-brand-dark overflow-hidden pt-32 pb-20">
        <div className="absolute top-0 left-0 w-full h-full bg-geometric-dark opacity-10"></div>
        <div className="absolute top-0 left-0 md:left-auto right-0 w-full h-full z-0 overflow-hidden">
          <div className="absolute inset-0 bg-brand-dark/70 z-10"></div>
          <img 
            src={location.image} 
            alt={`Electrical services in ${location.name}`} 
            className="w-full h-full object-cover grayscale opacity-50"
          />
        </div>

        <div className="max-w-4xl mx-auto px-6 relative z-10 w-full text-center">
          <div className="inline-flex items-center space-x-2 bg-brand-primary/20 backdrop-blur-sm px-6 py-2 rounded-full border border-brand-primary/30 mb-8">
            <MapPin size={16} className="text-brand-primary" />
            <span className="text-white text-xs font-bold uppercase tracking-widest leading-none pt-1">Serving {location.name}, {location.state}</span>
          </div>
          
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-extrabold text-white leading-tight mb-8 uppercase tracking-tighter">
            <span className="text-brand-primary block mb-2">Expert Electrical</span>
            & Handyman Services in {location.name}
          </h1>
          
          <p className="text-gray-300 text-lg md:text-xl mb-12 max-w-2xl mx-auto leading-relaxed">
            {location.description}
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <a href="tel:2483085960" className="bg-brand-primary text-white px-10 py-5 font-bold text-sm uppercase tracking-widest hover:bg-white hover:text-brand-primary transition-all flex items-center w-full sm:w-fit justify-center shadow-xl group">
              <Phone size={20} className="mr-3 group-hover:animate-pulse" />
              Call (248) 308-5960
            </a>
            <a href="https://api.echovoicelabs.com/widget/form/tQUXk6FOf8D6fdg79jhK?notrack=true" target="_blank" rel="noopener noreferrer" className="border border-white/20 backdrop-blur-sm text-white px-10 py-5 font-bold text-sm uppercase tracking-widest hover:bg-white/10 transition-all flex items-center w-full sm:w-fit justify-center text-center">
              Request Free Estimate
            </a>
          </div>
        </div>
      </section>

      {/* Services Checklist tailored to location */}
      <section className="py-24 bg-white relative z-20 clip-diagonal-up -mt-10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-brand-primary font-bold uppercase tracking-widest text-xs mb-4 block">Our Capabilities</span>
            <h2 className="text-3xl md:text-5xl font-extrabold uppercase tracking-tighter">Everything your {location.name} property needs</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, idx) => (
              <div key={idx} className="bg-gray-50 p-8 border border-gray-100 hover:shadow-xl hover:border-brand-primary/30 transition-all group">
                <h3 className="text-xl font-bold uppercase tracking-tight mb-4 flex items-center text-brand-dark group-hover:text-brand-primary transition-colors">
                  <CheckCircle2 size={24} className="mr-3 text-brand-primary" />
                  {service.title}
                </h3>
                <p className="text-gray-500 mb-6">{service.desc}</p>
                <div className="space-y-2">
                  {service.points.slice(0, 2).map((point, i) => (
                    <div key={i} className="flex items-start">
                      <div className="w-1.5 h-1.5 bg-brand-primary mt-2 mr-3 rounded-full shrink-0"></div>
                      <span className="text-sm font-bold text-gray-700">{point}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-brand-dark text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-geometric-dark opacity-10"></div>
        <div className="relative z-10 max-w-3xl mx-auto px-6">
          <h2 className="text-3xl md:text-5xl font-extrabold text-white uppercase tracking-tighter mb-8">
            Need an Electrician in {location.name}?
          </h2>
          <p className="text-gray-400 text-lg mb-10">
            We offer transparent pricing, prompt service, and commercial-grade workmanship on every job.
          </p>
          <Link to="/contact" className="inline-flex items-center bg-brand-primary text-white px-10 py-5 font-bold text-sm uppercase tracking-widest hover:opacity-90 transition-opacity">
            <span>Get your project started</span>
            <ArrowRight size={20} className="ml-3" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default LocationPage;
