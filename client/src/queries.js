import gql from "graphql-tag";

export const COUNTRY_NAMES_QUERY = gql`
  {
    countries {
      name
    }
  }
`;

const POPULATION_QUERY = gql`
  query country($name: String!) {
    country(name: $name) {
      population
    }
  }
`;

const CAPITAL_QUERY = gql`
  query country($name: String!) {
    country(name: $name) {
      capital
    }
  }
`;

const CURRENCY_QUERY = gql`
  query country($name: String!) {
    country(name: $name) {
      currencies {
        name
        code
      }
    }
  }
`;

export default {
  population: POPULATION_QUERY,
  capital: CAPITAL_QUERY,
  currency: CURRENCY_QUERY
};
