const Cart = ({cart, onAdd, onRemove}) => {
    let total = cart.reduce((sum, item)=>{
       return sum + (item.price*item.number);
    }, 0);
    let noOfItems = cart.reduce((sum, item)=>{
        return sum+item.number;
    }, 0);
    return (<div>
        <p>Total: ${total} ({noOfItems}) items </p>
        <button>Cart</button>
        {   
            cart.map((item)=>{
                return (<div>
                  <h3>{item.name}</h3>
                  <h4>{item.price}</h4>
                  <h4>Number:{item.number}</h4>
                  <button onClick={()=>{onAdd(item)}}>Add</button>    
                  <button onClick={()=>{onRemove(item)}}>Remove</button>    
                </div>);
            })
        }
    </div>);
}

export default Cart;