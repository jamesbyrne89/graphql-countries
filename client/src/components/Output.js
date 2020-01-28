import React from "react";
import Loader from "./Loader";
import "./Output.scss";

const renderOutput = result => {
  if (!result) return;
  if (result.flag) {
    return <img src={result.flag} />;
  }
  const [results] = Object.keys(result);
  switch (typeof result[results]) {
    case "string":
      return result[results];
    case "number":
      return result[results].toLocaleString();
    case "object":
      return `${result[results][0].name} (${result[results][0].code})`;
    default:
      return null;
  }
};

const Output = ({ result, loading }) => {
  return (
    <div className="output-container">
      {loading ? <Loader /> : <output>{renderOutput(result)}</output>}
    </div>
  );
};

export default Output;
