const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors'); // This is to handle CORS if your frontend and backend are on different ports

const app = express();

// Use CORS middleware to handle cross-origin requests (if necessary)
app.use(cors());

// Middleware to parse incoming JSON data
app.use(bodyParser.json());

// Serve static files (HTML, CSS, JS) from the public folder
app.use(express.static('public'));

// Route to handle login form submission
app.post('/login', (req, res) => {
    // Get the username and password from the request body
    const { username, password } = req.body;

    // Log the received username and password to the console
    console.log(`Received login info - Username: ${username}, Password: ${password}`);

    // Respond back to the client with a simple message
    res.send("Login details received!");
});

// Start the server on port 5500
app.listen(5500, () => {
    console.log('Server is running on http://localhost:5500');
});
