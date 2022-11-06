import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";

import Button from "../ui/Buttons/Button";

import AuthContext from "../../store/AuthContext";



const Login = (props) => {

  const navigate = useNavigate();
  const { login } = useContext(AuthContext);



  const loginHandler = (event) => {
    event.preventDefault();
    const formdata = new FormData(event.target);
    const email = formdata.get("email");
    const password = formdata.get("password");
    const res = login(email, password);
    if(res) navigate("/");
  }


  return (<>
    <h2 className="h3 mb-4">Login</h2>
    <form onSubmit={loginHandler}>
      <section>
        <label htmlFor="email">Email</label>
        <input type="email" name="email" id="email" />
      </section>
      <section>
        <label htmlFor="password">Password</label>
        <input type="password" name="password" id="password" />
      </section>
      <section>
        <Button design="primary" size="large" className="mt-3 mr-2">Submit</Button>
        or <Link to="/auth/signup"><Button design="link" className="mx-1">Sign Up</Button></Link> instead.
      </section>
    </form>
  </>);
}

export default Login;