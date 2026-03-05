import React from 'react'
import ClientSuccessSection from './ClientSuccessSection'
import ContactPage from './ContactPage'
import HeroSection from './HeroSection'
import OurClients from './OurClients'
import OurServices from './OurServices'
import OurWork from './OurWork'
import PartnershipSlider from './PartnershipSlider'
import SoftwareProcess from './SoftwareProcess'
import SoftwareSolutions from './SoftwareSolutions'
import TechStack from './TechStack'
import WelcomePage from './WelcomePage'



const Homepage = () => {
  return (
    <>
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
    </>
  )
}

export default Homepage