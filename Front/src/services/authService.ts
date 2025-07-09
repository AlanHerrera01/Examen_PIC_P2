import type { Usuario } from '../types'

export async function login(email: string, contraseña: string): Promise<Usuario | null> {
  const res = await fetch(`http://localhost:3000/usuarios`)
  const usuarios = await res.json()

  const user = usuarios.find((u: Usuario) => u.email === email && u.contraseña === contraseña)
  return user ?? null
}
