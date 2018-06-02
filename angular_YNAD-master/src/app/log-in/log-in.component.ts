import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { PasswordValidator } from '../passwordValidator';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.scss']
})

export class LogInComponent implements OnInit {
  //declare the form
  loginForm: FormGroup;
    
  constructor(private fb: FormBuilder, private router: Router, private authService: AuthService) {
  };

  loginSubmit(loginForm) {
    // console.log("is Valid?: " + loginForm.valid);
    if (loginForm.valid) {  
      //
      this.authService.login().subscribe(x => {
        // If login is succesfull then navigate to the Admin page
        this.router.navigate(['admin']);
      });
      
    } else {
      // Display error messages.
      console.log("Error: login");
    }
   }

  // Declaring everything inside the form
  ngOnInit() {
    this.loginForm = this.fb.group({
      email: ['', Validators.required],
      password: ['', 
      Validators.compose([
        Validators.required,
        PasswordValidator.getPasswordValidator()
       ]
      )]
    });
  }

}
