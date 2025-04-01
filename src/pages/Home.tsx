import AboutUsBox from '../components/HomeSections/AboutUsBox';
import HeroBox from '../components/HomeSections/HeroBox';
import SolutionBox from '../components/HomeSections/SolutionBox';
import ContactBox from '../components/HomeSections/ContactBox';
import HomeNav from '../components/Navigation/HomeNav';
import { useState } from 'react';
import Footer from '../components/HomeSections/Footer';

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
      <Footer scrollToSection={scrollToSection} />
    </>
  );
};

export default Home;
