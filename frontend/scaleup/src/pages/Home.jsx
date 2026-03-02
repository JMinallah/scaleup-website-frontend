import { Link } from "react-router-dom";
import { useState } from "react";
import { Check } from "lucide-react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import heroImg from "../assets/WhatsApp_Image_2026-02-07_at_2.11.15_AM-removebg-preview 1.png";
import aboutImg1 from "../assets/Rectangle 89.png";
import aboutImg2 from "../assets/Rectangle 5.png";
import aboutImg3 from "../assets/Rectangle 6.png";
import phone1 from "../assets/iPhone 16 Pro.png";
import phone2 from "../assets/iPhone 16 Pro(1).png";

/* ──────────────────────────────────────────────
   Inline brand SVG icons (no icon library needed)
   ────────────────────────────────────────────── */
const GitHubIcon = () => (
  <svg viewBox="0 0 24 24" className="h-8 w-8" fill="currentColor">
    <path d="M12 .5C5.37.5 0 5.78 0 12.292c0 5.211 3.438 9.63 8.205 11.188.6.111.82-.254.82-.567 0-.28-.01-1.022-.015-2.005-3.338.711-4.042-1.582-4.042-1.582-.546-1.361-1.333-1.723-1.333-1.723-1.09-.73.083-.716.083-.716 1.205.083 1.838 1.215 1.838 1.215 1.07 1.803 2.809 1.282 3.495.98.108-.763.417-1.282.76-1.577-2.665-.295-5.466-1.309-5.466-5.827 0-1.287.465-2.339 1.228-3.164-.123-.298-.532-1.497.117-3.12 0 0 1.001-.314 3.28 1.209A11.5 11.5 0 0 1 12 6.272c1.016.004 2.036.134 2.99.394 2.276-1.523 3.276-1.209 3.276-1.209.65 1.623.241 2.822.118 3.12.764.825 1.226 1.877 1.226 3.164 0 4.53-2.805 5.528-5.475 5.818.43.364.823 1.084.823 2.185 0 1.577-.014 2.849-.014 3.236 0 .315.216.683.825.567C20.565 21.917 24 17.5 24 12.292 24 5.78 18.627.5 12 .5z" />
  </svg>
);

const SlackIcon = () => (
  <svg viewBox="0 0 24 24" className="h-8 w-8" fill="currentColor">
    <path d="M5.042 15.165a2.528 2.528 0 0 1-2.52 2.523A2.528 2.528 0 0 1 0 15.165a2.527 2.527 0 0 1 2.522-2.52h2.52v2.52zm1.271 0a2.527 2.527 0 0 1 2.521-2.52 2.527 2.527 0 0 1 2.521 2.52v6.313A2.528 2.528 0 0 1 8.834 24a2.528 2.528 0 0 1-2.521-2.522v-6.313zM8.834 5.042a2.528 2.528 0 0 1-2.521-2.52A2.528 2.528 0 0 1 8.834 0a2.528 2.528 0 0 1 2.521 2.522v2.52H8.834zm0 1.271a2.528 2.528 0 0 1 2.521 2.521 2.528 2.528 0 0 1-2.521 2.521H2.522A2.528 2.528 0 0 1 0 8.834a2.528 2.528 0 0 1 2.522-2.521h6.312zm10.122 2.521a2.528 2.528 0 0 1 2.522-2.521A2.528 2.528 0 0 1 24 8.834a2.528 2.528 0 0 1-2.522 2.521h-2.522V8.834zm-1.268 0a2.528 2.528 0 0 1-2.523 2.521 2.527 2.527 0 0 1-2.52-2.521V2.522A2.527 2.527 0 0 1 15.165 0a2.528 2.528 0 0 1 2.523 2.522v6.312zm-2.523 10.122a2.528 2.528 0 0 1 2.523 2.522A2.528 2.528 0 0 1 15.165 24a2.527 2.527 0 0 1-2.52-2.522v-2.522h2.52zm0-1.268a2.527 2.527 0 0 1-2.52-2.523 2.526 2.526 0 0 1 2.52-2.52h6.313A2.527 2.527 0 0 1 24 15.165a2.528 2.528 0 0 1-2.522 2.523h-6.313z" />
  </svg>
);

const FigmaIcon = () => (
  <svg viewBox="0 0 24 24" className="h-8 w-8" fill="currentColor">
    <path d="M15.852 8.981h-4.588V0h4.588c2.476 0 4.49 2.014 4.49 4.49s-2.014 4.491-4.49 4.491zM12.735 7.51h3.117c1.665 0 3.019-1.355 3.019-3.019s-1.355-3.019-3.019-3.019h-3.117V7.51zm0 8.942v-7.47h3.117c2.476 0 4.49 2.013 4.49 4.489 0 2.476-2.014 4.49-4.49 4.49h-1.647c-1.09 0-1.47-1.51-1.47-1.51zm1.471.04h1.647c1.665 0 3.019-1.355 3.019-3.019 0-1.665-1.354-3.02-3.019-3.02h-3.117v4.529c0 .831.638 1.51 1.47 1.51zM8.148 24c-2.476 0-4.49-2.014-4.49-4.49s2.014-4.49 4.49-4.49h4.588v4.49c0 2.476-2.013 4.49-4.588 4.49zm0-7.51c-1.665 0-3.019 1.355-3.019 3.02s1.354 3.019 3.019 3.019c1.665 0 3.117-1.354 3.117-3.019v-3.02H8.148zM8.148 8.981c-2.476 0-4.49-2.014-4.49-4.49S5.672 0 8.148 0h4.588v8.981H8.148zm0-7.51c-1.665 0-3.019 1.355-3.019 3.02s1.354 3.019 3.019 3.019h3.117V1.471H8.148z" />
  </svg>
);

