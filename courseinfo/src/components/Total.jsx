const Total = ({ parts }) => {
	const total = parts.reduce((accu, value) => accu + value.exercises, 0)
	return (
		<p>
			<b> total of {total} exercises </b>
		</p>
	)
}

export default Total
