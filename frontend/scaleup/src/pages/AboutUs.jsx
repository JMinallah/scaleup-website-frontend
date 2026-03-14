import { Link } from "react-router-dom";
import { Users, Eye, Handshake, CheckCircle, TrendingUp, Shield, Lightbulb } from "lucide-react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import heroImg from "../assets/Subtract.png";
import aboutImg from "../assets/Rectangle 5.png";
import missionImg from "../assets/Subtract.png";

/* ──────────────────────────────────────────────
   Values data
   ────────────────────────────────────────────── */
const values = [
  {
    title: "Collaboration",
    desc: "Building better through teamwork and shared learning.",
    icon: Handshake,
  },
  {
    title: "Execution",
    desc: "Turning ideas into action with focus and consistency.",
    icon: CheckCircle,
  },
  {
    title: "Growth",
    desc: "Learning continuously to improve skills and outcomes.",
    icon: TrendingUp,
  },
  {
    title: "Integrity",
    desc: "Operating with honesty, and accountability in every decision and action.",
    icon: Shield,
  },
  {
    title: "Impact",
    desc: "Creating meaningful solutions that drive positive change.",
    icon: Lightbulb,
  },
];

/* ──────────────────────────────────────────────
   About Us Page Component
   ────────────────────────────────────────────── */
