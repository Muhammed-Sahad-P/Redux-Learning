import { Route, Routes } from "react-router-dom";
import Navbar from "./Components/Home/Navbar/Navbar";
import ProductList from "./Components/Product/ProductList";
import Home from "./Components/Home/Home";
import TodoApp from "./Components/Todo/TodoApp";
import Counter from "./Components/Counter/Counter";
import UserList from "./Components/UserManagement/UserList";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchUsers } from "./redux/userSlice";
import Zodo from "./Components/Zodo/Zodo";
import Kounder from "./Components/Kounder/Kounder";

const App = () => {
  const dispatch = useDispatch();
  const userStatus = useSelector((state) => state.users.status);
  const error = useSelector((state) => state.users.error);

  useEffect(() => {
    if (userStatus === "idle") {
      dispatch(fetchUsers());
    }
  }, [userStatus, dispatch]);

  let content;

  if (userStatus === "loading") {
    content = <div>Loading...</div>;
  } else if (userStatus === "succeeded") {
    content = <UserList />;
  } else if (userStatus === "failed") {
    content = <div>{error}</div>;
  }

  return (
    <>
      <Navbar />
      <>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/productlist" element={<ProductList />} />
          <Route path="/todo" element={<TodoApp />} />
          <Route path="/counter" element={<Counter />} />
          <Route path="/userlist" element={<UserList />} />
          <Route path="/zodo" element={<Zodo />} />
          <Route path="/kounder" element={<Kounder />} />
        </Routes>
      </>
    </>
  );
};

export default App;
