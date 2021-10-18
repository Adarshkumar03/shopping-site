import Header from "./Header";
import Footer from "./Footer";
import Card from "./Card";

const Shop = () => {
  let isButton = true;
  return (
    <div>
      <Header />
      <h2>Inventory</h2>
      <Card img="#" name="Some name" price="3" isButton={isButton}/>
      <Card img="#" name="Some name" price="4" isButton={isButton}/>
      <Card img="#" name="Some name" price="1" isButton={isButton}/>
      <Card img="#" name="Some name" price="6" isButton={isButton}/>
      <Card img="#" name="Some name" price="2" isButton={isButton}/>
      <Card img="#" name="Some name" price="10" isButton={isButton}/>
      <Footer />
    </div>
  );
};

export default Shop;
