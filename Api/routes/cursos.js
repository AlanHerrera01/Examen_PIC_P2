import express from 'express';
import pool from '../db/conexion.js';
const router = express.Router();

// Crear curso
router.post('/', async (req, res) => {
  const { nombre, descripcion, estado, id_creador } = req.body;
  try {
    await pool.query(
      'INSERT INTO cursos (nombre, descripcion, estado, id_creador) VALUES ($1, $2, $3, $4)',
      [nombre, descripcion, estado, id_creador]
    );
    res.json({ mensaje: 'Curso creado exitosamente' });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Error al crear curso' });
  }
});

// Consultar curso
router.get('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const result = await pool.query('SELECT * FROM cursos WHERE id = $1', [id]);
    if (result.rows.length === 0) return res.status(404).json({ mensaje: 'Curso no encontrado' });
    res.json(result.rows[0]);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Error al consultar curso' });
  }
});

// Cambiar estado de curso
router.put('/:id/estado', async (req, res) => {
  const { id } = req.params;
  const { nuevo_estado } = req.body;
  try {
    await pool.query('UPDATE cursos SET estado = $1 WHERE id = $2', [nuevo_estado, id]);
    res.json({ mensaje: 'Estado del curso actualizado' });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Error al actualizar estado' });
  }
});

export default router;
