const getPuzzle = async (wordCount) => {
	const response = await fetch(
		`https://puzzle.mead.io/puzzle?wordCount=${wordCount}`
	);
	if (response.status === 200) {
		const data = await response.json();
		return data.puzzle;
	} else {
		throw new Error('unable to get puzzle: ');
	}
};

// const getPuzzle = (wordCount, callback) => {
// 	const request = new XMLHttpRequest();

// 	request.addEventListener('readystatechange', (event) => {
// 		if (event.target.readyState === 4 && event.target.status === 200) {
// 			const data = JSON.parse(event.target.responseText);
// 			callback(undefined, data.puzzle);
// 		} else if (event.target.readyState === 4) {
// 			callback('An error has taken place', undefined);
// 		}
// 	});

// 	request.open('GET', `https://puzzle.mead.io/puzzle?=${wordCount}`);
// 	request.send();
// };

// const getPuzzle = (wordCount) =>
// 	new Promise((resolve, reject) => {
// 		const request = new XMLHttpRequest();

// 		request.addEventListener('readystatechange', (event) => {
// 			if (
// 				event.target.readyState === 4 &&
// 				event.target.status === 200
// 			) {
// 				const data = JSON.parse(event.target.responseText);
// 				resolve(data.puzzle);
// 			} else if (event.target.readyState === 4) {
// 				reject('An error occurred');
// 			}
// 		});

// 		request.open('GET', `https://puzzle.mead.io/puzzle?=${wordCount}`);
// 		request.send();
// 	});

// const getPuzzle = (wordCount) => {
// 	return fetch(`https://puzzle.mead.io/puzzle?wordCount=${wordCount}`)
// 		.then((response) => {
// 			if (response.status === 200) {
// 				return response.json();
// 			} else {
// 				throw new Error('could not able to fetch data');
// 			}
// 		})
// 		.then((data) => {
// 			return data.puzzle;
// 		});
// };
