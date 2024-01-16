import React, { useState, useEffect } from "react";

const Home = () => {
  const [rows, setRows] = useState([{ sign: "+", value: 0, enabled: true }]);

  const calculateResult = () => {
    return rows.reduce(
      (total, row) =>
        row.enabled
          ? row.sign === "+"
            ? total + row.value
            : total - row.value
          : total,
      0
    );
  };

  const updateRow = (index, property, value) => {
    setRows((prevRows) => {
      const newRows = [...prevRows];
      newRows[index][property] = value;
      return newRows;
    });
  };

  const addRow = () => {
    setRows((prevRows) => [
      ...prevRows,
      { sign: "+", value: 0, enabled: true },
    ]);
  };

  const removeRow = (index) => {
    setRows((prevRows) => prevRows.filter((_, i) => i !== index));
  };

  const toggleRow = (index) => {
    updateRow(index, "enabled", !rows[index].enabled);
  };

  useEffect(() => {
    // Update the result whenever rows are modified
    const result = calculateResult();
    console.log("Result:", result);
  }, [rows]);

  return (
    <div className="flex flex-col gap-10">
      <button
        className="bg-green-500 cursor-pointer text-white uppercase rounded-2xl px-5 py-2"
        onClick={addRow}
      >
        Add row
      </button>

      {rows.map((row, index) => (
        <div
          className="flex gap-5 border bg-gray-300 rounded-md p-5"
          key={index}
        >
          <select
            value={row.sign}
            onChange={(e) => updateRow(index, "sign", e.target.value)}
          >
            <option value="+">+</option>
            <option value="-">-</option>
          </select>
          <input
            className="bg-gray-400"
            type="number"
            value={row.value}
            onChange={(e) =>
              updateRow(index, "value", parseInt(e.target.value, 10) || 0)
            }
          />
          <div className="flex gap-2">
            <button onClick={() => removeRow(index)}>Delete</button>
            <button onClick={() => toggleRow(index)}>
              {row.enabled ? "Disable" : "Enable"}
            </button>
          </div>
        </div>
      ))}
      <div>Result: {calculateResult()}</div>
    </div>
  );
};

export default Home;
