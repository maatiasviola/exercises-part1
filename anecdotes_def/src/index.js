import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const App = ({anecdotes,votes_list}) => {
  
  const [selected, setSelected] = useState(0)
  const [votes,setVotes]=useState(
    votes_list
  )
  const [mostVoted,setMostVoted]=useState(0)
  
  
  const random=()=>Math.floor(Math.random()*anecdotes.length)
  
  const vote=()=>{
    const newVote=[
      ...votes_list,
      votes_list[selected]=votes_list[selected]+1
    ]
    setVotes(newVote)
    
    let maximo=Math.max(...votes_list)
    let posicion=votes_list.indexOf(maximo)
    setMostVoted(posicion)
  };

  return (
    <div>
      <h2>{anecdotes[selected]}</h2>
      <h3>has {votes_list[selected]} votes</h3>
      <button onClick={vote}>Vote</button>
      <button onClick={()=>setSelected(random())}>Next Anecdote</button>
      <br></br>
      <h1>Anecdota mas votada</h1>
      <h2>{anecdotes[mostVoted]}</h2>
      <h3>and has {votes_list[mostVoted]} votes</h3>      
    </div>

  )
}

const anecdotes = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]

const votes_list=new Array(anecdotes.length).fill(0)

ReactDOM.render(
  <App anecdotes={anecdotes} votes_list={votes_list}/>,
  document.getElementById('root')
)