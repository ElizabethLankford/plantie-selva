import planticon from "../assets/images/plant.png";
import plantbox from "../assets/images/box.png";
import plantwater from "../assets/images/watering-plants.png";

function Home() {
  return (
    <div>
      <div className="hero">
        <div className="hero-text">
          <h1>Shop indoor and outdoor plants.</h1>
          <p>New Arrivals every week!</p>
        </div>
      </div>
      <div className="newsletter">
        <div className="newsletter-container">
          <h2>Sign up for our weekly newsletter.</h2>
          <p>
            Recieve weekly emails and alerts on new plants and exclusive deals
            on your favorite
          </p>
          <input
            placeholder="Email"
            className="newsletter-input"
            type="email"
          ></input>
          <button className="newsletter-btn">Subscribe</button>
        </div>
      </div>
      <div className="services-container">
        <div className="services-subcontainer">
          <div className="icon-container">
            <img alt="plant" src={planticon} />
          </div>
          <h3>Weekly inventory updates</h3>
          <p>
            We update our inventory on a weekly basis every Monday so check for
            new arrivals.
          </p>
        </div>

        <div className="services-subcontainer">
          <div className="icon-container">
            <img alt="box" src={plantbox} />
          </div>
          <h3>Packed with Care</h3>
          <p>
            Shipping plants can be stressful, so we pack all our plants as
            secure and carefully as possible.
          </p>
        </div>
        <div className="services-subcontainer">
          <div className="icon-container">
            <img alt="watering plant" src={plantwater} />
          </div>

          <h3>Care Instructions</h3>
          <p>
            It can be overwelming getting a new plant. We provide care
            instructions with every plant ordered.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Home;
