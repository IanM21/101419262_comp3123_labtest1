/*
Given the script file callbacks.js, write a script that does the following:
o Create a method resolvedPromise that is similar to
delayedSuccess and resolves a message after a timeout of 500ms.
o Create a method rejectedPromise that is similar to
delayedException and rejects an error message after a timeout of
500ms.
o Call both promises separately and handle the resolved and reject
results and then output to the console
*/

function resolvedPromise() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('Message: Delayed Success!');
        }, 500);
    });
}

function rejectedPromise() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            reject('Error: Delayed Exception!');
        }, 500);
    });
}

resolvedPromise()
    .then((value) => console.log(value))
    .catch((error) => console.log(error));

rejectedPromise()
    .then((value) => console.log(value))
    .catch((error) => console.log(error));