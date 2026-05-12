import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Code2, 
  ShieldCheck, 
  Cloud, 
  Settings, 
  Lightbulb, 
  Layers, 
  Menu, 
  X, 
  ChevronRight, 
  MousePointer2, 
  Star, 
  CheckCircle2, 
  Mail, 
  Phone, 
  MapPin, 
  Linkedin, 
  Facebook, 
  Instagram, 
  MessageSquare
} from 'lucide-react';

// --- Components ---

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Accueil', href: '#home' },
    { name: 'Services', href: '#services' },
    { name: 'À propos', href: '#about' },
    { name: 'Réalisations', href: '#portfolio' },
    { name: 'Témoignages', href: '#testimonials' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-brand-dark/80 backdrop-blur-md py-4 border-b border-white/10' : 'bg-transparent py-6'}`}>
      <div className="container mx-auto px-6 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <div className="w-10 h-10 bg-brand-blue rounded flex items-center justify-center font-display font-bold text-xl text-white">T</div>
          <span className="font-display font-bold text-2xl tracking-tighter text-white">TTS <span className="text-brand-accent font-light hidden lg:inline">Tanger Technology</span></span>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <a key={link.name} href={link.href} className="text-sm font-medium text-gray-300 hover:text-brand-blue transition-colors">
              {link.name}
            </a>
          ))}
          <button className="bg-brand-blue hover:bg-brand-accent text-white px-6 py-2 rounded-full text-sm font-semibold transition-all group flex items-center shadow-[0_0_15px_rgba(37,99,235,0.4)]">
            Demander un devis
            <ChevronRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        {/* Mobile Toggle */}
        <button className="md:hidden text-white" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
          {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 w-full bg-brand-dark border-t border-white/10 py-6 px-6 md:hidden backdrop-blur-lg lg:bg-white/5"
          >
            <div className="flex flex-col space-y-4">
              {navLinks.map((link) => (
                <a 
                  key={link.name} 
                  href={link.href} 
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-lg font-medium text-gray-300 hover:text-brand-blue"
                >
                  {link.name}
                </a>
              ))}
              <button className="bg-brand-blue text-white px-6 py-3 rounded-xl font-semibold text-center">
                Demander un devis
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-20 overflow-hidden tech-grid bg-brand-dark">
      {/* Background Orbs */}
      <div className="absolute top-1/4 -left-20 w-96 h-96 bg-brand-blue/10 rounded-full blur-[120px]" />
      <div className="absolute bottom-1/4 -right-20 w-80 h-80 bg-brand-accent/10 rounded-full blur-[100px]" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-block py-1 px-4 rounded-full bg-brand-blue/10 border border-brand-blue/20 text-brand-blue text-xs font-bold uppercase tracking-widest mb-6">
              Expertise IT Corporate à Tanger
            </span>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-white leading-[1.1] mb-8 tracking-tighter">
              Votre Transformation <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-blue to-cyan-400">Digitale Commence Ici</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-400 mb-10 max-w-2xl leading-relaxed">
              Solutions IT sur mesure pour propulser votre entreprise vers l'avenir. 
              Performance, sécurité et innovation au service de votre croissance.
            </p>
            <div className="flex flex-col sm:flex-row items-center gap-4">
              <button className="w-full sm:w-auto bg-brand-blue hover:bg-brand-blue/90 text-white px-8 py-4 rounded-lg font-bold text-lg transition-all flex items-center justify-center group shadow-[0_0_15px_rgba(37,99,235,0.4)]">
                Découvrir nos services
                <ChevronRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="w-full sm:w-auto px-8 py-4 rounded-lg font-bold text-lg border border-white/20 text-white hover:bg-white/5 transition-all">
                Nous contacter
              </button>
            </div>
          </motion.div>

          {/* Animated Stats in Hero */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 1 }}
            className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-4 border-t border-white/10 pt-12"
          >
             <div className="bg-white/5 border border-white/5 p-6 rounded-2xl text-center">
               <div className="text-3xl font-bold text-brand-blue mb-1">150+</div>
               <div className="text-[10px] uppercase tracking-wider text-gray-500 font-bold">Clients Actifs</div>
             </div>
             <div className="bg-white/5 border border-white/5 p-6 rounded-2xl text-center">
               <div className="text-3xl font-bold text-brand-blue mb-1">10 Ans</div>
               <div className="text-[10px] uppercase tracking-wider text-gray-500 font-bold">Expérience</div>
             </div>
             <div className="bg-white/5 border border-white/5 p-6 rounded-2xl text-center">
               <div className="text-3xl font-bold text-brand-blue mb-1">99%</div>
               <div className="text-[10px] uppercase tracking-wider text-gray-500 font-bold">Satisfaction</div>
             </div>
             <div className="bg-white/5 border border-white/5 p-6 rounded-2xl text-center">
               <div className="text-3xl font-bold text-brand-blue mb-1">50+</div>
               <div className="text-[10px] uppercase tracking-wider text-gray-500 font-bold">Experts IT</div>
             </div>
          </motion.div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <motion.div 
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-50"
      >
        <span className="text-[10px] uppercase font-bold tracking-widest text-white">Scroll</span>
        <div className="w-[2px] h-12 bg-gradient-to-b from-[#0066FF] to-transparent" />
      </motion.div>
    </section>
  );
};

