import { useState } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Counter from "./components/Counter";
function App() {
  const [opacity, setOpacity] = useState(0.5);
  const changeOpacity = (opa) => {
    setOpacity(opa);
  };

  return (
    <div
      className="container"
      style={{ backgroundColor: "rgba(240,240,240," + opacity + ")" }}
    >
      <Header />
      <Counter onChangeOpacity={changeOpacity} />
      <Footer />
    </div>
  );
}

export default App;
