import express from 'express';
import bodyParser from 'body-parser';

import usersRoutes from './routes/users.js';

// Initialize our app variable, port
const app = express();
const PORT = 5001;

// Initialize bodyparser so that our server accepts json POST requests
app.use(bodyParser.json());

// Setting the starting path for all the routes 
app.use('/users', usersRoutes);

// Lets our app listen to incoming request and this callback function will run when server runs
app.listen(PORT, () => console.log(`Server running on port: http://localhost:${PORT}`));

// Routes

// Get request to home route
app.get('/', (req, res) => res.send("Hello from Homepage"));  