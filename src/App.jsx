import ClientSuccessSection from './components/Home/ClientSuccessSection'
import ConsultationPopup from './components/Home/ConsultationPopup'
import ContactPage from './components/Home/ContactPage'
import ParagonFooter from './components/Home/Footer'
import HeroSection from './components/Home/HeroSection'
import OurClients from './components/Home/OurClients'
import OurServices from './components/Home/OurServices'
import OurWork from './components/Home/OurWork'
import PartnershipSlider from './components/Home/PartnershipSlider'
import SoftwareProcess from './components/Home/SoftwareProcess'
import SoftwareSolutions from './components/Home/SoftwareSolutions'
import TechStack from './components/Home/TechStack'
import WelcomePage from './components/Home/WelcomePage'
import Navbar from './components/Home/Navbar'


function App() {

  return (
    <>
    <Navbar/>
      <ConsultationPopup/>
      <HeroSection />
      <WelcomePage />
      <PartnershipSlider />
      <OurWork />
      <SoftwareSolutions />
      <OurServices />
      <TechStack />
      <SoftwareProcess />
      <ClientSuccessSection />
      <OurClients />
      <ContactPage />
      <ParagonFooter />
    </>
  )
}

export default App
