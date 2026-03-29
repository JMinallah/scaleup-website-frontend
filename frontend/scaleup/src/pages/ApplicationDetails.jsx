import { useState, useEffect, useRef } from "react";
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

const fieldLabels = {
  firstName: "First name",
  lastName: "Last name",
  email: "Email",
  phone: "Phone number",
  location: "Location",
  linkedin: "LinkedIn",
  availability: "Availability",
  whyVolunteer: "Why you want to volunteer",
  experience: "Relevant experience",
  skills: "Volunteer skills",
};

const fieldKeyMap = {
  first_name: "firstName",
  firstname: "firstName",
  firstName: "firstName",
  last_name: "lastName",
  lastname: "lastName",
  lastName: "lastName",
  email: "email",
  phone: "phone",
  phone_number: "phone",
  phoneNumber: "phone",
  location: "location",
  linkedin: "linkedin",
  linked_in: "linkedin",
  linkedIn: "linkedin",
  availability: "availability",
  why_volunteer: "whyVolunteer",
  whyVolunteer: "whyVolunteer",
  relevant_experience: "experience",
  relevantExperience: "experience",
  experience: "experience",
  skills: "skills",
  cv: "cv",
};

const getNormalizedFieldKey = (key = "") => {
  if (!key) return null;
  return fieldKeyMap[key] || fieldKeyMap[key.toLowerCase()] || null;
};

const getAvailabilityError = (value = "") => {
  const trimmed = value.trim();
  if (!trimmed) return null;
  if (!/^\d+$/.test(trimmed)) {
    return "Availability must be a whole number between 1 and 40 hours.";
  }

  const availabilityNumber = Number(trimmed);
  if (availabilityNumber < 1 || availabilityNumber > 40) {
    return "Availability must be between 1 and 40 hours.";
  }

  return null;
};

const getEmailError = (value = "") => {
  const trimmed = value.trim();
  if (!trimmed) return "Email is required.";
  if (!/^\S+@\S+\.\S+$/.test(trimmed)) return "Enter a valid email address.";
  return null;
};

const commonEmailDomainTypos = {
  "gnail.com": "gmail.com",
  "gmai.com": "gmail.com",
  "gmail.co": "gmail.com",
  "gmal.com": "gmail.com",
  "hotnail.com": "hotmail.com",
  "hotmai.com": "hotmail.com",
  "outlok.com": "outlook.com",
  "outllok.com": "outlook.com",
  "yaho.com": "yahoo.com",
  "yhoo.com": "yahoo.com",
};

const getEmailDomainSuggestion = (value = "") => {
  const trimmed = value.trim().toLowerCase();
  const parts = trimmed.split("@");
  if (parts.length !== 2) return null;

  const [localPart, domain] = parts;
  if (!localPart || !domain) return null;

  const correctedDomain = commonEmailDomainTypos[domain];
  if (!correctedDomain) return null;

  return `${localPart}@${correctedDomain}`;
};

const validateForm = (formData, selectedSkills) => {
  const errors = {};
  const requiredFields = [
    "firstName",
    "lastName",
    "email",
    "phone",
    "location",
    "linkedin",
    "availability",
    "whyVolunteer",
    "experience",
  ];

  requiredFields.forEach((field) => {
    if (!formData[field]?.trim()) {
      errors[field] = `${fieldLabels[field]} is required.`;
    }
  });

  if (selectedSkills.length === 0) {
    errors.skills = "Select at least one volunteer skill.";
  }

  const emailError = getEmailError(formData.email);
  if (emailError) {
    errors.email = emailError;
  }

  const linkedInValue = formData.linkedin.trim();
  if (linkedInValue && !/^https?:\/\//i.test(linkedInValue)) {
    errors.linkedin = "LinkedIn link must start with http:// or https://.";
  }

  const cvValue = formData.cv.trim();
  if (cvValue && !/^https?:\/\//i.test(cvValue)) {
    errors.cv = "CV link must start with http:// or https://.";
  }

  const availabilityError = getAvailabilityError(formData.availability);
  if (availabilityError) {
    errors.availability = availabilityError;
  }

  return errors;
};

