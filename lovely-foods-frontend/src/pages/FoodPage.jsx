import Navigation from "../components/global/Navigation";
import PlaceList from "../components/dashboard/PlaceList";

import './css/food.css';



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


const FoodPage = (props) => {
  return (<>
    <Navigation />
    <div className="food-page">
      <section className="food">
        <img src="/assets/pizza.jpg" alt="food name" className="rounded-2" />
        <div className="food-info mt-2">
          <h2 className="mb-2">Food Name</h2>
          <p className="txt2 mt-2">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolor tempore a deserunt, magni 
            repudiandae debitis accusamus odit illo impedit quidem aperiam facilis alias nemo modi optio quaerat? Perspiciatis 
            aut provident vitae culpa, cupiditate quisquam blanditiis odio voluptas fugiat nulla facere? Voluptates voluptatem 
            ad temporibus eligendi aperiam consequatur numquam natus hic!</p>
        </div>
      </section>
      <section className="food-content">
        <h2 className="mt-4 h2">Shops to look for</h2>
        <PlaceList list={myList} />
      </section>
    </div>
  </>);
}

export default FoodPage;