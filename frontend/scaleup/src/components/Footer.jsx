import { FaInstagram, FaLinkedin, FaTiktok, FaTwitter } from "react-icons/fa";
// import { FaTiktok } from "react-icons/fa";
import { Link } from "react-router-dom";
import logo from "../assets/logo2.png";

const Footer = () => {
  return (
    <footer className="bg-[#193A84] text-primary h-auto flex flex-col justify-between px-6 md:px-16 lg:px-24 py-8 md:py-8">
      <div className="max-w-6xl mx-auto w-full flex flex-col justify-between flex-1">
        {/* Desktop layout */}
        <div className="hidden md:flex w-full justify-between mb-0">
          {/* Brand + Socials */}
          <div className="flex flex-col justify-start max-w-[340px]">
            <div className="flex items-center gap-3 mb-5">
              <Link to="/">
                <img src={logo} alt="ScaleUp Logo" className="h-10 w-auto" />
              </Link>
            </div>
            <p className="text-[15px] leading-relaxed mb-5">
              ScaleUp is a collaborative innovation hub focused on building
              digital products and empowering talent through real world
              execution
            </p>
            {/* Socials directly below description */}
            <div className="flex items-center gap-6">
              <a
                href="https://www.linkedin.com/company/scaleupbuild.ng/"
                rel="noopener noreferrer"
                target="_blank"
                className="flex items-center justify-center transition-transform duration-300 hover:scale-110"
                aria-label="Linkedin"
              >
                <FaLinkedin size={22} className="text-white" />
              </a>

              <a
                href="https://www.instagram.com/scaleup.ng.ltd?igsh=MTYyMW0zd3ZzZ3Bidg=="
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center transition-transform duration-300 hover:scale-110"
                aria-label="Instagram"
              >
                <FaInstagram size={22} className="text-white" />
              </a>
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center transition-transform duration-300 hover:scale-110"
                aria-label="Twitter"
              >
                <FaTwitter size={22} className="text-white" />
              </a>

              <a
                href="https://www.tiktok.com/@scaleup87?_r=1&_t=ZS-93YgtI73Rib"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center transition-transform duration-300 hover:scale-110"
                aria-label="Tiktok"
              >
                <FaTiktok size={20} className="text-white" />
              </a>
            </div>
          </div>
          {/* Explore */}
          <div className="flex flex-col justify-start">
            <h4 className="font-bold text-[19px] mb-7 uppercase">Explore</h4>
            <ul className="flex flex-col gap-5 text-[15px]">
              <li>
                <Link to="/" className="hover:underline">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:underline">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/products" className="hover:underline">
                  Products
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:underline">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>
          {/* Community */}
          <div className="flex flex-col justify-start">
            <h4 className="font-bold text-[19px] mb-7 uppercase">Community</h4>
            <ul className="flex flex-col gap-5 text-[15px]">
              <li>
                <Link to="/testimonials" className="hover:underline">
                  Testimonials
                </Link>
              </li>
              <li>
                <Link to="/faq" className="hover:underline">
                  FAQs
                </Link>
              </li>
              <li>
                <Link to="/team" className="hover:underline">
                  Team Members
                </Link>
              </li>
              <li>
                <Link to="/join-us" className="hover:underline">
                  Join Us
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Mobile layout */}
        <div className="md:hidden flex flex-col gap-8">
          {/* Brand */}
          <div className="flex flex-col items-start">
            <div className="flex items-center gap-3 mb-3">
              <Link to="/">
                <img src={logo} alt="ScaleUp" className="h-10 w-auto" />
              </Link>
            </div>
            <p className="text-[14px] leading-relaxed text-white/80 mb-4">
              ScaleUp is a collaborative innovation hub focused on building
              digital products and empowering talent through real world
              execution
            </p>
          </div>
          {/* Explore & Community side by side */}
          <div className="flex flex-row gap-8 w-full">
            {/* Explore + Socials */}
            <div className="flex flex-col items-start flex-1">
              <h4 className="font-bold text-[16px] mb-4 uppercase">Explore</h4>
              <ul className="flex flex-col gap-3 text-[14px] text-white/80">
                <li>
                  <Link to="/" className="hover:underline">
                    Home
                  </Link>
                </li>
                <li>
                  <Link to="/about" className="hover:underline">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link to="/products" className="hover:underline">
                    Products
                  </Link>
                </li>
                <li>
                  <Link to="/contact" className="hover:underline">
                    Contact Us
                  </Link>
                </li>
              </ul>
              {/* Socials below Explore links */}
              <div className="flex items-center gap-4 mt-5">
                <a
                  href="https://www.linkedin.com/company/scaleupbuild.ng/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center transition-transform duration-300 hover:scale-110"
                  aria-label="Linkedin"
                >
                  <FaLinkedin size={20} className="text-white" />
                </a>

                <a
                  href="https://www.instagram.com/scaleup.ng.ltd?igsh=MTYyMW0zd3ZzZ3Bidg=="
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center transition-transform duration-300 hover:scale-110"
                  aria-label="Instagram"
                >
                  <FaInstagram size={20} className="text-white" />
                </a>
                <a
                  href="#"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center transition-transform duration-300 hover:scale-110"
                  aria-label="Twitter"
                >
                  <FaTwitter size={20} className="text-white" />
                </a>

                <a
                  href="https://www.tiktok.com/@scaleup87?_r=1&_t=ZS-93YgtI73Rib"
                  target="_blank"
                  className="flex items-center justify-center transition-transform duration-300 hover:scale-110"
                  aria-label="Tiktok"
                >
                  <FaTiktok size={18} className="text-white" />
                </a>
              </div>
            </div>
            {/* Community */}
            <div className="flex flex-col items-start flex-1">
              <h4 className="font-bold text-[16px] mb-4 uppercase">
                Community
              </h4>
              <ul className="flex flex-col gap-3 text-[14px] text-white/80">
                <li>
                  <Link to="/testimonials" className="hover:underline">
                    Testimonials
                  </Link>
                </li>
                <li>
                  <Link to="/faq" className="hover:underline">
                    FAQs
                  </Link>
                </li>
                <li>
                  <Link to="/team" className="hover:underline">
                    Team Members
                  </Link>
                </li>
                <li>
                  <Link to="/join-us" className="hover:underline">
                    Join Us
                  </Link>
                </li>
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
