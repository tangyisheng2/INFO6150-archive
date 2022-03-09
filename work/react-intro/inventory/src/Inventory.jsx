import { useState } from "react";

function Inventory() {
  const [itemName, setItemName] = useState("Default Item");
  const [inventory, setInventory] = useState(5);

  return (
    <div className="inventory">
      <p className="current-inventory">
        {itemName}: {inventory}
      </p>
      <div className="operation">
        <label className="name__operation">
          Set Item Name:{" "}
          <input
            type="text"
            onInput={(e) =>
              setItemName(e.target.value ? e.target.value : "Default Item")
            }
          />
        </label>
        <div className="inventory__operation">
        <button
          className="add"
          onClick={() => {
            setInventory(inventory + 1);
          }}
        >
          +
        </button>
        <button
          className="minus"
          disabled={!inventory}
          onClick={() => {
            setInventory(inventory - 1);
          }}
        >
          -
        </button>
        <button
          className={`reorder ${inventory ? "hidden" : ""}`}
          onClick={() => {
            setInventory(5);
          }}
        >
          Reorder
        </button>
        </div>
      </div>
    </div>
  );
}
export default Inventory;
