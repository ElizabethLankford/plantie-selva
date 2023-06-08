import { useState, useContext } from "react";
import { Context } from "../Context";
import CartItem from "../components/CartItem";

function Cart() {
  const [buttonText, setButtonText] = useState("Place Order");
  const { cartItems, emptyCart } = useContext(Context);
  let totalCost = 0;

  const cartItemElements = cartItems.map((item) => (
    <CartItem key={item.id} item={item} />
  ));

  cartItems.map((item) => {
    if (item.quantity > 1) {
      totalCost += item.quantity * item.price;
    } else {
      totalCost += item.price;
    }
  });

  function placeOrder() {
    setButtonText("Ordering");
    setTimeout(() => {
      setButtonText("Place Order");
      emptyCart();
    }, 3000);
  }

  return (
    <div>
      <div className="prod-header">
        <h1>Cart</h1>
      </div>
      <div className="cart-container">
        <div className="cart-el">{cartItemElements}</div>
        <div className="total-cart">
          <p>
            Total:{" "}
            {totalCost.toLocaleString("en-US", {
              style: "currency",
              currency: "USD",
            })}
          </p>
          {cartItems.length > 0 ? (
            <div>
              <button className="placeorder-btn" onClick={placeOrder}>
                {buttonText}
              </button>
            </div>
          ) : (
            <p>You have no items in your cart.</p>
          )}
        </div>
      </div>
    </div>
  );
}

export default Cart;
