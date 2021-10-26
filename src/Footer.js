import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faFacebookSquare, faPinterest, faInstagram } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
    return (<footer>
            <div className="footer-content">
                <h5 className="footer-header">SOCIAL</h5>
                <hr/>
                <div className="social-icons">
                   <FontAwesomeIcon icon={faFacebookSquare}/>
                   <FontAwesomeIcon icon={faPinterest}/>
                   <FontAwesomeIcon icon={faInstagram}/>
                </div>
                <h5>SHOPINIST 2021 BY ADARSH KUMAR</h5>
            </div>
    </footer>);
}

export default Footer;