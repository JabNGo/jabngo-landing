// import React, { useState } from "react";
// import { Link } from "react-router-dom";
// import {
//   Users,
//   Map,
//   Shield,
//   CheckCircle,
//   Share2,
//   ChevronRight,
// } from "lucide-react";
// // import gloveLogo from "./assets/glove.svg";
// // import "./App.css";
// import "../App.css";

// export default function Home() {
//   const [email, setEmail] = useState("");
//   const [submitted, setSubmitted] = useState(false);
//   const [error, setError] = useState("");

//   const handleSubmit = (e) => {
//     e?.preventDefault();
//     if (!email.trim()) {
//       setError("Please enter your email");
//       return;
//     }
//     if (!/^\S+@\S+\.\S+$/.test(email)) {
//       setError("Please enter a valid email");
//       return;
//     }
//     console.log("Email submitted:", email);
//     setSubmitted(true);
//     setError("");
//   };

//   const EmailForm = ({ ctaLabel = "Join the Waitlist" }) =>
//     !submitted ? (
//       <div className="space-y-4 max-w-md">
//         <div>
//           <input
//             type="email"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//             placeholder="Enter your email address"
//             className="w-full px-4 py-3 rounded-none text-black border border-black focus:outline-none focus:ring-2 focus:ring-[#ED3B20]"
//           />
//           {error && <p className="text-[#ED3B20] mt-1">{error}</p>}
//         </div>
//         <button
//           onClick={handleSubmit}
//           className="w-full bg-[#ED3B20] hover:bg-red-600 text-[#FDF7E3] font-bold py-3 px-6 uppercase tracking-wide transition flex items-center justify-center"
//         >
//           {ctaLabel}
//           <ChevronRight className="ml-2 w-5 h-5" />
//         </button>
//       </div>
//     ) : (
//       <div className="bg-black text-[#FDF7E3] p-4 rounded-none max-w-md">
//         <div className="flex items-center">
//           <CheckCircle className="w-6 h-6 mr-2" />
//           <p className="font-semibold">
//             You're on the list! We'll notify you when JabNGo launches.
//           </p>
//         </div>
//       </div>
//     );

//   return (
//     <div className="min-h-screen bg-[#FAEECF] text-black">
//       {/* Hero Section */}
//       <header className="bg-[#FAEECF]">
//         <div className="max-w-6xl mx-auto px-4 py-6 md:py-12">
//           <div className="flex justify-between items-center">
//             <div className="flex items-center space-x-2">
//               {/* <img src={gloveLogo} alt="JabNGo" className="w-8 h-8" /> */}
//               <span className="text-2xl">JabNGo</span>
//             </div>
//             <button
//               className="px-4 py-2 bg-[#ED3B20] text-[#FDF7E3] uppercase font-semibold hover:bg-red-600 transition"
//               onClick={() =>
//                 window.scrollTo({
//                   top: document.documentElement.scrollHeight,
//                   behavior: "smooth",
//                 })
//               }
//             >
//               Join Waitlist
//             </button>
//           </div>

//           <div className="mt-16 md:mt-24 md:flex md:items-center md:justify-between">
//             <div className="md:w-1/2 mb-10 md:mb-0">
//               <h1 className="text-5xl md:text-6xl mb-6">
//                 Find Sparring
//                 <br />
//                 Partners Instantly
//               </h1>
//               <p className="text-xl mb-8">
//                 Connect with local fighters who match your weight class,
//                 experience level, and training goals.
//               </p>
//               <EmailForm />
//               <p className="text-sm mt-4">
//                 Launching in 2 months. Be the first to know!
//               </p>
//             </div>
//             <div className="md:w-5/12">
//               <div className="p-6 rounded-lg shadow-lg bg-black">
//                 <img
//                   src="https://res.cloudinary.com/da59lovov/image/upload/f_auto,q_auto,w_800/v1747326360/jabngo-preview-2_mebsrt.png"
//                   alt="JabNGo app preview"
//                   className="w-full rounded-none"
//                 />
//               </div>
//             </div>
//           </div>
//         </div>
//       </header>

