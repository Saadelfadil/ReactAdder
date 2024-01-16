import React, { useState, useEffect, useCallback } from "react";
import NoRows from "../assets/images/no_rows.png";
const Home = () => {
  const [rows, setRows] = useState([]);

  
  const resultCal = useCallback(() => {
    return rows.reduce(
      (oldResult, row) =>
        row.enabled
          ? row.sign === "-"
            ? oldResult - row.value
            : oldResult + row.value
          : oldResult,
      0
    );
  }, [rows]);


  const updateRow = (index, property, value) => {
    setRows((prevRows) => {
      return prevRows.map((row, rowIndex) => {
        if (rowIndex === index) return { ...row, [property]: value };
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
    const result = resultCal();
    console.log("result", result);
  }, [resultCal, rows]);

  return (
    <div className="flex flex-col gap-10 w-[500px]">
      <button
        className="bg-orange-400 hover:bg-green-500 cursor-pointer text-white uppercase rounded-md px-5 py-2"
        onClick={addRow}
      >
        Add row
      </button>

      {rows.length === 0 ? (
        <>
          <h1 class="mb-4 text-2xl text-center font-extrabold leading-none tracking-tight text-gray-900 dark:text-white">
            <span class="text-blue-600 dark:text-blue-500">
              No rows added yet!
            </span>
          </h1>
          <img className="w-full" src={NoRows} alt="no_rows" />
        </>
      ) : (
        <>
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
                  className={`bg-gray-600 p-2 rounded-md text-white ${
                    !row.enabled ? "bg-gray-100" : "bg-gray-900"
                  }`}
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
        </>
      )}
    </div>
  );
};

export default Home;
