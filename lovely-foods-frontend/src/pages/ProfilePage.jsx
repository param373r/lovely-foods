import { useState, useEffect, useContext } from "react";

import Navigation from "../components/global/Navigation";
import Button from "../components/ui/Buttons/Button";
import PlaceList from "../components/dashboard/PlaceList";
import FoodList from "../components/dashboard/FoodList";
import PageLoader from "../components/ui/Loadings/PageLoader";

import './css/profile.css';

import AuthContext from "../store/AuthContext";
import { getFavShopsAPI, getShopByIdAPI } from "../api/profile";



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


const ProfilePage = (props) => {

  const { user, token } = useContext(AuthContext);
  
  const [favoritePlaces, setFavoritePlaces] = useState([]);
  const [favoriteFoods, setFavoriteFoods] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

 console.log(favoritePlaces);

  useEffect(() => {
    const getFavShops = async () => {
      var shop, shops=[];
      const favShopIds = await getFavShopsAPI(token);
      favShopIds.forEach(async (shopId) => {
        shop = await getShopByIdAPI(shopId);
        shops.push(shop);
      });
      setFavoritePlaces(shops);
    }

    getFavShops();
    setIsLoading(false);
  }, []);


  if(isLoading) return <PageLoader />;

  return (<>
    <Navigation />
    <div className="profile-page">
      <section className="profile text-center">
        <div className="profile-image rounded-50 d-flex align-center justify-center">
          <Button className="change-image-btn" design="black" size="small">Change</Button>
        </div>
        <div className="profile-info">
          <h2>{user.name}</h2>
          <p>{user.email}</p>
        </div>
        <div className="profile-actions mt-5">
          <Button design="primary" size="small">Edit Profile</Button><br />
          <Button design="black" size="small" className="mt-4">Delete Profile</Button><br />
          <Button design="black" size="small" className="mt-1">Logout from all devices</Button>
        </div>
      </section>
      <section className="profile-content">
        <h4 className="h2 mt-5">Favorite Places</h4>
        <PlaceList list={favoritePlaces} />
        <h4 className="h2 mt-5">Favorite Foods</h4>
        <FoodList list={foodList} />
      </section>
    </div>
  </>);
}

export default ProfilePage;