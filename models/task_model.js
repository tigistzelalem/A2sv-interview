const mongoose = require('mongoose')
const Schema = mongoose.Schema

const task = new Schema({
    feilds: {
        type: String,
        requier: true
    },
    title: {
        type: String,
        required: true

    },
    description: {
        type: String,
        required: true
    }
})

module.exports = mongoose.model('Task', task);