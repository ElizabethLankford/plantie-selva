import facebook from "/images/facebook.png";
import tiktok from "/images/tiktok.png";
import instagram from "/images/instagram.png";
import plantlogo from "/images/plantlogo.png";

function Footer() {
  return (
    <footer>
      <div className="footer-text">
        <div className="footer-logo">
          <img className="logo-img" height={25} src={plantlogo} />
          <h3>Plantie Selva</h3>
        </div>

        <p>Copyright © 2023 - Plantie Selva</p>
        <p>Dallas, TX</p>
      </div>
      <div className="footer-social">
        <img className="footer-icon" src={facebook} alt="facebook" />
        <img className="footer-icon" src={tiktok} alt="tiktok" />
        <img className="footer-icon" src={instagram} alt="instagram" />
      </div>
      <div className="footer-credit">
        <h5>Credits</h5>
        <ul>
          <li>
            <a href="https://www.flaticon.com/free-icons/box" title="box icons">
              Box icons created by Good Ware - Flaticon
            </a>
          </li>
          <li>
            <a
              href="https://www.flaticon.com/free-icons/plant"
              title="plant icons"
            >
              Plant icons created by Freepik - Flaticon
            </a>
          </li>
          <li>
            <a
              href="https://www.flaticon.com/free-icons/instagram"
              title="instagram icons"
            >
              Social icons created by Alfredo Creates - Flaticon
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;
