import {Link} from "react-router-dom";

const Header = ({cart, onAdd, onRemove}) => {
    return (<header>
        <nav>
            <h1>Shopinist</h1>
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/shop">Shop</Link>
                </li>
            </ul>
        </nav>
    </header>)
}

export default Header;