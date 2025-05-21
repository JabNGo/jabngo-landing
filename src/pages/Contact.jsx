import React from "react";
import "../App.css"; // ← make sure palette helpers are loaded
import Footer from "../components/Footer";

export default function Contact() {
  return (
    <>
      <div className="min-h-screen bg-cream text-coal py-16">
        <div className="max-w-3xl mx-auto px-4 space-y-10">
          <h1 className="text-4xl uppercase font-bold">Contact Us</h1>

          <p className="text-lg">
            We’d love to hear from you—whether you’ve got a question about
            JabNGo, feedback on the app, or just want to say hello.
          </p>

          {/* ── Email ─────────────────────────────────────────── */}
          <section className="space-y-3">
            <h2 className="text-2xl font-semibold">Email</h2>
            <p>
              For general inquiries or support, drop us a line at&nbsp;
              <a
                href="mailto:support@jabngo.com"
                className="text-primary underline"
              >
                support@jabngo.com
              </a>
              .
            </p>
          </section>

          {/* ── Social ────────────────────────────────────────── */}
          <section className="space-y-3">
            <h2 className="text-2xl font-semibold">Social</h2>
            <ul className="list-disc list-inside space-y-1">
              <li>
                Twitter:&nbsp;
                <a
                  href="https://twitter.com/jabngo"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary underline"
                >
                  @jabngo
                </a>
              </li>
              <li>
                Instagram:&nbsp;
                <a
                  href="https://instagram.com/jabngo"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary underline"
                >
                  @jabngo
                </a>
              </li>
              <li>
                Facebook:&nbsp;
                <a
                  href="https://facebook.com/jabngo"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary underline"
                >
                  /jabngo
                </a>
              </li>
            </ul>
          </section>

          {/* ── Feedback CTA ─────────────────────────────────── */}
          <section className="space-y-3">
            <h2 className="text-2xl font-semibold">Have Feedback?</h2>
            <p>Use our short form to let us know how we can improve:</p>

            <a
              href="https://forms.gle/your-feedback-form"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-primary hover:bg-primary-dark text-cream
                       px-6 py-3 uppercase font-bold tracking-wide transition"
            >
              Give Feedback
            </a>
          </section>
        </div>
      </div>
      <Footer />
    </>
  );
}
