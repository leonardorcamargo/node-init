import express from 'express';
import bodyParser from 'body-parser';
 
const app = express();

app.use(bodyParser.json());

app.use('/error', (req, res, next) => {
	console.log('Will run before error route');
	next(new Error('failed!'));
});

app.use('/users',(req, res, next) => {
	console.log('Will run before users route');
	next();
});

app.use((err, req, res, next) => {
	console.log('Something goes wrong!');
	res.status(500).send(err.message);
});

app.get('/', (req, res) => {
	console.log('Route / called')
	res.send('Hello World!');
});

app.get('/users', (req, res) => {
	console.log('Route /users called');
	res.send('Hey! You called the users!');
});

app.get('/error', (req, res) => {
	console.log('Route /error called');
	res.send('Hey! You called the error!');
});

app.get('/products', (req, res) => res.send([{
	name: 'Default product',
	description: 'product description',
	price: 100
}]));
   
export default app;
