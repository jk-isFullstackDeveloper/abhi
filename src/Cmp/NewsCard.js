const NewsCard = (prop) => {
  return (
    <>
      <div className="newsCard">
        <img alt="jitendra" className="newsImg" src={prop.imgSrc} />
        <p className="newsHeading">
          <a className="newsLink" href={prop.linkAdd}>
            {prop.heading}
          </a>
        </p>
        <p className="newsDate">{prop.date}</p>
        <p className="newsData">{prop.data}</p>
        <p className="anchor">
          <a href={prop.linkAdd}>{prop.link}</a>
        </p>
      </div>
    </>
  );
};

export default NewsCard;
