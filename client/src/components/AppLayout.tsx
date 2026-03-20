import { Link, useLocation } from "wouter";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect, useRef } from "react";
import { useIsMobile } from "@/hooks/useMobile";
import {
  Home, Grid3x3, Phone, HelpCircle, BookOpen,
  Shield, FileText, Sun, Moon, Menu, X,
  Package, Users, Newspaper, FolderOpen,
} from "lucide-react";
import { useTheme } from "@/contexts/ThemeContext";
import { assets } from "@/lib/assets";
import Footer from "./Footer";

const LOGO_URL = assets.logo;

interface NavItem {
  icon: typeof Home;
  label: string;
  path: string;
}

const mainNav: NavItem[] = [
  { icon: Home, label: "Home", path: "/" },
  { icon: Grid3x3, label: "Services", path: "/services" },
  { icon: Package, label: "Products", path: "/products" },
  { icon: FolderOpen, label: "Projects", path: "/projects" },
  { icon: Users, label: "Team", path: "/team" },
  { icon: Newspaper, label: "Blog", path: "/blog" },
  { icon: BookOpen, label: "About Us", path: "/about" },
  { icon: Phone, label: "Contact", path: "/contact" },
];

const bottomNav: NavItem[] = [
  { icon: Home, label: "Home", path: "/" },
  { icon: Grid3x3, label: "Services", path: "/services" },
  { icon: Package, label: "Products", path: "/products" },
  { icon: BookOpen, label: "About", path: "/about" },
  { icon: Phone, label: "Contact", path: "/contact" },
];

const secondaryNav: NavItem[] = [
  { icon: HelpCircle, label: "FAQ", path: "/faq" },
  { icon: Shield, label: "Privacy", path: "/privacy" },
  { icon: FileText, label: "Terms", path: "/terms" },
];

