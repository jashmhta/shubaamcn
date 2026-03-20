import { useRef } from "react";
import { useParams, Link } from "wouter";
import { motion, useInView } from "framer-motion";
import { ChevronRight, Clock, ArrowLeft, ArrowRight, Tag } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { assets } from "@/lib/assets";

const POSTS: Record<string, {
  title: string; img: string; date: string; readTime: string; category: string;
  excerpt: string; content: string[];
}> = {
  "polished-concrete-guide": {
    title: "The Complete Guide to Polished Concrete Floors",
    img: assets.blog.polishedConcrete,
    date: "March 15, 2025", readTime: "8 min read", category: "Flooring Guide",
    excerpt: "Everything you need to know about polished concrete — from grinding levels to maintenance tips for long-lasting shine.",
    content: [
      "Polished concrete has become one of the most popular flooring choices for commercial and residential spaces in India. Its combination of durability, aesthetics, and low maintenance makes it an excellent long-term investment.",
      "The polishing process involves multiple passes with diamond-tipped grinding tools, starting with coarse grits (30–50 grit metal bonds) and progressively moving to finer grits (up to 3000 grit resin bonds). A densifier is applied between passes to harden the surface, and the final step involves applying a guard or sealer for protection.",
      "Sheen levels range from Level 1 (matte/satin at 400 grit) to Level 4 (high-gloss mirror finish at 3000 grit). The choice depends on the application — retail spaces and showrooms typically prefer Level 3 or 4, while warehouses and factories may opt for Level 1 or 2.",
      "One of the biggest advantages of polished concrete is that it becomes part of the slab itself. Unlike coatings or overlays, it cannot peel, chip, or delaminate. The surface actually becomes harder and more resistant to abrasion with each polishing pass.",
      "Maintenance is simple: regular dust mopping and occasional wet mopping with a neutral pH cleaner. Avoid acidic cleaners that can etch the surface. With proper care, polished concrete floors can last decades without significant degradation.",
      "Cost-wise, polished concrete typically ranges from ₹35 to ₹120 per sq ft depending on the level of sheen, aggregate exposure desired, and whether dyes or stains are applied. While the initial cost may be higher than some alternatives, the total cost of ownership is significantly lower due to minimal maintenance requirements.",
    ],
  },
  "tremix-vs-traditional": {
    title: "Tremix VDF vs Traditional Flooring: Which is Better?",
    img: assets.blog.tremixStamping,
    date: "February 28, 2025", readTime: "6 min read", category: "Industry Insights",
    excerpt: "A detailed comparison of Vacuum Dewatered Flooring and traditional methods for industrial applications.",
    content: [
      "When it comes to industrial flooring, the choice between Tremix VDF and traditional concrete flooring is one of the most important decisions a facility manager can make. Both have their merits, but for most industrial applications, VDF offers significant advantages.",
      "Traditional concrete flooring relies on manual screeding and finishing, which can result in surface variations and inconsistent quality. The water-cement ratio is difficult to control precisely, leading to potential surface weakness and dusting over time.",
      "Tremix VDF, on the other hand, uses vacuum dewatering to remove excess water from the concrete immediately after placement. This reduces the water-cement ratio by 15–25%, resulting in a denser, harder surface with significantly better abrasion resistance.",
      "Key advantages of VDF over traditional concrete: Compressive strength is 30–60% higher at 28 days. Surface hardness is significantly better, reducing dusting. Flatness tolerances can be achieved more consistently. Service life is typically 2–3 times longer with proper maintenance.",
      "The downside of VDF is the higher initial cost — typically 15–25% more than traditional concrete. However, when you factor in reduced maintenance costs, longer lifespan, and better operational performance (especially for forklift and AGV operations), the total cost of ownership is actually lower.",
      "For warehouses, factories, and logistics centers, the investment in VDF flooring typically pays for itself within 3–5 years through reduced maintenance costs and longer floor lifespan. Shubhaam Concret recommends VDF for all industrial applications above 10,000 sq ft.",
    ],
  },
  "warehouse-flooring-options": {
    title: "5 Concrete Flooring Options for Modern Warehouses",
    img: assets.blog.concreteOptions,
    date: "January 20, 2025", readTime: "10 min read", category: "Warehouse Solutions",
    excerpt: "Choosing the right concrete floor for your warehouse can save millions in maintenance costs.",
    content: [
      "Modern warehouses demand flooring solutions that can withstand heavy forklift traffic, temperature variations, and decades of continuous use. Here are the top 5 concrete flooring options to consider for your next warehouse project.",
      "1. Laser Screed VDF — The gold standard for large warehouses (20,000+ sq ft). Combines laser-guided precision with vacuum dewatering for the flattest, most durable floors available. Ideal for Very Narrow Aisle (VNA) forklift operations and Automated Guided Vehicle (AGV) systems. Cost: ₹80–120/sq ft.",
      "2. Traditional VDF (Tremix) — Excellent for medium-sized warehouses where laser screed may be over-specified. Provides superior strength at a competitive price. Suitable for standard forklift traffic. Cost: ₹55–85/sq ft.",
      "3. Polished Concrete with Hardener — Ideal for showrooms and distribution centers where aesthetics matter alongside durability. Easy to clean, dust-free, and enhances light reflectivity. Cost: ₹45–90/sq ft.",
      "4. Epoxy Coating over Concrete — Good for chemical resistance in food processing and pharmaceutical facilities. Provides seamless, hygienic surface. Cost: ₹40–70/sq ft. Note: Requires recoating every 5–8 years.",
      "5. Truss Screed Flooring — Cost-effective solution for smaller warehouses and workshops where extreme flatness is not critical. Good for areas with light to moderate traffic. Cost: ₹40–65/sq ft.",
      "When choosing the right option, consider the type of material handling equipment (forklifts, AGVs, etc.), the required flatness tolerance, traffic density, and whether the floor will be visible to customers or visitors. Shubhaam Concret provides free site assessments to help you make the right choice.",
    ],
  },
  "stamped-concrete-designs": {
    title: "Top 10 Stamped Concrete Designs for 2025",
    img: assets.services.stamping,
    date: "December 10, 2024", readTime: "5 min read", category: "Design Trends",
    excerpt: "Explore the most popular stamped concrete patterns and color combinations trending in India.",
    content: [
      "Stamped concrete continues to evolve with new patterns and color techniques that push the boundaries of what concrete can look like. Here are the top 10 designs trending in India for 2025.",
      "1. Ashlar Slate — A classic pattern that mimics cut stone with clean lines and a sophisticated look. Works beautifully for driveways and patios. Popular colors: Charcoal Grey, Tan, Terracotta.",
      "2. Cobblestone — Old-world charm that's perfect for heritage properties and resort-style settings. Slightly raised texture adds character. Popular colors: Sandstone, Slate Grey, Rustic Brown.",
      "3. Fractured Earth — Natural, random-looking pattern that resembles broken stone slabs. Excellent for garden pathways and outdoor living areas. Popular colors: Desert Tan, Red Brick, Walnut.",
      "4. Wood Plank — Mimics the look of wooden boards with realistic grain texture. Perfect for pool decks where wood would rot. Popular colors: Weathered Oak, Dark Walnut, Driftwood.",
      "5. Roman Slate — Elegant large-format slate pattern for a premium look. Ideal for hotel entrances and commercial courtyards. Popular colors: Platinum, Sandstone, Imperial Red.",
      "6. Herringbone Brick — Classic European brick pattern in herringbone layout. Great for driveways and commercial walkways. Popular colors: Red, Brown, Grey Blend.",
      "7. Seamless Texture Skins — Seamless patterns that create a natural stone texture without visible joints. Perfect for large continuous surfaces. Popular colors: Sandstone, Limestone.",
      "8. Hexagonal Geometric — Modern geometric pattern for contemporary designs. Popular for shopping malls and modern residences. Popular colors: Two-tone grey, Charcoal with Gold accents.",
      "9. Travertine — Elegant Mediterranean-style pattern with rounded edges and soft texture. Popular for pool surrounds and resort walkways. Popular colors: Ivory, Beige, Coral.",
      "10. Flagstone — Natural-looking irregular stone pattern for a rustic, organic feel. Perfect for garden paths and outdoor dining areas. Popular colors: Slate Blue, Autumn Blend, Brownstone.",
    ],
  },
  "concrete-repair-guide": {
    title: "When to Repair vs Replace Your Concrete Floor",
    img: assets.services.society,
    date: "November 5, 2024", readTime: "7 min read", category: "Maintenance",
    excerpt: "A practical guide for facility managers and society committees on assessing concrete damage.",
    content: [
      "Concrete floors don't last forever, but knowing when to repair versus replace can save significant time and money. This practical guide helps facility managers and society committees make the right decision.",
      "Signs that your concrete floor needs repair (not replacement): Surface cracks less than 3mm wide, Minor surface spalling, Localized delamination, Small areas of uneven surface, Cosmetic stains or discoloration. Repair cost: typically 20–40% of replacement cost.",
      "Signs that replacement may be necessary: Structural cracks wider than 6mm with displacement, Extensive spalling covering more than 30% of the floor, Subsidence or settlement causing significant unevenness, Failed previous repairs that keep recurring, Severe contamination (oil, chemicals) that cannot be cleaned.",
      "For residential societies, the decision often comes down to the extent of damage across the compound. If less than 25% of surfaces are affected, targeted repairs with micro-topping or overlay is usually more cost-effective. If more than 50% is damaged, complete resurfacing or replacement is recommended.",
      "Water damage is one of the most common causes of concrete deterioration in Mumbai. Check for efflorescence (white mineral deposits), hollow sounds when tapped, and areas where water pools after rain. These indicate underlying moisture issues that must be addressed during repair.",
      "Shubhaam Concret provides free condition assessments for residential societies and commercial properties. Our engineers will assess the extent of damage, identify root causes, and recommend the most cost-effective solution — whether that's repair, overlay, or replacement.",
    ],
  },
  "thermoplastic-marking-guide": {
    title: "Thermoplastic vs Paint: The Ultimate Road Marking Comparison",
    img: assets.services.thermoplastic,
    date: "October 18, 2024", readTime: "6 min read", category: "Road Marking",
    excerpt: "Why thermoplastic road marking outperforms paint in every metric — durability, visibility, safety.",
    content: [
      "Road markings are critical safety infrastructure, yet many facility managers still choose conventional paint over thermoplastic due to lower upfront costs. This comparison shows why thermoplastic is the better long-term investment.",
      "Durability: Thermoplastic markings last 3–7 years compared to 1–2 years for paint. This means 3–4 times fewer reapplications over the same period. In high-traffic areas, the difference is even more pronounced.",
      "Retroreflectivity: Thermoplastic contains embedded glass beads that reflect headlights, making markings visible at night from much greater distances. Paint loses retroreflectivity within months; thermoplastic maintains it for years.",
      "Cost Analysis: While thermoplastic costs 3–4 times more per square meter than paint, the total cost of ownership over 5 years is actually 40–60% lower due to fewer reapplications. For a typical parking lot of 10,000 sq m, the 5-year savings can exceed ₹2 lakhs.",
      "Application Speed: Thermoplastic dries within 3–5 minutes of application, allowing immediate reopening of roads and parking areas. Paint requires 2–4 hours drying time per application.",
      "Environmental Impact: Thermoplastic is more environmentally friendly — it produces fewer VOC emissions than solvent-based paint and doesn't require frequent reapplication that generates waste.",
    ],
  },
};

