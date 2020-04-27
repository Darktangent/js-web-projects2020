// get saved todos

const getSavedTodos = () => {
	const todosJSON = localStorage.getItem('todos');
	// if (todosJSON !== null) {
	// 	return JSON.parse(todosJSON);
	// } else {
	// 	return [];
	// }
	return todosJSON ? JSON.parse(todosJSON) : [];
};
// save todos
const saveTodos = (todos) => {
	localStorage.setItem('todos', JSON.stringify(todos));
};
// render app
const renderTodos = (todos, searchText) => {
	// let todoList = todos.filter((todo) => {
	// 	return todo.text.toLowerCase().includes(searchText.text.toLowerCase());
	// });
	const filteredTodos = todos.filter((todo) => {
		const searchTextMatch = todo.text
			.toLowerCase()
			.includes(searchText.text.toLowerCase());
		const hideCompleteMatch = !searchText.hideCompleted || !todo.completed;
		return searchTextMatch && hideCompleteMatch;
	});

	document.querySelector('#todos').innerHTML = '';
	const incomplete = filteredTodos.filter((todo) => {
		return todo.completed === false;
	});
	generateSummaryDOM(incomplete);
	// summary

	if (!filteredTodos.length) {
		const emptyMsg = document.createElement('p');
		emptyMsg.textContent = `No to-dos to show`;
		emptyMsg.classList.add('empty-message');
		const todoEl = document.querySelector('#todos');
		todoEl.appendChild(emptyMsg);
	} else {
		filteredTodos.map((todo) => {
			const list = generateTodoDOM(todo);
			const todoEl = document.querySelector('#todos');
			todoEl.appendChild(list);
		});
	}
};
const removeTodo = (id) => {
	const index = todos.findIndex((todo) => {
		return todo.id === id;
	});
	index > -1 ? todos.splice(index, 1) : todos;
};
// update complete based on if checked
const toggleTodo = (id, state) => {
	const el = todos.find((todo) => {
		return todo.id === id;
	});

	el.completed = state;
};
const generateTodoDOM = (todo) => {
	let rootLabel = document.createElement('label');
	const containerEl = document.createElement('div');
	let input = document.createElement('input');
	let button = document.createElement('button');
	let list = document.createElement('span');

	input.setAttribute('type', 'checkbox');

	containerEl.appendChild(input);
	let content = todo.text;
	// checkbox
	input.checked = todo.completed;
	input.addEventListener('change', (e) => {
		toggleTodo(todo.id, input.checked);
		saveTodos(todos);
		renderTodos(todos, search);
	});

	list.textContent = content;
	containerEl.appendChild(list);

	rootLabel.classList.add('list-item');
	containerEl.classList.add('list-item__container');
	rootLabel.appendChild(containerEl);
	// button event
	button.textContent = 'remove';
	rootLabel.appendChild(button);
	button.classList.add('button', 'button--text');
	button.addEventListener('click', (e) => {
		removeTodo(todo.id);
		renderTodos(todos, search);
		saveTodos(todos);
	});
	return rootLabel;
};

const generateSummaryDOM = (incomplete) => {
	const incTodosCount = document.createElement('h2');
	incTodosCount.style.fontWeight = 'bold';
	const lengthIncTodos = incomplete.length;
	let condition =
		incomplete.length > 0 && incomplete.length < 2
			? `You have ${lengthIncTodos} task left`
			: `You have ${lengthIncTodos} tasks left`;
	incTodosCount.textContent = condition;
	incTodosCount.classList.add('list-title');
	document.querySelector('#todos').appendChild(incTodosCount);
};
