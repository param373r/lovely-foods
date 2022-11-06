import SearchBar from "../dashboard/SearchBar";
import QuickSearch from "./QuickSearch";



const HeroSection = (props) => {
  return (
    <section className="hero-section">

      {/* Hero content */}
      <h2 className="text-center">Find food and say bye to hunger!</h2>
      <p className="text-center txt2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam nobis in, consequatur quas porro 
        voluptate quaerat numquam eius dolore aliquam repellendus.</p>

      {/* Hero search bar */}
      <SearchBar />

      {/* Hero quick search */}
      <QuickSearch />

    </section>);
}

export default HeroSection;