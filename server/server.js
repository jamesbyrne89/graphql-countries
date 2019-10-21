const express = require('express');
const graphqlHTTP = require('express-graphql');
const schema = require('./schema');
const cors = require('cors');

const app = express();

const PORT = process.env.PORT || 4000;

app.use(cors());

app.use(
  '/countries',
  graphqlHTTP({
    schema,
    graphiql: true
  })
);

app.listen(PORT, () => `Server running on port ${PORT}`);
