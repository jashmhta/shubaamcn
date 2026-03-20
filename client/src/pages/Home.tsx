import { useRef, useEffect, useState } from "react";
import { Link } from "wouter";
import { motion, useInView, useScroll, useTransform, AnimatePresence } from "framer-motion";
import { ArrowRight, Phone, Mail, MapPin, Star, CheckCircle, ChevronDown, Play, Award, Users, Building2, Clock, Settings, Target, Sparkles, Building, Construction, Route, Zap, DollarSign, Smile, Leaf, MessageCircle, Shield, Palette } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { assets } from "@/lib/assets";

// ── Reveal animation wrapper ──
function Reveal({ children, delay = 0, direction = "up", className = "" }: {
  children: React.ReactNode; delay?: number; direction?: "up" | "left" | "right" | "scale"; className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const variants = {
    hidden: { opacity: 0, y: direction === "up" ? 40 : 0, x: direction === "left" ? -40 : direction === "right" ? 40 : 0, scale: direction === "scale" ? 0.9 : 1 },
    visible: { opacity: 1, y: 0, x: 0, scale: 1, transition: { duration: 0.75, delay } },
  };
  return (
    <motion.div ref={ref} initial="hidden" animate={isInView ? "visible" : "hidden"} variants={variants} className={className}>
      {children}
    </motion.div>
  );
}

// ── Animated counter ──
function Counter({ target, suffix = "", duration = 2 }: { target: number; suffix?: string; duration?: number }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true });
  useEffect(() => {
    if (!isInView) return;
    let start = 0;
    const step = target / (duration * 60);
    const timer = setInterval(() => {
      start += step;
      if (start >= target) { setCount(target); clearInterval(timer); }
      else setCount(Math.floor(start));
    }, 1000 / 60);
    return () => clearInterval(timer);
  }, [isInView, target, duration]);
  return <span ref={ref}>{count}{suffix}</span>;
}

const IconMap = {
  Settings, Target, Sparkles, Building, Construction, Route,
  Award, Palette, CheckCircle, Zap, DollarSign, Smile, Leaf, MessageCircle, Shield,
};

// ── Data ──
const SERVICES = [
  { id: "tremix", title: "Tremix (VDF)", icon: Settings, img: assets.services.tremix, tag: "Most Popular", desc: "Vacuum Dewatered Flooring for superior industrial strength and durability." },
  { id: "polished", title: "Polished Concrete", icon: Sparkles, img: assets.services.polished, tag: "Premium", desc: "Mirror-finish floors with diamond grinding for stunning commercial spaces." },
  { id: "laser-screed", title: "Laser Screed", icon: Target, img: assets.services.laserScreed, tag: "High-Tech", desc: "Laser-guided precision leveling for perfectly flat large-scale floors." },
  { id: "stamping", title: "Stamped Concrete", icon: Building, img: assets.services.stamping, tag: "Decorative", desc: "Decorative patterns replicating stone, brick, and tile at fraction of cost." },
  { id: "society", title: "Society Repairing", icon: Construction, img: assets.services.society, tag: "Repair", desc: "Expert concrete repair for residential societies and compounds." },
  { id: "thermoplastic", title: "Thermoplastic Marking", icon: Route, img: assets.services.thermoplastic, tag: "Marking", desc: "Durable thermoplastic markings for roads, parking, and industrial zones." },
];

const PRODUCTS = [
  { id: "floor-hardeners", title: "Floor Hardeners", img: assets.products.floorHardener, desc: "Metallic and non-metallic floor hardeners for superior abrasion resistance.", badge: "Best Seller" },
  { id: "pp-fibres", title: "PP Structural Fibres", img: assets.products.ppFibres, desc: "Polypropylene fibres that reduce cracking and improve concrete toughness.", badge: "Popular" },
  { id: "steel-fiber", title: "Steel Fiber", img: assets.products.steelFiber, desc: "High-tensile steel fibres for industrial floors and heavy-duty structures.", badge: "Industrial" },
];

