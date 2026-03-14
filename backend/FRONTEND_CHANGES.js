// ─── Replace your existing handleSubmit in ConsultationPopup.jsx ─────────────

const [loading, setLoading] = useState(false);
const [error, setError] = useState("");

const handleSubmit = async (e) => {
  e.preventDefault();
  setLoading(true);
  setError("");

  try {
    const res = await fetch("http://localhost:5000/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });

    const data = await res.json();

    if (!res.ok) {
      // Show first validation error or server message
      setError(data.errors?.[0] || data.message || "Something went wrong.");
      return;
    }

    // ✅ Success — same behaviour as before
    setSubmitted(true);
    setTimeout(() => {
      closePopup();
      setSubmitted(false);
      setForm({ fullName: "", email: "", phone: "", query: "" });
    }, 2200);

  } catch (err) {
    setError("Network error. Please check your connection and try again.");
  } finally {
    setLoading(false);
  }
};

// ─── Add this error display just above your <button type="submit"> ────────────
{error && (
  <p style={{ color: "#ef4444", fontSize: "13px", marginTop: "-4px" }}>
    ⚠️ {error}
  </p>
)}

// ─── Update your submit button to show loading state ─────────────────────────
<button
  type="submit"
  disabled={loading}
  className="w-full py-3 rounded-lg text-white font-bold text-sm tracking-wide transition-all duration-200 mt-1"
  style={{
    background: loading
      ? "linear-gradient(90deg, #aaa, #bbb)"
      : "linear-gradient(90deg, #ff6a00, #ff8c00)",
    boxShadow: "0 4px 16px rgba(255,100,0,0.3)",
    cursor: loading ? "not-allowed" : "pointer",
  }}
>
  {loading ? "Sending..." : "Send Message →"}
</button>
