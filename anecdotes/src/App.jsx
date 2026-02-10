import { useState } from 'react'

const Header = ({title}) => <><h1>{title}</h1></>

const Button = ({onClick,name})=><><button onClick={onClick}>{name}</button></>

const Votes = ({count}) =><><p>has {count} votes</p></>



const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.'
  ]
   
  const ancLength = anecdotes.length
  const [selected, setSelected] = useState(0)
  const [votes,setVotes] = useState(Array(ancLength).fill(0))

  const heading1 = "Anecdote of the day"
  const heading2 = "Anecdote with most votes"

  const maxVotes = Math.max(...votes)
  const mostVotedIndex = votes.indexOf(maxVotes)

  const getRandomAnecdote = () => {
    const randomIndex = Math.floor(Math.random() * anecdotes.length)
    console.log(randomIndex)
    setSelected(randomIndex)
  }

  const getAnecdoteVotes=()=>{
    const votesCopy = [...votes]
    votesCopy[selected]+=1
    setVotes(votesCopy)
  }

  return (
    <div>
      <Header title={heading1}/>
      {anecdotes[selected]}
      <br></br>
      <Votes count={votes[selected]}/>
      <Button onClick={getAnecdoteVotes} name="vote"/>
      <Button onClick={getRandomAnecdote} name="next anecdote"/>

      <Header title={heading2}/>
      {maxVotes === 0 ? (
        <p>No votes yet</p>
      ) : (
        <>
          <p>{anecdotes[mostVotedIndex]}</p>
          <Votes count={maxVotes} />
        </>
      )}

      
    </div>
  )
}

export default App