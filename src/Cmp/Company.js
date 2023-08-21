import ComCardFun from "./ComCardFun";
import ComImgSlider from "./ComImgSlider";
import "./Company.css";

const Company = () => {
  return (
    <>
      <p className="heading">The Company</p>

      <div className="about">
        <div className="ceo">
          <img
            alt="jitendra"
            src="https://staticassetsrce.s3.amazonaws.com/wp-content/uploads/2016/10/venkeyMysore.jpg"
          />
          <p className="name">VENKY MYSORE</p>
          <p className="post">
            CEO, RED CHILLIES ENTERTAINMENT & KNIGHT RIDERS SPORTS PVT. LTD.
          </p>
        </div>
        <p className="aboutCompany">
          “Red Chillies has consistently pushed boundaries across the spectrum,
          creating and producing entertaining content and engaging audiences
          worldwide through a vast variety of different platforms. Our mission
          is and will always be to deliver world-class, ground-breaking stories
          through quality, innovation, and detail, that touch lives across the
          globe.”
          <br />
          <br />
          Mr. Venky Mysore has been the CEO of Red Chillies Entertainment Pvt.
          Ltd. since 2013, and the CEO and Managing Director of Knight Riders
          since 2010. In his capacity at the helm, he not only leads the Kolkata
          Knight Riders, but also oversees their newly acquired franchise in the
          Caribbean Premier League (CPL), the Trinbago Knight Riders (TKR).
          <br />
          <br />
          He has seen immense success in a career spanning 25 years in financial
          services. He was the Country Head (India) of Sun Life Financial, prior
          to which he was the CEO & Managing Director of MetLife India. He was
          responsible for the launch for MetLife’s India venture.
          <br />
          <br />
          Mr. Mysore also served as the Chairman of the American Chamber of
          Commerce’s Bangalore Chapter from 2002 to 2003, where he worked
          closely with regulators to shape insurance regulations in the country.
          Furthermore, he is a current member of the Mumbai Chapter of the Young
          Presidents Organization (YPO).
          <br />
          <br />
          He has an MBA in Marketing & Finance, and a BA from the University of
          Madras. An ardent fan of cricket since childhood, he professionally
          represented the University of Madras in the sport, and since 2010 has
          expressed his passion for it through skilful management of the global
          Knight Riders franchise.
        </p>
      </div>

      <div className="income">
        <ComCardFun />
      </div>

      <div className="culture">
        <p className="cultureHead">OUR CULTURE</p>
        <p className="cultureMsg">
          At Red Chillies Entertainment, we nurture an environment of mutual
          respect and integrity. Every member of this family is encouraged to
          innovate, and supported to deliver work to the best of their
          potential.
          <br />
          <br />
          We are a team of professionals committed to innovate processes that
          facilitates continuous learning and elevates the quality of both
          individual & organisational results.
        </p>
      </div>

      <ComImgSlider />
    </>
  );
};

export default Company;
