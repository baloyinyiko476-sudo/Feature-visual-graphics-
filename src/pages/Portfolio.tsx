import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { MousePointer2, Plus, X } from 'lucide-react';
import { AnimatedSection } from '@/src/components/AnimatedSection';
import { cn } from '@/src/lib/utils';

const categories = ['All', 'Logos', 'Branding', 'Social Media', 'Music'];

const projects = [
  { id: 1, title: 'Techno Pulse', cat: 'Music', img: 'https://images.unsplash.com/photo-1614613535308-eb5fbd3d2c17?auto=format&fit=crop&q=80&w=800', desc: 'Futuristic album cover design for electronic music artist Pulse, focusing on high-contrast neon elements.' },
  { id: 2, title: 'Vanguard Realty', cat: 'Branding', img: 'https://images.unsplash.com/photo-1634942537034-2531766767d1?auto=format&fit=crop&q=80&w=800', desc: 'Minimalist luxury branding for a high-end real estate agency in Los Angeles.' },
  { id: 3, title: 'Streamflow App', cat: 'Social Media', img: 'https://images.unsplash.com/photo-1611162616475-46b635cb6868?auto=format&fit=crop&q=80&w=800', desc: 'Modern social media campaign for a productivity software launch.' },
  { id: 4, title: 'Nocturnal Goods', cat: 'Branding', img: 'https://images.unsplash.com/photo-1554629947-334ff61d85dc?auto=format&fit=crop&q=80&w=800', desc: 'Dark-themed identity for a boutique lifestyle brand focusing on minimalist aesthetics.' },
  { id: 5, title: 'Lumiere Studios', cat: 'Logos', img: 'https://images.unsplash.com/photo-1572044162444-ad60f128bde2?auto=format&fit=crop&q=80&w=800', desc: 'Versatile logo design for a film production house specializing in independent storytelling.' },
  { id: 6, title: 'Urban Rhythm', cat: 'Music', img: 'https://images.unsplash.com/photo-1514525253344-f81ced00c021?auto=format&fit=crop&q=80&w=800', desc: 'Vibrant cover art for an urban hip-hop project, blending street art vibes with clean typography.' },
  { id: 7, title: 'HealthSync', cat: 'Logos', img: 'https://images.unsplash.com/photo-1620336655055-088d06e36bf0?auto=format&fit=crop&q=80&w=800', desc: 'Medical-tech logo emphasizing trust, connection, and modern wellness.' },
  { id: 8, title: 'Coffee & Code', cat: 'Social Media', img: 'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=800', desc: 'Community building graphics for a developer-focused cafe experience.' },
];

export default function Portfolio() {
  const [activeTab, setActiveTab] = useState('All');
  const [selectedProject, setSelectedProject] = useState(null);

  const filteredProjects = activeTab === 'All' 
    ? projects 
    : projects.filter(p => p.cat === activeTab);

  return (
    <div className="pt-32 pb-20">
      {/* Header */}
      <section className="px-6 mb-20 text-center">
        <AnimatedSection>
          <p className="text-brand-blue font-bold tracking-[.3em] uppercase text-xs mb-4">Curated Collection</p>
          <h1 className="text-6xl md:text-9xl font-display font-bold mb-10">Portfolio</h1>
          
          <div className="flex flex-wrap justify-center gap-4 mb-16">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveTab(cat)}
                className={cn(
                  "px-8 py-3 rounded-full text-sm font-bold tracking-widest uppercase transition-all border",
                  activeTab === cat 
                    ? "bg-white text-black border-white shadow-xl shadow-white/10" 
                    : "bg-transparent text-white/40 border-white/10 hover:border-white/40"
                )}
              >
                {cat}
              </button>
            ))}
          </div>
        </AnimatedSection>
      </section>

      {/* Grid */}
      <section className="px-6 min-h-[600px]">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            layout
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            <AnimatePresence mode='popLayout'>
              {filteredProjects.map((project) => (
                <motion.div
                  key={project.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.5 }}
                  onClick={() => setSelectedProject(project)}
                  className="group relative aspect-square rounded-[32px] overflow-hidden cursor-pointer"
                >
                  <img 
                    src={project.img} 
                    alt={project.title} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
                  />
                  <div className="absolute inset-0 bg-matte-black/70 opacity-0 group-hover:opacity-100 transition-opacity duration-500 backdrop-blur-sm flex flex-col items-center justify-center p-8 text-center">
                    <p className="text-brand-blue font-bold tracking-widest uppercase text-xs mb-2 italic">{project.cat}</p>
                    <h3 className="text-3xl font-display font-bold mb-4">{project.title}</h3>
                    <div className="w-12 h-12 bg-white text-black rounded-full flex items-center justify-center translate-y-10 group-hover:translate-y-0 transition-transform duration-500">
                      <Plus size={24} />
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-matte-black/95 backdrop-blur-2xl px-6 py-20 overflow-y-auto flex items-center justify-center"
            onClick={() => setSelectedProject(null)}
          >
            <button 
              className="fixed top-10 right-10 text-white/40 hover:text-white transition-colors"
              onClick={() => setSelectedProject(null)}
            >
              <X size={40} />
            </button>

            <motion.div
              initial={{ scale: 0.9, y: 50, opacity: 0 }}
              animate={{ scale: 1, y: 0, opacity: 1 }}
              exit={{ scale: 0.9, y: 50, opacity: 0 }}
              transition={{ type: 'spring', damping: 25, stiffness: 300 }}
              className="max-w-5xl w-full"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div className="relative aspect-square rounded-[40px] overflow-hidden shadow-2xl">
                  <img src={selectedProject.img} alt={selectedProject.title} className="w-full h-full object-cover" />
                </div>
                <div className="space-y-8">
                  <div>
                    <p className="text-brand-blue font-bold tracking-[.3em] uppercase text-sm mb-4 italic">{selectedProject.cat}</p>
                    <h2 className="text-5xl md:text-7xl font-display font-bold leading-tight">{selectedProject.title}</h2>
                  </div>
                  <p className="text-white/60 text-xl leading-relaxed">{selectedProject.desc}</p>
                  <div className="pt-8">
                    <button 
                      onClick={() => setSelectedProject(null)}
                      className="bg-white text-black px-12 py-5 rounded-full text-lg font-bold uppercase tracking-widest hover:bg-brand-blue hover:text-white transition-all shadow-xl"
                    >
                      Close Project
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Final CTA */}
      <section className="py-32 px-6">
        <AnimatedSection className="max-w-4xl mx-auto text-center glass p-20 rounded-[40px] border-white/5">
          <h2 className="text-4xl md:text-6xl font-display font-bold mb-8">Ready to be the next success story?</h2>
          <p className="text-white/40 text-xl mb-12">Let's build a visual identity that takes your brand to the next level.</p>
          <button className="bg-brand-blue text-white px-12 py-5 rounded-full text-xl font-bold transition-all hover:bg-white hover:text-brand-blue flex items-center justify-center gap-4 mx-auto">
            Start My Project
            <MousePointer2 size={24} />
          </button>
        </AnimatedSection>
      </section>
    </div>
  );
}
