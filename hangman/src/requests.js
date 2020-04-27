const getPuzzle = (wordCount) => {
	return fetch(`//puzzle.mead.io/puzzle?wordCount=${wordCount}`)
		.then((response) => {
			if (response.status === 200) {
				return response.json();
			} else {
				throw new Error('Unable to fetch the puzzle');
			}
		})
		.then((data) => {
			return data.puzzle;
		});
};
export { getPuzzle as default };
// const getLocation = async () => {
// 	let response = await fetch(`//ipinfo.io/json?token=1a11bd55cc8f9c`);
// 	response = response.json();
// 	if (response.status === 200) {
// 		return response;
// 	} else {
// 		throw new Error('Unable to fetch location');
// 	}
// 	return fetch(`https://ipinfo.io/json?token=1a11bd55cc8f9c`).then(
// 		(response) => {
// 			if (response.status === 200) {
// 				return response.json();
// 			} else {
// 				throw new Error('Unable to fetch location');
// 			}
// 		}
//     )

// };
// };
// const getCurrentCountry = async () => {
// 	const loc = await getLocation();
// 	const country = await getCountryAsync(loc.country);
// 	return country;
// };

// const getCountryAsync = async (countryCode) => {
// 	let response = await fetch(`//restcountries.eu/rest/v2/all`);
// 	if (response.status === 200) {
// 		response = await response.json();
// 		return response.find((country) => country.alpha2Code === countryCode);
// 	} else {
// 		throw new Error('Unable to find country');
// 	}
// };

// return new Promise((resolve, reject) => {
// 	const request = new XMLHttpRequest();

// 	request.addEventListener('readystatechange', (e) => {
// 		if (e.target.readyState === 4 && e.target.status === 200) {
// 			const data = JSON.parse(e.target.responseText);
// 			resolve(data.puzzle);
// 		} else if (e.target.readyState === 4) {
// 			reject('An error has taken place');
// 		}
// 	});

// 	request.open('GET', `http://puzzle.mead.io/puzzle?wordCount=${wordCount}`);
// 	request.send();
// });

// const getCountry = (countryCode, callback) => {
// 	const countryRequest = new XMLHttpRequest();

// 	countryRequest.addEventListener('readystatechange', (e) => {
// 		if (e.target.readyState === 4 && e.target.status === 200) {
// 			const data = JSON.parse(e.target.responseText);
// 			const country = data.find(
// 				(country) => country.alpha2Code === countryCode
// 			);
// 			callback(undefined, country);
// 		} else if (e.target.readyStatet === 4) {
// 			callback('Unable to fetch  data');
// 		}
// 	});

// 	countryRequest.open('GET', 'http://restcountries.eu/rest/v2/all');
// 	countryRequest.send();
// };
// const getCountry1 = (countryCode) => {
// 	return fetch(`//restcountries.eu/rest/v2/all`)
// 		.then((response) => {
// 			if (response.status === 200) {
// 				return response.json();
// 			} else {
// 				throw new Error('Unable to find country');
// 			}
// 		})
// 		.then((res) => {
// 			return res.find((country) => country.alpha2Code === countryCode);
// 		});
// };
// const getCountry = (countryCode) => {
// 	return new Promise((resolve, reject) => {
// 		const countryRequest = new XMLHttpRequest();

// 		countryRequest.addEventListener('readystatechange', (e) => {
// 			if (e.target.readyState === 4 && e.target.status === 200) {
// 				const data = JSON.parse(e.target.responseText);
// 				const country = data.find(
// 					(country) => country.alpha2Code === countryCode
// 				);
// 				resolve(country);
// 			} else if (e.target.readyStatet === 4) {
// 				reject('Unable to fetch  data');
// 			}
// 		});

// 		countryRequest.open('GET', '//restcountries.eu/rest/v2/all');
// 		countryRequest.send();
// 	});
// };
// // getCountry1('IT')
// // 	.then((data) => {
// // 		console.log(data.name);
// // 	})
// // 	.catch((e) => {
// // 		console.log(e);
// // 	});
// // getPuzzle("2", (error, puzzle) => {
// //     if (error) {
// //         console.log(`Error: ${error}`)
// //     } else {
// //         console.log(puzzle)
// //     }
// // })
// // getPuzzle('2')
// // 	.then((data) => {
// // 		console.log(data);
// // 	})
// // 	.catch((e) => {
// // 		console.log(e);
// // 	});

// // getCountry('MX', (error, country) => {
// // 	if (error) {
// // 		console.log(error);
// // 	} else {
// // 		console.log(`Country name: ${country.name}`);
// // 	}
// // });
// // getCountry('MX')
// // 	.then((data) => {
// // 		console.log(data.name);
// // 	})
// // 	.catch((e) => {
// // 		console.log(e);
// // 	});
// // getCountry('AF')
// // 	.then((data) => {
// // 		console.log(data.name);
// // 	})
// // 	.catch((e) => {
// // 		console.log(e);
// // 	});

// // fetch(`http://puzzle.mead.io/puzzle`)
// // 	.then((response) => {
// // 		if (response.status === 200) {
// // 			return response.json(response);
// // 		} else {
// // 			throw new Error('Unable to fetch the puzzle');
// // 		}
// // 	})
// // 	.then((response) => {
// // 		console.log(response.puzzle);
// // 	})
// // 	.catch((e) => {
// // 		console.log(e);
// // 	});
// // getLocation()
// // 	.then((location) => {
// // 		return getCountryAsync(location.name);
// // 	})
// // 	.then((country) => {
// // 		console.log(country.name);
// // 	})
// // 	.catch((err) => {
// // 		console.log('Error ' + err);
// // 	});
