import SearchComp from "./SearchComp";
import "./Blob.css";

const Blob = () => {
  return (
    <>
      <h1 className="BlobHead">BLOB</h1>

      {/* Page link area */}
      <p className="BlinkArea">
        <a className="HomeLink" href="#">
          Home
        </a>
        {">>"}
        <a className="BlobLink" href="#">
          Blob
        </a>
      </p>

      {/* Search Area */}
      <div className="BSarchArea">
        <SearchComp />
      </div>

      {/* Cards Design */}
      <div className="BlobArea">
        <div className="BlobCard">
          <a
            className="BCardHead"
            href="https://www.redchillies.com/heres-why-the-india-waale-should-be-a-part-of-your-dream-squad"
          >
            Here’s why the India Waale should be a part of your dream squad!
          </a>
          <p className="BCardDate">DATE : OCTOBER 24,2019</p>
          <img
            alt="jitendra"
            className="BCardImg"
            src="https://staticassetsrce.s3.amazonaws.com/wp-content/uploads/2019/10/BlogHeader_HNY-1.png"
          />
          <p className="BCardMsg">
            When we think about our dream squad, we always want it to be ideal.
            Each one of us needs a bunch of close friends we can fall back on...
          </p>
          <a
            className="BCardLink"
            href="https://www.redchillies.com/heres-why-the-india-waale-should-be-a-part-of-your-dream-squad"
          >
            Read More
          </a>
        </div>

        <div className="BlobCard">
          <a
            className="BCardHead"
            href="https://www.redchillies.com/6-love-lessons-we-learnt-from-raj-and-priya-of-chalte-chalte"
          >
            6 love lessons we learnt from Raj and Priya of Chalte Chalte
          </a>
          <p className="BCardDate">DATE : JUNE 13,2019</p>
          <img
            alt="jitendra"
            className="BCardImg"
            src="https://staticassetsrce.s3.amazonaws.com/wp-content/uploads/2019/06/Blog-Header.png"
          />
          <p className="BCardMsg">
            {" "}
            Chalte Chalte, a heartwarming story about the journey of two lovers,
            changed the perspective of love amongst youngsters since its release
            day. This movie broke the flow of commonly...
          </p>
          <a
            className="BCardLink"
            href="https://www.redchillies.com/6-love-lessons-we-learnt-from-raj-and-priya-of-chalte-chalte"
          >
            Read More
          </a>
        </div>

        <div className="BlobCard">
          <a
            className="BCardHead"
            href="https://www.redchillies.com/10-years-of-om-shanti-om-5-reasons-why-it-was-one-of-the-most-iconic-films-of-the-decade"
          >
            10 Years of ‘Om Shanti Om’: 5 reasons why it was one of the most
            iconic films of the decade!
          </a>
          <p className="BCardDate">DATE : NOVEMBER 9,2017</p>
          <img
            alt="jitendra"
            className="BCardImg"
            src="https://staticassetsrce.s3.amazonaws.com/wp-content/uploads/2018/04/OSO_2.jpg"
          />
          <p className="BCardMsg">
            ‘Om Shanti Om’, which released in the year 2007, celebrates its 10
            year anniversary today. The film, which starred Shah Rukh Khan,
            marked the debut of Deepika Padukone and...
          </p>
          <a
            className="BCardLink"
            href="https://www.redchillies.com/10-years-of-om-shanti-om-5-reasons-why-it-was-one-of-the-most-iconic-films-of-the-decade"
          >
            Read More
          </a>
        </div>

        <div className="BlobCard">
          <a
            className="BCardHead"
            href="https://www.redchillies.com/dear-zindagi"
          >
            5 life lessons from ‘Dear Zindagi’
          </a>
          <p className="BCardDate">DATE : JANUARY 25,2017</p>
          <img
            alt="jitendra"
            className="BCardImg"
            src="https://staticassetsrce.s3.amazonaws.com/wp-content/uploads/2017/09/dz_1.jpg"
          />
          <p className="BCardMsg">
            Films aren’t just meant for entertainment. If done well, they are
            food for the soul. They don’t always have to be dramatic either.
            Some films can be simple and....
          </p>
          <a
            className="BCardLink"
            href="https://www.redchillies.com/dear-zindagi"
          >
            Read More
          </a>
        </div>
      </div>
    </>
  );
};

export default Blob;
