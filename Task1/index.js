const { ApolloServer, gql } = require("apollo-server");
const fs = require("fs");
const path = require("path");
const { resolvers } = require("./resolvers");

const schemaString = fs.readFileSync(
  path.join(__dirname, "schema.graphql"),
  "utf8"
);
const typeDefs = gql(schemaString);

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

server.listen(2000, () => {
  console.log("Server has been started on port 2000");
});
