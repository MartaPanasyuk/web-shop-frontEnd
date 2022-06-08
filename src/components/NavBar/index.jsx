import { Link } from "react-router-dom";
import { SearchBar } from "../SearchBar";
import { IoCartOutline } from "react-icons/io5";
import { AiFillHeart } from "react-icons/ai";
import { BiUser } from "react-icons/bi";
import "./style.css";

const NavBar = () => {
  return (
    <div className="NavBar Container">
      <div className="NavBar-Left">
        <h1 className="Logo">
          The<span>Shop</span>
        </h1>
        <ul>
          <li className="NavBar-Link">
            <Link to="/">Home</Link>
          </li>
          <li className="NavBar-Link">
            <Link to="/shop">Products</Link>
          </li>
          <li className="NavBar-Link">
            <Link to="/contacts">About Us</Link>
          </li>
        </ul>
      </div>
      <div className="NavBar-Search">
        <SearchBar />
      </div>
      <div className="NavBar-Icons">
        <BiUser />
        <IoCartOutline />
        <AiFillHeart />
      </div>
    </div>
  );
};

export { NavBar };
