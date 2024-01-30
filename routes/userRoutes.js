const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

// Rota para cadastrar um novo usuário
router.post('/register', userController.register);

// Rota para autenticar um usuário
router.post('/login', userController.login);

// Rota para obter informações de um usuário específico
router.get('/:id', userController.getUser);

// Rota para atualizar um usuário
router.put('/:id', userController.updateUser);

// Rota para deletar um usuário
router.delete('/:id', userController.deleteUser);

module.exports = router;
