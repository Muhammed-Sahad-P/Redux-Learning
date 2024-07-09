import products from "../../api/product.json";
import AfterCart from "./CartButtons/AfterCart";
import BeforeCart from "./CartButtons/BeforeCart";
import { useSelector } from "react-redux";
import "./ProductList.css";
const ProductList = () => {
  const { cartCount } = useSelector((state) => state.cart);

  return (
    <section className="container">
      {products.map((product, key) => (
        <div className="product-container" key={key}>
          <img src={product?.image} alt={product.title} />
          <h3>{product?.title}</h3>
          {cartCount > 0 ? <AfterCart /> : <BeforeCart />}
        </div>
      ))}
    </section>
  );
};

export default ProductList;
