const express = require('express')
const mongoose = require('mongoose')
const bodyparser = require('body-parser')
const cors = require('cors')


const app = express()

const PORT = process.env.PORT || 8080


// DB config

const db = require('./config/key').url

// Connect to db

mongoose.connect(db, { useNewUrlParser:true, useUnifiedTopology:true })
.then(()=>console.log('MongoDB connected...'))
.catch(err=>console.log(err))

// Bodyparser 

app.use(express.urlencoded({ extended:false }))
app.use(bodyparser.json())
app.use(cors())

// Routes

app.get("/", (req,res)=>{
    res.send("Server is up and Home route is working")
})

app.use("/add", require('./routes/update'))

app.listen(PORT, console.log("App is running at "+PORT))