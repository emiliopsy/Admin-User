import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { privateEncrypt } from 'crypto';
import { HeaderService } from 'src/app/services/header.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateComponent implements OnInit {

  registerForm: FormGroup

  constructor(
    private headerService: HeaderService,
    private _fb: FormBuilder,
  ) {
    this.headerService.title.next("agregar usuario")
  }

  ngOnInit(): void {
    this.registerForm = this._fb.group({
      // nrousu: ["", [Validators.required]],
      usuario: ["", [Validators.required]],
      activo: ["", [Validators.required]],
      clave: ["", [Validators.required]],
      nombre: [""],
      apellido: [""],
      email: ["", [Validators.required]],
      direccion: [""],
      telefono: [""],
      imagen64: [""],
    })
  }

  // get nrousu() {
  //   return this.registerForm.get("nrousu");
  // }
  get usuario() {
    return this.registerForm.get("usuario");
  }
  get activo() {
    return this.registerForm.get("activo");
  }
  get clave() {
    return this.registerForm.get("clave");
  }
  get nombre() {
    return this.registerForm.get("nombre");
  }
  get apellido() {
    return this.registerForm.get("apellido");
  }
  get email() {
    return this.registerForm.get("email");
  }
  get direccion() {
    return this.registerForm.get("direccion");
  }
  get telefono() {
    return this.registerForm.get("telefono");
  }
  get imagen64() {
    return this.registerForm.get("imagen64");
  }

}
