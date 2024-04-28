// Import Statements
import express from 'express';

// Configurations
const app = express();


// Middlewares

app.use(express.json());

const middleware1 = (req, res, next) => {
    console.log("Middleware 1 successfully executed!");
    next();
}

const middleware2 = (req, res, next) => {
    console.log("Middleware 2 successfully executed!");
    next();
}

const middleware3 = (req, res, next) => {
    console.log("Middleware 3 successfully executed!");
    next();
}


// API's
app.get('/get', middleware1, middleware2, middleware3, () => {
    console.log('All Middlewares Exected!');
})


// __main__
app.listen(3000, () => {
    console.log("Listening on port 3000...");
}) 