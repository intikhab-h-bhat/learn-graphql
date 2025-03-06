
import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";

//setup server

const server = new ApolloServer({
  //typeDefs,
  //resolvers,
});

const { url } = await server.listen({ port: 4000 });

console.log(`Server ready at ${url}`);