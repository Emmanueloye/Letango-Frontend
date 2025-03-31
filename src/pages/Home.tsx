import { useState } from 'react';
import AboutUsBox from '../components/HomeSections/AboutUsBox';
import Footer from '../components/HomeSections/Footer';
import HeroBox from '../components/HomeSections/HeroBox';
import SolutionBox from '../components/HomeSections/SolutionBox';
import HomeNav from '../components/Navigation/HomeNav';
import ContactBox from '../components/HomeSections/ContactBox';

const Home = () => {
  const [activeSection, setActiveSection] = useState<string>('home');
  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(sectionId);
    }
  };
  return (
    <>
      <HomeNav
        scrollToSection={scrollToSection}
        activeSection={activeSection}
      />
      <HeroBox />
      <SolutionBox />
      <AboutUsBox />
      <ContactBox />
      <Footer />
    </>
  );
};

export default Home;
