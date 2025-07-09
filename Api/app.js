import express from 'express'
import cors from 'cors'
import pool from './db/conexion.js'
import usuariosRouter from './routes/usuarios.js'
import cursosRouter from './routes/cursos.js'
import suscripcionesRouter from './routes/suscripciones.js'

const app = express()
app.use(express.json())
app.use(cors())

// Prueba conexión a la base
pool.connect()
  .then(() => console.log('✅ Conexión a PostgreSQL exitosa'))
  .catch(err => {
    console.error('❌ Error al conectar con la base de datos:', err.message)
    process.exit(1) // Sale del proceso si no conecta
  })

// Rutas
app.use('/usuarios', usuariosRouter)
app.use('/cursos', cursosRouter)
app.use('/suscripciones', suscripcionesRouter)

const PORT = 3000
app.listen(PORT, () => console.log(`🚀 Servidor escuchando en http://localhost:${PORT}`))
