import { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import heroImg from "../assets/Frame 11(1).png";
import phone1 from "../assets/iPhone 16 Pro.png";
import phone2 from "../assets/iPhone 16 Pro(1).png";

/* ──────────────────────────────────────────────
   Products Page Component
   ────────────────────────────────────────────── */
const Products = () => {
  const [notifyEmail, setNotifyEmail] = useState("");

  return (
    <div className="min-h-screen flex flex-col font-[Poppins]">
      {/* ─── Navbar ─── */}
      <Navbar />

      {/* ═══════════════════════════════════════
          HERO BANNER
         ═══════════════════════════════════════ */}
      <section className="relative w-full h-[320px] md:h-[420px] lg:h-[480px] overflow-hidden">
        {/* Background image */}
        <img
          src={heroImg}
          alt="ScaleUp team collaborating"
          className="absolute inset-0 w-full h-full object-cover"
        />
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/50" />
        {/* Centered text */}
        <div className="relative z-10 flex flex-col items-center justify-center h-full px-6 text-center">
          <h1 className="text-white text-4xl md:text-5xl lg:text-6xl font-bold mb-3">
            Products
          </h1>
          <p className="text-white/80 text-base md:text-lg max-w-lg">
            Discover the digital products we&rsquo;re building to create real
            impact.
          </p>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          HELLOAGAIN PRODUCT SHOWCASE
         ═══════════════════════════════════════ */}
      <section className="bg-white px-6 lg:px-16 py-16 md:py-24">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12 md:gap-16">
          {/* ── Text block ── */}
          <div className="flex-1">
            {/* Coming Soon badge */}
            <span className="inline-block bg-[#16A34A] text-white font-bold text-xs md:text-sm px-5 py-2 rounded-full mb-6 shadow-md">
              Coming Soon!!!
            </span>

            <h2 className="text-4xl md:text-5xl lg:text-[56px] font-bold text-[#1a1a2e] leading-tight mb-5">
              HelloAgain
            </h2>
            <p className="text-gray-600 text-sm md:text-base leading-relaxed mb-2 max-w-lg">
              Hello Again is a smart communication product built to help brands
              reconnect with their customers at the right time.
            </p>
            <p className="text-gray-500 text-sm mb-10 italic">
              Launching soon.
            </p>

            {/* Email capture */}
            <div className="flex flex-col sm:flex-row gap-3 max-w-md">
              <input
                type="email"
                value={notifyEmail}
                onChange={(e) => setNotifyEmail(e.target.value)}
                placeholder="Enter email address"
                className="flex-1 border border-gray-300 rounded-lg px-4 py-3.5 text-sm text-gray-800 placeholder-gray-400 focus:outline-none focus:border-[#193A84] focus:ring-1 focus:ring-[#193A84] transition-colors"
              />
              <button className="bg-[#16A34A] hover:bg-[#15803D] text-white font-semibold text-sm px-7 py-3.5 rounded-lg transition-colors whitespace-nowrap cursor-pointer">
                Notify Me
              </button>
            </div>
          </div>

          {/* ── Phone mockups ── */}
          <div className="flex-1 flex items-center justify-center">
            <div className="relative w-[300px] h-[380px] md:w-[400px] md:h-[500px]">
              {/* Decorative blue container shape */}
              <div className="absolute inset-4 md:inset-6 rounded-[2rem] bg-[#193A84]/10" />

              {/* Back phone (tilted right) */}
              <img
                src={phone2}
                alt="HelloAgain chat interface"
                className="absolute right-2 md:right-4 top-0 w-[52%] h-auto drop-shadow-2xl rotate-[8deg] origin-bottom-left z-[1]"
              />
              {/* Front phone (tilted left) */}
              <img
                src={phone1}
                alt="HelloAgain chat interface"
                className="absolute left-2 md:left-4 top-8 w-[52%] h-auto drop-shadow-2xl -rotate-[8deg] origin-bottom-right z-[2]"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ─── Footer ─── */}
      <Footer />
    </div>
  );
};

export default Products;
