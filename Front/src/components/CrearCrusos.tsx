import { useState } from 'react'
import type { Curso } from '../types'
import { crearCurso } from '../services/cursoService'

export default function CrearCurso() {
  const [curso, setCurso] = useState<Curso>({
    nombre: '',
    descripcion: '',
    estado: '',
    id_creador: 0
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCurso({ ...curso, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    const r = await crearCurso(curso)
    alert(JSON.stringify(r))
  }

  return (
    <form onSubmit={handleSubmit}>
      <h3>Crear Curso</h3>
      <input name="nombre" placeholder="Nombre" onChange={handleChange} />
      <input name="descripcion" placeholder="Descripción" onChange={handleChange} />
      <input name="estado" placeholder="Estado" onChange={handleChange} />
      <input name="id_creador" type="number" placeholder="ID Creador" onChange={handleChange} />
      <button>Crear Curso</button>
    </form>
  )
}
