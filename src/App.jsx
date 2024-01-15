import "./App.css";

//Components
import Header from "./components/Header/Header";
import MenuPrincipal from "./components/MenuPrincipal/MenuPrincipal";
import NavBar from "./components/NavBar/NavBar";
import Footer from "./components/Footer/Footer";
function App() {
  return (
    <div className="App">
      <Header />
      <NavBar />
      <MenuPrincipal />
      <Footer />
    </div>
  );
}

export default App;
