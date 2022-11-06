import { Link } from "react-router-dom";



const FoodCard = (props) => {
  const { food } = props;
  return (
  <Link to={"/foods/someId"}>
    <div className="food-card">
      <img src={food.image} alt={food.name} />
      <div className="food-info">
        <h4>{food.name}</h4>
        <p className="fs-2 txt2 mt-1">Available at <span className="w500">{food.shopCount}</span> places</p>
      </div>
    </div>
  </Link>);
}

const FoodList = (props) => {
  return (
    <div className="food-list">
    { props.list.map((item, index) => <FoodCard key={`pf-${index}`} food={item} />) }
    </div>
  );
}

export default FoodList;


/*
var favorite = {
  foods : [{
    name: {
      type: objectId,
      ref: food
    },
    place: {
      type: objectId,
      ref: shop
    }
  }],
  places : [
    {
      type: objectId,
      ref : Shop
    }
  ]
}*/