import Header from "./Header";
import Footer from "./Footer";
import Card from "./Card";

const Shop = ({inventory,setCart, cart}) => {
  let isButton = true;
  const addItemToCart = (item) => {
       let index = cart.findIndex(cartItem=>cartItem.id===item.id);
       if(index>-1){
       let newCart = cart.slice();
       newCart[index].number++;
       setCart([...newCart]);
       }
       else{
         setCart([...cart, item]);
       }
  }
  return (
    <div>
      <Header cart={cart}/>
      <h2>Inventory</h2>
       {
         inventory.map((item)=>{
             return <Card key={item.id} name={item.name} price={item.price} isButton={isButton} onAdd={addItemToCart} item={item}/>
         })
       }
      <Footer />
    </div>
  );
};

export default Shop;
