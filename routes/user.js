const express = require('express');

const router = express.Router();

const { login,signup,addTask,getAllTask,deleteTask,updateTask} = require('../controller/user');

router.post('/login', login);
router.post('/register', signup);
router.post('/task', addTask);
router.get('/task/:group_id', getAllTask);
router.delete('/task/:id/:group_id', deleteTask);
router.put('/task/:id/:group_id', updateTask);

// router.post('/create_file',upload.single('file'), generateFile);
// router.post('/file', createFile);


module.exports = router;