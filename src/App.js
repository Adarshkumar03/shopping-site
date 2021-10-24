import Header from "./Header";
import Footer from "./Footer";
import Features from "./Features";
import Comments from "./Comments";
import Cart from "./Cart";
import Main from "./Main";

function App({cart, onAdd, onRemove}) {
  return (
    <div className="App">
      <Cart cart={cart} onAdd={onAdd} onRemove={onRemove}/>
      <Header/>
      <main>
        <Main/>
        <Features />
        <Comments />
      </main>   
      <Footer />
    </div>
  );
}

export default App;
