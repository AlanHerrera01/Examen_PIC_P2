import { useState } from 'react'
import { suscribir, cancelarSuscripcion } from '../services/suscripcionService'

export default function SuscripcionCurso() {
  const [usuarioId, setUsuarioId] = useState(0)
  const [cursoId, setCursoId] = useState(0)

  const handleSuscribir = async () => {
    const r = await suscribir({ usuario_id: usuarioId, curso_id: cursoId })
    alert(JSON.stringify(r))
  }

  const handleCancelar = async () => {
    const r = await cancelarSuscripcion({ usuario_id: usuarioId, curso_id: cursoId })
    alert(JSON.stringify(r))
  }

  return (
    <div>
      <h3>Suscripción a Curso</h3>
      <input type="number" placeholder="ID Usuario" onChange={e => setUsuarioId(Number(e.target.value))} />
      <input type="number" placeholder="ID Curso" onChange={e => setCursoId(Number(e.target.value))} />
      <button onClick={handleSuscribir}>Suscribir</button>
      <button onClick={handleCancelar}>Cancelar Suscripción</button>
    </div>
  )
}
