import React, { useState, useEffect } from "react";

const Home = () => {
  const [rows, setRows] = useState([{ sign: "+", value: 0, enabled: true }]);

  // this function calculates the result of the mathematical operations defined by the rows in the calculator,
  // considering the signs (+ or -) and the enabled/disabled status of each row.
  // The result is the sum or difference of the values in the enabled rows.

  const resultCal = () => {
    return rows.reduce(
      (oldResult, row) =>
        row.enabled
          ? row.sign === "-"
            ? oldResult - row.value
            : oldResult + row.value
          : oldResult,
      0
    );
  };

  const updateRow = (index, property, value) => {
    setRows((prevRows) => {
      return prevRows.map((row, rowIndex) => {
        rowIndex === index) {
          return { ...row, [property]: value };
        }
        return row;
      });
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
    // We update result when rows change
    resultCal();
  }, [rows]);

  return (
    <div className="flex flex-col gap-10">
      <button
        className="bg-green-500 cursor-pointer text-white uppercase rounded-md px-5 py-2"
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
            className="bg-gray-300 p-2"
            value={row.sign}
            onChange={(e) => updateRow(index, "sign", e.target.value)}
          >
            <option className="p-2" value="+">
              +
            </option>
            <option className="p-2" value="-">
              -
            </option>
          </select>
          <input
            className="bg-gray-300 p-2"
            type="number"
            value={row.value}
            onChange={(e) =>
              updateRow(index, "value", parseInt(e.target.value, 10) || "")
            }
          />
          <div className="flex gap-2 bg-gray-300 p-2">
            <button
              className="bg-red-500 p-2 rounded-md text-white"
              onClick={() => removeRow(index)}
            >
              Delete
            </button>
            <button
              className="bg-gray-600 p-2 rounded-md text-white"
              onClick={() => toggleRow(index)}
            >
              {!row.enabled ? "Enable" : "Disable"}
            </button>
          </div>
        </div>
      ))}
      <div
        className={`w-full flex gap-5 ${
          resultCal() < 0 && "bg-red-600"
        } bg-blue-500 p-2 rounded-md text-white uppercase justify-center items-center`}
      >
        Result : {resultCal()}
      </div>
    </div>
  );
};

export default Home;
