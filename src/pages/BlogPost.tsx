import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { ArrowLeft, Calendar, User, Tag, Share2, Facebook, Twitter, Linkedin } from 'lucide-react';
import { blogPosts } from '../data/siteData';

const BlogPost = () => {
  const { id } = useParams();
  const post = blogPosts.find(p => p.id === id);

  if (!post) {
    return (
      <div className="pt-48 pb-32 text-center bg-white min-h-screen">
        <h1 className="text-4xl font-extrabold uppercase tracking-tighter mb-8">Post Not Found</h1>
        <Link to="/blog" className="text-brand-primary font-bold uppercase tracking-widest text-sm flex items-center justify-center">
          <ArrowLeft size={16} className="mr-2" /> Back to Blog
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Article Header */}
      <section className="relative py-32 bg-brand-dark overflow-hidden">
        <div className="absolute inset-0 z-0 text-center">
          <img 
            src={post.img} 
            alt={post.title} 
            className="w-full h-full object-cover opacity-20 blur-sm"
          />
          <div className="absolute inset-0 bg-brand-dark/80"></div>
        </div>
        <div className="max-w-4xl mx-auto px-6 relative z-10 text-center">
          <Link to="/blog" className="inline-flex items-center text-brand-primary font-bold uppercase tracking-widest text-xs mb-10 hover:translate-x-[-10px] transition-transform">
            <ArrowLeft size={16} className="mr-2" /> Back to News & Tips
          </Link>
          <h1 className="text-4xl md:text-7xl font-extrabold text-white uppercase tracking-tighter mb-10 leading-[1.1]">
            {post.title}
          </h1>
          <div className="flex flex-wrap justify-center items-center gap-8 text-white/60 text-xs font-bold uppercase tracking-widest">
            <span className="flex items-center"><Calendar size={14} className="mr-2 text-brand-primary" /> {post.date}, 2026</span>
            <span className="flex items-center"><User size={14} className="mr-2 text-brand-primary" /> By Terrance Brown</span>
            <span className="flex items-center"><Tag size={14} className="mr-2 text-brand-primary" /> {post.category || 'Expert Tips'}</span>
          </div>
        </div>
      </section>

      {/* Article Content */}
      <section className="py-20 md:py-32 bg-white bg-grid relative z-10 clip-diagonal-up -mt-20">
        <div className="max-w-4xl mx-auto px-6">
          <div className="mb-12 md:mb-20">
            <img src={post.img} alt={post.title} className="w-full rounded-sm shadow-2xl aspect-video object-cover" />
          </div>
          
          <div className="prose prose-lg md:prose-xl prose-slate max-w-none text-center md:text-left">
            <div className="text-gray-600 leading-relaxed space-y-8 font-medium whitespace-pre-line text-sm md:text-lg">
              {post.content}
            </div>
          </div>

          {/* Social Share & Tags */}
          <div className="mt-16 md:mt-20 pt-12 border-t border-gray-100 flex flex-col items-center md:flex-row md:items-center justify-between gap-10">
            <div className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-4">
              <span className="text-[10px] font-black uppercase tracking-[0.2em] text-gray-400">Share This:</span>
              <div className="flex space-x-3">
                {[Facebook, Twitter, Linkedin].map((Icon, i) => (
                  <button key={i} className="w-10 h-10 bg-gray-50 flex items-center justify-center hover:bg-brand-primary hover:text-white transition-all text-brand-dark rounded-sm">
                    <Icon size={16} />
                  </button>
                ))}
              </div>
            </div>
            <div className="flex flex-wrap justify-center md:justify-end gap-2">
              {['Electrical', 'Pro Tips', 'Troy MI', 'Licensed'].map(tag => (
                <span key={tag} className="px-4 py-2 bg-gray-50 text-[10px] font-black uppercase tracking-widest text-gray-400 border border-gray-100 rounded-sm">
                  #{tag}
                </span>
              ))}
            </div>
          </div>

          {/* Author Bio */}
          <div className="mt-24 md:mt-32 bg-gray-50 p-10 md:p-16 border-t-8 md:border-t-0 md:border-l-8 border-brand-primary relative overflow-hidden text-center md:text-left shadow-xl">
            <div className="absolute top-0 right-0 w-40 h-40 bg-geometric opacity-[0.03]"></div>
            <div className="flex flex-col md:flex-row items-center gap-10 relative z-10">
              <div className="w-32 h-32 rounded-full bg-brand-primary flex items-center justify-center text-white text-4xl font-black shrink-0 border-4 border-white shadow-xl">
                TB
              </div>
              <div>
                <h4 className="text-2xl font-black uppercase tracking-tighter text-brand-dark mb-4">Terrance Brown</h4>
                <p className="text-gray-500 font-bold text-xs md:text-sm leading-relaxed uppercase tracking-wider mb-6 max-w-2xl mx-auto md:mx-0">
                  Owner and Lead Master Electrician at Alluph Trades LLC. With over 20 years in the industrial and residential trades, Terrance focuses on bringing high-spec standards to every project.
                </p>
                <div className="flex justify-center md:justify-start space-x-6 text-brand-primary">
                  <Facebook size={18} className="cursor-pointer hover:scale-110 transition-transform" />
                  <Twitter size={18} className="cursor-pointer hover:scale-110 transition-transform" />
                  <Linkedin size={18} className="cursor-pointer hover:scale-110 transition-transform" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BlogPost;
