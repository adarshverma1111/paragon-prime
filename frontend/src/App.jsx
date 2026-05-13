import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { FaWhatsapp, FaArrowUp } from "react-icons/fa";
import Navbar from "./components/Home/Navbar";
import Footer from "./components/Home/Footer";
import WelcomePage from "./components/Home/WelcomePage";
import Webdevelopment from "./pages/Webdevelopment";
import AppDevelopmentPage from "./pages/AppDevelopmentPage";
import DigitalMarketing from "./pages/DigitalMarketing";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import Homepage from "./components/Home/Homepage";
import ConsultationPopup from "./components/Home/ConsultationPopup";
import SupportSection from "./pages/SupportSection";
import ScrollToTop from "./pages/ScrollToTop";
import Contact from "./components/ContactUs/ContactPage";
import ERPSolutions from "./pages/ERPSolutions";
import CRMSolutions from "./pages/CRMSolutions";
import AboutUs from "./components/Aboutus/AboutUs";
import ServicesPage from "./components/Services/ServicesPage";
import IndustriesPage from "./components/industries/IndustriesPage";
import IntegrationsPage from "./components/Integrations/IntegrationsPage";
import TermsOfServices from "./pages/TermsOfServices";
import ContactHero from "./components/ContactUs/ContactHero";

function App() {
  return (
    <Router>
      <style>{`
        @keyframes float {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-12px);
          }
        }
        .float-animation {
          animation: float 3s ease-in-out infinite;
        }
      `}</style>
      
      {/* Navbar on all pages */}
      <ScrollToTop />
      <Navbar />
      <ConsultationPopup />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/industries" element={<IndustriesPage />} />
        <Route path="/integrations" element={<IntegrationsPage />} />
        <Route path="/contactHero" element={<ContactHero />} />
        <Route path="/" element={<WelcomePage />} />
        <Route path="/web-development" element={<Webdevelopment />} />
        <Route path="/app-development" element={<AppDevelopmentPage />} />
        <Route path="/ERP-solution" element={<ERPSolutions />} />
        <Route path="/CRM-solution" element={<CRMSolutions />} />
        <Route path="/digital-marketing" element={<DigitalMarketing />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/terms" element={<TermsOfServices />} />
        <Route path="/support" element={<SupportSection />} />
        <Route path="/meeting" element={<ConsultationPopup />} />
      </Routes>

      {/* Footer on all pages */}
      <Contact />
      <Footer />

      {/* WhatsApp floating button */}
      <a
        href="https://wa.me/919289515055"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed right-5 bottom-20 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-[0_10px_30px_rgba(37,211,102,0.35)] transition-transform duration-200 hover:-translate-y-1 float-animation"
        aria-label="Chat on WhatsApp"
      >
        <FaWhatsapp className="h-7 w-7" />
      </a>

      {/* Scroll-to-top button */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className="fixed right-5 bottom-5 z-50 flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-orange-500 to-orange-600 text-white shadow-[0_12px_24px_rgba(249,115,22,0.25)] ring-1 ring-orange-400/30 transition-transform duration-200 hover:-translate-y-1 hover:shadow-[0_16px_28px_rgba(249,115,22,0.35)]"
        aria-label="Scroll to top"
      >
        <FaArrowUp className="h-3.5 w-3.5" />
      </button>
    </Router>
  );
}

export default App;
