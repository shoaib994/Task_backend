
const path = require('path');
const fs=require('fs');
const { 
  v1: uuidv1,
  v4: uuidv4,
} = require('uuid');

exports.signup= async (req, res, next) => {
  try {
    
    const absoluteFilePath = path.join(__dirname, 'user.json');
    const users = JSON.parse(fs.readFileSync(absoluteFilePath, 'utf8'));
    
    console.log('users',users)
    const { user_name, password, group_name, group_id } = req.body;
    const isEmailAlreadyPresent = users?.users?.some(user => user.user_name === user_name);
    
    if (isEmailAlreadyPresent) {
      return res.status(400).json({ error: 'Email is already registered' });
    }
    const newUser = { user_name, password,group_name, group_id};
    users.users.push(newUser);
    console.log("JSON.stringify(users)",JSON.stringify(users))
    fs.writeFileSync(absoluteFilePath, JSON.stringify(users));

    res.status(201).json({ message: 'User added successfully', user: newUser });


  }
  catch (error) {
    return res.json({
      success: false,
      message: error.message
    })
  }
}
exports.login= async (req, res, next) => {
  try {
    
    
    const absoluteFilePath = path.join(__dirname, 'user.json');
    const users = JSON.parse(fs.readFileSync(absoluteFilePath, 'utf8'));
    
    console.log('users',users)
    const { user_name, password } = req.body;
    const isEmailAlreadyPresent = users?.users?.filter(user => user.user_name === user_name&&user.password === password);
    
    if (isEmailAlreadyPresent?.length<1) {
      return res.status(400).json({ error: 'user not found' });
    }
    
    res.status(201).json({ message: 'User login successfully', user: isEmailAlreadyPresent });


  }
  catch (error) {
    return res.json({
      success: false,
      message: error.message
    })
  }
}
exports.addTask= async (req, res, next) => {
  try {
    const taskid=uuidv1();
    const absoluteFilePath = path.join(__dirname, 'tasks.json');
    const tasks = JSON.parse(fs.readFileSync(absoluteFilePath, 'utf8'));
    
    console.log('tasks',tasks)
    const { group_id,group_name,title, description } = req.body;
   
    const newtask = { id:taskid,group_id, group_name,title, description,status:'incomplete'};
    tasks.tasks.push(newtask);
    console.log("JSON.stringify(users)",JSON.stringify(tasks))
    fs.writeFileSync(absoluteFilePath, JSON.stringify(tasks));
    const getAllTask = tasks?.tasks?.filter(task => task.group_id == group_id);

    res.status(201).json({ message: 'user task added successfully', tasks: getAllTask });

  }
  catch (error) {
    return res.json({
      success: false,
      message: error.message
    })
  }
}

exports.getAllTask= async (req, res, next) => {
  try {
    
    const absoluteFilePath = path.join(__dirname, 'tasks.json');
    const tasks = JSON.parse(fs.readFileSync(absoluteFilePath, 'utf8'));
    
    const { group_id } = req.params;
    console.log("group_idgroup_id",group_id)
    const getAllTask = tasks?.tasks?.filter(task => task.group_id == group_id);
    console.log('users',tasks)
    
 
    
    res.status(201).json({ tasks:getAllTask });


  }
  catch (error) {
    return res.json({
      success: false,
      message: error.message
    })
  }
}
exports.deleteTask= async (req, res, next) => {
  try {
    
     
    const absoluteFilePath = path.join(__dirname, 'tasks.json');
    const tasks = JSON.parse(fs.readFileSync(absoluteFilePath, 'utf8'));
  
    const { id,group_id } = req.params;
    const {status}=req.body;
    const taskToUpdate = tasks.tasks.find((task) => task.id === id);

    // If the task with the given ID is not found, return 404 Not Found
    if (!taskToUpdate) {
      return res.status(404).json({ error: 'Task not found' });
    }

    // Update the status of the task
    taskToUpdate.status = "deleted";
    fs.writeFileSync(absoluteFilePath, JSON.stringify(tasks));
    const getAllTask = tasks?.tasks?.filter(task => task.group_id == group_id);
    res.status(201).json({ message:'task deleted successfully',data:getAllTask });
  }
  catch (error) {
    return res.json({
      success: false,
      message: error.message
    })
  }
}
exports.updateTask= async (req, res, next) => {
  try {
    
    const absoluteFilePath = path.join(__dirname, 'tasks.json');
    const tasks = JSON.parse(fs.readFileSync(absoluteFilePath, 'utf8'));
  
    const { id,group_id } = req.params;
    const {status}=req.body;
    const taskToUpdate = tasks.tasks.find((task) => task.id === id);

    // If the task with the given ID is not found, return 404 Not Found
    if (!taskToUpdate) {
      return res.status(404).json({ error: 'Task not found' });
    }

    // Update the status of the task
    taskToUpdate.status = status;
    fs.writeFileSync(absoluteFilePath, JSON.stringify(tasks));
    const getAllTask = tasks?.tasks?.filter(task => task.group_id == group_id);
    res.status(201).json({ message:'task status updated successfully',data:getAllTask });


  }
  catch (error) {
    return res.json({
      success: false,
      message: error.message
    })
  }
}

