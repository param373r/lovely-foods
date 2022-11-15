const QuickTile = (props) => {
  return (
  <div className="quick-tile">
  <img src={props.image} alt="dish-name" />
  <p>{props.name}</p>
</div>);
}


const QuickSearch = (props) => {
  return (<div className="hero-quick-search d-grid align-center mt-4 justify-evenly">
    <QuickTile name="Healthy" image="/assets/rounded.png" />
    <QuickTile name="North Indian" image="/assets/rounded.png" />
    <QuickTile name="South Indian" image="/assets/rounded.png" />
    <QuickTile name="Chinese" image="/assets/rounded.png" />
    <QuickTile name="Beverages" image="/assets/rounded.png" />
    <QuickTile name="Snacks" image="/assets/rounded.png" />
  </div>);
}

export default QuickSearch;