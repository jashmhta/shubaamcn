import { useState, useRef } from "react";
import { Link } from "wouter";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, CheckCircle2, Phone, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { assets } from "@/lib/assets";

const SERVICES = [
  {
    id: "tremix",
    title: "Tremix (VDF) Flooring",
    shortDesc: "Vacuum Dewatered Flooring for superior strength",
    fullDesc: "Tremix VDF (Vacuum Dewatered Flooring) is a specialised concrete flooring system that removes excess water from freshly laid concrete using vacuum dewatering equipment. This process results in a floor with significantly higher compressive strength, reduced water-cement ratio, and superior surface hardness. Ideal for warehouses, factories, parking areas, and heavy-traffic industrial zones.",
    img: assets.services.tremix,
    features: [
      "Higher compressive strength (up to 40% more than conventional concrete)",
      "Reduced water-cement ratio for durability",
      "Superior surface hardness and abrasion resistance",
      "Suitable for heavy industrial loads",
      "Faster construction with minimal downtime",
    ],
    applications: ["Warehouses", "Factories", "Parking Areas", "Logistics Hubs", "Cold Storages"],
  },
  {
    id: "polished",
    title: "Polished Concrete",
    shortDesc: "Mirror-finish floors combining aesthetics and durability",
    fullDesc: "Polished concrete transforms ordinary concrete slabs into high-gloss, mirror-like floors through a multi-step grinding and polishing process using diamond-tipped tools. The result is a stunning, low-maintenance floor that reflects light beautifully and enhances any space. Available in various sheen levels from satin to high-gloss.",
    img: assets.services.polished,
    features: [
      "High-gloss mirror finish options",
      "Extremely low maintenance requirements",
      "Dust-free and hygienic surface",
      "Long-lasting with minimal upkeep",
      "Eco-friendly — no coatings or adhesives",
    ],
    applications: ["Retail Showrooms", "Hotels", "Offices", "Hospitals", "Residential Villas"],
  },
  {
    id: "laser-screed",
    title: "Laser Screed",
    shortDesc: "Laser-guided precision for perfectly flat floors",
    fullDesc: "Laser Screed technology uses laser-guided equipment to achieve extremely flat and level concrete floors with tolerances of ±3mm over 3 meters. This technology is essential for modern warehouses, logistics centres, and manufacturing facilities where flat floors are critical for the safe operation of forklifts and automated guided vehicles (AGVs).",
    img: assets.services.laserScreed,
    features: [
      "Flatness tolerance ±3mm over 3 metres",
      "Ideal for AGV and forklift operations",
      "Faster placement — up to 3,000 sq.m. per day",
      "Consistent quality across large areas",
      "Reduces long-term maintenance costs",
    ],
    applications: ["Logistics Warehouses", "Manufacturing Plants", "Cold Storages", "Data Centres", "Distribution Centres"],
  },
  {
    id: "stamping",
    title: "Stamped Concrete",
    shortDesc: "Decorative patterns with concrete durability",
    fullDesc: "Stamped concrete is a decorative technique where patterns are pressed into freshly poured concrete to replicate the look of natural stone, brick, slate, or tile. Combined with integral or surface-applied colour, stamped concrete creates beautiful, durable outdoor and indoor surfaces at a fraction of the cost of natural materials.",
    img: assets.services.stamping,
    features: [
      "Wide range of patterns and textures",
      "Custom colour options available",
      "Durable and weather-resistant",
      "Cost-effective alternative to natural stone",
      "Slip-resistant surface options",
    ],
    applications: ["Driveways", "Patios", "Pool Decks", "Garden Paths", "Commercial Plazas"],
  },
  {
    id: "society",
    title: "Society Repairing Work",
    shortDesc: "Complete concrete repair for residential societies",
    fullDesc: "Shubhaam Concret provides comprehensive concrete repair and restoration services for residential societies, housing complexes, and commercial buildings. Our expert team diagnoses structural issues, applies the appropriate repair methodology, and restores concrete elements to their original strength and appearance.",
    img: assets.services.society,
    features: [
      "Structural crack repair and sealing",
      "Spalling concrete restoration",
      "Waterproofing treatment",
      "Surface grinding and leveling",
      "Minimal disruption to residents",
    ],
    applications: ["Housing Societies", "Apartment Complexes", "Commercial Buildings", "Basements", "Parking Structures"],
  },
  {
    id: "thermoplastic",
    title: "Thermoplastic Marking",
    shortDesc: "Durable road and parking markings",
    fullDesc: "Thermoplastic road marking uses hot-applied thermoplastic paint that bonds permanently to road surfaces. This material is significantly more durable than conventional paint, offering excellent retroreflectivity, skid resistance, and longevity. Used extensively for road markings, parking lot layouts, safety zones, and pedestrian crossings.",
    img: assets.services.thermoplastic,
    features: [
      "5–7 year lifespan vs 1–2 years for paint",
      "High retroreflectivity for night visibility",
      "Excellent skid resistance",
      "Fast application and quick drying",
      "Available in all standard colours",
    ],
    applications: ["Roads & Highways", "Parking Lots", "Airports", "Industrial Zones", "Sports Courts"],
  },
  {
    id: "micro-topping",
    title: "Micro-Topping Flooring",
    shortDesc: "Ultra-thin decorative concrete overlay for existing floors",
    fullDesc: "Micro-topping (also known as micro-cement or concrete overlay) is an ultra-thin (2-3mm) decorative cement-based coating applied over existing floors, walls, and furniture. It creates a seamless, contemporary look without removing existing flooring. Ideal for renovations, micro-topping can be applied over tiles, wood, marble, and existing concrete.",
    img: assets.services.microTopping,
    features: [
      "Ultra-thin application (2–3mm)",
      "Applied over existing surfaces",
      "Seamless, grout-free finish",
      "Unlimited colour options",
      "Suitable for wet areas",
    ],
    applications: ["Residential Floors", "Bathrooms", "Hotels", "Restaurants", "Retail Stores"],
  },
  {
    id: "truss-screed",
    title: "Truss Screed Flooring",
    shortDesc: "Mechanical vibrated screed for large area concrete flooring",
    fullDesc: "Truss Screed flooring uses a mechanically vibrated screed beam mounted on rails to consolidate and level concrete over large floor areas. The vibration ensures thorough compaction and eliminates voids. While not achieving super-flat tolerances of laser screed, truss screed delivers excellent results for general industrial and commercial floors.",
    img: assets.services.trussScreed,
    features: [
      "More economical than laser screed",
      "Excellent concrete consolidation",
      "Suitable for large areas",
      "Good flatness for standard industrial use",
      "Compatible with VDF/Tremix process",
    ],
    applications: ["General Warehouses", "Manufacturing", "Commercial Buildings", "Parking Areas", "Industrial Floors"],
  },
  {
    id: "innovative-decorative",
    title: "Innovative & Decorative Concrete",
    shortDesc: "Custom decorative concrete solutions for unique spaces",
    fullDesc: "Innovative and decorative concrete flooring combines artistic design with structural durability. Using techniques like staining, scoring, stencilling, and custom aggregates, we create unique, one-of-a-kind floors that transform ordinary spaces into extraordinary environments. Perfect for commercial showrooms, lobbies, and premium residential projects.",
    img: assets.services.polished,
    features: [
      "Custom designs and patterns",
      "Acid staining and dyes",
      "Embedded logos and graphics",
      "Metallic epoxy finishes",
      "Bespoke aggregate exposure",
    ],
    applications: ["Hotel Lobbies", "Showrooms", "Corporate Offices", "Residential Villas", "Retail Spaces"],
  },
];

