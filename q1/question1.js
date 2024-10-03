function lowerCaseWords(arr) {
    return new Promise((resolve, reject) => {
        if (mixedArray.length > 0) {
            const filteredArr = arr.filter((element) => typeof element === 'string');
            const lowerCaseArr = filteredArr.map((element) => element.toLowerCase());
            resolve(lowerCaseArr);
        } else {
            reject('Array is empty');
        }
    });
}

const mixedArray = ['PIZZA', 10, true, 25, false, 'Wings'];
lowerCaseWords(mixedArray)
    .then((value) => console.log(value))
    .catch((error) => console.log(error));