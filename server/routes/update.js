const express = require('express')
const router = express.Router();

// Items model

const Items = require("../models/Items")

// Handlers

// @route   POST user/add
// @desc    Adding item(s) 
// @access  Public
let arr = [ { item: 'Arul', money: '100' }, { item: 'Samantha', money: '500' }, { item: 'Boby', money: '10' }]
router.post("/one", (arr,res)=>{
    const {item, money} =req.body
    console.log(req.body)
        Items.findOne({ item })
        .then( () =>{
            if(true){
                const newEntry = new Items({
                    item,
                    money
                })
                newEntry.save()
                .then(data =>{
                    console.log('Successfully included')
                    console.log(data)
                })
                .catch(err => console.log(err))
            }
        })
        .then(res.send('Added'))
})


module.exports = router; 