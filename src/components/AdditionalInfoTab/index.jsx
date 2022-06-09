import "./style.css";
const AdditionalInfoTab = (props) => {
  return (
    <div className="Reviews_section Container">
      ADDITIONAL INFO
      <p className="review_text">{props.info}</p>
    </div>
  );
};

export { AdditionalInfoTab };
