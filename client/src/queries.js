
import gql from 'graphql-tag';

const COUNTRY_NAMES_QUERY = gql`
{
  countries {
    name
  }
}`

const POPULATION_QUERY = gql`
query country($name: String!) {
  country(name: $name) {
    population
  }
}`

const CAPITAL_QUERY = gql`
query country($name: String!) {
  country(name: $name) {
    capital
  }
}`

export default {
    COUNTRY_NAMES_QUERY,
    population: POPULATION_QUERY,
    capital: CAPITAL_QUERY
}