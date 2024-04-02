import { useState, useEffect } from 'react'
import personService from './services/contact'
import Filter from './components/Filter'
import PersonForm from './components/PersonForm'
import Persons from './components/Persons'

const App = () => {
	const [persons, setPersons] = useState([])
	const [newName, setNewName] = useState('')
	const [phoneNumber, setPhoneNumber] = useState('')
	const [query, setQuery] = useState('')

	useEffect(() => {
		personService.getAll().then((res) => {
			setPersons(res)
		})
	}, [])

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
			const newContact = {
				name: newName,
				number: phoneNumber,
			}
			personService.create(newContact).then((res) => {
				setPersons(persons.concat(res))
				setNewName('')
				setPhoneNumber('')
			})
		}
	}

	const deleteContact = (id) => {
		const prompt = window.confirm('Are you sure?')
		if (prompt) {
			personService.deleteContact(id).then(() => {
				setPersons(persons.filter((person) => person.id !== id))
			})
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
			<Persons filteredContacts={filteredContacts} onDelete={deleteContact} />
		</div>
	)
}

export default App
