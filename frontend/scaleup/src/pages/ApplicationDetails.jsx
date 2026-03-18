import { useState, useEffect } from "react";
import { ChevronDown, X, User, Mail } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { post } from "../utils/api";
import logo from "../assets/logo.png";


const errorMessage = (err) => {
  if (err.status === 0)
    return "Unable to reach our servers. Please check your internet connection and try again.";
  if (err.status >= 500)
    return "Our server encountered an issue. Please try again in a moment.";
  if (err.status === 404)
    return "This service is temporarily unavailable. Please try again later.";
  return "Something went wrong. Please try again.";
};

const skillOptions = [
  "Software engineering",
  "UI/UX Design",
  "Operations/Product management",
  "Marketing and media",
  "Data Science",
  "DevOps",
  "Content Writing",
];

const ApplicationDetails = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    location: "",
    linkedin: "",
    availability: "",
    whyVolunteer: "",
    experience: "",
    cv: "",
  });


  const [selectedSkills, setSelectedSkills] = useState([]);
  const [skillsOpen, setSkillsOpen] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const toggleSkill = (skill) => {
    setSelectedSkills((prev) =>
      prev.includes(skill) ? prev.filter((s) => s !== skill) : [...prev, skill]
    );
  };

  const removeSkill = (skill) => {
    setSelectedSkills((prev) => prev.filter((s) => s !== skill));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitError(null);
    try {
      const payload = {
        firstName: formData.firstName,
        lastName: formData.lastName,
        email: formData.email,
        phoneNumber: formData.phone,
        location: formData.location,
        linkedIn: formData.linkedin,
        skills: selectedSkills,
        availability: formData.availability,
        whyVolunteer: formData.whyVolunteer,
        relevantExperience: formData.experience,
        cv: formData.cv,
      };
      const res = await post("/api/applications", payload);
      console.log("Application submitted:", res);
      // Reset form fields
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        location: "",
        linkedin: "",
        availability: "",
        whyVolunteer: "",
        experience: "",
        cv: "",
      });
      setSelectedSkills([]);
      setSubmitted(true);
    } catch (err) {
      console.error(err);
      setSubmitError(errorMessage(err));
    } finally {
      setIsSubmitting(false);
    }
  };


  // Auto-redirect after submission
  useEffect(() => {
    if (submitted) {
      const timer = setTimeout(() => {
        navigate("/"); // Redirect to home page after submission
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [submitted, navigate]);

  const inputBase =
    "w-full border border-gray-300 rounded-lg font-manrope px-4 py-3 text-sm text-gray-800 placeholder-gray-400 focus:outline-none focus:border-[#193A84] focus:ring-1 focus:ring-[#193A84] transition-colors";

  return (
    <div className="min-h-screen flex flex-col bg-white relative">
      {/* Thank You Overlay */}
      {submitted && (
        <div className="fixed inset-0 z-50 flex flex-col">
          {/* Blurred background of the underlying page */}
          <div className="absolute inset-0 backdrop-blur-[2px]" />
          {/* Overlay */}
          <div className="absolute inset-0 bg-[rgba(51,51,51,0.85)]" />
          {/* Centered content */}
          <div className="relative z-10 flex-1 flex flex-col items-center justify-center px-6 text-center">
            <Mail size={90} className="text-white mb-8" strokeWidth={1.5} />
            <h1 className="text-white text-4xl md:text-5xl font-bold mb-5 font-[Poppins]">
              Thank You!
            </h1>
            <p className="text-white text-base md:text-lg font-[Poppins] max-w-md leading-relaxed">
              Your application has been submitted successfully. We will get back
              to you shortly.
            </p>
          </div>
        </div>
      )}

      {/* Navbar — mobile only on this page */}
      <Navbar mobileOnly />

      {/* Logo — desktop only */}
      <div className="hidden md:flex items-center gap-2 px-6 pt-6">
        <Link to="/">
          <img src={logo} alt="ScaleUp" className="h-10 w-auto" />
        </Link>
      </div>

      {/* Header */}
      <div className="pt-10 pb-6 px-6 text-center">
        <h1 className="text-3xl font-inter md:text-4xl font-bold text-gray-900 mb-2">
          Application Details
        </h1>
        <p className="text-gray-500 text-sm md:text-base max-w-md mx-auto">
          We're excited to learn more about you. All information shared is
          handled responsibly.
        </p>
      </div>

      {/* Form */}
      <div className="flex-1 flex justify-center px-2 pb-12">
        <form
          onSubmit={handleSubmit}
          className="w-full md:max-w-xl lg:max-w-3xl p-4 md:px-6 md:py-4"
        >
          {/* First Name + Last Name */}
          <div className="grid grid-cols-2 gap-5 mb-5">
            <div>
              <label className="block text-sm font-inter font-medium text-gray-700 mb-1.5">
                First Name
              </label>
              <div className="relative">
                <input
                  type="text"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  placeholder="Benedicta"
                  className={inputBase}
                />
                <User
                  size={16}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400"
                />
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1.5">
                Last Name
              </label>
              <div className="relative">
                <input
                  type="text"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  placeholder="Atagamen"
                  className={inputBase}
                />
                <User
                  size={16}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400"
                />
              </div>
            </div>
          </div>

          {/* Email */}
          <div className="mb-5">
            <label className="block text-sm font-medium text-gray-700 mb-1.5">
              Email
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="enteryouremail@gmail.com"
              className={inputBase}
            />
          </div>

          {/* Phone Number */}
          <div className="mb-5">
            <label className="block text-sm font-medium text-gray-700 mb-1.5">
              Phone Number (whatsapp)
            </label>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder=""
              className={inputBase}
            />
          </div>

          {/* Location */}
          <div className="mb-5">
            <label className="block text-sm font-medium text-gray-700 mb-1.5">
              Location
            </label>
            <input
              type="text"
              name="location"
              value={formData.location}
              onChange={handleChange}
              placeholder="Lagos"
              className={inputBase}
            />
          </div>

          {/* LinkedIn */}
          <div className="mb-5">
            <label className="block text-sm font-medium text-gray-700 mb-1.5">
              LinkedIn <span className="text-gray-400">(compulsory)</span>
            </label>
            <input
              type="url"
              name="linkedin"
              value={formData.linkedin}
              onChange={handleChange}
              placeholder="link"
              className={inputBase}
            />
          </div>

          {/* Volunteer Skills */}
          <div className="mb-5 relative">
            <label className="block text-sm font-medium text-gray-700 mb-1.5">
              Volunteer Skills
            </label>
            <div
              className="border border-gray-300 rounded-lg px-4 py-3 cursor-pointer flex items-center justify-between flex-wrap gap-2"
              onClick={() => setSkillsOpen(!skillsOpen)}
            >
              <div className="flex flex-wrap gap-2 flex-1">
                {selectedSkills.length === 0 && (
                  <span className="text-sm text-gray-400">
                    Select skills...
                  </span>
                )}
                {selectedSkills.map((skill) => (
                  <span
                    key={skill}
                    className="inline-flex items-center gap-1 bg-[#193A84] text-white text-xs font-medium px-3 py-1 rounded-full"
                  >
                    {skill}
                    <button
                      type="button"
                      onClick={(e) => {
                        e.stopPropagation();
                        removeSkill(skill);
                      }}
                      className="hover:text-white/70"
                    >
                      <X size={12} />
                    </button>
                  </span>
                ))}
              </div>
              <ChevronDown
                size={18}
                className={`text-gray-400 transition-transform ${
                  skillsOpen ? "rotate-180" : ""
                }`}
              />
            </div>
            {skillsOpen && (
              <div className="absolute right-0 mt-1 w-[220px] md:w-[280px] border border-gray-200 rounded-lg bg-white shadow-lg max-h-48 overflow-y-auto z-20">
                {skillOptions.map((skill) => (
                  <button
                    key={skill}
                    type="button"
                    onClick={() => toggleSkill(skill)}
                    className={`w-full text-left px-4 py-2.5 text-sm hover:bg-gray-50 flex items-center gap-3 ${
                      selectedSkills.includes(skill)
                        ? "text-[#193A84] font-medium"
                        : "text-gray-700"
                    }`}
                  >
                    <div
                      className={`w-4 h-4 rounded border flex items-center justify-center text-xs ${
                        selectedSkills.includes(skill)
                          ? "bg-[#193A84] border-[#193A84] text-white"
                          : "border-gray-300"
                      }`}
                    >
                      {selectedSkills.includes(skill) && "✓"}
                    </div>
                    {skill}
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Availability */}
          <div className="mb-5">
            <label className="block text-sm font-medium text-gray-700 mb-1.5">
              Availability (hours per week)
            </label>
            <input
              type="text"
              name="availability"
              value={formData.availability}
              onChange={handleChange}
              placeholder="20 hrs"
              className={inputBase}
            />
          </div>

          {/* Why do you want to volunteer? */}
          <div className="mb-5">
            <label className="block text-sm font-medium text-gray-700 mb-1.5">
              Why do you want to volunteer?
            </label>
            <textarea
              name="whyVolunteer"
              value={formData.whyVolunteer}
              onChange={handleChange}
              placeholder="short note"
              rows={1}
              className={`${inputBase} resize-y`}
            />
          </div>

          {/* Relevant experience */}
          <div className="mb-5">
            <label className="block text-sm font-medium text-gray-700 mb-1.5">
              Relevant experience
            </label>
            <textarea
              name="experience"
              value={formData.experience}
              onChange={handleChange}
              placeholder="Briefly describe relevant experience"
              rows={3}
              className={`${inputBase} resize-y`}
            />
          </div>

          {/* Upload CV */}
          <div className="mb-8">
            <label className="block text-sm font-medium text-gray-700 mb-1.5">
              Upload CV <span className="text-gray-400">(optional)</span>
            </label>
            <input
              type="url"
              name="cv"
              value={formData.cv}
              onChange={handleChange}
              placeholder="link"
              className={inputBase}
            />
          </div>

          {/* Submit */}
          <div className="flex justify-center">
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-[118px] md:w-[504px] bg-[#193A84] text-white font-semibold text-base py-3.5 rounded-[5px] md:rounded-[12px] hover:bg-[#142e6b] transition-colors cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSubmitting ? "Submitting..." : "Submit"}
            </button>
          </div>
          {/* Inline Error (below submit) */}
          {submitError && (
            <div className="mt-4 bg-red-50 border border-red-200 rounded-lg p-3 text-center">
              <p className="text-red-700 font-medium text-sm">❌ {submitError}</p>
            </div>
          )}
        </form>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default ApplicationDetails;
