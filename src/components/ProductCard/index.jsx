import { IoCartOutline } from "react-icons/io5";
import { AiFillHeart } from "react-icons/ai";
import { FaSearchPlus } from "react-icons/fa";
import "./style.css";

const ProductCard = () => {
  return (
    <div className="ProductCard">
        <img src="https://fakestoreapi.com/img/61IBBVJvSDL._AC_SY879_.jpg" alt="a product" className="ProductCard-Image"/>
        <div className="ProductCard-Description">
            <h3>Dictum morbi</h3>
            <ul>
                <li>26.00</li>
                <li>*****</li>
            </ul>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna in est adipiscing in phasellus non in justo.</p>
            <div className="ProductCard-Icon-Container">
                <IoCartOutline />
                <AiFillHeart />
                <FaSearchPlus />
            </div>
        </div>


    </div>
  )
}

export { ProductCard }