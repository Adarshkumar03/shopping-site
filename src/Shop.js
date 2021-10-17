import Header from "./Header";
import Footer from "./Footer";
import Cart from "./Cart";
import Card from "./Card";

const Shop = () => {
  return (
    <div>
      <Cart />
      <Header />
      <h2>Inventory</h2>
      <Card img="#" name="Some name" price="3"/>
      <Card img="#" name="Some name" price="4"/>
      <Card img="#" name="Some name" price="1"/>
      <Card img="#" name="Some name" price="6"/>
      <Card img="#" name="Some name" price="2"/>
      <Card img="#" name="Some name" price="10"/>
      <Footer />
    </div>
  );
};

export default Shop;
