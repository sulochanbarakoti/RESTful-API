import {useState} from 'react'

function App() {

  const anecdotes = [
    'If it hurts, do it more often',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients'
  ]

  const [selected, setSelected] = useState(0)
  const [index, setIndex] = useState(0)
  const [vote, setVote] = useState(0)

  var points = []

  for (var i=0;anecdotes.length>i;i++){
    points[i] = 0
  }

  const buttonClicked = (props) => {
    if (props === 'next'){
      const handler = () => {
        setSelected(selected+1)
        setIndex(index+1)
        setVote(0)
        // console.log(copy[index])
      }
      return handler
    }
    if (props === 'vote') {
      const handler = () => {
        setVote(vote+1)
        points[index] = vote
      }

      return handler
    }
    
  }

  return (
    <div className="App">

      <p>{anecdotes[selected]}</p>
      <Votecounter copy={vote} index={index} anecdotes={anecdotes.length}/>
      <button onClick={buttonClicked('vote')}>vote</button>
      <button onClick={buttonClicked('next')}>next anecdote</button>
      <br></br>
      <DisplayMostVoted anecdotes={anecdotes} points={points} />
    </div>
  );
}

const Votecounter = (props) => {    
  if ( props.anecdotes > props.index){
    return (
      <div>
        <p>has {props.copy} votes</p>
      </div>
    );
  }
  else{
    return(
      <div></div>
    );
  }
  
}

const DisplayMostVoted = (props) => {
  return(
    <div>
      <h1>Anecdote with most votes</h1>

    </div>
  );
}

export default App;
