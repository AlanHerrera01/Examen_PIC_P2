import { useState } from 'react'
import type { Curso } from '../types'
import { obtenerCurso } from '../services/cursoService'

export default function ConsultarCurso() {
  const [id, setId] = useState<number>(0)
  const [curso, setCurso] = useState<Curso | null>(null)

  const buscar = async () => {
    const data = await obtenerCurso(id)
    setCurso(data)
  }

  return (
    <div>
      <h3>Consultar Curso</h3>
      <input type="number" placeholder="ID Curso" onChange={e => setId(Number(e.target.value))} />
      <button onClick={buscar}>Buscar</button>
      {curso && (
        <div>
          <p>Nombre: {curso.nombre}</p>
          <p>Descripción: {curso.descripcion}</p>
          <p>Estado: {curso.estado}</p>
          <p>Creador: {curso.id_creador}</p>
        </div>
      )}
    </div>
  )
}
