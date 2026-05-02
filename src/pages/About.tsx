import React from 'react';
import { motion } from 'motion/react';
import { Target, Zap, Heart, Shield, ArrowRight } from 'lucide-react';
import { AnimatedSection } from '@/src/components/AnimatedSection';
import { Link } from 'react-router-dom';

export default function About() {
  return (
    <div className="pt-32 pb-20">
      {/* Hero */}
      <section className="px-6 mb-32">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <AnimatedSection direction="right">
            <p className="text-brand-blue font-bold tracking-[.3em] uppercase text-xs mb-4 text-center lg:text-left">The Mission</p>
            <h1 className="text-5xl md:text-8xl font-display font-bold mb-10 text-center lg:text-left leading-tight">
              High-End Design. <span className="text-white/20">No Ego.</span> Just Results.
            </h1>
            <p className="text-white/60 text-xl leading-relaxed mb-8 text-center lg:text-left">
              I’m a passionate designer focused on helping creators and small businesses stand out with powerful visuals. I don’t just design—I build visual identities that make people remember your brand.
            </p>
            <div className="flex justify-center lg:justify-start">
               <Link to="/contact" className="bg-brand-blue text-white px-10 py-5 rounded-full font-bold flex items-center gap-3 transition-all hover:scale-105">
                 Work With Me
                 <ArrowRight size={20} />
               </Link>
            </div>
          </AnimatedSection>
          
          <AnimatedSection direction="left" className="relative">
            <div className="aspect-[4/5] rounded-[40px] overflow-hidden border border-white/10 shadow-2xl relative">
              <img 
                src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=80&w=800" 
                alt="Nyiko MJ" 
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover grayscale brightness-75 hover:grayscale-0 hover:brightness-100 transition-all duration-700" 
              />
              <div className="absolute inset-x-0 bottom-0 p-8 bg-gradient-to-t from-matte-black via-matte-black/40 to-transparent">
                 <p className="text-2xl font-display font-bold">Nyiko MJ</p>
                 <p className="text-brand-blue font-bold tracking-widest text-xs uppercase italic">Principal Designer</p>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Philosophy */}
      <section className="py-32 px-6 bg-surface">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-32">
             <AnimatedSection direction="right">
               <h2 className="text-4xl md:text-6xl font-display font-bold mb-10">Minimalist Boldness.</h2>
               <p className="text-white/60 text-lg leading-relaxed mb-8">
                 My design philosophy is simple: remove the noise, focus on impact. In a world of digital clutter, the brands that win are those that speak clearly and boldly. 
               </p>
               <p className="text-white/60 text-lg leading-relaxed mb-8">
                 I give independent creators and small businesses agency-level design power without the corporate ego or the inflated price tag.
               </p>
               <div className="grid grid-cols-2 gap-8 pt-10 border-t border-white/5">
                 <div>
                   <p className="text-4xl font-display font-bold text-brand-blue mb-2">08+</p>
                   <p className="text-white/40 text-xs font-bold uppercase tracking-widest">Years Experience</p>
                 </div>
                 <div>
                   <p className="text-4xl font-display font-bold text-brand-blue mb-2">500+</p>
                   <p className="text-white/40 text-xs font-bold uppercase tracking-widest">Assets Delivered</p>
                 </div>
               </div>
             </AnimatedSection>

             <div className="grid grid-cols-1 gap-8">
               {[
                 { title: 'The Goal', text: 'To give independent creators the visual authority they deserve.', icon: Target },
                 { title: 'The Style', text: 'Clean. Modern. Aggressive. Optimized for digital screens.', icon: Zap },
                 { title: 'The Approach', text: 'Collaborative and transparent. You are part of the process.', icon: Heart },
                 { title: 'The Promise', text: 'No missed deadlines. No generic templates. 100% custom.', icon: Shield },
               ].map((item, i) => (
                 <AnimatedSection key={item.title} delay={i * 0.1} className="p-8 glass rounded-3xl flex gap-6 items-start">
                   <div className="w-12 h-12 bg-brand-blue/20 rounded-xl flex items-center justify-center shrink-0 text-brand-blue">
                     <item.icon size={24} />
                   </div>
                   <div>
                     <h4 className="text-xl font-display text-white font-bold mb-2 uppercase">{item.title}</h4>
                     <p className="text-white/40 leading-relaxed text-sm">{item.text}</p>
                   </div>
                 </AnimatedSection>
               ))}
             </div>
          </div>
        </div>
      </section>

      {/* Workspace */}
      <section className="py-32 px-6">
        <div className="max-w-7xl mx-auto rounded-[40px] overflow-hidden aspect-[21/9] relative border border-white/10 group">
          <img 
            src="https://images.unsplash.com/photo-1497215841178-01289196b02a?auto=format&fit=crop&q=80&w=1600" 
            alt="Workspace" 
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover grayscale transition-all duration-700 group-hover:scale-105 group-hover:grayscale-0"
          />
          <div className="absolute inset-0 bg-matte-black/40 flex items-center justify-center">
            <div className="text-center p-6 glass rounded-full px-12 py-6 border-white/20 whitespace-nowrap overflow-hidden">
               <p className="text-white font-display font-bold uppercase tracking-[.4em] text-sm animate-pulse">Creative Engine Room</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
