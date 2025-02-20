import { Outlet, useNavigation } from "react-router";
import Header from "../../components/header/Header";





const Home = () => {
    const nevInon = useNavigation();
    return (
        <div className="flex flex-col gap-6 justify-center items-center">
            <Header/>

 
        {
            nevInon.state === "loading" ? <p>Loddin................</p> : <Outlet></Outlet>
        }
            
            
        </div>
    );
};

export default Home;