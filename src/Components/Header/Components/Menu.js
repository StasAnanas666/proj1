import { Link } from "react-router-dom";

function Menu() {
    return (
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
                <Link className="nav-link" to="/">
                    Главная
                </Link>
            </li>
            <li className="nav-item">
                <Link className="nav-link" to="/gallery">
                    Галерея
                </Link>
            </li>
            <li className="nav-item">
                <Link className="nav-link" to="/contacts">
                    Контакты
                </Link>
            </li>
        </ul>
    );
}

export default Menu;
