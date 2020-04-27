'use strict';
// DOM- document object model
let notes = getSavedNotes();
const filters = {
	searchText: '',
	sortBy: 'byEdited',
};

renderNotes(notes, filters);
// create new notes
const createBtn = document.querySelector('.create-note');
createBtn.addEventListener('click', function (e) {
	const id = uuidv4();
	const timestamp = moment().valueOf();

	e.preventDefault();
	notes.push({
		id: id,
		title: '',
		body: '',
		createdAt: timestamp,
		updatedAt: timestamp,
	});
	saveNotes(notes);
	// renderNotes(notes, filters);
	location.assign(`/edit.html#${id}`);
});

document.querySelector('#search-text').addEventListener('input', function (e) {
	console.log(e.target.value);
	filters.searchText = e.target.value;
	renderNotes(notes, filters);
});

document.querySelector('#filter-by').addEventListener('change', function (e) {
	// console.log(e.target.value);
	filters.sortBy = e.target.value;
	renderNotes(notes, filters);
});
window.addEventListener('storage', (e) => {
	if (e.key === 'notes') {
		notes = JSON.parse(e.newValue);
		renderNotes(notes, filters);
	}
});
