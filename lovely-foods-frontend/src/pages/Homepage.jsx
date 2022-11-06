

import Navigation from "../components/global/Navigation";
import HeroSection from "../components/homepage/HeroSection";
import OfferSection from "../components/homepage/OfferSection";
import Discover from "../components/homepage/Discover";


const Homepage = (props) => {
  return (<>
    <Navigation />
    <HeroSection />
    <OfferSection />
    <Discover />
  </>);
}

export default Homepage;