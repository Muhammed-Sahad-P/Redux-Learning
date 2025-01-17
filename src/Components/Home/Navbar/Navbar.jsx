import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="heading">
        <h1 style={{ color: "white" }}>Redux</h1>
      </div>
      <div className="list-links">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/productlist">Product</Link>
          </li>
          <li>
            <Link to="/todo">Todo</Link>
          </li>
          <li>
            <Link to="/counter">Counter</Link>
          </li>
          <li>
            <Link to="/userlist">Users</Link>
          </li>
          <li>
            <Link to="/zodo">Zodo</Link>
          </li>
          <li>
            <Link to="/kounder">Kounder</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
