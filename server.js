import express from 'express';
import bodyParser from 'body-parser';
 
const app = express();

app.use(bodyParser.json());

app.use((req, res, next) => {
	console.log('Will run before any route');
	next();
});

app.use('/users',(req, res, next) => {
	console.log('Will run before users route');
	next();
});

app.get('/', (req, res) => {
	console.log('Route / called')
	res.send('Hello World!');
});

app.get('/users', (req, res) => {
	console.log('Route /users called');
	res.send('Hey! You called the users!');
})

app.listen(3000, () => {
	console.log('Example app listening on port 3000!');
});