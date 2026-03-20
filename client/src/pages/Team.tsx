import { useRef } from "react";
import { Link } from "wouter";
import { motion, useInView } from "framer-motion";
import { ChevronRight, Linkedin, Mail } from "lucide-react";
import { assets } from "@/lib/assets";

const TEAM = [
  {
    name: "Mr. Kiran R. Shah",
    role: "Director",
    bio: "Founder and Director of Shubhaam Concret Floors Pvt. Ltd. since 1991. Mr. Shah has over 33 years of experience in the concrete flooring industry and has led the company to become one of Mumbai's most trusted names in flooring solutions.",
    img: assets.team.kiranShah,
    expertise: ["Leadership", "Business Strategy", "Client Relations"],
  },
  {
    name: "Mr. Sachin Kamat",
    role: "Technical Head",
    bio: "Leading our technical operations with deep expertise in Tremix VDF, Laser Screed, and modern flooring technologies. Mr. Kamat ensures every project meets the highest quality standards.",
    img: assets.team.sachinKamat,
    expertise: ["Tremix VDF", "Laser Screed", "Quality Control"],
  },
  {
    name: "Mr. Manish Raichura",
    role: "Technical Head",
    bio: "Co-heading the technical department, Mr. Raichura brings specialised knowledge in polished concrete and decorative flooring systems. He has overseen 200+ major projects across Maharashtra.",
    img: assets.team.manishRaichura,
    expertise: ["Polished Concrete", "Decorative Flooring", "Project Execution"],
  },
  {
    name: "Mr. Jayesh Rairakhia",
    role: "Manager – Marketing",
    bio: "Mr. Rairakhia manages our marketing and business development initiatives. His efforts have helped establish strong relationships with India's top industrial and commercial developers.",
    img: assets.team.jayeshRairakhia,
    expertise: ["Marketing", "Business Development", "Client Acquisition"],
  },
  {
    name: "Mr. Bharat Sawant",
    role: "Purchase Head",
    bio: "Managing procurement and supply chain operations, Mr. Sawant ensures we source the best quality raw materials at competitive prices for all our flooring projects.",
    img: assets.team.bharatSawant,
    expertise: ["Procurement", "Supply Chain", "Vendor Management"],
  },
  {
    name: "Ms. Pushpa Nayak",
    role: "Billing Head",
    bio: "Ms. Nayak oversees all billing, invoicing, and financial documentation. Her attention to detail ensures transparent and timely financial operations for all projects.",
    img: assets.team.pushpaNayak,
    expertise: ["Billing", "Financial Operations", "Documentation"],
  },
  {
    name: "Mr. Manish Sharma",
    role: "Planning Head",
    bio: "Mr. Sharma leads project planning and scheduling, ensuring efficient resource allocation and timely completion of all flooring projects across our pan-India operations.",
    img: assets.team.manishSharma,
    expertise: ["Project Planning", "Scheduling", "Resource Management"],
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

export default function Team() {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <div className="relative h-[380px] overflow-x-clip sm:overflow-hidden">
        
<img loading="lazy" src={assets.aboutHero} alt="Team" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-br from-black/85 via-black/65 to-black/40" />
        <div className="relative z-10 h-full flex flex-col justify-end container pb-12 pt-24">
          <div className="flex items-center gap-2 text-white/60 text-sm mb-3">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <ChevronRight className="w-3 h-3" />
            <span className="text-white">Our Team</span>
          </div>
          <span className="section-label text-primary mb-3 block">The People Behind</span>
          <h1 className="text-4xl md:text-6xl font-display font-bold text-white mb-3">
            Meet Our <span className="text-gold-gradient">Team</span>
          </h1>
          <p className="text-white/75 text-lg max-w-2xl">
            Dedicated professionals with decades of combined expertise in concrete flooring.
          </p>
        </div>
      </div>

      <div className="container py-16">
        <Reveal>
          <div className="text-center mb-16 max-w-2xl mx-auto">
            <p className="text-muted-foreground text-lg leading-relaxed">
              Our leadership team of certified concrete specialists, engineers, and managers brings together
              over 33 years of combined experience in the concrete flooring industry.
            </p>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {TEAM.map((member, i) => (
            <Reveal key={member.name} delay={i * 0.08}>
              <div className="group bg-card rounded-3xl overflow-hidden border border-border/50 team-card-hover border-beam">
                <div className="relative h-72 overflow-x-clip sm:overflow-hidden">
                  <img
                    src={member.img}
                    alt={member.name}
                    className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4">
                    <h3 className="font-display text-xl font-bold text-white">{member.name}</h3>
                    <p className="text-primary text-sm font-label">{member.role}</p>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-muted-foreground text-sm leading-relaxed mb-4">{member.bio}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {member.expertise.map((skill) => (
                      <span key={skill} className="text-xs px-2.5 py-1 rounded-full bg-primary/10 text-primary font-label">
                        {skill}
                      </span>
                    ))}
                  </div>
                  <div className="flex gap-2">
                    <button aria-label={`Open LinkedIn profile for ${member.name}`} className="w-9 h-9 rounded-full border border-border hover:border-primary hover:text-primary flex items-center justify-center transition-all">
                      <Linkedin className="w-4 h-4" />
                    </button>
                    <button aria-label={`Email ${member.name}`} className="w-9 h-9 rounded-full border border-border hover:border-primary hover:text-primary flex items-center justify-center transition-all">
                      <Mail className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        {/* Join us CTA */}
        <Reveal delay={0.3}>
          <div className="mt-20 text-center bg-card rounded-3xl p-12 border border-primary/20 border-beam">
            <h2 className="text-3xl font-display font-bold mb-4">Join Our Team</h2>
            <p className="text-muted-foreground mb-6 max-w-xl mx-auto">
              We're always looking for talented concrete specialists, engineers, and project managers to join our growing team.
            </p>
            <Link href="/contact">
              <button className="btn-gold-glow btn-press inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-4 rounded-xl font-label font-bold text-sm tracking-wide hover:opacity-90 transition-all">
                Get in Touch
              </button>
            </Link>
          </div>
        </Reveal>
      </div>
    </div>
  );
}
