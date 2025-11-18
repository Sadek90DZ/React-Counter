import { useState } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
function App() {
  const [count, setCount] = useState(0);
  const handleClick = (e) => {
    const { name } = e.target;
    if (name === "inc") {
      setCount(count + 1);
      if (count >= 100) {
        setCount(0);
      }
    } else {
      setCount(count - 1);
      if (count <= -100) {
        setCount(0);
      }
    }
  };

  return (
    <div className="container">
      <Header />
      <div className="counter">
        <button name="inc" onClick={(e) => handleClick(e)}>
          +
        </button>
        <div className="number">
          <p>{count}</p>
        </div>
        <button name="dec" onClick={(e) => handleClick(e)}>
          -
        </button>
      </div>
      <Footer />
    </div>
  );
}

export default App;
