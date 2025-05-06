import React, { useState } from "react";
import Header from "../../Header";
import Footer from "../../components/Footer/Footer";
import "./Calculator.css";

export default function Calculator() {
  const options = [
    { value: "2", label: "2 kg" },
    { value: "4", label: "4 kg" },
    { value: "6", label: "6 kg" },
    { value: "8", label: "8 kg" },
    { value: "10", label: "10 kg" },
  ];

  const [selected, setSelected] = useState("");
  const [shipQuantity, setShipQuantity] = useState("");
  const [itemsQuantity, setItemsQuantity] = useState("");
  const [storageQuantity, setStorageQuantity] = useState("");

  const [orderCost, setOrderCost] = useState("");
  const [totalPickingCost, setTotalPickingCost] = useState("");
  const [storageCost, setStorageCost] = useState("");
  const [totalCost, setTotalCost] = useState("");

  const BASE_ITEM_PICK_COST = 0.72;
  const PALLET_COST = 21.0;

  const handleCalculate = () => {
    const parsedShipQuantity = parseInt(shipQuantity);
    const parsedItemsQuantity = parseInt(itemsQuantity);
    const parsedStorageQuantity = parseInt(storageQuantity);

    const orderCost = BASE_ITEM_PICK_COST * parsedItemsQuantity;
    const totalPicking = orderCost * parsedShipQuantity;
    const storage = PALLET_COST * parsedStorageQuantity;
    const total = totalPicking + storage;

    setOrderCost(orderCost.toFixed(2));
    setTotalPickingCost(totalPicking.toFixed(2));
    setStorageCost(storage.toFixed(2));
    setTotalCost(total.toFixed(2));
  };

  return (
    <>
      <Header />
      <div className="container ">
        <div className="calc-info">
          <div className="text_column">
            <h2>Fulfillment Service Cost Calculator</h2>
          </div>
          <div className="text_column">
            <p>
              Use our handy 3PL cost calculator for a quick estimate of the cost
              of warehousing and fulfillment services for your business.
            </p>
          </div>
        </div>
        <div className="calculator-block">
          <div className="calculator-block-left">
            <div className="calculator-block-left__item">
              <label>1. Average weight of your parcels</label>
              <select
                value={selected}
                onChange={(e) => setSelected(e.target.value)}
                className="calc-input"
              >
                <option value=""></option>
                {options.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>
            </div>
            <div className="calculator-block-left__item">
              <label>
                2. How many orders do you ship on average per month?
              </label>
              <input
                type="number"
                min="0"
                className="calc-input"
                value={shipQuantity}
                onChange={(e) => setShipQuantity(e.target.value)}
              />
            </div>
            <div className="calculator-block-left__item">
              <label>3. What is the average number of items per order?</label>
              <input
                type="number"
                min="0"
                className="calc-input"
                value={itemsQuantity}
                onChange={(e) => setItemsQuantity(e.target.value)}
              />
            </div>
            <div className="calculator-block-left__item">
              <label>4. How many pallets do you need for storage?</label>
              <input
                type="number"
                min="0"
                className="calc-input"
                value={storageQuantity}
                onChange={(e) => setStorageQuantity(e.target.value)}
              />
            </div>
            <div className="calculator-block-left__item">
              <button className="calculate-button" onClick={handleCalculate}>
                Calculate
              </button>
            </div>
          </div>
          <div className="calculator-block-right">
            <div className="result-block">
              <div className="calculator-block-right__item">
                <p>Cost of order picking and packing (per order):</p>
                <p>{orderCost && `${orderCost} £`}</p>
              </div>
              <div className="calculator-block-right__item">
                <p>Total picking and packing cost:</p>
                <p>{totalPickingCost && `${totalPickingCost} £`}</p>
              </div>
              <div className="calculator-block-right__item">
                <p>Cost of storing all pallets:</p>
                <p>{storageCost && `${storageCost} £`}</p>
              </div>
            </div>
            <div className="calculator-block-right__item result-line">
              <p>Total monthly service cost:</p>
              <p>{totalCost && `${totalCost} £`}</p>
            </div>
            <button className="request-qoute">Request a quote</button>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
