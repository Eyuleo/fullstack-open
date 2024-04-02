import { useEffect, useState } from 'react'
import axios from 'axios'
import noteService from './services/notes'
import Note from './components/Note'

const App = () => {
	const [notes, setNotes] = useState([])
	const [newNote, setNewNote] = useState('')
	const [showAll, setShowAll] = useState(true)
	useEffect(() => {
		noteService.getAll().then((res) => {
			setNotes(res)
		})
	}, [])

	const addNote = (event) => {
		event.preventDefault()
		const noteObject = {
			content: newNote,
			important: Math.random() > 0.5,
		}

		noteService.create(noteObject).then((res) => {
			setNotes(notes.concat(res))
			setNewNote('')
		})
	}

	const handleNoteChange = (event) => {
		setNewNote(event.target.value)
	}
	const notesToShow = showAll
		? notes
		: notes.filter((note) => note.important === true)

	const toggleImportanceOf = (id) => {
		const note = notes.find((n) => n.id === id)
		const updatedNote = { ...note, important: !note.important }

		noteService
			.update(id, updatedNote)
			.then((res) => {
				setNotes(notes.map((note) => (note.id !== id ? note : res)))
			})
			.catch((error) => {
				alert(`the note '${note.content}' was already deleted from server`)
				setNotes(notes.filter((n) => n.id !== id))
			})
	}
	return (
		<div>
			<h1>Notes</h1>
			<div>
				<button onClick={() => setShowAll(!showAll)}>
					show {showAll ? 'important' : 'all'}
				</button>
			</div>
			<ul>
				{notesToShow.map((note) => (
					<Note
						key={note.id}
						note={note}
						toggleImportance={() => toggleImportanceOf(note.id)}
					/>
				))}
			</ul>
			<form onSubmit={addNote}>
				<input value={newNote} onChange={handleNoteChange} required />
				<button type="submit">save</button>
			</form>
		</div>
	)
}

export default App
