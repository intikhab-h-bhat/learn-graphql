
import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";

//db
import _db from "./_db.js";

//type
import { typeDefs } from "./schema.js"


const resolvers={
   Query:{ 
    games(){
       return _db.games
    }
    ,
    game(_,args){

        return _db.games.find((game)=> String(game.id)===args.id)
    },
    authors(){
        return _db.authors
    },
    author(_,args){

        return _db.authors.find((author)=> String(author.id)===args.id)
    },
    reviews(){
        return _db.reviews
    },
    review(_,args){

        return _db.reviews.find((review)=> String(review.id)===args.id)
    }
    },
    Game:{
        reviews(parent){
            return _db.reviews.filter(r=>r.gameId ===parent.id)
        }
    },
    Author:{
        reviews(parent){
            return _db.reviews.filter(r=>r.authorId ===parent.id)
        }
    },
    Review:{
        author(parent){
        return _db.authors.filter(a=>String(a.id) ===parent.authorId)
        },
        game(parent){
            return _db.games.filter(g=>String(g.id) ===parent.gameId)
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