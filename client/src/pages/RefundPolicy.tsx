import { Link } from "wouter";
import { ArrowLeft, Clock, CheckCircle, AlertCircle, XCircle } from "lucide-react";

export default function RefundPolicy() {
  return (
    <div className="min-h-screen bg-background">
<main id="main-content" className="pt-20 sm:pt-6 pb-20">
        <div className="container max-w-3xl">
          <Link href="/" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground mb-6 transition-colors">
            <ArrowLeft className="w-4 h-4" /> Back to Home
          </Link>
          <h1 className="font-serif text-[clamp(2rem,4vw,3rem)] italic text-foreground leading-tight mb-2">Cancellation & Refund Policy</h1>
          <p className="text-sm text-muted-foreground mb-8">Last updated: February 23, 2026</p>

          <div className="space-y-6 text-sm leading-relaxed text-foreground/80">
            <section>
              <h2 className="text-lg font-semibold text-foreground mb-4">Cancellation Timeline & Refund</h2>
              <div className="space-y-3">
                <div className="flex items-start gap-4 bg-green-50 dark:bg-green-950/20 border border-green-200 dark:border-green-900/30 rounded-xl p-4">
                  <CheckCircle className="w-5 h-5 text-green-600 shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold text-green-800 dark:text-green-400">More than 48 hours before service</p>
                    <p className="text-green-700 dark:text-green-500">100% refund — Full refund to original payment method</p>
                  </div>
                </div>
                <div className="flex items-start gap-4 bg-yellow-50 dark:bg-yellow-950/20 border border-yellow-200 dark:border-yellow-900/30 rounded-xl p-4">
                  <Clock className="w-5 h-5 text-yellow-600 shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold text-yellow-800 dark:text-yellow-400">24–48 hours before service</p>
                    <p className="text-yellow-700 dark:text-yellow-500">75% refund — 25% cancellation fee applies</p>
                  </div>
                </div>
                <div className="flex items-start gap-4 bg-orange-50 dark:bg-orange-950/20 border border-orange-200 dark:border-orange-900/30 rounded-xl p-4">
                  <AlertCircle className="w-5 h-5 text-orange-600 shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold text-orange-800 dark:text-orange-400">6–24 hours before service</p>
                    <p className="text-orange-700 dark:text-orange-500">50% refund — 50% cancellation fee applies</p>
                  </div>
                </div>
                <div className="flex items-start gap-4 bg-red-50 dark:bg-red-950/20 border border-red-200 dark:border-red-900/30 rounded-xl p-4">
                  <XCircle className="w-5 h-5 text-red-600 shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold text-red-800 dark:text-red-400">Less than 6 hours before service</p>
                    <p className="text-red-700 dark:text-red-500">No refund — Full cancellation fee applies</p>
                  </div>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-lg font-semibold text-foreground mt-8 mb-3">How to Cancel</h2>
              <ol className="list-decimal pl-5 space-y-1.5">
                <li>Go to <strong>My Bookings</strong> in your account</li>
                <li>Find the booking you wish to cancel</li>
                <li>Click <strong>Cancel Booking</strong></li>
                <li>Select a reason for cancellation (optional)</li>
                <li>Confirm the cancellation</li>
              </ol>
              <p className="mt-3">You will receive a confirmation email with refund details (if applicable).</p>
            </section>

            <section>
              <h2 className="text-lg font-semibold text-foreground mt-8 mb-3">Refund Processing</h2>
              <ul className="list-disc pl-5 space-y-1.5">
                <li><strong>Online Payments:</strong> Refunds are processed within 5–7 business days to the original payment method</li>
                <li><strong>Pay After Service:</strong> No charges apply for cancellations (no payment was collected)</li>
                <li>Refund amount will be calculated based on the cancellation timeline above</li>
                <li>GST and platform fees are included in the refund calculation</li>
              </ul>
            </section>

            <section>
              <h2 className="text-lg font-semibold text-foreground mt-8 mb-3">Service Quality Issues</h2>
              <p>If you are unsatisfied with the service quality:</p>
              <ul className="list-disc pl-5 space-y-1.5">
                <li>Report the issue within <strong>7 days</strong> of service completion</li>
                <li>We will investigate and may offer a free re-service or partial/full refund</li>
                <li>Photo/video evidence helps expedite the resolution process</li>
                <li>Our quality team will respond within 48 hours</li>
              </ul>
            </section>

            <section>
              <h2 className="text-lg font-semibold text-foreground mt-8 mb-3">Exceptions</h2>
              <ul className="list-disc pl-5 space-y-1.5">
                <li>Emergency services may have different cancellation terms</li>
                <li>Custom/special order services may be non-refundable</li>
                <li>Promotional or heavily discounted services may have modified refund terms</li>
              </ul>
            </section>

            <section>
              <h2 className="text-lg font-semibold text-foreground mt-8 mb-3">Contact Us</h2>
              <div className="bg-linen rounded-xl p-4">
                <p>For refund-related queries:</p>
                <p>Email: refunds@gharseva.com</p>
                <p>Phone: +91-1800-XXX-XXXX</p>
                <p>Hours: Mon–Sat, 9 AM – 7 PM IST</p>
              </div>
            </section>
          </div>
        </div>
      </main>
</div>
  );
}
