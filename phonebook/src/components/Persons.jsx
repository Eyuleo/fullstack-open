const Persons = ({ filteredContacts, onDelete }) => {
	return (
		<>
			{filteredContacts.map((person) => (
				<p key={person.id}>
					{person.name} {person.number}
					<button onClick={() => onDelete(person.id)}>delete</button>
				</p>
			))}
		</>
	)
}

export default Persons
