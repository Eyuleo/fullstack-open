const Header = ({ anecdotes, selected, votes }) => {
	return (
		<>
			<h1>Anecdote of the day</h1>
			<p>{anecdotes[selected]}</p>
			<p>has {votes[selected]} votes</p>
		</>
	)
}

export default Header
