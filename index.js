const express = require('express')
const app = express()
const mongoose = require('mongoose')
app.use(express.json())
const taskRoute = require('./route/task_route')

mongoose.connect("mongodb://127.0.0.1:27017/interview", { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        app.listen(5000);
        console.log('connected')
    })
    .catch((error) => {
        console.log(error)
    })

    app.use('/task', taskRoute)
