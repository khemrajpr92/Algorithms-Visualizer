import React, { useState, useEffect } from "react";

export default function Number({ value, index, setArray, color }) {
  const [number, setNumber] = useState(value);

  const colors = ["grey", "#87bdd8", "green", "red"];

  useEffect(() => {
    setNumber(value);
  }, [value]);

  return (
    <div style={{ background: colors[color] }} className="number-capsule">
      <input
        className="number"
        type="number"
        value={number}
        onChange={(e) => {
          setNumber(parseInt(e.target.value));
          setArray(parseInt(e.target.value), index);
        }}
      />
    </div>
  );
}
