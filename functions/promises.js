// cb
const getDataCb = (num, callback) => {
	setTimeout(() => {
		if (typeof num === 'number') {
			callback(undefined, num * 2);
		} else {
			callback('Number must be provided');
		}
	}, 2000);
};
getDataCb(2, (error, data) => {
	if (error) {
		console.log(error);
	} else {
		getDataCb(data, (error, data) => {
			if (error) {
				console.log('error');
			} else {
				console.log(data);
			}
		});
	}
});
// Promise
const getDataPromise = (data) => {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			typeof data === 'number' ? resolve(num * 2) : reject('Must be a number');
		}, 2000);
	});
};
getDataPromise(123)
	.then((data) => {
		return getDataPromise(data);
	})
	.then((data) => {
		return getDataPromise(data);
	})
	.then((data) => {
		console.log(data);
	})
	.catch((e) => {
		console.log(e);
	});
