'use strict';
// read existing notes from locastorage

const getSavedNotes = () => {
	const notesJSON = localStorage.getItem('notes');
	// if (notesJSON !== null) {
	// 	return JSON.parse(notesJSON);
	// } else {
	// 	return [];
	// }
	try {
		return notesJSON ? JSON.parse(notesJSON) : [];
	} catch (e) {
		return [];
	}
};
// remove note
const removeNote = (id) => {
	const noteIndex = notes.findIndex((note) => {
		return note.id === id;
	});
	if (noteIndex > -1) {
		notes.splice(noteIndex, 1);
	}
};

// generate DOM structure for a note
const generateNoteDOM = function (note) {
	const noteEl = document.createElement('a');
	const textEl = document.createElement('p');
	const status = document.createElement('p');
	// const button = document.createElement('button');
	const link = document.createElement('a');
	//remove note
	// button.textContent = 'X';
	// link.setAttribute('href', 'edit.html');
	// link.appendChild(noteEl);

	// noteEl.appendChild(button);
	// event
	// button.addEventListener('click', (e) => {
	// 	removeNote(note.id);
	// 	saveNotes(notes);
	// 	renderNotes(notes, filters);
	// });
	// note title
	if (note.title.length > 0) {
		textEl.textContent = note.title;
	} else {
		textEl.textContent = 'Unnamed note';
	}
	noteEl.classList.add('list-item');
	textEl.classList.add('list-item__title');
	status.classList.add('list-item__subtitle');
	noteEl.appendChild(textEl);
	// link
	noteEl.setAttribute('href', `/edit.html#${note.id}`);
	// status
	status.textContent = generateLastEdited(note.updatedAt);
	noteEl.appendChild(status);
	return noteEl;
};
// render appl notes
const renderNotes = (notes, filters) => {
	notes = sortNotes(notes, filters.sortBy);
	const filteredNotes = notes.filter((note) => {
		return note.title.toLowerCase().includes(filters.searchText.toLowerCase());
	});
	document.querySelector('#notes').innerHTML = '';
	if (filteredNotes.length > 0) {
		filteredNotes.forEach((note) => {
			const noteEl = generateNoteDOM(note);

			document.querySelector('#notes').appendChild(noteEl);
		});
	} else {
		const emptyMsg = document.createElement('p');
		emptyMsg.classList.add('empty-message');
		emptyMsg.textContent = 'No notes to show';
		document.querySelector('#notes').appendChild(emptyMsg);
	}
};
const saveNotes = (notes) => {
	localStorage.setItem('notes', JSON.stringify(notes));
};

// generate last edited

const generateLastEdited = (timestamp) => {
	return `Last edited ${moment(timestamp.updatedAt).fromNow()}`;
};
// sort
const sortNotes = (notes, sortBy) => {
	if (sortBy === 'byEdited') {
		return notes.sort(function (a, b) {
			if (a.updatedAt > b.updatedAt) {
				return -1;
			} else if (a.updatedAt < b.updatedAt) {
				return 1;
			} else {
				return 0;
			}
		});
	} else if (sortBy === 'byCreated') {
		return notes.sort((a, b) => {
			if (a.createdAt > b.createdAt) {
				return -1;
			} else if (a.createdAt < b.createdAt) {
				return 1;
			} else {
				return 0;
			}
		});
	} else if ((sortBy = 'alphabetical')) {
		return notes.sort(function (a, b) {
			if (a.title.toLowerCase() > b.title.toLowerCase()) {
				return -1;
			} else if (a.title.toLowerCase() < b.title.toLowerCase()) {
				return 1;
			} else {
				return 0;
			}
		});
	}
};
