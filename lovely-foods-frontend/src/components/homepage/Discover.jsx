import React, { useState, useEffect } from "react";

import PlaceList from "../dashboard/PlaceList";
import FoodList from "../dashboard/FoodList";
import Filters from "../dashboard/Filters";
import PageLoader from "../ui/Loadings/PageLoader";

import { getShopsAPI } from "../../api/dashboard";

import shopFilters from "../../utils/shopFilters";



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

  const [shops, setShops] = useState([]);

  const [appliedShopFilters, setAppliedShopFilters] = useState(["healthy", "north indian"]);

  const [shopsAreLoading, setShopsAreLoading] = useState(true);


  useEffect(() => {
    const getShops = async () => {
      const res = await getShopsAPI();
      if(res === "Error") return;
      setShops(res);
      setShopsAreLoading(false);
    }

    getShops();
  }, [])




  return (<main className="discover">
    <div className="d-none">
    <h3 className="mt-7 mb-4 h2">Trending shops</h3>
    <div className="trending-shops">
      <PlaceList list={[]} />
    </div>
    </div>
    <h3 className="mt-7 mb-3 h2">Discover your favorite food</h3>
    <div className="discover-foods">
      <Filters />
      <FoodList list={foodList} type="Food" />
    </div>
    <h3 className="mt-7 mb-3 h2">Discover shops</h3>
    <div className="discover-shops mb-8">
      <Filters appliedFilters={appliedShopFilters} updateHandler={setAppliedShopFilters} filterList={shopFilters} type={"shop"} />
      { shopsAreLoading ?
        <PageLoader /> :
        <PlaceList list={
          appliedShopFilters.length === 0 ?
          shops :
          shops.filter(item => {
          let check=false;
          for(let i=0; i<appliedShopFilters.length; ++i){
            if(item.shopCategories.indexOf(appliedShopFilters[i]) !== -1){
              check=true;
              console.log("match")
              break;
            }
          }
          return check;          
        })} />
      }
    </div>

  </main>);
}

export default React.memo(Discover);