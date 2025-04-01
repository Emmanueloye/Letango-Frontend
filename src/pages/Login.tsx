import { useState } from 'react';
import LoginForm from '../components/AuthComponets/LoginForm';
import HomeNav from '../components/Navigation/HomeNav';

const Login = () => {
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
      <LoginForm />
    </>
  );
};

export default Login;
