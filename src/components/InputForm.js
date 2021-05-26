import React, { useState } from "react";

const InputForm = (props) => {
  const { setInputData } = props;
  const [inputlist, setInputList] = useState("");

  const itemEvent = (event) => {
    setInputList(event.target.value);
  };

  const listOfItems = () => {
    setInputList('');
    setInputData(inputlist);
  };

  return (
    <div className="mainContainer">
      <div>
        <h1>Welcome to Visual stock market close price</h1>
        <h3>Here are some example of stocks name:</h3>
        <h5>NVMZ, NESRW, NRACU, OCFCP, OEPWU, NOCT, NEBCW, OCA.WS, NXU.U, NBTX, NMMC etc.</h5>
      </div>
      <div className="inputBox">
        <input type="text"
          placeholder="Enter Stock Name" 
          value={inputlist}
          onChange={itemEvent} />
        <button onClick={listOfItems}> Search </button>
      </div>

    </div>
  );
};

export default InputForm;
