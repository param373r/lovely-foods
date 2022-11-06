import Navigation from "../components/global/Navigation";
import FoodList from "../components/dashboard/FoodList";
import SearchBar from "../components/dashboard/SearchBar";
import Filters from "../components/dashboard/Filters";



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
},{
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
},{
name: "Pizza",
image: "/assets/pizza.jpg",
shopCount: 10,
}]


const DiscoverFoods = (props) => {
  return (<>
    <Navigation />

    <section className="hero-discover mt-7 text-center">
      <h1 className="mb-4">Discover foods to feed your hunger the best</h1>
      <SearchBar />
    </section>

    <main className="discover mb-7">
      <h3 className="h2 mt-6 mb-2">Foods to look around</h3>
      <Filters />
      <FoodList list={foodList} />
    </main>
  </>);
}

export default DiscoverFoods;