const TESTIMONIALS = [
  { name: "Ashish Mishra", company: "Kolte Patil Developers Ltd", role: "Project Manager", text: "The expertise of this concrete flooring company transformed our construction site's into an asset. We highly recommend their services.", rating: 5 },
  { name: "Kunal Sonawane", company: "Sumit Group", role: "Director", text: "This company's commitment to using top-quality materials was evident in our parking lot's finish. It's a reliable and long-lasting solution.", rating: 5 },
  { name: "Prashant Mule", company: "TATA Housing Development Company Limited", role: "Project Head", text: "Our new construction site parking area not only serves as a functional space but also enhances the overall appearance of the project. Kudos to this company!", rating: 5 },
  { name: "Rajesh Gala", company: "Anupam Stationery LTD", role: "Owner", text: "From start to finish, the communication with this concrete flooring company was outstanding. They kept us informed and delivered exactly as promised.", rating: 5 },
  { name: "Mukesh Bakhai", company: "S.L. Raheja Hospital", role: "Facility Manager", text: "Our new parking lot not only serves its functional purpose but also adds aesthetic value, thanks to the design expertise of this company.", rating: 5 },
];

const CLIENTS = [
  { name: "Dmart", logo: "https://shubhaamconcret.com/wp-content/uploads/2023/09/Dmart.png" },
  { name: "Everest Masala", logo: "https://shubhaamconcret.com/wp-content/uploads/2023/09/Everest-Masala.png" },
  { name: "Godrej Boyce", logo: "https://shubhaamconcret.com/wp-content/uploads/2023/09/Godrej-Boyce-Mfg.-Co.-Ltd-1024x768.jpg" },
  { name: "Ipca Laboratories", logo: "https://shubhaamconcret.com/wp-content/uploads/2023/09/Ipca-Laboratories-Ltd.png" },
  { name: "Kotak Mahindra Bank", logo: "https://shubhaamconcret.com/wp-content/uploads/2023/09/Kotak-Mahindra-Bank.png" },
  { name: "L&T Construction", logo: "https://shubhaamconcret.com/wp-content/uploads/2023/09/Larsen-Toubro-Ltd-Construction.png" },
  { name: "Tata Housing", logo: "https://shubhaamconcret.com/wp-content/uploads/2023/09/Tata-Housing-Development-Company-Limited.jpg" },
];

const STATS = [
  { icon: Clock, value: 33, suffix: "+", label: "Years Experience" },
  { icon: Building2, value: 1500, suffix: "+", label: "Projects Completed" },
  { icon: Users, value: 1500, suffix: "+", label: "Happy Clients" },
  { icon: Award, value: 15, suffix: "", label: "Industry Awards" },
];