const AboutUs = () => {
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
            About Us
          </h1>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          ABOUT SCALEUP SECTION
         ═══════════════════════════════════════ */}
      <section className="relative z-10 -mt-10 md:-mt-14 bg-white rounded-t-[20px] py-16 md:px-6 lg:px-16 md:py-24">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center md:items-start gap-6 md:gap-16">

          {/* Photo — order 1 on mobile, left on desktop */}
          <div className="order-1 md:order-none flex-1 w-full px-3 md:px-0">
            <img
              src={aboutImg}
              alt="Team collaborating at a monitor"
              className="w-full h-[260px] md:h-[360px] object-cover rounded-2xl shadow-lg"
            />
          </div>

          {/* Join Us button — mobile only, order 2, same width as image */}
          <div className="order-2 md:hidden w-full px-3">
            <Link
              to="/join-us"
              className="block w-full text-center bg-[#193A84] text-white font-semibold text-base py-3.5 rounded-lg hover:bg-[#142e6b] transition-colors"
            >
              Join Us
            </Link>
          </div>

          {/* Text — order 3 on mobile, right on desktop */}
          <div className="order-3 md:order-none flex-1 px-6 md:px-0">
            <h2 className="text-2xl md:text-3xl font-bold text-[#1a1a2e] mb-5">
              About <span className="text-[#193A84]">ScaleUp</span>
            </h2>
            <p className="text-[#193A84] md:text-xl md:text-base leading-relaxed mb-8">
              ScaleUp is a growing tech and innovation community built on
              collaboration, learning, and execution. We bring together
              passionate individuals to solve real problems by building digital
              products that matter.
            </p>
            {/* Desktop-only Join Us button */}
            <Link
              to="/join-us"
              className="hidden md:inline-block bg-[#193A84] text-white font-semibold text-base px-12 py-3 rounded-lg hover:bg-[#142e6b] transition-colors"
            >
              Join Us
            </Link>
          </div>

        </div>
      </section>

      {/* ═══════════════════════════════════════
          MISSION & VISION
         ═══════════════════════════════════════ */}
      <section className="px-6 lg:px-16 md:py-24">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-12 md:gap-16">

          {/* ── Left column: Mission (top) + Vision (bottom) ── */}
          <div className="flex flex-col gap-12 md:gap-16 flex-1">
            {/* Mission */}
            <div>
              <div className="flex flex-col gap-3 mb-4">
                <span className="w-11 h-11 rounded-full bg-[#193A84] flex items-center justify-center flex-shrink-0">
                  <Users size={22} className="text-white" />
                </span>
                <h3 className="text-xl md:text-2xl font-bold text-[#1a1a2e]">
                  Our <span className="text-[#193A84]">Mission</span>
                </h3>
              </div>
              <p className="text-[#193A84] md:text-xl text-sm md:text-base leading-relaxed">
                To build meaningful digital products while creating opportunities
                for individuals to grow, collaborate, and gain real-world
                experience.
              </p>
            </div>

            {/* Vision */}
            <div>
              <div className="flex flex-col gap-3 mb-4">
                <span className="w-11 h-11 rounded-full bg-[#193A84] flex items-center justify-center flex-shrink-0">
                  <Eye size={22} className="text-white" />
                </span>
                <h3 className="text-xl md:text-2xl font-bold text-[#1a1a2e]">
                  Our <span className="text-[#193A84]">Vision</span>
                </h3>
              </div>
              <p className="text-[#193A84] md:text-xl text-sm md:text-base leading-relaxed">
                To become a trusted innovation hub where ideas are transformed
                into impactful products.
              </p>
            </div>
          </div>

          {/* ── Right column: image — desktop only ── */}
          <div className="hidden md:flex flex-1 self-stretch">
            <img
              src={missionImg}
              alt="Team in collaborative meeting"
              className="w-full h-full object-cover rounded-2xl shadow-lg"
            />
          </div>

        </div>
      </section>

      {/* ═══════════════════════════════════════
          OUR VALUES SECTION
         ═══════════════════════════════════════ */}
      <section className="bg-[#193A84] px-6 lg:px-16 my-15 py-8 md:py-24 mb-15 md:mb-15 md:mx-8 lg:mx-15 md:rounded-[20px]">
        <div className="max-w-6xl mx-auto">
          {/* Heading */}
          <h2 className="text-2xl md:text-3xl font-bold text-white text-center mb-4">
            Our Values
          </h2>
          <p className="text-white/70 text-sm md:text-base text-center max-w-2xl mx-auto mb-14 leading-relaxed">
            At ScaleUp, our values define how we collaborate, make decisions,
            build meaningful digital products and ensure accountability that help
            us create solutions that truly matter.
          </p>

          {/* Value cards — desktop: 2-col asymmetric | mobile: horizontal scroll */}

          {/* Mobile: horizontal scroll row */}
          <div className="flex md:hidden gap-4 overflow-x-auto pb-4 -mx-1 px-6 snap-x snap-mandatory scrollbar-hide">
            {values.map((value) => {
              const Icon = value.icon;
              return (
                <div
                  key={value.title}
                  className="flex-shrink-0 w-[72vw] max-w-[280px] snap-start bg-white rounded-2xl p-6 shadow-md"
                >
                  <span className="w-12 h-12 rounded-full bg-[#193A84]/10 flex items-center justify-center mb-5">
                    <Icon size={24} className="text-[#193A84]" />
                  </span>
                  <h4 className="font-bold text-[#1a1a2e] text-base mb-2">{value.title}</h4>
                  <p className="text-[#193A84] text-sm leading-relaxed">{value.desc}</p>
                </div>
              );
            })}
          </div>

          {/* Desktop: 2-column asymmetric grid */}
          <div className="hidden md:flex gap-6 items-stretch">
            {/* Left column — first card, full height */}
            {(() => {
              const Icon = values[0].icon;
              return (
                <div className="flex-1 bg-white my-[20px] mx-[25px] rounded-2xl p-7 shadow-md hover:-translate-y-1 transition-transform duration-300 flex flex-col">
                  <span className="w-12 h-12 rounded-full bg-[#193A84] flex items-center justify-center mb-5">
                    <Icon size={24} className="text-[#FFFFFF]" />
                  </span>
                  <h4 className="font-bold text-[#1a1a2e] text-base mb-2">{values[0].title}</h4>
                  <p className="text-[#193A84] text-xl leading-relaxed">{values[0].desc}</p>
                </div>
              );
            })()}

            {/* Right column — 4 remaining cards in 2×2 grid */}
            <div className="flex-1 grid grid-cols-2 gap-6">
              {values.slice(1).map((value) => {
                const Icon = value.icon;
                return (
                  <div
                    key={value.title}
                    className="bg-white rounded-2xl p-7 shadow-md hover:-translate-y-1 transition-transform duration-300"
                  >
                    <span className="w-12 h-12 rounded-full bg-[#193A84] flex items-center justify-center mb-5">
                      <Icon size={24} className="text-[#FFFFFF]" />
                    </span>
                    <h4 className="font-bold text-[#1a1a2e] text-base mb-2">{value.title}</h4>
                    <p className="text-[#193A84] text-sm leading-relaxed">{value.desc}</p>
                  </div>
                );
              })}
            </div>
          </div>

          {/* CTA */}
          <div className="mt-10 md:mt-14 px-3 md:px-0 md:flex md:justify-center">
            <Link
              to="/join-us"
              className="block md:inline-block w-full md:w-auto text-center bg-white text-[#193A84] font-semibold text-base px-15 py-3 rounded-lg hover:bg-gray-100 transition-colors"
            >
              Join Us
            </Link>
          </div>
        </div>
      </section>

      {/* ─── Footer ─── */}
      <Footer />
    </div>
  );
};

export default AboutUs;
