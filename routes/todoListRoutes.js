const express = require('express');
const router = express.Router();
const todoListController = require('../controllers/todoListController');
const authenticate = require('../middlewares/auth');

// Rota para criar uma nova lista
router.post('/', authenticate, todoListController.createTodoList);

// Rota para obter as listas de um usuário específico
router.get('/:userId', authenticate, todoListController.getTodoListsByUser);

// Rota para obter uma lista
router.get('/:id/unique', authenticate, todoListController.getTodoList);

// Rota para atualizar uma lista
router.put('/:id', authenticate, todoListController.updateTodoList);

// Rota para deletar uma lista
router.delete('/:id', authenticate, todoListController.deleteTodoList);

// Rota para atualizar ordem de uma lista
router.post('/:id/updateOrder', authenticate, todoListController.updateOrderList);

module.exports = router;
