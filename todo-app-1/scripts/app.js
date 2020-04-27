let todos = getSavedTodos();
const search = { text: '', hideCompleted: false };

renderTodos(todos, search);

// search todo
document.querySelector('#search-todo').addEventListener('input', (e) => {
	search.text = e.target.value;
	renderTodos(todos, search);
});
document.querySelector('#todo-form').addEventListener('submit', (e) => {
	e.preventDefault();
	const text = e.target.elements.todo.value.trim();
	if (e.target.elements.todo.value.length > 0) {
		todos.push({
			id: uuidv4(),
			text: text,
			completed: false,
		});
		saveTodos(todos);
		renderTodos(todos, search);
		e.target.elements.todo.value = '';
	}
});
document.querySelector('#hide-completed').addEventListener('change', (e) => {
	search.hideCompleted = e.target.checked;
	renderTodos(todos, search);
});
