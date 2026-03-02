import { Link } from "react-router-dom";
import { Users, Eye, Handshake, CheckCircle, TrendingUp, Shield, Lightbulb } from "lucide-react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import heroImg from "../assets/Ellipse 1.png";
import aboutImg from "../assets/Rectangle 89.png";
import missionImg from "../assets/Frame 7.png";
import visionImg from "../assets/Frame 8.png";

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
          <p className="text-white/80 text-base md:text-lg max-w-lg">
            Learn more about our community, mission, and the values that drive us.
          </p>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          ABOUT SCALEUP SECTION
         ═══════════════════════════════════════ */}
      <section className="bg-white px-6 lg:px-16 py-16 md:py-24">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12 md:gap-16">
          {/* Photo */}
          <div className="flex-1">
            <img
              src={aboutImg}
              alt="Team collaborating at a monitor"
              className="w-full h-[260px] md:h-[360px] object-cover rounded-2xl shadow-lg"
            />
          </div>

          {/* Text */}
          <div className="flex-1">
            <h2 className="text-2xl md:text-3xl font-bold text-[#1a1a2e] mb-5">
              About ScaleUp
            </h2>
            <p className="text-gray-600 text-sm md:text-base leading-relaxed mb-8">
              ScaleUp is a growing tech and innovation community built on
              collaboration, learning, and execution. We bring together
              passionate individuals to solve real problems by building digital
              products that matter.
            </p>
            <Link
              to="/join-us"
              className="inline-block bg-[#193A84] text-white font-semibold text-base px-8 py-3.5 rounded-lg hover:bg-[#142e6b] transition-colors"
            >
              Join Us
            </Link>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          MISSION & VISION
         ═══════════════════════════════════════ */}
      <section className="bg-[#F9FAFB] px-6 lg:px-16 py-16 md:py-24">
        <div className="max-w-6xl mx-auto space-y-20">
          {/* ── Our Mission ── */}
          <div className="flex flex-col md:flex-row items-center gap-12 md:gap-16">
            {/* Text */}
            <div className="flex-1 order-2 md:order-1">
              <div className="flex items-center gap-3 mb-4">
                <span className="w-11 h-11 rounded-full bg-[#193A84] flex items-center justify-center">
                  <Users size={22} className="text-white" />
                </span>
                <h3 className="text-xl md:text-2xl font-bold text-[#1a1a2e]">
                  Our Mission
                </h3>
              </div>
              <p className="text-gray-600 text-sm md:text-base leading-relaxed">
                To build meaningful digital products while creating opportunities
                for individuals to grow, collaborate, and gain real-world
                experience.
              </p>
            </div>
            {/* Photo */}
            <div className="flex-1 order-1 md:order-2">
              <img
                src={missionImg}
                alt="Team in collaborative meeting"
                className="w-full h-[220px] md:h-[300px] object-cover rounded-2xl shadow-lg"
              />
            </div>
          </div>

          {/* ── Our Vision ── */}
          <div className="flex flex-col md:flex-row items-center gap-12 md:gap-16">
            {/* Photo */}
            <div className="flex-1">
              <img
                src={visionImg}
                alt="Team discussion at table"
                className="w-full h-[220px] md:h-[300px] object-cover rounded-2xl shadow-lg"
              />
            </div>
            {/* Text */}
            <div className="flex-1">
              <div className="flex items-center gap-3 mb-4">
                <span className="w-11 h-11 rounded-full bg-[#193A84] flex items-center justify-center">
                  <Eye size={22} className="text-white" />
                </span>
                <h3 className="text-xl md:text-2xl font-bold text-[#1a1a2e]">
                  Our Vision
                </h3>
              </div>
              <p className="text-gray-600 text-sm md:text-base leading-relaxed">
                To become a trusted innovation hub where ideas are transformed
                into impactful products.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          OUR VALUES SECTION
         ═══════════════════════════════════════ */}
      <section className="bg-[#193A84] px-6 lg:px-16 py-16 md:py-24">
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

          {/* Value cards grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {values.map((value) => {
              const Icon = value.icon;
              return (
                <div
                  key={value.title}
                  className="bg-white rounded-2xl p-7 shadow-md hover:-translate-y-1 transition-transform duration-300"
                >
                  <span className="w-12 h-12 rounded-full bg-[#193A84]/10 flex items-center justify-center mb-5">
                    <Icon size={24} className="text-[#193A84]" />
                  </span>
                  <h4 className="font-bold text-[#1a1a2e] text-base mb-2">
                    {value.title}
                  </h4>
                  <p className="text-gray-500 text-sm leading-relaxed">
                    {value.desc}
                  </p>
                </div>
              );
            })}
          </div>

          {/* CTA */}
          <div className="flex justify-center mt-14">
            <Link
              to="/join-us"
              className="bg-white text-[#193A84] font-semibold text-base px-10 py-3.5 rounded-lg hover:bg-gray-100 transition-colors"
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