const GoogleIcon = () => (
  <svg viewBox="0 0 24 24" className="h-8 w-8">
    <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 0 1-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z" fill="#4285F4" />
    <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
    <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05" />
    <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
  </svg>
);

const NotionIcon = () => (
  <svg viewBox="0 0 24 24" className="h-8 w-8" fill="currentColor">
    <path d="M4.459 4.208c.746.606 1.026.56 2.428.466l13.215-.793c.28 0 .047-.28-.046-.326L18.1 2.03c-.42-.326-.98-.7-2.055-.607L3.01 2.75c-.467.046-.56.28-.374.466l1.823.992zm.793 3.172v13.856c0 .746.373 1.027 1.213.98l14.523-.839c.84-.046.933-.56.933-1.166V6.354c0-.606-.233-.933-.746-.886l-15.177.839c-.56.047-.746.327-.746.887zm14.337.745c.093.42 0 .84-.42.886l-.7.14v10.264c-.607.327-1.166.514-1.633.514-.746 0-.933-.234-1.493-.933l-4.573-7.186v6.953l1.447.327s0 .84-1.166.84l-3.218.186c-.093-.186 0-.653.327-.746l.84-.233V9.854L7.462 9.76c-.093-.42.14-1.026.793-1.073l3.451-.234 4.759 7.28V9.387l-1.213-.14c-.093-.513.28-.886.746-.933l3.451-.186z" />
  </svg>
);

/* ──────────────────────────────────────────────
   About section bullet items
   ────────────────────────────────────────────── */
const aboutPoints = [
  {
    title: "Build Real Products",
    desc: "Design and develop real-world digital products from concept to launch.",
  },
  {
    title: "Grow Tech Talent",
    desc: "Gain hands-on experience, mentorship, and proficiency with modern tools.",
  },
  {
    title: "Collaborate as a Community",
    desc: "Learn through teamwork, peer reviews, and community-driven development.",
  },
  {
    title: "Turn Ideas Into Impact",
    desc: "Transform innovative ideas into scalable, impactful digital solutions.",
  },
];

/* ──────────────────────────────────────────────
   Home Page Component
   ────────────────────────────────────────────── */