//       {/* Features Section */}
//       <section className="py-16 max-w-6xl mx-auto px-4">
//         <h2 className="text-3xl text-center mb-12">
//           Find the Perfect Match for Your Training
//         </h2>
//         <div className="grid md:grid-cols-3 gap-8">
//           {[
//             {
//               icon: <Users className="w-6 h-6 text-black" />,
//               title: "Match by Experience",
//               desc: "Connect with fighters at your skill level for productive, safe training sessions.",
//             },
//             {
//               icon: <Map className="w-6 h-6 text-black" />,
//               title: "Local Partners",
//               desc: "Find nearby fighters to minimize travel time and maximize training.",
//             },
//             {
//               icon: <Shield className="w-6 h-6 text-black" />,
//               title: "Verified Profiles",
//               desc: "Train with confidence knowing all users are verified fighters.",
//             },
//           ].map(({ icon, title, desc }, i) => (
//             <div
//               key={i}
//               className="bg-[#FDF7E3] p-6 rounded-none shadow-md border border-black"
//             >
//               <div className="w-12 h-12 flex items-center justify-center mb-4">
//                 {icon}
//               </div>
//               <h3 className="text-xl mb-2">{title}</h3>
//               <p>{desc}</p>
//             </div>
//           ))}
//         </div>
//       </section>

//       {/* How It Works Section */}
//       <section className="py-20 bg-[#FAEECF] border-t-4 border-black">
//         <div className="max-w-6xl mx-auto px-4 text-center">
//           <h2 className="text-4xl md:text-5xl uppercase font-bold mb-12">
//             How JabNGo Works
//           </h2>

//           <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">
//             {[
//               {
//                 step: "1",
//                 title: "Create Profile",
//                 desc: "Enter your weight class, experience level, and training goals.",
//               },
//               {
//                 step: "2",
//                 title: "Browse Matches",
//                 desc: "View fighters in your area who match your criteria.",
//               },
//               {
//                 step: "3",
//                 title: "Connect",
//                 desc: "Message potential partners and arrange a sparring session.",
//               },
//               {
//                 step: "4",
//                 title: "Train & Review",
//                 desc: "After training, leave feedback to help the community.",
//               },
//             ].map(({ step, title, desc }) => (
//               <div key={step} className="flex flex-col items-center">
//                 <div
//                   className="w-12 h-12 flex items-center justify-center mb-4
//                                   bg-[#ED3B20] text-[#FDF7E3] font-bold uppercase"
//                 >
//                   {step}
//                 </div>
//                 <h3 className="text-xl font-semibold mb-2">{title}</h3>
//                 <p className="text-sm max-w-xs">{desc}</p>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Final CTA */}
//       <section className="py-16 bg-black text-[#FDF7E3]">
//         <div className="max-w-4xl mx-auto px-4 text-center">
//           <h2 className="text-3xl mb-6">Ready to Elevate Your Training?</h2>
//           <p className="text-xl mb-8">
//             Join the waitlist today and be among the first fighters to
//             experience JabNGo when we launch in 2 months.
//           </p>
//           <EmailForm ctaLabel="Join Now" />
//         </div>
//       </section>

