import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

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
import Contact from "./components/Home/ContactPage";
import ERPSolutions from "./pages/ERPSolutions";
import CRMSolutions from "./pages/CRMSolutions";
import AboutUs from "./components/Aboutus/AboutUs";
import ServicesPage from "./components/Home/ServicesPage";

function App() {
  return (
    <Router>
      {/* Navbar on all pages */}
      <ScrollToTop />
      <Navbar />
      <ConsultationPopup />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/services" element={<ServicesPage/>} />

        {/* 
        <Route path="/industries" element={<Industries />} />
        <Route path="/contact" element={<ContactPage />} /> */}
        <Route path="/" element={<WelcomePage />} />
        <Route path="/web-development" element={<Webdevelopment />} />
        <Route path="/app-development" element={<AppDevelopmentPage />} />
        <Route path="/ERP-solution" element={<ERPSolutions />} />
        <Route path="/CRM-solution" element={<CRMSolutions />} />
        <Route path="/digital-marketing" element={<DigitalMarketing />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/support" element={<SupportSection />} />
      </Routes>

      {/* Footer on all pages */}
      <Contact />
      <Footer />
    </Router>
  );
}

export default App;
