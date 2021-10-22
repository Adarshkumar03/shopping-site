import Cart from "./Cart";
import {Link} from "react-router-dom";

const Header = ({cart}) => {
    return (<header>
        <Cart cart={cart}/>
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
    </header>)
}

export default Header;