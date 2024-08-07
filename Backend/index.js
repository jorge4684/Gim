const mongoose = require('mongoose');
const express = require('express');
const app = express();
app.use(express.json());

// Conectar a MongoDB
mongoose.connect('mongodb://localhost:27017/mi_base_de_datos', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

// Definir un esquema y un modelo
const personaSchema = new mongoose.Schema({
  nombre: String,
  edad: Number
});

const Persona = mongoose.model('Persona', personaSchema);

// Crear un registro
app.post('/personas', async (req, res) => {
  const persona = new Persona(req.body);
  try {
    const resultado = await persona.save();
    res.status(201).send(resultado);
  } catch (error) {
    res.status(400).send(error);
  }
});

// Leer todos los registros
app.get('/personas', async (req, res) => {
  try {
    const personas = await Persona.find();
    res.send(personas);
  } catch (error) {
    res.status(500).send(error);
  }
});

// Leer un registro por ID
app.get('/personas/:id', async (req, res) => {
  try {
    const persona = await Persona.findById(req.params.id);
    if (!persona) return res.status(404).send('Persona no encontrada');
    res.send(persona);
  } catch (error) {
    res.status(500).send(error);
  }
});

// Actualizar un registro
app.put('/personas/:id', async (req, res) => {
  try {
    const persona = await Persona.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!persona) return res.status(404).send('Persona no encontrada');
    res.send(persona);
  } catch (error) {
    res.status(400).send(error);
  }
});

// Eliminar un registro
app.delete('/personas/:id', async (req, res) => {
  try {
    const persona = await Persona.findByIdAndDelete(req.params.id);
    if (!persona) return res.status(404).send('Persona no encontrada');
    res.send(persona);
  } catch (error) {
    res.status(500).send(error);
  }
});

// Iniciar el servidor
app.listen(3000, () => {
  console.log('Servidor corriendo en http://localhost:3000');
});