import { useState } from "react";
import Reorder from "./Reorder";

function Inventory() {
  const [itemName, setItemName] = useState("Default Item");
  const [inventory, setInventory] = useState(5);
  let reorderWrapperClassName = "wrapper hidden";

  if (!inventory) {
    reorderWrapperClassName = "wrapper";
  }

  return (
    <div className="inventory">
      <p className="current-inventory">
        {itemName}: {inventory}
      </p>
      <div className="operation">
        <label className="name-operation">
          Set Item Name:{" "}
          <input
            type="text"
            onInput={(e) =>
              setItemName(e.target.value ? e.target.value : "Default Item")
            }
          />
        </label>
        <div className="inventory-operation">
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
          <div className={reorderWrapperClassName}>
            <Reorder onReorder={setInventory}/>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Inventory;
