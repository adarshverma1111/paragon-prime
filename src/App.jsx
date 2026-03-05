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
import ScrollToTop from "./components/Home/ScrollToTop";
import Contact from "./components/Home/ContactPage";


function App() {
  return (
    <Router>
      {/* Navbar on all pages */}
      <ScrollToTop/>
      <Navbar />
      <ConsultationPopup/>

      <Routes>
        <Route path="/" element={<Homepage />} />
        {/* <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/industries" element={<Industries />} />
        <Route path="/contact" element={<ContactPage />} /> */}
        <Route path="/" element={<WelcomePage />} />
        <Route path="/web-development" element={<Webdevelopment />} />
        <Route path="/app-development" element={<AppDevelopmentPage />} />
        <Route path="/digital-marketing" element={<DigitalMarketing />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/support" element={<SupportSection/>} />
      </Routes>

      {/* Footer on all pages */}
            <Contact />

      <Footer />
    </Router>
  );
}

export default App;
