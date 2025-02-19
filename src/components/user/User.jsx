import { Link } from "react-router";

const User = ({user}) => {
    const {id, name, username, phone, website} = user;
    return (
        <div className="border-4 border-amber-200 p-8 rounded-2xl">
            <h1>ID Number:{id}</h1>
            <h1>Name: {name}</h1>
            <h1>Username: {username}</h1>
            <h1>Phone: {phone}</h1>
            <h1>Website: {website}</h1>
            <Link to={`/user/${id}`}><button className="btn btn-primary mt-6">Deadiles</button></Link>
        </div>
    );
};

export default User;