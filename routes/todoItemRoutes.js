const express = require('express');
const router = express.Router();
const todoItemController = require('../controllers/todoItemController');
const authenticate = require('../middlewares/auth');

router.post('/', authenticate, todoItemController.createTodoItem);
router.put('/:id', authenticate, todoItemController.updateTodoItem);
router.delete('/:id', authenticate, todoItemController.deleteTodoItem);

module.exports = router;
