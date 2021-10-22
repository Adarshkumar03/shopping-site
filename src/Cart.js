const Cart = ({cart}) => {
    let total = cart.reduce((sum, item)=>{
       return sum + (item.price*item.number);
    }, 0);
    let noOfItems = cart.reduce((sum, item)=>{
        return sum+item.number;
    }, 0)
    console.log(total);
    return (<div>
        <p>Total: ${total} ({noOfItems}) items </p>
        <button>Basket</button>
    </div>);
}

export default Cart;