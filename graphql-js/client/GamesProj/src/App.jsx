
import './App.css'

import {useQuery,useMutation,gql} from "@apollo/client"

// const GET_GAMES=gql`
// query GetGames{
//   games{
//     title
//     platform
//   }
// }
// `
const GET_GAMESById=gql`
query GetGameById($id:ID!){
  game(id:$id){
    title
    platform
  }
}
`

function App() {

  // const {data,error,loading}=useQuery(GET_GAMES)
  const {data,error,loading}=useQuery(GET_GAMESById,{
    variables:{id:2}
  })

  if(loading) return <p>Data Loading.....</p>
  if(error) return <p>Error{error.message}</p>

  return (
    <>
       <h1>Games</h1>
     <p>{data.game.title} </p>
     <div>{data.game.platform.map((p,index)=>{

      return(
        <p key={index}>{p}</p>

      )
     })}</div>
    </>
  )
}

export default App
