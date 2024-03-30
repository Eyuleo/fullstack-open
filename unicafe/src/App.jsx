import { useState } from 'react'
import Button from './components/Button'
import Statistics from './components/Statistics'
const App = () => {
	// save clicks of each button to its own state
	const [good, setGood] = useState(0)
	const [neutral, setNeutral] = useState(0)
	const [bad, setBad] = useState(0)
	const [all, seAll] = useState(0)

	const handleGoodChange = () => {
		const updatedGood = good + 1
		setGood(updatedGood)
		seAll(updatedGood + neutral + bad)
	}
	const handleNeutralChange = () => {
		const updatedNeutral = neutral + 1
		setNeutral(updatedNeutral)
		seAll(updatedNeutral + good + bad)
	}
	const handleBadChange = () => {
		const updatedBad = bad + 1
		setBad(updatedBad)
		seAll(updatedBad + good + neutral)
	}
	return (
		<div>
			<h1>give feedback</h1>
			<Button text="good" onClick={handleGoodChange} />
			<Button text="neutral" onClick={handleNeutralChange} />
			<Button text="bad" onClick={handleBadChange} />
			<h2>statistics</h2>
			{all <= 0 ? (
				<p>no feedback given</p>
			) : (
				<>
					<Statistics text="good" count={good} />
					<Statistics text="neutral" count={neutral} />
					<Statistics text="bad" count={bad} />
					<Statistics text="total" count={all} />
				</>
			)}
		</div>
	)
}

export default App
