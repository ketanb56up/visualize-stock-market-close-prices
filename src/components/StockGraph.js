import React, { useEffect, useState } from "react";
import { Line } from "react-chartjs-2";

function StockGraph(props) {
  const { StockData } = props;
  const [stocks, setstocks] = useState([]);
  const [closePrice, setClosePrice] = useState([]);
  const stocks_array = [];
  const close_price_array = [];

  useEffect(async () => {
    for (let i = 0; i < StockData.length; i++) {
      stocks_array.push(StockData[i].date);
      close_price_array.push(StockData[i].close_price);
    }
    setstocks(stocks_array);
    setClosePrice(close_price_array);
  }, [StockData]);

  const data = {
    labels: stocks,
    datasets: [
      {
        label: "Close price",
        data: closePrice,
        borderColor: [
          "rgba(172, 165, 240, 0.9);",
          "rgba(172, 165, 240, 0.9);",
          "rgba(172, 165, 240, 0.9);",
          "rgba(172, 165, 240, 0.9);",
          "rgba(172, 165, 240, 0.9);",
        ],
        backgroundColor: [
          "rgba(172, 165, 240, 0.9);",
          "rgba(172, 165, 240, 0.9);",
          "rgba(172, 165, 240, 0.9);",
          "rgba(172, 165, 240, 0.9);",
          "rgba(172, 165, 240, 0.9);",
        ],
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: true
  };
  return (
    <div className="stockGraph">
      {StockData.length <= 0 ? (
        <h1>Sorry No Maching Records</h1>
      ) : (
        <Line data={data} options={options} />
      )}
    </div>
  );
}

export default StockGraph;
