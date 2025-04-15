// Import the Express framework
const express = require('express');

// Initialize the Express application
const app = express();

// Export the app for use in another file (like index.js)
module.exports = app;

// Define the port to run the server, defaulting to 4000 if not specified in environment variables
const PORT = process.env.PORT || 4000;

// Home route - basic welcome message
app.get('/', (req, res) => {
    res.json({ message: 'Welcome to the Advanced Calculator Microservice! 🚀' });
});

// Helper function to validate and parse input numbers
const validateNumbers = (num1, num2 = null) => {
    const n1 = parseFloat(num1);
    const n2 = num2 !== null ? parseFloat(num2) : null;
    if (isNaN(n1) || (num2 !== null && isNaN(n2))) {
        return { error: 'Invalid numbers. Please provide valid numerical values.' };
    }
    return { num1: n1, num2: n2 };
};

// Addition route
app.get('/add', (req, res) => {
    const { num1, num2, error } = validateNumbers(req.query.num1, req.query.num2);
    if (error) return res.status(400).json({ error });
    res.json({ operation: 'addition', result: num1 + num2 });
});

// Subtraction route
app.get('/subtract', (req, res) => {
    const { num1, num2, error } = validateNumbers(req.query.num1, req.query.num2);
    if (error) return res.status(400).json({ error });
    res.json({ operation: 'subtraction', result: num1 - num2 });
});

// Multiplication route
app.get('/multiply', (req, res) => {
    const { num1, num2, error } = validateNumbers(req.query.num1, req.query.num2);
    if (error) return res.status(400).json({ error });
    res.json({ operation: 'multiplication', result: num1 * num2 });
});

// Division route with zero-division check
app.get('/divide', (req, res) => {
    const { num1, num2, error } = validateNumbers(req.query.num1, req.query.num2);
    if (error) return res.status(400).json({ error });
    if (num2 === 0) return res.status(400).json({ error: 'Cannot divide by zero' });
    res.json({ operation: 'division', result: num1 / num2 });
});

// Exponentiation (power) route
app.get('/power', (req, res) => {
    const { num1, num2, error } = validateNumbers(req.query.num1, req.query.num2);
    if (error) return res.status(400).json({ error });
    res.json({ operation: 'exponentiation', result: Math.pow(num1, num2) });
});

// Square root route with negative number check
app.get('/sqrt', (req, res) => {
    const { num1, error } = validateNumbers(req.query.num1);
    if (error) return res.status(400).json({ error });
    if (num1 < 0) return res.status(400).json({ error: 'Cannot calculate square root of a negative number' });
    res.json({ operation: 'square root', result: Math.sqrt(num1) });
});

// Modulo route
app.get('/mod', (req, res) => {
    const { num1, num2, error } = validateNumbers(req.query.num1, req.query.num2);
    if (error) return res.status(400).json({ error });
    res.json({ operation: 'modulo', result: num1 % num2 });
});

// Global error handling middleware
app.use((err, req, res, next) => {
    console.error(err.stack); // Log the error stack trace to the console
    res.status(500).json({ error: 'Internal Server Error' }); // Send a generic error response
});

// Start the server and listen on the specified port
app.listen(PORT, () => {
    console.log(`Advanced Calculator Microservice running on port ${PORT}`);
});
