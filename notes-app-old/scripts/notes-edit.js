'use strict';
const lastEdited = document.querySelector('#last-edited');

const noteId = location.hash.substring(1);
let noteBody = document.querySelector('#note-body');
let noteTitle = document.querySelector('#note-title');
let notes = getSavedNotes();
let note = notes.find(function (note) {
	return note.id === noteId;
});
if (!note) {
	location.assign('/index.html');
}
noteTitle.value = note.title;
noteBody.value = note.body;
lastEdited.textContent = generateLastEdited(note.updatedAt);

noteTitle.addEventListener('input', (e) => {
	note.title = e.target.value;
	note.updatedAt = moment().valueOf();
	lastEdited.textContent = generateLastEdited(note.updatedAt);
	saveNotes(notes);
});
noteBody.addEventListener('input', (e) => {
	note.body = e.target.value;
	note.updatedAt = moment().valueOf();
	lastEdited.textContent = generateLastEdited(note.updatedAt);
	saveNotes(notes);
});
// const remove = document.createElement('button');
// remove.textContent = 'X';
const removeBtn = document.querySelector('#remove-note');
removeBtn.addEventListener('click', (e) => {
	removeNote(note.id);
	saveNotes(notes);
	location.assign('/index.html');
});
window.addEventListener('storage', (e) => {
	if (e.key === 'notes') {
		notes = JSON.parse(e.newValue);
		note = notes.find(function (note) {
			return note.id === noteId;
		});
		if (!note) {
			location.assign('/index.html');
		}
		noteTitle.value = note.title;
		noteBody.value = note.body;
		lastEdited.textContent = generateLastEdited(note.updatedAt);
	}
});
