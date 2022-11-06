import PlaceList from "../dashboard/PlaceList";
import FoodList from "../dashboard/FoodList";
import Filters from "../dashboard/Filters";



const myList = [{
  name: "Pizza Hut",
  image: "/assets/restro.jpg",
  rating: 4.5,
  location: "Sector 63, Noida",
},{
  name: "Pizza Hut",
  image: "/assets/restro.jpg",
  rating: 4.5,
  location: "Sector 63, Noida",
},{
  name: "Pizza Hut",
  image: "/assets/restro.jpg",
  rating: 4.5,
  location: "Sector 63, Noida",
},{
  name: "Pizza Hut",
  image: "/assets/restro.jpg",
  rating: 4.5,
  location: "Sector 63, Noida",
},{
  name: "Pizza Hut",
  image: "/assets/restro.jpg",
  rating: 4.5,
  location: "Sector 63, Noida",
},{
  name: "Pizza Hut",
  image: "/assets/restro.jpg",
  rating: 4.5,
  location: "Sector 63, Noida",
},{
  name: "Pizza Hut",
  image: "/assets/restro.jpg",
  rating: 4.5,
  location: "Sector 63, Noida",
}]

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


const Discover = (props) => {
  return (<main className="discover">
    <h3 className="mt-7 mb-4 h2">Trending shops</h3>
    <div className="trending-shops">
      <PlaceList list={myList} />
    </div>
    <h3 className="mt-7 mb-3 h2">Discover your favorite food</h3>
    <div className="discover-foods">
      <Filters />
      <FoodList list={foodList} />
    </div>
    <h3 className="mt-7 mb-3 h2">Discover shops</h3>
    <div className="discover-shops mb-8">
      <Filters />
      <PlaceList list={myList} />
    </div>
  </main>);
}

export default Discover;