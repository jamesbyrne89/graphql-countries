import { useState } from "react";
import { useQuery } from "@apollo/react-hooks";
import queries, { COUNTRY_NAMES_QUERY } from "../queries";

const useCombinedQueries = (name, varName) => {
  const [variable, setVariable] = useState("");
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
  const flagQuery = useQuery(queries.flag, {
    skip: !selectedCountry || variable !== "flag",
    variables: {
      name: selectedCountry
    }
  });

  const queryMatcher = variable => {
    switch (variable) {
      case "capital":
        return capitalQuery;
      case "population":
        return populationQuery;
      case "currency":
        return currencyQuery;
      case "flag":
        return flagQuery;
      default:
        return {
          refetch: () => {}
        };
    }
  };

  return {
    setVariable,
    setSelectedCountry,
    countryNamesQuery,
    populationQuery,
    capitalQuery,
    countryNames: countryNamesQuery.data,
    result: queryMatcher(variable).data,
    variable,
    fetch: queryMatcher(variable).refetch,
    loading: queryMatcher(variable).loading
  };
};

export default useCombinedQueries;