// ── Hero Section ──
function HeroSection() {
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);

  return (
    <div ref={heroRef} className="relative h-screen min-h-[600px] max-h-[900px] overflow-x-clip sm:overflow-hidden flex items-center">
      {/* Video background */}
      <motion.div style={{ y }} className="absolute inset-0 z-0">
        <video
          autoPlay muted loop playsInline
          onLoadedData={() => setIsVideoLoaded(true)}
          className={`w-full h-full object-cover transition-opacity duration-1000 ${isVideoLoaded ? "opacity-100" : "opacity-0"}`}
          poster={assets.services.tremix}
        >
          <source src={assets.heroVideo} type="video/mp4" />
        </video>
        {!isVideoLoaded && (
          
<img loading="lazy" src={assets.services.tremix} alt="Hero" className="absolute inset-0 w-full h-full object-cover" />
        )}
      </motion.div>

      {/* Gradient overlay */}
      <div className="absolute inset-0 z-10 bg-gradient-to-r from-black/85 via-black/60 to-black/30" />
      <div className="absolute inset-0 z-10 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

      {/* Animated geometric SVG accent */}
      <div className="absolute right-0 top-0 bottom-0 z-10 w-1/2 pointer-events-none hidden lg:block">
        <svg viewBox="0 0 600 800" className="h-full w-full" preserveAspectRatio="xMaxYMid slice">
          <defs>
            <linearGradient id="goldGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#D4AF37" stopOpacity="0.15" />
              <stop offset="100%" stopColor="#B8860B" stopOpacity="0.05" />
            </linearGradient>
          </defs>
          <motion.polygon
            points="200,0 600,0 600,800 400,800"
            fill="url(#goldGrad)"
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.5, delay: 0.5 }}
          />
          <motion.line x1="200" y1="0" x2="400" y2="800" stroke="#D4AF37" strokeWidth="1" strokeOpacity="0.3"
            initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 2, delay: 0.8 }} />
        </svg>
      </div>

      {/* Content */}
      <motion.div style={{ opacity }} className="relative z-20 container">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex items-center gap-3 mb-6"
          >
            <div className="h-px w-12 bg-primary" />
            <span className="text-primary font-label text-xs tracking-[0.3em] uppercase">Since 1991</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-[clamp(2.5rem,6vw,5rem)] font-display font-bold text-white leading-[1.05] mb-6"
          >
            India's Premier
            <br />
            <em className="not-italic" style={{ color: "var(--primary)", textShadow: "0 0 40px oklch(from var(--primary) l c h / 0.4)" }}>
              Concrete Flooring
            </em>
            <br />
            Specialists
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-white/75 text-lg md:text-xl leading-relaxed mb-8 max-w-xl"
          >
            33+ years of excellence in VDF, Polished Concrete, Laser Screed, and Decorative Flooring.
            Trusted by India's top industrial and commercial developers.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.45 }}
            className="flex flex-wrap gap-4"
          >
            <Link href="/contact">
              <button className="btn-gold-glow btn-press group flex items-center gap-2 bg-primary text-primary-foreground px-8 py-4 rounded-xl font-label font-bold text-sm tracking-wide hover:opacity-90 transition-all shadow-lg">
                Get Free Quote
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </Link>
            <Link href="/services">
              <button className="btn-press flex items-center gap-2 border border-white/30 text-white px-8 py-4 rounded-xl font-label font-bold text-sm tracking-wide hover:border-primary hover:text-primary transition-all backdrop-blur-sm">
                <Play className="w-4 h-4" />
                Our Services
              </button>
            </Link>
          </motion.div>
        </div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2"
      >
        <span className="text-white/50 text-xs font-label tracking-widest">SCROLL</span>
        <motion.div animate={{ y: [0, 8, 0] }} transition={{ repeat: Infinity, duration: 1.5 }}>
          <ChevronDown className="w-5 h-5 text-primary" />
        </motion.div>
      </motion.div>
    </div>
  );
}

