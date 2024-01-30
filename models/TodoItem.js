const mongoose = require('mongoose');

const todoItemSchema = new mongoose.Schema({
    content: {
        type: String,
        required: true
    },
    completed: {
        type: Boolean,
        default: false
    }
});

module.exports = mongoose.model('TodoItem', todoItemSchema);
