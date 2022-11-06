import Icon from "../ui/Icon";



const FilterType = (props) => {
  return (<div className="filter-type">{props.name} <Icon name="close" /></div>);
}



const Filters = (props) => {
  const filters = ["North Indian", "Veg", "Healthy", "Fast Food"];

  return (<div className="filters d-flex align-center mb-4">
    {filters.map((filter, index) => <FilterType key={`filter${index}`} name={filter} />)}
    <button className="filter-btn"><Icon name="add" /> Add filter</button>
  </div>);
}

export default Filters;