import { useLoaderData } from "react-router";

const UserDetails = () => {

    const user = useLoaderData();
    const {id, name, username, phone, website} = user;
    
    return (
        <div>
            <h1 className="text-3xl">Details About Users ID {id}</h1>
            <h3>Name: {name}</h3>
            <h3>UserNaame: {username}</h3>
            <h3>Phone: {phone}</h3>
            <h3>Website: {website}</h3>
        </div>
    );
};

export default UserDetails;