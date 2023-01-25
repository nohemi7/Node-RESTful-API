import express from 'express';
import bodyParser from 'body-parser';

// Initialize our app variable, port
const app = express();
const PORT = 5001;

// Initialize bodyparser so that our server accepts json POST requests
app.use(bodyParser.json());

// Lets our app listen to incoming request and this callback function will run when server runs
app.listen(PORT, () => console.log(`Server running on port: http://localhost:${PORT}`));