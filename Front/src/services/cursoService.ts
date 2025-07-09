import type { Curso } from '../types'

const API = 'http://localhost:3000/cursos'

export async function crearCurso(curso: Curso) {
  const res = await fetch(API, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(curso)
  })
  return res.json()
}

export async function cambiarEstadoCurso(id: number, nuevo_estado: string) {
  const res = await fetch(`${API}/${id}/estado`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ nuevo_estado })
  })
  return res.json()
}

export async function obtenerCurso(id: number) {
  const res = await fetch(`${API}/${id}`)
  return res.json()
}
