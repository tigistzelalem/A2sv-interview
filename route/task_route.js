const express = require('express')
const router = express.Router()
const taskController = require('../controller/task_controller')

router.post('/create', taskController.createTask);
router.get('/getTask/:taskId', taskController.getTask);
router.get('/getAllTasks', taskController.getAllTasks);
router.put('/updateTask/:taskId', taskController.updateTask);
router.delete('/deleteTask/:taskId', taskController.deleteTask);

module.exports = router
