import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { ArrowRight, Search, Calendar, User, Tag } from 'lucide-react';
import { blogPosts } from '../data/siteData';

const Blog = () => {
  // Calculate category counts
  const categoryCounts = blogPosts.reduce((acc, post) => {
    const cat = post.category || 'Uncategorized';
    acc[cat] = (acc[cat] || 0) + 1;
    return acc;
  }, {} as Record<string, number>);

  const categories = Object.keys(categoryCounts).sort();

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <section className="relative py-32 bg-brand-dark overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="/panel-4.jpg" 
            alt="Blog Header Background" 
            className="w-full h-full object-cover opacity-10 grayscale"
          />
          <div className="absolute inset-0 bg-brand-dark/95"></div>
        </div>
        <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
          <span className="text-brand-primary font-bold uppercase tracking-widest text-xs mb-6 block">Insights & Updates</span>
          <h1 className="text-5xl md:text-8xl font-extrabold text-white uppercase tracking-tighter mb-8">News & Pro Tips</h1>
          <p className="max-w-2xl mx-auto text-gray-400 text-xl leading-relaxed uppercase font-bold tracking-wider">
            Expert advice on electrical safety, home renovation trends, and smart technology.
          </p>
        </div>
      </section>

      {/* Blog Feed */}
      <section className="pt-32 md:pt-64 pb-32 bg-white bg-grid relative z-10 clip-diagonal-up -mt-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col lg:grid lg:grid-cols-3 gap-16 md:gap-24">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-16 md:space-y-24">
              {blogPosts.map((post, i) => (
                <article key={post.id} className="group text-center lg:text-left">
                  <div className="relative overflow-hidden mb-8 md:mb-12 aspect-[16/9] shadow-xl">
                    <img 
                      src={post.img} 
                      alt={post.title} 
                      className="w-full h-full object-cover object-top transition-transform duration-1000 group-hover:scale-105"
                    />
                    <div className="absolute top-4 left-4 md:top-8 md:left-8 bg-brand-primary text-white p-4 md:p-6 rounded-sm text-center shadow-xl scale-90 md:scale-100">
                      <span className="block text-2xl md:text-3xl font-black leading-none">{post.date.split(' ')[0]}</span>
                      <span className="text-[8px] md:text-[10px] uppercase font-black tracking-widest">{post.date.split(' ')[1]}</span>
                    </div>
                  </div>
                  <div className="flex items-center justify-center lg:justify-start space-x-6 text-gray-400 text-[10px] md:text-xs font-bold uppercase tracking-widest mb-6">
                    <span className="flex items-center"><User size={14} className="mr-2 text-brand-primary" /> Alluph Trades</span>
                    <span className="flex items-center"><Tag size={14} className="mr-2 text-brand-primary" /> {post.category || 'Expert Tips'}</span>
                  </div>
                  <h2 className="text-2xl sm:text-3xl md:text-5xl font-extrabold text-brand-dark mb-6 md:mb-8 uppercase tracking-tighter hover:text-brand-primary transition-colors leading-tight">
                    <Link to={`/blog/${post.id}`}>{post.title}</Link>
                  </h2>
                  <p className="text-gray-500 text-base md:text-lg leading-relaxed mb-10 max-w-3xl mx-auto lg:mx-0">
                    {post.excerpt}
                  </p>
                  <Link to={`/blog/${post.id}`} className="group flex items-center justify-center lg:justify-start text-brand-primary font-black text-xs md:text-sm uppercase tracking-widest">
                    Continue Reading
                    <div className="ml-4 w-12 h-[2px] bg-brand-primary group-hover:w-20 transition-all"></div>
                  </Link>
                </article>
              ))}
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1 border-t border-gray-100 lg:border-none pt-16 lg:pt-0">
              <div className="md:sticky md:top-32 space-y-12 md:space-y-16">
                {/* Search */}
                <div className="bg-gray-50 p-8 md:p-10 border border-gray-100 text-center lg:text-left shadow-lg">
                  <h4 className="text-lg md:text-xl font-extrabold text-brand-dark mb-8 uppercase tracking-tighter border-b-2 border-brand-primary inline-block pb-1">Search</h4>
                  <div className="relative max-w-sm mx-auto lg:mx-0">
                    <input 
                      type="text" 
                      placeholder="Type keywords..." 
                      className="w-full bg-white border border-gray-200 p-4 md:p-5 rounded-sm focus:border-brand-primary focus:ring-0 transition-colors placeholder-gray-400 font-bold"
                    />
                    <Search className="absolute right-5 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
                  </div>
                </div>

                {/* Categories */}
                <div className="bg-gray-50 p-8 md:p-10 border border-gray-100 text-center lg:text-left shadow-lg">
                  <h4 className="text-lg md:text-xl font-extrabold text-brand-dark mb-8 uppercase tracking-tighter border-b-2 border-brand-primary inline-block pb-1">Categories</h4>
                  <ul className="space-y-4 max-w-sm mx-auto lg:mx-0">
                    {categories.map(cat => (
                      <li key={cat}>
                        <a href="#" className="flex justify-between items-center text-gray-600 hover:text-brand-primary transition-colors font-bold uppercase tracking-widest text-[10px] md:text-xs">
                          {cat} <span>({categoryCounts[cat]})</span>
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Call to Action */}
                <div className="bg-brand-primary p-10 md:p-12 text-white relative overflow-hidden group shadow-2xl text-center">
                  <div className="absolute top-0 left-0 w-full h-full bg-geometric opacity-20 group-hover:scale-110 transition-transform duration-1000"></div>
                  <h4 className="text-2xl md:text-3xl font-extrabold uppercase tracking-tighter mb-6 relative z-10">Need an Expert?</h4>
                  <p className="text-xs font-bold uppercase tracking-widest mb-10 relative z-10 opacity-90 leading-relaxed">Ready to handle your next <br /> electrical or renovation project.</p>
                  <Link to="/contact" className="bg-brand-dark text-white px-10 py-5 font-black text-xs uppercase tracking-widest inline-block relative z-10 hover:bg-black transition-all w-full sm:w-auto">
                    Get in touch
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blog;
