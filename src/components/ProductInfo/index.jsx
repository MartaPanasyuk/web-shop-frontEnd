import { useState } from "react";
import { ReviewTab, AdditionalInfoTab, DescriptionTab } from "../";
import "./styles.css";

const fakeReviews = ["it's great!", "I really liked it", "Not what I expected"];

const ProductInfo = (props) => {
  const [activeTab, setActiveTab] = useState(0); // 0 - 1 - 2

  const { product } = props;

  const tabs = {
    0: <DescriptionTab />, //description={product.description}
    1: <AdditionalInfoTab />, //info={"blah"}
    2: <ReviewTab />,
  };

  const tabToRender = tabs[activeTab]; //

  return (
    <div className="info-container">
      <div className="info-buttons">
        <button className="info-btn" onClick={() => setActiveTab(0)}>
          Description
        </button>
        <button className="info-btn" onClick={() => setActiveTab(1)}>
          Additional Info
        </button>
        <button className="info-btn" onClick={() => setActiveTab(2)}>
          Reviews
        </button>
      </div>
      <div className="info-content">{tabToRender}</div>
    </div>
  );
};

export { ProductInfo };