function Reveal({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });
  return (
    <motion.div ref={ref} initial={{ opacity: 0, y: 30 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.7, delay }}>
      {children}
    </motion.div>
  );
}

export default function BlogPost() {
  const { id } = useParams<{ id: string }>();
  const post = id ? POSTS[id] : null;

  if (!post) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center gap-6 p-8">
        <div className="text-6xl">📝</div>
        <h1 className="text-2xl font-display font-bold">Article Not Found</h1>
        <p className="text-muted-foreground">The article you're looking for doesn't exist.</p>
        <Link href="/blog">
          <button className="flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-xl font-label font-bold text-sm">
            <ArrowLeft className="w-4 h-4" /> Back to Blog
          </button>
        </Link>
      </div>
    );
  }

  const allPosts = Object.entries(POSTS).filter(([k]) => k !== id);
  const relatedPosts = allPosts.slice(0, 3);

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <div className="relative h-[420px] md:h-[500px] overflow-hidden flex items-end">
        <img src={post.img} alt={post.title} className="absolute inset-0 w-full h-full object-cover" loading="eager" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-black/20" />
        <div className="relative z-10 container pb-12">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            <Link href="/blog" className="inline-flex items-center gap-2 text-white/60 hover:text-primary text-sm mb-4 transition-colors">
              <ArrowLeft className="w-4 h-4" /> All Articles
            </Link>
            <div className="flex items-center gap-3 mb-3">
              <Badge className="bg-primary text-primary-foreground border-0 font-label text-xs">
                <Tag className="w-3 h-3 mr-1" /> {post.category}
              </Badge>
              <span className="text-white/60 text-sm">{post.readTime}</span>
            </div>
            <h1 className="text-[clamp(1.8rem,4vw,3rem)] font-display font-bold text-white leading-tight max-w-3xl">
              {post.title}
            </h1>
          </motion.div>
        </div>
      </div>

      {/* Breadcrumb */}
      <div className="bg-muted/30 border-b border-border/50 py-3">
        <div className="container flex items-center gap-2 text-sm text-muted-foreground">
          <Link href="/" className="hover:text-primary transition-colors">Home</Link>
          <ChevronRight className="w-3 h-3" />
          <Link href="/blog" className="hover:text-primary transition-colors">Blog</Link>
          <ChevronRight className="w-3 h-3" />
          <span className="text-foreground truncate">{post.title}</span>
        </div>
      </div>

      {/* Article */}
      <div className="container py-16">
        <div className="grid lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2">
            <Reveal>
              <div className="mb-8">
                <p className="text-muted-foreground text-sm flex items-center gap-4">
                  <span>{post.date}</span>
                  <span>•</span>
                  <span className="flex items-center gap-1"><Clock className="w-3.5 h-3.5" /> {post.readTime}</span>
                </p>
              </div>
            </Reveal>
            <Reveal delay={0.1}>
              <div className="space-y-6">
                {post.content.map((para, i) => (
                  <p key={i} className="text-foreground/85 leading-[1.85] text-[15px]">
                    {para}
                  </p>
                ))}
              </div>
            </Reveal>

            <Reveal delay={0.15}>
              <div className="mt-12 p-6 bg-primary/5 border border-primary/20 rounded-2xl">
                <p className="text-lg font-display font-bold mb-2">Need Expert Advice?</p>
                <p className="text-muted-foreground text-sm mb-4">
                  Contact Shubhaam Concret for a free consultation and site assessment. Our team has 33+ years of experience in concrete flooring solutions.
                </p>
                <Link href="/contact">
                  <button className="bg-primary text-primary-foreground px-6 py-3 rounded-xl font-label font-bold text-sm hover:opacity-90 transition-opacity flex items-center gap-2">
                    Get Free Consultation <ArrowRight className="w-4 h-4" />
                  </button>
                </Link>
              </div>
            </Reveal>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            <Reveal>
              <div className="bg-card border border-border/50 rounded-2xl p-6">
                <h3 className="font-display font-bold text-lg mb-4">About the Author</h3>
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold">SC</div>
                  <div>
                    <p className="font-semibold text-sm">Shubhaam Concret Team</p>
                    <p className="text-xs text-muted-foreground">33+ years in concrete flooring</p>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  India's leading concrete flooring specialists, delivering Tremix VDF, Polished Concrete, Laser Screed, and Decorative Flooring solutions.
                </p>
              </div>
            </Reveal>

            <Reveal delay={0.1}>
              <div className="bg-card border border-border/50 rounded-2xl p-6">
                <h3 className="font-display font-bold text-lg mb-4">Related Articles</h3>
                <div className="space-y-3">
                  {relatedPosts.map(([key, p]) => (
                    <Link key={key} href={`/blog/${key}`}>
                      <div className="flex gap-3 p-3 rounded-xl hover:bg-muted/30 transition-colors group">
                        <img src={p.img} alt={p.title} className="w-16 h-16 rounded-lg object-cover shrink-0" loading="lazy" />
                        <div>
                          <p className="text-sm font-semibold leading-snug group-hover:text-primary transition-colors line-clamp-2">{p.title}</p>
                          <p className="text-xs text-muted-foreground mt-1">{p.readTime}</p>
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            </Reveal>

            <Reveal delay={0.15}>
              <div className="bg-primary rounded-2xl p-6 text-primary-foreground">
                <h3 className="font-display font-bold text-lg mb-2">Get a Free Quote</h3>
                <p className="text-primary-foreground/80 text-sm mb-4">Ready to start your flooring project?</p>
                <a href="tel:+919821024267" className="w-full bg-primary-foreground text-primary py-3 rounded-xl font-label font-bold text-sm hover:opacity-90 transition-opacity flex items-center justify-center gap-2">
                  Call +91 98210 24267
                </a>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </div>
  );
}