const parseApiValidationErrors = (body) => {
  const errors = {};
  if (!body) return errors;

  const assignError = (incomingKey, incomingMessage) => {
    const field = getNormalizedFieldKey(incomingKey);
    if (field && incomingMessage && !errors[field]) {
      errors[field] = incomingMessage;
    }
  };

  if (Array.isArray(body.errors)) {
    body.errors.forEach((entry) => {
      if (typeof entry === "string") return;
      const key = entry.field || entry.path || entry.param || entry.key || "";
      const message = entry.message || entry.msg || entry.error || "";
      assignError(key, message);
    });
  }

  if (body.errors && typeof body.errors === "object" && !Array.isArray(body.errors)) {
    Object.entries(body.errors).forEach(([key, value]) => {
      const message = Array.isArray(value) ? value[0] : value;
      assignError(key, typeof message === "string" ? message : "Invalid value.");
    });
  }

  if (body.fieldErrors && typeof body.fieldErrors === "object") {
    Object.entries(body.fieldErrors).forEach(([key, value]) => {
      const message = Array.isArray(value) ? value[0] : value;
      assignError(key, typeof message === "string" ? message : "Invalid value.");
    });
  }

  return errors;
};

const getSubmitErrorMessage = (err) => {
  if (err && (err.status === 400 || err.status === 422)) {
    // Prefer server-provided message when available (e.g. duplicate email)
    if (err.body && typeof err.body === "object") {
      if (typeof err.body.message === "string" && err.body.message.trim()) {
        return err.body.message;
      }
      if (typeof err.body.error === "string" && err.body.error.trim()) {
        return err.body.error;
      }
    }
    return "Please fix the highlighted fields and submit again.";
  }
  if (err.status === 409) {
    return "An application with this email already exists.";
  }
  if (err.status === 401 || err.status === 403) {
    return "You are not authorized to submit this application right now.";
  }
  return errorMessage(err);
};

