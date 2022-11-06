import Icon from "../ui/Icon";



const Review = (props) => {
  return (<div className="review">
    <div className="review-header">
      <div className="review-user">
        <div className="review-user-image"></div>
        <div className="review-user-info">
          <h6>Full User Name</h6>
          <p>20 November 2022</p>
        </div>
      </div>
      <div className="star-rating text-right">
        <Icon name="star" />
        <Icon name="star" />
        <Icon name="star" />
        <Icon name="star" />
        <Icon name="star" />
      </div>
    </div>
    <div className="review-body">
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quae.</p>
    </div>
  </div>);
}



const Reviews = (props) => {
  return (<div className="review-list my-5">
    <Review />
    <Review />
    <Review />
  </div>);
}

export default Reviews;