const Task = require('../models/task_model')

const createTask = async (req, res) => {
    const { feilds, title, description } = req.body;
    try {
        const newTask = new Task({
            feilds,
            title,
            description
        })

        await newTask.save()
        res.status(201).json({ message: 'task created successfully' });


    } catch (error) {
        res.status(500).json({ message: error.message });
    }

}

const getTask = async (req, res) => {
    const id = req.params.taskId;
    try {
        const task = await Task.findById(id);
        if (!task) {
            return res.status(404).json({ message: 'task not found' })
        }
        res.json({ task })
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

const getAllTasks = async (req, res) => {
    try {
        const task = await Task.find();
        if (!task) {
            return res.status(404).json({ message: 'NO tasks found ' })
        }
        res.json({ task })
    } catch (error) {
        res.status(500).json({ message: error.message });
    }

}

const updateTask = async (req, res) => {
    const id = req.params.taskId
    const { feilds, title, description } = req.body;
    try {
        const task = await Task.findByIdAndUpdate(
            id,
            {
                feilds, title, description
            },
            { new: true }
        );

        if (!task) {
            res.status(404).json({ message: error.message });
        }

        await newTask.save()
        res.status(201).json({ message: 'task created successfully' });


    } catch (error) {
        res.status(500).json({ message: error.message });
    }

}

const deleteTask = async (req, res) => {
    const id = req.params.taskId;
    console.log('Pizza ID to delete:', id);

    try {
        const task = await Task.findByIdAndDelete(id);
        console.log('Deleted task:', task);

        if (!task) {
            return res.status(404).json({ message: 'task not found' });
        }
        res.json({ message: 'task deleted', task });
    } catch (error) {
        console.error('Error deleting task:', error);
        res.status(500).json({ message: 'Error deleting task' });
    }
}


module.exports = {
    createTask,
    getTask,
    getAllTasks,
    updateTask,
    deleteTask,
}