import { Link } from "wouter";
import { Phone, Mail, MapPin, ExternalLink } from "lucide-react";
import { assets } from "@/lib/assets";
import { useTheme } from "@/contexts/ThemeContext";

const LOGO_URL = assets.logoOg;

const SERVICES = [
  { label: "Tremix (VDF)", href: "/services/tremix" },
  { label: "Polished Concrete", href: "/services/polished" },
  { label: "Laser Screed", href: "/services/laser-screed" },
  { label: "Stamped Concrete", href: "/services/stamping" },
  { label: "Society Repairing", href: "/services/society" },
  { label: "Thermoplastic Marking", href: "/services/thermoplastic" },
  { label: "Micro-Topping", href: "/services/micro-topping" },
  { label: "Truss Screed", href: "/services/truss-screed" },
  { label: "Innovative & Decorative", href: "/services/innovative-decorative" },
];

export default function Footer() {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  return (
    <footer className="bg-foreground text-background/90 relative overflow-hidden">
      {/* Geometric pattern */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `repeating-linear-gradient(45deg, currentColor 0, currentColor 1px, transparent 0, transparent 50%)`,
          backgroundSize: "20px 20px",
        }}
      />

      {/* Gold top border */}
      <div className="h-px bg-gradient-to-r from-transparent via-primary to-transparent" />

      <div className="container relative py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className={`mb-4 rounded-xl p-3 inline-block ${isDark ? "bg-white/10" : "bg-white"}`}>
              <img 
                src={LOGO_URL} 
                alt="Shubhaam Concret Floors" 
                className="h-14 object-contain"
              />
            </div>
            <p className="text-sm text-background/60 leading-relaxed mb-4">
              Mumbai's trusted partner for superior concrete flooring solutions since 1991. 33+ years of excellence in industrial and commercial flooring.
            </p>
            <p className="text-xs text-background/50 leading-relaxed mb-4">
              We Specialize in Laser Screed, Tremix, Polished Concrete, Stamped Concrete and Decorative Concrete Flooring applicable in Industries, Warehouse, Residential Basement & Podium Car Parking Area, Road & Airport etc.
            </p>
          </div>

          {/* Services */}
          <div>
            <div className="text-sm font-semibold text-primary tracking-widest uppercase mb-4" style={{ fontFamily: '"Cinzel", serif' }}>
              Services
            </div>
            <ul className="space-y-2.5">
              {SERVICES.map((s) => (
                <li key={s.href}>
                  <Link href={s.href} className="text-sm text-background/60 hover:text-primary transition-colors duration-200 flex items-center gap-1.5 group">
                    <span className="w-1 h-1 rounded-full bg-primary/40 group-hover:bg-primary transition-colors" />
                    {s.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <div className="text-sm font-semibold text-primary tracking-widest uppercase mb-4" style={{ fontFamily: '"Cinzel", serif' }}>
              Quick Links
            </div>
            <ul className="space-y-2.5">
              {[
                { label: "Home", href: "/" },
                { label: "About Us", href: "/about" },
                { label: "Services", href: "/services" },
                { label: "Products", href: "/products" },
                { label: "Projects", href: "/projects" },
                { label: "Team", href: "/team" },
                { label: "Blog", href: "/blog" },
                { label: "Contact", href: "/contact" },
                { label: "FAQ", href: "/faq" },
              ].map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-background/60 hover:text-primary transition-colors duration-200 flex items-center gap-1.5 group">
                    <span className="w-1 h-1 rounded-full bg-primary/40 group-hover:bg-primary transition-colors" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <div className="text-sm font-semibold text-primary tracking-widest uppercase mb-4" style={{ fontFamily: '"Cinzel", serif' }}>
              Contact Us
            </div>
            <ul className="space-y-3">
              <li>
                <a href="tel:+919821024267" className="flex items-start gap-2.5 text-sm text-background/60 hover:text-primary transition-colors group">
                  <Phone className="w-4 h-4 mt-0.5 text-primary/60 group-hover:text-primary flex-shrink-0" />
                  <div>
                    <div>+91 98210 24267</div>
                    <div>+91 92230 49719</div>
                  </div>
                </a>
              </li>
              <li>
                <a href="mailto:shah.kiran1970@gmail.com" className="flex items-start gap-2.5 text-sm text-background/60 hover:text-primary transition-colors group">
                  <Mail className="w-4 h-4 mt-0.5 text-primary/60 group-hover:text-primary flex-shrink-0" />
                  <div>
                    <div>shah.kiran1970@gmail.com</div>
                    <div>info@shubhameng.com</div>
                  </div>
                </a>
              </li>
              <li>
                <div className="flex items-start gap-2.5 text-sm text-background/60">
                  <MapPin className="w-4 h-4 mt-0.5 text-primary/60 flex-shrink-0" />
                  <div>
                    207/208, 2nd Floor, Prestige Industrial Estate,<br />
                    Bavdi Lane, Marve Road, Malad (West),<br />
                    Mumbai – 400 064
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-6 border-t border-background/10 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-background/40">
            © {new Date().getFullYear()} Shubhaam Concret Floors Pvt. Ltd. All rights reserved.
          </p>
          <p className="text-xs text-background/30">
            Mumbai, India — Est. 1991
          </p>
        </div>
      </div>
    </footer>
  );
}
