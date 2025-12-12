import taskService from "../services/taskService.js";

const getTask = async (req, res) => {
    try {
        const data = await taskService.getTask();
        res.status(200).json({ message: "lista de tareas", data:data });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const createTask = async (req, res) => {
    try {
        const body = req.body;
        const data = await taskService.createTask(body);
        res.status(201).json({ message: "tarea creada", data:data });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const updateTask = async (req, res) => {
    try {
        const body = req.body;
        const id = req.params.id;
        const data = await taskService.updateTask(id,body);
        res.status(200).json({ message: "tarea actualizada", data:data });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const deleteTask = async (req, res) => {
    try {
        const id = req.params.id;
        const data = await taskService.deleteTask(id);
        res.status(200).json({ message: "tarea eliminada", data:data });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

export default {
    getTask,
    createTask,
    updateTask,
    deleteTask
};