// ── Stats Bar ──
function StatsBar() {
  return (
    <section className="bg-background py-10 relative overflow-hidden border-y border-border/50">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
      <div className="container relative">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {STATS.map((stat, i) => (
            <Reveal key={stat.label} delay={i * 0.1} direction="up">
              <div className="text-center group">
                <div className="w-14 h-14 rounded-2xl bg-primary/20 flex items-center justify-center mx-auto mb-3 group-hover:scale-110 group-hover:bg-primary/30 transition-all duration-300">
                  <stat.icon className="w-6 h-6 text-primary" />
                </div>
                <div className="text-3xl md:text-4xl font-display font-bold text-primary">
                  <Counter target={stat.value} suffix={stat.suffix} />
                </div>
                <div className="text-primary/70 text-xs font-label tracking-widest uppercase mt-1">{stat.label}</div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

// ── About Section ──
function AboutSection() {
  return (
    <section className="py-24 overflow-hidden">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <Reveal direction="left">
            <div className="relative">
              <div className="relative rounded-3xl overflow-hidden aspect-[4/3] shadow-2xl">
                
<img loading="lazy" src={assets.aboutHero} alt="About Shubhaam Concret" className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
              </div>
              {/* Floating badge */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
                className="absolute -bottom-6 -right-6 bg-card border border-primary/30 rounded-2xl p-5 shadow-xl"
              >
                <div className="text-3xl font-display font-bold text-primary">33+</div>
                <div className="text-muted-foreground text-xs font-label tracking-wide">Years of Excellence</div>
              </motion.div>
              {/* Gold accent line */}
              <div className="absolute -left-4 top-8 bottom-8 w-1 bg-gradient-to-b from-transparent via-primary to-transparent rounded-full" />
            </div>
          </Reveal>

          <Reveal direction="right">
            <div>
              <span className="section-label">About Us</span>
              <h2 className="text-[clamp(2rem,4vw,3rem)] font-display font-bold mt-3 mb-6 leading-tight">
                Mumbai's Most Trusted
                <br />
                <em className="not-italic text-primary">Concrete Flooring</em> Company
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Founded in 1991, Shubhaam Concret Floors Pvt. Ltd. has been at the forefront of concrete flooring
                solutions in India for over three decades. We are one of the leading providers of Complete Concrete
                Flooring Solutions with in-house facilities to design and customize every flooring requirement to the
                customers satisfaction.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-8">
                SHUBHAAM based in Mumbai - India since the past 33 years is a well reputed company delivering
                enhanced flooring solutions with international standards at reasonable pricing, backed by a chain
                of exceptional supply, service & support. We specialize in Tremix applicable in Industries,
                Warehouse, Residential Basement & Podium Car Parking Area, Road & Airport etc.
              </p>
              <div className="grid grid-cols-2 gap-4 mb-8">
                {[
                  "ISO 9001:2015 Certified",
                  "Certified Concrete Specialists",
                  "Pan-India Service Network",
                  "Free Site Assessment",
                ].map((item) => (
                  <div key={item} className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-primary shrink-0" />
                    <span className="text-sm text-foreground/80">{item}</span>
                  </div>
                ))}
              </div>
              <Link href="/about">
                <button className="btn-gold-glow btn-press group flex items-center gap-2 bg-primary text-primary-foreground px-7 py-3.5 rounded-xl font-label font-bold text-sm tracking-wide hover:opacity-90 transition-all">
                  Learn Our Story
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </Link>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

// ── Services Section ──
function ServicesSection() {
  return (
    <section className="py-24 bg-muted/20">
      <div className="container">
        <Reveal>
          <div className="text-center mb-16">
            <span className="section-label">What We Do</span>
            <h2 className="text-[clamp(2rem,4vw,3rem)] font-display font-bold mt-3 mb-4">
              Our Specialised <em className="not-italic text-primary">Services</em>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Comprehensive concrete flooring solutions for every industry and application —
              from high-tech laser screed to decorative stamped concrete.
            </p>
          </div>
        </Reveal>

        {/* Mobile slider, desktop grid */}
        <div className="flex gap-4 overflow-x-auto pb-4 snap-x snap-mandatory sm:grid sm:grid-cols-2 lg:grid-cols-3 sm:gap-6 sm:overflow-visible sm:pb-0 -mx-4 px-4 sm:mx-0 sm:px-0 scrollbar-hide">
          {SERVICES.map((service, i) => (
            <Reveal key={service.id} delay={i * 0.07}>
              <Link href={`/services/${service.id}`}>
                <motion.div
                  whileHover={{ y: -8 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  className="group bg-card rounded-2xl overflow-hidden border border-border/50 cursor-pointer h-full service-card-hover border-beam snap-center min-w-[280px] sm:min-w-0"
                >
                  <div className="relative h-52 overflow-hidden">
                    <img
                      src={service.img}
                      alt={service.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                    <div className="absolute top-3 right-3 text-primary"><service.icon className="w-6 h-6" /></div>
                    <Badge className="absolute bottom-3 left-3 bg-primary/90 text-primary-foreground border-0 text-xs font-label">
                      {service.tag}
                    </Badge>
                  </div>
                  <div className="p-5">
                    <h3 className="font-display text-lg font-bold mb-2 group-hover:text-primary transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed mb-3 line-clamp-2">{service.desc}</p>
                    <div className="flex items-center gap-1 text-primary text-xs font-label font-bold tracking-wide group-hover:gap-2 transition-all">
                      Learn More <ArrowRight className="w-3 h-3" />
                    </div>
                  </div>
                </motion.div>
              </Link>
            </Reveal>
          ))}
        </div>

        {/* Swipe hint - mobile only */}
        <div className="flex items-center justify-center gap-2 mt-4 sm:hidden text-muted-foreground">
          <motion.div animate={{ x: [0, 5, 0] }} transition={{ repeat: Infinity, duration: 1.5 }}>
            <ArrowRight className="w-4 h-4" />
          </motion.div>
          <span className="text-xs font-label">Swipe to see more</span>
        </div>

        <Reveal delay={0.3}>
          <div className="text-center mt-10">
            <Link href="/services">
              <button className="btn-press group flex items-center gap-2 mx-auto border border-border px-8 py-3.5 rounded-xl font-label font-bold text-sm tracking-wide hover:border-primary hover:text-primary transition-all">
                View All Services <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

// ── Products Section ──
function ProductsSection() {
  return (
    <section className="py-24">
      <div className="container">
        <Reveal>
          <div className="text-center mb-16">
            <span className="section-label">What We Supply</span>
            <h2 className="text-[clamp(2rem,4vw,3rem)] font-display font-bold mt-3 mb-4">
              Premium <em className="not-italic text-primary">Products</em>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              High-quality concrete admixtures and reinforcement materials for superior floor quality.
            </p>
          </div>
        </Reveal>

        {/* Mobile slider, desktop grid */}
        <div className="flex gap-4 overflow-x-auto pb-4 snap-x snap-mandatory md:grid md:grid-cols-3 md:gap-8 md:overflow-visible md:pb-0 -mx-4 px-4 md:mx-0 md:px-0 scrollbar-hide">
          {PRODUCTS.map((product, i) => (
            <Reveal key={product.id} delay={i * 0.1} direction="scale">
              <Link href={`/products#${product.id}`}>
                <div className="group bg-card rounded-3xl overflow-hidden border border-border/50 service-card-hover cursor-pointer border-beam snap-center min-w-[280px] md:min-w-0">
                  <div className="relative h-56 overflow-hidden">
                    <img
                      src={product.img}
                      alt={product.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                    <Badge className="absolute top-3 left-3 bg-primary text-primary-foreground border-0 text-xs font-label">
                      {product.badge}
                    </Badge>
                  </div>
                  <div className="p-6">
                    <h3 className="font-display text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                      {product.title}
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed mb-4">{product.desc}</p>
                    <div className="flex items-center gap-1 text-primary text-xs font-label font-bold tracking-wide group-hover:gap-2 transition-all">
                      View Details <ArrowRight className="w-3 h-3" />
                    </div>
                  </div>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>

        {/* Swipe hint - mobile only */}
        <div className="flex items-center justify-center gap-2 mt-4 md:hidden text-muted-foreground">
          <motion.div animate={{ x: [0, 5, 0] }} transition={{ repeat: Infinity, duration: 1.5 }}>
            <ArrowRight className="w-4 h-4" />
          </motion.div>
          <span className="text-xs font-label">Swipe to see more</span>
        </div>
      </div>
    </section>
  );
}

// ── Testimonials Section ──
function TestimonialsSection() {
  const [active, setActive] = useState(0);
  useEffect(() => {
    const timer = setInterval(() => setActive((p) => (p + 1) % TESTIMONIALS.length), 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="py-24 bg-foreground relative overflow-hidden">
      <div className="absolute inset-0 opacity-[0.03]"
        style={{ backgroundImage: "repeating-linear-gradient(45deg, currentColor 0, currentColor 1px, transparent 0, transparent 50%)", backgroundSize: "20px 20px" }} />
      <div className="container relative">
        <Reveal>
          <div className="text-center mb-16">
            <span className="section-label text-primary">Client Stories</span>
            <h2 className="text-[clamp(2rem,4vw,3rem)] font-display font-bold mt-3 text-background">
              What Our <em className="not-italic text-primary">Clients Say</em>
            </h2>
          </div>
        </Reveal>

        <div className="max-w-3xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={active}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="bg-background/5 backdrop-blur-sm border border-white/10 rounded-3xl p-8 md:p-12 text-center"
            >
              <div className="flex justify-center gap-1 mb-6">
                {Array.from({ length: TESTIMONIALS[active].rating }).map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-primary text-primary" />
                ))}
              </div>
              <p className="text-background/80 text-lg md:text-xl leading-relaxed mb-8 italic font-display">
                "{TESTIMONIALS[active].text}"
              </p>
              <div>
                <div className="font-display font-bold text-background text-lg">{TESTIMONIALS[active].name}</div>
                <div className="text-primary text-sm font-label">{TESTIMONIALS[active].role}</div>
                <div className="text-background/50 text-sm">{TESTIMONIALS[active].company}</div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Dots */}
          <div className="flex justify-center gap-2 mt-8">
            {TESTIMONIALS.map((_, i) => (
              <button
                key={i}
                onClick={() => setActive(i)}
                aria-label={`Show testimonial ${i + 1}`}
                className={`rounded-full transition-all ${i === active ? "w-8 h-2 bg-primary" : "w-2 h-2 bg-white/20 hover:bg-white/40"}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

// ── Clients Section ──
function ClientsSection() {
  const half = Math.ceil(CLIENTS.length / 2);
  const row1 = CLIENTS.slice(0, half);
  const row2 = CLIENTS.slice(half);

  return (
    <section className="py-16 border-y border-border/50 overflow-hidden">
      <div className="container">
        <Reveal>
          <p className="text-center text-muted-foreground text-sm font-label tracking-widest uppercase mb-10">
            Trusted by India's Leading Companies
          </p>
        </Reveal>

        {/* Mobile: two rows | Desktop: one row */}
        <div className="hidden sm:block relative overflow-hidden">
          <motion.div
            animate={{ x: ["0%", "-50%"] }}
            transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
            className="flex items-center"
          >
            {[...CLIENTS, ...CLIENTS, ...CLIENTS, ...CLIENTS].map((client, i) => (
              <div key={i} className="flex items-center justify-center shrink-0 h-16 px-6 transition-all duration-300">
                <img 
                  src={client.logo} 
                  alt={client.name}
                  className="max-h-full max-w-[140px] object-contain"
                  loading="lazy"
                />
              </div>
            ))}
          </motion.div>
        </div>

        {/* Mobile row 1 */}
        <div className="sm:hidden relative overflow-hidden mb-4">
          <motion.div
            animate={{ x: ["0%", "-50%"] }}
            transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
            className="flex items-center"
          >
            {[...row1, ...row1, ...row1, ...row1].map((client, i) => (
              <div key={i} className="flex items-center justify-center shrink-0 h-12 px-3">
                <img 
                  src={client.logo} 
                  alt={client.name}
                  className="max-h-full max-w-[80px] object-contain"
                  loading="lazy"
                />
              </div>
            ))}
          </motion.div>
        </div>

        {/* Mobile row 2 */}
        <div className="sm:hidden relative overflow-hidden">
          <motion.div
            animate={{ x: ["-50%", "0%"] }}
            transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
            className="flex items-center"
          >
            {[...row2, ...row2, ...row2, ...row2].map((client, i) => (
              <div key={i} className="flex items-center justify-center shrink-0 h-12 px-3">
                <img 
                  src={client.logo} 
                  alt={client.name}
                  className="max-h-full max-w-[80px] object-contain"
                  loading="lazy"
                />
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

// ── Why Choose Us ──
function WhyUsSection() {
  const features = [
    { icon: Award, title: "Expertise", desc: "33+ years of proven expertise in complete concrete flooring solutions across all sectors." },
    { icon: Palette, title: "Customization", desc: "In-house facilities to design and customize every flooring requirement to the customer's satisfaction." },
    { icon: CheckCircle, title: "Quality Assurance", desc: "ISO 9001:2015 certified processes with strict quality control at every stage of installation." },
    { icon: Zap, title: "Efficiency", desc: "Latest equipment and trained workforce ensure faster project completion with superior results." },
    { icon: DollarSign, title: "Competitive Pricing", desc: "Enhanced flooring solutions with international standards at reasonable pricing." },
    { icon: Smile, title: "Client Satisfaction", desc: "Our technology enables customers to get higher quality floors and increase their productivity." },
    { icon: Leaf, title: "Sustainability", desc: "Eco-friendly practices and sustainable flooring solutions that minimise environmental impact." },
    { icon: MessageCircle, title: "Clear Communication", desc: "Transparent project updates and direct customer engagement throughout every project." },
    { icon: Shield, title: "Warranty & Support", desc: "Comprehensive warranty coverage and ongoing support backed by our expert team." },
  ];

  return (
    <section className="py-24 bg-muted/20">
      <div className="container">
        <Reveal>
          <div className="text-center mb-16">
            <span className="section-label">Why Choose Us</span>
            <h2 className="text-[clamp(2rem,4vw,3rem)] font-display font-bold mt-3 mb-4">
              The Shubhaam <em className="not-italic text-primary">Advantage</em>
            </h2>
          </div>
        </Reveal>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((f, i) => (
            <Reveal key={f.title} delay={i * 0.07}>
              <motion.div
                whileHover={{ y: -4 }}
                className="bg-card rounded-2xl p-6 border border-border/50 group hover:border-primary/30 transition-all border-beam"
              >
                <div className="text-primary mb-4"><f.icon className="w-8 h-8" /></div>
                <h3 className="font-display text-lg font-bold mb-2 group-hover:text-primary transition-colors">{f.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{f.desc}</p>
              </motion.div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

// ── CTA Section ──
function CTASection() {
  return (
    <section className="py-24">
      <div className="container">
        <Reveal direction="scale">
          <div className="relative rounded-3xl overflow-hidden border border-primary/20 border-beam">
            <div className="absolute inset-0">
              
<img loading="lazy" src={assets.services.laserScreed} alt="CTA" className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/75 to-black/50" />
            </div>
            <div className="relative z-10 p-12 md:p-16 max-w-2xl">
              <span className="section-label text-primary mb-4 block">Ready to Start?</span>
              <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-4">
                Transform Your Space with
                <em className="not-italic text-primary"> World-Class Flooring</em>
              </h2>
              <p className="text-white/70 mb-8 leading-relaxed">
                Get a free site assessment and detailed quotation from India's most trusted concrete flooring specialists.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link href="/contact">
                  <button className="btn-gold-glow btn-press group flex items-center gap-2 bg-primary text-primary-foreground px-8 py-4 rounded-xl font-label font-bold text-sm tracking-wide hover:opacity-90 transition-all">
                    Get Free Quote <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </button>
                </Link>
                <a href="tel:+919821024267">
                  <button className="btn-press flex items-center gap-2 border border-white/30 text-white px-8 py-4 rounded-xl font-label font-bold text-sm tracking-wide hover:border-primary hover:text-primary transition-all">
                    <Phone className="w-4 h-4" /> +91 98210 24267
                  </button>
                </a>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

// ── Contact Info Strip ──
function ContactStrip() {
  return (
    <section className="py-12 bg-muted/30 border-t border-border/50">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            { icon: Phone, label: "Call Us", value: "+91 98210 24267", href: "tel:+919821024267" },
            { icon: Mail, label: "Email Us", value: "info@shubhameng.com", href: "mailto:info@shubhameng.com" },
            { icon: MapPin, label: "Visit Us", value: "Mumbai, Maharashtra, India", href: "/contact" },
          ].map((item) => (
            <Reveal key={item.label}>
              <a href={item.href} className="flex items-center gap-4 p-5 bg-card rounded-2xl border border-border/50 hover:border-primary/30 transition-all group">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <item.icon className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <div className="text-xs text-muted-foreground font-label tracking-wide">{item.label}</div>
                  <div className="font-display font-semibold group-hover:text-primary transition-colors">{item.value}</div>
                </div>
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

// ── Main Page ──
export default function Home() {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <StatsBar />
      <AboutSection />
      <ServicesSection />
      <ProductsSection />
      <WhyUsSection />
      <TestimonialsSection />
      <ClientsSection />
      <CTASection />
      <ContactStrip />
    </div>
  );
}
