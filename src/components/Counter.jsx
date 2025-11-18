import { useState } from "react";

const Counter = (props) => {
  //Deconstructe the useState function.
  const [count, setCount] = useState(0);
  var opacity = 0.5;
  //Store my audio file on a variable.
  const myAudio = new Audio("click.wav");

  //Handeling the click on +, - buttons.
  const handleClick = (e) => {
    //Deconstructe the name propriety from e.target.
    const { name } = e.target;
    //Check if it's an increase or a decrease action.
    if (name === "inc") {
      setCount(count + 1); //incriment by 1.
      opacity = opacity - (count / 200).toFixed(2);
      //Reset the count to 0 if it surpasses the 99.
      if (count >= 100) {
        setCount(0);
        opacity = 0.5;
      }
    } else {
      setCount(count - 1); //decriment by 1.
      opacity = opacity - (count / 200).toFixed(2);
      //Reset the count to 0 if it goes below -99.
      if (count <= -100) {
        setCount(0);
        opacity = 0.5;
      }
    }
    props.onChangeOpacity(opacity);
    myAudio.play(); //Play the audio file stored on myAudio
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