const Home = () => {
  const [notifyEmail, setNotifyEmail] = useState("");

  return (
    <div className="min-h-screen flex flex-col font-[Poppins]">
      {/* ─── Navbar ─── */}
      <Navbar />

      {/* ═══════════════════════════════════════
          HERO SECTION
         ═══════════════════════════════════════ */}
      <section className="bg-white px-6 lg:px-16 py-12 md:py-20">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-10 md:gap-16">
          {/* Text */}
          <div className="flex-1 text-center md:text-left">
            <h1 className="text-3xl md:text-[42px] lg:text-5xl font-bold text-[#1a1a2e] leading-tight mb-6">
              Building Products, People, and Possibilities Together
            </h1>
            <p className="text-gray-600 text-base md:text-lg leading-relaxed mb-8 max-w-xl mx-auto md:mx-0">
              ScaleUp is a collaborative innovation hub where talents come
              together to build real digital products, gain hands-on experience,
              and turn ideas into impactful solutions.
            </p>
            <Link
              to="/join-us"
              className="inline-block bg-[#193A84] text-white font-semibold text-base px-8 py-3.5 rounded-lg hover:bg-[#142e6b] transition-colors"
            >
              Join Us
            </Link>
          </div>

          {/* Hero Image — circular with dashed border */}
          <div className="flex-shrink-0 flex items-center justify-center">
            <div className="relative w-[260px] h-[260px] md:w-[340px] md:h-[340px] lg:w-[400px] lg:h-[400px]">
              {/* Dashed circle outline */}
              <div className="absolute inset-0 rounded-full border-[3px] border-dashed border-[#193A84]/30" />
              {/* Image */}
              <img
                src={heroImg}
                alt="ScaleUp team member"
                className="absolute inset-2 w-[calc(100%-16px)] h-[calc(100%-16px)] object-cover rounded-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          TOOLS / TECH STACK BAR
         ═══════════════════════════════════════ */}
      <section className="bg-[#F3F4F6] py-6 md:py-8">
        <div className="max-w-4xl mx-auto flex items-center justify-center gap-10 md:gap-16 px-6 text-gray-500">
          <GitHubIcon />
          <SlackIcon />
          <FigmaIcon />
          <GoogleIcon />
          <NotionIcon />
        </div>
      </section>

      {/* ═══════════════════════════════════════
          ABOUT SCALEUP SECTION
         ═══════════════════════════════════════ */}
      <section id="about" className="bg-white px-6 lg:px-16 py-16 md:py-24">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12 md:gap-16">
          {/* Photo grid */}
          <div className="flex-1 grid grid-cols-2 gap-4">
            {/* Large top image spanning both cols */}
            <div className="col-span-2">
              <img
                src={aboutImg1}
                alt="Team collaborating at monitor"
                className="w-full h-[200px] md:h-[260px] object-cover rounded-xl shadow-md"
              />
            </div>
            {/* Two smaller images side by side */}
            <div>
              <img
                src={aboutImg2}
                alt="Team meeting around laptop"
                className="w-full h-[140px] md:h-[180px] object-cover rounded-xl shadow-md"
              />
            </div>
            <div>
              <img
                src={aboutImg3}
                alt="Group discussion circle"
                className="w-full h-[140px] md:h-[180px] object-cover rounded-xl shadow-md"
              />
            </div>
          </div>

          {/* Text content */}
          <div className="flex-1">
            <h2 className="text-2xl md:text-3xl font-bold text-[#1a1a2e] mb-5">
              About ScaleUp
            </h2>
            <p className="text-gray-600 text-sm md:text-base leading-relaxed mb-7">
              ScaleUp is a collaborative innovation community where talents come
              together to learn, build, and grow.
            </p>

            <ul className="space-y-5">
              {aboutPoints.map((point) => (
                <li key={point.title} className="flex gap-3">
                  <span className="mt-0.5 flex-shrink-0 w-5 h-5 rounded-full bg-[#193A84] flex items-center justify-center">
                    <Check size={13} className="text-white" strokeWidth={3} />
                  </span>
                  <div>
                    <p className="font-semibold text-[#1a1a2e] text-sm md:text-base">
                      {point.title}
                    </p>
                    <p className="text-gray-500 text-xs md:text-sm leading-relaxed">
                      {point.desc}
                    </p>
                  </div>
                </li>
              ))}
            </ul>

            <Link
              to="/join-us"
              className="inline-block mt-8 bg-[#193A84] text-white font-semibold text-base px-8 py-3.5 rounded-lg hover:bg-[#142e6b] transition-colors"
            >
              Join Us
            </Link>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          OUR PRODUCTS SECTION
         ═══════════════════════════════════════ */}
      <section
        id="products"
        className="bg-gradient-to-b from-[#F3F4F6] to-[#E8EAF0] px-6 lg:px-16 py-16 md:py-24"
      >
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-[#1a1a2e] text-center mb-14">
            Our Products
          </h2>

          <div className="flex flex-col md:flex-row items-center gap-12 md:gap-16">
            {/* Text block */}
            <div className="flex-1">
              <h3 className="text-3xl md:text-4xl font-bold text-[#1a1a2e] mb-4">
                HelloAgain
              </h3>
              <p className="text-gray-600 text-sm md:text-base leading-relaxed mb-2">
                Hello Again is a smart communication product built to help
                brands reconnect with their customers at the right time.
              </p>
              <p className="text-gray-500 text-sm mb-8 italic">
                Launching soon.
              </p>

              {/* Email + Notify Me */}
              <div className="flex flex-col sm:flex-row gap-3 max-w-md">
                <input
                  type="email"
                  value={notifyEmail}
                  onChange={(e) => setNotifyEmail(e.target.value)}
                  placeholder="Enter email address"
                  className="flex-1 border border-gray-300 rounded-lg px-4 py-3 text-sm text-gray-800 placeholder-gray-400 focus:outline-none focus:border-[#193A84] focus:ring-1 focus:ring-[#193A84] transition-colors"
                />
                <button className="bg-[#16A34A] hover:bg-[#15803D] text-white font-semibold text-sm px-6 py-3 rounded-lg transition-colors whitespace-nowrap cursor-pointer">
                  Notify Me
                </button>
              </div>
            </div>

            {/* Phone mockups + Coming Soon badge */}
            <div className="flex-1 flex items-center justify-center relative">
              {/* Coming Soon badge */}
              <div className="absolute -top-4 right-0 md:right-4 z-20 bg-[#16A34A] text-white font-bold text-xs md:text-sm px-4 py-2 rounded-full shadow-lg rotate-3">
                Coming Soon!!!
              </div>

              <div className="relative w-[280px] h-[340px] md:w-[360px] md:h-[440px]">
                {/* Back phone (tilted right) */}
                <img
                  src={phone2}
                  alt="HelloAgain app screen"
                  className="absolute right-0 top-0 w-[55%] h-auto drop-shadow-2xl rotate-[6deg] origin-bottom-left"
                />
                {/* Front phone (tilted left) */}
                <img
                  src={phone1}
                  alt="HelloAgain app screen"
                  className="absolute left-0 top-6 w-[55%] h-auto drop-shadow-2xl -rotate-[6deg] origin-bottom-right z-10"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── Footer ─── */}
      <Footer />
    </div>
  );
};

export default Home;
