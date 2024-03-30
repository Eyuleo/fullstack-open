import { useState } from 'react'
import Button from './components/Button'
import Statistics from './components/Statistics'
const App = () => {
	// save clicks of each button to its own state
	const [good, setGood] = useState(0)
	const [neutral, setNeutral] = useState(0)
	const [bad, setBad] = useState(0)

	const handleGoodChange = () => {
		setGood((prevState) => prevState + 1)
	}
	const handleNeutralChange = () => {
		setNeutral((prevState) => prevState + 1)
	}
	const handleBadChange = () => {
		setBad((prevState) => prevState + 1)
	}
	return (
		<div>
			<h1>give feedback</h1>
			<Button text="good" onClick={handleGoodChange} />
			<Button text="neutral" onClick={handleNeutralChange} />
			<Button text="bad" onClick={handleBadChange} />
			<h2>statistics</h2>
			<Statistics text="good" count={good} />
			<Statistics text="neutral" count={neutral} />
			<Statistics text="bad" count={bad} />
		</div>
	)
}

export default App
