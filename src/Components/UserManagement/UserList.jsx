import { useSelector } from "react-redux";
import UserItem from "./UserItem";

const UserList = () => {
  const users = useSelector((state) => state.users.users);
  console.log(users);

  return (
    <ul>
      {users.map((user) => (
        <UserItem key={user.id} user={user} />
      ))}
    </ul>
  );
};

export default UserList;
