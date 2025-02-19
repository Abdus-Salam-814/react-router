import { useLoaderData } from "react-router";
import User from "../../components/user/user";
import { use } from "react";

const Users = () => {

    const users =useLoaderData();
    console.log(users);

    return (
        <div>
            <h1>This is users component</h1>
            <h4>Users: {users.length}</h4>
            <div className="grid md:grid-cols-4 gap-6 justify-center items-center">
                {
                    users.map(user => <User key={use.id} user={user}></User>)
                }
            </div>
            
        </div>
    );
};

export default Users;