const Services = () => {
  const services = [
    {
      icon: <Code2 className="w-8 h-8 text-brand-blue" />,
      title: "Web & Apps",
      desc: "Développement robuste, évolutif et conçu pour offrir une expérience utilisateur exceptionnelle."
    },
    {
      icon: <ShieldCheck className="w-8 h-8 text-brand-blue" />,
      title: "Cybersécurité",
      desc: "Protection avancée de vos actifs numériques et réponse aux incidents pour blindé votre infrastructure."
    },
    {
      icon: <Cloud className="w-8 h-8 text-brand-blue" />,
      title: "Cloud Infrastructure",
      desc: "Migration et gestion cloud sécurisée pour une scalabilité et une disponibilité maximale."
    },
    {
      icon: <Settings className="w-8 h-8 text-brand-blue" />,
      title: "Maintenance & Support",
      desc: "Assistance technique proactive et maintenance préventive pour garantir la continuité de vos opérations."
    },
    {
      icon: <Lightbulb className="w-8 h-8 text-brand-blue" />,
      title: "Conseil Strategique",
      desc: "Accompagnement dans votre transformation digitale et optimisation de vos processus métiers."
    },
    {
      icon: <Layers className="w-8 h-8 text-brand-blue" />,
      title: "Intégration ERP",
      desc: "Déploiement et personnalisation de solutions de gestion intégrées pour automatiser votre flux de travail."
    }
  ];

  return (
    <section id="services" className="py-32 relative bg-brand-dark">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-4xl md:text-5xl lg:text-6xl text-white mb-6 tracking-tight font-display">Des Solutions IT <span className="text-brand-blue italic">Complètes</span></h2>
          <p className="text-xl text-gray-400">Nous couvrons tous les aspects de la technologie moderne pour assurer le succès de votre entreprise.</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group p-8 rounded-2xl bg-brand-secondary border border-white/5 hover:border-brand-blue/50 transition-all duration-300 relative overflow-hidden"
            >
              <div className="mb-6 w-12 h-12 text-brand-blue bg-brand-blue/10 rounded flex items-center justify-center group-hover:scale-110 transition-transform">
                {s.icon}
              </div>
              <h3 className="text-xl text-white font-bold mb-2 group-hover:text-brand-blue transition-colors">{s.title}</h3>
              <p className="text-sm text-gray-500 leading-relaxed mb-6">{s.desc}</p>
              <a href="#contact" className="inline-flex items-center text-xs font-bold text-brand-blue uppercase tracking-widest hover:text-brand-accent transition-colors">
                En savoir plus <ChevronRight size={14} className="ml-1" />
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const WhyUs = () => {
  const reasons = [
    {
      title: "Expertise Locale",
      desc: "Une connaissance profonde du marché tangérois et marocain, avec une réactivité inégalée."
    },
    {
      title: "Technologies de Pointe",
      desc: "Nous utilisons exclusivement les stacks technologiques les plus modernes et sécurisées."
    },
    {
      title: "Approche Sur-Mesure",
      desc: "Chaque solution est unique et adaptée spécifiquement aux défis de votre structure."
    },
    {
      title: "Support 24/7",
      desc: "Nos experts sont à votre disposition à tout moment pour garantir zéro temps d'arrêt."
    }
  ];

  return (
    <section id="about" className="py-32 bg-brand-secondary/30 relative overflow-hidden">
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-64 h-64 bg-brand-blue/10 blur-[100px]" />
      
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-20">
          <div className="lg:w-1/2">
            <span className="text-brand-blue font-bold tracking-widest uppercase text-xs mb-4 block">Pourquoi TTS ?</span>
            <h2 className="text-4xl md:text-5xl text-white mb-8 leading-tight font-display">Le partenaire technologique que votre ambition mérite.</h2>
            <p className="text-lg text-gray-400 mb-12">
              Nous ne sommes pas qu'un simple prestataire, nous sommes le moteur technologique de votre croissance. En combinant vision stratégique et excellence technique, nous transformons vos défis en opportunités.
            </p>
            <div className="grid sm:grid-cols-2 gap-8">
              {reasons.map((r, i) => (
                <div key={i} className="flex gap-4">
                  <div className="mt-1">
                    <CheckCircle2 className="text-brand-blue w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="text-white font-bold mb-2 font-display">{r.title}</h4>
                    <p className="text-sm text-gray-500 leading-relaxed font-sans">{r.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="lg:w-1/2 relative">
             <div className="aspect-video rounded-2xl overflow-hidden bg-brand-dark/50 p-2 relative z-10 border border-white/5 backdrop-blur-lg">
               <img 
                src="https://picsum.photos/seed/tts-office/800/600" 
                alt="TTS Office" 
                className="w-full h-full object-cover rounded-xl grayscale hover:grayscale-0 transition-all duration-700"
                referrerPolicy="no-referrer"
               />
             </div>
             <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-brand-blue/20 rounded-full blur-3xl" />
             <div className="absolute -top-10 -left-10 w-40 h-40 bg-cyan-400/10 rounded-full blur-3xl" />
          </div>
        </div>
      </div>
    </section>
  );
};

const Portfolio = () => {
  const [filter, setFilter] = useState('All');
  const categories = ['All', 'Web', 'Cloud', 'Sécurité'];
  
  const projects = [
    { title: "Banque Digitale", cat: "Web", img: "https://picsum.photos/seed/p1/400/300", tag: "Fintech" },
    { title: "Audit Sécurité - Bank", cat: "Sécurité", img: "https://picsum.photos/seed/p2/400/300", tag: "Pentesting" },
    { title: "Système ERP Port", cat: "Cloud", img: "https://picsum.photos/seed/p3/400/300", tag: "Logistique" },
    { title: "App Logistique Détroit", cat: "Web", img: "https://picsum.photos/seed/p4/400/300", tag: "Ecommerce" },
    { title: "Datacenter Monitoring", cat: "Sécurité", img: "https://picsum.photos/seed/p5/400/300", tag: "AI, Python" },
    { title: "ERP Industriel GNF", cat: "Web", img: "https://picsum.photos/seed/p6/400/300", tag: "Odoo, Python" }
  ];

  const filteredProjects = filter === 'All' ? projects : projects.filter(p => p.cat === filter);

  return (
    <section id="portfolio" className="py-32 bg-brand-dark">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8 text-white">
          <div className="max-w-2xl">
            <h2 className="text-3xl md:text-4xl font-bold font-display">Réalisations Récentes</h2>
            <p className="text-gray-500 text-sm mt-2">Nos derniers succès technologiques</p>
          </div>
          <div className="flex gap-4 overflow-x-auto pb-2 scrollbar-hide">
            {categories.map(c => (
              <button 
                key={c}
                onClick={() => setFilter(c)}
                className={`px-4 py-1.5 rounded-lg text-xs font-bold transition-all border whitespace-nowrap uppercase tracking-widest ${filter === c ? 'bg-brand-blue border-brand-blue text-white' : 'border-white/5 text-gray-500 hover:border-white/10'}`}
              >
                {c === 'All' ? 'Tous' : c}
              </button>
            ))}
          </div>
        </div>

        <motion.div layout className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence mode='popLayout'>
            {filteredProjects.map((p) => (
              <motion.div 
                layout
                key={p.title}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3 }}
                className="group relative rounded-2xl overflow-hidden aspect-[4/3] cursor-pointer bg-brand-secondary border border-white/5"
              >
                <img src={p.img} alt={p.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-60 group-hover:opacity-40" referrerPolicy="no-referrer" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 to-transparent flex flex-col justify-end p-8">
                  <span className="text-brand-blue font-bold text-[10px] uppercase mb-1 tracking-tighter">{p.tag}</span>
                  <h4 className="text-xl font-bold text-white">{p.title}</h4>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};

const Testimonials = () => {
  const testimonials = [
    {
      name: "Ahmed Bensouda",
      role: "DSI, Tanger Med",
      content: "Une expertise rare au Maroc. TTS nous a accompagnés sur une refonte critique de notre sécurité réseau avec un professionnalisme exemplaire.",
      stars: 5,
      avatar: "https://i.pravatar.cc/150?u=a"
    },
    {
      name: "Sara El Fassi",
      role: "Fondatrice, TechVentures",
      content: "La réactivité de l'équipe support est phénoménale. Ils anticipent les problèmes avant même que nous les remarquions.",
      stars: 5,
      avatar: "https://i.pravatar.cc/150?u= Sara"
    },
    {
      name: "Karim Mansouri",
      role: "CEO, MaroLogistics",
      content: "Grâce à leur solution ERP sur-mesure, nous avons optimisé nos délais de livraison de 25% en moins de 6 mois.",
      stars: 5,
      avatar: "https://i.pravatar.cc/150?u= Karim"
    }
  ];

  return (
    <section id="testimonials" className="py-32 relative overflow-hidden bg-brand-dark">
      <div className="container mx-auto px-6">
        <div className="text-center mb-20 text-white">
          <h2 className="text-4xl md:text-5xl mb-6 font-display">Ils nous font confiance</h2>
          <div className="flex justify-center gap-1">
            {[1, 2, 3, 4, 5].map(i => <Star key={i} className="fill-brand-blue text-brand-blue w-4 h-4" />)}
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <div key={i} className={`bg-white/5 p-10 rounded-2xl border border-white/5 relative ${i === 0 ? 'bg-brand-blue text-white border-brand-blue/20' : 'text-gray-300'}`}>
              <MessageSquare className="absolute top-10 right-10 opacity-10 w-16 h-16" />
              <div className="flex gap-1 mb-6">
                {[...Array(t.stars)].map((_, j) => <Star key={j} className={`${i === 0 ? 'fill-white text-white' : 'fill-brand-blue text-brand-blue'} w-4 h-4`} />)}
              </div>
              <p className="text-sm italic leading-relaxed mb-8">"{t.content}"</p>
              <div className="flex items-center gap-4">
                <img src={t.avatar} className="w-10 h-10 rounded-full border border-white/20" alt={t.name} referrerPolicy="no-referrer" />
                <div>
                  <h5 className={`font-bold text-sm ${i === 0 ? 'text-white' : 'text-white'}`}>{t.name}</h5>
                  <p className={`text-[10px] font-bold uppercase tracking-widest ${i === 0 ? 'text-white/60' : 'text-gray-500'}`}>{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Contact = () => {
  return (
    <section id="contact" className="py-32 tech-grid bg-brand-dark">
      <div className="container mx-auto px-6">
        <div className="bg-brand-secondary border border-white/5 rounded-[32px] overflow-hidden shadow-2xl relative">
          <div className="absolute top-0 right-0 w-1/2 h-full bg-brand-blue/5 blur-[120px] pointer-events-none" />
          
          <div className="flex flex-col lg:flex-row">
            <div className="lg:w-1/2 p-12 lg:p-16 border-r border-white/5">
              <h2 className="text-4xl md:text-5xl text-white mb-8 tracking-tighter font-display">Parlons de votre <br /><span className="text-brand-blue">prochain projet.</span></h2>
              <p className="text-gray-400 text-lg mb-12">
                Vous avez un défi technologique ? Nos experts sont prêts à y répondre. Contactez-nous pour une consultation gratuite.
              </p>
              
              <div className="space-y-8">
                <div className="flex items-start gap-6">
                  <div className="w-12 h-12 rounded-xl bg-brand-blue/10 flex items-center justify-center shrink-0">
                    <Mail className="text-brand-blue w-6 h-6" />
                  </div>
                  <div>
                    <h5 className="font-bold text-white text-[10px] uppercase tracking-widest mb-1">Email</h5>
                    <p className="text-gray-400 text-sm font-medium">contact@tanger-tech.ma</p>
                  </div>
                </div>
                <div className="flex items-start gap-6">
                  <div className="w-12 h-12 rounded-xl bg-brand-blue/10 flex items-center justify-center shrink-0">
                    <Phone className="text-brand-blue w-6 h-6" />
                  </div>
                  <div>
                    <h5 className="font-bold text-white text-[10px] uppercase tracking-widest mb-1">Téléphone</h5>
                    <p className="text-gray-400 text-sm font-medium">+212 539 00 11 22</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:w-1/2 p-12 lg:p-16 bg-white/[0.02]">
              <form className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-[10px] font-bold text-gray-500 uppercase tracking-widest">Nom Complet</label>
                    <input type="text" className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white text-sm focus:outline-none focus:border-brand-blue transition-colors" placeholder="Vôtre nom" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] font-bold text-gray-500 uppercase tracking-widest">Email</label>
                    <input type="email" className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white text-sm focus:outline-none focus:border-brand-blue transition-colors" placeholder="exemple@entreprise.com" />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-bold text-gray-500 uppercase tracking-widest">Message</label>
                  <textarea rows={4} className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white text-sm focus:outline-none focus:border-brand-blue transition-colors resize-none" placeholder="Décrivez votre besoin..."></textarea>
                </div>
                <button className="w-full bg-brand-blue hover:bg-brand-blue/90 text-white font-bold py-4 rounded-lg shadow-lg shadow-brand-blue/20 flex items-center justify-center group transition-all text-sm uppercase tracking-widest">
                  Envoyer le message
                  <MousePointer2 className="ml-2 w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="py-8 bg-brand-deep border-t border-white/5">
      <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="text-[10px] text-gray-600 font-medium">
          © 2025 Tanger Technology Solution. <span className="hidden md:inline">Propulsé par l'innovation marocaine.</span>
        </div>
        <div className="flex gap-8 text-[10px] font-bold text-gray-500 uppercase tracking-widest">
          <a href="#" className="hover:text-brand-blue transition-colors">LinkedIn</a>
          <a href="#" className="hover:text-brand-blue transition-colors">Instagram</a>
          <a href="#" className="hover:text-brand-blue transition-colors">WhatsApp</a>
        </div>
      </div>
    </footer>
  );
};

export default function App() {
  return (
    <div className="bg-brand-dark min-h-screen selection:bg-brand-blue/30 selection:text-white">
      <Navbar />
      <Hero />
      <Services />
      <WhyUs />
      <Portfolio />
      <Testimonials />
      
      {/* Mini CTA Band */}
      <section className="py-20 bg-brand-blue relative overflow-hidden group">
        <motion.div 
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="absolute inset-0 bg-white/10 origin-left"
        />
        <div className="container mx-auto px-6 relative z-10 flex flex-col lg:flex-row items-center justify-between gap-8">
          <h2 className="text-3xl md:text-5xl text-white font-black italic tracking-tight text-center lg:text-left">
            Prêt à propulser votre infrastructure IT ?
          </h2>
          <button className="bg-white text-brand-blue px-10 py-5 rounded-full font-black text-xl hover:scale-105 transition-transform flex items-center gap-4 whitespace-nowrap shadow-xl">
            Obtenir un devis gratuit
            <ChevronRight />
          </button>
        </div>
      </section>

      <Contact />
      <Footer />
    </div>
  );
}

