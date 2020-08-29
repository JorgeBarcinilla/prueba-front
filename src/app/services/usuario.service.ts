import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Usuario } from '../models/usuario.model';

@Injectable({
  providedIn: 'root',
})
export class UsuarioService {
  headers = new HttpHeaders({ Accept: 'application/json' });

  constructor(private _http: HttpClient) {}

  crearUsuario(usuario: Usuario) {
    return this._http.post(environment.apiurl + 'apiUsuario/crear', usuario, {
      headers: this.headers,
    });
  }
  obtenerUsuarios() {
    return this._http.get(environment.apiurl + 'apiUsuario/', {
      headers: this.headers,
    });
  }
  editarUsuario(usuario: Usuario) {
    return this._http.put(environment.apiurl + 'apiUsuario/editar', usuario, {
      headers: this.headers,
    });
  }
  eliminarUsuario(id: string) {
    return this._http.delete(environment.apiurl + 'apiUsuario/eliminar/' + id, {
      headers: this.headers,
    });
  }
}
