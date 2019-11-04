
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

export default {
    COUNTRY_NAMES_QUERY,
    POPULATION_QUERY
}