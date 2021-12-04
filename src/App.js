import "./App.css";
import NavBar from "./Component/NavBar";
import Home from "./Component/Home";
import About from "./Component/About";
import Portfolio from "./Component/Portfolio";
import Contact from "./Component/Contact";
import Quiz from "./Component/Quiz";
import Experience from "./Component/Experience";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Home />
      <About />
      <Experience />
      <Portfolio />
      <Quiz />
      <Contact />
    </div>
  );
}

export default App;
