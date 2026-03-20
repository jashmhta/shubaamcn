import { useRef } from "react";
import { useParams, Link } from "wouter";
import { motion, useInView } from "framer-motion";
import { ArrowLeft, ArrowRight, CheckCircle, Phone, ChevronRight, Settings, Target, Sparkles, Building, Construction, Route, Palette, Wrench } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { assets } from "@/lib/assets";

const IconComponents = {
  Settings, Target, Sparkles, Building, Construction, Route, Palette, Wrench
};

function Reveal({ children, delay = 0, className = "" }: { children: React.ReactNode; delay?: number; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });
  return (
    <motion.div ref={ref} initial={{ opacity: 0, y: 30 }} animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay }} className={className}>
      {children}
    </motion.div>
  );
}

type ServiceData = {
  title: string; subtitle: string; img: string; tag: string; icon: string;
  intro: string; description: string[]; benefits: string[]; applications: string[];
  process: { step: string; title: string; desc: string }[];
  specs: { label: string; value: string }[];
};

const SERVICES: Record<string, ServiceData> = {
  tremix: {
    title: "Tremix (VDF) Flooring", subtitle: "Vacuum Dewatered Flooring",
    img: assets.services.tremix, tag: "Most Popular", icon: "Settings",
    intro: "Tremix VDF (Vacuum Dewatered Flooring) is the gold standard for industrial and commercial concrete floors, delivering superior strength, flatness, and durability.",
    description: [
      "Tremix VDF flooring is a highly specialized concrete floor construction technique that uses vacuum dewatering to remove excess water from freshly laid concrete. This process results in a denser, stronger concrete surface with significantly reduced water-cement ratio.",
      "The Tremix system uses suction mats and vacuum pumps to extract approximately 15–25% of the mixing water from the concrete surface, increasing the compressive strength by up to 70% compared to conventional concrete floors.",
      "Shubhaam Concret has been executing Tremix VDF floors for over 33 years, serving warehouses, factories, cold storages, logistics parks, and commercial spaces across India.",
    ],
    benefits: ["Compressive strength up to 70% higher than conventional concrete","Superior surface hardness and abrasion resistance","Excellent flatness — ideal for racking systems and AGVs","Reduced shrinkage and cracking","Long service life with minimal maintenance","Suitable for heavy forklift and vehicle traffic","Cost-effective for large areas (10,000+ sq ft)","Can be combined with floor hardeners"],
    applications: ["Warehouses & Logistics Parks","Manufacturing Facilities","Cold Storage Facilities","Automobile Showrooms","Retail & Commercial Spaces","Airport Hangars","Food Processing Plants","Pharmaceutical Facilities"],
    process: [
      { step: "01", title: "Site Assessment", desc: "Our engineers assess the subgrade, soil bearing capacity, and project requirements to design the optimal floor slab." },
      { step: "02", title: "Subgrade Preparation", desc: "Proper compaction, leveling, and DPC installation to ensure a stable base." },
      { step: "03", title: "Concrete Placement", desc: "High-quality concrete is placed and spread uniformly across the prepared subgrade." },
      { step: "04", title: "Vacuum Dewatering", desc: "Suction mats are placed on the fresh concrete and connected to vacuum pumps to extract excess water." },
      { step: "05", title: "Power Floating", desc: "Mechanical power trowels achieve a smooth, dense surface with the required flatness tolerance." },
      { step: "06", title: "Curing & Sealing", desc: "Proper curing compound application, followed by joint cutting and sealing." },
    ],
    specs: [{ label: "Compressive Strength", value: "M25 to M40" },{ label: "Surface Hardness", value: "BPN 60+" },{ label: "Flatness Tolerance", value: "FF 35 / FL 25" },{ label: "Minimum Thickness", value: "100mm" },{ label: "Joint Spacing", value: "4.5m x 4.5m" },{ label: "Curing Period", value: "28 days" }],
  },
  "laser-screed": {
    title: "Laser Screed Flooring", subtitle: "Precision Laser-Guided Leveling",
    img: assets.services.laserScreed, tag: "High-Tech", icon: "Target",
    intro: "Laser Screed technology delivers the flattest, most precisely leveled concrete floors achievable — essential for modern automated warehouses and logistics facilities.",
    description: [
      "Laser Screed flooring uses a laser-guided, self-propelled machine that automatically levels concrete to within millimeter tolerances. The machine reads laser signals to maintain a perfectly flat plane across large areas.",
      "This technology is particularly critical for facilities using Automated Guided Vehicles (AGVs), Very Narrow Aisle (VNA) forklifts, and high-bay racking systems, where floor flatness directly impacts operational efficiency and safety.",
      "Shubhaam Concret operates state-of-the-art Somero Laser Screed equipment, capable of achieving Super Flat (F-min) floor specifications required by the most demanding logistics and e-commerce operators.",
    ],
    benefits: ["Achieves Super Flat (F-min) floor specifications","Ideal for AGV and VNA forklift operations","Significantly faster than traditional methods","Consistent quality over large areas","Reduced labor costs for large projects","Minimizes concrete waste","Compatible with all concrete mixes","Measurable flatness compliance reports"],
    applications: ["E-Commerce Fulfillment Centers","Automated Warehouses (AGV/VNA)","High-Bay Racking Facilities","Cold Chain Logistics","Pharmaceutical Warehouses","Automotive Logistics Centers","Data Center Raised Floors","Airport Cargo Terminals"],
    process: [
      { step: "01", title: "Flatness Specification", desc: "Define required FF/FL or F-min values based on racking system and vehicle requirements." },
      { step: "02", title: "Laser Setup", desc: "Rotating laser transmitter is set up to create a precise reference plane across the entire floor area." },
      { step: "03", title: "Concrete Placement", desc: "Concrete is placed ahead of the laser screed machine in a continuous operation." },
      { step: "04", title: "Laser Screeding", desc: "The self-propelled machine automatically adjusts the screed blade to the laser reference." },
      { step: "05", title: "Power Troweling", desc: "Multiple passes with ride-on power trowels achieve the required surface finish and density." },
      { step: "06", title: "Flatness Testing", desc: "F-number measurements are taken using a Dipstick or F-meter to verify compliance." },
    ],
    specs: [{ label: "Flatness (FF)", value: "FF 50–100+" },{ label: "Levelness (FL)", value: "FL 35–50+" },{ label: "Productivity", value: "Up to 2,000 sq m/day" },{ label: "Minimum Area", value: "2,000 sq m" },{ label: "Equipment", value: "Somero S-485" },{ label: "Tolerance", value: "±3mm over 3m" }],
  },
  polished: {
    title: "Polished Concrete", subtitle: "Diamond-Ground Mirror Finish",
    img: assets.services.polished, tag: "Premium", icon: "Sparkles",
    intro: "Polished concrete transforms ordinary concrete floors into stunning, mirror-like surfaces that combine beauty with exceptional durability and easy maintenance.",
    description: [
      "Polished concrete is achieved through a multi-step process of grinding, honing, and polishing using progressively finer diamond abrasives. The result is a high-gloss, reflective surface that enhances any commercial or residential space.",
      "Unlike coatings or overlays, polished concrete is an integral part of the slab itself — it cannot peel, chip, or delaminate. The surface becomes harder and more resistant to abrasion with each polishing pass.",
      "Shubhaam Concret offers polished concrete in various sheen levels from matte (400 grit) to high-gloss (3000 grit), with options for decorative aggregates, dyes, and stains.",
    ],
    benefits: ["Stunning high-gloss, mirror-like finish","Extremely durable — lasts decades","Easy to clean and maintain","Improves light reflectivity","No coatings to peel or replace","Resistant to stains with densifier","Environmentally friendly","Can be applied to new or existing concrete"],
    applications: ["Retail Showrooms & Malls","Hotels & Hospitality","Corporate Offices","Restaurants & Cafes","Residential Homes & Villas","Museums & Galleries","Automobile Showrooms","Healthcare Facilities"],
    process: [
      { step: "01", title: "Surface Preparation", desc: "Existing coatings, adhesives, and surface contaminants are removed. Cracks and joints are repaired." },
      { step: "02", title: "Coarse Grinding (30–50 grit)", desc: "Metal-bond diamonds remove surface irregularities and expose the concrete aggregate." },
      { step: "03", title: "Medium Grinding (100–200 grit)", desc: "Resin-bond diamonds refine the surface and remove scratches from the previous step." },
      { step: "04", title: "Densifier Application", desc: "Chemical densifier penetrates the concrete, reacting to harden and dust-proof the surface." },
      { step: "05", title: "Fine Polishing (400–1500 grit)", desc: "Progressive polishing builds the desired sheen level from satin to high-gloss." },
      { step: "06", title: "Guard/Sealer Application", desc: "Penetrating guard sealer is applied to enhance stain resistance and protect the polished surface." },
    ],
    specs: [{ label: "Sheen Levels", value: "Matte / Satin / Semi-Gloss / High-Gloss" },{ label: "Grit Range", value: "30 to 3000 grit" },{ label: "Gloss Reading", value: "Up to 90 GU" },{ label: "Min Slab Age", value: "28 days" },{ label: "Min Thickness", value: "75mm" },{ label: "Maintenance", value: "Neutral pH cleaner" }],
  },
  stamping: {
    title: "Stamped Concrete", subtitle: "Decorative Pattern Flooring",
    img: assets.services.stamping, tag: "Decorative", icon: "Building",
    intro: "Stamped concrete replicates the look of natural stone, brick, slate, and tile at a fraction of the cost, creating stunning decorative surfaces for outdoor and indoor spaces.",
    description: [
      "Stamped concrete uses textured rubber stamps pressed into freshly placed concrete to create patterns that mimic natural materials. Combined with integral color, release agents, and stains, the results are virtually indistinguishable from the real thing.",
      "The technique is ideal for driveways, pool decks, patios, walkways, and interior floors where aesthetics are as important as durability. Stamped concrete is more cost-effective than natural stone while offering greater design flexibility.",
      "Shubhaam Concret maintains an extensive library of stamp patterns — from cobblestone and flagstone to wood plank and geometric designs.",
    ],
    benefits: ["Mimics natural stone, brick, slate, and wood","More affordable than natural materials","Unlimited color and pattern combinations","Durable and weather-resistant","Slip-resistant textures available","Low maintenance","Can be applied to new or existing concrete","Ideal for outdoor and indoor applications"],
    applications: ["Driveways & Pathways","Pool Decks & Surrounds","Patios & Terraces","Garden Walkways","Commercial Plazas","Hotel Lobbies","Residential Courtyards","Theme Parks & Resorts"],
    process: [
      { step: "01", title: "Color Selection", desc: "Integral color is added to the concrete mix, and release agent color is selected for depth and contrast." },
      { step: "02", title: "Concrete Placement", desc: "Colored concrete is placed and screeded to the required thickness and level." },
      { step: "03", title: "Release Agent Application", desc: "Powder or liquid release agent is broadcast over the surface to prevent stamps from sticking." },
      { step: "04", title: "Stamping", desc: "Rubber stamp mats are pressed into the concrete while still workable, creating the desired pattern." },
      { step: "05", title: "Washing & Detailing", desc: "After curing, the surface is washed to remove excess release agent, revealing the two-tone effect." },
      { step: "06", title: "Sealing", desc: "A high-quality concrete sealer is applied to protect the surface and enhance the color." },
    ],
    specs: [{ label: "Patterns Available", value: "50+" },{ label: "Color Options", value: "30+ integral colors" },{ label: "Min Thickness", value: "100mm" },{ label: "Compressive Strength", value: "M25 minimum" },{ label: "Sealer Recoat", value: "Every 2–3 years" },{ label: "Slip Resistance", value: "R11 available" }],
  },
  society: {
    title: "Society Repairing Work", subtitle: "Residential Compound Restoration",
    img: assets.services.society, tag: "Repair", icon: "Construction",
    intro: "Comprehensive concrete repair and restoration services for residential societies, apartment complexes, and commercial compounds — restoring safety and aesthetics.",
    description: [
      "Residential societies and apartment complexes face constant wear and tear on their concrete surfaces — from cracked driveways and spalling pathways to damaged parking areas and compound floors.",
      "Our society repair services cover everything from minor crack filling to complete resurfacing of large compound areas. We use the latest repair mortars, micro-topping systems, and protective coatings.",
      "With 33+ years of experience in Mumbai's residential market, we understand the unique challenges of working in occupied societies — minimizing disruption and completing projects within agreed timelines.",
    ],
    benefits: ["Restores structural integrity","Eliminates safety hazards","Improves aesthetics","Prevents further deterioration","Waterproofing options available","Minimal disruption to residents","Phased execution for large societies","Competitive pricing"],
    applications: ["Apartment Society Compounds","Parking Deck Restoration","Driveway Repair & Resurfacing","Pathway & Walkway Repair","Terrace Waterproofing","Basement Waterproofing","Staircase Repair","Commercial Complex Compounds"],
    process: [
      { step: "01", title: "Condition Assessment", desc: "Detailed inspection of all concrete surfaces to identify cracks, spalling, delamination, and structural issues." },
      { step: "02", title: "Scope & Quotation", desc: "Detailed scope of work and transparent quotation submitted to the society committee." },
      { step: "03", title: "Surface Preparation", desc: "Removal of damaged concrete, cleaning of cracks, and preparation of surfaces for repair." },
      { step: "04", title: "Structural Repairs", desc: "Application of repair mortars, crack injection, and structural patching as required." },
      { step: "05", title: "Resurfacing", desc: "Application of micro-topping, overlay, or new concrete layer to restore the surface." },
      { step: "06", title: "Protective Coating", desc: "Application of sealers, coatings, or waterproofing membranes for long-term protection." },
    ],
    specs: [{ label: "Repair Mortar", value: "Polymer-modified" },{ label: "Crack Width", value: "Up to 10mm" },{ label: "Overlay Thickness", value: "3–50mm" },{ label: "Bond Strength", value: ">1.5 MPa" },{ label: "Waterproofing", value: "Crystalline / Membrane" },{ label: "Warranty", value: "1–5 years" }],
  },
  thermoplastic: {
    title: "Thermoplastic Road Marking", subtitle: "Durable Traffic & Parking Markings",
    img: assets.services.thermoplastic, tag: "Marking", icon: "Route",
    intro: "Thermoplastic road marking provides highly durable, retroreflective markings for roads, parking areas, warehouses, and industrial facilities — far outlasting conventional paint.",
    description: [
      "Thermoplastic marking material is a hot-applied compound that bonds chemically to the road surface, creating markings that are 4–5 times more durable than conventional road paint. The material contains glass beads for retroreflectivity.",
      "Shubhaam Concret provides thermoplastic marking services for a wide range of applications — from national highway markings to warehouse floor safety zones, parking lot layouts, and industrial facility markings.",
      "Our team uses professional thermoplastic application equipment including road marking machines, hand applicators, and preformed thermoplastic symbols for precise, consistent results.",
    ],
    benefits: ["4–5x more durable than paint","Excellent retroreflectivity","Fast application and quick drying","Resistant to traffic wear","Available in all standard colors","Preformed symbols available","Compliant with IRC and MORTH standards","Suitable for roads, parking, and industrial floors"],
    applications: ["National & State Highways","Urban Roads & Intersections","Parking Lots & Multi-Level Parking","Warehouse Floor Marking","Industrial Safety Zones","Airport Aprons & Taxiways","School & Hospital Zones","Sports Courts & Playgrounds"],
    process: [
      { step: "01", title: "Surface Preparation", desc: "Road surface is cleaned, dried, and primed for optimal adhesion of thermoplastic material." },
      { step: "02", title: "Layout & Marking", desc: "Marking layout is measured, snapped, and marked as per design drawings and standards." },
      { step: "03", title: "Primer Application", desc: "Bituminous or epoxy primer is applied to the marked areas to ensure strong bond." },
      { step: "04", title: "Thermoplastic Application", desc: "Hot thermoplastic material (180–200°C) is applied using screed box or spray machine." },
      { step: "05", title: "Glass Bead Embedding", desc: "Retroreflective glass beads are dropped onto the hot thermoplastic surface for night visibility." },
      { step: "06", title: "Quality Check", desc: "Retroreflectivity, thickness, and adhesion are tested to ensure compliance with specifications." },
    ],
    specs: [{ label: "Material Type", value: "Hot-applied thermoplastic" },{ label: "Application Temp", value: "180–200°C" },{ label: "Thickness", value: "3–6mm" },{ label: "Retroreflectivity", value: ">150 mcd/m²/lux" },{ label: "Drying Time", value: "3–5 minutes" },{ label: "Service Life", value: "3–7 years" }],
  },
  "micro-topping": {
    title: "Micro-Topping / Overlay", subtitle: "Ultra-Thin Decorative Concrete Overlay",
    img: assets.services.microTopping, tag: "Decorative", icon: "Palette",
    intro: "Micro-topping is an ultra-thin (2–3mm) decorative concrete overlay that transforms any surface with a seamless, contemporary look — without removing existing flooring.",
    description: [
      "Micro-topping (also known as micro-cement or concrete overlay) is a cement-based decorative coating applied in very thin layers over existing floors, walls, and even furniture. The result is a seamless, continuous surface with a distinctive, artisanal appearance.",
      "Unlike traditional concrete, micro-topping can be applied over tiles, wood, marble, and existing concrete without demolition. This makes it ideal for renovation projects where speed and minimal disruption are essential.",
      "Shubhaam Concret's micro-topping system offers unlimited color options, various textures (smooth, brushed, troweled), and can be used on floors, walls, countertops, and bathroom surfaces.",
    ],
    benefits: ["Ultra-thin (2–3mm)","Can be applied over existing surfaces","Seamless, grout-free appearance","Unlimited color and texture options","Suitable for wet areas","Highly durable with proper sealing","Easy to clean and maintain","Unique, artisanal aesthetic"],
    applications: ["Residential Floors & Walls","Bathroom & Kitchen Surfaces","Hotel Rooms & Suites","Restaurant & Café Interiors","Retail Store Fit-Outs","Office Renovations","Countertops & Vanities","Staircase Surfaces"],
    process: [
      { step: "01", title: "Surface Assessment", desc: "Existing surface is inspected for cracks, movement, and adhesion issues." },
      { step: "02", title: "Priming", desc: "Primer coat is applied to improve adhesion and prevent moisture migration." },
      { step: "03", title: "Base Coat", desc: "First micro-topping layer is applied with a steel trowel, embedding fiberglass mesh at corners." },
      { step: "04", title: "Finish Coat", desc: "Second coat is applied with a finer trowel to achieve the desired texture and appearance." },
      { step: "05", title: "Sanding", desc: "Fine sanding between and after coats ensures a smooth, consistent surface." },
      { step: "06", title: "Sealing", desc: "2–3 coats of polyurethane or epoxy sealer are applied to protect the surface." },
    ],
    specs: [{ label: "Thickness", value: "2–3mm total" },{ label: "Compressive Strength", value: ">25 MPa" },{ label: "Bond Strength", value: ">1.0 MPa" },{ label: "Texture Options", value: "Smooth / Brushed / Troweled" },{ label: "Color Options", value: "100+ colors" },{ label: "Sealer Options", value: "PU / Epoxy / Wax" }],
  },
  "truss-screed": {
    title: "Truss Screed Flooring", subtitle: "Mechanical Screed for Large Areas",
    img: assets.services.trussScreed, tag: "Industrial", icon: "Wrench",
    intro: "Truss Screed flooring uses a mechanically vibrated screed rail system to achieve consistent, well-consolidated concrete floors over large areas — a cost-effective alternative to laser screed.",
    description: [
      "Truss Screed (also called Vibrating Screed or Rail Screed) uses a vibrating screed beam mounted on rails to consolidate and level concrete over large floor areas. The vibration ensures thorough compaction and eliminates voids.",
      "While not achieving the super-flat tolerances of laser screed, truss screed delivers excellent results for general industrial and commercial floors where moderate flatness (FF 20–35) is acceptable.",
      "Shubhaam Concret uses truss screed for projects ranging from 5,000 to 50,000 sq ft, offering a cost-effective solution for warehouses, factories, and commercial floors.",
    ],
    benefits: ["More economical than laser screed","Excellent concrete consolidation","Suitable for large areas","Good flatness for standard industrial use","Compatible with VDF/Tremix process","Faster than manual screeding","Consistent quality across large areas","Suitable for reinforced slabs"],
    applications: ["General Warehouses","Manufacturing Facilities","Commercial Buildings","Residential Slabs","Parking Areas","Road Pavements","Industrial Floors","Infrastructure Projects"],
    process: [
      { step: "01", title: "Rail Setup", desc: "Steel rails are set up at the correct level using laser levels or traditional surveying methods." },
      { step: "02", title: "Concrete Placement", desc: "Concrete is placed between the rails and roughly spread to the required level." },
      { step: "03", title: "Screed Pass", desc: "The vibrating truss screed is pulled along the rails, consolidating and leveling the concrete." },
      { step: "04", title: "Bull Floating", desc: "Bull floats are used to close the surface and remove screed marks." },
      { step: "05", title: "Power Troweling", desc: "Mechanical power trowels achieve the required surface finish." },
      { step: "06", title: "Curing", desc: "Curing compound is applied to prevent moisture loss and ensure full strength development." },
    ],
    specs: [{ label: "Flatness (FF)", value: "FF 20–35" },{ label: "Productivity", value: "Up to 1,000 sq m/day" },{ label: "Span", value: "Up to 6m between rails" },{ label: "Compressive Strength", value: "M20 to M35" },{ label: "Min Thickness", value: "100mm" },{ label: "Surface Finish", value: "Power troweled / Broom" }],
  },
  "innovative-decorative": {
    title: "Innovative & Decorative Concrete", subtitle: "Custom Artistic Flooring Solutions",
    img: assets.services.polished, tag: "Decorative", icon: "Palette",
    intro: "Innovative and decorative concrete flooring combines artistic design with structural durability, creating unique, one-of-a-kind floors that transform ordinary spaces into extraordinary environments.",
    description: [
      "Decorative concrete uses specialised techniques like acid staining, dyes, scoring, stencilling, and custom aggregate exposure to create unique patterns and finishes that cannot be achieved with conventional flooring materials.",
      "From metallic epoxy floors with mesmerising swirl patterns to concrete that replicates natural marble, our decorative solutions offer unlimited design possibilities at a fraction of the cost of natural materials.",
      "Shubhaam Concret's decorative concrete team works closely with architects, interior designers, and homeowners to create bespoke flooring solutions that reflect individual style and branding requirements.",
    ],
    benefits: ["Unlimited design possibilities","Custom colours, patterns, and textures","Durable like standard concrete","Cost-effective vs natural materials","Easy maintenance","Environmentally friendly","Can incorporate logos and graphics","Suitable for indoor and outdoor use"],
    applications: ["Hotel Lobbies & Reception","Corporate Office Floors","Retail Showrooms","Residential Villas & Penthouses","Restaurant & Café Interiors","Shopping Malls","Museum & Gallery Floors","Brand Experience Centers"],
    process: [
      { step: "01", title: "Design Consultation", desc: "Collaborate with designers to select colours, patterns, and finish style." },
      { step: "02", title: "Surface Preparation", desc: "Prepare the concrete substrate for optimal adhesion of decorative treatments." },
      { step: "03", title: "Pattern Layout", desc: "Score, stencil, or stamp the desired pattern into the concrete surface." },
      { step: "04", title: "Colour Application", desc: "Apply acid stains, dyes, or pigments to achieve the desired colour effect." },
      { step: "05", title: "Sealing", desc: "Apply multiple coats of sealer to protect the surface and enhance colour." },
      { step: "06", title: "Final Inspection", desc: "Quality check of colour uniformity, pattern alignment, and surface finish." },
    ],
    specs: [{ label: "Design Options", value: "Unlimited" },{ label: "Colour Range", value: "100+ standard" },{ label: "Thickness", value: "75–150mm" },{ label: "Sealer Recoat", value: "Every 2–3 years" },{ label: "Indoor/Outdoor", value: "Both" },{ label: "Curing Time", value: "7–28 days" }],
  },
};

