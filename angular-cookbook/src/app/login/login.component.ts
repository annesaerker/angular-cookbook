import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
// import { FormBuilder } from '@angular/forms/src/form_builder';
// import { Validators } from '@angular/forms/src/validators';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  
  loginForm: FormGroup;
  // loginForm = new FormGroup ({
  //   username: new FormControl(),
  //   password: new FormControl()
  // });

  // what is the constructor
  // this constructor is connected to the formControlName in the html file
  constructor(private fb: FormBuilder, private router: Router, private authService: AuthService) {
    this.loginForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
   }


   onSubmit(loginForm) {
    console.log("is Valid?: " + loginForm.valid);

    if (loginForm.valid) {
      // Send an http request to login
      // This wont work - let x = this.authService.login();
      
      // Navigate to the home page (or some other page)
      this.authService.login().subscribe(x => {
        // Can you naviate to the path the user tried to go to instead of 
        // always the contact?
        this.router.navigate(['admin/my-profile']);
      });
      
    } else {
      // Display error messages.
    }
   }

  // you can use this to run code manually by asking to run the initializer, instead of running the code automatically in the constructur
  ngOnInit() {
  }

}




