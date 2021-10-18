import Cart from "./Cart";
import {Link} from "react-router-dom";

const Header = () => {
    return (<div>
        <Cart/>
        <h3>Shopinist</h3>
        <nav>
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/shop">Shop</Link>
                </li>
            </ul>
        </nav>
    </div>)
}

export default Header;