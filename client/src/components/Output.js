import React from "react";

const Output = ({ result }) => {
  console.log({ result });
  const renderOutput = result => {
    if (!result) return;
    const [results] = Object.keys(result);
    switch (typeof result[results]) {
      case "string":
        return result[results];
      case "number":
        return result[results].toLocaleString();
      case "object":
        return `${result[results][0].name} (${result[results][0].code})`;
    }
  };
  return (
    <div className="output-container">
      <output>{renderOutput(result)}</output>
    </div>
  );
};

export default Output;
