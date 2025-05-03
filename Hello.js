
const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 3000;

app.use(cors());

app.get('/hello/mensaje', (req, res) => {
  res.json({ mensaje: '¡Hola Mundo desde el servidor Node.js!' });
});

app.use(express.static('public'));

app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});