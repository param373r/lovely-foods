const Icon = (props) => {
  return (<span className={`material-symbols-outlined icon ${props.className}`} >
    {props.name}
  </span>);
}

export default Icon;