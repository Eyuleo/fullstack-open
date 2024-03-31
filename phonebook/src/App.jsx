import { useState } from 'react'
import Filter from './components/Filter'
import PersonForm from './components/PersonForm'
import Persons from './components/Persons'

const App = () => {
	const [persons, setPersons] = useState([
		{ name: 'Arto Hellas', number: '040-123456', id: 1 },
		{ name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
		{ name: 'Dan Abramov', number: '12-43-234345', id: 3 },
		{ name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 },
	])
	const [newName, setNewName] = useState('')
	const [phoneNumber, setPhoneNumber] = useState('')
	const [query, setQuery] = useState('')

	const handleNameChange = (event) => {
		setNewName(event.target.value)
	}
	const handlePhoneChange = (event) => {
		setPhoneNumber(event.target.value)
	}

	const addNewContact = (event) => {
		event.preventDefault()
		let isDuplicate = false
		persons.forEach((person) => {
			if (person.name === newName) {
				isDuplicate = true
			}
		})
		if (isDuplicate) {
			alert(`${newName} is already added to phonebook`)
			return
		} else {
			setPersons([
				...persons,
				{ name: newName, number: phoneNumber, id: persons.length + 1 },
			])
			setNewName('')
			setPhoneNumber('')
		}
	}

	const filteredContacts = persons.filter((person) => {
		return person.name.toLocaleLowerCase().includes(query.toLocaleLowerCase())
	})

	return (
		<div>
			<h1>Phonebook</h1>
			<Filter query={query} setQuery={setQuery} />
			<h2>add a new</h2>
			<PersonForm
				newName={newName}
				phoneNumber={phoneNumber}
				addNewContact={addNewContact}
				handleNameChange={handleNameChange}
				handlePhoneChange={handlePhoneChange}
			/>
			<h2>Numbers</h2>
			<Persons filteredContacts={filteredContacts} />
		</div>
	)
}

export default App
