import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import plantlogo from "../assets/images/plantlogo.png";
function Header() {
  return (
    <header>
      <div className="logo-container">
        <img className="logo-img" height={40} src={plantlogo} />

        <h2 className="logo">Plantie Selva</h2>
      </div>

      <nav className="nav-bar">
        <ul>
          <li>
            <Link exact to="/">
              Home
            </Link>
          </li>
          <li>
            <Link exact to="/products">
              Products
            </Link>
          </li>
          <li>
            <Link exact to="/cart">
              <FontAwesomeIcon icon={faCartShopping} />
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
