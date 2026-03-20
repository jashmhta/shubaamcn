import { motion } from "framer-motion";
import { Link } from "wouter";
import { ArrowRight, Award, CheckCircle2, Users, Building2, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { assets } from "@/lib/assets";

const MILESTONES = [
  { year: "1991", title: "Company Founded", desc: "Shubhaam Concret Floors Pvt. Ltd. established in Mumbai by Kiran Shah." },
  { year: "1998", title: "Tremix VDF Pioneer", desc: "Among the first companies in Mumbai to introduce Vacuum Dewatered Flooring technology." },
  { year: "2005", title: "Laser Screed Technology", desc: "Invested in state-of-the-art laser screed equipment for precision large-area flooring." },
  { year: "2010", title: "1000+ Projects", desc: "Crossed the milestone of 1000 successfully completed projects across Maharashtra." },
  { year: "2018", title: "ISO Certification", desc: "Achieved ISO 9001:2015 certification for quality management systems." },
  { year: "2024", title: "1500+ Projects", desc: "Over 1,500 projects completed with a team of 100+ skilled professionals." },
];

const VALUES = [
  { icon: Award, title: "Excellence", desc: "We never compromise on quality. Every floor we lay meets the highest standards." },
  { icon: CheckCircle2, title: "Integrity", desc: "Transparent pricing, honest timelines, and no hidden costs — ever." },
  { icon: Users, title: "Client Focus", desc: "Your satisfaction is our priority. We work until you're completely happy." },
  { icon: Building2, title: "Innovation", desc: "Continuously adopting the latest technologies and techniques in concrete flooring." },
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

export default function About() {
  return (
    <div className="min-h-screen bg-background pb-20">
      {/* Hero */}
      <div className="relative h-[380px] md:h-[420px] overflow-x-clip sm:overflow-hidden">
        <img src={assets.aboutHero} alt="About Us" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-br from-black/85 via-black/65 to-black/40" />
        <div className="absolute inset-0 opacity-[0.04]" style={{ backgroundImage: "repeating-linear-gradient(45deg, currentColor 0, currentColor 1px, transparent 0, transparent 50%)", backgroundSize: "20px 20px" }} />
        <div className="relative z-10 h-full flex flex-col justify-end container pb-12 pt-24">
          <div className="flex items-center gap-2 text-white/60 text-sm mb-3">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <ChevronRight className="w-3 h-3" />
            <span className="text-white">About Us</span>
          </div>
          <motion.p initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="text-primary text-xs font-semibold uppercase tracking-[0.25em] mb-3" style={{ fontFamily: '"Cinzel", serif' }}>Our Story</motion.p>
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="text-4xl md:text-5xl font-display font-bold text-white leading-tight">
            About <em className="text-gold-gradient not-italic">Shubhaam Concret</em>
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }} className="text-white/75 mt-4 max-w-xl leading-relaxed">
            Building Mumbai's floors since 1991 — a legacy of strength, precision, and craftsmanship.
          </motion.p>
        </div>
      </div>

      <section className="py-16 md:py-24">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <FadeUp>
              <div className="relative">
                <div className="rounded-2xl overflow-hidden aspect-[4/3]">
                  <img src={assets.tremix} alt="Shubhaam Concret at work" className="w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-transparent" />
                </div>
                <div className="absolute -bottom-5 -right-5 bg-primary text-primary-foreground rounded-2xl p-5 shadow-xl" style={{ boxShadow: "0 8px 32px oklch(0.68 0.162 68 / 0.4)" }}>
                  <p className="text-3xl font-bold leading-none" style={{ fontFamily: '"Cormorant Garamond", serif' }}>33+</p>
                  <p className="text-xs mt-1 font-medium opacity-80">Years of<br />Excellence</p>
                </div>
              </div>
            </FadeUp>
            <FadeUp delay={0.2}>
              <div>
                <p className="section-label mb-3">Who We Are</p>
                <h2 className="text-[clamp(1.8rem,4vw,3rem)] font-semibold text-foreground leading-tight mb-4" style={{ fontFamily: '"Cormorant Garamond", serif' }}>
                  Mumbai's Premier<br /><em className="text-primary">Concret Flooring</em> Company
                </h2>
                <div className="gold-divider mb-5" />
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Founded in 1991 by Kiran Shah, Shubhaam Concret Floors Pvt. Ltd. has grown from a small flooring contractor into Mumbai's most trusted name in industrial and commercial concrete flooring. With a team of 100+ skilled professionals and a portfolio of 1,500+ completed projects, we bring unmatched expertise to every assignment.
                </p>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  We specialise in Tremix VDF flooring, Polished Concrete, Laser Screed, Stamped Concrete, Society Repairing Work, and Thermoplastic Road Marking — serving clients from large industrial corporations to residential housing societies.
                </p>
                <div className="grid grid-cols-2 gap-4 mb-6">
                  {[{ label: "Projects Completed", value: "1,500+" }, { label: "Happy Clients", value: "1,500+" }, { label: "Team Members", value: "100+" }, { label: "Years in Business", value: "33+" }].map(stat => (
                    <div key={stat.label} className="bg-muted/40 rounded-xl p-4 border border-border">
                      <p className="text-2xl font-bold text-primary" style={{ fontFamily: '"Cormorant Garamond", serif' }}>{stat.value}</p>
                      <p className="text-xs text-muted-foreground mt-1">{stat.label}</p>
                    </div>
                  ))}
                </div>
                <Link href="/contact">
                  <Button className="bg-primary text-primary-foreground hover:opacity-90 rounded-full px-6">Work With Us <ArrowRight className="ml-2 w-4 h-4" /></Button>
                </Link>
              </div>
            </FadeUp>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20 bg-muted/30 border-y border-border">
        <div className="container">
          <FadeUp className="text-center mb-12">
            <p className="section-label mb-3">Our Foundation</p>
            <h2 className="text-[clamp(1.8rem,4vw,2.8rem)] font-semibold text-foreground" style={{ fontFamily: '"Cormorant Garamond", serif' }}>The Values We Build On</h2>
            <div className="gold-divider mx-auto mt-4" />
          </FadeUp>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {VALUES.map((v, i) => (
              <FadeUp key={v.title} delay={i * 0.1}>
                <div className="bg-card rounded-2xl border border-border p-6 text-center hover:border-primary/30 transition-colors">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center mx-auto mb-4">
                    <v.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-semibold text-foreground mb-2" style={{ fontFamily: '"Cormorant Garamond", serif', fontSize: "1.1rem" }}>{v.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{v.desc}</p>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container">
          <FadeUp className="text-center mb-12">
            <p className="section-label mb-3">Our Journey</p>
            <h2 className="text-[clamp(1.8rem,4vw,2.8rem)] font-semibold text-foreground" style={{ fontFamily: '"Cormorant Garamond", serif' }}>Milestones of <em className="text-primary">Excellence</em></h2>
            <div className="gold-divider mx-auto mt-4" />
          </FadeUp>
          <div className="relative max-w-3xl mx-auto">
            <div className="absolute left-[50%] top-0 bottom-0 w-px bg-gradient-to-b from-primary/40 via-primary/20 to-transparent hidden md:block" />
            <div className="space-y-8">
              {MILESTONES.map((m, i) => (
                <FadeUp key={m.year} delay={i * 0.08}>
                  <div className={`flex items-center gap-6 ${i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}`}>
                    <div className={`flex-1 ${i % 2 === 0 ? "md:text-right" : "md:text-left"}`}>
                      <div className={`bg-card rounded-2xl border border-border p-5 hover:border-primary/30 transition-colors ${i % 2 === 0 ? "md:mr-6" : "md:ml-6"}`}>
                        <p className="text-primary font-bold text-lg mb-1" style={{ fontFamily: '"Cormorant Garamond", serif' }}>{m.year}</p>
                        <h3 className="font-semibold text-foreground mb-1.5">{m.title}</h3>
                        <p className="text-sm text-muted-foreground leading-relaxed">{m.desc}</p>
                      </div>
                    </div>
                    <div className="hidden md:flex w-4 h-4 rounded-full bg-primary border-4 border-background shadow-lg shrink-0 z-10" />
                    <div className="hidden md:block flex-1" />
                  </div>
                </FadeUp>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-foreground relative overflow-x-clip sm:overflow-hidden">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary to-transparent" />
        <div className="container text-center">
          <FadeUp>
            <h2 className="text-[clamp(1.8rem,4vw,3rem)] font-semibold text-background mb-4" style={{ fontFamily: '"Cormorant Garamond", serif' }}>Ready to Start Your Project?</h2>
            <p className="text-background/60 max-w-xl mx-auto mb-6 leading-relaxed">With 33+ years of experience and 1,500+ completed projects, we have the expertise to deliver exceptional results.</p>
            <div className="flex flex-wrap gap-3 justify-center">
              <Link href="/contact"><Button size="lg" className="bg-primary text-primary-foreground hover:opacity-90 rounded-full px-8">Get Free Estimate <ArrowRight className="ml-2 w-4 h-4" /></Button></Link>
              <Link href="/services"><Button size="lg" variant="outline" className="rounded-full px-8 border-white/20 text-background hover:bg-white/10">View Services</Button></Link>
            </div>
          </FadeUp>
        </div>
      </section>
    </div>
  );
}
