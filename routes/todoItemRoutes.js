const express = require('express');
const router = express.Router();
const todoItemController = require('../controllers/todoItemController');
const authenticate = require('../middlewares/auth');

// Rota para criar um item
router.post('/', authenticate, todoItemController.createTodoItem);

// Rota para obter os itens de uma lista específica
router.get('/list/:id', authenticate, todoItemController.getTodoItemsByList);

// Rota para obter um item
router.get('/:id', authenticate, todoItemController.getTodoItem);

// Rota para atualizar um item
router.put('/:id', authenticate, todoItemController.updateTodoItem);

// Rota para deletar um item
router.delete('/:id', authenticate, todoItemController.deleteTodoItem);

module.exports = router;
