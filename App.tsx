
import React, { useState, useEffect, useCallback } from 'react';
import { 
  Instagram, 
  Facebook, 
  Phone, 
  MessageSquare, 
  MapPin, 
  Menu, 
  X, 
  ChevronRight, 
  Send,
  Star,
  Sparkles
} from 'lucide-react';
import { NAV_ITEMS, SERVICES, PRODUCTS, PARTNERS } from './constants';
import { getWholesaleAdvice } from './services/gemini';

const App: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [chatInput, setChatInput] = useState('');
  const [chatResponse, setChatResponse] = useState<string | null>(null);
  const [isChatLoading, setIsChatLoading] = useState(false);

  // Robust scrolling function to prevent "white page" navigation issues
  const scrollToSection = useCallback((e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const id = href.replace('#', '');
    const element = document.getElementById(id);
    if (element) {
      const offset = 80; // Height of fixed nav
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
    setIsMenuOpen(false);
  }, []);

  const handleChatSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!chatInput.trim()) return;
    setIsChatLoading(true);
    const advice = await getWholesaleAdvice(chatInput);
    setChatResponse(advice);
    setIsChatLoading(false);
    setChatInput('');
  };

  return (
    <div className="min-h-screen flex flex-col bg-slate-950 text-slate-50">
      {/* Navigation */}
      <nav className="fixed w-full z-50 bg-slate-950/90 backdrop-blur-md border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div 
              className="flex items-center space-x-2 cursor-pointer" 
              onClick={(e) => scrollToSection(e as any, '#home')}
            >
              <div className="w-10 h-10 bg-gradient-to-br from-amber-400 to-amber-600 rounded-full flex items-center justify-center text-white font-bold text-xl shadow-lg shadow-amber-500/20">
                S
              </div>
              <div>
                <span className="text-xl font-bold tracking-tighter text-white font-serif block leading-none">SRI MEENACHI</span>
                <span className="text-xs text-amber-500 uppercase tracking-widest font-semibold">Textiles Wholesale</span>
              </div>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-8">
              {NAV_ITEMS.map((item) => (
                <a 
                  key={item.href} 
                  href={item.href}
                  onClick={(e) => scrollToSection(e, item.href)}
                  className="text-slate-300 hover:text-amber-500 transition-colors font-medium text-sm uppercase tracking-wider relative group"
                >
                  {item.label}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-amber-500 transition-all group-hover:w-full"></span>
                </a>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button 
                onClick={() => setIsMenuOpen(!isMenuOpen)} 
                className="text-slate-300 p-2 focus:outline-none"
                aria-label="Toggle menu"
              >
                {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        <div className={`md:hidden bg-slate-900 border-b border-slate-800 overflow-hidden transition-all duration-300 ${isMenuOpen ? 'max-h-96' : 'max-h-0'}`}>
          <div className="px-4 pt-2 pb-6 space-y-2">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={(e) => scrollToSection(e, item.href)}
                className="block px-3 py-4 text-slate-300 hover:text-amber-500 font-medium border-b border-slate-800 last:border-0"
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative h-screen flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1577401239170-897942555fb3?auto=format&fit=crop&q=80&w=2000" 
            className="w-full h-full object-cover opacity-20 grayscale"
            alt="Textile Background"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/90 to-transparent"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20">
          <div className="max-w-2xl">
            <div className="flex items-center space-x-2 mb-6">
              <span className="h-px w-8 bg-amber-500"></span>
              <span className="text-amber-500 uppercase tracking-[0.3em] font-bold text-sm">20 Years of Trusted Legacy</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-serif font-bold text-white mb-6 leading-tight">
              High-Volume <br /> 
              <span className="text-gold-gradient">Saree Wholesale</span> <br /> 
              at Low Cost.
            </h1>
            <p className="text-xl text-slate-300 mb-10 leading-relaxed">
              Premium sarees and dress materials from Surat, Kanchipuram, and Bangalore. We empower retail businesses across India with quality, transparency, and safe logistics.
            </p>
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-6">
              <a 
                href="#collections" 
                onClick={(e) => scrollToSection(e, '#collections')}
                className="inline-flex items-center justify-center px-8 py-4 bg-amber-500 text-slate-950 font-bold rounded-lg hover:bg-amber-400 transition-all group shadow-lg shadow-amber-500/10"
              >
                View Collections
                <ChevronRight className="ml-2 group-hover:translate-x-1 transition-transform" />
              </a>
              <a 
                href="#contact" 
                onClick={(e) => scrollToSection(e, '#contact')}
                className="inline-flex items-center justify-center px-8 py-4 border border-slate-700 text-white font-bold rounded-lg hover:bg-slate-800 transition-all"
              >
                Inquire for Bulk Orders
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-32 bg-slate-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-amber-500 font-bold uppercase tracking-widest text-sm mb-4">Our Commitment</h2>
            <h3 className="text-4xl md:text-5xl font-serif font-bold text-white mb-6">Services & Expertise</h3>
            <p className="max-w-2xl mx-auto text-slate-400">We handle the complexities of textile wholesale so you can focus on selling. From safe shipping to modern digital systems.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {SERVICES.map((service, index) => (
              <div 
                key={index} 
                className="p-8 bg-slate-900/40 border border-slate-800/50 rounded-2xl hover:border-amber-500/30 transition-all group"
              >
                <div className="mb-6 bg-slate-800 w-16 h-16 rounded-xl flex items-center justify-center group-hover:bg-amber-500/10 transition-colors">
                  {service.icon}
                </div>
                <h4 className="text-xl font-bold text-white mb-3">{service.title}</h4>
                <p className="text-slate-400 leading-relaxed">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* AI Saree Advisor Section */}
      <section className="py-24 bg-gradient-to-b from-slate-950 to-slate-900 overflow-hidden">
        <div className="max-w-5xl mx-auto px-4">
          <div className="bg-slate-900 border border-amber-500/20 rounded-3xl p-8 md:p-12 shadow-2xl relative">
            <div className="absolute top-0 right-0 p-6 opacity-5">
              <Sparkles size={160} className="text-amber-500" />
            </div>
            <div className="relative z-10">
              <div className="flex items-center space-x-3 mb-6">
                <div className="bg-amber-500 p-2 rounded-lg">
                  <Star className="text-slate-950" size={20} fill="currentColor" />
                </div>
                <h3 className="text-2xl font-bold text-white">AI Wholesale Advisor</h3>
              </div>
              <p className="text-slate-300 mb-8 max-w-lg">
                Not sure which fabric suits your customer base? Ask our AI assistant about Surat Silk, Bangalore Cotton, or current market trends.
              </p>
              
              <form onSubmit={handleChatSubmit} className="flex flex-col sm:flex-row gap-4">
                <input 
                  type="text" 
                  value={chatInput}
                  onChange={(e) => setChatInput(e.target.value)}
                  placeholder="e.g. Which saree is best for a boutique in South India?"
                  className="flex-1 bg-slate-800 border border-slate-700 rounded-xl px-6 py-4 text-white focus:outline-none focus:border-amber-500 transition-colors"
                />
                <button 
                  type="submit"
                  disabled={isChatLoading}
                  className="bg-amber-500 hover:bg-amber-400 disabled:opacity-50 text-slate-950 font-bold px-8 py-4 rounded-xl transition-all flex items-center justify-center min-w-[140px]"
                >
                  {isChatLoading ? "Thinking..." : <><Send size={20} className="mr-2" /> Ask AI</>}
                </button>
              </form>

              {chatResponse && (
                <div className="mt-8 p-6 bg-slate-800/50 rounded-2xl border border-slate-700 animate-in fade-in slide-in-from-top duration-500">
                  <p className="text-amber-400 font-bold text-sm uppercase mb-2">Advice for your business:</p>
                  <p className="text-slate-200 leading-relaxed italic">"{chatResponse}"</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Collections Section */}
      <section id="collections" className="py-32 bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <div className="max-w-2xl">
              <h2 className="text-amber-500 font-bold uppercase tracking-widest text-sm mb-4">The Selection</h2>
              <h3 className="text-4xl md:text-5xl font-serif font-bold text-white mb-6">Curated Wholesale Collections</h3>
              <p className="text-slate-400">High-quality silk, georgette, chiffon, crepe, net, and cotton. Traditional Surat silk to modern designer bridal wear and dress materials.</p>
            </div>
            <a 
              href="#contact" 
              onClick={(e) => scrollToSection(e, '#contact')}
              className="text-amber-500 font-bold flex items-center group hover:text-amber-400 transition-colors"
            >
              Request Full Catalogue <ChevronRight className="ml-1 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {PRODUCTS.map((product) => (
              <div key={product.id} className="group">
                <div className="relative aspect-[4/5] overflow-hidden rounded-2xl mb-6 shadow-xl">
                  <img 
                    src={product.image} 
                    alt={product.name} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-6">
                    <span 
                      onClick={(e) => scrollToSection(e as any, '#contact')}
                      className="text-white font-bold text-sm bg-amber-500/90 px-4 py-2 rounded cursor-pointer hover:bg-amber-400 transition-colors"
                    >
                      Inquire Price
                    </span>
                  </div>
                </div>
                <div>
                  <h4 className="text-xl font-bold text-white mb-1">{product.name}</h4>
                  <p className="text-slate-400 text-sm">{product.fabric} • {product.origin}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partners Section */}
      <section className="py-20 bg-slate-950 border-y border-slate-900/50">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p className="text-slate-500 uppercase tracking-[0.2em] font-bold text-xs mb-10">Our Trusted Surat Dealers</p>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-50 hover:opacity-100 transition-opacity duration-500">
            {PARTNERS.map((partner) => (
              <span key={partner.name} className="text-slate-300 font-serif text-lg md:text-2xl whitespace-nowrap">
                {partner.name}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-32 bg-slate-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div className="relative">
              <div className="absolute -top-10 -left-10 w-40 h-40 bg-amber-500/10 rounded-full blur-3xl"></div>
              <img 
                src="https://lh3.googleusercontent.com/d/1Z6ox3n_zbWUQuXH3DPIJagUMyS-o7-xX" 
                className="rounded-3xl shadow-2xl relative z-10 w-full" 
                alt="Our Heritage"
                loading="lazy"
              />
              <div className="absolute -bottom-6 -right-6 bg-amber-500 p-8 rounded-2xl z-20 shadow-xl hidden md:block">
                <span className="block text-4xl font-bold text-slate-950">20+</span>
                <span className="text-slate-900 font-bold uppercase text-xs tracking-wider">Years of Excellence</span>
              </div>
            </div>
            <div>
              <h2 className="text-amber-500 font-bold uppercase tracking-widest text-sm mb-4">Our Story</h2>
              <h3 className="text-4xl md:text-5xl font-serif font-bold text-white mb-8">Building Legacies with Every Thread</h3>
              <p className="text-slate-400 text-lg leading-relaxed mb-8">
                For the past two decades, <strong>Sri Meenachi Textiles</strong> has been the cornerstone of the wholesale saree business in South India. Founded by T. Sudhakar and driven by the vision of CEO T. Karthick, we have built a reputation on trust, quality, and low-cost efficiency.
              </p>
              <div className="grid grid-cols-2 gap-8 mb-10">
                <div>
                  <h4 className="text-white font-bold mb-2 text-lg">T. Sudhakar</h4>
                  <p className="text-slate-500 text-sm">Founder</p>
                </div>
                <div>
                  <h4 className="text-white font-bold mb-2 text-lg">T. Karthick</h4>
                  <p className="text-slate-500 text-sm">Co-founder & CEO</p>
                </div>
              </div>
              <div className="flex items-center p-6 bg-slate-900/60 rounded-2xl border-l-4 border-amber-500 backdrop-blur-sm">
                <p className="text-slate-300 italic">"Our mission is to empower every local retailer with high-volume, low-cost stock without compromising on safety or quality."</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-32 bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
            <div>
              <h2 className="text-amber-500 font-bold uppercase tracking-widest text-sm mb-4">Get In Touch</h2>
              <h3 className="text-4xl md:text-5xl font-serif font-bold text-white mb-8">Wholesale Inquiries</h3>
              <p className="text-slate-400 mb-10 leading-relaxed">Interested in our collections? Fill out the form or reach us directly via WhatsApp for faster response on pricing and catalog details.</p>
              
              <div className="space-y-8">
                <div className="flex items-start space-x-5 group">
                  <div className="bg-slate-800 p-4 rounded-xl text-amber-500 group-hover:bg-amber-500 group-hover:text-slate-950 transition-colors">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <h4 className="text-white font-bold mb-1">Our Location</h4>
                    <p className="text-slate-400 text-sm leading-relaxed">
                      Shop No.1, Kalaignar Textiles Market, C.B.Road, Bargur-635 104, <br />
                      Krishnagiri(Dt) Tamil Nadu.
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-5 group">
                  <div className="bg-slate-800 p-4 rounded-xl text-amber-500 group-hover:bg-amber-500 group-hover:text-slate-950 transition-colors">
                    <Phone size={24} />
                  </div>
                  <div>
                    <h4 className="text-white font-bold mb-1">Call / WhatsApp</h4>
                    <a href="tel:9488417241" className="text-slate-400 text-sm hover:text-white transition-colors">+91 9488417241</a>
                  </div>
                </div>
                <div className="flex items-start space-x-5">
                  <div className="bg-slate-800 p-4 rounded-xl text-amber-500">
                    <MessageSquare size={24} />
                  </div>
                  <div>
                    <h4 className="text-white font-bold mb-1">Social Networks</h4>
                    <div className="flex space-x-5 mt-3">
                      <a href="https://www.instagram.com/karthick9488417241" target="_blank" rel="noopener noreferrer" className="text-slate-500 hover:text-amber-500 transition-all transform hover:scale-110">
                        <Instagram size={22} />
                      </a>
                      <a href="https://www.facebook.com/sudhagar.smt" target="_blank" rel="noopener noreferrer" className="text-slate-500 hover:text-amber-500 transition-all transform hover:scale-110">
                        <Facebook size={22} />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-slate-950 p-8 md:p-10 rounded-3xl border border-slate-800 shadow-2xl relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1 bg-amber-500"></div>
              <form action="https://formspree.io/f/xdadqyvv" method="POST" className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-slate-400 text-xs font-bold uppercase tracking-wider mb-2">Your Name</label>
                    <input name="name" type="text" required className="w-full bg-slate-900 border border-slate-800 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-amber-500 transition-colors" placeholder="John Doe" />
                  </div>
                  <div>
                    <label className="block text-slate-400 text-xs font-bold uppercase tracking-wider mb-2">Business Name</label>
                    <input name="business" type="text" required className="w-full bg-slate-900 border border-slate-800 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-amber-500 transition-colors" placeholder="Retail Shop Name" />
                  </div>
                </div>
                <div>
                  <label className="block text-slate-400 text-xs font-bold uppercase tracking-wider mb-2">Email Address</label>
                  <input name="email" type="email" required className="w-full bg-slate-900 border border-slate-800 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-amber-500 transition-colors" placeholder="example@business.com" />
                </div>
                <div>
                  <label className="block text-slate-400 text-xs font-bold uppercase tracking-wider mb-2">Requirements</label>
                  <textarea name="requirements" rows={4} required className="w-full bg-slate-900 border border-slate-800 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-amber-500 transition-colors" placeholder="Let us know what you're looking for (e.g., Surat Silk, Dress Materials, Banarasi, etc.)"></textarea>
                </div>
                <button type="submit" className="w-full bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold py-4 rounded-lg transition-all shadow-lg shadow-amber-500/20 active:transform active:scale-95">
                  Send Booking Inquiry
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-950 pt-24 pb-12 border-t border-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
            <div className="lg:col-span-2">
              <div 
                className="flex items-center space-x-2 mb-6 cursor-pointer" 
                onClick={(e) => scrollToSection(e as any, '#home')}
              >
                <div className="w-10 h-10 bg-amber-500 rounded-full flex items-center justify-center text-slate-950 font-bold text-xl">S</div>
                <span className="text-2xl font-bold tracking-tighter text-white font-serif">SRI MEENACHI TEXTILES</span>
              </div>
              <p className="text-slate-500 max-w-sm mb-8 leading-relaxed">
                Your premier partner for wholesale sarees and dress materials. 20 years of trust, thousands of satisfied retailers across India.
              </p>
              <div className="flex space-x-6">
                <a href="https://www.instagram.com/karthick9488417241" target="_blank" rel="noopener noreferrer" className="text-slate-500 hover:text-amber-500 transition-colors">
                  <Instagram size={24} />
                </a>
                <a href="https://www.facebook.com/sudhagar.smt" target="_blank" rel="noopener noreferrer" className="text-slate-500 hover:text-amber-500 transition-colors">
                  <Facebook size={24} />
                </a>
                <a href="https://wa.me/9488417241" target="_blank" rel="noopener noreferrer" className="text-slate-500 hover:text-amber-500 transition-colors">
                  <MessageSquare size={24} />
                </a>
              </div>
            </div>
            
            <div>
              <h4 className="text-white font-bold mb-6 uppercase tracking-wider text-xs">Quick Links</h4>
              <ul className="space-y-4">
                {NAV_ITEMS.map((item) => (
                  <li key={item.href}>
                    <a 
                      href={item.href} 
                      onClick={(e) => scrollToSection(e, item.href)}
                      className="text-slate-500 hover:text-white transition-colors text-sm"
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-white font-bold mb-6 uppercase tracking-wider text-xs">Support</h4>
              <p className="text-slate-500 text-sm mb-2 italic">Open 7 days a week</p>
              <p className="text-slate-500 text-sm mb-6">9:00 AM - 9:00 PM</p>
              <div className="mt-6">
                <a href="tel:9488417241" className="text-amber-500 font-bold text-lg hover:underline underline-offset-4">
                  +91 9488417241
                </a>
              </div>
            </div>
          </div>
          
          <div className="pt-10 border-t border-slate-900 flex flex-col md:flex-row justify-between items-center gap-6">
            <p className="text-slate-600 text-xs">
              © {new Date().getFullYear()} Sri Meenachi Textiles. Designed for success.
            </p>
            <div className="flex space-x-8 text-xs text-slate-600">
              <a href="#" className="hover:text-slate-400 transition-colors">Terms</a>
              <a href="#" className="hover:text-slate-400 transition-colors">Privacy</a>
            </div>
          </div>
        </div>
      </footer>

      {/* Persistent CTA Button for Mobile */}
      <div className="fixed bottom-8 right-8 md:hidden z-40">
        <a 
          href="https://wa.me/9488417241" 
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center w-16 h-16 bg-green-500 text-white rounded-full shadow-2xl animate-pulse hover:animate-none transition-all"
          aria-label="WhatsApp Us"
        >
          <MessageSquare size={28} />
        </a>
      </div>
    </div>
  );
};

export default App;
