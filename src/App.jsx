import ClientSuccessSection from './components/Home/ClientSuccessSection'
import ContactPage from './components/Home/ContactPage'
import ParagonFooter from './components/Home/Footer'
import HeroSection from './components/Home/HeroSection'
import OurClients from './components/Home/OurClients'
import OurServices from './components/Home/OurServices'
import OurWork from './components/Home/OurWork'
import PartnershipSlider from './components/Home/PartnershipSlider'
import SoftwareProcess from './components/Home/SoftwareProcess'
import SoftwareSolutions from './components/Home/SoftwareSolutions'
import SupportSection from './pages/SupportSection'
import TechStack from './components/Home/TechStack'
import WelcomePage from './components/Home/WelcomePage'
import Navbar from './components/Home/Navbar'
import PrivacyPolicy from './pages/PrivacyPolicy'
import ConsultationPopup from './components/Home/ConsultationPopup'
import Webdevelopment from './pages/Webdevelopment'


function App() {

  return (
    <>
      <ConsultationPopup />
      <Navbar />
      <HeroSection />
      <WelcomePage />
      <OurWork />
      <PartnershipSlider />
      <SoftwareSolutions />
      <OurServices />
      <TechStack />
      <SoftwareProcess />
      <ClientSuccessSection />
      <OurClients />
      <ContactPage />
      <ParagonFooter />
      <SupportSection />
      <PrivacyPolicy />
      <Webdevelopment />
    </>
  )
}

export default App
