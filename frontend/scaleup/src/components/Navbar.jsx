import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";

const navLinks = [
  { label: "Home", to: "/" },
  { label: "About Us", to: "/about" },
  { label: "Products", to: "/products" },
  { label: "FAQs", to: "/faq" },
  { label: "Contact Us", to: "/contact" },
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
                <Link
                  to={link.to}
                  className="text-[#193A84] text-[15px] font-medium hover:text-[#142e6b] transition-colors"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>

          {/* Right CTAs */}
          <div className="flex items-center gap-4">
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

      {/* Mobile drawer — slides in from right, content-height only */}
      {/* Backdrop */}
      {mobileMenuOpen && (
        <div
          className="fixed inset-0 z-[55] bg-black/30 md:hidden"
          onClick={() => setMobileMenuOpen(false)}
        />
      )}
      {/* Drawer panel */}
      <div
        className={`fixed top-0 right-0 z-[70] h-fit w-64 bg-white shadow-2xl rounded-bl-2xl flex flex-col gap-1 px-6 py-6 md:hidden font-[Poppins] transition-transform duration-300 ease-out ${
          mobileMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Close button */}
        <button
          onClick={() => setMobileMenuOpen(false)}
          className="self-end text-[#193A84] mb-4"
          aria-label="Close menu"
        >
          <X size={22} />
        </button>

        <Link to="/" className="text-[#193A84] text-sm font-medium py-2 border-b border-gray-100 hover:text-[#142e6b] transition-colors" onClick={() => setMobileMenuOpen(false)}>Home</Link>
        <Link to="/about" className="text-[#193A84] text-sm font-medium py-2 border-b border-gray-100 hover:text-[#142e6b] transition-colors" onClick={() => setMobileMenuOpen(false)}>About Us</Link>
        <Link to="/products" className="text-[#193A84] text-sm font-medium py-2 border-b border-gray-100 hover:text-[#142e6b] transition-colors" onClick={() => setMobileMenuOpen(false)}>Products</Link>
        <Link to="/faq" className="text-[#193A84] text-sm font-medium py-2 border-b border-gray-100 hover:text-[#142e6b] transition-colors" onClick={() => setMobileMenuOpen(false)}>FAQs</Link>
        <Link to="/contact" className="text-[#193A84] text-sm font-medium py-2 border-b border-gray-100 hover:text-[#142e6b] transition-colors" onClick={() => setMobileMenuOpen(false)}>Contact Us</Link>
        <Link to="/join-us" className="text-[#193A84] text-sm font-medium py-2 hover:text-[#142e6b] transition-colors" onClick={() => setMobileMenuOpen(false)}>Join Us</Link>
      </div>
    </>
  );
};

export default Navbar;
