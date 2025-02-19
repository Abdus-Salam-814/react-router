import { Link } from "react-router";

const Header = () => {
    return (
        <div>
            <nav className="space-x-6">
                <Link to={'/'}>Home</Link>
                <Link to={'/about'}>About</Link>
                <Link to={'/contect'}>Contect</Link>
                <Link to={'/users'}>Users</Link>
                <Link to={'/posts'}>Posts</Link>
            </nav>
            
        </div>
    );
};

export default Header;