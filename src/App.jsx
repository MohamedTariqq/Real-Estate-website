import "./App.css";
import Companies from "./Components/Companies/Companies";
import Contact from "./Components/Contact/Contact";
import Header from "./Components/Header/Header";
import Hero from "./Components/Hero/Hero";
import Residencies from "./Components/Residencies/Residencies";
import Value from "./Components/Value/Value";
import Footer from "./Footer/Footer";
import GetStarted from "./GetStarted/GetStarted";
function App() {
  return (
    <div className="App">
      <div>
        <div className="WhiteGradient" />
        <Header />
        <Hero />
      </div>
      <Companies />
      <Residencies />
      <Value />
      <Contact />
      <GetStarted />
      <Footer />
    </div>
  );
}

export default App;
