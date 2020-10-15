// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  GetUserUrl: "http://190.210.222.36:8081//web/pdo/DemoWS/demo/obtenerUsuarios",
  GestionarUsuarios: "http://190.210.222.36:8081//web/pdo/DemoWS/demo/gestionarUsuarios",
  AuthUrl: "http://190.210.222.36:8081//static/auth/j_spring_security_check",
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
