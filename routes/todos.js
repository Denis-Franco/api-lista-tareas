const express = require('express');
const router = express.Router();
const todosController = require('../controllers/todosController');
const authMiddleware = require('../middlewares/authMiddleware');

router.get('/todos', authMiddleware, todosController.getTodos);


module.exports = router;
