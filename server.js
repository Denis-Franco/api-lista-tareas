const express = require('express');
const bodyParser = require('body-parser');
const authRoutes = require('./routes/auth');
const todosRoutes = require('./routes/todos');
const morgan = require('morgan');

const app = express();
app.use(bodyParser.json());
app.use(morgan('dev'));

app.use('/api', authRoutes);
app.use('/api', todosRoutes);

app.listen(3000, () => {
  console.log('Servidor ejecutándose en el puerto 3000');
});
