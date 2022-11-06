import { Link } from "react-router-dom";

import Button from "../ui/Buttons/Button";



const SignUp = (props) => {
  return (<>
    <h2 className="h3 mb-4">Sign Up</h2>
    <form>
      <section>
        <label htmlFor="name">Name</label>
        <input type="text" name="name" id="name" />
      </section>
      <section>
        <label htmlFor="phone">Phone</label>
        <input type="tel" name="phone" id="phone" />
      </section>
      <section>
        <label htmlFor="email">Email</label>
        <input type="email" name="email" id="email" />
      </section>
      <section>
        <label htmlFor="password">Password</label>
        <input type="password" name="password" id="password" />
      </section>
      <section>
        <label htmlFor="confirm-password">Confirm Password</label>
        <input type="password" name="confirm-password" id="confirm-password" />
      </section>
      <section>
        <Button design="primary" size="large" className="mt-3 mr-2">Submit</Button>
        or <Link to="/auth/login"><Button design="link" className="mx-1">Login</Button></Link> instead.
      </section>
    </form>
  </>);
}

export default SignUp;