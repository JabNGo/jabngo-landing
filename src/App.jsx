import { useState } from "react";
import {
  Bell,
  Users,
  Map,
  Shield,
  CheckCircle,
  Dumbbell,
  Share2,
  ChevronRight,
} from "lucide-react";
import "./App.css";

function App() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e?.preventDefault();

    if (!email.trim()) {
      setError("Please enter your email");
      return;
    }

    if (!/^\S+@\S+\.\S+$/.test(email)) {
      setError("Please enter a valid email");
      return;
    }

    console.log("Email submitted:", email);
    setSubmitted(true);
    setError("");
  };

  const EmailForm = ({ ctaLabel = "Join the Waitlist" }) =>
    !submitted ? (
      <div className="space-y-4 max-w-md">
        <div>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email address"
            className="w-full px-4 py-3 rounded-lg text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          {error && <p className="text-red-300 mt-1">{error}</p>}
        </div>
        <button
          onClick={handleSubmit}
          className="w-full bg-yellow-500 hover:bg-yellow-400 text-gray-800 font-bold py-3 px-6 rounded-lg transition flex items-center justify-center"
        >
          {ctaLabel}
          <ChevronRight className="ml-2 w-5 h-5" />
        </button>
      </div>
    ) : (
      <div className="bg-green-600 text-white p-4 rounded-lg max-w-md">
        <div className="flex items-center">
          <CheckCircle className="w-6 h-6 mr-2" />
          <p className="font-semibold">
            You're on the list! We'll notify you when JabNGo launches.
          </p>
        </div>
      </div>
    );

  return (
    <div className="min-h-screen bg-gray-50 text-gray-800">
      {/* Hero Section */}
      <header className="bg-blue-600 text-white">
        <div className="max-w-6xl mx-auto px-4 py-6 md:py-12">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-2">
              <Dumbbell className="w-8 h-8" />
              <span className="text-2xl font-bold">JabNGo</span>
            </div>
            <button
              className="px-4 py-2 bg-white text-blue-600 rounded-md font-semibold hover:bg-blue-50 transition"
              onClick={() =>
                window.scrollTo({
                  top: document.documentElement.scrollHeight,
                  behavior: "smooth",
                })
              }
            >
              Join Waitlist
            </button>
          </div>

          <div className="mt-16 md:mt-24 md:flex md:items-center md:justify-between">
            <div className="md:w-1/2 mb-10 md:mb-0">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Find Your Perfect Sparring Partner in Seconds
              </h1>
              <p className="text-xl mb-8">
                Connect with local fighters who match your weight class,
                experience level, and training goals.
              </p>
              <EmailForm />
              <p className="text-sm mt-4 text-blue-200">
                Launching in 2 months. Be the first to know!
              </p>
            </div>

            <div className="md:w-5/12">
              <div className="bg-blue-500 p-6 rounded-lg shadow-xl">
                <img
                  src="/src/assets/jabngo-preview-2.png"
                  alt="JabNGo app preview"
                  className="w-full rounded-md shadow-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Features Section */}
      <section className="py-16 max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">
          Find the Perfect Match for Your Training
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              icon: <Users className="w-6 h-6 text-blue-600" />,
              title: "Match by Experience",
              desc: "Connect with fighters at your skill level for productive, safe training sessions.",
            },
            {
              icon: <Map className="w-6 h-6 text-blue-600" />,
              title: "Local Partners",
              desc: "Find nearby fighters to minimize travel time and maximize training.",
            },
            {
              icon: <Shield className="w-6 h-6 text-blue-600" />,
              title: "Verified Profiles",
              desc: "Train with confidence knowing all users are verified fighters.",
            },
          ].map(({ icon, title, desc }, i) => (
            <div key={i} className="bg-white p-6 rounded-lg shadow-md">
              <div className="bg-blue-100 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                {icon}
              </div>
              <h3 className="text-xl font-semibold mb-2">{title}</h3>
              <p className="text-gray-600">{desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-16 bg-gray-100">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            How JabNGo Works
          </h2>
          <div className="grid md:grid-cols-4 gap-6 text-center">
            {[
              {
                step: "1",
                title: "Create Profile",
                desc: "Enter your weight class, experience level, and training goals.",
              },
              {
                step: "2",
                title: "Browse Matches",
                desc: "View fighters in your area who match your criteria.",
              },
              {
                step: "3",
                title: "Connect",
                desc: "Message potential partners and arrange a sparring session.",
              },
              {
                step: "4",
                title: "Train & Review",
                desc: "After training, leave feedback to help the community.",
              },
            ].map(({ step, title, desc }, i) => (
              <div key={i}>
                <div className="bg-blue-600 text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 font-bold">
                  {step}
                </div>
                <h3 className="font-semibold mb-2">{title}</h3>
                <p className="text-gray-600 text-sm">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">
          What Beta Users Are Saying
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          {[
            {
              name: "Mike T.",
              role: "Amateur Boxer, 3 years experience",
              quote:
                "I was struggling to find consistent sparring partners at my gym. JabNGo connected me with three regular partners who've helped take my skills to the next level.",
            },
            {
              name: "Sarah K.",
              role: "Kickboxer, 5 years experience",
              quote:
                "As a female fighter, finding appropriate sparring partners was always challenging. JabNGo made it easy to connect with other women at my weight class and skill level.",
            },
          ].map(({ name, role, quote }, i) => (
            <div key={i} className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-gray-200 rounded-full mr-4" />
                <div>
                  <h4 className="font-semibold">{name}</h4>
                  <p className="text-sm text-gray-500">{role}</p>
                </div>
              </div>
              <p className="text-gray-600">"{quote}"</p>
            </div>
          ))}
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">
            Ready to Elevate Your Training?
          </h2>
          <p className="text-xl mb-8">
            Join the waitlist today and be among the first fighters to
            experience JabNGo when we launch in 2 months.
          </p>
          <EmailForm ctaLabel="Join Now" />
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-12">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-2 mb-6 md:mb-0">
              <Dumbbell className="w-6 h-6" />
              <span className="text-xl font-bold">JabNGo</span>
            </div>
            <div className="flex space-x-6">
              {["Twitter", "Instagram", "Facebook"].map((platform, i) => (
                <a key={i} href="#" className="hover:text-blue-400 transition">
                  <span className="sr-only">{platform}</span>
                  <Share2 className="w-6 h-6" />
                </a>
              ))}
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-gray-700 flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm mb-4 md:mb-0">
              &copy; {new Date().getFullYear()} JabNGo. All rights reserved.
            </p>
            <div className="flex space-x-6 text-sm text-gray-400">
              <a href="#" className="hover:text-white transition">
                Privacy Policy
              </a>
              <a href="#" className="hover:text-white transition">
                Terms of Service
              </a>
              <a href="#" className="hover:text-white transition">
                Contact
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