//       {/* Footer */}
//       <footer className="bg-black text-[#FDF7E3] py-12">
//         <div className="max-w-6xl mx-auto px-4">
//           <div className="flex flex-col md:flex-row justify-between items-center">
//             <div className="flex items-center space-x-2 mb-6 md:mb-0">
//               {/* <img src={gloveLogo} alt="JabNGo" className="w-6 h-6" /> */}
//               <span className="text-xl">JabNGo</span>
//             </div>
//             <div className="flex space-x-6">
//               {["Twitter", "Instagram", "Facebook"].map((platform, i) => (
//                 <a key={i} href="#" className="hover:text-[#ED3B20] transition">
//                   <Share2 className="w-6 h-6" />
//                   <span className="sr-only">{platform}</span>
//                 </a>
//               ))}
//             </div>
//           </div>
//           <div className="mt-8 pt-8 border-t border-[#FDF7E3] flex flex-col md:flex-row justify-between items-center">
//             <p className="text-sm mb-4 md:mb-0">
//               &copy; {new Date().getFullYear()} JabNGo
//             </p>
//             <div className="flex space-x-6 text-sm">
//               <Link to="/privacy-policy" className="hover:text-[#ED3B20]">
//                 Privacy Policy
//               </Link>
//               <Link to="/terms" className="hover:text-[#ED3B20]">
//                 Terms of Service
//               </Link>
//               <Link to="/contact" className="hover:text-[#ED3B20]">
//                 Contact
//               </Link>
//             </div>
//             {/* <div className="flex space-x-6 text-sm">
//               {["Privacy Policy", "Terms of Service", "Contact"].map(
//                 (link, i) => (
//                   <a key={i} href="#" className="hover:text-[#ED3B20]">
//                     {link}
//                   </a>
//                 )
//               )}
//             </div> */}
//           </div>
//         </div>
//       </footer>
//     </div>
//   );
// }

// import React, { useState } from "react";
// import { Link } from "react-router-dom";
// import {
//   Users,
//   Map,
//   Shield,
//   CheckCircle,
//   Share2,
//   ChevronRight,
// } from "lucide-react";
// import "../App.css"; // ← ensure global CSS is loaded

// export default function Home() {
//   const [email, setEmail] = useState("");
//   const [submitted, setSubmitted] = useState(false);
//   const [error, setError] = useState("");

//   const handleSubmit = (e) => {
//     e?.preventDefault();
//     if (!email.trim()) {
//       setError("Please enter your email");
//       return;
//     }
//     if (!/^\S+@\S+\.\S+$/.test(email)) {
//       setError("Please enter a valid email");
//       return;
//     }
//     setSubmitted(true);
//     setError("");
//   };

//   /* ---------- Re‑usable form component ----------------------- */
//   const EmailForm = ({ ctaLabel = "Join the Waitlist" }) =>
//     !submitted ? (
//       <div className="space-y-4 max-w-md">
//         <div>
//           <input
//             type="email"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//             placeholder="Enter your email address"
//             className="w-full px-4 py-3 rounded-none text-coal border border-coal focus:outline-none
//                        focus:ring-2 focus:ring-primary"
//           />
//           {error && <p className="text-primary mt-1">{error}</p>}
//         </div>
//         <button
//           onClick={handleSubmit}
//           className="w-full bg-primary hover:bg-primary-dark text-cream font-bold
//                      py-3 px-6 uppercase tracking-wide transition flex items-center justify-center"
//         >
//           {ctaLabel}
//           <ChevronRight className="ml-2 w-5 h-5" />
//         </button>
//       </div>
//     ) : (
//       <div className="bg-coal text-cream p-4 rounded-none max-w-md">
//         <div className="flex items-center">
//           <CheckCircle className="w-6 h-6 mr-2" />
//           <p className="font-semibold">
//             You're on the list! We'll notify you when JabNGo launches.
//           </p>
//         </div>
//       </div>
//     );

//   /* ---------- Page layout ------------------------------------ */
//   return (
//     <div className="min-h-screen bg-cream text-coal">
//       {/* ── Hero ─────────────────────────────────────────────── */}
//       <header className="bg-cream">
//         <div className="max-w-6xl mx-auto px-4 py-6 md:py-12">
//           <div className="flex justify-between items-center">
//             <span className="text-2xl">JabNGo</span>

//             <button
//               className="px-4 py-2 bg-primary hover:bg-primary-dark text-cream uppercase font-semibold transition"
//               onClick={() =>
//                 window.scrollTo({
//                   top: document.documentElement.scrollHeight,
//                   behavior: "smooth",
//                 })
//               }
//             >
//               Join Waitlist
//             </button>
//           </div>

