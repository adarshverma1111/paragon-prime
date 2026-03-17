import React, { useState } from "react";

export default function Contact() {
  const [form, setForm] = useState({
    firstName: "",
    lastName:  "",
    email:     "",
    phone:     "",
    address:   "",
    message:   "",
  });
  const [feedback, setFeedback]   = useState("");
  const [error, setError]         = useState("");
  const [isSending, setIsSending] = useState(false);

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setFeedback("");

    const { firstName, lastName, email, phone } = form;
    if (!firstName.trim() || !lastName.trim() || !email.trim() || !phone.trim()) {
      setError("Please fill in first name, last name, email, and phone before submitting.");
      return;
    }

    const payload = {
      firstName: firstName.trim(),
      lastName:  lastName.trim(),
      email:     email.trim(),
      phone:     phone.trim(),
      address:   form.address.trim(),
      query:     form.message.trim(),
    };

    setIsSending(true);

    const controller = new AbortController();
    const timeoutId  = setTimeout(() => controller.abort(), 9000);

    try {
      // ── Contact page uses /api/contact/page ─────────────────
      const endpoint =
        import.meta.env.VITE_CONTACT_PAGE_ENDPOINT ||
        "http://localhost:5000/api/contact/page";

      const resp = await fetch(endpoint, {
        method:  "POST",
        headers: { "Content-Type": "application/json" },
        body:    JSON.stringify(payload),
        signal:  controller.signal,
      });

      clearTimeout(timeoutId);
      const data = await resp.json();

      if (!resp.ok || !data.success) {
        setError(
          data.errors?.[0] || data.message || "Unable to send. Please try again."
        );
      } else {
        setFeedback("Message sent successfully. We will contact you soon.");
        setForm({ firstName: "", lastName: "", email: "", phone: "", address: "", message: "" });
      }
    } catch (err) {
      clearTimeout(timeoutId);
      if (err.name === "AbortError") {
        setError("Request timed out. Please try again.");
      } else {
        setError("Server not reachable. Please check your connection and try again.");
      }
      console.error("Contact form submission error:", err);
    } finally {
      setIsSending(false);
    }
  };

  return (
    <div
      className="flex flex-col lg:flex-row lg:min-h-screen"
      style={{ fontFamily: "'Inter', sans-serif" }}
    >
      {/* ── Left brand panel ── */}
      <div className="hidden lg:flex flex-1 bg-[#06121c] text-white items-center justify-center p-10">
        <div className="max-w-md text-center">
          <h2 className="text-3xl font-bold mb-4">Paragon Prime</h2>
          <p className="text-gray-300">
            Empowering businesses with innovative technology solutions. We
            transform ideas into reality with cutting-edge development and
            digital excellence.
          </p>
        </div>
      </div>

      {/* ── Right form panel ── */}
      <div className="flex-1 px-6 sm:px-10 lg:px-14 xl:px-20 py-8 bg-[#0f172a] text-white">
        <div className="w-full max-w-3xl mx-auto">
          <h2 className="text-2xl font-semibold mb-6">Contact Us</h2>

          <form className="space-y-4" onSubmit={handleSubmit}>
            {/* First / Last name */}
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm mb-1">
                  First Name <span className="text-red-400">*</span>
                </label>
                <input
                  name="firstName"
                  type="text"
                  value={form.firstName}
                  onChange={handleChange}
                  placeholder="John"
                  className="w-full px-3 py-2 rounded-md bg-[#1e293b] border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div>
                <label className="block text-sm mb-1">
                  Last Name <span className="text-red-400">*</span>
                </label>
                <input
                  name="lastName"
                  type="text"
                  value={form.lastName}
                  onChange={handleChange}
                  placeholder="Doe"
                  className="w-full px-3 py-2 rounded-md bg-[#1e293b] border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
            </div>

            {/* Email */}
            <div>
              <label className="block text-sm mb-1">
                Email <span className="text-red-400">*</span>
              </label>
              <input
                name="email"
                type="email"
                value={form.email}
                onChange={handleChange}
                placeholder="you@example.com"
                className="w-full px-3 py-2 rounded-md bg-[#1e293b] border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            {/* Phone / Address */}
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm mb-1">
                  Phone <span className="text-red-400">*</span>
                </label>
                <input
                  name="phone"
                  type="tel"
                  value={form.phone}
                  onChange={handleChange}
                  placeholder="+91 9876543210"
                  className="w-full px-3 py-2 rounded-md bg-[#1e293b] border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div>
                <label className="block text-sm mb-1">Address</label>
                <input
                  name="address"
                  type="text"
                  value={form.address}
                  onChange={handleChange}
                  placeholder="Your city"
                  className="w-full px-3 py-2 rounded-md bg-[#1e293b] border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
            </div>

            {/* Message */}
            <div>
              <label className="block text-sm mb-1">Message</label>
              <textarea
                name="message"
                rows="4"
                value={form.message}
                onChange={handleChange}
                placeholder="Leave us a message..."
                className="w-full px-3 py-2 rounded-md bg-[#1e293b] border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            {/* Feedback / Error */}
            {error    && <p className="text-red-300   text-sm" role="alert">{error}</p>}
            {feedback && <p className="text-green-300 text-sm" role="status">{feedback}</p>}

            {/* Submit */}
            <button
              type="submit"
              disabled={isSending}
              className="w-full py-2 rounded-md font-medium transition-all"
              style={{
                background: isSending ? "#334155" : "#2563eb",
                cursor: isSending ? "not-allowed" : "pointer",
              }}
              onMouseEnter={(e) => { if (!isSending) e.currentTarget.style.background = "#1d4ed8"; }}
              onMouseLeave={(e) => { if (!isSending) e.currentTarget.style.background = "#2563eb"; }}
            >
              {isSending ? "Sending..." : "Send Message"}
            </button>
          </form>

          <div className="text-center text-xs text-gray-400 mt-8">
            Empowering businesses with innovative technology solutions.
          </div>
        </div>
      </div>
    </div>
  );
}