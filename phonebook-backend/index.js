import express, { json } from 'express'
import morgan from 'morgan'

const app = express()

app.use(express.json())

let persons = [
	{
		id: 1,
		name: 'Arto Hellas',
		number: '040-123456',
	},
	{
		id: 2,
		name: 'Ada Lovelace',
		number: '39-44-5323523',
	},
	{
		id: 3,
		name: 'Dan Abramov',
		number: '12-43-234345',
	},
	{
		id: 4,
		name: 'Mary Poppendieck',
		number: '39-23-6423122',
	},
]

const generateId = () => {
	const id = Math.floor(Math.random() * 1000)
	return id
}

app.get('/api/persons', (req, res) => {
	res.json(persons)
})

app.get('/api/persons/:id', (req, res) => {
	const id = +req.params.id
	const person = persons.find((person) => person.id === id)
	if (person) {
		res.json(person)
	} else {
		res.status(404).json({
			error: 'Not found',
		})
	}
})

app.get('/api/info', (req, res) => {
	const date = new Date()
	res.send(`<p>Phonebook has info for ${persons.length}</p><p>${date}</p>`)
})

app.post('/api/persons', (req, res, next) => {
	const body = req.body
	if (!body.name && !body.number) {
		return res.status(400).json({
			error: 'Contact info missing',
		})
	}

	const duplicate = persons.find((person) => person.name === body.name)

	if (duplicate) {
		return res.status(400).json({
			error: 'name must be unique',
		})
	}

	const person = {
		name: body.name,
		number: body.number,
		id: generateId(),
	}

	persons = persons.concat(person)
	res.json(person)
	next()
})
morgan.token('body', (req) => {
	return JSON.stringify(req.body)
})
app.use(
	morgan(':method :url :status :res[content-length]  :response-time ms :body')
)

app.delete('/api/persons/:id', (req, res) => {
	const id = +req.params.id
	persons = persons.filter((person) => person.id !== id)
	res.status(204).end()
})
const PORT = 5000
app.listen(PORT, () => {
	console.log(`Server running on port ${PORT}`)
})
