import { Component, OnInit, Input } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CrudService } from '../../../crud.service';
import { AuthService } from '../../../auth.service';
import { UserServiceService } from '../../../user-service.service';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.scss']
})
export class EditUserComponent implements OnInit {
  user = {}
  editUserForm: FormGroup;
  constructor(private fb: FormBuilder, private userservice: UserServiceService,  private router: Router, private crudService: CrudService, private authService: AuthService) { }

   editUser(editUserForm) {
    console.log("is Valid?: " + editUserForm.valid);
    if (editUserForm.valid) {
      //Save user data via crudService      
      this.crudService.editUser(editUserForm.value)
      // Navigate to the /admin/my-profile 
      this.router.navigate(['/admin/my-profile']);
      console.log(this.editUserForm.value);
    } else {
      console.log("Error: edit user");
    }
   }
  
  
  ngOnInit() {
    this.editUserForm = this.fb.group({
      firstname: [''],
      lastname: [''],
      email: [''],
      phone_number: [''],
      description: ['']
    });
    // console.log(this.userdata);
    this.userservice.displayAllUsers().subscribe(data => {
      // the user shown from the database
      this.user  = data[0];      
   });
  }
}

