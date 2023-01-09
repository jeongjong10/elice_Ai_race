const express = require('express');
const app = express();
const port = 3000;

// generate middleware
const myLogger = (request, response, next) => {
	console.log('JOEL~!');
	next();
}

app.use(myLogger);


app.get('/', (request, response) => {
	response.send('Hello World');
});

app.listen(port, () => {
	console.log(`Example app listening on port ${port}`);
});
