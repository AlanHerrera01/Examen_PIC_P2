import { useState } from 'react'
import type { Usuario } from '../types'

interface Props {
  onLogin: (user: Usuario) => void
}

export default function Login({ onLogin }: Props) {
  const [email, setEmail] = useState('')
  const [contraseña, setContraseña] = useState('')

  const handleLogin = async () => {
    console.log('Intentando login con:', email, contraseña)
    const res = await fetch('http://localhost:3000/usuarios')
    const usuarios: Usuario[] = await res.json()
    console.log('Usuarios obtenidos:', usuarios)

    const user = usuarios.find(u => u.email === email && u.contraseña === contraseña)
    if (user) {
      alert(`Bienvenido ${user.nombres}, eres ${user.tipo_usuario}`)
      onLogin(user)
    } else {
      alert('Credenciales incorrectas')
    }
  }

  return (
    <div>
      <h3>Login</h3>
      <input placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} />
      <input type="password" placeholder="Contraseña" value={contraseña} onChange={e => setContraseña(e.target.value)} />
      <button onClick={handleLogin}>Login</button>
    </div>
  )
}
