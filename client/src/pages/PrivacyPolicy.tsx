import { Link } from "wouter";
import { ArrowLeft, ChevronRight } from "lucide-react";
import { motion } from "framer-motion";
import { assets } from "@/lib/assets";

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero */}
      <div className="relative h-[300px] overflow-x-clip sm:overflow-hidden">
        <img src={assets.services.tremix} alt="Privacy Policy" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-br from-black/85 via-black/65 to-black/40" />
        <div className="relative z-10 h-full flex flex-col justify-end container pb-12 pt-24">
          <div className="flex items-center gap-2 text-white/60 text-sm mb-3">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <ChevronRight className="w-3 h-3" />
            <span className="text-white">Privacy Policy</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-display font-bold text-white mb-3">
            Privacy <span className="text-gold-gradient">Policy</span>
          </h1>
          <p className="text-white/75 text-lg max-w-2xl">
            Your privacy is important to us. Learn how we collect, use, and protect your information.
          </p>
        </div>
      </div>

<main id="main-content" className="pb-20">
        <div className="container max-w-3xl">
          <Link href="/" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground mb-6 transition-colors">
            <ArrowLeft className="w-4 h-4" /> Back to Home
          </Link>
          <h2 className="font-serif text-[clamp(2rem,4vw,3rem)] italic text-foreground leading-tight mb-2">Privacy Policy</h2>
          <p className="text-sm text-muted-foreground mb-8">Last updated: February 23, 2026</p>

          <div className="prose prose-neutral dark:prose-invert max-w-none space-y-6 text-sm leading-relaxed text-foreground/80">
            <section>
              <h2 className="text-lg font-semibold text-foreground mt-8 mb-3">1. Information We Collect</h2>
              <p><strong>Personal Information:</strong> When you create an account, we collect your name, email address, phone number, and service address. When you make a booking, we collect payment information (processed securely via Stripe).</p>
              <p><strong>Usage Data:</strong> We automatically collect information about how you interact with our platform, including pages visited, search queries, device information, IP address, and browser type.</p>
              <p><strong>Location Data:</strong> With your consent, we may collect your location to show nearby service providers and optimize service delivery.</p>
            </section>

            <section>
              <h2 className="text-lg font-semibold text-foreground mt-8 mb-3">2. How We Use Your Information</h2>
              <ul className="list-disc pl-5 space-y-1.5">
                <li>To process and manage your service bookings</li>
                <li>To communicate booking confirmations, updates, and reminders</li>
                <li>To process payments and issue refunds</li>
                <li>To improve our platform and personalize your experience</li>
                <li>To send promotional offers (with your consent)</li>
                <li>To comply with legal obligations under Indian law</li>
                <li>To detect and prevent fraud or abuse</li>
              </ul>
            </section>

            <section>
              <h2 className="text-lg font-semibold text-foreground mt-8 mb-3">3. Data Sharing</h2>
              <p>We share your information only with:</p>
              <ul className="list-disc pl-5 space-y-1.5">
                <li><strong>Service Providers:</strong> Name, address, and phone number to fulfill your booking</li>
                <li><strong>Payment Processors:</strong> Stripe for secure payment processing</li>
                <li><strong>Analytics Partners:</strong> Anonymized usage data for platform improvement</li>
                <li><strong>Legal Authorities:</strong> When required by law or court order</li>
              </ul>
              <p>We do <strong>not</strong> sell your personal data to third parties.</p>
            </section>

            <section>
              <h2 className="text-lg font-semibold text-foreground mt-8 mb-3">4. Data Security</h2>
              <p>We implement industry-standard security measures including SSL/TLS encryption, secure payment processing via PCI-DSS compliant Stripe, access controls, and regular security audits. However, no method of transmission over the Internet is 100% secure.</p>
            </section>

            <section>
              <h2 className="text-lg font-semibold text-foreground mt-8 mb-3">5. Data Retention</h2>
              <p>We retain your personal data for as long as your account is active or as needed to provide services. Booking records are retained for 7 years for tax and legal compliance. You may request deletion of your account at any time.</p>
            </section>

            <section>
              <h2 className="text-lg font-semibold text-foreground mt-8 mb-3">6. Your Rights (Under IT Act, 2000 & DPDP Act, 2023)</h2>
              <ul className="list-disc pl-5 space-y-1.5">
                <li>Right to access your personal data</li>
                <li>Right to correction of inaccurate data</li>
                <li>Right to erasure (deletion) of your data</li>
                <li>Right to withdraw consent for data processing</li>
                <li>Right to data portability</li>
                <li>Right to nominate another person to exercise rights</li>
                <li>Right to grievance redressal</li>
              </ul>
            </section>

            <section>
              <h2 className="text-lg font-semibold text-foreground mt-8 mb-3">7. Cookies</h2>
              <p>We use essential cookies for authentication and session management. Analytics cookies help us understand usage patterns. You can manage cookie preferences through your browser settings.</p>
            </section>

            <section>
              <h2 className="text-lg font-semibold text-foreground mt-8 mb-3">8. Children's Privacy</h2>
              <p>Our services are not intended for individuals under 18 years of age. We do not knowingly collect personal data from children.</p>
            </section>

            <section>
              <h2 className="text-lg font-semibold text-foreground mt-8 mb-3">9. Contact & Grievance Officer</h2>
              <p>For privacy-related queries or to exercise your rights, contact our Grievance Officer:</p>
              <div className="bg-linen rounded-xl p-4 mt-2">
                <p><strong>GharSeva Grievance Officer</strong></p>
                <p>Email: privacy@gharseva.com</p>
                <p>Phone: +91-1800-XXX-XXXX</p>
                <p>Response time: Within 48 hours</p>
              </div>
            </section>

            <section>
              <h2 className="text-lg font-semibold text-foreground mt-8 mb-3">10. Changes to This Policy</h2>
              <p>We may update this Privacy Policy from time to time. We will notify you of significant changes via email or in-app notification. Continued use of our services after changes constitutes acceptance.</p>
            </section>
          </div>
        </div>
      </main>
</div>
  );
}
