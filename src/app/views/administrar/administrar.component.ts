import { Component, OnInit } from '@angular/core';
import { Usuario } from 'src/app/models/usuario.model';
import { UsuarioService } from 'src/app/services/usuario.service';
import { SwalAlertService } from 'src/app/utils/swalAlert.service';
import { Response } from 'src/app/models/response.model';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-administrar',
  templateUrl: './administrar.component.html',
  styleUrls: ['./administrar.component.css'],
})
export class AdministrarComponent implements OnInit {
  usuarios: Usuario[] = [];

  constructor(
    private _usuarioService: UsuarioService,
    private _swealtAlert: SwalAlertService
  ) {}

  ngOnInit(): void {
    this._usuarioService.obtenerUsuarios().subscribe(
      (response: Response) => {
        this.usuarios = response.usuarios;
      },
      (error: HttpErrorResponse) => {
        this._swealtAlert.error(
          'Error ' + error.status,
          'No se han podido obtener los usuarios'
        );
      }
    );
  }

  editarUsuario(usuario: Usuario) {}

  eliminarUsuario(id: string) {
    this._usuarioService.eliminarUsuario(id).subscribe(
      (response: Response) => {
        this._swealtAlert.success(response.message);
      },
      (error: HttpErrorResponse) => {
        this._swealtAlert.error(
          'Error ' + error.status,
          'No se ha podido eliminar el usuario'
        );
      }
    );
  }
}
