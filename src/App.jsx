import { useState } from 'react'
import './App.css'

function App() {
	const [name, setName] = useState('Sofía')
	const [newName, setNewName] = useState('')
	const [teachers, setTeachers] = useState(['Data', 'Reyes', 'Yolanda'])

	const changeName = (event) => {
		event.preventDefault()

		const trimmedName = newName.trim()

		if (!trimmedName) {
			return
		}

		setName(trimmedName)
		setTeachers((prevTeachers) =>
			prevTeachers.includes(trimmedName)
				? prevTeachers
				: [...prevTeachers, trimmedName]
		)
		setNewName('')
	}

	return (
		<>
			<h2>Nombre del profesor: {name}</h2>

			<ul>
				{teachers.map((teacher) => (
					<li key={teacher} onClick={() => setName(teacher)}>
						{teacher}
					</li>
				))}
			</ul>

			<form onSubmit={changeName}>
				<input
					type="text"
					value={newName}
					onChange={(event) => setNewName(event.target.value)}
					placeholder="Agregar un nombre"
				/>
				<button type="submit">Agregar</button>
			</form>
		</>
	)
}

export default App
