import { useState, useEffect, useRef } from "react";

const testimonials = [
  {
    text: "IT Support that always I recommend. From App to website and Maintenance to Digital Marketing everything is done by them for my company.",
    name: "Mr. Adarsh Verma",
    title: "Founder & CEO",
  },
  {
    text: "Best mobile app development company! They delivered our project on time with outstanding quality and post-launch support.",
    name: "Mr. Sanjeev kumar",
    title: "Co-Founder & CTO",
  },
];

export default function ConsultationPopup() {
  const [visible, setVisible] = useState(false);
  const [closing, setClosing] = useState(false);
  const [testimonialIdx, setTestimonialIdx] = useState(0);
  const [form, setForm] = useState({
    fullName: "",
    email: "",
    phone: "",
    query: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [isSending, setIsSending] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const timerRef = useRef(null);

  useEffect(() => {
    sessionStorage.removeItem("consultationPopupShown");
    timerRef.current = setTimeout(() => {
      setVisible(true);
    }, 9000);
    return () => clearTimeout(timerRef.current);
  }, []);

  // Auto-cycle testimonials
  useEffect(() => {
    if (!visible) return;
    const interval = setInterval(() => {
      setTestimonialIdx((i) => (i + 1) % testimonials.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [visible]);

  const closePopup = () => {
    setClosing(true);
    setTimeout(() => {
      setVisible(false);
      setClosing(false);
    }, 350);
  };

  const handleChange = (e) => {
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrorMessage("");

    if (!form.fullName || !form.email || !form.phone) {
      setErrorMessage("Please complete all required fields.");
      return;
    }

    setIsSending(true);

    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 9000);

    try {
      // ✅ Points to your Node backend — set REACT_APP_CONTACT_ENDPOINT in .env
      const endpoint =
        "https://paragon-prime-okk.onrender.com/api/contact";

      const response = await fetch(endpoint, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
        signal: controller.signal,
      });

      clearTimeout(timeoutId);

      const data = await response.json();

      if (!response.ok || !data.success) {
        setErrorMessage(
          data.errors?.[0] ||
            data.message ||
            "Unable to send message. Please try again."
        );
        return;
      }

      setSubmitted(true);
      setTimeout(() => {
        closePopup();
        setSubmitted(false);
        setForm({ fullName: "", email: "", phone: "", query: "" });
      }, 2200);
    } catch (error) {
      console.error("Contact submit error:", error);
      if (error.name === "AbortError") {
        setErrorMessage("Request timed out. Please try again.");
      } else {
        setErrorMessage(
          "Unable to reach server. Please try again later."
        );
      }
    } finally {
      clearTimeout(timeoutId);
      setIsSending(false);
    }
  };

  const prev = () =>
    setTestimonialIdx(
      (i) => (i - 1 + testimonials.length) % testimonials.length
    );
  const next = () => setTestimonialIdx((i) => (i + 1) % testimonials.length);

  if (!visible) return null;

  return (
    <>
      <div
        className="fixed inset-0 z-40 md:overflow-hidden overflow-y-auto"
        style={{
          background: "rgba(10,10,20,0.55)",
          backdropFilter: "blur(3px)",
          animation: closing
            ? "fadeOut 0.35s ease forwards"
            : "fadeIn 0.4s ease forwards",
        }}
      >
        <div className="absolute inset-0" onClick={closePopup} />

        <div
          className="relative z-50 flex items-center justify-center pointer-events-none p-4 pt-20 md:pt-25"
          style={{ minHeight: "100%" }}
        >
          <div
            className="pointer-events-auto flex flex-col md:flex-row rounded-2xl overflow-hidden shadow-2xl w-full max-w-3xl"
            style={{
              background:
                "linear-gradient(145deg, #1A3A6B 0%, #132A4A 60%, #0D1B34 100%)",
              animation: closing
                ? "slideDown 0.35s cubic-bezier(.4,0,.2,1) forwards"
                : "slideUp 0.45s cubic-bezier(.16,1,.3,1) forwards",
            }}
          >
            {/* LEFT PANEL */}
            <div
              className="hidden md:flex flex-col justify-between p-7 md:w-2/5"
              style={{
                background:
                  "linear-gradient(145deg, #1f1a6b 0%, #132A4A 60%, #0D1B34 100%)",
                minHeight: 340,
              }}
            >
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-white font-black text-xl tracking-tight leading-tight">
                    Hold On a Moment!
                  </span>
                </div>
                <p className="text-blue-200 text-sm mt-2 mb-5 leading-relaxed">
                  Find out why{" "}
                  <span className="text-white font-bold">1800+ businesses</span>{" "}
                  prefer Paragon Prime Infotech.
                </p>

                {/* Testimonial card */}
                <div
                  key={testimonialIdx}
                  className="bg-white bg-opacity-10 rounded-xl p-4 border border-white border-opacity-15"
                  style={{ animation: "fadeSlideIn 0.4s ease" }}
                >
                  <p className="text-black text-sm leading-relaxed italic mb-3">
                    "{testimonials[testimonialIdx].text}"
                  </p>
                  <div>
                    <p className="text-gray font-bold text-sm">
                      {testimonials[testimonialIdx].name}
                    </p>
                    <p className="text-zinc-500 text-xs">
                      {testimonials[testimonialIdx].title}
                    </p>
                  </div>
                </div>

                {/* Nav arrows */}
                <div className="flex gap-2 mt-4">
                  <button
                    onClick={prev}
                    className="w-9 h-9 rounded-full flex items-center justify-center text-white font-bold text-lg transition-all duration-200"
                    style={{ background: "rgba(255,255,255,0.18)" }}
                    onMouseEnter={(e) =>
                      (e.currentTarget.style.background =
                        "rgba(255,140,0,0.85)")
                    }
                    onMouseLeave={(e) =>
                      (e.currentTarget.style.background =
                        "rgba(255,255,255,0.18)")
                    }
                  >
                    ‹
                  </button>
                  <button
                    onClick={next}
                    className="w-9 h-9 rounded-full flex items-center justify-center text-white font-bold text-lg transition-all duration-200"
                    style={{ background: "rgba(255,140,0,0.85)" }}
                    onMouseEnter={(e) =>
                      (e.currentTarget.style.background = "rgba(255,160,30,1)")
                    }
                    onMouseLeave={(e) =>
                      (e.currentTarget.style.background =
                        "rgba(255,140,0,0.85)")
                    }
                  >
                    ›
                  </button>
                </div>
              </div>

              {/* Contact info */}
              <div className="mt-6 space-y-2">
                <div className="flex items-center gap-2 text-blue-200 text-sm">
                  <span className="inline-block w-4 h-4">
                    <svg
                      viewBox="0 0 122.88 122.27"
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-full h-full"
                    >
                      <path d="M33.84,50.25c4.13,7.45,8.89,14.6,15.07,21.12c6.2,6.56,13.91,12.53,23.89,17.63c0.74,0.36,1.44,0.36,2.07,0.11c0.95-0.36,1.92-1.15,2.87-2.1c0.74-0.74,1.66-1.92,2.62-3.21c3.84-5.05,8.59-11.32,15.3-8.18c0.15,0.07,0.26,0.15,0.41,0.21l22.38,12.87c0.07,0.04,0.15,0.11,0.21,0.15c2.95,2.03,4.17,5.16,4.2,8.71c0,3.61-1.33,7.67-3.28,11.1c-2.58,4.53-6.38,7.53-10.76,9.51c-4.17,1.92-8.81,2.95-13.27,3.61c-7,1.03-13.56,0.37-20.27-1.69c-6.56-2.03-13.17-5.38-20.39-9.84l-0.53-0.34c-3.31-2.07-6.89-4.28-10.4-6.89C31.12,93.32,18.03,79.31,9.5,63.89C2.35,50.95-1.55,36.98,0.58,23.67c1.18-7.3,4.31-13.94,9.77-18.32c4.76-3.84,11.17-5.94,19.47-5.2c0.95,0.07,1.8,0.62,2.25,1.44l14.35,24.26c2.1,2.72,2.36,5.42,1.21,8.12c-0.95,2.21-2.87,4.25-5.49,6.15c-0.77,0.66-1.69,1.33-2.66,2.03c-3.21,2.33-6.86,5.02-5.61,8.18L33.84,50.25z" />
                    </svg>
                  </span>
                  <span>+91-95559 72693</span>
                </div>

                <div className="flex items-center gap-2 text-blue-200 text-sm">
                  <span>
                    <svg
                      version="1.1"
                      id="Layer_1"
                      xmlns="http://www.w3.org/2000/svg"
                      xmlnsXlink="http://www.w3.org/1999/xlink"
                      x="0px"
                      y="0px"
                      width="16px"
                      height="26px"
                      viewBox="0 0 122.879 88.855"
                      xmlSpace="preserve"
                    >
                      <g>
                        <path d="M7.048,0h108.784c1.939,0,3.701,0.794,4.977,2.069c1.277,1.277,2.07,3.042,2.07,4.979v74.759c0,1.461-0.451,2.822-1.221,3.951c-0.141,0.365-0.361,0.705-0.662,0.994c-0.201,0.189-0.422,0.344-0.656,0.461c-1.225,1.021-2.799,1.643-4.508,1.643H7.048c-1.937,0-3.701-0.793-4.979-2.07C0.794,85.51,0,83.748,0,81.807V7.048c0-1.941,0.792-3.704,2.068-4.979C3.344,0.792,5.107,0,7.048,0L7.048,0zM5.406,78.842l38.124-38.22L5.406,9.538V78.842L5.406,78.842zM47.729,44.045L8.424,83.449h105.701L76.563,44.051L64.18,54.602l0,0c-0.971,0.83-2.425,0.877-3.453,0.043L47.729,44.045L47.729,44.045zM80.674,40.549l36.799,38.598V9.198L80.674,40.549L80.674,40.549zM8.867,5.406l53.521,43.639l51.223-43.639H8.867L8.867,5.406z" />
                      </g>
                    </svg>
                  </span>
                  <span>connect@paragonprimeinfotech.com</span>
                </div>
              </div>
            </div>

            {/* RIGHT PANEL */}
            <div
              className="flex flex-col bg-white md:w-3/5 p-7 relative"
              style={{ overflowY: "auto" }}
            >
              {/* Close button */}
              <button
                onClick={closePopup}
                className="absolute top-4 right-4 w-8 h-8 rounded-full flex items-center justify-center text-gray-400 hover:text-gray-700 hover:bg-gray-100 transition-all text-lg font-bold"
              >
                ✕
              </button>

              {submitted ? (
                <div className="flex flex-col items-center justify-center h-full py-12 text-center">
                  <div
                    className="text-5xl mb-4"
                    style={{ animation: "popIn 0.5s cubic-bezier(.16,1,.3,1)" }}
                  >
                    ✅
                  </div>
                  <h3 className="text-xl font-black text-gray-800 mb-2">
                    Message Sent...!
                  </h3>
                  <p className="text-gray-500 text-sm">
                    Our experts will get back to you shortly.
                  </p>
                </div>
              ) : (
                <>
                  <div className="mb-5 pr-6">
                    <p className="text-orange-500 text-xs font-semibold uppercase tracking-wider mb-1">
                      Are you planning?
                    </p>
                    <h2 className="text-gray-900 text-xl font-black leading-tight">
                      Get free Consultation with one of our{" "}
                      <span className="text-orange-500">Experts</span>
                    </h2>
                  </div>

                  <form
                    onSubmit={handleSubmit}
                    className="flex flex-col gap-3 flex-1"
                  >
                    {/* Full Name */}
                    <div>
                      <label className="text-xs font-semibold text-gray-600 mb-1 block">
                        Full Name <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        name="fullName"
                        value={form.fullName}
                        onChange={handleChange}
                        required
                        placeholder="Enter Full Name"
                        className="w-full border-b border-gray-300 focus:border-blue-500 outline-none py-2 text-sm text-gray-800 placeholder-gray-400 transition-colors bg-transparent"
                      />
                    </div>

                    {/* Email + Phone */}
                    <div className="flex gap-3">
                      <div className="flex-1">
                        <label className="text-xs font-semibold text-gray-600 mb-1 block">
                          Email <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="email"
                          name="email"
                          value={form.email}
                          onChange={handleChange}
                          required
                          placeholder="Enter email"
                          className="w-full border-b border-gray-300 focus:border-blue-500 outline-none py-2 text-sm text-gray-800 placeholder-gray-400 transition-colors bg-transparent"
                        />
                      </div>
                      <div className="flex-1">
                        <label className="text-xs font-semibold text-gray-600 mb-1 block">
                          Phone number <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="tel"
                          name="phone"
                          value={form.phone}
                          onChange={handleChange}
                          required
                          placeholder="Enter phone number"
                          className="w-full border-b border-gray-300 focus:border-blue-500 outline-none py-2 text-sm text-gray-800 placeholder-gray-400 transition-colors bg-transparent"
                        />
                      </div>
                    </div>

                    {/* Query */}
                    <div>
                      <label className="text-xs font-semibold text-gray-600 mb-1 block">
                        Query
                      </label>
                      <textarea
                        name="query"
                        value={form.query}
                        onChange={handleChange}
                        placeholder="Write your query..."
                        rows={3}
                        className="w-full border-b border-gray-300 focus:border-blue-500 outline-none py-2 text-sm text-gray-800 placeholder-gray-400 transition-colors resize-none bg-transparent"
                      />
                    </div>

                    {/* reCAPTCHA placeholder */}
                    <div
                      className="flex items-center gap-3 rounded-lg p-3 text-sm text-gray-600"
                      style={{ border: "1px solid #d0d0d0", background: "#f9f9f9" }}
                    >
                      <input
                        type="checkbox"
                        className="w-5 h-5 accent-blue-600"
                        required
                      />
                      <span>I'm not a robot</span>
                      <div className="ml-auto text-right">
                        <div className="w-8 h-8">
                          <svg
                            viewBox="0 0 122.88 116.79"
                            className="w-full h-full"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path fill="#1C3AA9" d="M101.42,40.78c0-0.59-0.02-1.17-0.04-1.75V5.88l-9.16,9.17C84.72,5.86,73.31,0,60.53,0c-13.3,0-25.12,6.35-32.59,16.18l15.02,15.18c1.47-2.72,3.56-5.06,6.08-6.83c2.62-2.05,6.34-3.72,11.48-3.72c0.62,0,1.1,0.07,1.45,0.21c6.37,0.5,11.89,4.02,15.14,9.12L66.48,40.77C79.95,40.72,95.17,40.69,101.42,40.78z" />
                            <path fill="#4285F4" d="M60.29,0c-0.59,0-1.17,0.02-1.75,0.04H25.38l9.17,9.16C25.37,16.71,19.5,28.12,19.5,40.9c0,13.3,6.35,25.12,16.18,32.59l15.18-15.02c-2.72-1.47-5.06-3.56-6.83-6.08c-2.05-2.62-3.72-6.34-3.72-11.48c0-0.62,0.07-1.1,0.21-1.45c0.5-6.37,4.02-11.89,9.12-15.14l10.63,10.63C60.23,21.47,60.19,6.26,60.29,0z" />
                            <path fill="#ABABAB" d="M19.51,40.9c0,0.59,0.02,1.17,0.04,1.75V75.8l9.16-9.16c7.5,9.18,18.91,15.04,31.69,15.04c13.3,0,25.12-6.35,32.59-16.18L77.97,50.32c-1.47,2.72-3.56,5.06-6.08,6.83c-2.62,2.05-6.34,3.72-11.48,3.72c-0.62,0-1.1-0.07-1.45-0.21c-6.37-0.5-11.89-4.02-15.14-9.12l10.63-10.63C40.98,40.96,25.76,40.99,19.51,40.9z" />
                          </svg>
                        </div>
                        <div className="text-xs text-gray-400">reCAPTCHA</div>
                      </div>
                    </div>

                    {errorMessage && (
                      <p className="text-sm text-red-600 my-1" role="alert">
                        {errorMessage}
                      </p>
                    )}

                    {/* Submit */}
                    <button
                      type="submit"
                      disabled={isSending}
                      className="w-full py-3 rounded-lg text-white font-bold text-sm tracking-wide transition-all duration-200 mt-1"
                      style={{
                        background: isSending
                          ? "linear-gradient(90deg, #d6d6d6, #bababa)"
                          : "linear-gradient(90deg, #ff6a00, #ff8c00)",
                        boxShadow: isSending
                          ? "none"
                          : "0 4px 16px rgba(255,100,0,0.3)",
                        cursor: isSending ? "not-allowed" : "pointer",
                      }}
                      onMouseEnter={(e) =>
                        (e.currentTarget.style.transform = "translateY(-1px)")
                      }
                      onMouseLeave={(e) =>
                        (e.currentTarget.style.transform = "translateY(0)")
                      }
                    >
                      {isSending ? "Sending..." : "Send Message →"}
                    </button>
                  </form>
                </>
              )}
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes fadeIn {
          from { opacity: 0 } to { opacity: 1 }
        }
        @keyframes fadeOut {
          from { opacity: 1 } to { opacity: 0 }
        }
        @keyframes slideUp {
          from { opacity: 0; transform: translateY(40px) scale(0.97); }
          to   { opacity: 1; transform: translateY(0)    scale(1); }
        }
        @keyframes slideDown {
          from { opacity: 1; transform: translateY(0)    scale(1); }
          to   { opacity: 0; transform: translateY(30px) scale(0.97); }
        }
        @keyframes fadeSlideIn {
          from { opacity: 0; transform: translateX(12px); }
          to   { opacity: 1; transform: translateX(0); }
        }
        @keyframes popIn {
          from { transform: scale(0.5); opacity: 0; }
          to   { transform: scale(1);   opacity: 1; }
        }
      `}</style>
    </>
  );
}