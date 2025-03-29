import AboutUsBox from '../components/HomeSections/AboutUsBox';
import Footer from '../components/HomeSections/Footer';
import HeroBox from '../components/HomeSections/HeroBox';
import SolutionBox from '../components/HomeSections/SolutionBox';
import HomeNav from '../components/Navigation/HomeNav';

const Home = () => {
  return (
    <>
      <HomeNav />
      <HeroBox />
      <SolutionBox />
      <AboutUsBox />
      <Footer />
    </>
  );
};

export default Home;
