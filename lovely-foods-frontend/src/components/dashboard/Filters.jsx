import { useState } from "react";

import Icon from "../ui/Icon";
import Model from "../ui/model";
import Button from "../ui/Buttons/Button"




const FilterType = (props) => {
  return (<div className="filter-type">{props.name} <Icon name="close" onClick={() => {props.onClose()}} /></div>)
}


const FilterSelecter = (props) => {
  const { appliedFilters, list, name, update } = props;


  const handleCheck = (e, filter) => {
    
    console.log(filter);
    if(e.target.checked){
      update(prevState => {
        prevState.push(filter);
        return prevState;
      })
    } else {
      update((myList) => {
        return myList.filter(element => element !== filter);
      })
    }
  }


  return (<>
      <h3>Select Filters</h3>
      <form className="py-3">
        { list.map((filter, index) => 
          <label key={`${name}-label-${index}`}>
            <input 
                type="checkbox" 
                style={{display: "inline", width: "auto", marginRight: "5px"}} 
                name={name} 
                onClick={e => { handleCheck(e,filter) } }
                defaultChecked={appliedFilters.indexOf(filter) !== -1 ? true : false}
              />
            {filter}
          </label>) }
      </form>
      <Button design="primary" onClick={props.hideModel}>Done</Button>
    </>)
}



const Filters = (props) => {
  const { appliedFilters, updateHandler, filterList, type } = props;

  const [showModel, setShowModel] = useState(false);


  const closeHandler = (filter) => {
    updateHandler((prevState) => {
      return prevState.filter(element => element !== filter);
    })
  }
  

  return (
  <div className="filters d-none align-center mb-4">
    {  appliedFilters?.map((filter, index) => <FilterType name={filter} key={`${type}-filter-${index}`} onClose={() => {closeHandler(filter)}} />) }
    <button className="filter-btn" onClick={()=>{setShowModel(true);}} ><Icon name="add" /> Add filter </button>
    <Model show={showModel} element={
      <FilterSelecter 
        appliedFilters={appliedFilters} 
        name="shopSelecters" 
        update={updateHandler} 
        list={filterList} 
        hideModel={() => { setShowModel(false); }} />} 
      />
  </div>)
}

export default Filters;