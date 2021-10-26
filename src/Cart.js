import {useState} from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faMinus } from '@fortawesome/free-solid-svg-icons';

const Cart = ({cart, onAdd, onRemove}) => {
    let total = cart.reduce((sum, item)=>{
       return sum + (item.price*item.number);
    }, 0);
    const [isOpen, setIsOpen] = useState(false);
    let noOfItems = cart.reduce((sum, item)=>{
        return sum+item.number;
    }, 0);
    return (<section className="cart">
        <button onClick={()=>{setIsOpen(true)}}>Total: ${total} ({noOfItems} items) </button>
        {   
            isOpen?(cart.length?(cart.map((item)=>{
                return (<div className="cart-item">
                  <img src={item.imgUrl} alt={item.name}/>
                  <h3>{item.name}</h3>
                  <h4>${item.price}</h4>
                  <h4>Number:{item.number}</h4>
                  <div className="cart-btn">
                    <button onClick={()=>{onAdd(item)}}><FontAwesomeIcon icon={faPlus}/></button>    
                    <button onClick={()=>{onRemove(item)}}><FontAwesomeIcon icon={faMinus}/></button>
                  </div>    
                </div>);
            })):(<h3>Your cart is empty</h3>)):null
        }
        {isOpen&&<div><button onClick={()=>{setIsOpen(false)}}>Close</button><button>Checkout</button></div>}
    </section>);
}

export default Cart;