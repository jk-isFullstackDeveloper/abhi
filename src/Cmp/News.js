import "./News.css";
import NewsData from "./NewsData";
import NewsCard from "./NewsCard";
import SearchComp from "./SearchComp";

function ndata(val) {
  return (
    <NewsCard
      imgSrc={val.imgSrc}
      heading={val.heading}
      date={val.date}
      data={val.data}
      link={val.link}
      linkAdd={val.linkAdd}
    />
  );
}

const News = () => {
  return (
    <>
      <h1 className="newsHead">NEWS</h1>

      {/* Page link area */}
      <p className="linkArea">
        {/* <a className='HomeLink' href='#'>Home</a>
                {'>>'}
                <a className='NewsLink' href='#'>News</a> */}
      </p>

      {/* Search Area */}
      <div className="searchArea">
        <SearchComp />
      </div>

      {/* Card area */}
      <div className="newsDiv">{NewsData.map(ndata)}</div>
    </>
  );
};

export default News;
