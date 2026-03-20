import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, Phone } from "lucide-react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";

const FAQS = [
  { q: "What is Tremix VDF flooring and what are its advantages?", a: "Tremix VDF (Vacuum Dewatered Flooring) uses vacuum dewatering equipment to remove excess water from freshly poured concrete, resulting in up to 40% higher compressive strength, better surface hardness, and superior abrasion resistance. Ideal for warehouses, factories, and heavy-traffic areas." },
  { q: "How long does a typical concrete flooring project take?", a: "Project duration depends on area and type. A standard Tremix VDF floor for a 10,000 sq.ft. warehouse takes 3-5 days. Polished concrete may take 5-7 days. Laser screed projects can cover up to 3,000 sq.m. per day. We provide a detailed timeline during initial consultation." },
  { q: "Do you provide services outside Mumbai?", a: "Yes, while our primary base is in Mumbai, we undertake projects across Maharashtra and other major cities in India. For projects outside Mumbai, additional mobilization charges may apply. Please contact us to discuss your specific location." },
  { q: "What is the minimum project size you accept?", a: "We accept projects of all sizes, from small residential society repairs to large industrial warehouse floors. For Tremix VDF and Laser Screed services, a minimum area of 500 sq.ft. is typically required for cost-effectiveness." },
  { q: "Do you offer a warranty on your work?", a: "Yes, we provide a 1-year workmanship warranty on all flooring projects. For polished concrete and Tremix VDF floors, we also offer maintenance guidance. Specific warranty terms are outlined in our project contracts." },
  { q: "What is the difference between Laser Screed and conventional screeding?", a: "Conventional screeding relies on manual leveling which can result in inconsistencies over large areas. Laser Screed uses laser-guided automated equipment to achieve flatness tolerances of plus or minus 3mm over 3 metres, critical for modern warehouses with forklifts and AGVs. It is also significantly faster, covering up to 3,000 sq.m. per day." },
  { q: "Can you repair existing concrete floors?", a: "Absolutely. Our Society Repairing Work service covers structural crack repair, spalling restoration, surface grinding, and waterproofing for existing concrete floors. We assess the condition and recommend the most appropriate repair methodology." },
  { q: "How do I get a quote for my project?", a: "Fill out our contact form or call us at +91 98210 24267. We will schedule a site visit, assess the area and requirements, and provide a detailed written quotation within 48 hours." },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="min-h-screen bg-background pb-20">
      <div className="relative py-20 md:py-28 overflow-hidden bg-foreground">
        <div className="absolute inset-0 opacity-[0.04]" style={{ backgroundImage: "repeating-linear-gradient(45deg, currentColor 0, currentColor 1px, transparent 0, transparent 50%)", backgroundSize: "20px 20px" }} />
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary to-transparent" />
        <div className="container relative text-center">
          <motion.p initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="text-primary text-xs font-semibold uppercase tracking-[0.25em] mb-3" style={{ fontFamily: "Cinzel, serif" }}>Common Questions</motion.p>
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="text-[clamp(2rem,5vw,3.5rem)] font-semibold text-background leading-tight" style={{ fontFamily: "Cormorant Garamond, serif" }}>
            Frequently Asked <em style={{ color: "var(--primary)" }}>Questions</em>
          </motion.h1>
        </div>
      </div>
      <div className="container py-16 md:py-20 max-w-3xl">
        <div className="space-y-3">
          {FAQS.map((faq, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.04 }}
              className={`rounded-2xl border overflow-hidden transition-all duration-300 ${openIndex === i ? "border-primary/30 shadow-sm" : "border-border"}`}>
              <button onClick={() => setOpenIndex(openIndex === i ? null : i)} className="w-full flex items-center justify-between gap-4 p-5 text-left bg-card hover:bg-muted/30 transition-colors">
                <span className="font-medium text-foreground text-sm md:text-base leading-snug">{faq.q}</span>
                <motion.div animate={{ rotate: openIndex === i ? 180 : 0 }} transition={{ duration: 0.2 }} className="shrink-0">
                  <ChevronDown className={`w-5 h-5 transition-colors ${openIndex === i ? "text-primary" : "text-muted-foreground"}`} />
                </motion.div>
              </button>
              <AnimatePresence>
                {openIndex === i && (
                  <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }} className="overflow-hidden">
                    <div className="px-5 pb-5 pt-1 bg-card border-t border-border/50">
                      <div className="h-px bg-gradient-to-r from-primary/30 to-transparent mb-4" />
                      <p className="text-muted-foreground text-sm leading-relaxed">{faq.a}</p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.3 }} className="mt-12 bg-primary/5 border border-primary/15 rounded-2xl p-8 text-center">
          <p className="section-label mb-3">Still Have Questions?</p>
          <h3 className="text-xl font-semibold text-foreground mb-3" style={{ fontFamily: "Cormorant Garamond, serif" }}>We Are Here to Help</h3>
          <p className="text-muted-foreground text-sm mb-5 leading-relaxed">Cannot find the answer you are looking for? Our team is ready to assist you with any questions about your project.</p>
          <div className="flex flex-wrap gap-3 justify-center">
            <Link href="/contact"><Button className="bg-primary text-primary-foreground hover:opacity-90 rounded-full px-6">Contact Us</Button></Link>
            <a href="tel:+919821024267"><Button variant="outline" className="rounded-full px-6 border-primary/30 text-primary hover:bg-primary/5"><Phone className="mr-2 w-4 h-4" />Call Now</Button></a>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
