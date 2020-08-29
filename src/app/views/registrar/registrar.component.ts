import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { UsuarioService } from 'src/app/services/usuario.service';
import { Response } from 'src/app/models/response.model';
import { HttpErrorResponse } from '@angular/common/http';
import { SwalAlertService } from 'src/app/utils/swalAlert.service';

@Component({
  selector: 'app-registrar',
  templateUrl: './registrar.component.html',
  styleUrls: ['./registrar.component.css'],
})
export class RegistrarComponent implements OnInit {
  constructor(
    private _usuarioService: UsuarioService,
    private _swealtAlert: SwalAlertService
  ) {}

  formularioRegistro = new FormGroup({
    nombres: new FormControl(null, Validators.required),
    apellidos: new FormControl(null, Validators.required),
    telefono: new FormControl(null, Validators.required),
    correo: new FormControl(null, [Validators.required, Validators.email]),
    direccion: new FormControl(null, Validators.required),
  });

  ngOnInit(): void {}

  guardarUsuario() {
    this._usuarioService.crearUsuario(this.formularioRegistro.value).subscribe(
      (response: Response) => {
        this._swealtAlert.success(response.message);
      },
      (error: HttpErrorResponse) => {
        this._swealtAlert.error(
          'Error ' + error.status,
          'No se ha podido guardar el usuario'
        );
      }
    );
  }
}
