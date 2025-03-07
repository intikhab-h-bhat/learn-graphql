
import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";


//db
import _db from "./_db.js";
//type
import { typeDefs } from "./schema.js";


const resolvers={

    Query: {
        games(){
            return _db.games
        },
        game(_,args){

            return _db.games.find(g=> g.id===args.id)

        },
        reviews(){
            return _db.reviews
        },
        review(_,args){

            return _db.reviews.find(r=> r.id===args.id)

        },
        authors(){
            return _db.authors
        },
        author(_,args){

            return _db.authors.find(a=> a.id===args.id)

        }
    },
    Game:{

        reviews(parent){
            return _db.reviews.filter(r=> r.gameId===parent.id)
        }
    },
    Author:{
        reviews(parent){
            return _db.reviews.filter(a=> a.authorId===parent.id)
        }

    },
    Review:{
        game(parent){
            return _db.games.find(g=>g.id===parent.gameId)
        },
        author(parent){
            return _db.authors.find(a=> a.id===parent.authorId)
        }
    }

}

//setup server
const server = new ApolloServer({
  typeDefs,
  resolvers
});

const { url } = await startStandaloneServer(server,{listen: { port: 4000 }});

console.log(`Server ready at ${url}`);