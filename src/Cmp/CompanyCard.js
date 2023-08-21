import "./CompanyCard.css";
const CompanyCard = (props) => {
  return (
    <>
      <div className="card">
        <img alt="jitendra" className="Abhi" src={props.imgSrc} />
        <p className="cardHead">{props.head}</p>
        <p className="cardDetails">{props.data}</p>
      </div>
    </>
  );
};

export default CompanyCard;
