import { Button } from "@/components/ui/button";
import { Home, ArrowLeft } from "lucide-react";
import { Link } from "wouter";
import { motion } from "framer-motion";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-background">
<section id="main-content" className="pt-16 sm:pt-8 pb-20">
        <div className="container max-w-2xl text-center px-5">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          >
            <p className="font-serif text-[6rem] sm:text-[8rem] leading-none text-primary/20 italic select-none" aria-hidden="true">404</p>
            <h1 className="font-serif text-2xl sm:text-3xl italic text-foreground -mt-4 sm:-mt-6 mb-4">Page not found</h1>
            <p className="text-muted-foreground mb-8 text-sm sm:text-base">The page you're looking for doesn't exist or has been moved.</p>
            <div className="flex items-center justify-center gap-3">
              <Button onClick={() => window.history.back()} variant="outline" className="rounded-full px-5 sm:px-6 h-10 sm:h-11 text-sm">
                <ArrowLeft className="w-4 h-4 mr-2" aria-hidden="true" /> Go Back
              </Button>
              <Link href="/">
                <Button className="rounded-full bg-foreground text-background hover:bg-foreground/90 px-5 sm:px-6 h-10 sm:h-11 text-sm">
                  <Home className="w-4 h-4 mr-2" aria-hidden="true" /> Home
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
</div>
  );
}
