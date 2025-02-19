import { Outlet } from "react-router";
import Header from "../../components/header/Header";

const Home = () => {
    return (
        <div className="flex flex-col gap-6 justify-center items-center">
            <Header/>

            <Outlet/>
            
            
        </div>
    );
};

export default Home;