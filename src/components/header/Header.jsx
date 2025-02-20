import {  NavLink } from "react-router";
import './Header.css'

const Header = () => {
    return (
        <div>
            <nav className="space-x-6">
                <NavLink to={'/'}>Home</NavLink>
                <NavLink to={'/about'}>About</NavLink>
                <NavLink to={'/contect'}>Contect</NavLink>
                <NavLink to={'/users'}>Users</NavLink>
                <NavLink to={'/posts'}>Posts</NavLink>
                <NavLink to={'/phones'}>Phones</NavLink>
                
            </nav>
            
        </div>
    );
};

export default Header;