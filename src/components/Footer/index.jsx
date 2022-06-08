import "./style.css";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="footer">
      <div className="text_footer_container Container">
        <div>
          <h1 className="Logo">
            The<span>Shop</span>
          </h1>
        </div>
        <div>
          <h3>Categories</h3>
          <Link to={``}></Link>
          <Link to={``}></Link>
          <Link to={``}></Link>
          <Link to={``}></Link>
        </div>
      </div>
    </div>
  );
};

export { Footer };
