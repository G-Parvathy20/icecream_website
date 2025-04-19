import React from 'react';
import Image from 'next/image'; // if you're using Next.js
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";

const Footer: React.FC = () => {
  return (
    <div>
        {/* Social Media Icons*/}
        <footer>
        <div className="bg-black py-6 px-full">
        <div className="bg-black text-white text-2xl">
          <div className="flex justify-center gap-6 text-2xl mb-6">
            <a href="https://www.facebook.com/share/SDLtGv8ihpfDxNne/?mibextid=qi2Omg" aria-label="Facebook" className="text-blue-400 hover:scale-110 transition-transform">
              <FaFacebook />
            </a>
            <a href="https://www.twitter.com" aria-label="Twitter" className="text-sky-300 hover:scale-110 transition-transform">
              <FaTwitter />
            </a>
            <a href="https://www.instagram.com/g.paru_20?utm_source=qr&igsh=MWhrNjV0NHhyd2VoNw==" aria-label="Instagram" className="text-pink-500 hover:scale-110 transition-transform">
              <FaInstagram />
            </a>
            <a href="https://www.youtube.com" aria-label="YouTube" className="text-red-500 hover:scale-110 transition-transform">
              <FaYoutube />
            </a>
          </div>

          {/* Terms and Conditions */}
          <div className="text-sm text-blue-500 flex justify-center mb-5">
            <a href="#" className="px-2 hover:underline">Terms Of Service</a>
            <span>|</span>
            <a href="#" className="px-2 hover:underline">Privacy Policy</a>
          </div>
        </div>
        </div>
    </footer>
    </div>
  );
};

export default Footer;
