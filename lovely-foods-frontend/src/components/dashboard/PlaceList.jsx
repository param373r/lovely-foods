import React from "react";
import { Link } from "react-router-dom";



const FoodPlace = (props) => {
  const { place } = props;

  return (
  <Link to={"/shops/someId"}>
  <div className="food-place">
    <img src={"/assets/restro.jpg"} alt={place.name} />
    <div className="food-place-info">
      <h4>{place.name}</h4>
      <p className="txt2 fs-2 mb-1">{place.location}</p>
      <p>{place.shopRating}</p>
    </div>
  </div>
  </Link>);
}


const PlaceList = (props) => {
  console.log(props.list);
  return (
  <div className="place-list">
    { 
      props.list.map((place, index) => <FoodPlace key={`p-${place._id}-${index}`} place={place} />) 
    }
  </div>);
}

export default PlaceList;