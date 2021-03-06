const {
  GraphQLObjectType,
  GraphQLString,
  GraphQLInt,
  GraphQLList,
  GraphQLSchema
} = require("graphql");
const axios = require("axios");

const CurrenciesType = new GraphQLObjectType({
  name: "CurrenciesType",
  fields: () => ({
    code: { type: GraphQLString },
    name: { type: GraphQLString },
    symbol: { type: GraphQLString }
  })
});

const CountryType = new GraphQLObjectType({
  name: "CountryType",
  fields: () => ({
    name: { type: GraphQLString },
    population: { type: GraphQLInt },
    capital: { type: GraphQLString },
    currencies: { type: GraphQLList(CurrenciesType) },
    flag: { type: GraphQLString }
  })
});

const RootQuery = new GraphQLObjectType({
  name: "RootQuery",
  fields: () => ({
    countries: {
      type: new GraphQLList(CountryType),
      resolve(parent, args) {
        return (async () => {
          const response = await axios.get(
            "https://restcountries.eu/rest/v2/all"
          );
          return response.data;
        })();
      }
    },
    country: {
      type: CountryType,
      args: {
        name: { type: GraphQLString }
      },
      resolve(parent, args) {
        return (async () => {
          const response = await axios.get(
            `https://restcountries.eu/rest/v2/name/${args.name}`
          );

          const [result] = response.data;
          return result;
        })();
      }
    }
  })
});

module.exports = new GraphQLSchema({
  query: RootQuery
});
