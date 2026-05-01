import React from 'react';
import { Link } from 'react-router-dom';
import { Instagram, Twitter, Linkedin, Github, Mail, MapPin, Phone } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-surface pt-20 pb-10 px-6 border-t border-white/5">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 mb-20">
        <div className="col-span-1 md:col-span-1">
          <Link to="/" className="text-2xl font-display font-bold tracking-tighter mb-6 block">
            <span className="text-brand-blue">FVG</span> GRAPHICS
          </Link>
          <p className="text-white/60 text-sm leading-relaxed mb-8">
            Elevating brands through strategic design and premium visual storytelling by Nyiko MJ.
          </p>
          <div className="flex gap-4">
            {[Instagram, Twitter, Linkedin, Github].map((Icon, i) => (
              <a
                key={i}
                href="#"
                className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-brand-blue transition-colors group"
              >
                <Icon size={18} className="text-white/60 group-hover:text-white" />
              </a>
            ))}
          </div>
        </div>

        <div>
          <h4 className="font-display font-bold text-sm uppercase tracking-widest mb-8">Quick Links</h4>
          <ul className="space-y-4">
            {['Home', 'Services', 'Portfolio', 'About', 'Contact'].map((item) => (
              <li key={item}>
                <Link
                  to={item === 'Home' ? '/' : `/${item.toLowerCase()}`}
                  className="text-white/60 hover:text-brand-blue transition-colors text-sm"
                >
                  {item}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="font-display font-bold text-sm uppercase tracking-widest mb-8">Services</h4>
          <ul className="space-y-4">
            {['Logo Design', 'Branding Kits', 'Social Media', 'Album Covers', 'Posters'].map((item) => (
              <li key={item}>
                <Link to="/services" className="text-white/60 hover:text-brand-blue transition-colors text-sm">
                  {item}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="font-display font-bold text-sm uppercase tracking-widest mb-8">Contact Info</h4>
          <ul className="space-y-4">
            <li className="flex items-start gap-3 text-sm text-white/60">
              <Mail size={18} className="text-brand-blue shrink-0" />
              info@featurevisuals.co.za
            </li>
            <li className="flex items-start gap-3 text-sm text-white/60">
              <Phone size={18} className="text-brand-blue shrink-0" />
              061 458 8389
            </li>
            <li className="flex items-start gap-3 text-sm text-white/60">
              <MapPin size={18} className="text-brand-blue shrink-0" />
              South Africa
            </li>
          </ul>
        </div>
      </div>

      <div className="max-w-7xl mx-auto pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
        <p className="text-white/40 text-xs italic">
          © {new Date().getFullYear()} Feature Visual Graphics. All rights reserved.
        </p>
        <div className="flex gap-8 text-xs text-white/40">
          <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
          <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
        </div>
      </div>
    </footer>
  );
}
