export interface Usuario {
  id?: number
  nombres: string
  apellidos: string
  email: string
  contraseña: string
  tipo_usuario: string
}

export interface Curso {
  id?: number
  nombre: string
  descripcion: string
  estado: string
  id_creador: number
}

export interface Suscripcion {
  id?: number
  usuario_id: number
  curso_id: number
}
