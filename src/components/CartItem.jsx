import { useContext, useRef } from "react";
import PropTypes from "prop-types";
import { Context } from "../Context";

function CartItem({ item }) {
  const ref = useRef(null);

  const { removeFromCart } = useContext(Context);
  return (
    <div className="cart-item-container">
      <div className="cart-item-img-container">
        <img height={150} src={item.img} />
      </div>
      <div className="cart-item-info-container">
        <h3>{item.name}</h3>
        <p>Price: ${item.price}</p>

        <p>Quantity: {item.quantity}</p>
        <button
          className="remove-btn"
          onClick={() => removeFromCart(item.id)}
          ref={ref}
        >
          Remove
        </button>
      </div>
    </div>
  );
}
CartItem.propTypes = {
  item: PropTypes.shape({
    img: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    id: PropTypes.number.isRequired,
    quantity: PropTypes.number,
  }),
};

export default CartItem;
