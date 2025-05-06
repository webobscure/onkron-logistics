import React, { useState } from "react";
import Header from "../../Header";
import Footer from "../../components/Footer/Footer";
import "./Calculator.css";
import { useLanguage } from "../../context/LanguageContext";

export default function Calculator() {
  const options = [
    { value: "2", label: "2 kg" },
    { value: "4", label: "4 kg" },
    { value: "6", label: "6 kg" },
    { value: "8", label: "8 kg" },
    { value: "10", label: "10 kg" },
  ];
    const { translations } = useLanguage()
  
  const [isCalculated, setIsCalculated] = useState(false);
  const [selected, setSelected] = useState("");
  const [shipQuantity, setShipQuantity] = useState("");
  const [itemsQuantity, setItemsQuantity] = useState("");
  const [storageQuantity, setStorageQuantity] = useState("");
  const [errors, setErrors] = useState({});
  const [orderCost, setOrderCost] = useState("");
  const [totalPickingCost, setTotalPickingCost] = useState("");
  const [storageCost, setStorageCost] = useState("");
  const [totalCost, setTotalCost] = useState("");
  const isFormComplete =
    selected &&
    shipQuantity &&
    itemsQuantity &&
    storageQuantity &&
    !errors.selected &&
    !errors.shipQuantity &&
    !errors.itemsQuantity &&
    !errors.storageQuantity;
  const BASE_ITEM_PICK_COST = 0.72;
  const PALLET_COST = 21.0;

  const handleCalculate = () => {
    const newErrors = {};
    if (!selected) newErrors.selected = true;
    if (!shipQuantity) newErrors.shipQuantity = true;
    if (!itemsQuantity) newErrors.itemsQuantity = true;
    if (!storageQuantity) newErrors.storageQuantity = true;

    setErrors(newErrors);

    const hasErrors = Object.keys(newErrors).length > 0;
    if (hasErrors) {
      setIsCalculated(false);
      return;
    }

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
    setIsCalculated(true);
  };

  return (
    <>
      <Header />
      <div className="container ">
        <div className="calc-info">
          <div className="text_column">
            <h2>               {translations.full_service_title }
            </h2>
          </div>
          <div className="text_column">
            <p>
            {translations.full_service_descr }
            </p>
          </div>
        </div>
        <div className="calculator-block">
          <div className="calculator-block-left">
            <div className="calculator-block-left__item">
              <label>1. {translations.avr_parcels }</label>
              <select
                value={selected}
                onChange={(e) => {
                  setSelected(e.target.value);
                  if (errors.selected && e.target.value) {
                    setErrors((prev) => ({ ...prev, selected: false }));
                  }
                }}
                className={`calc-input ${errors.selected ? "input-error" : ""}`}
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
                2. {translations.avr_ships }
              </label>
              <input
                type="number"
                min="0"
                className={`calc-input ${
                  errors.shipQuantity ? "input-error" : ""
                }`}
                value={shipQuantity}
                onChange={(e) => {
                  setShipQuantity(e.target.value);
                  if (errors.shipQuantity && e.target.value) {
                    setErrors((prev) => ({ ...prev, shipQuantity: false }));
                  }
                }}
              />
            </div>
            <div className="calculator-block-left__item">
              <label>3. {translations.avr_items }</label>
              <input
                type="number"
                min="0"
                className={`calc-input ${
                  errors.shipQuantity ? "input-error" : ""
                }`}
                value={itemsQuantity}
                onChange={(e) => {
                  setItemsQuantity(e.target.value);
                  if (errors.itemsQuantity && e.target.value) {
                    setErrors((prev) => ({ ...prev, itemsQuantity: false }));
                  }
                }}
              />
            </div>
            <div className="calculator-block-left__item">
              <label>4. {translations.qty_pallets }</label>
              <input
                type="number"
                min="0"
                className={`calc-input ${
                  errors.shipQuantity ? "input-error" : ""
                }`}
                value={storageQuantity}
                onChange={(e) => {
                  setStorageQuantity(e.target.value);
                  if (errors.storageQuantity && e.target.value) {
                    setErrors((prev) => ({ ...prev, storageQuantity: false }));
                  }
                }}
              />
            </div>
            <div className="calculator-block-left__item">
              <button
                className="calculate-button"
                onClick={handleCalculate}
                disabled={!isFormComplete}
              >
               {translations.calculate || 'Calculate'}
              </button>
            </div>
           
          </div>
          <div className="calculator-block-right">
            <div className="result-block">
              <div className="calculator-block-right__item">
                <p>{translations.cost_pick }</p>
                <p>{orderCost && `${orderCost} £`}</p>
              </div>
              <div className="calculator-block-right__item">
                <p>{translations.total_pick }</p>
                <p>{totalPickingCost && `${totalPickingCost} £`}</p>
              </div>
              <div className="calculator-block-right__item">
                <p>{translations.cost_stor }</p>
                <p>{storageCost && `${storageCost} £`}</p>
              </div>
            </div>
            <div className="calculator-block-right__item result-line">
              <p>{translations.total_cost }</p>
              <p>{totalCost && `${totalCost} £`}</p>
            </div>
            <button className="request-qoute">{translations.request_quote }</button>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
