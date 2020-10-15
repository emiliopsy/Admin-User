export class User {

  nrousu: Number;
  usuario: String;
  activo: Boolean;
  clave: String;
  nombre?: String;
  apellido?: String;
  email: String;
  direccion?: String;
  telefono?: String;
  imagen64?: String;

  constructor(
    user: User | {
      nrousu: Number,
      usuario: String,
      activo: Boolean,
      clave: String,
      nombre?: String,
      apellido?: String,
      email: String,
      direccion?: String,
      telefono?: String,
      imagen64?: String,
    }
  ) {
    this.nrousu = user.nrousu;
    this.usuario = user.usuario;
    this.activo = user.activo;
    this.clave = user.clave;
    this.nombre = user.nombre ? user.nombre : '';
    this.apellido = user.apellido ? user.apellido : '';
    this.email = user.email;
    this.direccion = user.direccion ? user.direccion : "";
    this.telefono = user.telefono ? user.telefono : "";
    this.imagen64 = user.imagen64 ? user.imagen64 : null;
  }
}
