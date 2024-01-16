import React from "react";

const Home = () => {
  return (
    <div className="w-full h-screen justify-center items-center">
      <div>ADD CONTENT</div>
      <div key={index}>
        <select
          value={row.sign}
          onChange={(e) => updateRow(index, "sign", e.target.value)}
        >
          <option value="+">+</option>
          <option value="-">-</option>
        </select>
        <input
          type="number"
          value={row.value}
          onChange={(e) =>
            updateRow(index, "value", parseInt(e.target.value, 10) || 0)
          }
        />
        <button onClick={() => removeRow(index)}>Delete</button>
        <button onClick={() => toggleRow(index)}>
          {row.enabled ? "Disable" : "Enable"}
        </button>
      </div>
    </div>
  );
};

export default Home;
