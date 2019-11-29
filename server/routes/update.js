const express = require('express')
const router = express.Router();

// Items model

const Items = require("../models/Items")

// Handlers

// @route   POST user/add
// @desc    Adding item(s) 
// @access  Public

router.post("/one", (req,res)=>{
    const {item, money} = req.body
        Items.findOne({ item })
        .then( item =>{
            if(true){
                const newEntry = new Items({item,money})
                newEntry.save()
                .then(data =>console.log('Successfully included'))
                .catch(err => console.log(err))
            }
        })
        .then(res.send('Added'))
})


module.exports = router; 