import React, { useState } from 'react';
import { motion } from 'motion/react';
import { 
  Send, 
  MessageCircle, 
  CheckCircle2, 
  ArrowRight, 
  Mail, 
  MapPin, 
  Globe 
} from 'lucide-react';
import { AnimatedSection } from '@/src/components/AnimatedSection';
import { cn } from '@/src/lib/utils';

export default function Contact() {
  const [formState, setFormState] = useState<'idle' | 'submitting' | 'success'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormState('submitting');
    setTimeout(() => {
      setFormState('success');
    }, 2000);
  };

  return (
    <div className="pt-32 pb-20">
      <section className="px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
             <AnimatedSection direction="right">
                <p className="text-brand-blue font-bold tracking-[.3em] uppercase text-xs mb-4">Let's Talk</p>
                <h1 className="text-5xl md:text-8xl font-display font-bold mb-10 leading-tight">
                  The first step toward a legendary brand <span className="text-brand-blue">starts here.</span>
                </h1>
                <p className="text-white/40 text-xl leading-relaxed mb-12">
                  Tell me your idea, I’ll respond within 24 hours. No strings attached — just a direct conversation about your vision.
                </p>
                
                <div className="space-y-8">
                  <div className="flex gap-6 items-center p-6 glass rounded-2xl border-white/5">
                    <div className="w-12 h-12 bg-brand-blue rounded-xl flex items-center justify-center shrink-0">
                      <Mail size={24} />
                    </div>
                    <div>
                      <p className="text-xs font-bold uppercase tracking-widest text-white/40">Email Me</p>
                      <p className="text-lg font-bold">info@featurevisuals.co.za</p>
                    </div>
                  </div>
                  <div className="flex gap-6 items-center p-6 glass rounded-2xl border-white/5">
                    <div className="w-12 h-12 bg-[#25D366] rounded-xl flex items-center justify-center shrink-0">
                      <MessageCircle size={24} />
                    </div>
                    <div>
                      <p className="text-xs font-bold uppercase tracking-widest text-white/40">Message Me</p>
                      <p className="text-lg font-bold">061 458 8389</p>
                    </div>
                  </div>
                </div>
             </AnimatedSection>

             <AnimatedSection direction="left" className="relative">
                <div className="absolute inset-0 bg-brand-blue/5 rounded-[40px] blur-3xl" />
                <div className="relative glass p-8 md:p-12 rounded-[40px] border-white/10 shadow-2xl overflow-hidden">
                  {formState === 'success' ? (
                    <motion.div 
                      initial={{ scale: 0.9, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      className="h-full flex flex-col items-center justify-center text-center py-20"
                    >
                      <div className="w-24 h-24 bg-brand-blue rounded-full flex items-center justify-center mb-8 shadow-2xl shadow-brand-blue/30">
                        <CheckCircle2 size={48} className="text-white" />
                      </div>
                      <h2 className="text-4xl font-display font-bold mb-4">Inquiry Received!</h2>
                      <p className="text-white/60 text-lg leading-relaxed mb-10">
                        Thanks for reaching out! I'll review your details and get back to you within 24 hours.
                      </p>
                      <button 
                        onClick={() => setFormState('idle')}
                        className="bg-white text-black px-10 py-4 rounded-full font-bold uppercase tracking-widest text-sm hover:bg-brand-blue hover:text-white transition-all shadow-xl"
                      >
                        Send Another message
                      </button>
                    </motion.div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-8">
                       <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                          <div className="space-y-3">
                            <label className="text-xs font-bold uppercase tracking-widest text-white/40 ml-1">Full Name</label>
                            <input 
                              required
                              type="text" 
                              placeholder="John Doe" 
                              className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 focus:border-brand-blue outline-none transition-colors text-white placeholder:text-white/20"
                            />
                          </div>
                          <div className="space-y-3">
                            <label className="text-xs font-bold uppercase tracking-widest text-white/40 ml-1">Email or WhatsApp</label>
                            <input 
                              required
                              type="text" 
                              placeholder="hello@example.com" 
                              className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 focus:border-brand-blue outline-none transition-colors text-white placeholder:text-white/20"
                            />
                          </div>
                       </div>

                       <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                          <div className="space-y-3">
                            <label className="text-xs font-bold uppercase tracking-widest text-white/40 ml-1">Project Type</label>
                            <select className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 focus:border-brand-blue outline-none transition-colors text-white appearance-none cursor-pointer">
                               <option className="bg-matte-black">Logo Design</option>
                               <option className="bg-matte-black">Full Branding Kit</option>
                               <option className="bg-matte-black">Social Media Graphics</option>
                               <option className="bg-matte-black">Album / Cover Art</option>
                               <option className="bg-matte-black">Other Premium Service</option>
                            </select>
                          </div>
                          <div className="space-y-3">
                            <label className="text-xs font-bold uppercase tracking-widest text-white/40 ml-1">Budget Range</label>
                            <select className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 focus:border-brand-blue outline-none transition-colors text-white appearance-none cursor-pointer">
                               <option className="bg-matte-black">$150 - $400</option>
                               <option className="bg-matte-black">$400 - $1,000</option>
                               <option className="bg-matte-black">$1,000 - $3,000</option>
                               <option className="bg-matte-black">$3,000+</option>
                            </select>
                          </div>
                       </div>

                       <div className="space-y-3">
                          <label className="text-xs font-bold uppercase tracking-widest text-white/40 ml-1">Your Vision</label>
                          <textarea 
                            required
                            rows={5}
                            placeholder="Tell me about your project, goals, and any inspiration..." 
                            className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 focus:border-brand-blue outline-none transition-colors text-white placeholder:text-white/20 resize-none"
                          />
                       </div>

                       <div className="flex flex-col sm:flex-row gap-6 pt-4">
                          <button 
                            type="submit"
                            disabled={formState === 'submitting'}
                            className="flex-1 bg-brand-blue text-white px-10 py-5 rounded-full font-bold text-lg flex items-center justify-center gap-3 hover:opacity-90 transition-all shadow-xl shadow-brand-blue/20 disabled:opacity-50 group"
                          >
                            {formState === 'submitting' ? 'Processing...' : 'Launch My Project'}
                            <Send size={20} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                          </button>
                          <a 
                            href="https://wa.me/27614588389"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-white/5 hover:bg-white/10 border border-white/10 px-10 py-5 rounded-full font-bold text-lg flex items-center justify-center gap-3 transition-all"
                          >
                            <MessageCircle size={20} />
                            WhatsApp
                          </a>
                       </div>
                    </form>
                  )}
                </div>
             </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Global Presence */}
      <section className="py-32 px-6">
        <div className="max-w-7xl mx-auto rounded-[40px] border border-white/5 p-12 bg-surface grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              { title: 'Global Coverage', desc: 'Working with clients from LA to Tokyo.', icon: Globe },
              { title: 'Remote First', desc: 'Seamless collaboration via Slack and Zoom.', icon: MapPin },
              { title: 'Always Ready', desc: 'Time-zone flexible for urgent requests.', icon: CheckCircle2 },
            ].map((item, i) => (
              <AnimatedSection key={item.title} delay={i * 0.1} className="flex gap-6 items-center">
                 <div className="w-12 h-12 rounded-full border border-brand-blue/30 flex items-center justify-center shrink-0">
                    <item.icon size={20} className="text-brand-blue" />
                 </div>
                 <div>
                    <h4 className="font-bold text-lg uppercase tracking-widest text-sm">{item.title}</h4>
                    <p className="text-white/40 text-xs">{item.desc}</p>
                 </div>
              </AnimatedSection>
            ))}
        </div>
      </section>
    </div>
  );
}
