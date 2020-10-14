import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {


  loginForm: FormGroup;
  showPass: Boolean = false;
  loading: Boolean = false;

  constructor(
    private _fb: FormBuilder,
    private _authService: AuthService,
    private _router: Router,
  ) { }

  ngOnInit(): void {
    this.loginForm = this._fb.group({
      user: ["", [Validators.required]],
      pass: ["", [Validators.required]],
    })
  }

  togglePass() {
    this.showPass = !this.showPass;
  }

  get user() {
    return this.loginForm.get("user");
  }
  get pass() {
    return this.loginForm.get("pass");
  }


  submitLog() {
    this.loading = true;
    let formvalues = this.loginForm.value

    console.log("valuers", formvalues);
    this._authService.login(formvalues.user, formvalues.pass)
      .subscribe(resp => {
        console.log("loguin exitoso");
        this._router.navigateByUrl("/admin")
      }, (error) => {
        this.handleError(error);
      });
  }

  handleError(error) {
    this.loading = false;
    console.log("credenciales incorrectas");
  }

}
