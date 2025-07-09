import { useState } from 'react'
import { cambiarEstadoCurso } from '../services/cursoService'

export default function CambiarEstadoCurso() {
  const [id, setId] = useState(0)
  const [nuevoEstado, setNuevoEstado] = useState('')

  const handleChangeEstado = async () => {
    const r = await cambiarEstadoCurso(id, nuevoEstado)
    alert(JSON.stringify(r))
  }

  return (
    <div>
      <h3>Cambiar Estado Curso</h3>
      <input type="number" placeholder="ID Curso" onChange={e => setId(Number(e.target.value))} />
      <input placeholder="Nuevo Estado" onChange={e => setNuevoEstado(e.target.value)} />
      <button onClick={handleChangeEstado}>Cambiar Estado</button>
    </div>
  )
}
