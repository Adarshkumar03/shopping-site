import Header from "./Header";
import Footer from "./Footer";
import Card from "./Card";
import Cart from "./Cart";

const Shop = ({inventory,cart, onAdd, onRemove}) => {
  let isButton = true;
  return (
    <div>
      <Cart cart={cart} onAdd={onAdd} onRemove={onRemove}/>
      <Header/>
      <div className="shop-heading">
        <img src="https://res.cloudinary.com/twenty20/private_images/t_standard-fit/v1615485908/photosp/ffabd711-a0e1-4769-a492-65f1c57b76d5/ffabd711-a0e1-4769-a492-65f1c57b76d5.jpg" alt=""/>
        <h1>SHOP</h1>
      </div>
       <div className="shop-items"> 
       {
         inventory.map((item)=>{
             return <Card 
             key={item.id} 
             name={item.name} 
             price={item.price} 
             isButton={isButton} 
             onAdd={onAdd} 
             item={item}
             cl="shop-item"
             img={item.imgUrl}  
             />
         })
       }
       </div>
      <Footer />
    </div>
  );
};

export default Shop;
