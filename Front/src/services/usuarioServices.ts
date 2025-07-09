import type { Usuario } from '../types'

const API = 'http://localhost:3000/usuarios'

export async function crearUsuario(usuario: Usuario) {
  const res = await fetch(API, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(usuario)
  })
  return res.json()
}

export async function obtenerUsuarios() {
  const res = await fetch(API)
  return res.json()
}

export async function obtenerUsuario(id: number) {
  const res = await fetch(`${API}/${id}`)
  return res.json()
}