export default function AppLayout({ children, hideNav = false, hideAll = false }: { children: React.ReactNode; hideNav?: boolean; hideAll?: boolean }) {
  const isMobile = useIsMobile();
  const [location] = useLocation();
  const { theme, toggleTheme } = useTheme();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const isHome = location === "/";
  const lastScrollY = useRef(0);
  const [navHidden, setNavHidden] = useState(false);

  // Scroll to top on route change
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, [location]);

  // Disappearing nav on scroll
  useEffect(() => {
    const handleScroll = () => {
      const currentY = window.scrollY;
      if (currentY > lastScrollY.current && currentY > 120) {
        setNavHidden(true);
      } else {
        setNavHidden(false);
      }
      lastScrollY.current = currentY;
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => { setMobileMenuOpen(false); }, [location]);

  if (hideAll) return <>{children}</>;
  if (hideNav && !isMobile) return <>{children}</>;

  // ═══════════════════════════════════════════════════════════════
  // MOBILE LAYOUT
  // ═══════════════════════════════════════════════════════════════
  if (isMobile) {
    const allMobileNav = [...mainNav, ...secondaryNav];
    return (
      <div className="min-h-screen bg-background">
        {/* Floating pill header — disappears on scroll down */}
        <motion.div
          animate={{ y: navHidden ? -80 : 0, opacity: navHidden ? 0 : 1 }}
          transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className="fixed top-3 left-3 right-3 z-50 flex items-center justify-between pointer-events-none"
        >
          {/* Logo pill */}
          <Link href="/" className="pointer-events-auto">
            <motion.div
              initial={{ opacity: 0, scale: 0.8, y: -20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              className={`flex items-center gap-2 pl-2 pr-3.5 py-1.5 rounded-full shadow-lg transition-all duration-300 ${
                isHome
                  ? "bg-black/30 backdrop-blur-2xl border border-white/20 shadow-black/20"
                  : "bg-background/90 backdrop-blur-2xl border border-border/60"
              }`}
            >
              <img src={LOGO_URL} alt="Shubhaam Concret" className="w-8 h-8 rounded-full object-contain border border-primary/30" />
              <div className="flex flex-col">
                <span className={`text-[13px] font-bold leading-tight ${isHome ? "text-white" : "text-foreground"}`}
                  style={{ fontFamily: '"Cormorant Garamond", serif' }}>
                  Shubhaam <span style={{ color: "var(--primary)" }}>Concrete</span>
                </span>
              </div>
            </motion.div>
          </Link>

          {/* Action buttons */}
          <div className="flex items-center gap-2 pointer-events-auto">
            <motion.button
              initial={{ opacity: 0, scale: 0.8, y: -20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.06 }}
              onClick={() => toggleTheme?.()}
              className={`w-10 h-10 rounded-full flex items-center justify-center shadow-lg transition-all duration-300 active:scale-90 ${
                isHome
                  ? "bg-black/30 backdrop-blur-2xl border border-white/20 text-white"
                  : "bg-background/90 backdrop-blur-2xl border border-border/60 text-foreground"
              }`}
              aria-label="Toggle theme"
            >
              {theme === "dark" ? <Sun className="w-[18px] h-[18px]" /> : <Moon className="w-[18px] h-[18px]" />}
            </motion.button>

            <motion.button
              initial={{ opacity: 0, scale: 0.8, y: -20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.12 }}
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className={`w-10 h-10 rounded-full flex items-center justify-center shadow-lg transition-all duration-300 active:scale-90 ${
                mobileMenuOpen
                  ? "bg-primary text-primary-foreground"
                  : isHome
                    ? "bg-black/30 backdrop-blur-2xl border border-white/20 text-white"
                    : "bg-background/90 backdrop-blur-2xl border border-border/60 text-foreground"
              }`}
              aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
            >
              <AnimatePresence mode="wait">
                {mobileMenuOpen ? (
                  <motion.div key="close" initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }} transition={{ duration: 0.15 }}>
                    <X className="w-[20px] h-[20px]" />
                  </motion.div>
                ) : (
                  <motion.div key="menu" initial={{ rotate: 90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: -90, opacity: 0 }} transition={{ duration: 0.15 }}>
                    <Menu className="w-[20px] h-[20px]" />
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.button>
          </div>
        </motion.div>

        {/* Mobile menu overlay */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <>
              <motion.div
                initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
                transition={{ duration: 0.2 }}
                className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40"
                onClick={() => setMobileMenuOpen(false)}
              />
              <motion.div
                initial={{ opacity: 0, y: -10, scale: 0.96 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -10, scale: 0.96 }}
                transition={{ type: "spring", damping: 28, stiffness: 400 }}
                className="fixed top-[4.5rem] left-3 right-3 z-50 bg-background/97 backdrop-blur-2xl rounded-3xl border border-border/60 shadow-2xl max-h-[calc(100dvh-6rem)] flex flex-col"
              >
                <nav className="p-3 space-y-0.5 overflow-y-auto">
                  {/* Gold accent line */}
                  <div className="h-0.5 bg-gradient-to-r from-transparent via-primary to-transparent mb-3 mx-4 rounded-full" />

                  {allMobileNav.map((item, i) => (
                    <motion.div key={item.path} initial={{ opacity: 0, x: -16 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: i * 0.035 }}>
                      <Link href={item.path}>
                        <div className={`flex items-center gap-3 px-4 py-3 rounded-2xl transition-all duration-200 ${
                          location === item.path
                            ? "bg-primary/10 text-primary"
                            : "text-foreground hover:bg-accent"
                        }`}>
                          <div className={`w-9 h-9 rounded-xl flex items-center justify-center transition-colors ${
                            location === item.path ? "bg-primary/15" : "bg-muted/60"
                          }`}>
                            <item.icon className="w-[18px] h-[18px]" />
                          </div>
                          <span className="text-[15px] font-medium">{item.label}</span>
                        </div>
                      </Link>
                    </motion.div>
                  ))}

                  {/* Call CTA */}
                  <div className="pt-2 px-2 pb-1">
                    <a
                      href="tel:+919821024267"
                      className="flex items-center justify-center gap-2 w-full py-3 rounded-2xl bg-primary text-primary-foreground font-semibold text-sm"
                    >
                      <Phone className="w-4 h-4" />
                      Call: +91 98210 24267
                    </a>
                  </div>
                </nav>
              </motion.div>
            </>
          )}
        </AnimatePresence>

        {/* Page content */}
        <main id="main-content" className="pb-16">
          {children}
          <Footer />
        </main>

        {/* WhatsApp FAB */}
        <motion.a
          href="https://wa.me/919821024267?text=Hello%2C%20I%20would%20like%20to%20enquire%20about%20your%20concrete%20flooring%20services."
          target="_blank"
          rel="noopener noreferrer"
          initial={{ scale: 0, opacity: 0 }}
          animate={{ y: navHidden ? 0 : 0, scale: 1, opacity: 1 }}
          transition={{ delay: 1, type: "spring", stiffness: 300 }}
          className="whatsapp-fab"
          aria-label="Chat on WhatsApp"
          style={{ bottom: '4.5rem' }}
        >
          <svg viewBox="0 0 24 24" className="w-7 h-7 fill-white">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
          </svg>
        </motion.a>

        {/* Bottom tab bar — disappears on scroll */}
        <motion.nav
          animate={{ y: navHidden ? 80 : 0, opacity: navHidden ? 0 : 1 }}
          transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className="fixed bottom-0 left-0 right-0 z-40 bg-background/95 backdrop-blur-xl border-t border-border safe-area-inset-bottom"
        >
          <div className="flex items-center justify-around px-2 py-1">
            {bottomNav.map((item) => {
              const isActive = item.path === "/" ? location === "/" : location.startsWith(item.path);
              return (
                <Link key={item.path} href={item.path}>
                  <div className="flex flex-col items-center gap-0.5 px-2 py-1 relative">
                    <div className={`w-9 h-9 rounded-xl flex items-center justify-center transition-all duration-200 ${
                      isActive ? "bg-primary/15 text-primary" : "text-muted-foreground"
                    }`}>
                      <item.icon className="w-[18px] h-[18px]" />
                    </div>
                    {isActive && (
                      <motion.div layoutId="bottomNavIndicator" className="absolute -bottom-0.5 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-primary" />
                    )}
                    <span className={`text-[9px] font-medium leading-none ${isActive ? "text-primary" : "text-muted-foreground"}`}>
                      {item.label}
                    </span>
                  </div>
                </Link>
              );
            })}
          </div>
        </motion.nav>
      </div>
    );
  }

  // ═══════════════════════════════════════════════════════════════
  // DESKTOP LAYOUT — Header with hamburger menu
  // ═══════════════════════════════════════════════════════════════
  const allDesktopNav = [...mainNav, ...secondaryNav];

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-40 bg-background/95 backdrop-blur-xl border-b border-border">
        <div className="container flex items-center justify-between h-[72px]">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3">
            <img src={LOGO_URL} alt="Shubhaam Concret" className="w-10 h-10 rounded-full object-contain border-2 border-primary/30" />
            <div>
              <p className="text-base font-bold text-foreground leading-tight" style={{ fontFamily: '"Cormorant Garamond", serif' }}>
                Shubhaam <span className="text-primary">Concret</span>
              </p>
              <p className="text-[8px] text-foreground/50 tracking-[0.2em] uppercase" style={{ fontFamily: '"Cinzel", serif' }}>
                Floors Pvt. Ltd.
              </p>
            </div>
          </Link>

          {/* Actions */}
          <div className="flex items-center gap-3">
            <button onClick={toggleTheme} aria-label={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"} className="p-2.5 rounded-xl hover:bg-muted transition-colors">
              {theme === "dark" ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
            </button>
            <a href="tel:+919821024267" className="hidden sm:flex items-center gap-2 bg-primary text-primary-foreground px-5 py-2.5 rounded-xl font-label font-bold text-sm hover:opacity-90 transition-opacity shadow-lg shadow-primary/20">
              <Phone className="w-4 h-4" /> Call Us
            </a>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label={mobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
              className="p-2.5 rounded-xl hover:bg-muted transition-colors"
            >
              <Menu className="w-5 h-5" />
            </button>
          </div>
        </div>
        <div className="h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent" />
      </header>

      {/* Desktop menu overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40"
              onClick={() => setMobileMenuOpen(false)}
            />
            <motion.div
              initial={{ opacity: 0, y: -10, scale: 0.96 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -10, scale: 0.96 }}
              transition={{ type: "spring", damping: 28, stiffness: 400 }}
              className="fixed top-[80px] right-4 w-72 z-50 bg-background/97 backdrop-blur-2xl rounded-2xl border border-border/60 shadow-2xl p-3 max-h-[calc(100dvh-6rem)] overflow-y-auto"
            >
              <nav className="space-y-1">
                {allDesktopNav.map((item, i) => {
                  const isActive = item.path === "/" ? location === "/" : location.startsWith(item.path);
                  return (
                    <Link key={item.path} href={item.path} onClick={() => setMobileMenuOpen(false)}>
                      <div className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-all text-sm ${
                        isActive
                          ? "bg-primary/10 text-primary font-semibold"
                          : "text-foreground/70 hover:bg-muted/50 hover:text-foreground"
                      }`}>
                        <item.icon className="w-4 h-4" />
                        <span>{item.label}</span>
                      </div>
                    </Link>
                  );
                })}
              </nav>
              <div className="mt-4 pt-4 border-t border-border/50">
                <a href="tel:+919821024267" className="flex items-center justify-center gap-2 w-full bg-primary text-primary-foreground py-3 rounded-xl font-label font-bold text-sm">
                  <Phone className="w-4 h-4" /> +91 98210 24267
                </a>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* WhatsApp FAB */}
      <motion.a
        href="https://wa.me/919821024267?text=Hello%2C%20I%20would%20like%20to%20enquire%20about%20your%20concrete%20flooring%20services."
        target="_blank"
        rel="noopener noreferrer"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 1.5, type: "spring", stiffness: 300 }}
        className="whatsapp-fab hidden sm:flex"
        aria-label="Chat on WhatsApp"
      >
        <svg viewBox="0 0 24 24" className="w-7 h-7 fill-white">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
        </svg>
      </motion.a>

      {/* Main content */}
      <main id="main-content">
        {children}
        <Footer />
      </main>
    </div>
  );
}
