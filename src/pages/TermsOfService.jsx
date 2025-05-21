import React from "react";
import "../App.css"; // load color variables
import Footer from "../components/Footer";

export default function TermsOfService() {
  return (
    <>
      <div className="min-h-screen bg-cream text-coal py-16">
        <div className="max-w-3xl mx-auto px-4 space-y-10">
          <h1 className="text-4xl uppercase font-bold">Terms of Service</h1>
          <p>Last updated: May 20, 2025</p>

          {/* ── Terms Sections ───────────────────────── */}
          <section className="space-y-4">
            <h2 className="text-2xl font-semibold">1. Acceptance of Terms</h2>
            <p>
              By accessing or using JabNGo, you agree to be bound by these Terms
              of Service and our Privacy Policy. If you do not agree, do not use
              our services.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold">2. Eligibility</h2>
            <p>
              You must be at least 16 years old to use JabNGo. By using the
              service, you represent that you meet this requirement.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold">
              3. Account Responsibility
            </h2>
            <p>
              You are responsible for maintaining the confidentiality of your
              account and for all activities under it. JabNGo is not liable for
              any loss or damage resulting from unauthorized use.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold">4. Use of the Service</h2>
            <p>
              JabNGo connects fighters with potential sparring partners. You
              agree to use the service only for lawful purposes and to treat all
              users respectfully.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold">5. Prohibited Activities</h2>
            <ul className="list-disc list-inside space-y-2">
              <li>Harassment, abuse, or harm to others</li>
              <li>Impersonation of other users or fake profiles</li>
              <li>Attempting to exploit or damage the service</li>
              <li>Unauthorized commercial activity</li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold">6. Termination</h2>
            <p>
              We reserve the right to suspend or terminate your access if you
              violate these terms or engage in behavior that disrupts the
              community.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold">7. Disclaimer</h2>
            <p>
              JabNGo is provided “as is” without warranties of any kind. We do
              not guarantee specific results from sparring matches or user
              interactions.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold">
              8. Limitation of Liability
            </h2>
            <p>
              To the maximum extent permitted by law, JabNGo shall not be liable
              for any indirect, incidental, or consequential damages arising
              from use of the service.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold">9. Changes to Terms</h2>
            <p>
              We may revise these terms at any time. Continued use after updates
              indicates your acceptance of the new terms.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold">10. Contact</h2>
            <p>
              Questions about these terms? Reach us at{" "}
              <a
                href="mailto:support@jabngo.com"
                className="text-primary underline"
              >
                support@jabngo.com
              </a>
              .
            </p>
          </section>
        </div>

        {/* ── Shared Footer ───────────────────────── */}
      </div>
      <Footer />
    </>
  );
}
