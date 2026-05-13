import { useState } from "react";

const meetingTypes = [
  { label: "Video Call", icon: "🎥", value: "Video Call" },
  { label: "In-Person", icon: "🏢", value: "In-Person" },
  { label: "Phone Call", icon: "📞", value: "Phone Call" },
];

const durations = ["15 minutes", "30 minutes", "1 hour", "1.5 hours", "2 hours"];
const timezones = ["IST (UTC+5:30)", "GMT (UTC+0)", "EST (UTC-5)", "PST (UTC-8)", "CET (UTC+1)"];

export default function ScheduleMeetingPopup() {
  const [visible, setVisible] = useState(true);
  const [confirmed, setConfirmed] = useState(false);
  const [selectedType, setSelectedType] = useState("Video Call");
  const [errors, setErrors] = useState({});
  const [confirmData, setConfirmData] = useState(null);

  const [form, setForm] = useState({
    fname: "", lname: "", email: "",
    date: "", time: "", duration: "1 hour",
    timezone: "IST (UTC+5:30)", agenda: "",
  });

  const today = new Date().toISOString().split("T")[0];

  const update = (field) => (e) =>
    setForm((prev) => ({ ...prev, [field]: e.target.value }));

  const validate = () => {
    const e = {};
    if (!form.fname.trim()) e.fname = true;
    if (!form.email.trim()) e.email = true;
    if (!form.date) e.date = true;
    if (!form.time) e.time = true;
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const handleSubmit = () => {
    if (!validate()) return;

    const dateObj = new Date(form.date);
    const dateStr = dateObj.toLocaleDateString("en-US", {
      weekday: "short", month: "short", day: "numeric", year: "numeric",
    });
    const [h, m] = form.time.split(":");
    const hr = parseInt(h);
    const timeStr = `${hr > 12 ? hr - 12 : hr || 12}:${m} ${hr >= 12 ? "PM" : "AM"}`;

    setConfirmData({
      name: `${form.fname} ${form.lname}`.trim(),
      type: selectedType,
      date: dateStr,
      time: `${timeStr} · ${form.timezone}`,
      duration: form.duration,
    });
    setConfirmed(true);
  };

  const handleReset = () => {
    setConfirmed(false);
    setConfirmData(null);
    setSelectedType("Video Call");
    setErrors({});
    setForm({ fname: "", lname: "", email: "", date: "", time: "", duration: "1 hour", timezone: "IST (UTC+5:30)", agenda: "" });
  };

  const handleClose = () => {
    setVisible(false);
    setTimeout(() => { setVisible(true); handleReset(); }, 400);
  };

  const inputClass = (field) =>
    `w-full bg-white/[0.04] border rounded-[10px] px-3.5 py-2.5 text-[13.5px] text-slate-300 outline-none transition-all placeholder:text-slate-700 focus:ring-2 focus:ring-orange-500/20 ${
      errors[field]
        ? "border-red-500/50 bg-red-500/5"
        : "border-white/[0.08] focus:border-orange-500/50 focus:bg-orange-500/[0.04]"
    }`;

  return (
    <div className="min-h-screen flex items-center justify-center p-6 bg-[#050a14] relative overflow-hidden">
      {/* Background orbs */}
      <div className="absolute top-[-100px] right-[-100px] w-[400px] h-[400px] rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(255,90,0,0.12) 0%, transparent 70%)" }} />
      <div className="absolute bottom-[-80px] left-[-60px] w-[300px] h-[300px] rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(30,100,255,0.10) 0%, transparent 70%)" }} />

      {/* Popup */}
      <div
        className={`relative z-10 w-full max-w-[480px] rounded-[20px] overflow-hidden transition-all duration-300 ${
          visible ? "opacity-100 scale-100 translate-y-0" : "opacity-0 scale-90 translate-y-4"
        }`}
        style={{
          background: "#0c1524",
          border: "1px solid rgba(255,90,0,0.25)",
          boxShadow: "0 0 0 1px rgba(255,255,255,0.04), 0 32px 80px rgba(0,0,0,0.6)",
        }}
      >
        {/* Header */}
        <div
          className="px-7 pt-7 pb-6 relative"
          style={{
            background: "linear-gradient(135deg, #0f1e38 0%, #132040 100%)",
            borderBottom: "1px solid rgba(255,90,0,0.18)",
          }}
        >
          <button
            onClick={handleClose}
            className="absolute top-[22px] right-[22px] w-8 h-8 rounded-lg flex items-center justify-center text-slate-400 text-lg transition-all hover:text-orange-400"
            style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.08)" }}
          >
            ✕
          </button>

          <div
            className="inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-[11px] font-medium tracking-widest uppercase text-orange-400 mb-3.5"
            style={{ background: "rgba(255,90,0,0.12)", border: "1px solid rgba(255,90,0,0.3)" }}
          >
            <span
              className="w-1.5 h-1.5 rounded-full bg-orange-500 animate-pulse"
              style={{ animationDuration: "1.6s" }}
            />
            New Meeting
          </div>

          <h1 className="text-[26px] font-extrabold leading-tight tracking-tight text-slate-100" style={{ fontFamily: "system-ui, sans-serif", letterSpacing: "-0.02em" }}>
            Schedule a<br /><span className="text-orange-500">Meeting</span>
          </h1>
          <p className="text-[13px] text-slate-500 mt-1.5 font-light">
            Fill in the details — we'll handle the rest
          </p>
        </div>

        {/* Body */}
        {!confirmed ? (
          <div className="px-7 pt-6 pb-7">
            {/* Name row */}
            <div className="grid grid-cols-2 gap-3.5 mb-4">
              <div>
                <label className="block text-[11px] font-medium tracking-[0.08em] uppercase text-slate-600 mb-1.5">First name</label>
                <input className={inputClass("fname")} type="text" placeholder="Alex" value={form.fname} onChange={update("fname")} />
              </div>
              <div>
                <label className="block text-[11px] font-medium tracking-[0.08em] uppercase text-slate-600 mb-1.5">Last name</label>
                <input className={inputClass("lname")} type="text" placeholder="Morgan" value={form.lname} onChange={update("lname")} />
              </div>
            </div>

            {/* Email */}
            <div className="mb-4">
              <label className="block text-[11px] font-medium tracking-[0.08em] uppercase text-slate-600 mb-1.5">Email address</label>
              <input className={inputClass("email")} type="email" placeholder="alex@company.com" value={form.email} onChange={update("email")} />
            </div>

            {/* Meeting type */}
            <p className="text-[11px] font-medium tracking-[0.08em] uppercase text-slate-600 mb-2.5">Meeting type</p>
            <div className="grid grid-cols-3 gap-2 mb-4">
              {meetingTypes.map(({ label, icon, value }) => (
                <button
                  key={value}
                  onClick={() => setSelectedType(value)}
                  className="rounded-[10px] py-2.5 px-2 text-center transition-all"
                  style={{
                    background: selectedType === value ? "rgba(255,90,0,0.12)" : "rgba(255,255,255,0.04)",
                    border: selectedType === value ? "1px solid rgba(255,90,0,0.4)" : "1px solid rgba(255,255,255,0.08)",
                  }}
                >
                  <span className="block text-lg mb-1">{icon}</span>
                  <span className={`text-[11px] font-medium ${selectedType === value ? "text-orange-400" : "text-slate-600"}`}>{label}</span>
                </button>
              ))}
            </div>

            {/* Date & Time */}
            <div className="grid grid-cols-2 gap-3.5 mb-4">
              <div>
                <label className="block text-[11px] font-medium tracking-[0.08em] uppercase text-slate-600 mb-1.5">Date</label>
                <input className={inputClass("date")} type="date" min={today} value={form.date} onChange={update("date")} />
              </div>
              <div>
                <label className="block text-[11px] font-medium tracking-[0.08em] uppercase text-slate-600 mb-1.5">Time</label>
                <input className={inputClass("time")} type="time" value={form.time} onChange={update("time")} />
              </div>
            </div>

            {/* Duration & Timezone */}
            <div className="grid grid-cols-2 gap-3.5 mb-4">
              <div>
                <label className="block text-[11px] font-medium tracking-[0.08em] uppercase text-slate-600 mb-1.5">Duration</label>
                <select className={inputClass("duration")} value={form.duration} onChange={update("duration")}>
                  {durations.map((d) => <option key={d} value={d}>{d}</option>)}
                </select>
              </div>
              <div>
                <label className="block text-[11px] font-medium tracking-[0.08em] uppercase text-slate-600 mb-1.5">Timezone</label>
                <select className={inputClass("timezone")} value={form.timezone} onChange={update("timezone")}>
                  {timezones.map((t) => <option key={t} value={t}>{t}</option>)}
                </select>
              </div>
            </div>

            {/* Agenda */}
            <div className="mb-5">
              <label className="block text-[11px] font-medium tracking-[0.08em] uppercase text-slate-600 mb-1.5">Agenda / notes</label>
              <textarea
                className={`${inputClass("agenda")} resize-none leading-relaxed`}
                rows={3}
                placeholder="Brief description of what you'd like to discuss..."
                value={form.agenda}
                onChange={update("agenda")}
              />
            </div>

            {/* Buttons */}
            <div className="flex gap-3">
              <button
                onClick={handleClose}
                className="shrink-0 px-5 py-3.5 rounded-xl text-[13px] text-slate-400 transition-all hover:text-slate-200"
                style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)" }}
              >
                Cancel
              </button>
              <button
                onClick={handleSubmit}
                className="flex-1 py-3.5 rounded-xl text-[15px] font-bold text-white transition-all hover:-translate-y-0.5 active:scale-[0.98]"
                style={{
                  background: "linear-gradient(135deg, #ff5a00 0%, #e04500 100%)",
                  boxShadow: "0 4px 20px rgba(255,90,0,0.2)",
                }}
              >
                📅 Schedule Meeting →
              </button>
            </div>
          </div>
        ) : (
          /* Confirmation screen */
          <div className="px-7 pt-8 pb-9 text-center">
            <div
              className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-5 text-3xl"
              style={{ background: "rgba(255,90,0,0.15)", border: "2px solid rgba(255,90,0,0.4)" }}
            >
              ✅
            </div>
            <h2 className="text-[22px] font-extrabold text-slate-100 mb-2">You're all set!</h2>
            <p className="text-[13px] text-slate-500 font-light">
              Your meeting has been scheduled. A confirmation will be sent to your email.
            </p>

            <div
              className="rounded-xl p-4 my-5 text-left"
              style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)" }}
            >
              {confirmData && Object.entries({
                Name: confirmData.name,
                Type: confirmData.type,
                Date: confirmData.date,
                Time: confirmData.time,
                Duration: confirmData.duration,
              }).map(([k, v]) => (
                <div key={k} className="flex justify-between text-[13px] py-1.5 border-b border-white/[0.05] last:border-0">
                  <span className="text-slate-600">{k}</span>
                  <span className="text-slate-300 font-medium">{v}</span>
                </div>
              ))}
            </div>

            <button
              onClick={handleReset}
              className="px-6 py-3 rounded-xl text-[14px] font-bold text-white transition-all hover:-translate-y-0.5"
              style={{ background: "linear-gradient(135deg, #ff5a00 0%, #e04500 100%)" }}
            >
              Schedule another
            </button>
          </div>
        )}
      </div>
    </div>
  );
}