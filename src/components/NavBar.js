import { useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Context from '../Context';
import '../styles/NavBar.css';

const NavBar = () => {
    const { page, setPage } = useContext(Context);
    useEffect(() => {
        setPage(+1);
    });

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
