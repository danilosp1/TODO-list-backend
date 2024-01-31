const mongoose = require('mongoose');

const todoItemSchema = new mongoose.Schema({
    content: {
        type: String,
        required: true
    },
    completed: {
        type: Boolean,
        default: false
    },
    list: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'TodoList',
        required: true
    }
});

module.exports = mongoose.model('TodoItem', todoItemSchema);
