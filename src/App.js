import Header from "./Header";
import Footer from "./Footer";
import Features from "./Features";
import Comments from "./Comments";

function App({cart}) {
  return (
    <div className="App">
      <Header cart={cart}/>
      <Features />
      <Comments />
      <Footer />
    </div>
  );
}

export default App;