//           <div className="mt-16 md:mt-24 md:flex md:items-center md:justify-between">
//             <div className="md:w-1/2 mb-10 md:mb-0">
//               <h1 className="text-5xl md:text-6xl mb-6 leading-tight">
//                 Find Sparring
//                 <br />
//                 Partners Instantly
//               </h1>
//               <p className="text-xl mb-8">
//                 Connect with local fighters who match your weight class,
//                 experience level, and training goals.
//               </p>
//               <EmailForm />
//               <p className="text-sm mt-4">
//                 Launching in 2&nbsp;months. Be the first to know!
//               </p>
//             </div>

//             <div className="md:w-5/12">
//               <div className="p-6 rounded-lg shadow-lg bg-coal">
//                 <img
//                   src="https://res.cloudinary.com/da59lovov/image/upload/f_auto,q_auto,w_800/v1747326360/jabngo-preview-2_mebsrt.png"
//                   alt="JabNGo app preview"
//                   className="w-full rounded-none"
//                 />
//               </div>
//             </div>
//           </div>
//         </div>
//       </header>

//       {/* ── Features ─────────────────────────────────────────── */}
//       <section className="py-16 max-w-6xl mx-auto px-4">
//         <h2 className="text-3xl text-center mb-12">
//           Find the Perfect Match for Your Training
//         </h2>

//         <div className="grid md:grid-cols-3 gap-8">
//           {[
//             {
//               icon: <Users className="w-6 h-6 text-coal" />,
//               title: "Match by Experience",
//               desc: "Connect with fighters at your skill level for productive, safe training sessions.",
//             },
//             {
//               icon: <Map className="w-6 h-6 text-coal" />,
//               title: "Local Partners",
//               desc: "Find nearby fighters to minimize travel time and maximize training.",
//             },
//             {
//               icon: <Shield className="w-6 h-6 text-coal" />,
//               title: "Verified Profiles",
//               desc: "Train with confidence knowing all users are verified fighters.",
//             },
//           ].map(({ icon, title, desc }, i) => (
//             <div
//               key={i}
//               className="bg-cream p-6 rounded-none shadow-md border border-coal"
//             >
//               <div className="w-12 h-12 flex items-center justify-center mb-4">
//                 {icon}
//               </div>
//               <h3 className="text-xl mb-2">{title}</h3>
//               <p>{desc}</p>
//             </div>
//           ))}
//         </div>
//       </section>

//       {/* ── How It Works ─────────────────────────────────────── */}
//       <section className="py-20 bg-cream border-t-4 border-coal">
//         <div className="max-w-6xl mx-auto px-4 text-center">
//           <h2 className="text-4xl md:text-5xl uppercase font-bold mb-12">
//             How JabNGo Works
//           </h2>

//           <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">
//             {[
//               {
//                 step: "1",
//                 title: "Create Profile",
//                 desc: "Enter your weight class, experience level, and training goals.",
//               },
//               {
//                 step: "2",
//                 title: "Browse Matches",
//                 desc: "View fighters in your area who match your criteria.",
//               },
//               {
//                 step: "3",
//                 title: "Connect",
//                 desc: "Message potential partners and arrange a sparring session.",
//               },
//               {
//                 step: "4",
//                 title: "Train & Review",
//                 desc: "After training, leave feedback to help the community.",
//               },
//             ].map(({ step, title, desc }) => (
//               <div key={step} className="flex flex-col items-center">
//                 <div
//                   className="w-12 h-12 flex items-center justify-center mb-4
//                                 bg-primary text-cream font-bold uppercase"
//                 >
//                   {step}
//                 </div>
//                 <h3 className="text-xl font-semibold mb-2">{title}</h3>
//                 <p className="text-sm max-w-xs">{desc}</p>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* ── Final CTA ───────────────────────────────────────── */}
//       <section className="py-16 bg-coal text-cream">
//         <div className="max-w-4xl mx-auto px-4 text-center">
//           <h2 className="text-3xl mb-6">Ready to Elevate Your Training?</h2>
//           <p className="text-xl mb-8">
//             Join the waitlist today and be among the first fighters to
//             experience JabNGo when we launch in 2&nbsp;months.
//           </p>
//           <EmailForm ctaLabel="Join Now" />
//         </div>
//       </section>

