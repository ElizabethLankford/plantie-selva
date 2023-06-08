import { useParams } from "react-router-dom";
import { useContext } from "react";
import { Context } from "../Context";
import productData from "../productData";

function ProductDetail() {
  const { addToCart } = useContext(Context);
  const { productId } = useParams();
  const thisProduct = productData.find((prod) => prod.id == productId);

  return (
    <div className="prod-card">
      <div className="prod-img-container">
        <img src={thisProduct.img} />
      </div>
      <div className="prod-info-container ">
        <h1>{thisProduct.name}</h1>
        <p className="price">Price: ${thisProduct.price}</p>
        <p>{thisProduct.description}</p>
        <button
          className="cart-btn add-btn-prod"
          onClick={() => addToCart(thisProduct)}
        >
          Add to cart
        </button>
        <div className="prod-detail-care">
          <h3>Care</h3>
          <ul>
            <li>Light: {thisProduct.care.light}</li>
            <li>Water: {thisProduct.care.water}</li>
            <li>Temperature: {thisProduct.care.temperature}</li>
            <li>Humidity: {thisProduct.care.humidity}</li>
            <li>
              Pet Friendly: {thisProduct.care.isPetFriendly ? "Yes" : "No"}
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default ProductDetail;
