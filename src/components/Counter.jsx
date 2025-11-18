import { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);
  const myAudio = new Audio("click.wav");

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
    myAudio.play();
  };
  return (
    <main>
      <button name="dec" onClick={(e) => handleClick(e)}>
        -
      </button>
      <div className="number">
        <p>{count}</p>
      </div>
      <button name="inc" onClick={(e) => handleClick(e)}>
        +
      </button>
    </main>
  );
};

export default Counter;