//       {/* ── Footer ──────────────────────────────────────────── */}
//       <footer className="bg-coal text-cream py-12">
//         <div className="max-w-6xl mx-auto px-4">
//           <div className="flex flex-col md:flex-row justify-between items-center">
//             <span className="text-xl mb-6 md:mb-0">JabNGo</span>

//             <div className="flex space-x-6">
//               {["Twitter", "Instagram", "Facebook"].map((platform, i) => (
//                 <a key={i} href="#" className="hover:text-primary transition">
//                   <Share2 className="w-6 h-6" />
//                   <span className="sr-only">{platform}</span>
//                 </a>
//               ))}
//             </div>
//           </div>

//           <div className="mt-8 pt-8 border-t border-cream flex flex-col md:flex-row justify-between items-center">
//             <p className="text-sm mb-4 md:mb-0">
//               &copy; {new Date().getFullYear()} JabNGo
//             </p>

//             <div className="flex space-x-6 text-sm">
//               <Link to="/privacy-policy" className="hover:text-primary">
//                 Privacy Policy
//               </Link>
//               <Link to="/terms" className="hover:text-primary">
//                 Terms of Service
//               </Link>
//               <Link to="/contact" className="hover:text-primary">
//                 Contact
//               </Link>
//             </div>
//           </div>
//         </div>
//       </footer>
//     </div>
//   );
// }

// src/pages/Home.jsx
// import React from "react";
// import { Link } from "react-router-dom";
// import { Users, Map, Shield, Share2, ChevronRight } from "lucide-react";
// import "../App.css"; // your palette + global styles
// import Footer from "../components/Footer";

// export default function Home() {
//   return (
//     <div className="flex flex-col min-h-screen bg-cream text-coal">
//       {/* ── Hero Section ─────────────────────────────────────────────── */}
//       <header className="bg-cream">
//         <div className="max-w-6xl mx-auto px-4 py-6 md:py-12">
//           <div className="flex justify-between items-center">
//             <span className="text-2xl">JabNGo</span>
//             <button
//               className="px-4 py-2 bg-primary hover:bg-primary-dark text-cream uppercase font-semibold transition"
//               onClick={() =>
//                 window.scrollTo({
//                   top: document.documentElement.scrollHeight,
//                   behavior: "smooth",
//                 })
//               }
//             >
//               Join Waitlist
//             </button>
//           </div>

//           <div className="mt-16 md:mt-24 md:flex md:items-center md:justify-between">
//             <div className="md:w-1/2 mb-10 md:mb-0 space-y-6">
//               <h1 className="text-5xl md:text-6xl leading-tight font-bold">
//                 Find Sparring
//                 <br />
//                 Partners Instantly
//               </h1>
//               <p className="text-xl">
//                 Connect with local fighters who match your weight class,
//                 experience level, and training goals.
//               </p>

//               {/* ←– MAILERLITE EMBED FORM –→ */}
//               <div className="max-w-md w-full mx-auto">
//                 <form
//                   action="https://YOUR-ID.mailerlite.com/webforms/submit/abc123"
//                   data-id="123456"
//                   method="post"
//                   target="_blank"
//                   className="space-y-4"
//                 >
//                   <input
//                     type="email"
//                     name="fields[email]"
//                     required
//                     placeholder="Enter your email address"
//                     className="w-full px-4 py-3 rounded-none text-coal border border-coal
//                                focus:outline-none focus:ring-2 focus:ring-primary"
//                   />
//                   <button
//                     type="submit"
//                     className="w-full bg-primary hover:bg-primary-dark text-cream font-bold
//                                py-3 px-6 uppercase tracking-wide transition flex items-center justify-center"
//                   >
//                     Join Waitlist
//                     <ChevronRight className="ml-2 w-5 h-5" />
//                   </button>
//                 </form>
//               </div>

