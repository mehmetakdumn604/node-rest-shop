const express = require('express');

const router = express.Router();

router.get("/", (req,res,next)=>{

    res.status(200).json({
        message: "Fetched all products successfully"
    });

});

router.get("/:productId", (req,res,next)=>{

    res.status(200).json({
        message: "Fetched product successfully"
    });

});

router.post("/", (req,res,next)=>{

    res.status(200).json({
        message: "Added new product successfully"
    });

});

router.patch("/:productId", (req,res,next)=>{

    res.status(200).json({
        message: "Updated product successfully"
    });

});


router.delete("/:productId", (req,res,next)=>{

    res.status(200).json({
        message: "Deleted product successfully"
    });

});



module.exports = router; 