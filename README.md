# GraphQL
GraphQL is a query language for APIs and a runtime for executing those queries.  Unlike REST APIs, which require multiple endpoints for different resources, GraphQL allows clients to request only the data they need in a single query.

# Key Features of GraphQL
* Flexible Queries – Clients can specify the exact  structure of the response they want.
* Single Endpoint – Unlike REST, GraphQL APIs expose a single endpoint (/graphql).
* Strongly Typed Schema – The API defines data types and relationships using a schema.
* Efficient Data Fetching – Reduces over-fetching and under-fetching of data.
* Real-time Updates – Supports subscriptions for real-time communication.

# GraphQl Server or API from scratch
 * First you need Nodejs and  apollo server pacakge
 1. install nodejs
 2. mkdir graphql-demo
 3. cd graphql-demo
 4. then run this command -->  npm init --yes pkg set type="module" 
 5. it will create a package.json file in your folder
 6. then run this command fo apollo server --> npm install @apollo/server graphql
 7. after that create a file index.js . in this file we will set up the apollo server for GraphQL.
 8. In th index.js file imort the followinh
 ```JS
 import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";
 ```
9. then in the same index.js setup the server
```JS
//setup server 
const server = new ApolloServer({
  //typeDefs,
  //resolvers
});

const { url } = await startStandaloneServer(server,{listen: { port: 4000 }});

console.log(`Server ready at ${url}`);
```
10. The apollo server takes objects as an argument and that object expects two parameters  type definations and resolver.

 