//               <p className="text-sm">
//                 Launching in 2 months. Be the first to know!
//               </p>
//             </div>

//             <div className="md:w-5/12">
//               <div className="p-6 rounded-lg shadow-lg bg-coal">
//                 <img
//                   src="https://res.cloudinary.com/da59lovov/image/upload/f_auto,q_auto,w_800/v1747326360/jabngo-preview-2_mebsrt.png"
//                   alt="JabNGo app preview"
//                   className="w-full rounded-none"
//                 />
//               </div>
//             </div>
//           </div>
//         </div>
//       </header>

//       {/* ── Features Section ───────────────────────────────────────── */}
//       <section className="py-16 max-w-6xl mx-auto px-4">
//         <h2 className="text-3xl text-center mb-12">
//           Find the Perfect Match for Your Training
//         </h2>
//         <div className="grid md:grid-cols-3 gap-8">
//           {[
//             {
//               icon: <Users className="w-6 h-6 text-coal" />,
//               title: "Match by Experience",
//               desc: "Connect with fighters at your skill level for productive, safe training sessions.",
//             },
//             {
//               icon: <Map className="w-6 h-6 text-coal" />,
//               title: "Local Partners",
//               desc: "Find nearby fighters to minimize travel time and maximize training.",
//             },
//             {
//               icon: <Shield className="w-6 h-6 text-coal" />,
//               title: "Verified Profiles",
//               desc: "Train with confidence knowing all users are verified fighters.",
//             },
//           ].map(({ icon, title, desc }, i) => (
//             <div
//               key={i}
//               className="bg-cream p-6 rounded-none shadow-md border border-coal"
//             >
//               <div className="w-12 h-12 flex items-center justify-center mb-4">
//                 {icon}
//               </div>
//               <h3 className="text-xl mb-2">{title}</h3>
//               <p>{desc}</p>
//             </div>
//           ))}
//         </div>
//       </section>

//       {/* ── How It Works Section ────────────────────────────────────── */}
//       <section className="py-20 bg-cream border-t-4 border-coal">
//         <div className="max-w-6xl mx-auto px-4 text-center">
//           <h2 className="text-4xl md:text-5xl uppercase font-bold mb-12">
//             How JabNGo Works
//           </h2>
//           <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">
//             {[
//               {
//                 step: "1",
//                 title: "Create Profile",
//                 desc: "Enter your weight class, experience level, and training goals.",
//               },
//               {
//                 step: "2",
//                 title: "Browse Matches",
//                 desc: "View fighters in your area who match your criteria.",
//               },
//               {
//                 step: "3",
//                 title: "Connect",
//                 desc: "Message potential partners and arrange a sparring session.",
//               },
//               {
//                 step: "4",
//                 title: "Train & Review",
//                 desc: "After training, leave feedback to help the community.",
//               },
//             ].map(({ step, title, desc }) => (
//               <div key={step} className="flex flex-col items-center">
//                 <div className="w-12 h-12 flex items-center justify-center mb-4 bg-primary text-cream font-bold uppercase">
//                   {step}
//                 </div>
//                 <h3 className="text-xl font-semibold mb-2">{title}</h3>
//                 <p className="text-sm max-w-xs">{desc}</p>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* ── Final CTA Section ───────────────────────────────────────── */}
//       <section className="py-16 bg-coal text-cream">
//         <div className="max-w-4xl mx-auto px-4 text-center">
//           <h2 className="text-3xl mb-6">Ready to Elevate Your Training?</h2>
//           <p className="text-xl mb-8">
//             Join the waitlist today and be among the first fighters to
//             experience JabNGo when we launch in 2 months.
//           </p>
//           {/* You can repeat the embedded form here if desired */}
//         </div>
//       </section>

