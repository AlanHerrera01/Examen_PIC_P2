import type { Suscripcion } from '../types'

const API = 'http://localhost:3000/suscripciones'

export async function suscribir(s: Suscripcion) {
  const res = await fetch(API, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(s)
  })
  return res.json()
}

export async function cancelarSuscripcion(s: Suscripcion) {
  const res = await fetch(API, {
    method: 'DELETE',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(s)
  })
  return res.json()
}

export async function consultarSuscripcion(usuario_id: number, curso_id: number) {
  const res = await fetch(`${API}/${usuario_id}/${curso_id}`)
  return res.json()
}
