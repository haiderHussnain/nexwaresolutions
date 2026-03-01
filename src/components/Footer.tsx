import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Facebook, Linkedin, Twitter, Instagram, Send } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-footer text-primary-foreground">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Company */}
          <div>
            <h3 className="font-display text-xl font-bold mb-4">Nexware Solutions</h3>
            <p className="text-primary-foreground/70 text-sm leading-relaxed mb-6">
              We are a premium software agency delivering world-class web, mobile, and digital solutions to businesses across the globe. Your vision, our expertise.
            </p>
            <div className="flex gap-3">
              {[Facebook, Linkedin, Twitter, Instagram].map((Icon, i) => (
                <a key={i} href="#" className="w-9 h-9 rounded-lg bg-primary-foreground/10 flex items-center justify-center hover:bg-secondary hover:text-secondary-foreground transition-colors">
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display text-lg font-semibold mb-4">Quick Links</h4>
            <div className="flex flex-col gap-2.5">
              {[
                { label: 'Home', to: '/' },
                { label: 'About Us', to: '/about' },
                { label: 'Our Services', to: '/services' },
                { label: 'Our Portfolio', to: '/portfolio' },
                { label: 'Contact', to: '/contact' },
              ].map((link) => (
                <Link
                  key={link.label}
                  to={link.to}
                  className="text-sm text-primary-foreground/70 hover:text-secondary transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display text-lg font-semibold mb-4">Contact Info</h4>
            <div className="flex flex-col gap-3">
              <a href="tel:+92 314 8989825" className="flex items-center gap-2.5 text-sm text-primary-foreground/70 hover:text-secondary transition-colors">
                <Phone size={15} /> +92 314 8989825
              </a>
              <a href="mailto:solutionsnexware@gmail.com" className="flex items-center gap-2.5 text-sm text-primary-foreground/70 hover:text-secondary transition-colors">
                <Mail size={15} /> solutionsnexware@gmail.com
              </a>
              <span className="flex items-center gap-2.5 text-sm text-primary-foreground/70">
                <MapPin size={15} /> Pia Road Johar Town Lahore
              </span>
            </div>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="font-display text-lg font-semibold mb-4">Newsletter</h4>
            <p className="text-sm text-primary-foreground/70 mb-4">Stay updated with our latest news and insights.</p>
            <form className="flex gap-0" onSubmit={(e) => e.preventDefault()}>
              <input
                type="email"
                placeholder="Your email"
                className="flex-1 px-4 py-2.5 rounded-l-xl bg-primary-foreground/10 text-sm text-primary-foreground placeholder:text-primary-foreground/40 border-0 outline-none focus:ring-1 focus:ring-secondary"
              />
              <button className="gradient-gold px-4 py-2.5 rounded-r-xl text-secondary-foreground hover:opacity-90 transition-opacity">
                <Send size={16} />
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Bottom Strip */}
      <div className="border-t border-primary-foreground/10">
        <div className="container mx-auto px-4 py-4 flex flex-col sm:flex-row justify-between items-center gap-2 text-xs text-primary-foreground/50">
          <span>© 2026 Nexware Solutions. All rights reserved.</span>
          <div className="flex gap-4">
            <a href="#" className="hover:text-secondary transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-secondary transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