function FadeUp({ children, delay = 0, className = "" }: { children: React.ReactNode; delay?: number; className?: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export default function Services() {
  const [activeService, setActiveService] = useState<string | null>(null);
  const detailRef = useRef<HTMLDivElement>(null);

  const openService = (id: string) => {
    setActiveService(prev => prev === id ? null : id);
    setTimeout(() => detailRef.current?.scrollIntoView({ behavior: "smooth", block: "start" }), 100);
  };

  const active = SERVICES.find(s => s.id === activeService);

  return (
    <div className="min-h-screen bg-background pb-20">
      {/* Hero */}
      <div className="relative h-[380px] md:h-[420px] overflow-x-clip sm:overflow-hidden">
        
<img loading="lazy" src={assets.services.polished} alt="Services" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-br from-black/85 via-black/65 to-black/40" />
        <div className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage: "repeating-linear-gradient(45deg, currentColor 0, currentColor 1px, transparent 0, transparent 50%)",
            backgroundSize: "20px 20px",
          }}
        />
        <div className="relative z-10 h-full flex flex-col justify-end container pb-12 pt-24">
          <div className="flex items-center gap-2 text-white/60 text-sm mb-3">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <ChevronRight className="w-3 h-3" />
            <span className="text-white">Services</span>
          </div>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-primary text-xs font-semibold uppercase tracking-[0.25em] mb-3"
            style={{ fontFamily: '"Cinzel", serif' }}
          >
            What We Offer
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-4xl md:text-5xl font-display font-bold text-white leading-tight"
          >
            Our <em className="text-gold-gradient not-italic">Specialised</em> Services
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-white/75 mt-4 max-w-xl leading-relaxed"
          >
            From Tremix VDF to Polished Concrete — comprehensive flooring solutions for every need.
          </motion.p>
        </div>
      </div>

      {/* Services grid */}
      <div className="container py-16 md:py-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVICES.map((svc, i) => (
            <FadeUp key={svc.id} delay={i * 0.07}>
              <motion.div
                whileHover={{ y: -6 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className={`group relative rounded-2xl overflow-hidden border cursor-pointer transition-all duration-300 ${
                  activeService === svc.id
                    ? "border-primary shadow-lg ring-2 ring-primary/20"
                    : "border-border hover:border-primary/40 hover:shadow-md"
                }`}
                onClick={() => openService(svc.id)}
              >
                <div className="relative h-52 overflow-x-clip sm:overflow-hidden">
                  <img
                    src={svc.img}
                    alt={svc.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                  <div className="absolute top-3 left-3 w-8 h-8 rounded-full bg-primary/90 flex items-center justify-center">
                    <span className="text-primary-foreground text-xs font-bold">{String(i + 1).padStart(2, "0")}</span>
                  </div>
                  {activeService === svc.id && (
                    <div className="absolute top-3 right-3 w-7 h-7 rounded-full bg-primary flex items-center justify-center">
                      <CheckCircle2 className="w-4 h-4 text-primary-foreground" />
                    </div>
                  )}
                </div>
                <div className="p-5 bg-card">
                  <h3 className="font-semibold text-lg text-foreground mb-1.5 group-hover:text-primary transition-colors"
                    style={{ fontFamily: '"Cormorant Garamond", serif' }}>
                    {svc.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-3">{svc.shortDesc}</p>
                  <span className="inline-flex items-center gap-1.5 text-sm font-medium text-primary">
                    {activeService === svc.id ? "Hide Details" : "Learn More"}
                    <ArrowRight className="w-3.5 h-3.5" />
                  </span>
                </div>
              </motion.div>
            </FadeUp>
          ))}
        </div>

        {/* Service Detail Panel */}
        <div ref={detailRef}>
          <AnimatePresence>
            {active && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                className="mt-8 overflow-x-clip sm:overflow-hidden"
              >
                <div className="rounded-2xl border border-primary/20 bg-card overflow-hidden shadow-lg">
                  <div className="grid grid-cols-1 lg:grid-cols-2">
                    <div className="relative h-64 lg:h-auto min-h-[300px] overflow-x-clip sm:overflow-hidden">
                      
<img loading="lazy" src={active.img} alt={active.title} className="w-full h-full object-cover" />
                    </div>
                    <div className="p-6 md:p-8 lg:p-10">
                      <p className="section-label mb-2">Service Detail</p>
                      <h2 className="text-2xl md:text-3xl font-semibold text-foreground mb-1"
                        style={{ fontFamily: '"Cormorant Garamond", serif' }}>
                        {active.title}
                      </h2>
                      <div className="gold-divider mb-4" />
                      <p className="text-muted-foreground leading-relaxed mb-6 text-sm md:text-base">{active.fullDesc}</p>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
                        <div>
                          <p className="text-xs font-semibold uppercase tracking-widest text-primary mb-3" style={{ fontFamily: '"Cinzel", serif' }}>
                            Key Features
                          </p>
                          <ul className="space-y-2">
                            {active.features.map(f => (
                              <li key={f} className="flex items-start gap-2 text-sm text-foreground/80">
                                <CheckCircle2 className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                                {f}
                              </li>
                            ))}
                          </ul>
                        </div>
                        <div>
                          <p className="text-xs font-semibold uppercase tracking-widest text-primary mb-3" style={{ fontFamily: '"Cinzel", serif' }}>
                            Applications
                          </p>
                          <div className="flex flex-wrap gap-2">
                            {active.applications.map(a => (
                              <span key={a} className="px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-medium border border-primary/20">
                                {a}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                      <div className="flex flex-wrap gap-3">
                        <Link href="/contact">
                          <Button className="bg-primary text-primary-foreground hover:opacity-90 rounded-full px-6">
                            Get Free Estimate <ArrowRight className="ml-2 w-4 h-4" />
                          </Button>
                        </Link>
                        <a href="tel:+919821024267">
                          <Button variant="outline" className="rounded-full px-6 border-primary/30 text-primary hover:bg-primary/5">
                            <Phone className="mr-2 w-4 h-4" />
                            Call Now
                          </Button>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>

      {/* CTA */}
      <div className="container">
        <FadeUp>
          <div className="rounded-2xl bg-primary/5 border border-primary/15 p-8 md:p-12 text-center">
            <p className="section-label mb-3">Ready to Begin?</p>
            <h2 className="text-2xl md:text-3xl font-semibold text-foreground mb-4" style={{ fontFamily: '"Cormorant Garamond", serif' }}>
              Let's Discuss Your Project
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto mb-6 leading-relaxed">
              Our experts are ready to assess your requirements and provide a detailed proposal tailored to your specific needs.
            </p>
            <Link href="/contact">
              <Button size="lg" className="bg-primary text-primary-foreground hover:opacity-90 rounded-full px-10">
                Contact Us Today <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </Link>
          </div>
        </FadeUp>
      </div>
    </div>
  );
}
