import { useSelector } from "react-redux"

const UserList = () => {
    const users = useSelector((state)=>state.users.users);
return(
    <ul>
        {users.map((user)=>(
            <UserItem key={user.id} user={user} />
        ))}
    </ul>
)
}

export default UserList