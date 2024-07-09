import { memo } from "react";
import "./CartButtons.css";
import { useDispatch } from "react-redux";
import { addToCart } from "../../../redux/cart";
const BeforeCart = () => {
  const dispatch = useDispatch();
  return (
    <div className="before-cart">
      <button className="add-cart-button" onClick={dispatch(addToCart())}>
        Add to Cart
      </button>
    </div>
  );
};

export default memo(BeforeCart);
