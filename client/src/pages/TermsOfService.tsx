import { Link } from "wouter";
import { ArrowLeft, ChevronRight } from "lucide-react";
import { motion } from "framer-motion";
import { assets } from "@/lib/assets";

export default function TermsOfService() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero */}
      <div className="relative h-[300px] overflow-x-clip sm:overflow-hidden">
        <img src={assets.services.laserScreed} alt="Terms of Service" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-br from-black/85 via-black/65 to-black/40" />
        <div className="relative z-10 h-full flex flex-col justify-end container pb-12 pt-24">
          <div className="flex items-center gap-2 text-white/60 text-sm mb-3">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <ChevronRight className="w-3 h-3" />
            <span className="text-white">Terms of Service</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-display font-bold text-white mb-3">
            Terms of <span className="text-gold-gradient">Service</span>
          </h1>
          <p className="text-white/75 text-lg max-w-2xl">
            Please read these terms carefully before using our services.
          </p>
        </div>
      </div>

<main id="main-content" className="pb-20">
        <div className="container max-w-3xl">
          <Link href="/" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground mb-6 transition-colors">
            <ArrowLeft className="w-4 h-4" /> Back to Home
          </Link>
          <h2 className="font-serif text-[clamp(2rem,4vw,3rem)] italic text-foreground leading-tight mb-2">Terms of Service</h2>
          <p className="text-sm text-muted-foreground mb-8">Last updated: February 23, 2026</p>

          <div className="prose prose-neutral dark:prose-invert max-w-none space-y-6 text-sm leading-relaxed text-foreground/80">
            <section>
              <h2 className="text-lg font-semibold text-foreground mt-8 mb-3">1. Acceptance of Terms</h2>
              <p>By accessing or using GharSeva ("the Platform"), you agree to be bound by these Terms of Service. If you do not agree, please do not use our services. These terms constitute a legally binding agreement between you and GharSeva Technologies Pvt. Ltd.</p>
            </section>

            <section>
              <h2 className="text-lg font-semibold text-foreground mt-8 mb-3">2. Service Description</h2>
              <p>GharSeva is an online marketplace that connects homeowners with verified service professionals for home maintenance, repair, and improvement services. We act as an intermediary platform and do not directly provide the services.</p>
            </section>

            <section>
              <h2 className="text-lg font-semibold text-foreground mt-8 mb-3">3. User Accounts</h2>
              <ul className="list-disc pl-5 space-y-1.5">
                <li>You must be at least 18 years old to create an account</li>
                <li>You are responsible for maintaining the confidentiality of your account credentials</li>
                <li>You agree to provide accurate, current, and complete information</li>
                <li>One account per person; multiple accounts may be terminated</li>
                <li>You are responsible for all activities under your account</li>
              </ul>
            </section>

            <section>
              <h2 className="text-lg font-semibold text-foreground mt-8 mb-3">4. Booking & Service Terms</h2>
              <ul className="list-disc pl-5 space-y-1.5">
                <li>All bookings are subject to availability of service professionals</li>
                <li>Prices displayed are inclusive of base service charges; GST (18%) and platform fees are added at checkout</li>
                <li>Service professionals are independent contractors, not employees of GharSeva</li>
                <li>You agree to provide safe and reasonable access to the service location</li>
                <li>Additional charges may apply for materials, parts, or extended service duration</li>
              </ul>
            </section>

            <section>
              <h2 className="text-lg font-semibold text-foreground mt-8 mb-3">5. Pricing & Payment</h2>
              <ul className="list-disc pl-5 space-y-1.5">
                <li>All prices are in Indian Rupees (INR) and include applicable taxes as displayed</li>
                <li>Payment can be made online (via Stripe) or after service completion</li>
                <li>Online payments are processed securely through Stripe's PCI-DSS compliant infrastructure</li>
                <li>We reserve the right to modify prices with prior notice</li>
                <li>Promotional discounts are subject to terms and validity periods</li>
              </ul>
            </section>

            <section>
              <h2 className="text-lg font-semibold text-foreground mt-8 mb-3">6. Cancellation & Refund Policy</h2>
              <div className="bg-linen rounded-xl p-4 space-y-2">
                <p><strong>More than 48 hours before service:</strong> 100% refund</p>
                <p><strong>24–48 hours before service:</strong> 75% refund</p>
                <p><strong>6–24 hours before service:</strong> 50% refund</p>
                <p><strong>Less than 6 hours before service:</strong> No refund</p>
              </div>
              <p className="mt-3">Refunds are processed within 5–7 business days to the original payment method. For pay-after-service bookings, no charges apply for cancellations.</p>
            </section>

            <section>
              <h2 className="text-lg font-semibold text-foreground mt-8 mb-3">7. Service Quality Guarantee</h2>
              <p>We offer a 7-day satisfaction guarantee. If you are not satisfied with the service quality, you may raise a complaint within 7 days of service completion. We will arrange a re-service or provide a partial/full refund at our discretion.</p>
            </section>

            <section>
              <h2 className="text-lg font-semibold text-foreground mt-8 mb-3">8. Prohibited Activities</h2>
              <ul className="list-disc pl-5 space-y-1.5">
                <li>Using the platform for any unlawful purpose</li>
                <li>Harassing, threatening, or abusing service professionals</li>
                <li>Providing false information or fraudulent bookings</li>
                <li>Attempting to bypass the platform for direct transactions</li>
                <li>Scraping, data mining, or automated access to the platform</li>
                <li>Impersonating another person or entity</li>
              </ul>
            </section>

            <section>
              <h2 className="text-lg font-semibold text-foreground mt-8 mb-3">9. Limitation of Liability</h2>
              <p>GharSeva acts as a marketplace connecting users with service providers. We are not liable for the quality, safety, or legality of services provided by independent professionals. Our liability is limited to the amount paid for the specific service in question.</p>
            </section>

            <section>
              <h2 className="text-lg font-semibold text-foreground mt-8 mb-3">10. Intellectual Property</h2>
              <p>All content on the Platform, including logos, text, images, and software, is the property of GharSeva Technologies Pvt. Ltd. and is protected under Indian copyright and trademark laws.</p>
            </section>

            <section>
              <h2 className="text-lg font-semibold text-foreground mt-8 mb-3">11. Dispute Resolution</h2>
              <p>Any disputes shall be resolved through arbitration in accordance with the Arbitration and Conciliation Act, 1996. The seat of arbitration shall be New Delhi, India. The language of arbitration shall be English.</p>
            </section>

            <section>
              <h2 className="text-lg font-semibold text-foreground mt-8 mb-3">12. Governing Law</h2>
              <p>These Terms shall be governed by and construed in accordance with the laws of India. The courts of New Delhi shall have exclusive jurisdiction.</p>
            </section>

            <section>
              <h2 className="text-lg font-semibold text-foreground mt-8 mb-3">13. Contact</h2>
              <div className="bg-linen rounded-xl p-4">
                <p><strong>GharSeva Technologies Pvt. Ltd.</strong></p>
                <p>Email: legal@gharseva.com</p>
                <p>Phone: +91-1800-XXX-XXXX</p>
              </div>
            </section>
          </div>
        </div>
      </main>
</div>
  );
}
