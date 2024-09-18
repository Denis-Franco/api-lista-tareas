const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const connectDB = require('../models/db');

const secretKey = 'mi_secreto';

exports.register = async (req, res) => {
  const { name, email, password } = req.body;
  const hashedPassword = await bcrypt.hash(password, 10);

  try {
    const db = await connectDB();
    await db.query(`INSERT INTO Usuarios (name, email, password) VALUES ('${name}', '${email}', '${hashedPassword}')`);
    
    const token = jwt.sign({ email }, secretKey);
    res.json({ token });
  } catch (error) {
    res.status(500).json({ message: 'Error al registrar el usuario' });
  }
};

exports.login = async (req, res) => {
  const { email, password } = req.body;

  try {
    const db = await connectDB();
    const user = await db.query(`SELECT * FROM Usuarios WHERE email = '${email}'`);
    
    if (user.length && await bcrypt.compare(password, user[0].password)) {
      const token = jwt.sign({ email }, secretKey);
      res.json({ token });
    } else {
      res.status(401).json({ message: 'Credenciales inválidas' });
    }
  } catch (error) {
    res.status(500).json({ message: 'Error en la autenticación' });
  }
};
