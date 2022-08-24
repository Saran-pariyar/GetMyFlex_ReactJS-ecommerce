import "../Assets/css/Cart.css";

const Cart = ({ cart }) => {
  return (
    <div className={`cart-section ${cart ? " show-cart " : ""}`}>
      <p style={{ color: "white" }}>hello</p>
      {cart}
    </div>
  );
};

export default Cart;
