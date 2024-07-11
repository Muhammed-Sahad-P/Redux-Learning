import { Route, Routes } from "react-router-dom";
import Navbar from "./Components/Home/Navbar/Navbar";
import ProductList from "./Components/Product/ProductList";
import Home from "./Components/Home/Home";
import TodoApp from "./Components/Todo/TodoApp";
import Counter from "./Components/Counter/Counter";
const App = () => {
  return (
    <>
      <Navbar />
      <>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/productlist" element={<ProductList />} />
          <Route path="/todo" element={<TodoApp />} />
          <Route path="/counter" element={<Counter />} />
        </Routes>
      </>
    </>
  );
};

export default App;
