const express = require('express');
const router = express.Router();
const todoListController = require('../controllers/todoListController');
const authenticate = require('../middlewares/auth');

// Agora as rotas estão protegidas pelo middleware de autenticação
router.post('/', authenticate, todoListController.createTodoList);
router.get('/:userId', authenticate, todoListController.getTodoListsByUser);
router.put('/:id', authenticate, todoListController.updateTodoList);
router.delete('/:id', authenticate, todoListController.deleteTodoList);

module.exports = router;
