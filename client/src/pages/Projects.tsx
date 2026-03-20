import { useRef, useState } from "react";
import { Link } from "wouter";
import { motion, useInView } from "framer-motion";
import { ChevronRight, MapPin, Calendar, ArrowRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { assets } from "@/lib/assets";

const CATEGORIES = ["All", "Industrial", "Commercial", "Residential", "Infrastructure"];

const PROJECTS = [
  { id: 1, title: "Reliance Warehouse Complex", location: "Navi Mumbai", year: "2024", category: "Industrial", area: "1,20,000 sq ft", service: "Laser Screed VDF", img: assets.services.laserScreed },
  { id: 2, title: "Godrej Properties Society", location: "Pune", year: "2024", category: "Residential", area: "45,000 sq ft", service: "Society Repairing", img: assets.services.society },
  { id: 3, title: "Phoenix Mall Showroom", location: "Mumbai", year: "2023", category: "Commercial", area: "30,000 sq ft", service: "Polished Concrete", img: assets.services.polished },
  { id: 4, title: "Tata Motors Plant", location: "Pune", year: "2023", category: "Industrial", area: "2,50,000 sq ft", service: "Tremix VDF", img: assets.services.tremix },
  { id: 5, title: "JNPT Port Logistics Hub", location: "Navi Mumbai", year: "2023", category: "Infrastructure", area: "80,000 sq ft", service: "Thermoplastic Marking", img: assets.services.thermoplastic },
  { id: 6, title: "Hiranandani Gardens", location: "Powai, Mumbai", year: "2022", category: "Residential", area: "60,000 sq ft", service: "Stamped Concrete", img: assets.services.stamping },
  { id: 7, title: "Mahindra Logistics Depot", location: "Bhiwandi", year: "2022", category: "Industrial", area: "1,80,000 sq ft", service: "Laser Screed VDF", img: assets.services.laserScreed },
  { id: 8, title: "Lodha Palava Township", location: "Dombivli", year: "2022", category: "Residential", area: "90,000 sq ft", service: "Society Repairing", img: assets.services.society },
  { id: 9, title: "Oberoi Mall Renovation", location: "Goregaon, Mumbai", year: "2021", category: "Commercial", area: "25,000 sq ft", service: "Micro Topping", img: assets.services.microTopping },
];

function Reveal({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  return (
    <motion.div ref={ref} initial={{ opacity: 0, y: 30 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.7, delay }}>
      {children}
    </motion.div>
  );
}

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState("All");
  const filtered = activeCategory === "All" ? PROJECTS : PROJECTS.filter((p) => p.category === activeCategory);

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <div className="relative h-[380px] overflow-x-clip sm:overflow-hidden">
        <img src={assets.services.tremix} alt="Projects" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-br from-black/85 via-black/65 to-black/40" />
        <div className="relative z-10 h-full flex flex-col justify-end container pb-12 pt-24">
          <div className="flex items-center gap-2 text-white/60 text-sm mb-3">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <ChevronRight className="w-3 h-3" />
            <span className="text-white">Projects</span>
          </div>
          <span className="section-label text-primary mb-3 block">Our Portfolio</span>
          <h1 className="text-4xl md:text-6xl font-display font-bold text-white mb-3">
            Featured <span className="text-gold-gradient">Projects</span>
          </h1>
          <p className="text-white/75 text-lg max-w-2xl">
            1500+ completed projects across India — from warehouses to luxury residences.
          </p>
        </div>
      </div>

      <div className="container py-16">
        {/* Filter tabs */}
        <Reveal>
          <div className="flex flex-wrap gap-3 mb-12 justify-center">
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-5 py-2 rounded-full font-label text-sm font-bold tracking-wide transition-all ${
                  activeCategory === cat
                    ? "bg-primary text-primary-foreground shadow-lg"
                    : "border border-border hover:border-primary hover:text-primary"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </Reveal>

        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {filtered.map((project, i) => (
            <Reveal key={project.id} delay={i * 0.06}>
              <motion.div layout className="group bg-card rounded-2xl overflow-hidden border border-border/50 service-card-hover border-beam">
                <div className="gallery-hover h-52">
                  <img src={project.img} alt={project.title} className="w-full h-full object-cover" />
                </div>
                <div className="p-5">
                  <div className="flex items-center gap-2 mb-2">
                    <Badge variant="secondary" className="text-xs font-label">{project.category}</Badge>
                    <Badge className="text-xs font-label bg-primary/10 text-primary border-0">{project.service}</Badge>
                  </div>
                  <h3 className="font-display text-lg font-bold mb-2 group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <div className="flex items-center gap-4 text-sm text-muted-foreground">
                    <span className="flex items-center gap-1"><MapPin className="w-3.5 h-3.5" /> {project.location}</span>
                    <span className="flex items-center gap-1"><Calendar className="w-3.5 h-3.5" /> {project.year}</span>
                  </div>
                  <div className="mt-2 text-sm text-muted-foreground">Area: <span className="text-foreground font-medium">{project.area}</span></div>
                </div>
              </motion.div>
            </Reveal>
          ))}
        </motion.div>

        <Reveal delay={0.3}>
          <div className="mt-16 text-center bg-card rounded-3xl p-12 border border-primary/20 border-beam">
            <h2 className="text-3xl font-display font-bold mb-4">Start Your Project</h2>
            <p className="text-muted-foreground mb-6 max-w-xl mx-auto">
              Join 1500+ satisfied clients who trust Shubhaam Concret for their flooring needs.
            </p>
            <Link href="/contact">
              <button className="btn-gold-glow btn-press inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-4 rounded-xl font-label font-bold text-sm tracking-wide hover:opacity-90 transition-all">
                Get Free Quote <ArrowRight className="w-4 h-4" />
              </button>
            </Link>
          </div>
        </Reveal>
      </div>
    </div>
  );
}
