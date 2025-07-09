import express from 'express';
import pool from '../db/conexion.js';
const router = express.Router();

// Suscribir a curso
router.post('/', async (req, res) => {
  const { usuario_id, curso_id } = req.body;
  try {
    await pool.query(
      'INSERT INTO suscripciones (usuario_id, curso_id) VALUES ($1, $2)',
      [usuario_id, curso_id]
    );
    res.json({ mensaje: 'Suscripción creada' });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Error al suscribir' });
  }
});

// Cancelar suscripción
router.delete('/', async (req, res) => {
  const { usuario_id, curso_id } = req.body;
  try {
    await pool.query(
      'DELETE FROM suscripciones WHERE usuario_id = $1 AND curso_id = $2',
      [usuario_id, curso_id]
    );
    res.json({ mensaje: 'Suscripción cancelada' });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Error al cancelar suscripción' });
  }
});

// Consultar suscripción
router.get('/:usuario_id/:curso_id', async (req, res) => {
  const { usuario_id, curso_id } = req.params;
  try {
    const result = await pool.query(
      'SELECT * FROM suscripciones WHERE usuario_id = $1 AND curso_id = $2',
      [usuario_id, curso_id]
    );
    if (result.rows.length === 0) return res.status(404).json({ mensaje: 'No existe suscripción' });
    res.json(result.rows[0]);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Error al consultar suscripción' });
  }
});

export default router;
