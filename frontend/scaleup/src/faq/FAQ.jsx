import FAQBg from "../assets/images/comtact.jpg";
import SimpleAccordion from "./FaqAcc";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function FAQPage() {
  return (
    <div className="min-h-screen flex flex-col font-[Poppins]">
      <Navbar />
      {/* HERO */}
      <header
        className="relative w-full h-[320px] md:h-[420px] lg:h-[480px] flex items-center justify-center overflow-hidden bg-cover bg-center"
        style={{ backgroundImage: `url(${FAQBg})` }}
      >
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="relative z-10 px-4 text-center">
          <h1 className="font-bold font-inter text-primary text-2xl md:text-4xl lg:text-5xl mb-2 md:mb-4">
            Frequently Asked Questions
          </h1>
          <p className="text-primary text-base md:text-lg lg:text-xl mb-4 md:mb-6">
            Answers to common questions about volunteering with ScaleUp
          </p>

          <button className="bg-background px-6 py-3 rounded-md text-btn-text font-semibold text-base lg:text-xl">
            Become A Volunteer
          </button>
        </div>
      </header>

      <section className="relative z-10 -mt-10 md:-mt-14 bg-white rounded-t-[20px] py-8 md:px-6 lg:px-16 md:py-12">
        <div className="max-w-6xl mx-auto px-4">
          <main className="p-4">
            {/* ================= MOBILE LAYOUT ================= */}
            <div className="lg:hidden space-y-8 md:px-8">
              {/* Intro */}
              <div>
                <h2 className="mt-3 mb-4 font-inter font-semibold text-2xl md:text-3xl">
                  Everything you need to know
                </h2>
                <p className="text-base md:text-lg text-neutral-text">
                  Answers to common questions about volunteering with ScaleUp
                </p>
              </div>

              {/* Accordion */}
              <div className="bg-btn-text py-8 px-3 md:px-6 md:py-8 rounded-2xl max-w-md md:max-w-2xl">
                <SimpleAccordion />
              </div>

              {/* CTA */}
              <div className="bg-btn-text px-6 py-6 rounded-2xl max-w-md">
                <h3 className="font-semibold font-inter text-2xl md:text-3xl text-neutral-primary mb-2">
                  Still have questions?
                </h3>
                <p className="text-neutral-text text-base md:text-xl mb-4 md:max-w-lg">
                  Cant find the answers to your question? Contact us and we’ll
                  get back to you.
                </p>
                <button className="bg-main rounded-4xl px-6 py-2 font-manrope font-semibold text-xl text-primary shadow-xl hover:cursor-pointer">
                  <Link to="/contact">Contact Us</Link>
                </button>
              </div>
            </div>

            {/* ================= DESKTOP LAYOUT ================= */}
            <div className="hidden lg:grid grid-cols-2 gap-2 items-start mt-8 px-8">
              {/* LEFT COLUMN */}
              <div className="">
                {/* Intro */}
                <div className="max-w-md">
                  <h2 className="mb-4 font-semibold text-5xl">
                    Everything you need to know
                  </h2>
                  <p className="font-poppins text-xl text-neutral-text max-w-sm">
                    Answers to common questions about volunteering with ScaleUp
                  </p>
                </div>

                {/* CTA */}
                <div className="bg-btn-text px-6 py-6 rounded-2xl max-w-sm mt-12">
                  <h3 className="font-semibold text-2xl text-neutral-primary mb-2">
                    Still have questions?
                  </h3>
                  <p className="text-neutral-text text-lg mb-4">
                    Cant find the answers to your question? Contact us and we’ll
                    get back to you.
                  </p>
                  <button className="bg-main rounded-4xl px-6 py-2 font-manrope font-semibold text-xl text-primary shadow-xl hover:cursor-pointer">
                    <Link to="/contact">Contact Us</Link>
                  </button>
                </div>
              </div>

              {/* RIGHT COLUMN */}
              <div className="bg-btn-text py-6 px-3 rounded-2xl max-w-md lg:max-w-2xl">
                <SimpleAccordion />
              </div>
            </div>
          </main>
        </div>
      </section>
      <Footer />
    </div>
  );
}
