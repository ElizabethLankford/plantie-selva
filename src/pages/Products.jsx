import { Link } from "react-router-dom";
import { useContext } from "react";
import { Context } from "../Context";
import productData from "../productData";

function Products() {
  const { addToCart } = useContext(Context);

  const products = productData.map((prod) => (
    <div key={prod.id} className="prod-card-thumb">
      <Link className="prod-title" to={`/products/${prod.id}`}>
        <img className="prod-img-thumb" src={prod.img} />
      </Link>
      <h3>
        <Link className="prod-title" to={`/products/${prod.id}`}>
          {prod.name}
        </Link>
      </h3>
      <p>Price: ${prod.price}</p>
      <button
        className="cart-btn add-btn-thumb"
        onClick={() => addToCart(prod)}
      >
        Add to cart
      </button>
    </div>
  ));
  return (
    <div>
      <div className="prod-header">
        <h1>Available Plants</h1>
      </div>

      <div className="prod-page-container">{products}</div>
    </div>
  );
}

export default Products;
