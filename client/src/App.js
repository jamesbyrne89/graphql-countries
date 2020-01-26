import React, { useState, useEffect } from "react";
import { useQuery } from "@apollo/react-hooks";
import VariableDropdown from "./components/VariableDropdown";
import CountryNameDropdown from "./components/CountryNameDropdown";
import Output from "./components/Output";
import Loader from "./components/Loader";
import queries, { COUNTRY_NAMES_QUERY } from "./queries";
import "./App.css";

const useCombinedQueries = (name, varName) => {
  const [variable, setVariable] = useState("population");
  const countryNamesQuery = useQuery(COUNTRY_NAMES_QUERY);
  const [selectedCountry, setSelectedCountry] = useState("");

  const capitalQuery = useQuery(queries.capital, {
    skip: !selectedCountry || variable !== "capital",
    variables: {
      name: selectedCountry
    }
  });

  const populationQuery = useQuery(queries.population, {
    skip: !selectedCountry || variable !== "population",
    variables: {
      name: selectedCountry
    }
  });

  const currencyQuery = useQuery(queries.currency, {
    skip: !selectedCountry || variable !== "currency",
    variables: {
      name: selectedCountry
    }
  });

  useEffect(() => {
    console.log({ variable, query: queryMatcher(variable) });
  }, [variable]);

  const queryMatcher = variable => {
    switch (variable) {
      case "capital":
        return capitalQuery;
      case "population":
        return populationQuery;
      case "currency":
        return currencyQuery;
    }
  };

  const isLoading = countryNamesQuery.loading || populationQuery.loading;
  return {
    setVariable,
    setSelectedCountry,
    isLoading,
    countryNamesQuery,
    populationQuery,
    capitalQuery,
    countryNames: countryNamesQuery.data,
    result: queryMatcher(variable).data,
    variable,
    fetch: queryMatcher(variable).refetch
  };
};

const App = () => {
  const {
    setVariable,
    selectedCountry,
    setSelectedCountry,
    isLoading,
    countryNames,
    result,
    fetch,
    variable,
    countryNamesQuery,
    capitalQuery
  } = useCombinedQueries(null);

  useEffect(() => {
    fetch({ variables: { name: selectedCountry } });
    console.log({ capitalQuery });
  }, [fetch, selectedCountry, result]);

  return (
    <div className="App">
      <main>
        <h1 className="app-title">Countries</h1>
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
        {capitalQuery &&
        capitalQuery.loading &&
        (!countryNamesQuery || !countryNamesQuery.loading) ? (
          <h1>Loading...</h1>
        ) : (
          result && <Output result={result.country} />
        )}
      </main>
    </div>
  );
};

export default App;
