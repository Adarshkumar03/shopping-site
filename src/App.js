import Header from "./Header";
import Footer from "./Footer";
import Features from "./Features";
import Comments from "./Comments";

function App({cart, onAdd, onRemove}) {
  return (
    <div className="App">
      <Header cart={cart} onAdd={onAdd} onRemove={onRemove}/>
      <Features />
      <Comments />
      <Footer />
    </div>
  );
}

export default App;
