import { Usuario } from './usuario.model';

export interface Response {
  message: string;
  usuarios: Usuario[];
}