//       {/* ── Sticky Footer ───────────────────────────────────────────── */}
//       <Footer />
//     </div>
//   );
// }

// src/pages/Home.jsx
import React from "react";
import { Link } from "react-router-dom";
import { Users, Map, Shield, Share2, ChevronRight } from "lucide-react";
import "../App.css"; // your palette + global styles
import "../mailerlite.css";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-cream text-coal">
      {/* ── Hero Section ─────────────────────────────────────────────── */}
      <header className="bg-cream">
        <div className="max-w-6xl mx-auto px-4 py-6 md:py-12">
          <div className="flex justify-between items-center">
            <span className="text-2xl">JabNGo</span>
            <button
              className="px-4 py-2 bg-primary hover:bg-primary-dark text-cream uppercase font-semibold transition"
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
            <div className="md:w-1/2 mb-10 md:mb-0 space-y-6">
              <h1 className="text-5xl md:text-6xl leading-tight font-bold">
                Find Sparring
                <br />
                Partners Instantly
              </h1>
              <p className="text-xl">
                Connect with local fighters who match your weight class,
                experience level, and training goals.
              </p>

              {/* ── MailerLite Embedded Form ──────────────────── */}
              <div className="mt-8">
                <div className="ml-embedded" data-form="zxJFpM"></div>
              </div>

              <p className="text-sm">
                Launching in 2 months. Be the first to know!
              </p>
            </div>

            <div className="md:w-5/12">
              <div className="p-6 rounded-lg shadow-lg bg-coal">
                <img
                  src="https://res.cloudinary.com/da59lovov/image/upload/f_auto,q_auto,w_800/v1747326360/jabngo-preview-2_mebsrt.png"
                  alt="JabNGo app preview"
                  className="w-full rounded-none"
                />
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* ── Features Section ───────────────────────────────────────── */}
      <section className="py-16 max-w-6xl mx-auto px-4">
        <h2 className="text-3xl text-center mb-12">
          Find the Perfect Match for Your Training
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              icon: <Users className="w-6 h-6 text-coal" />,
              title: "Match by Experience",
              desc: "Connect with fighters at your skill level for productive, safe training sessions.",
            },
            {
              icon: <Map className="w-6 h-6 text-coal" />,
              title: "Local Partners",
              desc: "Find nearby fighters to minimize travel time and maximize training.",
            },
            {
              icon: <Shield className="w-6 h-6 text-coal" />,
              title: "Verified Profiles",
              desc: "Train with confidence knowing all users are verified fighters.",
            },
          ].map(({ icon, title, desc }, i) => (
            <div
              key={i}
              className="bg-cream p-6 rounded-none shadow-md border border-coal"
            >
              <div className="w-12 h-12 flex items-center justify-center mb-4">
                {icon}
              </div>
              <h3 className="text-xl mb-2">{title}</h3>
              <p>{desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── How It Works Section ────────────────────────────────────── */}
      <section className="py-20 bg-cream border-t-4 border-coal">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl uppercase font-bold mb-12">
            How JabNGo Works
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">
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
            ].map(({ step, title, desc }) => (
              <div key={step} className="flex flex-col items-center">
                <div className="w-12 h-12 flex items-center justify-center mb-4 bg-primary text-cream font-bold uppercase">
                  {step}
                </div>
                <h3 className="text-xl font-semibold mb-2">{title}</h3>
                <p className="text-sm max-w-xs">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Final CTA Section ───────────────────────────────────────── */}
      <section className="py-16 bg-coal text-cream">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl mb-6">Ready to Elevate Your Training?</h2>
          <p className="text-xl mb-8">
            Join the waitlist today and be among the first fighters to
            experience JabNGo when we launch in 2 months.
          </p>
        </div>
      </section>

      {/* ── Sticky Footer ───────────────────────────────────────────── */}
      <Footer />
    </div>
  );
}
