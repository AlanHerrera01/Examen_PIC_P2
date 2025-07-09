import { useState } from 'react'
import { consultarSuscripcion } from '../services/suscripcionService'

export default function ConsultarSuscripcion() {
  const [usuarioId, setUsuarioId] = useState<number>(0)
  const [cursoId, setCursoId] = useState<number>(0)
  const [info, setInfo] = useState<any>(null)

  const consultar = async () => {
    const r = await consultarSuscripcion(usuarioId, cursoId)
    setInfo(r)
  }

  return (
    <div>
      <h3>Consultar Suscripción</h3>
      <input type="number" placeholder="ID Usuario" onChange={e => setUsuarioId(Number(e.target.value))} />
      <input type="number" placeholder="ID Curso" onChange={e => setCursoId(Number(e.target.value))} />
      <button onClick={consultar}>Consultar</button>
      {info && (
        <pre>{JSON.stringify(info, null, 2)}</pre>
      )}
    </div>
  )
}
