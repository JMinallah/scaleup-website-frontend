import { useState } from "react";
import contactBg from "../assets/images/comtact.jpg";
import emailIcon from "../assets/icons/EnvelopeSimple.svg";
import globeIcon from "../assets/icons/GlobeHemisphereEast.svg";
import phoneIcon from "../assets/icons/PhoneOutgoing.svg";

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "General Inquiry",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState(null);

  const subjectOptions = [
    "General Inquiry",
    "Complaint",
    "Mentorship",
    "Sponsorship",
    "Volunteering",
    "Partnership",
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);

    try {
      await new Promise((resolve) => setTimeout(resolve, 1500));

      // Simulate successful submission
      console.log("Form submitted:", formData);
      setIsSubmitted(true);

      // Reset success message after 5 seconds
      setTimeout(() => {
        setIsSubmitted(false);
      }, 3000);
    } catch (err) {
      setError("Something went wrong. Please try again.", err);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <header
        className="relative w-full h-[250px] md:h-[300px] flex items-center justify-center overflow-hidden bg-cover bg-center"
        style={{ backgroundImage: `url(${contactBg})` }}
      >
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <h1 className="font-bold text-primary text-4xl md:text-5xl lg:text-6xl">
            Contact Us
          </h1>
        </div>
      </header>
      <main className="p-4">
        {/* Main Content */}
        <section className="pb-10 pt-2 md:pt-4">
          {/* Success Message */}
          {isSubmitted && (
            <div className="mb-6 bg-green-50 border border-green-200 rounded-lg p-4 text-center animate-fadeIn">
              <p className="text-green-700 font-medium">
                ✅ Thank you! Your message has been sent successfully. We'll
                respond within 24 hours.
              </p>
            </div>
          )}

          {/* Error Message */}
          {error && (
            <div className="mb-6 bg-red-50 border border-red-200 rounded-lg p-4 text-center">
              <p className="text-red-700 font-medium">❌ {error}</p>
            </div>
          )}

          {/* Contact Grid - stacks on mobile, side by side on desktop */}
          <div className="grid md:grid-cols-2 gap-4 md:gap-6">
            {/* Left Column - Contact Info */}
            <div className="px-4 pt-4 md:p-8">
              <div className="mb-10">
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-neutral mb-6">
                  Contact Us
                </h2>
                <p className="font-poppins font-regular text-neutral-text text-base md:text-lg lg:text-2xl ">
                  Have a question, concern, or require assistance?
                  <br />
                  Our team is available to support you. Please send us a message
                  and we will respond promptly.
                </p>
              </div>

              <div className="space-y-6 md:space-y-10">
                {/* Email */}
                <div className="flex items-center gap-4">
                  <img
                    src={emailIcon}
                    alt="Email Icon"
                    className="w-6 h-6 md:w-9 md:h-9"
                  />
                  <div>
                    <h3 className="font-medium text-secondary text-base md:text-xl lg:text-2xl">
                      Email
                    </h3>
                    <p className="text-neutral-text font-regular text-sm md:text-base lg:text-xl">
                      scaleupbuild@gmail.com
                    </p>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex items-center gap-4">
                  <img
                    src={phoneIcon}
                    alt="Phone Icon"
                    className="w-6 h-6 md:w-9 md:h-9"
                  />
                  <div>
                    <h3 className="font-medium text-secondary text-base md:text-xl lg:text-2xl">
                      Phone Number
                    </h3>
                    <p className="text-neutral-text font-regular text-sm md:text-base lg:text-xl">
                      +234 8156 877 017
                    </p>
                  </div>
                </div>

                {/* Work Model */}
                <div className="flex items-center gap-4">
                  <img
                    src={globeIcon}
                    alt="Globe Icon"
                    className="w-6 h-6 md:w-9 md:h-9"
                  />
                  <div>
                    <h3 className="font-medium text-secondary text-base md:text-xl lg:text-2xl">
                      Work Model
                    </h3>
                    <p className="text-neutral-text font-regular text-sm md:text-base lg:text-xl">
                      Fully Remote
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column - Contact Form */}
            <div className="bg-white rounded-2xl shadow-lg m-4 p-4 md:p-8 md:mt-20 border-[1.5px] border-border">
              <form onSubmit={handleSubmit} className="space-y-6 lg:space-y-8">
                {/* Name Field */}
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm md:text-base lg:text-2xl font-semibold font-manrope text-neutral mb-2"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    disabled={isSubmitting}
                    className="w-full px-4 py-3 bg-input-bg text-neutral-muted text-sm md:text-base lg:text-xl font-medium font-manrope border-input-bg rounded-lg focus:ring-2 focus:ring-secondary/20 focus:border-secondary outline-none transition disabled:bg-gray-100"
                    placeholder="Benedicta"
                  />
                </div>

                {/* Email Field */}
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm md:text-base lg:text-2xl font-semibold font-manrope text-neutral mb-2"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    disabled={isSubmitting}
                    className="w-full px-4 py-3 bg-input-bg text-neutral-muted text-sm md:text-base lg:text-xl font-medium font-manrope border-input-bg rounded-lg focus:ring-2 focus:ring-secondary/20 focus:border-secondary outline-none transition disabled:bg-gray-100"
                    placeholder="youremail@gmail.com"
                  />
                </div>

                <div>
                  <label
                    htmlFor="subject"
                    className="block text-sm md:text-base lg:text-2xl font-semibold font-manrope text-neutral mb-2"
                  >
                    Subject
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    disabled={isSubmitting}
                    className="w-full px-4 py-3 bg-input-bg text-neutral-muted text-sm md:text-base lg:text-xl font-medium font-manrope border-input-bg rounded-lg focus:ring-2 focus:ring-secondary/20 focus:border-secondary outline-none transition disabled:bg-gray-100"
                  >
                    {subjectOptions.map((option) => (
                      <option key={option} value={option}>
                        {option}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Message Field */}
                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm md:text-base lg:text-2xl font-semibold font-manrope text-neutral mb-2"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows="5"
                    disabled={isSubmitting}
                    className="w-full px-4 py-3 bg-input-bg text-neutral-muted text-sm md:text-base lg:text-xl font-medium font-manrope border-input-bg rounded-lg focus:ring-2 focus:ring-secondary/20 focus:border-secondary outline-none transition disabled:bg-gray-100 resize-none"
                    placeholder="Type your message here..."
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="block mx-auto bg-main shadow-md text-primary font-semibold font-manrope py-4 px-8 lg:px-12 rounded-4xl hover:bg-main/90 transition duration-300 disabled:opacity-50 disabled:cursor-not-allowed text-base"
                >
                  {isSubmitting ? "Sending..." : "Submit"}
                </button>
              </form>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default ContactPage;
