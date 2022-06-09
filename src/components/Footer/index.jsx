import "./style.css";
import axios from "axios";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  AiFillFacebook,
  AiFillTwitterCircle,
  AiOutlineInstagram,
} from "react-icons/ai";

const Footer = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await axios.get(`http://localhost:4000/categories/`);
        setCategories(response.data);
        console.log("response", response.data);
      } catch (e) {
        console.log(e.message);
      }
    };
    fetchCategories();
  }, []);
  return (
    <div className="Footer">
      <div className="footer-rows">
        <div className="footer_logo">
          <h1 className="Logo">
            The<span>Shop</span>
          </h1>
        </div>
        <div>
          {" "}
          <h2 className="footer-title">Categories</h2>
          {categories.map((category) => (
            <div className="footer-t">
              <Link to={`categories/${category.id}`}>
                <p className="footer-text">{category.title}</p>{" "}
              </Link>{" "}
            </div>
          ))}
        </div>
        <div className="footer-t">
          <h2 className="footer-title">My account</h2>
          <p className="footer-text">My account</p>
          <p className="footer-text">Order History</p>
          <p className="footer-text">Discount</p>
          <p className="footer-text">Returns</p>
          <p className="footer-text">Order Tracking</p>
        </div>
        <div>
          <h2 className="footer-title">Folow Us</h2>
          <div className="footer-icons">
            <AiFillFacebook />
            <AiFillTwitterCircle />
            <AiOutlineInstagram />
          </div>
        </div>
      </div>
    </div>
  );
};

export { Footer };
