import { useRef } from "react";
import { Link } from "wouter";
import { motion, useInView } from "framer-motion";
import { ArrowRight, CheckCircle, ChevronRight, Phone } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { assets } from "@/lib/assets";

const PRODUCTS = [
  {
    id: "floor-hardeners",
    title: "Floor Hardeners",
    badge: "Best Seller",
    img: assets.products.floorHardener,
    shortDesc: "Metallic and non-metallic floor hardeners for superior abrasion resistance.",
    fullDesc: `Floor hardeners are dry-shake materials applied to freshly placed concrete to improve surface hardness, abrasion resistance, and impact resistance. Shubhaam Concret offers both metallic and non-metallic floor hardeners suitable for a wide range of industrial applications.

Our metallic floor hardeners contain iron aggregate that creates an extremely hard, dense surface ideal for the most demanding industrial environments. Non-metallic hardeners use quartz or corundum aggregate for applications where magnetic interference must be avoided.`,
    specs: [
      { label: "Types", value: "Metallic, Non-metallic, Coloured" },
      { label: "Coverage", value: "3–5 kg/m²" },
      { label: "Compressive Strength", value: "Up to 80 MPa" },
      { label: "Abrasion Resistance", value: "10x standard concrete" },
      { label: "Colors Available", value: "Natural, Red, Green, Yellow, Grey" },
      { label: "Application", value: "Dry-shake on fresh concrete" },
    ],
    benefits: [
      "Dramatically increases surface hardness",
      "Reduces concrete dusting",
      "Improves abrasion and impact resistance",
      "Available in multiple colors",
      "Cost-effective surface treatment",
      "Extends floor lifespan significantly",
    ],
    applications: ["Warehouses", "Factories", "Parking Garages", "Loading Docks", "Aircraft Hangars", "Cold Storages"],
  },
  {
    id: "pp-fibres",
    title: "Polypropylene Structural Fibres",
    badge: "Popular",
    img: assets.products.ppFibres,
    shortDesc: "Structural PP fibres that reduce cracking and improve concrete toughness.",
    fullDesc: `Polypropylene (PP) structural fibres are synthetic fibres added to concrete mix to provide three-dimensional reinforcement throughout the concrete matrix. They are particularly effective at controlling plastic shrinkage cracking during the early stages of concrete curing.

Shubhaam Concret supplies high-quality monofilament and fibrillated PP fibres that meet IS and ASTM standards. Our fibres are compatible with all concrete mix designs and can be used in combination with steel reinforcement.`,
    specs: [
      { label: "Material", value: "100% Virgin Polypropylene" },
      { label: "Length", value: "6mm, 12mm, 18mm, 54mm" },
      { label: "Dosage", value: "0.6–1.8 kg/m³" },
      { label: "Tensile Strength", value: "≥ 450 MPa" },
      { label: "Melting Point", value: "165°C" },
      { label: "Standard", value: "IS 15477, ASTM C1116" },
    ],
    benefits: [
      "Controls plastic shrinkage cracking",
      "Improves impact and toughness",
      "Reduces permeability",
      "Enhances fire resistance",
      "Easy to mix and disperse",
      "No corrosion risk",
    ],
    applications: ["Industrial Floors", "Precast Elements", "Shotcrete", "Tunnels", "Bridges", "Slabs on Grade"],
  },
  {
    id: "steel-fiber",
    title: "Steel Fiber",
    badge: "Industrial Grade",
    img: assets.products.steelFiber,
    shortDesc: "High-tensile steel fibres for industrial floors and heavy-duty structures.",
    fullDesc: `Steel fibres are short, discrete fibres of steel that are added to concrete to improve its structural properties. When uniformly distributed throughout the concrete matrix, steel fibres provide three-dimensional reinforcement that significantly improves flexural strength, toughness, and impact resistance.

Shubhaam Concret supplies hooked-end, crimped, and straight steel fibres in various aspect ratios to suit different applications. Our steel fibres are manufactured from high-carbon steel wire and comply with ASTM A820 and EN 14889 standards.`,
    specs: [
      { label: "Types", value: "Hooked-end, Crimped, Straight" },
      { label: "Diameter", value: "0.5mm – 1.0mm" },
      { label: "Length", value: "25mm – 60mm" },
      { label: "Aspect Ratio", value: "40 – 80" },
      { label: "Tensile Strength", value: "≥ 1050 MPa" },
      { label: "Standard", value: "ASTM A820, EN 14889" },
    ],
    benefits: [
      "Increases flexural strength by 30-50%",
      "Improves impact and fatigue resistance",
      "Controls crack width and propagation",
      "Reduces or eliminates traditional rebar",
      "Faster construction time",
      "Suitable for heavy industrial loads",
    ],
    applications: ["Industrial Floors", "Tunnels & Mines", "Precast Segments", "Shotcrete", "Bridge Decks", "Blast-resistant Structures"],
  },
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

export default function Products() {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <div className="relative h-[380px] overflow-x-clip sm:overflow-hidden">
        <img src={assets.products.floorHardener} alt="Products" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-br from-black/85 via-black/65 to-black/40" />
        <div className="relative z-10 h-full flex flex-col justify-end container pb-12 pt-24">
          <div className="flex items-center gap-2 text-white/60 text-sm mb-3">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <ChevronRight className="w-3 h-3" />
            <span className="text-white">Products</span>
          </div>
          <span className="section-label text-primary mb-3 block">What We Supply</span>
          <h1 className="text-4xl md:text-6xl font-display font-bold text-white mb-3">
            Our <span className="text-gold-gradient">Products</span>
          </h1>
          <p className="text-white/75 text-lg max-w-2xl">
            Premium concrete admixtures and reinforcement materials for superior floor quality.
          </p>
        </div>
      </div>

      <div className="container py-16 space-y-20">
        {PRODUCTS.map((product, i) => (
          <Reveal key={product.id} delay={0.1}>
            <div id={product.id} className={`grid lg:grid-cols-2 gap-12 items-center ${i % 2 === 1 ? "lg:grid-flow-col-dense" : ""}`}>
              <div className={i % 2 === 1 ? "lg:col-start-2" : ""}>
                <div className="relative rounded-3xl overflow-hidden aspect-[4/3] shadow-2xl border-beam">
                  <img src={product.img} alt={product.title} className="w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                  <Badge className="absolute top-4 left-4 bg-primary text-primary-foreground border-0 font-label text-xs tracking-wide">
                    {product.badge}
                  </Badge>
                </div>
              </div>
              <div className={i % 2 === 1 ? "lg:col-start-1" : ""}>
                <span className="section-label">Product {String(i + 1).padStart(2, "0")}</span>
                <h2 className="text-3xl md:text-4xl font-display font-bold mt-3 mb-4">
                  {product.title}
                </h2>
                {product.fullDesc.split("\n\n").map((para, j) => (
                  <p key={j} className="text-muted-foreground leading-relaxed mb-4">{para}</p>
                ))}
                
                <div className="grid grid-cols-2 gap-3 mb-6">
                  {product.benefits.map((b) => (
                    <div key={b} className="flex items-center gap-2 text-sm">
                      <CheckCircle className="w-4 h-4 text-primary shrink-0" />
                      <span className="text-foreground/80">{b}</span>
                    </div>
                  ))}
                </div>

                <div className="bg-muted/30 rounded-2xl p-5 mb-6 border border-border/50">
                  <h4 className="font-label text-xs tracking-widest text-primary mb-3">Technical Specifications</h4>
                  <div className="grid grid-cols-2 gap-2">
                    {product.specs.map((spec) => (
                      <div key={spec.label} className="text-sm">
                        <span className="text-muted-foreground">{spec.label}: </span>
                        <span className="font-medium">{spec.value}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="flex gap-3">
                  <Link href="/contact">
                    <button className="btn-gold-glow btn-press flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-xl font-label font-bold text-sm tracking-wide hover:opacity-90 transition-all">
                      Request Quote <ArrowRight className="w-4 h-4" />
                    </button>
                  </Link>
                  <a href="tel:+919821024267">
                    <button className="btn-press flex items-center gap-2 border border-border px-6 py-3 rounded-xl font-label font-bold text-sm tracking-wide hover:border-primary hover:text-primary transition-all">
                      <Phone className="w-4 h-4" /> Call
                    </button>
                  </a>
                </div>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </div>
  );
}
