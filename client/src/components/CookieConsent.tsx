import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Cookie, X } from "lucide-react";
import { Link } from "wouter";

export default function CookieConsent() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("gharseva_cookie_consent");
    if (!consent) {
      const timer = setTimeout(() => setShow(true), 2000);
      return () => clearTimeout(timer);
    }
  }, []);

  const accept = () => {
    localStorage.setItem("gharseva_cookie_consent", "accepted");
    setShow(false);
  };

  const decline = () => {
    localStorage.setItem("gharseva_cookie_consent", "declined");
    setShow(false);
  };

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ type: "spring", damping: 25, stiffness: 300 }}
          className="fixed bottom-20 sm:bottom-4 left-4 right-4 sm:left-auto sm:right-4 sm:max-w-md z-[70] bg-card border border-border rounded-2xl shadow-2xl p-4 sm:p-5"
        >
          <button onClick={decline} className="absolute top-3 right-3 p-1 rounded-full hover:bg-accent text-muted-foreground" aria-label="Close">
            <X className="w-4 h-4" />
          </button>
          <div className="flex items-start gap-3">
            <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
              <Cookie className="w-5 h-5 text-primary" />
            </div>
            <div>
              <h3 className="font-semibold text-foreground text-sm">We use cookies</h3>
              <p className="text-xs text-muted-foreground mt-1 leading-relaxed">
                We use essential cookies for authentication and analytics cookies to improve your experience.{" "}
                <Link href="/privacy" className="text-primary hover:underline">Learn more</Link>
              </p>
              <div className="flex gap-2 mt-3">
                <button
                  onClick={accept}
                  className="px-4 py-2 rounded-full bg-primary text-primary-foreground text-xs font-medium hover:bg-primary/90 transition-colors"
                >
                  Accept All
                </button>
                <button
                  onClick={decline}
                  className="px-4 py-2 rounded-full border border-border text-foreground text-xs font-medium hover:bg-accent transition-colors"
                >
                  Essential Only
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
