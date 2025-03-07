
let games=[
    {id:1,title:"Super Mario Bros",platform:["NES"]},
    {id:2,title:"The Legend of Zelda",platform:["NES","Switch","WiiU"]},
    {id:3,title:"Metroid",platform:["Switch","PS5"]},
    {id:4,title:"Final Fantasy",platform:["PS5"]},
    {id:5,title:"Dragon Quest",platform:["Switch"]}
]
let authors=[
    {id:1,name:"Shigeru Miyamoto",verified:true},
    {id:2,name:"Eiji Aonuma",verified:false},
    {id:3,name:"Hironobu Sakaguchi",verified:true},
    
]

let reviews=[
    {id:1,rating:5,content:"This game is amazing!",authorId:1,gameId:2},
    {id:2,rating:4,content:"This game is good!",authorId:2,gameId:1},
    {id:3,rating:3,content:"This game is ok!",authorId:3,gameId:3},
    {id:3,rating:3,content:"This game is ok!",authorId:2,gameId:4},
    {id:4,rating:2,content:"This game is bad!",authorId:4,gameId:5},
    {id:5,rating:1,content:"This game is terrible!",authorId:3,gameId:1}
    

]


export default {authors,games,reviews}