import { Link } from "react-router-dom";
import { useState } from "react";
import { post } from "../utils/api";
import { Check } from "lucide-react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import heroImg from "../assets/WhatsApp_Image_2026-02-07_at_2.11.15_AM-removebg-preview 1.png"
import aboutImg2 from "../assets/Rectangle 5.png";
import aboutImg3 from "../assets/Rectangle 6.png";
import phone1 from "../assets/iPhone 16 Pro.png";
import phone2 from "../assets/iPhone 16 Pro(1).png";
import ToolsCarousel from "../components/ToolsCarousel";


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
  const [notifySubmitting, setNotifySubmitting] = useState(false);
  const [notifyMessage, setNotifyMessage] = useState(null);

  const handleNotify = async () => {
    // client-side validation
    const email = notifyEmail?.trim();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email) return setNotifyMessage("Please enter an email address.");
    if (!emailRegex.test(email)) return setNotifyMessage("Please enter a valid email address.");
    setNotifySubmitting(true);
    setNotifyMessage(null);
    try {
      await post("/api/waitlist", { email: notifyEmail, source: "home" });
      setNotifyMessage("Thanks. We'll notify you when it's ready.");
      setNotifyEmail("");
    } catch (err) {
      console.error(err);
      const body = err && err.body;

      if (
        err &&
        (err.status === 409 ||
          (body && typeof body === "object" && ((body.error && /already/i.test(body.error)) || (body.message && /already/i.test(body.message)))))
      ) {
        setNotifyMessage("This email is already on our waitlist.");
        return;
      }

      if (err && err.status === 400 && body && typeof body === "object") {
        if (body.details && body.details.email) {
          setNotifyMessage("Please enter a valid email address.");
          return;
        }

        const validationMessage = body.error || body.message || "";
        if (/invalid email|valid email|email is invalid/i.test(validationMessage)) {
          setNotifyMessage("Please enter a valid email address.");
          return;
        }
      }

      setNotifyMessage("Unable to sign up. Please try again later.");
    } finally {
      setNotifySubmitting(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      {/* ─── Navbar ─── */}
      <Navbar />

      {/* ═══════════════════════════════════════
          HERO SECTION
         ═══════════════════════════════════════ */}
      <section className="bg-white px-6 lg:px-10 pt-6 md:pt-12 pb-0">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-10 md:gap-16">
          {/* Text */}
          <div className="flex-1 text-left">
            <h1 className="text-3xl font-inter md:text-[48px] lg:text-5xl font-bold text-[#1E4E8C] leading-tight mb-6">
              Building Products, People, and Possibilities Together
            </h1>
            <p className="text-[#1E4E8C] font-poppins font-normal text-[16px] leading-[34px] md:font-medium md:text-[22px] md:leading-[34px] mb-8 max-w-xl md:mx-0">
              ScaleUp is a collaborative innovation hub where talents come
              together to build real digital products, gain hands-on experience,
              and turn ideas into impactful solutions.
            </p>
            <Link
              to="/join-us"
              className="inline-block font-inter md:mb-4 bg-[#193A84] text-white font-semibold text-base px-8 py-3.5 rounded-lg hover:bg-[#142e6b] transition-colors"
            >
              Join Us
            </Link>
          </div>

          {/* Hero Image — with dashed dots & blue circle behind */}
          <div className="flex-shrink-0 flex items-center justify-center">
            <div className="relative w-[254px] h-[234px] md:w-[420px] md:h-[387px]">
              {/* Dashed circle outline */}
              <div className="absolute top-[25px] left-[65px] w-[200px] h-[200px] md:top-[22px] md:left-[116px] md:w-[320px] md:h-[320px] rounded-full border-[3px] border-dashed border-black" />
              {/* Colored circle */}
              <div className="absolute top-[30px] left-[70px] w-[190px] h-[190px] md:top-[30px] md:left-[124px] md:w-[304px] md:h-[304px] rounded-full bg-[#1E4E8CE5]" />
              {/* Image — on top */}
              <img
                src={heroImg}
                alt="ScaleUp team member"
                className="absolute inset-0 w-full h-full object-contain z-10"
              />
            </div>
          </div>
        </div>
      </section>

      <ToolsCarousel/>

      {/* ═══════════════════════════════════════
          ABOUT SCALEUP SECTION
         ═══════════════════════════════════════ */}
      <section id="about" className="bg-white pt-16 md:py-10">
        <div className="flex flex-col md:flex-row md:items-start gap-12 md:gap-8">
          {/* Photo stack — pixel-accurate from Figma */}
          <div className="order-2 md:order-1 md:w-[55%] flex-shrink-0 relative h-[360px] md:h-[640px] w-full">
            {/* First image */}
            <img
              src={aboutImg2}
              alt="Team meeting around laptop"
              className="absolute top-0 left-[16px] w-[53%] h-[200px] md:left-0 md:w-[85%] md:h-[460px] object-cover rounded-[10px] shadow-md"
            />
            {/* Second image — overlapping at bottom-right of first */}
            <img
              src={aboutImg3}
              alt="Group discussion circle"
              className="absolute top-[110px] right-[16px] w-[60%] h-[190px] md:top-[300px] md:right-0 md:left-auto md:w-[56%] md:h-[340px] object-cover rounded-[10px] border-[5px] border-white shadow-md z-10"
            />
          </div>

          {/* Text content */}
          <div className="order-1 md:order-2 flex-1 px-6 md:px-4 lg:px-8">
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
              className="inline-block mt-8 bg-[#193A84] font-inter text-white font-semibold text-base px-8 py-3.5 rounded-lg hover:bg-[#142e6b] transition-colors"
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
        className="bg-white py-8 mb-15 md:py-10"
      >
        {/* Heading — outside the bordered box */}
        <h2 className="text-2xl md:text-3xl font-inter font-bold text-background text-center mb-8 px-6">
          <span className="text-secondary">Our</span> Products
        </h2>

        {/* Bordered content box — full width, gradient contained inside */}
        <div
          className="w-full border border-white px-6 lg:px-12 py-5 md:py-8 bg-[#D7DFEA]"
        >
          <div className="flex flex-col font-poppins md:flex-row items-center gap-10 md:gap-16">
            {/* Text block */}
            <div className="flex-1">
              {/* Coming Soon button — above HelloAgain */}
              <button className="inline-flex items-center justify-center bg-[#2FB7A3] text-white font-bold text-xs md:text-sm rounded-[50px] mb-4 transition-all duration-200 ease-out w-[160px] h-[40px] px-[20px] md:w-[220px] md:h-[56px] md:px-[22px] md:py-[16px]">
                Coming Soon!!!
              </button>
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
              <div className="flex items-center w-full max-w-[360px] md:max-w-md bg-white border border-gray-300 rounded-[100px] p-1.5 md:p-2">
                <input
                  type="email"
                  value={notifyEmail}
                  onChange={(e) => setNotifyEmail(e.target.value)}
                  placeholder="Enter email address"
                  className="flex-1 bg-transparent pl-3 md:pl-4 pr-2 py-1.5 text-xs md:text-sm text-gray-800 placeholder-gray-400 focus:outline-none min-w-0"
                />
                <button
                  type="button"
                  onClick={handleNotify}
                  disabled={notifySubmitting}
                  className="flex-shrink-0 bg-[#2FB7A3] hover:bg-[#26a090] text-white font-semibold text-xs md:text-sm px-4 md:px-6 py-2 md:py-2.5 rounded-[100px] whitespace-nowrap transition-colors cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {notifySubmitting ? "Sending..." : "Notify Me"}
                </button>
              </div>
              {notifyMessage && (
                <p className="mt-3 text-sm text-center text-gray-700">{notifyMessage}</p>
              )}
            </div>

            {/* Phone mockups */}
            <div className="flex-1 flex items-center justify-center">
              <div className="relative w-[250px] h-[255px] md:w-[416px] md:h-[426px]">
                {/* Blue rounded rectangle — at the bottom, phones emerge from it */}
                <div className="absolute bottom-0 left-0 w-full h-[64%] bg-[#1E4E8C] rounded-[30px] md:rounded-[50px]" />
                {/* Back phone (right, taller) */}
                <img
                  src={phone2}
                  alt="HelloAgain app screen"
                  className="absolute bottom-0 left-[44%] w-[49%] h-auto z-[1]"
                />
                {/* Front phone (left, slightly shorter) */}
                <img
                  src={phone1}
                  alt="HelloAgain app screen"
                  className="absolute bottom-0 left-[7%] w-[49%] h-auto z-[2]"
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
