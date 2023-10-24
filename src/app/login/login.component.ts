import { Component } from '@angular/core';
import { FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  form!: FormGroup;
  fb: any;
onSubmit: any;


async OnInit() {
  this.form = this.fb.group({
    username: ['', Validators.email],
    password: ['', Validators.required]
  });
}

}
