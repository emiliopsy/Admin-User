import { User } from './user.model'

export class Request {

  pcaccion: String;
  dsUsuariosDemo: DsUsuariosDemo

  constructor(
    request: Request | {
      pcaccion: String;
      dsUsuariosDemo: DsUsuariosDemo
    }
  ) {
    this.pcaccion = request.pcaccion
    this.dsUsuariosDemo = request.dsUsuariosDemo
  }
}

export class DsUsuariosDemo {
  dsUsuariosDemo: Ttusuarios
  constructor(
    dsUsuariosDemo: DsUsuariosDemo | {
      dsUsuariosDemo: Ttusuarios
    }
  ) {
    this.dsUsuariosDemo = dsUsuariosDemo.dsUsuariosDemo ? dsUsuariosDemo.dsUsuariosDemo : null;
  }
}


export class Ttusuarios {
  ttusuarios: Array<User> | null
  constructor(
    ttusuarios: Ttusuarios | {
      ttusuarios: Array<User> | null
    }
  ) {
    this.ttusuarios = ttusuarios.ttusuarios ? ttusuarios.ttusuarios : null;
  }
}


// {
//   "request": {
//     "pcaccion": "create",
//       "dsUsuariosDemo": {
//       "ttusuarios": [
//         {
//           "nrousu": 1,
//           "usuario": "chess",
//           "activo": true,
//           "clave": "Rbjbnlthckodgitn",
//           "nombre": "chess",
//           "apellido": "chess",
//           "email": null,
//           "direccion": "",
//           "telefono": "",
//           "imagen64": null
//         }
//       ]
//     }
//   }
// }
