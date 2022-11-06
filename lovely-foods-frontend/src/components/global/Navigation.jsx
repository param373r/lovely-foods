import { useContext } from "react";
import { Link } from "react-router-dom";

import Button from "../ui/Buttons/Button";
import Icon from "../ui/Icon";

import AuthContext from "../../store/AuthContext";



const Navigation = (props) => {
  const { isLoggedIn, logout } = useContext(AuthContext);


  return (<nav className="d-flex p-absolute align-center justify-between">
    <h2><Link to="/" style={{color: "black"}}>Lovely Foods</Link></h2>
    <ul className="navlinks d-none d-md-flex w00 txt2">
      <li><Link to="/">Home</Link></li>
      <li><Link to="/profile">About Us</Link></li>
      <li><Link to="/foods">Foods</Link></li>
      <li><Link to="/shops">Shops</Link></li>
    </ul>
    <aside>
      { isLoggedIn ?
        <div className="d-flex align-center gap-1">
        <Link to="/profile"><Button design="primary" >Profile</Button></Link>
        <Button design="black" onClick={logout}><Icon name="logout" /></Button>
        </div>
        :
        <Link to="/auth"><Button design="primary" >LogIn / SignUp</Button></Link>
      }
    </aside>
  </nav>);
}

export default Navigation;