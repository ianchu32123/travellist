import "./index1.css";
import React, { useState } from "react";

export default function Form({ onadditems }) {
  const [description, Setdescription] = useState("");
  const [quantity, Setquantity] = useState(1);

  function handlesubmit(e) {
    e.preventDefault(); //預防網頁重新加載

    if (!description) return null;
    const newItem = {
      description,
      quantity,
      packed: false,
      id: +Date.now(),
    }; /* datenow()會生成全新id */
    console.log(newItem);
    onadditems(newItem);

    Setdescription("");
    Setquantity(1);
  }

  return (
    <form className="add-form" onSubmit={handlesubmit}>
      <h3>你旅行時需要用到甚麼</h3>
      <select value={quantity} onChange={(e) => Setquantity(e.target.value)}>
        {Array.from({ length: 20 }, (_, i) => i + 1).map((num) => (
          <option value={num} key={num}>
            {num}
          </option>
        ))}
      </select>
      <input
        type="text"
        placeholder="Item..."
        value={description}
        onChange={(e) => Setdescription(e.target.value)}
      />
      <button>ADD</button>
    </form>
  );
}
