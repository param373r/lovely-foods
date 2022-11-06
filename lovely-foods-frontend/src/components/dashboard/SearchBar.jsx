import Icon from "../ui/Icon";


const SearchBar = (props) => {
  return (
  <form className="p-relative hero-search-form d-grid align-center rounded-2">
    <Icon name="lunch_dining" className="hero-search-icon txt2" />
    <input className="hero-search p-relative w500" name="search" id="foodSearch" type="text" placeholder="Search your favorite food" />
    <button className="d-inflex align-center justify-evenly"><Icon name="search" /> GO</button>
  </form>);
}

export default SearchBar;