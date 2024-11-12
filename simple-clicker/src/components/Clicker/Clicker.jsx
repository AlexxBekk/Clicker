import React, { useState } from "react";

function Clicker() {
  const [clickCount, updateCount] = useState(0);
  const [inputValue, setInputValue] = useState("");

  function defaultValue(value) {
    return value === "" ? "Никто не пишет..." : value;
  }

  return (
    <div className="container">
      <div className="container__block">
        <p className="block__title txt"> Кликов: {clickCount} </p>
        <button
          onClick={() => updateCount(clickCount + 1)}
          className="block__btn txt"
        >
          Нажми меня!
        </button>
      </div>
      <div className="container__block">
        <p className="block__title txt"> {defaultValue(inputValue)} </p>
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
