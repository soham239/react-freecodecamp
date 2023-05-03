import "./style.css";
import About from "./components/About";
import Footer from "./components/Footer";
import Info from "./components/Info";
import Interests from "./components/Interests";
import photo from "./images/photo.png";

function App() {
  return (
    <div className="container">
      <img src={photo} alt="Profile Pic" className="picture" />
      <div className="main">
        <Info />
        <About />
        <Interests />
      </div>
      <Footer />
    </div>
  );
}

export default App;
