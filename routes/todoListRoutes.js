const express = require('express');
const router = express.Router();
const todoListController = require('../controllers/todoListController');
const authenticate = require('../middlewares/auth');

router.post('/', todoListController.createTodoList);
router.get('/:userId', todoListController.getTodoListsByUser);
router.put('/:id', todoListController.updateTodoList);
router.delete('/:id', todoListController.deleteTodoList);

module.exports = router;
