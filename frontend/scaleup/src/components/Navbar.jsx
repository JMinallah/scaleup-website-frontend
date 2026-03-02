import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";

const navLinks = [
  { label: "Home", to: "/", type: "link" },
  { label: "About Us", to: "/about", type: "link" },
  { label: "Products", to: "/products", type: "link" },
  { label: "Contact Us", to: "/#contact", type: "anchor" },
];

const Navbar = ({ mobileOnly = false }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <>
      {/* Desktop Nav — hidden on mobile, hidden entirely when mobileOnly */}
      {!mobileOnly && (
        <nav className="hidden md:flex items-center justify-between bg-white px-6 lg:px-16 py-4 font-[Poppins]">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <img src={logo} alt="ScaleUp" className="h-10 w-auto" />
          </div>

          {/* Center links */}
          <ul className="flex items-center gap-8">
            {navLinks.map((link) => (
              <li key={link.label}>
                {link.type === "link" ? (
                  <Link
                    to={link.to}
                    className="text-[#193A84] text-[15px] font-medium hover:text-[#142e6b] transition-colors"
                  >
                    {link.label}
                  </Link>
                ) : (
                  <a
                    href={link.to}
                    className="text-[#193A84] text-[15px] font-medium hover:text-[#142e6b] transition-colors"
                  >
                    {link.label}
                  </a>
                )}
              </li>
            ))}
          </ul>

          {/* Right CTAs */}
          <div className="flex items-center gap-4">
            <Link
              to="/join-us"
              className="text-[#193A84] text-[15px] font-medium hover:text-[#142e6b] transition-colors"
            >
              Join Us
            </Link>
            <Link
              to="/join-us"
              className="bg-[#193A84] text-white text-[15px] font-semibold px-6 py-2.5 rounded-lg hover:bg-[#142e6b] transition-colors"
            >
              Join Us
            </Link>
          </div>
        </nav>
      )}

      {/* Mobile Nav — hidden on desktop */}
      <nav className="bg-white px-6 py-4 flex items-center justify-between md:hidden relative z-[60] font-[Poppins]">
        <div className="flex items-center gap-2">
          <img src={logo} alt="ScaleUp" className="h-8 w-auto" />
        </div>
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="text-[#193A84]"
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile dropdown menu */}
      {mobileMenuOpen && (
        <div className="bg-[#193A84] px-6 pb-4 flex flex-col gap-3 md:hidden font-[Poppins]">
          <Link
            to="/"
            className="text-white/80 text-sm hover:text-white"
            onClick={() => setMobileMenuOpen(false)}
          >
            Home
          </Link>
          <Link
            to="/about"
            className="text-white/80 text-sm hover:text-white"
            onClick={() => setMobileMenuOpen(false)}
          >
            About Us
          </Link>
          <Link
            to="/products"
            className="text-white/80 text-sm hover:text-white"
            onClick={() => setMobileMenuOpen(false)}
          >
            Products
          </Link>
          <Link
            to="/testimonials"
            className="text-white/80 text-sm hover:text-white"
            onClick={() => setMobileMenuOpen(false)}
          >
            Testimonials
          </Link>
          <a href="/#contact" className="text-white/80 text-sm hover:text-white">
            Contact Us
          </a>
          <Link
            to="/join-us"
            className="text-white/80 text-sm hover:text-white"
            onClick={() => setMobileMenuOpen(false)}
          >
            Join Us
          </Link>
        </div>
      )}
    </>
  );
};

export default Navbar;
