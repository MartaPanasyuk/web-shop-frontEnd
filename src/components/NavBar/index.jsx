import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <div>
      <Link to="/">Home</Link>
      <Link to="/shop">Products</Link>
      <Link to="/contacts">About Us</Link>
    </div>
  );
};

export { NavBar };
