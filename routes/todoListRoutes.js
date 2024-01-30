const express = require('express');
const router = express.Router();
const todoListController = require('../controllers/todoListController');
const authenticate = require('../middlewares/auth');

router.post('/', authenticate, todoListController.createTodoList);
router.get('/:userId', authenticate, todoListController.getTodoListsByUser);
router.put('/:id', authenticate, todoListController.updateTodoList);
router.delete('/:id', authenticate, todoListController.deleteTodoList);

module.exports = router;
