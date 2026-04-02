import { Star } from "lucide-react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import olukayodeImg from "../assets/Olukayode.png";
import benedictaImg from "../assets/Benedicta.png";
import haulatImg from "../assets/Haulat.png";

const testimonials = [
  {
    id: 1,
    quote:
      "This platform makes managing products seamless. The workflow tools are intuitive and the collaboration features keep our entire team aligned on priorities.",
    name: "Olukayode TiOluwani Blessing",
    role: "Product Manager",
    image: olukayodeImg,
    featured: true,
  },
  {
    id: 2,
    quote:
      "The interface is very clean and well-structured. Every element is purposefully placed, making the overall user experience delightful and efficient.",
    name: "Benedicta Atagamen",
    role: "UI/UX Designer",
    image: benedictaImg,
    featured: false,
  },
  {
    id: 3,
    quote:
      "This platform has made product management easier. From ideation to launch, every stage is streamlined with the right tools and clear visibility.",
    name: "Haulat Alobalowa",
    role: "Product Manager",
    image: haulatImg,
    featured: false,
  },
];

const StarRating = () => (
  <div className="flex gap-1">
    {[...Array(5)].map((_, i) => (
      <Star key={i} size={18} className="fill-[#FFD700] text-[#FFD700]" />
    ))}
  </div>
);

const TestimonialCard = ({ testimonial }) => {
  return (
    <div
      className={`bg-white rounded-2xl shadow-lg border border-gray-100 p-8 flex flex-col justify-between transition-transform duration-300 hover:-translate-y-1`}
    >
      <div>
        <StarRating />
        <p className="mt-5 text-[#193A84] text-sm leading-relaxed">
          &ldquo;{testimonial.quote}&rdquo;
        </p>
      </div>

      <div className="mt-6 pt-5 border-t border-gray-100 flex items-center gap-4">
        <img
          src={testimonial.image}
          alt={testimonial.name}
          className="w-12 h-12 rounded-full object-cover"
        />
        <div>
          <p className="font-semibold text-[#193A84] text-sm">
            {testimonial.name}
          </p>
          <p className="text-xs text-[#193A84]">{testimonial.role}</p>
        </div>
      </div>
    </div>
  );
};

const Testimonials = () => {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Navbar */}
      <Navbar />

      {/* Hero heading area */}
      <section className="bg-[#193A84] h-[256px] md:h-[270px] font-inter flex flex-col items-center justify-center px-6 text-center">
        <h2 className="text-white text-3xl md:text-4xl font-bold mb-2">
          What Our Users Say
        </h2>
        <p className="text-white/80 text-sm md:text-base mb-4">
          Trusted by thousands of happy customers worldwide
        </p>

        {/* Rating summary */}
        <div className="flex items-center justify-center gap-3">
          <div className="flex gap-1">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                size={22}
                className="fill-[#FFD700] text-[#FFD700]"
              />
            ))}
          </div>
          <span className="text-white text-sm">
            <span className="text-xl font-bold">4.9</span>/5 from <span className="font-semibold">50+</span> reviews
          </span>
        </div>
      </section>

      {/* Testimonials cards */}
      <section className="bg-[#FFFFFF] font-inter flex-1 pt-0 pb-12 relative">
        <div className="max-w-6xl mx-auto px-6 -mt-16 relative z-10">
          {/* First card — centered, overlaps hero */}
          <div className="flex justify-center mb-7">
            <div className="w-full md:w-[600px]">
              <TestimonialCard testimonial={testimonials[0]} />
            </div>
          </div>
          {/* Second row — two cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-[1232px] mx-auto">
            {testimonials.slice(1).map((t) => (
              <TestimonialCard key={t.id} testimonial={t} />
            ))}
          </div>
        </div>

        {/* Bottom spacing */}
        <div className="h-12" />
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Testimonials;
