import Nav from "./components/Nav";
import Footer from "./components/Footer";
import Home from "./components/home/Home";
import Search from "./components/search/Search";

function App() {
  return (
    <div className="app">
      <Nav />
      <Home />
      <Search />
      <Footer />
    </div>
  );
}

export default App;
