const Persons = ({ filteredContacts }) => {
	return (
		<>
			{filteredContacts.map((person) => (
				<p key={person.id}>
					{person.name} {person.number}
				</p>
			))}
		</>
	)
}

export default Persons
