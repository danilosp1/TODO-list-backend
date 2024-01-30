const express = require('express');
const router = express.Router();
const todoItemController = require('../controllers/todoItemController');
const authenticate = require('../middlewares/auth');

// Rota para adicionar um novo item à lista de tarefas
router.post('/', authenticate, todoItemController.createTodoItem);

// Rota para atualizar um item da lista de tarefas
router.put('/:id', authenticate, todoItemController.updateTodoItem);

// Rota para deletar um item da lista de tarefas
router.delete('/:id', authenticate, todoItemController.deleteTodoItem);

module.exports = router;
