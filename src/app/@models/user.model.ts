export class User {
  id?: Number;
  name: String;
  lastName: String;
  email: String;
  photo: String;
  direcction: String;
  phone: String;

  constructor(
    user: User | {
      id?: Number,
      name: String,
      lastName: String,
      email: String,
      photo: String,
      direcction: String,
      phone: String,

    }
  ) {
    this.id = user.id ? user.id : null;
    this.name = user.name;
    this.lastName = user.lastName;
    this.email = user.email;
    this.photo = user.photo ? user.photo : 'placeholder-user-image.jpg';
    this.direcction = user.direcction;
    this.phone = user.phone;
  }
}
