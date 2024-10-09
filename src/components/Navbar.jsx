// Navbar.js
import { Link } from 'react-router-dom';
import '../Styles/Navbar.css';

const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="navbar-logo">
                <img src="logo.png" alt="hellochef" className="logo" />
            </div>
            <ul className="navbar-links">
                <li><Link to="/">Our Plans</Link></li>
                <li><Link to="/">Weekly Menu</Link></li>
                <li><Link to="/">How It Works</Link></li>
            </ul>
            <div className="navbar-signin">
                <Link to="/signin" className="signin-btn">Sign in</Link>
            </div>
        </nav>
    );
};

export default Navbar;
