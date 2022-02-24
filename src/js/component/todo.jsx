import React, { useState } from "react";

const ToDoList = () => {
	const [input, setInput] = useState("");
	const [todos, setTodos] = useState([]);
	const [render, rerender] = useState(true);

	const handleOnChange = (event) => {
		setInput(event.target.value);
	};

	const handleKeyPress = (event) => {
		if (event.key == "Enter") {
			let newTodos = todos;
			newTodos.push(
				<li key={newTodos.length ? Number(newTodos.at(-1).key) + 1 : 0}>
					{input}
				</li>
			);
			setTodos(newTodos);
			rerender(!render);
		}
	};

	return (
		<div className="container">
			<div className="paper">
				<input
					type="text"
					onChange={(event) => handleOnChange(event)}
					onKeyPress={(event) => handleKeyPress(event)}
				/>
				<ul>{todos}</ul>
			</div>
		</div>
	);
};

export default ToDoList;
