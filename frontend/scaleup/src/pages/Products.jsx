import { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import heroImg from "../assets/Subtract.png";
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
        </div>
      </section>

      {/* ═══════════════════════════════════════
          HELLOAGAIN PRODUCT SHOWCASE
         ═══════════════════════════════════════ */}
      <section className="relative z-10 -mt-10 md:-mt-14 bg-white rounded-t-[20px] px-6 lg:px-16 py-16 md:py-24">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12 md:gap-16">
          {/* ── Text block ── */}
          <div className="flex-1">
            {/* Coming Soon button */}
            <button className="inline-flex items-center justify-center bg-[#2FB7A3] text-white font-bold text-xs md:text-sm rounded-[50px] mb-6 transition-all duration-200 ease-out w-[160px] h-[40px] px-[20px] md:w-[220px] md:h-[56px] md:px-[22px] md:py-[16px]">
              Coming Soon!!!
            </button>

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
            <div className="flex items-center w-full max-w-[360px] md:max-w-md bg-white border border-gray-300 rounded-[100px] p-1.5 md:p-2">
              <input
                type="email"
                value={notifyEmail}
                onChange={(e) => setNotifyEmail(e.target.value)}
                placeholder="Enter email address"
                className="flex-1 bg-transparent pl-3 md:pl-4 pr-2 py-1.5 text-xs md:text-sm text-gray-800 placeholder-gray-400 focus:outline-none min-w-0"
              />
              <button className="flex-shrink-0 bg-[#2FB7A3] hover:bg-[#26a090] text-white font-semibold text-xs md:text-sm px-4 md:px-6 py-2 md:py-2.5 rounded-[100px] whitespace-nowrap transition-colors cursor-pointer">
                Notify Me
              </button>
            </div>
          </div>

          {/* ── Phone mockups ── */}
          <div className="flex-1 flex items-center justify-center">
            <div className="relative w-[250px] h-[255px] md:w-[416px] md:h-[426px]">
              {/* Blue rounded rectangle — at the bottom, phones emerge from it */}
              <div className="absolute bottom-0 left-0 w-full h-[64%] bg-[#1E4E8C] rounded-[30px] md:rounded-[50px]" />
              {/* Back phone (right) */}
              <img
                src={phone2}
                alt="HelloAgain chat interface"
                className="absolute bottom-0 left-[44%] w-[49%] h-auto drop-shadow-2xl z-[1]"
              />
              {/* Front phone (left) */}
              <img
                src={phone1}
                alt="HelloAgain chat interface"
                className="absolute bottom-0 left-[7%] w-[49%] h-auto drop-shadow-2xl z-[2]"
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
