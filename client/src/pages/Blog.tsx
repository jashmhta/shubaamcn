import { useRef } from "react";
import { Link } from "wouter";
import { motion, useInView } from "framer-motion";
import { ChevronRight, Clock, Tag, ArrowRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { assets } from "@/lib/assets";

const POSTS = [
  {
    id: "polished-concrete-guide",
    title: "The Complete Guide to Polished Concrete Floors",
    excerpt: "Everything you need to know about polished concrete — from grinding levels to maintenance tips for long-lasting shine. We cover the full process, cost factors, and best applications.",
    img: assets.blog.polishedConcrete,
    date: "March 15, 2025",
    readTime: "8 min read",
    category: "Flooring Guide",
    featured: true,
    content: `Polished concrete has become one of the most popular flooring choices for commercial and residential spaces in India. Its combination of durability, aesthetics, and low maintenance makes it an excellent long-term investment.

The polishing process involves multiple passes with diamond-tipped grinding tools, starting with coarse grits and progressively moving to finer grits. A densifier is applied between passes to harden the surface, and the final step involves applying a guard or sealer for protection.

Sheen levels range from Level 1 (matte/satin) to Level 4 (high-gloss mirror finish). The choice depends on the application — retail spaces and showrooms typically prefer Level 3 or 4, while warehouses and factories may opt for Level 1 or 2.

Maintenance is simple: regular dust mopping and occasional wet mopping with a neutral pH cleaner. Avoid acidic cleaners that can etch the surface. With proper care, polished concrete floors can last decades without significant degradation.`,
  },
  {
    id: "tremix-vs-traditional",
    title: "Tremix VDF vs Traditional Flooring: Which is Better?",
    excerpt: "A detailed comparison of Vacuum Dewatered Flooring and traditional methods for industrial applications. Learn which option delivers better value for your specific needs.",
    img: assets.blog.tremixStamping,
    date: "February 28, 2025",
    readTime: "6 min read",
    category: "Industry Insights",
    featured: false,
    content: `When it comes to industrial flooring, the choice between Tremix VDF and traditional concrete flooring is one of the most important decisions a facility manager can make. Both have their merits, but for most industrial applications, VDF offers significant advantages.

Traditional concrete flooring relies on manual screeding and finishing, which can result in surface variations and inconsistent quality. The water-cement ratio is difficult to control precisely, leading to potential surface weakness and dusting over time.

Tremix VDF, on the other hand, uses vacuum dewatering to remove excess water from the concrete immediately after placement. This reduces the water-cement ratio by 15-25%, resulting in a denser, harder surface with significantly better abrasion resistance.

For warehouses, factories, and logistics centers, the investment in VDF flooring typically pays for itself within 3-5 years through reduced maintenance costs and longer floor lifespan.`,
  },
  {
    id: "warehouse-flooring-options",
    title: "5 Concrete Flooring Options for Modern Warehouses",
    excerpt: "Choosing the right concrete floor for your warehouse can save millions in maintenance costs. We compare the top 5 options with cost, durability, and application analysis.",
    img: assets.blog.concreteOptions,
    date: "January 20, 2025",
    readTime: "10 min read",
    category: "Warehouse Solutions",
    featured: false,
    content: `Modern warehouses demand flooring solutions that can withstand heavy forklift traffic, temperature variations, and decades of continuous use. Here are the top 5 concrete flooring options to consider:

1. Laser Screed VDF: The gold standard for large warehouses. Combines laser-guided precision with vacuum dewatering for the flattest, most durable floors available.

2. Traditional VDF (Tremix): Excellent for medium-sized warehouses where laser screed may be over-specified. Provides superior strength at a competitive price.

3. Polished Concrete with Hardener: Ideal for showrooms and distribution centers where aesthetics matter alongside durability.

4. Epoxy Coating over Concrete: Good for chemical resistance in food processing and pharmaceutical facilities.

5. Truss Screed Flooring: Cost-effective solution for smaller warehouses and workshops where extreme flatness is not critical.`,
  },
  {
    id: "stamped-concrete-designs",
    title: "Top 10 Stamped Concrete Designs for 2025",
    excerpt: "Explore the most popular stamped concrete patterns and color combinations trending in India for driveways, patios, and commercial spaces.",
    img: assets.services.stamping,
    date: "December 10, 2024",
    readTime: "5 min read",
    category: "Design Trends",
    featured: false,
    content: `Stamped concrete continues to evolve with new patterns and color techniques that push the boundaries of what concrete can look like. Here are the top 10 designs trending in 2025.`,
  },
  {
    id: "concrete-repair-guide",
    title: "When to Repair vs Replace Your Concrete Floor",
    excerpt: "A practical guide for facility managers and society committees on assessing concrete damage and making the right repair or replacement decision.",
    img: assets.services.society,
    date: "November 5, 2024",
    readTime: "7 min read",
    category: "Maintenance",
    featured: false,
    content: `Concrete floors don't last forever, but knowing when to repair versus replace can save significant time and money. This guide helps you make the right decision.`,
  },
  {
    id: "thermoplastic-marking-guide",
    title: "Thermoplastic vs Paint: The Ultimate Road Marking Comparison",
    excerpt: "Why thermoplastic road marking outperforms paint in every metric — durability, visibility, safety, and total cost of ownership.",
    img: assets.services.thermoplastic,
    date: "October 18, 2024",
    readTime: "6 min read",
    category: "Road Marking",
    featured: false,
    content: `Road markings are critical safety infrastructure, yet many facility managers still choose conventional paint over thermoplastic due to lower upfront costs. This comparison shows why that decision often costs more in the long run.`,
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

export default function Blog() {
  const featured = POSTS.find((p) => p.featured);
  const rest = POSTS.filter((p) => !p.featured);

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <div className="relative h-[380px] overflow-x-clip sm:overflow-hidden">
        <img src={assets.blog.polishedConcrete} alt="Blog" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-br from-black/85 via-black/65 to-black/40" />
        <div className="relative z-10 h-full flex flex-col justify-end container pb-12 pt-24">
          <div className="flex items-center gap-2 text-white/60 text-sm mb-3">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <ChevronRight className="w-3 h-3" />
            <span className="text-white">Blog</span>
          </div>
          <span className="section-label text-primary mb-3 block">Knowledge Hub</span>
          <h1 className="text-4xl md:text-6xl font-display font-bold text-white mb-3">
            Concrete <span className="text-gold-gradient">Insights</span>
          </h1>
          <p className="text-white/75 text-lg max-w-2xl">
            Expert guides, industry insights, and technical resources from India's leading concrete flooring specialists.
          </p>
        </div>
      </div>

      <div className="container py-16">
        {/* Featured post */}
        {featured && (
          <Reveal>
            <Link href={`/blog/${featured.id}`}>
              <div className="group grid lg:grid-cols-2 gap-8 bg-card rounded-3xl overflow-hidden border border-border/50 service-card-hover mb-16 border-beam cursor-pointer">
                <div className="blog-img-zoom h-72 lg:h-auto">
                  <img src={featured.img} alt={featured.title} className="w-full h-full object-cover" />
                </div>
                <div className="p-8 flex flex-col justify-center">
                  <div className="flex items-center gap-3 mb-4">
                    <Badge className="bg-primary text-primary-foreground border-0 font-label text-xs">Featured</Badge>
                    <Badge variant="secondary" className="font-label text-xs">{featured.category}</Badge>
                  </div>
                  <h2 className="font-display text-2xl md:text-3xl font-bold mb-3 group-hover:text-primary transition-colors leading-snug">
                    {featured.title}
                  </h2>
                  <p className="text-muted-foreground leading-relaxed mb-6">{featured.excerpt}</p>
                  <div className="flex items-center gap-4 text-sm text-muted-foreground mb-6">
                    <span className="flex items-center gap-1"><Clock className="w-3.5 h-3.5" /> {featured.readTime}</span>
                    <span>{featured.date}</span>
                  </div>
                  <div className="flex items-center gap-2 text-primary font-label font-bold text-sm group-hover:gap-3 transition-all">
                    Read Article <ArrowRight className="w-4 h-4" />
                  </div>
                </div>
              </div>
            </Link>
          </Reveal>
        )}

        {/* Post grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {rest.map((post, i) => (
            <Reveal key={post.id} delay={i * 0.08}>
              <Link href={`/blog/${post.id}`}>
                <div className="group bg-card rounded-2xl overflow-hidden border border-border/50 service-card-hover cursor-pointer h-full">
                  <div className="blog-img-zoom h-52">
                    <img src={post.img} alt={post.title} className="w-full h-full object-cover" />
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-3 mb-3">
                      <Badge variant="secondary" className="text-xs font-label">{post.category}</Badge>
                      <span className="text-muted-foreground text-xs flex items-center gap-1">
                        <Clock className="w-3 h-3" /> {post.readTime}
                      </span>
                    </div>
                    <h3 className="font-display text-lg font-bold mb-2 group-hover:text-primary transition-colors leading-snug">
                      {post.title}
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed line-clamp-2 mb-4">{post.excerpt}</p>
                    <div className="flex items-center gap-1 text-primary text-xs font-label font-bold tracking-wide group-hover:gap-2 transition-all">
                      Read More <ArrowRight className="w-3 h-3" />
                    </div>
                  </div>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </div>
  );
}
