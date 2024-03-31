const Filter = ({ query, setQuery }) => {
	return (
		<>
			<label htmlFor="search">filter</label>
			<input
				type="text"
				id="search"
				value={query}
				onChange={(e) => setQuery(e.target.value)}
			/>
		</>
	)
}

export default Filter
