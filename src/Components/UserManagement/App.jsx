import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUsers } from "../../redux/userSlice";

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
    content = <UserList  />;
  } else if (userStatus === "failed") {
    content = <div>{error}</div>;
  }

  return (
    <div>
      <h1>User Management</h1>
      {content}
    </div>
  );
};
export default App;
