import React from "react";
import Select from "react-select";

const CountryNameDropdown = ({
  handleChange,
  selectedCountry,
  countryNames
}) => {
  if (!countryNames) {
    return <div>loading...</div>;
  }

  return (
    <Select
      classNamePrefix={"options-dropdown"}
      className="options-dropdown country-name-dropdown"
      placeholder="Choose a country"
      value={selectedCountry}
      options={countryNames.countries.map(({ name }) => ({
        label: name,
        value: name
      }))}
      onChange={handleChange}
    />
  );
};

export default CountryNameDropdown;
