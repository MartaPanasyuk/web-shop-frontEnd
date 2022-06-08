import "./style.css";
const DescriptionTab = (props) => {
  return (
    <div className="Reviews_section Container">
      DESCRIPTION
      <p className="review_text">{props.description}</p>
    </div>
  );
};

export { DescriptionTab };
