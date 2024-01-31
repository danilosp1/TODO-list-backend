const express = require('express');
const router = express.Router();
const todoItemController = require('../controllers/todoItemController');
const authenticate = require('../middlewares/auth');

router.post('/', todoItemController.createTodoItem);
router.get('/list/:id', todoItemController.getTodoItemsByList);
router.get('/:id', todoItemController.getTodoItem);
router.put('/:id', todoItemController.updateTodoItem);
router.delete('/:id', todoItemController.deleteTodoItem);

module.exports = router;
