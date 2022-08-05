import { Link } from 'react-router-dom';
import '../styles/NavBar.css';

const NavBar = ({ page }) => {
    return (
        <nav>
            <h1>
                <Link to="/" className="nav-link">
                    flexbox music
                </Link>
            </h1>
            <Link to="/page">page {page + 1}</Link>
        </nav>
    );
};

export default NavBar;
