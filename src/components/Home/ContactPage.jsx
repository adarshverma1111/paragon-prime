import { useState } from "react";

const avatars = [
  { src: "https://randomuser.me/api/portraits/women/44.jpg", style: { top: "8%", left: "55%" } },
  { src: "https://randomuser.me/api/portraits/men/32.jpg",   style: { top: "22%", left: "18%" } },
  { src: "https://randomuser.me/api/portraits/women/65.jpg", style: { top: "35%", left: "62%" } },
  { src: "https://randomuser.me/api/portraits/women/55.jpg", style: { top: "48%", left: "30%" } },
  { src: "https://randomuser.me/api/portraits/men/41.jpg",   style: { top: "62%", left: "58%" } },
  { src: "https://randomuser.me/api/portraits/men/60.jpg",   style: { top: "75%", left: "22%" } },
  { src: "https://randomuser.me/api/portraits/men/75.jpg",   style: { top: "85%", left: "48%" } },
];

export default function ContactPage() {
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    location: "",
    message: "",
  });

  const handle = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap');
        * { box-sizing: border-box; }
        body { margin: 0; }

        .input-field {
          width: 100%;
          padding: 9px 13px;
          border: 1px solid #334155;
          border-radius: 8px;
          font-size: 14px;
          font-family: inherit;
          color: #E5E7EB;
          background: #0B1220;
          outline: none;
          transition: border-color 0.2s, box-shadow 0.2s;
        }

        .input-field::placeholder { color: #64748B; }

        .input-field:focus {
          border-color: #2563EB;
          box-shadow: 0 0 0 3px rgba(37,99,235,0.35);
        }

        textarea.input-field {
          resize: vertical;
          min-height: 110px;
        }

        @keyframes float-avatar {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-6px); }
        }
      `}</style>

      <div
        className="flex flex-col lg:flex-row min-h-screen"
        style={{ fontFamily: "'Inter', sans-serif" }}
      >

        {/* LEFT PANEL - Hidden on Mobile */}
        <div
          className="hidden lg:flex relative flex-col justify-between lg:w-5/12 xl:w-2/5 flex-shrink-0"
          style={{ background: "#020617", minHeight: "320px" }}
        >
          <div className="absolute inset-0 flex items-center justify-center overflow-hidden">

            {[200, 280, 360].map((size, i) => (
              <div
                key={i}
                className="absolute rounded-full border"
                style={{
                  width: size,
                  height: size,
                  borderColor: "rgba(148,163,184,0.15)",
                }}
              />
            ))}

            <div
              className="absolute rounded-full"
              style={{
                width: 80,
                height: 80,
                background:
                  "radial-gradient(circle, #2563EB 0%, #1E40AF 60%, transparent 100%)",
                filter: "blur(26px)",
                opacity: 0.75,
              }}
            />

            {avatars.map((a, i) => (
              <div
                key={i}
                className="absolute"
                style={{
                  ...a.style,
                  animation: `float-avatar ${3 + i * 0.4}s ease-in-out infinite`,
                  animationDelay: `${i * 0.3}s`,
                }}
              >
                <img
                  src={a.src}
                  alt=""
                  className="rounded-full object-cover border-2 border-[#0B1220] shadow-md"
                  style={{ width: 40, height: 40 }}
                />
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT PANEL */}
        <div
          className="flex-1 flex flex-col px-6 sm:px-10 lg:px-14 xl:px-20 py-10"
          style={{ background: "#0F172A" }}
        >
          <div className="mb-7">
            <h1
              className="font-bold text-2xl sm:text-3xl mb-1"
              style={{ color: "#E5E7EB" }}
            >
              Contact us
            </h1>
            <p className="text-sm" style={{ color: "#94A3B8" }}>
              Reach out and we'll get in touch within 24 hours.
            </p>
          </div>

          <form
            onSubmit={(e) => e.preventDefault()}
            className="flex flex-col gap-4 max-w-xl"
          >

            {/* FIRST + LAST NAME (Same row even on mobile) */}
            <div className="flex flex-row gap-4">
              <div className="flex-1 min-w-0">
                <label className="block text-xs font-medium mb-1" style={{ color: "#CBD5F5" }}>
                  First name
                </label>
                <input
                  name="firstName"
                  value={form.firstName}
                  onChange={handle}
                  placeholder="First name"
                  className="input-field"
                />
              </div>

              <div className="flex-1 min-w-0">
                <label className="block text-xs font-medium mb-1" style={{ color: "#CBD5F5" }}>
                  Last name
                </label>
                <input
                  name="lastName"
                  value={form.lastName}
                  onChange={handle}
                  placeholder="Last name"
                  className="input-field"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-medium mb-1" style={{ color: "#CBD5F5" }}>
                Email
              </label>
              <input
                name="email"
                type="email"
                value={form.email}
                onChange={handle}
                placeholder="Email address"
                className="input-field"
              />
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <div className="flex-1">
                <label className="block text-xs font-medium mb-1" style={{ color: "#CBD5F5" }}>
                  Phone number
                </label>
                <input
                  name="phone"
                  type="tel"
                  value={form.phone}
                  onChange={handle}
                  placeholder="+1 (555) 000-0000"
                  className="input-field"
                />
              </div>

              <div className="flex-1">
                <label className="block text-xs font-medium mb-1" style={{ color: "#CBD5F5" }}>
                  Location
                </label>
                <input
                  name="location"
                  value={form.location}
                  onChange={handle}
                  placeholder="Your city or country"
                  className="input-field"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-medium mb-1" style={{ color: "#CBD5F5" }}>
                Message
              </label>
              <textarea
                name="message"
                value={form.message}
                onChange={handle}
                placeholder="Leave us a message..."
                className="input-field"
              />
            </div>

            <button
              type="submit"
              className="w-full py-2.5 rounded-lg font-semibold text-sm transition-all duration-200 hover:opacity-90 active:scale-[0.98]"
              style={{
                background: "#2563EB",
                color: "white",
                boxShadow: "0 1px 6px rgba(37,99,235,0.45)",
              }}
            >
              Send message
            </button>

          </form>
        </div>
      </div>
    </>
  );
}
