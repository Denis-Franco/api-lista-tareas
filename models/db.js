const odbc = require('odbc');

const connectionString = 'Driver={Microsoft Access Driver (*.mdb, *.accdb)};Dbq=C:\Users\denis\OneDrive\Documents\Database1.accdb';  // Configura tu DSN de Access

async function connectDB() {
  try {
    const connection = await odbc.connect(connectionString);
    return connection;
  } catch (error) {
    console.error('Error al conectar a la base de datos:', error);
  }
}

module.exports = connectDB;
