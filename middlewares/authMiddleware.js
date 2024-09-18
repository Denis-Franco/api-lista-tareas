const jwt = require('jsonwebtoken');
const secretKey = 'mi_secreto';

module.exports = (req, res, next) => {
  const token = req.headers['authorization'];
  
  if (!token) {
    return res.status(401).json({ message: 'Token no proporcionado' });
  }

  try {
    const decoded = jwt.verify(token, secretKey);
    req.user = decoded;  // Guarda la información del usuario en la solicitud
    next();  // Permite que la solicitud continúe
  } catch (error) {
    return res.status(401).json({ message: 'Token no válido' });
  }
};
