export interface Usuario {
  id: string,
  username: string,
  apellidoPaterno: string,
  apellidoMaterno: string,
  nombre: string,
  nombres: string
  password: string,
  enabled?: boolean,
  accountExpired?: boolean,
  accountLocked?: boolean,
  passwordExpired?: boolean,
  numeroDeEmpleado?: number,
  email?: string,
  sucursal?: string,
  puesto?: string
}

