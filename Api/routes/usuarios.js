import express from 'express';
import pool from '../db/conexion.js';

const router = express.Router();

// Crear usuario
router.post('/', async (req, res) => {
  try {
    const { nombres, apellidos, email, contraseña, tipo_usuario } = req.body;
    await pool.query(
      'INSERT INTO usuarios (nombres, apellidos, email, contraseña, tipo_usuario) VALUES ($1, $2, $3, $4, $5)',
      [nombres, apellidos, email, contraseña, tipo_usuario]
    );
    res.json({ mensaje: 'Usuario creado exitosamente' });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Error al crear usuario' });
  }
});

// Consultar usuario
router.get('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const resultado = await pool.query('SELECT * FROM usuarios WHERE id = $1', [id]);
    if (resultado.rows.length === 0) return res.status(404).json({ mensaje: 'Usuario no encontrado' });
    res.json(resultado.rows[0]);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Error al consultar usuario' });
  }
});

// Obtener todos los usuarios (para login simple)
router.get('/', async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM usuarios')
    res.json(result.rows)
  } catch (err) {
    console.error(err)
    res.status(500).json({ error: 'Error al obtener usuarios' })
  }
});
export default router;
