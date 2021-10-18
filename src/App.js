import Header from "./Header";
import Footer from "./Footer";
import Features from "./Features";
import Comments from "./Comments";

function App({inventory, cart, total}) {
  return (
    <div className="App">
      <Header />
      <Features />
      <Comments />
      <Footer />
    </div>
  );
}

export default App;
