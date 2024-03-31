import { useState } from 'react'

const App = () => {
	const [persons, setPersons] = useState([])
	const [newName, setNewName] = useState('')
	const [phoneNumber, setPhoneNumber] = useState('')

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
		}
		setPersons([...persons, { name: newName, number: phoneNumber }])
		setNewName('')
		setPhoneNumber('')
	}

	return (
		<div>
			<h2>Phonebook</h2>
			<form onSubmit={addNewContact}>
				<div>
					<label htmlFor="contact">name:</label>
					<input id="contact" value={newName} onChange={handleNameChange} />
				</div>
				<div>
					<label htmlFor="phone">number:</label>
					<input type="text" value={phoneNumber} onChange={handlePhoneChange} />
				</div>
				<div>
					<button type="submit">add</button>
				</div>
			</form>
			<h2>Numbers</h2>
			{persons.map((person) => (
				<p key={person.name}>
					{person.name} {person.number}
				</p>
			))}
		</div>
	)
}

export default App
