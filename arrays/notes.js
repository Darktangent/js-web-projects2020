const notes = [
	{
		title: 'My Next Trip',
		body: 'I would like to go to Spain',
	},
	{
		title: 'Habits to work on',
		body: 'Exercise, Eating better',
	},
	{
		title: 'Office modifications',
		body: 'Get a new seat',
	},
];

// console.log(notes.length);
// console.log(notes[0].toUpperCase());
// // add item
// notes.push('Note 4');
// console.log(notes);
// // remove item
// const deleted = notes.pop();
// console.log(notes);
// console.log(deleted);

// //shift and unshift
// console.log(notes.shift());
// console.log(notes);
// console.log(notes.unshift('First note'));
// console.log(notes);
// splice
// console.log(notes.splice(1, 1));
// console.log(notes);
// console.log(notes.splice(1, 1, 'adding new item'));
// notes[2] = 'Play soccer';
// notes.forEach(function (note, idx) {
// 	return {
// 		note,
// 		idx,
// 	};
// });
// console.log(notes);
// counting ...1
// for (let i = 0; i < notes.length; i++) {
// 	let item = notes[i];
// 	console.log(`${item}`);
// }
// console.log(notes.indexOf('Note 2'));
// console.log(notes);
// const index = notes.findIndex((note, idx) => {
// 	return note.title === 'Habits to work on';
// });
// console.log(index);
// const findNote = (notes, noteTitle) => {
// 	const index = notes.findIndex((note, idx) => {
// 		return note.title.toLowerCase() === noteTitle.toLowerCase();
// 	});
// 	return notes[index];
// };
const findNote = (notes, noteTitle) => {
	return notes.find((note, idx) => {
		return note.title.toLowerCase() === noteTitle.toLowerCase();
	});
};
const findNotes = (notes, query) => {
	return notes.filter(function (note, idx) {
		const isTitleMatch = note.title.toLowerCase().includes(query);
		const isBodyMatch = note.title.toLowerCase().includes(query);
		return isTitleMatch || isBodyMatch;
	});
};
const sortNotes = function (notes) {
	notes.sort(function (a, b) {
		if (a.title.toLowerCase() < b.title.toLowerCase()) {
			return -1;
		} else if (b.title.toLowerCase() < a.title.toLowerCase()) {
			return 1;
		} else {
			return 0;
		}
	});
};
sortNotes(notes);
console.log(notes);
// console.log(findNotes(notes, 'office'));

// const note = findNote(notes, 'Habits to work on');
// // const filtered = filteredNote(notes, 'Habits to work on');
// console.log(note);
