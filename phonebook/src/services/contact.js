import axios from 'axios'
const baseUrl = 'http://localhost:3000/persons'

const getAll = () => {
	const request = axios.get(baseUrl)
	return request.then((response) => response.data)
}
const create = (newObject) => {
	const request = axios.post(baseUrl, newObject)
	return request.then((response) => response.data)
}
const deleteContact = (id) => {
	const request = axios.delete(`${baseUrl}/${id}`)
	return request.then()
}
export default {
	getAll,
	create,
	deleteContact,
}
