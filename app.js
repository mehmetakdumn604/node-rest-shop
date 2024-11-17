
const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser')
const app = express();

const productsRoute = require('./api/routes/products');

const ordersRoute = require('./api/routes/orders');


app.use(morgan('dev'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// cors policy issue resolve
app.use((req, res, next) => {

    res.header('Allow-Control-Access-Origin', "*");
    res.header('Access-Control-Allow-Headers', "Origin, X-Requested-With, Content-Type, Accept, Authorization");

    if (req.method === "OPTIONS") {
        res.header('Access-Control-Allow-Methods', "POST, DELETE, PATCH, GET");
        res.status(200).json({});
    }


    next();

});

// this method is middleware 
app.use("/products", productsRoute);  
app.use("/orders", ordersRoute);  

app.use((req, res, next)=> {
    const error = new Error("Path not found");
    error.status = 404;
    next(error);
});

app.use((error, req, res, next)=> {

    res.status(error.status || 500);
    res.json({
        error: {
            message: error.message
        }
    });


});




module.exports = app;