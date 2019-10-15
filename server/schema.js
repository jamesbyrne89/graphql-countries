const {
  GraphQLObjectType,
  GraphQLString,
  GraphQLList,
  GraphQLSchema
} = require('graphql');
const axios = require('axios');

const CountryType = new GraphQLObjectType({
  name: 'CountryType',
  fields: () => ({
    name: { type: GraphQLString }
    // native: { type: GraphQLString },
    // emoji: { type: GraphQLString },
    // currency: { type: GraphQLString },
    // languages: {
    //   type: GraphQLList(
    //     new GraphQLObjectType({
    //       name: 'languages',
    //       fields: {
    //         code: { type: GraphQLString },
    //         name: { type: GraphQLString }
    //       }
    //     })
    //   )
    // }
  })
});

const RootQuery = new GraphQLObjectType({
  name: 'RootQuery',
  fields: () => ({
    countries: {
      type: new GraphQLList(CountryType),
      resolve(parent, args) {
        return (async () => {
          const response = await axios.get(
            'https://restcountries.eu/rest/v2/all'
          );
          return response.data;
        })();
      }
    }
  })
});

module.exports = new GraphQLSchema({
  query: RootQuery
});
