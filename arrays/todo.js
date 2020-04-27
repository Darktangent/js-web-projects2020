const todos = [
	{
		text: 'My Next Trip',
		completed: false,
	},
	{
		text: 'Habits to work on',
		completed: true,
	},
	{
		text: 'Office modifications',
		completed: false,
	},
];

const deleteTodo = (todos, text) => {
	const index = todos.findIndex((todo, idx) => {
		return todo.text.toLowerCase() !== text.toLowerCase();
	});
	return todos.splice(index, 1);
};

const getThingsTodo = (todos) => {
	return todos.filter((todo, idx) => {
		return todo.completed === false;
	});
};
const sortTodos = function (todos) {
	todos.sort(function (a, b) {
		if (a.completed < b.completed) {
			return -1;
		} else if (b.completed < a.completed) {
			return 1;
		} else {
			return 0;
		}
	});
};
sortTodos(todos);
// console.log(getThingsTodo(todos));
// deleteTodo(todos, 'Habits to work on');
console.log(todos);
