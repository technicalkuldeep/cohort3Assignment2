const fs = require('fs');
const axios = require('axios');

// Promisified version of setTimeout
const delay = (delayTimer) => {
    return new Promise((resolve) => {
        setTimeout(resolve, delayTimer);
    });
};

// Promisified version of fetch using axios (since fetch is not natively available in Node.js)
const fetchData = (url) => {
    return new Promise((resolve, reject) => {
        axios.get(url)
            .then(response => resolve(response.data))
            .catch(error => reject(error));
    });
};

// Promisified version of fs.readFile
const readFile = (filePath) => {
    return new Promise((resolve, reject) => {
        fs.readFile(filePath, 'utf8', (err, data) => {
            if (err) {
                reject(err);
            } else {
                resolve(data);
            }
        });
    });
};

// Example usage:

// 1. Using the promisified setTimeout
delay(3000).then(() => console.log('Executed after 3 seconds'));

// 2. Using the promisified fetch
fetchData('https://jsonplaceholder.typicode.com/posts/1')
    .then(data => console.log('Fetched data:', data))
    .catch(error => console.error('Fetch error:', error));

// 3. Using the promisified fs.readFile
readFile('example.txt')
    .then(data => console.log('File content:', data))
    .catch(error => console.error('Read error:', error));
