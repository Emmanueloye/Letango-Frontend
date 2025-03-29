import AboutUsBox from '../components/HomeSections/AboutUsBox';
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
    </>
  );
};

export default Home;
