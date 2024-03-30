import { useState } from 'react'
import Button from './components/Button'
import Anecdote from './components/Anecdote'

const App = () => {
	const anecdotes = [
		'If it hurts, do it more often.',
		'Adding manpower to a late software project makes it later!',
		'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
		'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
		'Premature optimization is the root of all evil.',
		'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
		'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
		'The only way to go fast, is to go well.',
	]
	const initialVotes = Array(anecdotes.length).fill(0)
	const [selected, setSelected] = useState(0)
	const [votes, setVotes] = useState(initialVotes)

	const getNextAnecdote = () => {
		let randIndex = Math.floor(Math.random() * anecdotes.length)
		setSelected(randIndex)
	}
	const handleVote = () => {
		const newVote = [...votes]
		newVote[selected] += 1
		setVotes(newVote)
	}

	const highestVoteIndex = votes.reduce(
		(highestIndex, currentVotes, currentIndex, arr) => {
			if (currentVotes > arr[highestIndex]) {
				return currentIndex
			} else {
				return highestIndex
			}
		},
		0
	)
	return (
		<div>
			<h1>Anecdote of the day</h1>
			<Anecdote anecdotes={anecdotes} selected={selected} votes={votes} />
			<Button text="vote" onClick={handleVote} />
			<Button text="next anecdote" onClick={getNextAnecdote} />
			<h2>Anecdote with most votes</h2>
			<Anecdote
				anecdotes={anecdotes}
				selected={highestVoteIndex}
				votes={votes}
			/>
		</div>
	)
}

export default App
