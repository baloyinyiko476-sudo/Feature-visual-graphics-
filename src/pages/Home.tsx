import React from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, 
  Star, 
  CheckCircle2, 
  Zap, 
  Target, 
  MousePointer2, 
  Users,
  Palette,
  Briefcase,
  Smartphone,
  Music,
  Layout
} from 'lucide-react';
import { AnimatedSection } from '@/src/components/AnimatedSection';
import { cn } from '@/src/lib/utils';

export default function Home() {
  return (
    <div className="pt-20">
      {/* HERO SECTION */}
      <section className="relative min-height-[90vh] flex items-center px-6 overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full -z-10">
          <div className="absolute top-[10%] right-[5%] w-[400px] h-[400px] bg-brand-blue/20 rounded-full blur-[120px] animate-pulse" />
          <div className="absolute bottom-[20%] left-[5%] w-[300px] h-[300px] bg-white/5 rounded-full blur-[80px]" />
        </div>

        <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <AnimatedSection direction="right">
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-display font-bold leading-[0.9] mb-8">
              Designs that make your brand <span className="text-brand-blue">impossible</span> to ignore.
            </h1>
            <p className="text-lg md:text-xl text-white/60 mb-12 max-w-xl leading-relaxed">
              Helping small businesses, artists, and creators dominate their niche with premium visuals and strategic branding.
            </p>
            <div className="flex flex-col sm:flex-row gap-6">
              <Link
                to="/contact"
                className="bg-brand-blue hover:opacity-90 text-white px-10 py-5 rounded-full text-lg font-bold transition-all flex items-center justify-center gap-3 shadow-xl shadow-brand-blue/20 group"
              >
                Work With Me
                <ArrowRight className="group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/portfolio"
                className="bg-white/5 hover:bg-white/10 text-white px-10 py-5 rounded-full text-lg font-bold border border-white/10 transition-all flex items-center justify-center gap-3"
              >
                View Portfolio
              </Link>
            </div>
          </AnimatedSection>

          <AnimatedSection direction="left" className="relative">
            <div className="relative aspect-square w-full max-w-[600px] mx-auto">
              <div className="absolute inset-0 bg-gradient-to-tr from-brand-blue/20 to-transparent rounded-3xl -rotate-6 scale-95" />
              <img
                src="https://images.unsplash.com/photo-1635336064045-142ee2600644?auto=format&fit=crop&q=80&w=1000"
                alt="Premium Design Mockup"
                referrerPolicy="no-referrer"
                className="rounded-3xl shadow-2xl relative z-10 w-full h-full object-cover border border-white/10"
              />
              {/* Floating elements */}
              <motion.div
                animate={{ y: [0, -20, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -top-10 -right-10 glass p-6 rounded-2xl hidden md:block z-20 shadow-2xl"
              >
                <div className="flex gap-2 mb-2">
                  {[1, 2, 3, 4, 5].map((i) => <Star key={i} size={14} className="fill-brand-blue text-brand-blue" />)}
                </div>
                <p className="text-xs font-bold uppercase tracking-widest text-white/60">5-Star Rated Service</p>
              </motion.div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* TRUST BAR */}
      <section className="py-20 px-6 bg-surface">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-12 text-center md:text-left">
          <div className="max-w-xs">
            <p className="text-xs uppercase tracking-[0.3em] text-white/40 mb-2 font-bold">The Statistics</p>
            <h2 className="text-2xl font-display font-bold">Trusted by 85+ creators and businesses</h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-8 md:gap-16 w-full md:w-auto">
            <div className="flex flex-col gap-1 items-center md:items-start text-center md:text-left">
              <span className="text-4xl font-display font-bold text-brand-blue">150+</span>
              <span className="text-xs uppercase tracking-widest text-white/40 font-bold">Projects Completed</span>
            </div>
            <div className="flex flex-col gap-1 items-center md:items-start text-center md:text-left">
              <span className="text-4xl font-display font-bold text-brand-blue">85+</span>
              <span className="text-xs uppercase tracking-widest text-white/40 font-bold">Happy Clients</span>
            </div>
            <div className="flex flex-col gap-1 items-center md:items-start text-center md:text-left col-span-2 md:col-span-1">
              <span className="text-4xl font-display font-bold text-brand-blue">5.0</span>
              <span className="text-xs uppercase tracking-widest text-white/40 font-bold">Avg. Client Rating</span>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES PREVIEW */}
      <section className="py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <AnimatedSection className="text-center mb-20">
            <p className="text-brand-blue font-bold tracking-[.3em] uppercase text-xs mb-4">What I Do</p>
            <h2 className="text-4xl md:text-6xl font-display font-bold mb-6">Premium Design Solutions</h2>
            <p className="text-white/60 max-w-2xl mx-auto text-lg leading-relaxed">
              Every pixel is purposeful. I combine creative intuition with strategic design to help you stand out.
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {[
              { title: 'Logo Design', desc: 'Timeless logos that define your identity', icon: Palette, img: 'https://images.unsplash.com/photo-1541462608141-ad4d4f9d3f02?auto=format&fit=crop&q=80&w=400' },
              { title: 'Branding Kits', desc: 'Full visual identity systems', icon: Briefcase, img: 'https://images.unsplash.com/photo-1611162617263-4ec3060a058e?auto=format&fit=crop&q=80&w=400' },
              { title: 'Social Media', desc: 'Scroll-stopping content designs', icon: Smartphone, img: 'https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0?auto=format&fit=crop&q=80&w=400' },
              { title: 'Cover Art', desc: 'Unique visuals for music releases', icon: Music, img: 'https://images.unsplash.com/photo-1614613535308-eb5fbd3d2c17?auto=format&fit=crop&q=80&w=400' },
              { title: 'Posters', desc: 'Bold promotional designs', icon: Layout, img: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?auto=format&fit=crop&q=80&w=400' },
            ].map((service, i) => (
              <AnimatedSection 
                key={service.title} 
                delay={i * 0.1}
                className="group relative h-[450px] rounded-3xl overflow-hidden border border-white/5"
              >
                <div className="absolute inset-0 z-0">
                  <img src={service.img} alt={service.title} referrerPolicy="no-referrer" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                  <div className="absolute inset-0 bg-gradient-to-t from-matte-black via-matte-black/60 to-transparent" />
                </div>
                <div className="relative z-10 h-full p-8 flex flex-col justify-end">
                  <div className="mb-4 w-12 h-12 bg-brand-blue rounded-xl flex items-center justify-center shadow-lg shadow-brand-blue/30 group-hover:scale-110 transition-transform">
                    <service.icon size={24} className="text-white" />
                  </div>
                  <h3 className="text-xl font-display font-bold mb-2 group-hover:text-brand-blue transition-colors line-clamp-1">{service.title}</h3>
                  <p className="text-white/60 text-sm mb-6 leading-relaxed">{service.desc}</p>
                  <Link to="/services" className="text-white text-xs font-bold uppercase tracking-widest flex items-center gap-2 group/btn">
                    <span>Learn More</span>
                    <ArrowRight size={14} className="group-hover/btn:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* PORTFOLIO PREVIEW */}
      <section className="py-32 px-6 bg-surface relative overflow-hidden">
        <div className="absolute top-[20%] left-[-10%] w-[500px] h-[500px] bg-white/5 rounded-full blur-[120px]" />
        
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end gap-12 mb-20">
            <AnimatedSection direction="right" className="max-w-2xl">
              <p className="text-brand-blue font-bold tracking-[.3em] uppercase text-xs mb-4">Curated Work</p>
              <h2 className="text-5xl md:text-7xl font-display font-bold">Making digital brands legendary.</h2>
            </AnimatedSection>
            <AnimatedSection direction="left">
              <Link to="/portfolio" className="bg-white text-black px-10 py-5 rounded-full text-lg font-bold transition-all hover:bg-brand-blue hover:text-white flex items-center justify-center gap-3">
                View Full Portfolio
              </Link>
            </AnimatedSection>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              { title: 'Hustle Ya Kasi', cat: 'Music Cover', img: 'https://images.unsplash.com/photo-1635336064045-142ee2600644?auto=format&fit=crop&q=80&w=800' },
              { title: 'A Re Bineng', cat: 'EP Design', img: 'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&q=80&w=800' },
              { title: 'Ke Zamile', cat: 'Music Art', img: 'https://images.unsplash.com/photo-1590059009591-62056faec381?auto=format&fit=crop&q=80&w=800' },
              { title: 'DJ Star Booking', cat: 'Flyer Template', img: 'https://images.unsplash.com/photo-1574672280600-4accfa5b6f98?auto=format&fit=crop&q=80&w=800' },
            ].map((project, i) => (
              <AnimatedSection 
                key={project.title} 
                delay={i * 0.15}
                className="group relative aspect-[4/3] rounded-3xl overflow-hidden cursor-pointer"
              >
                <img src={project.img} alt={project.title} referrerPolicy="no-referrer" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                <div className="absolute inset-0 bg-matte-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col items-center justify-center">
                   <div className="p-8 text-center translate-y-10 group-hover:translate-y-0 transition-transform duration-500">
                      <p className="text-brand-blue font-bold tracking-widest uppercase text-xs mb-2 italic">{project.cat}</p>
                      <h3 className="text-3xl font-display font-bold mb-6">{project.title}</h3>
                      <div className="inline-flex items-center gap-2 bg-white text-black px-6 py-3 rounded-full text-sm font-bold uppercase tracking-widest">
                        View Project
                        <MousePointer2 size={16} />
                      </div>
                   </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* WHY CHOOSE ME */}
      <section className="py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
             <AnimatedSection direction="right">
                <p className="text-brand-blue font-bold tracking-[.3em] uppercase text-xs mb-4">Strategic Choice</p>
                <h2 className="text-4xl md:text-6xl font-display font-bold mb-10 leading-tight">Why brands choose my creative vision.</h2>
                <div className="space-y-10">
                  {[
                    { title: 'Fast Delivery', desc: 'Initial concepts in 48–72 hours. Your projects never wait.', icon: Zap },
                    { title: 'Strategic Design', desc: 'Built to attract and convert. Design that drives real ROI.', icon: Target },
                    { title: 'Affordable Pricing', desc: 'Premium quality without agency overhead. Fair and transparent.', icon: Briefcase },
                    { title: 'Client-Focused', desc: 'Revisions until 100% satisfaction. I am not done until you love it.', icon: CheckCircle2 },
                  ].map((value) => (
                    <div key={value.title} className="flex gap-6">
                      <div className="w-14 h-14 bg-surface rounded-2xl flex items-center justify-center shrink-0 border border-white/5">
                        <value.icon className="text-brand-blue" size={28} />
                      </div>
                      <div>
                        <h4 className="text-xl font-display font-bold mb-2">{value.title}</h4>
                        <p className="text-white/60 leading-relaxed">{value.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
             </AnimatedSection>

             <AnimatedSection direction="left" className="relative group">
                <div className="absolute inset-0 bg-brand-blue/5 rounded-[40px] blur-3xl group-hover:bg-brand-blue/10 transition-colors" />
                <div className="relative glass p-10 rounded-[40px] border-white/5 shadow-2xl overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1558655146-d09347e92766?auto=format&fit=crop&q=80&w=800" 
                    referrerPolicy="no-referrer"
                    className="w-full rounded-2xl shadow-xl grayscale hover:grayscale-0 transition-all duration-700" 
                    alt="Creative Workspace"
                  />
                  <div className="mt-12 flex items-center gap-6">
                    <div className="w-20 h-20 rounded-full bg-brand-blue/20 flex items-center justify-center">
                      <Users size={32} className="text-brand-blue" />
                    </div>
                    <div>
                      <p className="text-4xl font-display font-bold">120K+</p>
                      <p className="text-white/40 text-sm font-bold uppercase tracking-widest">Global Reach Potential</p>
                    </div>
                  </div>
                </div>
             </AnimatedSection>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="py-32 px-6 bg-surface">
        <div className="max-w-7xl mx-auto">
          <AnimatedSection className="text-center mb-20">
            <p className="text-brand-blue font-bold tracking-[.3em] uppercase text-xs mb-4">Success Stories</p>
            <h2 className="text-4xl md:text-6xl font-display font-bold mb-6">Client Feedback</h2>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { 
                name: 'Alex Rivera', 
                role: 'Founder, Nocturnal Goods', 
                quote: 'The speed and quality are unmatched. My branding kit was ready in 3 days and exceeded my expectations.',
                img: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=150'
              },
              { 
                name: 'Sarah Chen', 
                role: 'Independent Artist', 
                quote: 'I needed a cover for my first single. Nyiko took my abstract idea and turned it into a masterpiece.',
                img: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=150'
              },
              { 
                name: 'Marcus Thorne', 
                role: 'Streamer & Creator', 
                quote: 'Communication was seamless. Every revision was handled professionally and quickly. High-end results.',
                img: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=150'
              },
            ].map((testimonial, i) => (
              <AnimatedSection 
                key={testimonial.name} 
                delay={i * 0.15}
                className="bg-matte-black p-10 rounded-[32px] border border-white/5 relative group"
              >
                <div className="absolute top-8 right-10 opacity-10 group-hover:opacity-20 transition-opacity">
                  <Star size={60} className="fill-brand-blue text-brand-blue" />
                </div>
                <div className="flex gap-1 mb-8">
                  {[1,2,3,4,5].map(j => <Star key={j} size={16} className="fill-brand-blue text-brand-blue" />)}
                </div>
                <p className="text-white/80 italic text-lg leading-relaxed mb-10 relative z-10">"{testimonial.quote}"</p>
                <div className="flex items-center gap-4">
                  <img src={testimonial.img} alt={testimonial.name} referrerPolicy="no-referrer" className="w-12 h-12 rounded-full border border-brand-blue" />
                  <div>
                    <h4 className="font-bold">{testimonial.name}</h4>
                    <p className="text-xs text-white/40">{testimonial.role}</p>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="py-32 px-6">
        <div className="max-w-5xl mx-auto rounded-[40px] bg-brand-blue p-12 md:p-24 text-center relative overflow-hidden group">
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -mr-32 -mt-32 transition-transform duration-700 group-hover:scale-150" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-black/10 rounded-full blur-3xl -ml-32 -mb-32 transition-transform duration-700 group-hover:scale-150" />
          
          <AnimatedSection className="relative z-10">
            <h2 className="text-4xl md:text-7xl font-display font-bold mb-8 text-white">Ready to level up your brand?</h2>
            <p className="text-white/80 text-xl mb-12 max-w-2xl mx-auto font-medium">
              Join 85+ successful clients who have transformed their visual identity with premium design.
            </p>
            <Link
              to="/contact"
              className="inline-flex bg-white text-brand-blue hover:bg-matte-black hover:text-white px-12 py-5 rounded-full text-xl font-bold transition-all items-center gap-4 shadow-2xl scale-100 hover:scale-105 active:scale-95"
            >
              Start Your Project
              <ArrowRight size={24} />
            </Link>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}
