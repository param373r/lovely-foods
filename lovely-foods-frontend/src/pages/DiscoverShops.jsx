import Navigation from "../components/global/Navigation";
import PlaceList from "../components/dashboard/PlaceList";
import SearchBar from "../components/dashboard/SearchBar";
import Filters from "../components/dashboard/Filters";



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


const DiscoverShops = (props) => {
  return (<>
    <Navigation />

    <section className="hero-discover mt-7 text-center">
      <h1 className="mb-4">Discover places to feed your hunger the best</h1>
      <SearchBar />
    </section>

    <main className="discover mb-7">
      <h3 className="h2 mt-6 mb-2">Places to look around</h3>
      <Filters />
      <PlaceList list={myList} />
    </main>
  </>);
}

export default DiscoverShops;