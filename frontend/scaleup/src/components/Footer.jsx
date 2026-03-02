import { Facebook, Instagram, Twitter, Linkedin } from "lucide-react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";

const Footer = () => {
  return (
    <footer className="bg-[#193A84] text-white font-[Poppins] h-auto flex flex-col justify-between px-6 md:px-16 lg:px-24 py-8 md:py-8">
      <div className="max-w-6xl mx-auto w-full flex flex-col justify-between flex-1">
        {/* Desktop layout */}
        <div className="hidden md:flex w-full justify-between mb-0">
          {/* Brand + Socials */}
          <div className="flex flex-col justify-start max-w-[340px]">
            <div className="flex items-center gap-3 mb-5">
              <img src={logo} alt="ScaleUp" className="h-10 w-auto" />
            </div>
            <p className="text-[15px] leading-relaxed text-white/80 mb-5">
              ScaleUp is a collaborative innovation hub focused on building digital products and empowering talent through real world execution
            </p>
            {/* Socials directly below description */}
            <div className="flex items-center gap-6">
              <a href="#" className="flex items-center justify-center" aria-label="Facebook">
                <Facebook size={22} className="text-white" />
              </a>
              <a href="#" className="flex items-center justify-center" aria-label="Instagram">
                <Instagram size={22} className="text-white" />
              </a>
              <a href="#" className="flex items-center justify-center" aria-label="Twitter">
                <Twitter size={22} className="text-white" />
              </a>
              <a href="#" className="flex items-center justify-center" aria-label="Linkedin">
                <Linkedin size={22} className="text-white" />
              </a>
            </div>
          </div>
          {/* Explore */}
          <div className="flex flex-col justify-start">
            <h4 className="font-bold text-[19px] mb-7 uppercase">Explore</h4>
            <ul className="flex flex-col gap-5 text-[15px] text-white/80">
              <li><Link to="/" className="hover:underline">Home</Link></li>
              <li><Link to="/about" className="hover:underline">About Us</Link></li>
              <li><Link to="/products" className="hover:underline">Products</Link></li>
              <li><a href="/#contact" className="hover:underline">Contact Us</a></li>
            </ul>
          </div>
          {/* Community */}
          <div className="flex flex-col justify-start">
            <h4 className="font-bold text-[19px] mb-7 uppercase">Community</h4>
            <ul className="flex flex-col gap-5 text-[15px] text-white/80">
              <li><Link to="/testimonials" className="hover:underline">Testimonials</Link></li>
              <li><a href="#" className="hover:underline">FAQs</a></li>
              <li><a href="#" className="hover:underline">Team Members</a></li>
              <li><Link to="/join-us" className="hover:underline">Join Us</Link></li>
            </ul>
          </div>
        </div>

        {/* Mobile layout */}
        <div className="md:hidden flex flex-col gap-8">
          {/* Brand */}
          <div className="flex flex-col items-start">
            <div className="flex items-center gap-3 mb-3">
              <img src={logo} alt="ScaleUp" className="h-10 w-auto" />
            </div>
            <p className="text-[14px] leading-relaxed text-white/80 mb-4">
              ScaleUp is a collaborative innovation hub focused on building digital products and empowering talent through real world execution
            </p>
          </div>
          {/* Explore & Community side by side */}
          <div className="flex flex-row gap-8 w-full">
            {/* Explore + Socials */}
            <div className="flex flex-col items-start flex-1">
              <h4 className="font-bold text-[16px] mb-4 uppercase">Explore</h4>
              <ul className="flex flex-col gap-3 text-[14px] text-white/80">
                  <li><Link to="/" className="hover:underline">Home</Link></li>
                <li><Link to="/about" className="hover:underline">About Us</Link></li>
                <li><Link to="/products" className="hover:underline">Products</Link></li>
                <li><a href="/#contact" className="hover:underline">Contact Us</a></li>
              </ul>
              {/* Socials below Explore links */}
              <div className="flex items-center gap-4 mt-5">
                <a href="#" className="flex items-center justify-center" aria-label="Facebook">
                  <Facebook size={20} className="text-white" />
                </a>
                <a href="#" className="flex items-center justify-center" aria-label="Instagram">
                  <Instagram size={20} className="text-white" />
                </a>
                <a href="#" className="flex items-center justify-center" aria-label="Twitter">
                  <Twitter size={20} className="text-white" />
                </a>
                <a href="#" className="flex items-center justify-center" aria-label="Linkedin">
                  <Linkedin size={20} className="text-white" />
                </a>
              </div>
            </div>
            {/* Community */}
            <div className="flex flex-col items-start flex-1">
              <h4 className="font-bold text-[16px] mb-4 uppercase">Community</h4>
              <ul className="flex flex-col gap-3 text-[14px] text-white/80">
                <li><Link to="/testimonials" className="hover:underline">Testimonials</Link></li>
                <li><a href="#" className="hover:underline">FAQs</a></li>
                <li><a href="#" className="hover:underline">Team Members</a></li>
                <li><Link to="/join-us" className="hover:underline">Join Us</Link></li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom: line + copyright */}
        <div className="mt-6">
          <div className="w-full h-px bg-white/30 mb-3" />
          <p className="text-center text-[13px] text-white/60">
            &copy;ScaleUp. Copyright and All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
