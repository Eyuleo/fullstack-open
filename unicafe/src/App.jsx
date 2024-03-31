import { useState } from 'react'
import Button from './components/Button'
import Statistics from './components/Statistics'
const App = () => {
	// save clicks of each button to its own state
	const [good, setGood] = useState(0)
	const [neutral, setNeutral] = useState(0)
	const [bad, setBad] = useState(0)
	const [all, seAll] = useState(0)
	const [average, setAverage] = useState(0)
	const [positive, setPositive] = useState(0)

	const handleGoodChange = () => {
		const updatedGood = good + 1
		setGood(updatedGood)
		seAll(updatedGood + neutral + bad)
		if (all > 0) {
			const newAverage = (updatedGood * 1 + bad * -1 + neutral * 0) / all
			setAverage(newAverage)
			setPositive((updatedGood / all) * 100)
		}
	}
	const handleNeutralChange = () => {
		const updatedNeutral = neutral + 1
		setNeutral(updatedNeutral)
		seAll(updatedNeutral + good + bad)
		if (all > 0) {
			const newAverage = (good * 1 + bad * -1 + updatedNeutral * 0) / all
			setAverage(newAverage)
			setPositive((good / all) * 100)
		}
	}
	const handleBadChange = () => {
		const updatedBad = bad + 1
		setBad(updatedBad)
		seAll(updatedBad + good + neutral)
		if (all > 0) {
			const newAverage = (good * 1 + updatedBad * -1 + neutral * 0) / all
			setAverage(newAverage)
			setPositive((good / all) * 100)
		}
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
					<Statistics text="all" count={all} />
					<Statistics text="average" count={average.toFixed(2)} />
					<Statistics text="positive" count={`${positive.toFixed(2)}%`} />
				</>
			)}
		</div>
	)
}

export default App
