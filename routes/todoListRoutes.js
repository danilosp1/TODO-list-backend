const express = require('express');
const router = express.Router();
const todoListController = require('../controllers/todoListController');
const authenticate = require('../middlewares/auth');

router.post('/', authenticate, todoListController.createTodoList);
router.get('/:userId', authenticate, todoListController.getTodoListsByUser);
router.get('/:id/unique', authenticate, todoListController.getTodoList);
router.put('/:id', authenticate, todoListController.updateTodoList);
router.delete('/:id', authenticate, todoListController.deleteTodoList);
router.post('/:id/updateOrder', authenticate, todoListController.updateOrderList);

module.exports = router;
