const UserItem = ({ user }) => {
    return (
        <li>
            <h2>{user?.name}</h2>
            <p>{user?.email}</p>

        </li>
    );
}

export default UserItem;