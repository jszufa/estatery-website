import "./Hero.css";
import mapImage from "../img/map-illustration.png";
import Card from "./Card";

function Hero() {
  return (
    <section className="hero-section">
      <div className="hero__header-background">
        <div className="hero__header-content">
          <header className="main-header">
            <h1>Buy, rent, or sell your property easily</h1>
            <p>
              A great platform to buy, sell, or even rent your properties
              without any commisions.
            </p>

            <div className="hero__numbers">
              <div className="hero__numbers__element">
                <div className="hero__numbers__separator"></div>
                <div>
                  <h3>50k+</h3>
                  <p>renters</p>
                </div>
              </div>

              <div className="hero__numbers__element">
                <div className="hero__numbers__separator"></div>
                <div>
                  <h3>10k+</h3>
                  <p>properties</p>
                </div>
              </div>
            </div>
          </header>
        </div>
      </div>

      <div className="hero__illustration-section">
        <div className="hero__illustration-container">
          <div className="hero__illustration-wrapper">
            <Card
              className="hero__example-card"
              image={`${process.env.PUBLIC_URL}/images/appartments-1.jpeg`}
              title="Palm Harbor"
              price="$3,440"
              address="2699 Green Valley, Highland Lake, FL"
            />
            <img src={mapImage} alt="" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
