const TodoItem = require('../models/TodoItem');
const TodoList = require('../models/TodoList');

// Adicionar um novo item à lista de tarefas
exports.createTodoItem = async (req, res) => {
    try {
        const { content, todoListId } = req.body;

        // Verificar se a lista de tarefas existe
        const todoList = await TodoList.findById(todoListId);
        if (!todoList) {
            return res.status(404).json({ message: 'Lista de tarefas não encontrada' });
        }

        const newTodoItem = new TodoItem({ content, list: todoListId });
        await newTodoItem.save();

        // Adicionar o item à lista de tarefas
        todoList.items.push(newTodoItem._id);
        await todoList.save();

        res.status(201).json(newTodoItem);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Obter um item da lista de tarefas
exports.getTodoItem = async (req, res) => {
    try {
        const todoItemId = req.params.id;
        const todoItem = await TodoItem.findById(todoItemId);

        res.json(todoItem);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Obter os itens a partir da lista de tarefas
exports.getTodoItemsByList = async (req, res) => {
    try {
        const todoListId = req.params.id;
        const todoItems = await TodoItem.find({ list: todoListId });

        res.json(todoItems);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Atualizar um item da lista de tarefas
exports.updateTodoItem = async (req, res) => {
    try {
        const { content, completed, list } = req.body;
        const todoItemId = req.params.id;

        const updatedTodoItem = await TodoItem.findByIdAndUpdate(todoItemId, { content, completed, list }, { new: true });
        if (!updatedTodoItem) {
            return res.status(404).json({ message: 'Item de tarefa não encontrado' });
        }

        res.json(updatedTodoItem);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Deletar um item da lista de tarefas
exports.deleteTodoItem = async (req, res) => {
    try {
        const todoItemId = req.params.id;

        const deletedTodoItem = await TodoItem.findByIdAndDelete(todoItemId);
        if (!deletedTodoItem) {
            return res.status(404).json({ message: 'Item de tarefa não encontrado' });
        }

        // Remover o item da lista de tarefas
        await TodoList.updateOne({ items: todoItemId }, { $pull: { items: todoItemId } });

        res.json({ message: 'Item de tarefa deletado com sucesso' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
