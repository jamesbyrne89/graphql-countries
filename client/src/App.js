import React, { useEffect } from "react";
import VariableDropdown from "./components/VariableDropdown";
import CountryNameDropdown from "./components/CountryNameDropdown";
import Output from "./components/Output";
import Loader from "./components/Loader";
import queries from "./queries";
import useCombinedQueries from "./hooks/useCombinedQueries";
import "./main.scss";

const App = () => {
  const {
    setVariable,
    selectedCountry,
    setSelectedCountry,
    countryNames,
    result,
    fetch,
    countryNamesQuery,
    loading
  } = useCombinedQueries(null);

  useCombinedQueries();

  useEffect(() => {
    fetch({ variables: { name: selectedCountry } });
  }, [fetch, selectedCountry, result]);

  return (
    <div className="App">
      <main>
        <h1 className="app-title">Countries</h1>
        <div>
          <div className="dropdown-output-wrapper">
            <div className="container">
              {countryNamesQuery.loading ? (
                <Loader />
              ) : (
                <>
                  <div>
                    <span>What is the</span>
                  </div>
                  <VariableDropdown
                    handleChange={({ value }) => setVariable(value)}
                    variables={Object.keys(queries).map(key => ({
                      label: key,
                      value: key
                    }))}
                  />
                  <div>
                    <span>of</span>
                  </div>
                  <CountryNameDropdown
                    handleChange={({ value }) => setSelectedCountry(value)}
                    value={
                      selectedCountry
                        ? { label: selectedCountry, value: selectedCountry }
                        : undefined
                    }
                    countryNames={countryNames}
                  />
                </>
              )}
            </div>
            <Output
              result={result && result.country}
              loading={
                countryNamesQuery && !countryNamesQuery.loading && loading
              }
            />
          </div>
        </div>
      </main>
    </div>
  );
};

export default App;
