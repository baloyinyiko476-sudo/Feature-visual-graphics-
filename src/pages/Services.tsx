import React from 'react';
import { motion } from 'motion/react';
import { 
  Check, 
  ArrowRight, 
  Palette, 
  Smartphone, 
  Music, 
  Zap, 
  Clock, 
  RefreshCcw,
  ShieldCheck
} from 'lucide-react';
import { AnimatedSection } from '@/src/components/AnimatedSection';
import { Link } from 'react-router-dom';
import { cn } from '@/src/lib/utils';

const pricingPackages = [
  {
    name: 'Essential',
    price: '80',
    desc: 'Perfect for quick, professional visual assets like single flyers or social posts.',
    features: ['1 Custom Graphic', '2 Design Revisions', '24h Delivery', 'High-Res Exports'],
    color: 'bg-white/5',
  },
  {
    name: 'Strategic',
    price: '250',
    popular: true,
    desc: 'Comprehensive visual identity for growing brands and artists.',
    features: ['Full Logo Kit', 'Social Media Branding (3 Posts)', '3 Design Revisions', '3 Days Delivery', 'Style Guidelines'],
    color: 'bg-brand-blue',
  },
  {
    name: 'Elite',
    price: '600+',
    desc: 'Full-scale branding and strategic design system for maximum impact.',
    features: ['Premium Branding System', 'Unlimited Revisions', 'Priority Queue', 'Social Media Strategy', 'Full Source Files'],
    color: 'bg-white/5',
  },
];

