import React from "react";

export default function Contact() {
  return (
    <div className="min-h-screen bg-[#FAEECF] text-black py-16">
      <div className="max-w-3xl mx-auto px-4 space-y-8">
        <h1 className="text-4xl uppercase font-bold">Contact Us</h1>
        <p className="text-lg">
          We’d love to hear from you—whether you’ve got a question about JabNGo,
          feedback on the app, or just want to say hello.
        </p>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">Email</h2>
          <p>
            For general inquiries or support, drop us a line at{" "}
            <a
              href="mailto:support@jabngo.com"
              className="text-[#ED3B20] underline"
            >
              support@jabngo.com
            </a>
            .
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">Social</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>
              Twitter:{" "}
              <a
                href="https://twitter.com/jabngo"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#ED3B20] underline"
              >
                @jabngo
              </a>
            </li>
            <li>
              Instagram:{" "}
              <a
                href="https://instagram.com/jabngo"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#ED3B20] underline"
              >
                @jabngo
              </a>
            </li>
            <li>
              Facebook:{" "}
              <a
                href="https://facebook.com/jabngo"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#ED3B20] underline"
              >
                /jabngo
              </a>
            </li>
          </ul>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">Have Feedback?</h2>
          <p>Use our short feedback form to let us know how we can improve:</p>
          <a
            href="https://forms.gle/your-feedback-form"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-[#ED3B20] text-[#FDF7E3] px-6 py-3 uppercase font-bold tracking-wide"
          >
            Give Feedback
          </a>
        </section>
      </div>
    </div>
  );
}
