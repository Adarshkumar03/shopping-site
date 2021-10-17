import Header from "./Header";
import Footer from "./Footer";
import Cart from "./Cart";
import Card from "./Card";

const Shop = () => {
  return (
    <div>
      <Cart />
      <Header />
      <Card img="#" name="Some name" price="2.0" />
      <Card img="#" name="Some name" price="2.0" />
      <Card img="#" name="Some name" price="2.0" /> 
      <Footer />
    </div>
  );
};

export default Shop;
