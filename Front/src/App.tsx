import { useState } from 'react'
import  type { Usuario } from './types'
import CrearUsuario from './components/CrearUsuario'
import CrearCurso from './components/CrearCrusos'
import CambiarEstadoCurso from './components/CambiarEstadoCurso'
import SuscripcionCurso from './components/SuscripcionCurso'
import ConsultarCurso from './components/ConsultarCurso'
import ConsultarSuscripcion from './components/ConsultarSuscripcion'

function App() {
  const [user, setUser] = useState<Usuario | null>(null)
  const [nombres, setNombres] = useState('')
  const [contraseña, setContraseña] = useState('')

  const handleLogin = async () => {
    const res = await fetch('http://localhost:3000/usuarios')
    const usuarios: Usuario[] = await res.json()
    const u = usuarios.find(us => us.nombres === nombres && us.contraseña === contraseña)
    if (u) {
      alert(`Bienvenido ${u.nombres}, eres ${u.tipo_usuario}`)
      setUser(u)
    } else {
      alert('Login incorrecto')
    }
  }

  return (
    <div style={{ padding: '2rem' }}>
      <h1>Sistema Suscripción Cursos</h1>

      {!user && (
        <div>
          <h3>Login</h3>
          <input placeholder="Nombres" onChange={e => setNombres(e.target.value)} />
          <input type="password" placeholder="Contraseña" onChange={e => setContraseña(e.target.value)} />
          <button onClick={handleLogin}>Login</button>
        </div>
      )}

      {user && (
        <>
          <p>Conectado como {user.nombres} ({user.tipo_usuario})</p>
          {user.tipo_usuario === 'administrador' && <>
            <CrearUsuario />
          </>}
          {user.tipo_usuario === 'creador' && <>
            <CrearCurso />
            <CambiarEstadoCurso />
            <ConsultarCurso />
          </>}
          {user.tipo_usuario === 'consumidor' && <>
            <SuscripcionCurso />
            <ConsultarSuscripcion />
          </>}
        </>
      )}
    </div>
  )
}

export default App
