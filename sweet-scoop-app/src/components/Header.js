import {Link} from "react-router-dom";

function Header() {
    return (
        <header id="page_header">
        <div>
            <div>
                <img src="/images/logo.webp" alt="Sweet Scoop Ice Cream Logo" />
            </div>
        </div>
        <div>
            <h3>Sweet Scoop Ice Cream</h3>
        </div>
        <div className="navbar">
            <Link to="/">Home</Link>
            <Link to="/flavors">Flavors</Link>
            <Link to="/login">Login</Link>
        </div>
    </header>
    );
}

export default Header;