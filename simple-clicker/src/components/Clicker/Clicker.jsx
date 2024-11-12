import React, { useState } from "react";

function Clicker() {
  const [clickCount, setClickCount] = useState(0);
  const [inputValue, setInputValue] = useState("");

  return (
    <div className="container">
      <div className="container__block">
        <p className="block__title txt"> Кликов: {clickCount} </p>
        <button
          onClick={() => setClickCount((prevCount) => prevCount + 1)}
          className="block__btn txt"
        >
          Нажми меня!
        </button>
      </div>
      <div className="container__block">
        <p className="block__title txt"> {inputValue === "" ? "Никто не пишет..." : inputValue} </p>
        <input
          onChange={(event) => setInputValue(event.target.value)}
          className="block__input txt"
          type="text"
          value={inputValue}
          placeholder="Напиши что-нибудь..."
        />
      </div>
    </div>
  );
}

export default Clicker;
