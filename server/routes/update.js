const express = require('express')
const router = express.Router();

// Items model

const Items = require("../models/Items")

// Handlers

// @route   POST user/add
// @desc    Adding item(s) 
// @access  Public
// let arr = req.body
router.post("/one", (req,res)=>{
    const {object} =req.body
    console.log(object.value)
    res.send(object.value)
        // Items.findOne({ item })
        // .then( () =>{
        //     if(true){
        //         const newEntry = new Items({
        //             item,
        //             money
        //         })
        //         newEntry.save()
        //         .then(data =>{
        //             console.log('Successfully included')
        //             console.log(data)
        //         })
        //         .catch(err => console.log(err))
        //     }
        // })
        // .then(res.send('Added'))
})


module.exports = router; 