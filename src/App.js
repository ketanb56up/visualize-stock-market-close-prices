import React, { useEffect, useState } from "react";
import "./App.css";
import InputForm from "./components/InputForm";
import StockGraph from "./components/StockGraph";
import { showStock } from "./services/stock_api";

function App() {
  const [inputData, setInputData] = useState("");
  const [stockData, setStockData] = useState([]);

  useEffect(async () => {
    await showStock(inputData).then((data) => {
      setStockData(data);
    });
  }, [inputData]);

  return (
    <div className="App">
      <InputForm setInputData={setInputData}/>
      <StockGraph StockData={stockData} setStockData={setStockData}/>
    </div>
  );
}

export default App;
