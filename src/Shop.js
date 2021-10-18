import Header from "./Header";
import Footer from "./Footer";
import Card from "./Card";

const Shop = ({inventory, cart, total}) => {
  let isButton = true;
  
  return (
    <div>
      <Header />
      <h2>Inventory</h2>
       {
         inventory.map((item,index)=>{
             return <Card name={item.name} price={item.price} isButton={isButton}/>
         })
       }
      <Footer />
    </div>
  );
};

export default Shop;