const skillOptions = [
  "UI/UX Design",
  "Operations/Product management",
  "Marketing and media",
  "Software engineering",
  "Content creation",
  "Quality Assurance",
  "Event outreach",
  "Lead Generation",
  "Cloud Engineer",
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
  const skillsListRef = useRef(null);
  const skillsToggleRef = useRef(null);
  const [skillsScrollable, setSkillsScrollable] = useState(false);
  const [showScrollHint, setShowScrollHint] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState(null);
  const [fieldErrors, setFieldErrors] = useState({});
  const [emailSuggestion, setEmailSuggestion] = useState(null);
  const isSubmittingRef = useRef(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    const nextValue = value;
    setFormData({ ...formData, [name]: nextValue });

    if (name === "email") {
      setEmailSuggestion(null);
    }

    setFieldErrors((prev) => {
      if (name === "availability") {
        const next = { ...prev };
        const availabilityError = getAvailabilityError(nextValue);
        if (availabilityError) {
          next.availability = availabilityError;
        } else {
          delete next.availability;
        }
        return next;
      }

      if (!prev[name]) return prev;
      const next = { ...prev };
      delete next[name];
      return next;
    });
  };

  useEffect(() => {
    const checkScrollable = () => {
      const el = skillsListRef.current;
      if (!el) return;
      const scrollable = el.scrollHeight > el.clientHeight + 1;
      setSkillsScrollable(scrollable);
      if (scrollable) {
        // show hint only if not scrolled to bottom
        const atBottom = el.scrollTop + el.clientHeight >= el.scrollHeight - 8;
        setShowScrollHint(!atBottom);
      } else {
        setShowScrollHint(false);
      }
    };

    if (skillsOpen) {
      // check on next tick when dropdown is rendered
      setTimeout(checkScrollable, 0);
      window.addEventListener("resize", checkScrollable);
    }

    return () => window.removeEventListener("resize", checkScrollable);
  }, [skillsOpen]);

  useEffect(() => {
    if (!skillsOpen) return;

    const onDocMouse = (e) => {
      const toggleEl = skillsToggleRef.current;
      const listEl = skillsListRef.current;
      const target = e.target;
      if (toggleEl && toggleEl.contains(target)) return;
      if (listEl && listEl.contains(target)) return;
      setSkillsOpen(false);
    };

    document.addEventListener("mousedown", onDocMouse);
    return () => document.removeEventListener("mousedown", onDocMouse);
  }, [skillsOpen]);

  const handleBlur = (e) => {
    const { name, value } = e.target;

    if (name !== "email") return;

    const emailError = getEmailError(value);
    setFieldErrors((prev) => {
      const next = { ...prev };
      if (emailError) {
        next.email = emailError;
      } else {
        delete next.email;
      }
      return next;
    });

    if (!emailError) {
      setEmailSuggestion(getEmailDomainSuggestion(value));
    } else {
      setEmailSuggestion(null);
    }
  };

  const toggleSkill = (skill) => {
    setSelectedSkills((prev) =>
      prev.includes(skill) ? prev.filter((s) => s !== skill) : [...prev, skill]
    );
    setFieldErrors((prev) => {
      if (!prev.skills) return prev;
      const next = { ...prev };
      delete next.skills;
      return next;
    });
  };

  const removeSkill = (skill) => {
    setSelectedSkills((prev) => prev.filter((s) => s !== skill));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Hard guard against rapid repeat submit events (double click / Enter spam).
    if (isSubmittingRef.current || isSubmitting) {
      return;
    }

    const clientErrors = validateForm(formData, selectedSkills);
    if (Object.keys(clientErrors).length > 0) {
      setFieldErrors(clientErrors);
      setSubmitError("Please complete all required fields correctly.");
      return;
    }

    isSubmittingRef.current = true;
    setIsSubmitting(true);
    setSubmitError(null);
    setFieldErrors({});
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
      setFieldErrors({});
      setEmailSuggestion(null);
      setSubmitted(true);
    } catch (err) {
      console.error(err);
      const apiFieldErrors = parseApiValidationErrors(err.body);
      if (Object.keys(apiFieldErrors).length > 0) {
        setFieldErrors(apiFieldErrors);
      }
      setSubmitError(getSubmitErrorMessage(err));
    } finally {
      isSubmittingRef.current = false;
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
          noValidate
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
              {fieldErrors.firstName && (
                <p className="mt-1 text-xs text-red-600">{fieldErrors.firstName}</p>
              )}
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
              {fieldErrors.lastName && (
                <p className="mt-1 text-xs text-red-600">{fieldErrors.lastName}</p>
              )}
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
              onBlur={handleBlur}
              placeholder="enteryouremail@gmail.com"
              className={inputBase}
            />
            {fieldErrors.email && (
              <p className="mt-1 text-xs text-red-600">{fieldErrors.email}</p>
            )}
            {emailSuggestion && !fieldErrors.email && (
              <p className="mt-1 text-xs text-amber-700">
                Did you mean {emailSuggestion}?
              </p>
            )}
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
            {fieldErrors.phone && (
              <p className="mt-1 text-xs text-red-600">{fieldErrors.phone}</p>
            )}
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
            {fieldErrors.location && (
              <p className="mt-1 text-xs text-red-600">{fieldErrors.location}</p>
            )}
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
            {fieldErrors.linkedin && (
              <p className="mt-1 text-xs text-red-600">{fieldErrors.linkedin}</p>
            )}
          </div>

          {/* Volunteer Skills */}
          <div className="mb-5 relative">
            <label className="block text-sm font-medium text-gray-700 mb-1.5">
              Volunteer Skills
            </label>
            <div
              ref={skillsToggleRef}
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
              <div
                ref={skillsListRef}
                onScroll={(e) => {
                  const el = e.target;
                  const atBottom = el.scrollTop + el.clientHeight >= el.scrollHeight - 8;
                  setShowScrollHint(!atBottom);
                }}
                className="absolute right-0 mt-1 w-[220px] md:w-[280px] border border-gray-200 rounded-lg bg-white shadow-lg max-h-48 overflow-y-auto z-20"
              >
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

                {skillsScrollable && showScrollHint && (
                  <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-8 flex items-end justify-center">
                    <div className="bg-gradient-to-t from-white to-transparent w-full h-8 flex items-end justify-center">
                      <span className="text-xs text-gray-500 mb-1">Scroll for more</span>
                    </div>
                  </div>
                )}
              </div>
            )}
            {fieldErrors.skills && (
              <p className="mt-1 text-xs text-red-600">{fieldErrors.skills}</p>
            )}
          </div>

          {/* Availability */}
          <div className="mb-5">
            <label className="block text-sm font-medium text-gray-700 mb-1.5">
              Availability (hours per week)
            </label>
            <input
              type="number"
              name="availability"
              value={formData.availability}
              onChange={handleChange}
              min={1}
              max={40}
              step={1}
              inputMode="numeric"
              placeholder="20"
              className={inputBase}
            />
            <p className="mt-1 text-xs text-gray-500">Enter whole hours from 1 to 40.</p>
            {fieldErrors.availability && (
              <p className="mt-1 text-xs text-red-600">{fieldErrors.availability}</p>
            )}
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
            {fieldErrors.whyVolunteer && (
              <p className="mt-1 text-xs text-red-600">{fieldErrors.whyVolunteer}</p>
            )}
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
            {fieldErrors.experience && (
              <p className="mt-1 text-xs text-red-600">{fieldErrors.experience}</p>
            )}
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
            {fieldErrors.cv && (
              <p className="mt-1 text-xs text-red-600">{fieldErrors.cv}</p>
            )}
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