const ALL_SERVICES = [
  { id: "tremix", title: "Tremix (VDF)", icon: "Settings" },
  { id: "laser-screed", title: "Laser Screed", icon: "Target" },
  { id: "polished", title: "Polished Concrete", icon: "Sparkles" },
  { id: "stamping", title: "Stamped Concrete", icon: "Building" },
  { id: "society", title: "Society Repairing", icon: "Construction" },
  { id: "thermoplastic", title: "Thermoplastic Marking", icon: "Route" },
  { id: "micro-topping", title: "Micro-Topping", icon: "Palette" },
  { id: "truss-screed", title: "Truss Screed", icon: "Wrench" },
  { id: "innovative-decorative", title: "Innovative & Decorative", icon: "Palette" },
];

export default function ServiceDetail() {
  const { id } = useParams<{ id: string }>();
  const service = id ? SERVICES[id] : null;

  if (!service) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center gap-6 p-8">
        <div className="text-6xl">🔍</div>
        <h1 className="text-2xl font-display font-bold">Service Not Found</h1>
        <p className="text-muted-foreground">The service you're looking for doesn't exist.</p>
        <Link href="/services">
          <button className="flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-xl font-label font-bold text-sm">
            <ArrowLeft className="w-4 h-4" /> Back to Services
          </button>
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <div className="relative h-[420px] md:h-[520px] overflow-hidden flex items-end">
        <img src={service.img} alt={service.title} className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-black/20" />
        <div className="relative z-10 container pb-12">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            <Link href="/services" className="inline-flex items-center gap-2 text-white/60 hover:text-primary text-sm mb-4 transition-colors">
              <ArrowLeft className="w-4 h-4" /> All Services
            </Link>
            <div className="flex items-center gap-3 mb-3">
              {(() => { const Icon = IconComponents[service.icon as keyof typeof IconComponents]; return Icon ? <Icon className="w-8 h-8 text-primary" /> : null; })()}
              <Badge className="bg-primary text-primary-foreground border-0 font-label text-xs">{service.tag}</Badge>
            </div>
            <h1 className="text-[clamp(2rem,5vw,3.5rem)] font-display font-bold text-white leading-tight">{service.title}</h1>
            <p className="text-primary text-lg font-label mt-1">{service.subtitle}</p>
          </motion.div>
        </div>
      </div>

      {/* Breadcrumb */}
      <div className="bg-muted/30 border-b border-border/50 py-3">
        <div className="container flex items-center gap-2 text-sm text-muted-foreground">
          <Link href="/" className="hover:text-primary transition-colors">Home</Link>
          <ChevronRight className="w-3 h-3" />
          <Link href="/services" className="hover:text-primary transition-colors">Services</Link>
          <ChevronRight className="w-3 h-3" />
          <span className="text-foreground">{service.title}</span>
        </div>
      </div>

      <div className="container py-16">
        <div className="grid lg:grid-cols-3 gap-12">
          {/* Main content */}
          <div className="lg:col-span-2 space-y-12">
            <Reveal>
              <div className="bg-primary/5 border border-primary/20 rounded-2xl p-6">
                <p className="text-lg font-display leading-relaxed text-foreground">{service.intro}</p>
              </div>
            </Reveal>

            <Reveal delay={0.1}>
              <div className="space-y-4">
                <h2 className="text-2xl font-display font-bold">About This Service</h2>
                {service.description.map((para, i) => (
                  <p key={i} className="text-muted-foreground leading-relaxed">{para}</p>
                ))}
              </div>
            </Reveal>

            <Reveal delay={0.15}>
              <div>
                <h2 className="text-2xl font-display font-bold mb-6">Our Process</h2>
                <div className="space-y-4">
                  {service.process.map((step, i) => (
                    <motion.div key={i} initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }} transition={{ delay: i * 0.07 }}
                      className="flex gap-4 p-5 bg-card rounded-2xl border border-border/50 hover:border-primary/30 transition-colors group">
                      <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0 group-hover:bg-primary/20 transition-colors">
                        <span className="text-primary font-display font-bold text-sm">{step.step}</span>
                      </div>
                      <div>
                        <h3 className="font-display font-bold mb-1 group-hover:text-primary transition-colors">{step.title}</h3>
                        <p className="text-muted-foreground text-sm leading-relaxed">{step.desc}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </Reveal>

            <Reveal delay={0.2}>
              <div>
                <h2 className="text-2xl font-display font-bold mb-6">Applications</h2>
                <div className="grid grid-cols-2 gap-3">
                  {service.applications.map((app, i) => (
                    <div key={i} className="flex items-center gap-2 p-3 bg-muted/30 rounded-xl">
                      <CheckCircle className="w-4 h-4 text-primary shrink-0" />
                      <span className="text-sm">{app}</span>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            <Reveal>
              <div className="bg-card border border-border/50 rounded-2xl p-6 border-beam">
                <h3 className="font-display font-bold text-lg mb-4">Key Benefits</h3>
                <ul className="space-y-2.5">
                  {service.benefits.map((b, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm">
                      <CheckCircle className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                      <span className="text-muted-foreground">{b}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>

            <Reveal delay={0.1}>
              <div className="bg-card border border-border/50 rounded-2xl p-6">
                <h3 className="font-display font-bold text-lg mb-4">Technical Specifications</h3>
                <div className="space-y-3">
                  {service.specs.map((spec, i) => (
                    <div key={i} className="flex justify-between gap-4 py-2 border-b border-border/30 last:border-0">
                      <span className="text-xs text-muted-foreground font-label">{spec.label}</span>
                      <span className="text-xs font-semibold text-right">{spec.value}</span>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>

            <Reveal delay={0.15}>
              <div className="bg-primary rounded-2xl p-6 text-primary-foreground">
                <h3 className="font-display font-bold text-lg mb-2">Get a Free Quote</h3>
                <p className="text-primary-foreground/80 text-sm mb-4">Contact us for a free site assessment and detailed quotation.</p>
                <Link href="/contact">
                  <button className="w-full bg-primary-foreground text-primary py-3 rounded-xl font-label font-bold text-sm hover:opacity-90 transition-opacity flex items-center justify-center gap-2">
                    Request Quote <ArrowRight className="w-4 h-4" />
                  </button>
                </Link>
                <a href="tel:+919821024267" className="mt-3 flex items-center justify-center gap-2 text-primary-foreground/80 text-sm hover:text-primary-foreground transition-colors">
                  <Phone className="w-4 h-4" /> +91 98210 24267
                </a>
              </div>
            </Reveal>

            <Reveal delay={0.2}>
              <div className="bg-card border border-border/50 rounded-2xl p-6">
                <h3 className="font-display font-bold text-lg mb-4">All Services</h3>
                <div className="space-y-1">
                  {ALL_SERVICES.map((s) => {
                    const Icon = IconComponents[s.icon as keyof typeof IconComponents];
                    return (
                    <Link key={s.id} href={`/services/${s.id}`}>
                      <div className={`flex items-center gap-3 px-3 py-2.5 rounded-xl transition-all text-sm ${
                        s.id === id ? "bg-primary/10 text-primary font-semibold" : "hover:bg-muted/50 text-muted-foreground hover:text-foreground"
                      }`}>
                        {Icon && <Icon className="w-4 h-4" />}
                        <span>{s.title}</span>
                        {s.id === id && <ChevronRight className="w-3 h-3 ml-auto" />}
                      </div>
                    </Link>
                    );
                  })}
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </div>
  );
}
