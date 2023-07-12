const mongoose = require('mongoose');

const todoSc = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    phone: {
        type: String,
        required: false
    }
})

module.exports = mongoose.model('TodoUser', todoSc);