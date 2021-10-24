import {useState} from "react";

const Cart = ({cart, onAdd, onRemove}) => {
    let total = cart.reduce((sum, item)=>{
       return sum + (item.price*item.number);
    }, 0);
    const [isOpen, setIsOpen] = useState(false);
    let noOfItems = cart.reduce((sum, item)=>{
        return sum+item.number;
    }, 0);
    return (<section className="cart">
        <button onClick={()=>{setIsOpen(true)}}>Total: ${total} ({noOfItems}) items </button>
        {   
            isOpen?(cart.length?(cart.map((item)=>{
                return (<div>
                  <h3>{item.name}</h3>
                  <h4>${item.price}</h4>
                  <h4>Number:{item.number}</h4>
                  <button onClick={()=>{onAdd(item)}}>Add</button>    
                  <button onClick={()=>{onRemove(item)}}>Remove</button>    
                </div>);
            })):(<h3>Your cart is empty</h3>)):null
        }
        {isOpen&&<div><button onClick={()=>{setIsOpen(false)}}>Close</button><button>Checkout</button></div>}
    </section>);
}

export default Cart;