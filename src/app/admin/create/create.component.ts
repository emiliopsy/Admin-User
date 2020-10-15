import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from 'src/app/@models/user.model';
import { HeaderService } from 'src/app/services/header.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateComponent implements OnInit {

  @Input() userToEdit: User; // decorate the property with @Input()


  registerForm: FormGroup;
  existUser: boolean = false;
  imgPlaceHolder: String = "../../../assets/imgs/placeholder-user-image.jpg"
  isFoto: Boolean = false;

  respmsgErr: String = "";
  respmsgOk: String = "";

  loadind: Boolean = false;

  isEditing: Boolean = false;

  constructor(
    private headerService: HeaderService,
    private _fb: FormBuilder,
    private _userService: UserService,
    private router: Router,
  ) {
    this.headerService.title.next("agregar usuario")
  }

  options: any[] = [{ valor: true, text: "Activo" }, { valor: false, text: "Inactivo" }];


  ngOnInit(): void {
    console.log("userToEdit", this.userToEdit);
    if (this.userToEdit) {
      this.registerForm = this._fb.group({
        nrousu: [this.userToEdit.nrousu],
        usuario: [this.userToEdit.usuario, [Validators.required]],
        activo: [this.userToEdit.activo, [Validators.required]],
        clave: [this.userToEdit.clave, [Validators.required]],
        nombre: [this.userToEdit.nombre],
        apellido: [this.userToEdit.apellido],
        email: [this.userToEdit.email, [Validators.required, Validators.email]],
        direccion: [this.userToEdit.direccion],
        telefono: [this.userToEdit.telefono],
        imagen64: [this.userToEdit.imagen64],
      })
      this.userToEdit.imagen64 ? this.isFoto = true : this.isFoto = false;
      this.isEditing = true;
    } else {
      this.registerForm = this._fb.group({
        usuario: ["", [Validators.required]],
        activo: [null, [Validators.required]],
        clave: ["", [Validators.required]],
        nombre: [""],
        apellido: [""],
        email: ["", [Validators.required, Validators.email]],
        direccion: [""],
        telefono: [""],
        imagen64: [null],
      })
    }

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


  addUser() {
    this.respmsgErr = "";
    this.respmsgOk = "";
    this.loadind = true;
    console.log("this.registerForm.value", this.registerForm.value);
    this._userService.addUser(this.registerForm.value)
      .subscribe(resp => {
        this.loadind = false;
        console.log("res", resp.response.pcErr);
        if (resp.response.pcErr) {
          this.respmsgErr = resp.response.pcErr
        } else {
          this.respmsgOk = "Se creo el susario exitosamente"
        }
      }, (eror => { this.handdleError(eror); }))
  }

  handdleError(error) {
    this.loadind = false;
    this.respmsgErr = "Ocurrio un error inesperado"
    console.log("error", error);
  }

  getErrorMessage() {
    if (this.email.hasError('required')) {
      return 'Este campo es obligatorio';
    }
    return this.email.hasError('email') ? 'Tiene que ser un mail real' : '';
  }

  uploadPhoto($event): void {
    console.log("event", $event);
    this.readThis($event.target);
    // this.readThis($event);

  }

  readThis(inputValue: any): void {
    var file: File = inputValue.files[0];
    var myReader: FileReader = new FileReader();

    myReader.onloadend = (e) => {
      this.registerForm.value.imagen64 = myReader.result;
      if (this.registerForm.value.imagen64) {
        this.isFoto = true
      }

    }
    myReader.readAsDataURL(file);
  }



  getfoto(): String {
    return this.registerForm.value.imagen64;
  }

  deleteFoto() {
    console.log("borrar foto");

    this.registerForm.value.imagen64 = null;
    this.isFoto = false;
  }

  cancelEdit() {
    console.log("cancelar la edicion");
    this.router.navigateByUrl("/admin/list")
  }


  confirmEdit() {
    this.respmsgErr = "";
    this.respmsgOk = "";
    this.loadind = true;
    console.log("this.registerForm.value", this.registerForm.value);
    this._userService.editUser(this.registerForm.value)
      .subscribe(resp => {
        this.loadind = false;
        console.log("res", resp.response.pcErr);
        if (resp.response.pcErr) {
          this.respmsgErr = resp.response.pcErr
        } else {
          this.respmsgOk = "Se Guardo el susario exitosamente"
        }
      }, (eror => { this.handdleError(eror); }))
  }

}
