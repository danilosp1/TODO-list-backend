const express = require('express');
const router = express.Router();
const todoListController = require('../controllers/todoListController');
const authenticate = require('../middlewares/auth');

router.post('/', todoListController.createTodoList);
router.get('/:userId', todoListController.getTodoListsByUser);
router.get('/:id/unique', todoListController.getTodoList);
router.put('/:id', todoListController.updateTodoList);
router.delete('/:id', todoListController.deleteTodoList);
router.post('/:id/updateOrder', todoListController.updateOrderList);

module.exports = router;
