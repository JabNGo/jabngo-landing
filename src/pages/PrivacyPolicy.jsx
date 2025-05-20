import React from "react";

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-[#FAEECF] text-black py-16">
      <div className="max-w-3xl mx-auto px-4 space-y-8">
        <h1 className="text-4xl uppercase font-bold">Privacy Policy</h1>
        <p>Last updated: May 20, 2025</p>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">1. Introduction</h2>
          <p>
            Welcome to JabNGo. We respect your privacy and are committed to
            protecting your personal data. This privacy policy explains how we
            collect, use, and safeguard your information when you use our
            website and join our waitlist.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">2. Information We Collect</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>
              <strong>Email address:</strong> to notify you about our launch and
              occasional updates.
            </li>
            <li>
              <strong>Usage data:</strong> automatically collected by cookies
              and analytics (e.g., pages visited, time spent).
            </li>
          </ul>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">
            3. How We Use Your Information
          </h2>
          <p>We use your data to:</p>
          <ul className="list-disc list-inside space-y-2">
            <li>
              Send you launch notices and marketing emails (opt-out anytime).
            </li>
            <li>Analyze site performance and improve our features.</li>
            <li>Prevent abuse and secure our services.</li>
          </ul>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">4. Cookies & Tracking</h2>
          <p>
            We and our analytics partners may place cookies and similar
            technologies to collect usage data. You can disable cookies in your
            browser settings, but some features may not function properly.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">5. Third-Party Services</h2>
          <p>
            We use third parties (e.g. Mailchimp, Google Analytics) to manage
            our waitlist and measure site traffic. Their own privacy policies
            govern their data handling.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">6. Data Security</h2>
          <p>
            We implement industry-standard measures to protect your data, but
            cannot guarantee absolute security. In case of a breach, we will
            notify you as required by law.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">7. Children’s Privacy</h2>
          <p>
            Our services are not intended for children under 16. We do not
            knowingly collect data from minors.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">8. Changes to This Policy</h2>
          <p>
            We may update this policy periodically. We’ll post the amended
            version here with a new “Last updated” date.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">9. Contact Us</h2>
          <p>
            If you have any questions, email us at{" "}
            <a
              href="mailto:privacy@jabngo.com"
              className="text-[#ED3B20] underline"
            >
              privacy@jabngo.com
            </a>
            .
          </p>
        </section>
      </div>
    </div>
  );
}
