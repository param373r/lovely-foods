import Icon from "../ui/Icon";
import PlaceList from "./PlaceList";
import FoodList from "./FoodList";

const foodList = [{
  name: "Pizza",
  image: "/assets/pizza.jpg",
  shopCount: 10,
},{
    name: "Pizza",
    image: "/assets/pizza.jpg",
    shopCount: 10,
},{
  name: "Pizza",
  image: "/assets/pizza.jpg",
  shopCount: 10,
}]

const placeList = [{
  _id: 852486548654,
  name: "Dominoes Pizza",
  location: "LPU Mall",
  shopRating: 4.5
},{
  _id: 852486548654,
  name: "Canadian Pizza",
  location: "LPU Mall",
  shopRating: 4.2
}]

const SearchResults= (props) => {
  return (<div className="search-results p-absolute p-2 d-none">
    <h3 className="mt-2">Foods</h3>
    <FoodList list={foodList} />
    <h3 className="mt-3">Shops</h3>
    <PlaceList list={placeList} />
  </div>)
}


const SearchBar = (props) => {
  return (
  <form className="p-relative hero-search-form d-grid align-center">
    <Icon name="lunch_dining" className="hero-search-icon txt2" />
    <input className="hero-search p-relative w500" name="search" id="foodSearch" type="text" placeholder="Search your favorite food" autoComplete={"false"} />
    <button className="d-inflex align-center justify-evenly"><Icon name="search" /> GO</button>
    <SearchResults />
  </form>);
}

export default SearchBar;