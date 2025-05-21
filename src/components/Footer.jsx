import React from "react";
import { Link } from "react-router-dom";
import { Share2 } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-black text-[#FDF7E3] py-12">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center space-x-2 mb-6 md:mb-0">
            <span className="text-xl">JabNGo</span>
          </div>

          <div className="flex space-x-6">
            {["Twitter", "Instagram", "Facebook"].map((platform, i) => (
              <a
                key={i}
                href="#"
                className="hover:text-[#ED3B20] transition"
                aria-label={platform}
              >
                <Share2 className="w-6 h-6" />
              </a>
            ))}
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-[#FDF7E3] flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} JabNGo
          </p>
          <div className="flex space-x-6 text-sm">
            <Link to="/privacy-policy" className="hover:text-[#ED3B20]">
              Privacy Policy
            </Link>
            <Link to="/terms" className="hover:text-[#ED3B20]">
              Terms of Service
            </Link>
            <Link to="/contact" className="hover:text-[#ED3B20]">
              Contact
            </Link>
            <Link to="/" className="hover:text-[#ED3B20]">
              Home
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
