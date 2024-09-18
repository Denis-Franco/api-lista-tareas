const connectDB = require('../models/db');

exports.getTodos = async (req, res) => {
  const userId = req.user.id;

  try {
    const db = await connectDB();
    const todos = await db.query(`SELECT * FROM Tareas WHERE user_id = ${userId}`);
    res.json(todos);
  } catch (error) {
    res.status(500).json({ message: 'Error al obtener tareas' });
  }
};


