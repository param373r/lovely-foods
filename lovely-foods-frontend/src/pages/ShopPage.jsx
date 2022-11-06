import Navigation from "../components/global/Navigation";
import Icon from "../components/ui/Icon";
import FoodList from "../components/dashboard/FoodList";
import Reviews from "../components/dashboard/Reviews";

import './css/shop.css';



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


const ShopPage = (props) => {
  return (<>
    <Navigation />
    <div className="shop-page">
      <section className="shop">
        <img src="/assets/restro.jpg" alt="shop name" className="rounded-2" />
        <div className="shop-info mt-2">
          <h2 className="mb-2">Full Shop Name</h2>
          <p className="d-flex align-center">
            <Icon name="location_on" className="accent1 mr-1" />
            Shop Address
          </p>
        </div>
        <div className="shop-stats d-grid mt-5">
          <div className="shop-stat">
            <h4>Rating</h4>
            <div className="shop-stat-content"> 4.5 <Icon name="hotel_class" /> </div>
          </div>
          <div className="shop-stat">
            <h4>Favorites</h4>
            <div className="shop-stat-content"> 22 <Icon name="favorite" /> </div>
          </div>
          <div className="shop-stat">
            <h4>Foods</h4>
            <div className="shop-stat-content"> 12 <Icon name="lunch_dining" /> </div>
          </div>
        </div>
      </section>

      <section className="shop-content">
        <div className="shop-menu">
          <h3 className="mb-2 h2 mt-4">Food menu</h3>
          <FoodList list={foodList} />
        </div>
        <div className="shop-reviews">
          <h3 className="mb-2 h2 mt-7">Reviews</h3>
          <Reviews />
        </div>
      </section>
    </div>
  </>);
}

export default ShopPage;