import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {
  url: any;
  private registerForm: FormGroup;
  profileImageUrl = "http://placehold.it/180"

  readUrl(event:any) {
    if (event.target.files && event.target.files[0]) {
      var reader = new FileReader();
      reader.onload = (event:any) => {
        this.profileImageUrl = event.target.result;
      }
      reader.readAsDataURL(event.target.files[0]);
    }
  }

  constructor(private fb: FormBuilder, private router: Router, private authService: AuthService) { }

  signUpSubmit(registerForm) {
    console.log("is Valid?: " + registerForm.valid);

    if (registerForm.valid) {
      // Send an http request to login
      // This wont work - let x = this.authService.login();
      
      // Navigate to the home page (or some other page)
      this.authService.login().subscribe(x => {
        // Can you naviate to the path the user tried to go to instead of 
        // always the contact?
        this.router.navigate(['./admin/my-profile']);
      });
      
    } else {
      // Display error messages.
    }
    
   }

  ngOnInit() {
    this.registerForm = this.fb.group({
      firstname: ['', Validators.required],
      lastname: ['', Validators.required],
      email: ['', Validators.required],
      password: ['', Validators.required],
      country: ['', Validators.required],
      phonenumber: ['', Validators.required],
      facebookurl: ['', ],
      instagramurl: ['', ],
      twitterurl: ['', ],
      profession: ['', Validators.required],
      description: ['', Validators.required]

    });
  }

}






