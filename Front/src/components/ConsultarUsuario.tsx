import { useState } from 'react'
import type { Usuario } from '../types'
import { obtenerUsuario } from '../services/usuarioServices'

export default function ConsultarUsuario() {
  const [id, setId] = useState<number>(0)
  const [usuario, setUsuario] = useState<Usuario | null>(null)

  const buscar = async () => {
    const data = await obtenerUsuario(id)
    setUsuario(data)
  }

  return (
    <div>
      <h3>Consultar Usuario</h3>
      <input type="number" placeholder="ID Usuario" onChange={e => setId(Number(e.target.value))} />
      <button onClick={buscar}>Buscar</button>
      {usuario && (
        <div>
          <p>{usuario.nombres} {usuario.apellidos}</p>
          <p>Email: {usuario.email}</p>
          <p>Tipo: {usuario.tipo_usuario}</p>
        </div>
      )}
    </div>
  )
}