export default function Services() {
  return (
    <div className="pt-32 pb-20">
      {/* Header */}
      <section className="px-6 mb-32">
        <div className="max-w-7xl mx-auto text-center">
          <AnimatedSection>
            <p className="text-brand-blue font-bold tracking-[.3em] uppercase text-xs mb-4">Strategic Design</p>
            <h1 className="text-5xl md:text-8xl font-display font-bold mb-8">Service Packages</h1>
            <p className="text-white/60 max-w-3xl mx-auto text-xl leading-relaxed">
              Transparent starting rates. Final investment will depend on your specific project complexity and scope.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Main Services */}
      <section className="px-6 mb-40">
        <div className="max-w-7xl mx-auto space-y-32">
          {[
            {
              title: 'Branding Kit',
              price: 'R250',
              icon: Palette,
              features: ['Primary & Secondary Logo', 'Complete Color Palette', 'Typography System', 'Brand Guidelines'],
              img: 'https://images.unsplash.com/photo-1626785774573-4b799315345d?auto=format&fit=crop&q=80&w=800',
              reverse: false
            },
            {
              title: 'Social Media Pack',
              price: 'R150',
              icon: Smartphone,
              features: ['5 Custom Content Posts', '2 Dynamic Story Templates', 'Platform Banner Design', 'High Engagement Layouts'],
              img: 'https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0?auto=format&fit=crop&q=80&w=800',
              reverse: true
            },
            {
              title: 'Cover Art Design',
              price: 'R80',
              icon: Music,
              features: ['Album / Single Cover Art', 'Streaming Platform Formatting', 'Print-Ready CD Artwork', 'Social Media Promo Header'],
              img: 'https://images.unsplash.com/photo-1614613535308-eb5fbd3d2c17?auto=format&fit=crop&q=80&w=800',
              reverse: false
            },
          ].map((service, i) => (
            <AnimatedSection 
              key={service.title} 
              className={`grid grid-cols-1 lg:grid-cols-2 gap-16 items-center ${service.reverse ? 'lg:flex-row-reverse' : ''}`}
            >
              <div className={`space-y-8 ${service.reverse ? 'lg:order-2' : ''}`}>
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-14 h-14 bg-brand-blue rounded-2xl flex items-center justify-center shadow-xl shadow-brand-blue/30">
                    <service.icon size={28} className="text-white" />
                  </div>
                  <div>
                    <p className="text-white/40 text-xs font-bold uppercase tracking-widest">Starting Price</p>
                    <p className="text-3xl font-display font-bold text-brand-blue">{service.price}</p>
                  </div>
                </div>
                <h2 className="text-4xl md:text-6xl font-display font-bold">{service.title}</h2>
                <div className="space-y-4">
                  {service.features.map(f => (
                    <div key={f} className="flex gap-3 items-center text-white/70">
                      <Check size={18} className="text-brand-blue shrink-0" />
                      <span className="text-lg">{f}</span>
                    </div>
                  ))}
                </div>
                <Link
                  to="/contact"
                  className="inline-flex bg-white text-black hover:bg-brand-blue hover:text-white px-10 py-5 rounded-full text-lg font-bold transition-all items-center gap-4 mt-4"
                >
                  Order Now
                  <ArrowRight size={20} />
                </Link>
              </div>
              <div className={`relative aspect-[4/3] rounded-[40px] overflow-hidden border border-white/5 shadow-2xl ${service.reverse ? 'lg:order-1' : ''}`}>
                <img src={service.img} alt={service.title} referrerPolicy="no-referrer" className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700 hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-tr from-brand-blue/10 to-transparent" />
              </div>
            </AnimatedSection>
          ))}
        </div>
      </section>

      {/* Pricing Table */}
      <section className="px-6 py-32 bg-surface">
        <div className="max-w-7xl mx-auto">
          <AnimatedSection className="text-center mb-20">
            <h2 className="text-4xl md:text-7xl font-display font-bold mb-6">Choose Your Package</h2>
            <p className="text-white/60 text-lg max-w-2xl mx-auto italic mb-4">Scale your project based on your current needs.</p>
            <div className="inline-block bg-brand-blue/10 border border-brand-blue/20 rounded-full px-6 py-2">
              <p className="text-brand-blue text-sm font-bold uppercase tracking-widest">Final price varies based on custom requirements</p>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricingPackages.map((pkg, i) => (
              <AnimatedSection 
                key={pkg.name} 
                delay={i * 0.1}
                className={cn(
                  "p-8 md:p-12 rounded-[40px] flex flex-col border border-white/5",
                  pkg.color,
                  pkg.popular ? "relative shadow-2xl shadow-brand-blue/20" : ""
                )}
              >
                {pkg.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-white text-brand-blue px-6 py-1.5 rounded-full text-xs font-black uppercase tracking-[.2em] shadow-xl">
                    Most Popular
                  </div>
                )}
                <div className="mb-10">
                  <h3 className="text-2xl font-display font-bold mb-2">{pkg.name}</h3>
                  <div className="flex items-baseline gap-1 mb-6">
                    <span className="text-5xl font-display font-bold">R{pkg.price}</span>
                    {pkg.name !== 'Elite' && <span className="text-white/40 text-sm">/starting</span>}
                  </div>
                  <p className="text-white/60 text-sm leading-relaxed min-h-[48px]">{pkg.desc}</p>
                </div>

                <div className="space-y-6 mb-12 flex-grow">
                  {pkg.features.map(f => (
                    <div key={f} className="flex gap-3 items-start text-sm">
                      <Check size={18} className={cn("shrink-0 mt-0.5", pkg.popular ? "text-white" : "text-brand-blue")} />
                      <span className={pkg.popular ? "text-white/90" : "text-white/70"}>{f}</span>
                    </div>
                  ))}
                </div>

                <Link
                  to="/contact"
                  className={cn(
                    "w-full py-5 rounded-full font-bold text-center transition-all",
                    pkg.popular ? "bg-white text-brand-blue hover:bg-black hover:text-white" : "bg-white/5 border border-white/10 hover:bg-white/10"
                  )}
                >
                  Get Started
                </Link>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Trust Blocks */}
      <section className="px-6 py-32">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
           {[
             { title: 'Fixed Rates', icon: Zap, text: 'No surprises. What you see is what you pay.' },
             { title: 'Secure IP', icon: ShieldCheck, text: 'You own 100% of the copyright for all designs.' },
             { title: 'Global Files', icon: RefreshCcw, text: 'Standard exports + source files included.' },
             { title: 'Pro Support', icon: Clock, text: 'Direct communication with the designer.' },
           ].map((v, i) => (
             <AnimatedSection key={v.title} delay={i * 0.1} className="p-8 glass rounded-3xl text-center">
               <div className="w-12 h-12 bg-white/5 rounded-xl flex items-center justify-center mx-auto mb-6 text-brand-blue">
                 <v.icon size={24} />
               </div>
               <h4 className="font-bold mb-2 uppercase text-xs tracking-widest">{v.title}</h4>
               <p className="text-white/40 text-xs leading-relaxed">{v.text}</p>
             </AnimatedSection>
           ))}
        </div>
      </section>
    </div>
  );
}
