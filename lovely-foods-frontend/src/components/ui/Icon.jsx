const Icon = (props) => {
  return (<span className={`material-symbols-outlined icon ${props.className}`} onClick={props.onClick}>
    {props.name}
  </span>);
}

export default Icon;