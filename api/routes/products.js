const express = require('express');

const router = express.Router();

router.get('/', (req, res, next) => {

    res.status(200).json({
        message: 'Handling GET requests to /products'
    });    

});

router.post('/', (req, res, next) => {

    const newProduct = {
        name: req.body.name,
        price: req.body.price,
    }

    res.status(200).json({
        message: 'Handling POST requests to /products',
        createdProduct: newProduct,
        
    });    

});

router.get('/:productId', (req, res, next) => {
    const id = req.params.productId;

    if(id === 'special') {
        res.status(200).json({
            message: 'You discovered the special ID',
            id: id
        });
    } else {
        res.status(200).json({
            message: 'You passed an ID'
        });
    }

});

router.patch('/:productId', (req, rest, next) => {

    const productId = req.productId ;

    rest.status(200).json({
        message: "Updated Successfully "+ productId
    })
})


module.exports = router;  