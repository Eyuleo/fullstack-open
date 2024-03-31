const PersonForm = ({
	addNewContact,
	newName,
	handleNameChange,
	phoneNumber,
	handlePhoneChange,
}) => {
	return (
		<>
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
		</>
	)
}

export default PersonForm
