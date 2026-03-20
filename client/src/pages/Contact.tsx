import { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "wouter";
import { Phone, Mail, MapPin, Clock, CheckCircle2, Send, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useTheme } from "@/contexts/ThemeContext";
import { assets } from "@/lib/assets";

function FadeUp({ children, delay = 0, className = "" }: { children: React.ReactNode; delay?: number; className?: string }) {
  return (
    <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-40px" }} transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }} className={className}>
      {children}
    </motion.div>
  );
}

const CONTACT_INFO = [
  { icon: Phone, title: "Phone", lines: ["+91 98210 24267", "+91 92230 49719"], href: "tel:+919821024267" },
  { icon: Mail, title: "Email", lines: ["shah.kiran1970@gmail.com", "info@shubhameng.com"], href: "mailto:shah.kiran1970@gmail.com" },
  { icon: MapPin, title: "Address", lines: ["207/208, 2nd Floor, Prestige Industrial Estate,", "Bavdi Lane, Marve Road, Malad (West),", "Mumbai – 400 064"], href: "https://maps.google.com/?q=Shubhaam+Concret+Floors+Pvt+Ltd+Malad+Mumbai" },
  { icon: Clock, title: "Working Hours", lines: ["Mon - Sat: 9:00 AM - 7:00 PM", "Sunday: By Appointment"], href: "#" },
];

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", phone: "", service: "", message: "" });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const { theme } = useTheme();
  const isDark = theme === "dark";

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    await new Promise(r => setTimeout(r, 1000));
    setSubmitted(true);
    setLoading(false);
  };

  return (
    <div className="min-h-screen bg-background pb-20">
      {/* Hero */}
      <div className="relative h-[380px] md:h-[420px] overflow-x-clip sm:overflow-hidden">
        <img src={assets.services.thermoplastic} alt="Contact Us" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-br from-black/85 via-black/65 to-black/40" />
        <div className="absolute inset-0 opacity-[0.04]" style={{ backgroundImage: "repeating-linear-gradient(45deg, currentColor 0, currentColor 1px, transparent 0, transparent 50%)", backgroundSize: "20px 20px" }} />
        <div className="relative z-10 h-full flex flex-col justify-end container pb-12 pt-24">
          <div className="flex items-center gap-2 text-white/60 text-sm mb-3">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <ChevronRight className="w-3 h-3" />
            <span className="text-white">Contact</span>
          </div>
          <motion.p initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="text-primary text-xs font-semibold uppercase tracking-[0.25em] mb-3" style={{ fontFamily: "Cinzel, serif" }}>Get In Touch</motion.p>
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="text-4xl md:text-5xl font-display font-bold text-white leading-tight">
            Contact <em className="text-gold-gradient not-italic">Us</em>
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }} className="text-white/75 mt-4 max-w-xl leading-relaxed">
            Ready to discuss your flooring project? We are here to help with a free consultation and estimate.
          </motion.p>
        </div>
      </div>
      <div className="container py-16 md:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <FadeUp>
            <div>
              <p className="section-label mb-3">Reach Out</p>
              <h2 className="text-[clamp(1.6rem,3.5vw,2.5rem)] font-semibold text-foreground mb-4" style={{ fontFamily: "Cormorant Garamond, serif" }}>
                We Would Love to Hear<br /><em className="text-primary">From You</em>
              </h2>
              <div className="gold-divider mb-6" />
              <p className="text-muted-foreground leading-relaxed mb-8">
                Whether you are planning a large industrial flooring project or a residential society repair, our team is ready to provide expert guidance and a detailed proposal.
              </p>
              <div className="space-y-4">
                {CONTACT_INFO.map((info, i) => (
                  <a key={info.title} href={info.href} className="flex items-start gap-4 p-4 rounded-xl bg-card border border-border hover:border-primary/30 transition-all group">
                    <div className="w-10 h-10 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center shrink-0">
                      <info.icon className="w-4 h-4 text-primary" />
                    </div>
                    <div>
                      <p className="text-xs font-semibold text-primary mb-1" style={{ fontFamily: "Cinzel, serif", fontSize: "0.6rem", letterSpacing: "0.15em", textTransform: "uppercase" }}>{info.title}</p>
                      {info.lines.map(line => <p key={line} className="text-sm text-foreground">{line}</p>)}
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </FadeUp>
          <FadeUp delay={0.2}>
            <div className="bg-card rounded-2xl border border-border p-6 md:p-8 shadow-sm">
              <p className="section-label mb-3">Send a Message</p>
              <h3 className="text-xl font-semibold text-foreground mb-5" style={{ fontFamily: "Cormorant Garamond, serif" }}>Request a Free Estimate</h3>
              {submitted ? (
                <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} className="text-center py-12">
                  <div className="w-16 h-16 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center mx-auto mb-4">
                    <CheckCircle2 className="w-8 h-8 text-primary" />
                  </div>
                  <h4 className="text-xl font-semibold text-foreground mb-2" style={{ fontFamily: "Cormorant Garamond, serif" }}>Message Sent!</h4>
                  <p className="text-muted-foreground text-sm">Our team will contact you within 24 hours.</p>
                  <button onClick={() => { setSubmitted(false); setForm({ name: "", email: "", phone: "", service: "", message: "" }); }} className="mt-4 text-sm text-primary hover:underline">Send another message</button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-medium text-foreground/70 mb-1.5" style={{ fontFamily: "Cinzel, serif", fontSize: "0.6rem", letterSpacing: "0.12em", textTransform: "uppercase" }}>Full Name *</label>
                      <input type="text" value={form.name} onChange={e => setForm({ ...form, name: e.target.value })} required placeholder="Your full name" className="w-full px-4 py-3 rounded-xl bg-background border border-border text-foreground placeholder-muted-foreground text-sm focus:outline-none focus:border-primary/60 transition-all" />
                    </div>
                    <div>
                      <label className="block text-xs font-medium text-foreground/70 mb-1.5" style={{ fontFamily: "Cinzel, serif", fontSize: "0.6rem", letterSpacing: "0.12em", textTransform: "uppercase" }}>Phone *</label>
                      <input type="tel" value={form.phone} onChange={e => setForm({ ...form, phone: e.target.value })} required placeholder="+91 XXXXX XXXXX" className="w-full px-4 py-3 rounded-xl bg-background border border-border text-foreground placeholder-muted-foreground text-sm focus:outline-none focus:border-primary/60 transition-all" />
                    </div>
                  </div>
                  <div>
                    <label className="block text-xs font-medium text-foreground/70 mb-1.5" style={{ fontFamily: "Cinzel, serif", fontSize: "0.6rem", letterSpacing: "0.12em", textTransform: "uppercase" }}>Email</label>
                    <input type="email" value={form.email} onChange={e => setForm({ ...form, email: e.target.value })} placeholder="your@email.com" className="w-full px-4 py-3 rounded-xl bg-background border border-border text-foreground placeholder-muted-foreground text-sm focus:outline-none focus:border-primary/60 transition-all" />
                  </div>
                  <div>
                    <label className="block text-xs font-medium text-foreground/70 mb-1.5" style={{ fontFamily: "Cinzel, serif", fontSize: "0.6rem", letterSpacing: "0.12em", textTransform: "uppercase" }}>Service Required</label>
                    <select value={form.service} onChange={e => setForm({ ...form, service: e.target.value })} className="w-full px-4 py-3 rounded-xl bg-background border border-border text-foreground text-sm focus:outline-none focus:border-primary/60 transition-all">
                      <option value="">Select a service...</option>
                      <option value="tremix">Tremix (VDF) Flooring</option>
                      <option value="polished">Polished Concrete</option>
                      <option value="laser">Laser Screed</option>
                      <option value="stamping">Stamped Concrete</option>
                      <option value="society">Society Repairing Work</option>
                      <option value="thermoplastic">Thermoplastic Marking</option>
                      <option value="micro-topping">Micro-Topping Flooring</option>
                      <option value="truss-screed">Truss Screed</option>
                      <option value="decorative">Innovative & Decorative Concrete</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-xs font-medium text-foreground/70 mb-1.5" style={{ fontFamily: "Cinzel, serif", fontSize: "0.6rem", letterSpacing: "0.12em", textTransform: "uppercase" }}>Project Details *</label>
                    <textarea value={form.message} onChange={e => setForm({ ...form, message: e.target.value })} required rows={4} placeholder="Describe your project..." className="w-full px-4 py-3 rounded-xl bg-background border border-border text-foreground placeholder-muted-foreground text-sm focus:outline-none focus:border-primary/60 transition-all resize-none" />
                  </div>
                  <Button type="submit" disabled={loading} className="w-full bg-primary text-primary-foreground hover:opacity-90 rounded-xl py-3 font-semibold">
                    {loading ? <span className="flex items-center gap-2"><div className="w-4 h-4 border-2 border-primary-foreground/30 border-t-primary-foreground rounded-full animate-spin" />Sending...</span> : <span className="flex items-center gap-2"><Send className="w-4 h-4" />Send Enquiry</span>}
                  </Button>
                  <p className="text-xs text-muted-foreground text-center">We will respond within 24 hours. Your information is kept confidential.</p>
                </form>
              )}
            </div>
          </FadeUp>
        </div>

        {/* Google Map */}
        <div className="mt-16">
          <FadeUp>
            <div className="text-center mb-8">
              <p className="section-label mb-3">Visit Our Office</p>
              <h2 className="text-[clamp(1.6rem,3.5vw,2.5rem)] font-semibold text-foreground" style={{ fontFamily: "Cormorant Garamond, serif" }}>
                Find Us on the <em className="text-primary">Map</em>
              </h2>
            </div>
          </FadeUp>
          <FadeUp delay={0.1}>
            <div className="rounded-2xl overflow-hidden border border-border shadow-sm">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3769.5!2d72.8286!3d19.1889!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7b70e8f8b5c1d1%3A0x1234567890abcdef!2sPrestige%20Industrial%20Estate%2C%20Bavdi%20Lane%2C%20Marve%20Road%2C%20Malad%20(West)%2C%20Mumbai%20400064!5e0!3m2!1sen!2sin!4v1700000000000"
                width="100%"
                height="400"
                style={{ 
                  border: 0,
                  filter: isDark ? "invert(0.85) hue-rotate(180deg)" : "none"
                }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Shubhaam Concret Floors Office Location"
                className="w-full transition-all duration-500"
              />
            </div>
          </FadeUp>
        </div>
      </div>
    </div>
  );
}
