import { useState } from 'react'
import type { Usuario } from '../types'
import { crearUsuario } from '../services/usuarioServices'

export default function CrearUsuario() {
  const [usuario, setUsuario] = useState<Usuario>({
    nombres: '',
    apellidos: '',
    email: '',
    contraseña: '',
    tipo_usuario: ''
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUsuario({ ...usuario, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    const r = await crearUsuario(usuario)
    alert(JSON.stringify(r))
  }

  return (
    <form onSubmit={handleSubmit}>
      <h3>Crear Usuario</h3>
      <input name="nombres" placeholder="Nombres" onChange={handleChange} />
      <input name="apellidos" placeholder="Apellidos" onChange={handleChange} />
      <input name="email" placeholder="Email" onChange={handleChange} />
      <input name="contraseña" type="password" placeholder="Contraseña" onChange={handleChange} />
      <input name="tipo_usuario" placeholder="Tipo Usuario" onChange={handleChange} />
      <button>Crear Usuario</button>
    </form>
  )
}
