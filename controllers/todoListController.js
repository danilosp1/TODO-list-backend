const TodoList = require('../models/TodoList');
const TodoItem = require('../models/TodoItem')
const User = require('../models/User');
const todoItemController = require('../controllers/todoItemController')

// Criar uma nova lista de tarefas
exports.createTodoList = async (req, res) => {
    try {
        const { title, userId } = req.body;

        // Verificar se o usuário existe
        const user = await User.findById(userId);
        if (!user) {
            return res.status(404).json({ message: 'Usuário não encontrado' });
        }

        const newTodoList = new TodoList({ title, user: userId });
        await newTodoList.save();

        res.status(201).json(newTodoList);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Obter todas as listas de um usuário
exports.getTodoListsByUser = async (req, res) => {
    try {
        const userId = req.params.userId;
        const todoLists = await TodoList.find({ user: userId });

        res.json(todoLists);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Atualizar uma lista de tarefas
exports.updateTodoList = async (req, res) => {
    try {
        const { title, items } = req.body;
        const todoListId = req.params.id;

        const updatedTodoList = await TodoList.findByIdAndUpdate(todoListId, { title, items }, { new: true });
        if (!updatedTodoList) {
            return res.status(404).json({ message: 'Lista de tarefas não encontrada' });
        }


        res.json(updatedTodoList);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Deletar uma lista de tarefas
exports.deleteTodoList = async (req, res) => {
    try {
        const todoListId = req.params.id;
        
        const deletedTodoList = await TodoList.findByIdAndDelete(todoListId);
        if (!deletedTodoList) {
            return res.status(404).json({ message: 'Lista de tarefas não encontrada' });
        }        

        deletedTodoList.items.map(async (item) => {
            console.log(item._id.toString())
            await TodoItem.findByIdAndDelete(item._id.toString());
        })

        res.json({ message: 'Lista de tarefas deletada com sucesso' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.updateOrderList = async (req, res) => {
    try {
        const todoListId = req.params.id;
        const { itemIds } = req.body; 

        const todoList = await TodoList.findById(todoListId);
        if (!todoList) {
            return res.status(404).send('Lista não encontrada.');
        }

        todoList.items = itemIds;
        await todoList.save();

        res.send('Ordem atualizada com sucesso.');
    } catch (error) {
        console.error(error);
        res.status(500).send('Erro ao atualizar a ordem da lista.');
    }
}