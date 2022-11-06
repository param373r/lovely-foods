const Button = (props) => {

  if(props.design !== 'link')
  return (<button className={`btn ${props.design} ${props.size} ${props.className}`} onClick={props.onClick}>
    {props.children}
  </button>);

  else
  return (<button className={`btn-link ${props.className}`}>
    {props.children}
  </button>)
}

export default Button;